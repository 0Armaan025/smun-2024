import React from "react";
import "./committeespage.css";
import Navbar from "@/components/navbar/Navbar";

const committees = [
  {
    name: "United Nations Security Council (UNSC)",
    agenda: "Addressing Cybersecurity Threats to Global Peace",
    maxDelegates: 30,
  },
  {
    name: "World Health Organization (WHO)",
    agenda: "Global Pandemic Response and Preparedness",
    maxDelegates: 40,
  },
  {
    name: "United Nations Human Rights Council (UNHRC)",
    agenda: "Combating Racial Discrimination and Xenophobia",
    maxDelegates: 25,
  },
  {
    name: "International Atomic Energy Agency (IAEA)",
    agenda: "Nuclear Disarmament and Non-Proliferation",
    maxDelegates: 25,
  },
  {
    name: "United Nations Environment Programme (UNEP)",
    agenda: "Tackling Climate Change and Environmental Degradation",
    maxDelegates: 30,
  },
];

const Page = () => {
  return (
    <>
      <Navbar />
      <div className="committees-page p-8 bg-gray-100">
        <h1
          className="text-4xl font-bold text-center mb-8"
          style={{ fontFamily: "Poppins" }}
        >
          Committees
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {committees.map((committee, index) => (
            <div
              key={index}
              className="committee-card bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform"
            >
              <h2 className="text-2xl font-semibold mb-4">{committee.name}</h2>
              <p className="text-gray-700 mb-2">Agenda: {committee.agenda}</p>
              <p className="text-gray-500">
                Max Delegates: {committee.maxDelegates}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Page;
