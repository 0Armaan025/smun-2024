import React from "react";
import "./middlepart.css";
import Link from "next/link";

type Props = {};

const MiddlePart = (props: Props) => {
  return (
    <>
      <div className="middlePartDiv flex flex-col justify-center items-center ">
        <h4
          className="text-[#8e85fc] text-lg font-bold mt-8 text-center"
          style={{ fontFamily: "Poppins" }}
        >
          School Model United Nations (SMUN)
        </h4>
        <h5
          className="w-full md:w-[36rem] text-center text-2xl md:text-4xl mt-4 font-semibold"
          style={{ fontFamily: "Poppins" }}
        >
          The Only Model United Nations resource that you need :)
        </h5>
        <h4 className="mt-4 w-full md:w-[28rem] text-lg text-gray-600 text-center">
          Happily Attend M.U.N Conferences, Learn the skill of diplomacy at your
          comfort zones.
        </h4>
        <br />
        <div className="buttonsDiv flex flex-col md:flex-row justify-center items-center gap-4">
          <Link href="/register">
            <input
              type="button"
              value="Get Started"
              className="bg-[#18171d] rounded-md text-gray-200 py-2 px-4 cursor-pointer transition-all hover:bg-[#25242c]"
            />
          </Link>
          <input
            type="button"
            value="Learn"
            className="bg-white border-gray-800 border-[1.2px] py-2 px-6 rounded-md cursor-pointer hover:bg-gray-100 transition-all"
          />
        </div>
        <div className="spacer mt-16"></div>
        <div className="centerRow flex flex-col md:flex-row justify-center items-center gap-4">
          <div className="centerItem rounded-md cursor-pointer hover:scale-105 transition-all bg-gray-200 p-4 flex flex-col justify-center items-start w-full md:w-[22rem]">
            <h3 className="text-2xl">•◡•</h3>
            <h4
              className="mt-4 text-lg font-semibold"
              style={{ fontFamily: "Poppins" }}
            >
              Have fun!
            </h4>
            <h5 className="text-start text-sm">
              Hey! This is the only life we have, the only opportunity, let's
              utilise all the opportunities we get and have the best fun! ;)
            </h5>
          </div>
          <div className="centerItem rounded-md cursor-pointer hover:scale-105 transition-all bg-gray-200 p-4 flex flex-col justify-center items-start w-full md:w-[22rem]">
            <h3 className="text-2xl">(ง'̀-'́)ง</h3>
            <h4
              className="mt-4 text-lg font-semibold"
              style={{ fontFamily: "Poppins" }}
            >
              Learn!
            </h4>
            <h5 className="text-start text-sm">
              Life never stops us teaching, so we should also never stop
              learning! Let's utilise this to learn more about countries and
              M.U.Ns
            </h5>
          </div>
          <div className="centerItem rounded-md cursor-pointer hover:scale-105 transition-all bg-gray-200 p-4 flex flex-col justify-center items-start w-full md:w-[22rem]">
            <h3 className="text-2xl">╍●‿●╍</h3>
            <h4
              className="mt-4 text-lg font-semibold"
              style={{ fontFamily: "Poppins" }}
            >
              Network!
            </h4>
            <h5 className="text-start text-sm">
              Maybe it's the time to team up with some friends, make a
              delegation team, learn and debate the world issues together!
            </h5>
          </div>
        </div>
        <br />
        <center>
          <a
            href="https://www.quora.com/Do-you-prefer-emoticons-or-emoji"
            target="_blank"
            className="mt-8 text-xs md:text-xs "
          >
            Experimenting with emoticons ;)
          </a>
        </center>
        <br />
        <div className="important-info-div flex flex-col bg-gray-200 h-full w-full">
          <center>
            <h3
              className="mt-8 text-3xl md:text-4xl text-gray-800"
              style={{ fontFamily: "Poppins" }}
            >
              Important Information for SMUN 2024
            </h3>
            <div className="informationInformationDiv  mt-8 flex flex-wrap justify-center items-center gap-4 sm:m-4 mx-4">
              <div className="impInfoBox bg-white flex hover:bg-gray-100 transition-all cursor-pointer flex-col justify-center items-start text-start w-full sm:w-[18rem] md:w-[22rem] p-4 rounded-md">
                <strong className="font-bold text-xl md:text-2xl text-gray-800">
                  Agenda:
                </strong>
                <span className="text-gray-800">
                  Ensuring Access to education for refugees and displaced
                  persons
                </span>
              </div>
              <div className="impInfoBox bg-white flex hover:bg-gray-100 transition-all cursor-pointer flex-col justify-center items-start text-start w-full sm:w-[18rem] md:w-[22rem] p-4 rounded-md">
                <strong className="font-bold text-xl md:text-2xl text-gray-800">
                  Date:
                </strong>
                <span className="text-gray-800">7th to 8th October, 2024</span>
                <span className="text-gray-800">
                  🌐 Virtual / Online (Google Meet)
                </span>
              </div>
              <div className="impInfoBox bg-white flex hover:bg-gray-100 transition-all cursor-pointer flex-col justify-center items-start text-start w-full sm:w-[18rem] md:w-[22rem] p-4 rounded-md">
                <strong className="font-bold text-xl md:text-2xl text-gray-800">
                  Committee:
                </strong>
                <span className="text-gray-800">
                  Disarmament and International Security Council (DISEC)
                </span>
              </div>
            </div>
            <div className="anotherInformationBox sm:m-4 mx-4 mt-8 flex flex-wrap justify-center items-center gap-4">
              <div className="impInfoBox bg-white flex hover:bg-gray-100 transition-all cursor-pointer flex-col justify-center items-start text-start w-full sm:w-[18rem] md:w-[22rem] p-4 rounded-md">
                <strong className="font-bold text-xl md:text-2xl text-gray-800">
                  For:
                </strong>
                <span className="text-gray-800">Everyone who's interested</span>
              </div>
              <div className="impInfoBox bg-white flex hover:bg-gray-100 transition-all cursor-pointer flex-col justify-center items-start text-start w-full sm:w-[18rem] md:w-[22rem] p-4 rounded-md">
                <strong className="font-bold text-xl md:text-2xl text-gray-800">
                  Time:
                </strong>
                <span className="text-gray-800">Coming soon...</span>
              </div>
              <div className="impInfoBox bg-white flex hover:bg-gray-100 transition-all cursor-pointer flex-col justify-center items-start text-start w-full sm:w-[18rem] md:w-[22rem] p-4 rounded-md">
                <strong className="font-bold text-xl md:text-2xl text-gray-800">
                  Team/delegation size:
                </strong>
                <span className="text-gray-800">
                  Single/Duo (1/2), both work! Up to you.
                </span>
              </div>
            </div>
            <div className="anotherInformationBox sm:m-4 mx-4 mt-8 flex flex-wrap justify-center items-center gap-4">
              <div className="impInfoBox bg-white flex hover:bg-gray-100 transition-all cursor-pointer flex-col justify-center items-start text-start w-full sm:w-[18rem] md:w-[22rem] p-4 rounded-md">
                <strong className="font-bold text-xl md:text-2xl text-gray-800">
                  Join:
                </strong>
                <a
                  href=""
                  target="_blank"
                  className="text-purple-500 underline underline-offset-4"
                >
                  Discord for updates
                </a>
              </div>
              <div className="impInfoBox bg-white flex hover:bg-gray-100 transition-all cursor-pointer flex-col justify-center items-start text-start w-full sm:w-[18rem] md:w-[22rem] p-4 rounded-md">
                <strong className="font-bold text-xl md:text-2xl text-gray-800">
                  Maximum delegates:
                </strong>
                <a href="" target="_blank" className="">
                  70
                </a>
              </div>
              <div className="impInfoBox bg-red-500 flex hover:bg-red-600 text-white transition-all cursor-pointer flex-col justify-center items-center text-start w-full sm:w-[18rem] md:w-[22rem] h-[5.5rem] p-4 rounded-md">
                <Link href="/register">
                  <h3 className="text-2xl md:text-3xl">Register :)</h3>
                </Link>
              </div>
            </div>
            <br />
          </center>
        </div>
      </div>
    </>
  );
};

export default MiddlePart;
