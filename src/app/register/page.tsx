"use client";
import { db } from "@/firebase/clientApp";
import Navbar from "@/components/navbar/Navbar";
import React, { useState } from "react";
import {
  collection,
  query,
  where,
  getDocs,
  addDoc,
  doc,
  updateDoc,
  Timestamp,
} from "firebase/firestore";
type Props = {};

const RegisterPage = (props: Props) => {
  const [selectedRole, setSelectedRole] = useState<"Delegate" | "EB" | null>(
    null
  );
  const [munExperience, setMunExperience] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);

  const handleRoleSelection = (role: "Delegate" | "EB") => {
    setSelectedRole(role);
  };

  // const handleSubmit = async (event: any) => {
  //   event.preventDefault();
  //   const { name, problem } = event.target.elements;

  //   const newPatient = {
  //     name: name.value,
  //     problem: problem.value,
  //     role: selectedRole,
  //     date: Timestamp.now(),
  //   };

  //   const assignedRoom = assignRoom(newPatient) as any;

  //   if (assignedRoom) {
  //     const roomDocRef = doc(db, "rooms", assignedRoom.id);
  //     const roomPatients = assignedRoom.patientsArray || [];
  //     const updatedPatientsList = [...roomPatients, newPatient];

  //     try {
  //       await updateDoc(roomDocRef, { patientsArray: updatedPatientsList });

  //       await addDoc(collection(db, "patients"), newPatient);

  //       setRooms((prevRooms: any) =>
  //         prevRooms.map((room: any) =>
  //           room.id === assignedRoom.id
  //             ? { ...room, patientsArray: updatedPatientsList }
  //             : room
  //         )
  //       );
  //       setPatients((prevPatients) => [...prevPatients, newPatient] as any);
  //       alert("Patient added successfully!");
  //     } catch (error) {
  //       console.error("Error adding patient: ", error);
  //       alert("Failed to add patient to the database.");
  //     }
  //   } else {
  //     alert("No available rooms");
  //   }
  // };

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

        <div className="registerForm mt-6 p-6 border-2 border-gray-600 rounded-lg bg-gradient-to-r from-gray-200 to-gray-300 shadow-lg flex flex-col justify-start items-start w-full max-w-lg">
          {isRegistered ? (
            <>
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
                  className="login-btn p-3 md:p-4 transition-all text-center rounded-md cursor-pointer bg-gray-600 text-white font-semibold hover:bg-gray-700 w-full max-w-xs"
                  style={{ fontFamily: "Poppins" }}
                >
                  Log In 🔥
                </button>
              </div>
            </>
          ) : (
            <>
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
                Please make sure that you can enjoy being an EB or a delegate!{" "}
              </label>
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
              />
              <p
                className="mt-1 text-gray-600"
                style={{ fontFamily: "Poppins" }}
              >
                {munExperience} MUNs attended
              </p>

              <label className="font-semibold text-lg md:text-xl mt-4">
                Date of Birth (optional):
              </label>
              <input
                type="date"
                className="rounded-sm p-2 md:p-3 mt-2 w-full border border-gray-300"
                style={{ fontFamily: "Poppins" }}
              />

              <div className="flex mt-2 flex-row w-full items-end justify-end text-end">
                <h3
                  className="underline text-purple-500 text-semibold cursor-pointer"
                  onClick={() => setIsRegistered(true)}
                  style={{ fontFamily: "Poppins" }}
                >
                  Already registered?
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
                  className="register-btn p-3 md:p-4 transition-all text-center rounded-md cursor-pointer bg-gray-600 text-white font-semibold hover:bg-gray-700 w-full max-w-xs"
                  style={{ fontFamily: "Poppins" }}
                >
                  Register 🔥
                </button>
              </div>
            </>
          )}
        </div>
        <br />
      </div>
    </>
  );
};

export default RegisterPage;
