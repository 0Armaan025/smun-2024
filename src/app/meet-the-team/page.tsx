"use client";
import React from "react";
import "./teamspage.css";
import Navbar from "@/components/navbar/Navbar";

const generalTeam = [
  {
    name: "John Doe",
    role: "Secretary-General",
    image: "/images/john.jpg",
  },
  {
    name: "Jane Smith",
    role: "Deputy Secretary-General",
    image: "/images/jane.jpg",
  },
  {
    name: "Mark Lee",
    role: "Head of Finance",
    image: "/images/mark.jpg",
  },
  {
    name: "Anna Kim",
    role: "Head of Media",
    image: "/images/anna.jpg",
  },
];

const chairpersons = [
  {
    name: "Alice Johnson",
    committee: "United Nations Security Council (UNSC)",
    image: "/images/alice.jpg",
    quote: "Ensuring peace through diplomacy.",
  },
  {
    name: "Robert Williams",
    committee: "World Health Organization (WHO)",
    image: "/images/robert.jpg",
    quote: "Health for all, leaving no one behind.",
  },
  {
    name: "Samantha Green",
    committee: "United Nations Human Rights Council (UNHRC)",
    image: "/images/samantha.jpg",
    quote: "Defending human dignity globally.",
  },
  {
    name: "David Brown",
    committee: "International Atomic Energy Agency (IAEA)",
    image: "/images/david.jpg",
    quote: "Building a world free of nuclear threats.",
  },
];

const TeamsPage = () => {
  return (
    <>
      <Navbar />
      <div className="teams-page p-8 bg-gray-100">
        <h1
          className="text-4xl font-bold text-center mb-8"
          style={{ fontFamily: "Poppins" }}
        >
          Meet the Secretariat
        </h1>

        {/* General Team Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6">General Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 cursor-pointer">
            {generalTeam.map((member, index) => (
              <div
                key={index}
                className="team-card bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-center">
                  {member.name}
                </h3>
                <p className="text-gray-700 text-center">{member.role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Chairpersons Section */}
        <section>
          <h2 className="text-3xl font-semibold mb-6">Meet the Chairpersons</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 cursor-pointer">
            {chairpersons.map((chairperson, index) => (
              <div
                key={index}
                className="team-card bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform"
              >
                <img
                  src={chairperson.image}
                  alt={chairperson.name}
                  className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-center">
                  {chairperson.name}
                </h3>
                <p className="text-gray-600 text-center mb-2 italic">
                  {chairperson.committee}
                </p>
                <blockquote className="text-gray-500 text-center">
                  "{chairperson.quote}"
                </blockquote>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default TeamsPage;
