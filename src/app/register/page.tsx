"use client";
import { db } from "@/firebase/clientApp";
import Navbar from "@/components/navbar/Navbar";
import React, { useState, useEffect } from "react";
import {
  collection,
  addDoc,
  Timestamp,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import Cookies from "js-cookie";

type Props = {};

const RegisterPage = (props: Props) => {
  const [selectedRole, setSelectedRole] = useState<"Delegate" | "EB" | null>(
    null
  );
  const [munExperience, setMunExperience] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState<string | null>(null);
  const [isRegistered, setIsRegistered] = useState(false);

  useEffect(() => {
    const existingName = Cookies.get("name");
    const existingEmail = Cookies.get("email");

    if (existingName || existingEmail) {
      alert("You have already registered or logged in.");
      window.location.href = "/";
    }
  }, []); // Empty dependency array ensures this runs only once when the component mounts.

  const handleRoleSelection = (role: "Delegate" | "EB") => {
    setSelectedRole(role);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const existingName = Cookies.get("name");
    const existingEmail = Cookies.get("email");

    if (existingName && existingEmail) {
      alert("You have already registered or logged in.");
      window.location.href = "/";
      return;
    }

    if (isRegistered) {
      try {
        const userQuery = query(
          collection(db, "users"),
          where("name", "==", name),
          where("email", "==", email),
          where("munName", "==", "SMUN-2024")
        );

        const querySnapshot = await getDocs(userQuery);

        if (!querySnapshot.empty) {
          const userDoc = querySnapshot.docs[0];
          const userData = userDoc.data();

          if (
            userData.role === selectedRole &&
            userData.munExperience === munExperience &&
            userData.dateOfBirth ===
              (dateOfBirth ? Timestamp.fromDate(new Date(dateOfBirth)) : null)
          ) {
            Cookies.set("name", name, { expires: 7 });
            Cookies.set("email", email, { expires: 7 });
            window.location.href = "/";
          } else {
            alert("Details do not match. Please check your information.");
          }
        } else {
          alert("No user found or invalid credentials.");
        }
      } catch (error) {
        console.error("Error logging in: ", error);
        alert("Failed to log in.");
      }
    } else {
      if (!name || !email || !selectedRole) {
        alert("Please fill in all required fields.");
        return;
      }

      const newUser = {
        name,
        email,
        role: selectedRole,
        munExperience,
        dateOfBirth: dateOfBirth
          ? Timestamp.fromDate(new Date(dateOfBirth))
          : null,
        munName: "SMUN-2024",
        createdAt: Timestamp.now(),
      };

      try {
        await addDoc(collection(db, "users"), newUser);
        alert("User registered successfully!");

        Cookies.set("name", name, { expires: 7 });
        Cookies.set("email", email, { expires: 7 });

        setName("");
        setEmail("");
        setSelectedRole(null);
        setMunExperience(0);
        setDateOfBirth(null);
        setIsRegistered(true);
        window.location.href = "/";
      } catch (error) {
        console.error("Error registering user: ", error);
        alert("Failed to register user.");
      }
    }
  };

  return (
    <>
      <Navbar />
      <div className="registerPageDiv flex flex-col justify-center items-center px-4">
        <h3
          className="mt-8 text-3xl md:text-4xl"
          style={{ fontFamily: "Poppins" }}
        >
          {isRegistered ? "Log in here 🔥" : "Register here 🔥"}
        </h3>

        <form
          onSubmit={handleSubmit}
          className="registerForm mt-6 p-6 border-2 border-gray-600 rounded-lg bg-gradient-to-r from-gray-200 to-gray-300 shadow-lg flex flex-col justify-start items-start w-full max-w-lg"
        >
          {isRegistered ? (
            <>
              {/* Login form */}
              <label className="font-semibold text-lg md:text-xl">Name:</label>
              <input
                type="text"
                className="rounded-md p-2 md:p-3 mt-2 w-full border border-gray-400 focus:border-blue-500 transition duration-300"
                placeholder="Ex. Armaan"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{ fontFamily: "Poppins" }}
              />
              <label className="font-semibold text-lg md:text-xl mt-4">
                Email:
              </label>
              <input
                type="email"
                className="rounded-md p-2 md:p-3 mt-2 w-full border border-gray-400 focus:border-blue-500 transition duration-300"
                placeholder="Ex. armaan33000@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ fontFamily: "Poppins" }}
              />
              <div className="flex mt-2 flex-row w-full items-end justify-end text-end">
                <h3
                  className="underline text-purple-500 text-semibold cursor-pointer"
                  onClick={() => setIsRegistered(false)}
                  style={{ fontFamily: "Poppins" }}
                >
                  New?
                </h3>
              </div>
              <h4 className="text-sm mt-1" style={{ fontFamily: "Poppins" }}>
                Please join{" "}
                <a className="text-purple-500 underline cursor-pointer">
                  Discord
                </a>{" "}
                as it's the main communication platform.
              </h4>
              <div className="mt-4 flex justify-center w-full">
                <button
                  type="submit"
                  className="login-btn p-3 md:p-4 transition-all text-center rounded-md cursor-pointer bg-gray-600 text-white font-semibold hover:bg-gray-700 w-full max-w-xs"
                  style={{ fontFamily: "Poppins" }}
                >
                  Log In 🔥
                </button>
              </div>
            </>
          ) : (
            <>
              {/* Registration form */}
              <label className="font-semibold text-lg md:text-xl">Name:</label>
              <input
                type="text"
                className="rounded-md p-2 md:p-3 mt-2 w-full border border-gray-400 focus:border-blue-500 transition duration-300"
                placeholder="Ex. Armaan"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{ fontFamily: "Poppins" }}
              />
              <label className="font-semibold text-lg md:text-xl mt-4">
                Email:
              </label>
              <input
                type="email"
                className="rounded-md p-2 md:p-3 mt-2 w-full border border-gray-400 focus:border-blue-500 transition duration-300"
                placeholder="Ex. armaan33000@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ fontFamily: "Poppins" }}
              />

              <label className="font-semibold text-lg md:text-xl mt-6">
                What do you want to be?
              </label>
              <div className="flex mt-3 w-full">
                <div
                  className={`p-4 flex-1 text-center rounded-l-md cursor-pointer ${
                    selectedRole === "Delegate"
                      ? "bg-gray-600 text-white shadow-lg transform scale-105"
                      : "bg-white text-gray-600 border border-gray-300"
                  } transition-all duration-300 hover:scale-105`}
                  onClick={() => handleRoleSelection("Delegate")}
                  style={{ fontFamily: "Poppins" }}
                >
                  Delegate
                </div>

                <div
                  className={`p-4 flex-1 text-center rounded-r-md cursor-pointer ${
                    selectedRole === "EB"
                      ? "bg-gray-600 text-white shadow-lg transform scale-105"
                      : "bg-white text-gray-600 border border-gray-300"
                  } transition-all duration-300 hover:scale-105`}
                  onClick={() => handleRoleSelection("EB")}
                  style={{ fontFamily: "Poppins" }}
                >
                  EB
                </div>
              </div>
              <label className="mt-2" style={{ fontFamily: "Poppins" }}>
                Please make sure that you can enjoy being an EB or a delegate!
              </label>
              <label className="font-semibold text-lg md:text-xl mt-4">
                MUN Experience:
              </label>
              <input
                type="range"
                min="0"
                max="10"
                step="1"
                value={munExperience}
                onChange={(e) => setMunExperience(Number(e.target.value))}
                className="w-full mt-2"
              />
              <label className="block mt-2">
                {munExperience} {munExperience === 10 ? "+" : ""}
              </label>

              <label className="font-semibold text-lg md:text-xl mt-4">
                Date of Birth (optional):
              </label>
              <input
                type="date"
                value={dateOfBirth ?? ""}
                onChange={(e) => setDateOfBirth(e.target.value)}
                className="rounded-md p-2 md:p-3 mt-2 w-full border border-gray-400 focus:border-blue-500 transition duration-300"
                style={{ fontFamily: "Poppins" }}
              />

              <div className="mt-6 flex justify-center w-full">
                <button
                  type="submit"
                  className={`p-3 md:p-4 transition-all text-center rounded-md cursor-pointer bg-gray-600 text-white font-semibold hover:bg-gray-700 w-full max-w-xs ${
                    !name || !email || !selectedRole ? "hover:animate-ping" : ""
                  }`}
                  style={{ fontFamily: "Poppins" }}
                  disabled={!name || !email || !selectedRole}
                >
                  Register 🔥
                </button>
              </div>
            </>
          )}
        </form>
      </div>
    </>
  );
};

export default RegisterPage;
