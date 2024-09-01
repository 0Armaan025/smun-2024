"use client";
import React, { useState } from "react";
import getContentForTopic from "./getcontent";
import Navbar from "@/components/navbar/Navbar";

type Props = {}; // No props for this component

const LearnPage = (props: Props) => {
  const topics = [
    { id: "points", name: "Points and Motions" },
    { id: "amendments", name: "Amendments" },
    { id: "general", name: "General" },

    { id: "resolution", name: "Resolution" },
    { id: "working-paper", name: "Working Paper" },
    { id: "simulation", name: "Simulation" },
  ];

  const [selectedTopic, setSelectedTopic] = useState<string>(topics[0].id);

  return (
    <>
      <Navbar />
      <div className="flex min-h-screen bg-gray-100">
        <aside className="w-1/4 bg-gray-800 text-white p-6">
          <h2 className="text-3xl font-bold mb-6">Learn about MUN</h2>
          <ul>
            {topics.map((topic) => (
              <li key={topic.id} className="mb-4">
                <button
                  onClick={() => setSelectedTopic(topic.id)}
                  className={`text-lg transition duration-300 ${
                    selectedTopic === topic.id
                      ? "text-gray-300"
                      : "hover:text-gray-300"
                  }`}
                >
                  {topic.name}
                </button>
              </li>
            ))}
          </ul>
        </aside>

        {/* Content Area */}
        <main className="w-3/4 p-8">
          <section key={selectedTopic}>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              {topics.find((topic) => topic.id === selectedTopic)?.name}
            </h3>
            <div
              className="text-gray-700 leading-relaxed"
              dangerouslySetInnerHTML={{
                __html: getContentForTopic(selectedTopic),
              }}
            />
          </section>
        </main>
      </div>
    </>
  );
};

export default LearnPage;
