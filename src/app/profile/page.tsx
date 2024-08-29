"use client";
import Navbar from "@/components/navbar/Navbar";
import React, { useState } from "react";

type Props = {};

const ProfilePage = (props: Props) => {
  const [muns, setMuns] = useState([
    {
      name: "SMUN",
      date: "7 and 8th October",
      mode: "Virtual",
      status: "upcoming",
    },
    {
      name: "JMUN",
      date: "15th September",
      mode: "In-Person",
      status: "going",
    },
  ]);

  const unregisterMun = (index: number) => {
    const updatedMuns = [...muns];
    updatedMuns[index].status = "unregistered";
    setMuns(updatedMuns);
  };

  return (
    <>
      <Navbar />
      <div className="profilePageDiv flex flex-col justify-center items-center px-4">
        <center>
          <h3 className="mt-4 text-4xl">
            Profile Page coming soon, please go to register from home page...
          </h3>
        </center>
        {/* <h3
          className="mt-8 text-3xl md:text-4xl"
          style={{ fontFamily: "Poppins" }}
        >
          Profile 🔥
        </h3>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          {muns.map((mun, index) => (
            <div
              key={index}
              className="munCard p-4 hover:cursor-pointer hover:scale-105 transition-all border-2 border-gray-600 rounded-lg bg-gradient-to-r from-gray-200 to-gray-300 shadow-lg flex flex-col justify-between w-full max-w-lg"
            >
              <h4 className="text-xl md:text-2xl font-semibold">{mun.name}</h4>
              <p className="text-lg ">Date: {mun.date}</p>
              <p className="text-lg ">Mode: {mun.mode}</p>
              <p className="text-lg ">Status: {mun.status}</p>
              {mun.status === "upcoming" && (
                <button
                  className="unregister-btn mt-4 p-2 md:p-3 transition-all text-center rounded-md cursor-pointer bg-gray-600 text-white font-semibold hover:bg-gray-700"
                  onClick={() => unregisterMun(index)}
                  style={{ fontFamily: "Poppins" }}
                >
                  Unregister
                </button>
              )}
            </div>
          ))}
        </div> */}
      </div>
    </>
  );
};

export default ProfilePage;
