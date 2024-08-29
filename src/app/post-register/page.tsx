"use client";
import {
  collection,
  query,
  where,
  getDocs,
  updateDoc,
  doc,
  setDoc,
} from "firebase/firestore";
import React, { useEffect, useRef, useState } from "react";
import confetti from "canvas-confetti";
import Navbar from "@/components/navbar/Navbar";
import { db, auth } from "../../firebase/clientApp"; // Adjust the path as necessary
import Cookies from "js-cookie";

type Props = {};

const PostRegisterPage = (props: Props) => {
  const [country, setCountry] = useState<string | undefined>(undefined);
  const [spinning, setSpinning] = useState(false);
  const [countries, setCountries] = useState<string[]>([]);
  const [countrySet, setCountrySet] = useState(false); // Track if the country is already set
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const userEmail = Cookies.get("email");
    const userName = Cookies.get("name");

    // Redirect if no cookies for email or name
    if (!userEmail || !userName) {
      window.location.href = "/register";
      return;
    }

    const userCountry = Cookies.get("country");

    if (userCountry) {
      setCountry(userCountry);
      setCountrySet(true);
    } else {
      fetchCountries();
    }

    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });

    // Draw the wheel on the canvas only if no country is set
    if (!countrySet) {
      drawWheel();
    }
  }, [countries, countrySet]);

  const fetchCountries = async () => {
    try {
      const countriesFromFirestore = await getCountries();
      setCountries(
        countriesFromFirestore
          .filter((c: any) => c.taken === "false")
          .map((c: any) => c.name)
      );
    } catch (error) {
      console.error("Error fetching countries: ", error);
    }
  };

  const getCountries = async () => {
    const countriesRef = collection(db, "countries");
    const q = query(countriesRef, where("taken", "==", "false"));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  };

  const updateUserCountry = async (
    email: string,
    name: string,
    country: string
  ) => {
    const userRef = collection(db, "users");
    const q = query(
      userRef,
      where("email", "==", email),
      where("name", "==", name)
    );
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach(async (doc) => {
      const userDocRef = doc.ref;
      await updateDoc(userDocRef, { country });
    });
  };

  const addCountriesToFirestore = async (countryName: string) => {
    const countryRef = doc(db, "countries", countryName);
    await setDoc(countryRef, { taken: "true" }, { merge: true });
  };

  const drawWheel = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const numSegments = countries.length;
    const angle = (2 * Math.PI) / numSegments;
    const radius = canvas.width / 2;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.translate(radius, radius);

    for (let i = 0; i < numSegments; i++) {
      const startAngle = angle * i;
      const endAngle = angle * (i + 1);

      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.arc(0, 0, radius, startAngle, endAngle);
      ctx.lineTo(0, 0);
      ctx.fillStyle = `hsl(${(i / numSegments) * 360}, 70%, 80%)`;
      ctx.fill();

      ctx.save();
      ctx.rotate(angle * i + angle / 2);
      ctx.textAlign = "right";
      ctx.fillStyle = "black";
      ctx.font = "bold 16px Arial";
      ctx.fillText(countries[i], radius - 10, 10);
      ctx.restore();
    }

    ctx.translate(-radius, -radius);
  };

  const spinWheel = () => {
    if (spinning || countrySet) return; // Disable spinning if a country is already set

    setSpinning(true);

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const numSegments = countries.length;
    const angle = (2 * Math.PI) / numSegments;
    const spinAngle = Math.random() * 2 * Math.PI;
    const spinDuration = 2000; // Duration of the spin in milliseconds

    let startTime: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / spinDuration, 1);
      const spinRotation =
        (spinAngle + 2 * Math.PI * 5 * progress) % (2 * Math.PI);

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.save();
      ctx.translate(canvas.width / 2, canvas.height / 2);
      ctx.rotate(spinRotation);
      ctx.translate(-canvas.width / 2, -canvas.height / 2);
      drawWheel();
      ctx.restore();

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setSpinning(false);
        const resultIndex = Math.floor((spinRotation % (2 * Math.PI)) / angle);
        const selectedCountry = countries[resultIndex];
        setCountry(selectedCountry);
        handleCountrySelection(selectedCountry);
      }
    };

    requestAnimationFrame(animate);
  };

  const handleCountrySelection = async (selectedCountry: string) => {
    try {
      // Get user data from cookies
      const userEmail = Cookies.get("email");
      const userName = Cookies.get("name");

      if (userEmail && userName) {
        // Update the user document in Firestore
        await updateUserCountry(userEmail, userName, selectedCountry);

        // Set the "country" cookie
        Cookies.set("country", selectedCountry);

        // Optionally, you can also mark the country as taken
        await addCountriesToFirestore(selectedCountry);

        setCountrySet(true); // Mark country as set
      }
    } catch (error) {
      console.error("Error updating country: ", error);
    }
  };

  const goToHomePage = () => {
    window.location.href = "/";
  };

  const joinDiscord = () => {
    window.open("https://discord.com/invite/your-invite-code", "_blank");
  };

  return (
    <>
      <Navbar />
      <div className="postRegisterPage flex flex-col justify-center items-center h-screen px-4 sm:px-6 md:px-8 lg:px-16">
        <h1
          className="text-3xl sm:text-3xl mt-60 md:text-3xl lg:text-4xl font-bold text-center text-gray-800"
          style={{ fontFamily: "Poppins" }}
        >
          Congratulations for registering! 🥳
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-4 text-center text-gray-600">
          Your country is:{" "}
          <span className="font-semibold">{country || "Not selected"}</span>
        </p>
        <canvas
          ref={canvasRef}
          width={300}
          height={300}
          style={{
            borderRadius: "50%",
            border: "none",
            backgroundColor: "#f5f5f5",
            marginTop: "20px",
          }}
        ></canvas>
        <button
          onClick={spinWheel}
          className={`mt-8 p-2 sm:p-3 md:p-4 lg:p-5 ${
            countrySet ? "bg-gray-500 cursor-not-allowed" : "bg-blue-600"
          } text-white rounded-md font-semibold text-md sm:text-md md:text-xl lg:text-xl hover:${
            countrySet ? "" : "bg-blue-500"
          } transition-all`}
          style={{ fontFamily: "Poppins" }}
          disabled={countrySet}
        >
          Spin the Wheel!
        </button>

        <button
          onClick={goToHomePage}
          className="mt-4 p-2 sm:p-3 md:p-4 lg:p-5 bg-gray-700 text-white rounded-md font-semibold text-md sm:text-md md:text-xl lg:text-xl hover:bg-gray-500 transition-all"
          style={{ fontFamily: "Poppins" }}
        >
          Go back :)
        </button>
        <button
          onClick={joinDiscord}
          className="mt-4 p-2 sm:p-3 md:p-4 lg:p-5 bg-blue-700 text-white rounded-md font-semibold text-md sm:text-md md:text-xl lg:text-xl hover:bg-blue-500 transition-all"
          style={{ fontFamily: "Poppins" }}
        >
          Join Discord
        </button>
      </div>
    </>
  );
};

export default PostRegisterPage;
