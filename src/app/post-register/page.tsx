"use client";
import React, { useEffect, useState } from "react";
import confetti from "canvas-confetti";
import Navbar from "@/components/navbar/Navbar";

type Props = {};

const countries = [
  "USA",
  "Canada",
  "Germany",
  "Japan",
  "Australia",
  "Brazil",
  "India",
  "France",
  "Italy",
  "South Africa",
];

const PostRegisterPage = (props: Props) => {
  const [country, setCountry] = useState("");

  useEffect(() => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });

    const randomCountry =
      countries[Math.floor(Math.random() * countries.length)];
    setCountry(randomCountry);
  }, []);

  const goToHomePage = () => {
    window.location.href = "/";
  };

  const joinDiscord = () => {
    window.open("https://discord.com/invite/your-invite-code", "_blank");
  };

  return (
    <>
      <Navbar />
      <div className="postRegisterPage flex flex-col justify-center items-center h-screen  px-4 sm:px-6 md:px-8 lg:px-16">
        <h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center text-gray-800"
          style={{ fontFamily: "Poppins" }}
        >
          Congratulations for registering! 🥳
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-4 text-center text-gray-600">
          Your country is: <span className="font-semibold">{country}</span>
        </p>
        <button
          onClick={goToHomePage}
          className="mt-8 p-2 sm:p-3 md:p-4 lg:p-5 bg-gray-700 text-white rounded-md font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl hover:bg-gray-500 transition-all"
          style={{ fontFamily: "Poppins" }}
        >
          Go back :)
        </button>
        <button
          onClick={joinDiscord}
          className="mt-4 p-2 sm:p-3 md:p-4 lg:p-5 bg-green-600 text-white rounded-md font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl hover:bg-green-700 transition-all"
          style={{ fontFamily: "Poppins" }}
        >
          Join Discord
        </button>
      </div>
    </>
  );
};

export default PostRegisterPage;
