"use client";
import Navbar from "@/components/navbar/Navbar";
import React, { useState } from "react";

type Props = {};

const ProfilePage = (props: Props) => {
  const [name, setName] = useState("Armaan");
  const [email, setEmail] = useState("armaan33000@gmail.com");
  const [munExperience, setMunExperience] = useState(5);
  const [dob, setDob] = useState("2000-01-01");
  const [isEditing, setIsEditing] = useState(false);

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  return (
    <>
      <Navbar />
      <div className="profilePageDiv flex flex-col justify-center items-center px-4">
        <h3
          className="mt-8 text-3xl md:text-4xl"
          style={{ fontFamily: "Poppins" }}
        >
          Profile 🔥
        </h3>
        <div className="profileForm mt-6 p-6 border-2 border-gray-600 rounded-lg bg-gradient-to-r from-gray-200 to-gray-300 shadow-lg flex flex-col justify-start items-start w-full max-w-lg">
          <div className="flex justify-between items-center w-full">
            <h4 className="text-xl md:text-2xl font-semibold">Your Details</h4>
            <button
              className="edit-btn p-2 md:p-3 transition-all text-center rounded-md cursor-pointer bg-gray-600 text-white font-semibold hover:bg-gray-700"
              onClick={toggleEdit}
              style={{ fontFamily: "Poppins" }}
            >
              {isEditing ? "Save" : "Edit"}
            </button>
          </div>
          <label className="font-semibold text-lg md:text-xl mt-4">Name:</label>
          <input
            type="text"
            className="rounded-md p-2 md:p-3 mt-2 w-full border border-gray-400 focus:border-blue-500 transition duration-300"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ fontFamily: "Poppins" }}
            disabled={!isEditing}
          />
          <label className="font-semibold text-lg md:text-xl mt-4">
            Email:
          </label>
          <input
            type="email"
            className="rounded-md p-2 md:p-3 mt-2 w-full border border-gray-400 focus:border-blue-500 transition duration-300"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ fontFamily: "Poppins" }}
            disabled={!isEditing}
          />

          <label className="font-semibold text-lg md:text-xl mt-4">
            MUN Experience:
          </label>
          <input
            type="range"
            min="0"
            max="15"
            value={munExperience}
            onChange={(e) => setMunExperience(parseInt(e.target.value))}
            className="mt-2 w-full accent-gray-600"
            disabled={!isEditing}
          />
          <p className="mt-1 text-gray-600" style={{ fontFamily: "Poppins" }}>
            {munExperience} MUNs attended
          </p>

          <label className="font-semibold text-lg md:text-xl mt-4">
            Date of Birth (optional):
          </label>
          <input
            type="date"
            className="rounded-sm p-2 md:p-3 mt-2 w-full border border-gray-300"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            style={{ fontFamily: "Poppins" }}
            disabled={!isEditing}
          />
        </div>
        <br />
      </div>
    </>
  );
};

export default ProfilePage;
