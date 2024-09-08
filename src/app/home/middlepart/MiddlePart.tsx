"use client";
import React from "react";
import "./middlepart.css";
import Link from "next/link";
import Cookies from "js-cookie";

type Props = {};

const MiddlePart = (props: Props) => {
  return (
    <>
      <div className="middlePartDiv flex flex-col justify-center items-center">
        <h4
          className="text-[#8e85fc] text-lg font-bold mt-8 text-center"
          style={{ fontFamily: "Poppins" }}
        >
          Youth Leader Conference Model United nations (YLCMUN)
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
          <a href="https://forms.gle/sZnqdp5iWJsqCG678" target="_blank">
            <input
              type="button"
              value="Get Started"
              className="bg-[#18171d] rounded-md text-gray-200 py-2 px-4 cursor-pointer transition-all hover:bg-[#25242c]"
            />
          </a>
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
            href="https://www.britannica.com/story/whats-the-difference-between-emoji-and-emoticons"
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
              Important Information for YLCMUN 2024
            </h3>
            <br />
            <h3
              className="text-2xl bg-black text-white cursor-pointer hover:bg-gray-800  transition-all w-40 p-2 rounded-md"
              style={{ fontFamily: "Poppins" }}
            >
              Committees
            </h3>
            <br />
            <div className="committeesDiv flex flex-row justify-center items-center mb-4      ">
              <div className="committeeDiv flex flex-col justify-center items-start w-80 bg-gray-600 rounded-md p-4 cursor-pointer hover:scale-105 transition-all">
                <h4
                  className="mt-2 text-lg font-semibold text-start text-white "
                  style={{ fontFamily: "Poppins" }}
                >
                  <span className="font-semibold mr-2">Committee Name:</span>
                  UNHRC (United Nations Humans Right Council){" "}
                </h4>
                <h5 className="text-start text-sm w-60 mt-4  text-gray-300">
                  Hey! This is the only life we have, the only opportunity,
                  let's utilise all the opportunities we get and have the best
                  fun! ;)
                </h5>
              </div>
              <div className="committeeDiv flex  ml-4 flex-col justify-center items-start w-80 bg-gray-600 rounded-md p-4 cursor-pointer hover:scale-105 transition-all">
                <h4
                  className="mt-2 text-lg font-semibold text-start text-white "
                  style={{ fontFamily: "Poppins" }}
                >
                  <span className="font-semibold mr-2">Committee Name:</span>
                  UNHRC (United Nations Humans Right Council){" "}
                </h4>
                <h5 className="text-start text-sm w-60 mt-4  text-gray-300">
                  Hey! This is the only life we have, the only opportunity,
                  let's utilise all the opportunities we get and have the best
                  fun! ;)
                </h5>
              </div>
              <div className="committeeDiv ml-4 flex flex-col justify-center items-start w-80 bg-gray-600 rounded-md p-4 cursor-pointer hover:scale-105 transition-all">
                <h4
                  className="mt-2 text-lg font-semibold text-start text-white "
                  style={{ fontFamily: "Poppins" }}
                >
                  <span className="font-semibold mr-2">Committee Name:</span>
                  UNHRC (United Nations Humans Right Council){" "}
                </h4>
                <h5 className="text-start text-sm w-60 mt-4  text-gray-300">
                  Hey! This is the only life we have, the only opportunity,
                  let's utilise all the opportunities we get and have the best
                  fun! ;)
                </h5>
              </div>
            </div>

            <hr className="w-full h-[1.4px] mb-4 mt-4 bg-gray-400" />
            <h3
              className="text-2xl bg-black text-white cursor-pointer hover:bg-gray-800  transition-all w-72 p-2 rounded-md"
              style={{ fontFamily: "Poppins" }}
            >
              Meet the Secretariat
            </h3>
            <br />
            <div className="committeesDiv flex flex-row justify-center items-center mb-4      ">
              <div className="committeeDiv flex flex-col justify-center items-start w-80 bg-gray-600 rounded-md p-4 cursor-pointer hover:scale-105 transition-all">
                <h4
                  className="mt-2 text-lg font-semibold text-start text-white "
                  style={{ fontFamily: "Poppins" }}
                >
                  <span className="font-semibold mr-2">SG:</span>
                  UNHRC (United Nations Humans Right Council){" "}
                </h4>
                <h5 className="text-start text-sm w-60 mt-4  text-gray-300">
                  Hey! This is the only life we have, the only opportunity,
                  let's utilise all the opportunities we get and have the best
                  fun! ;)
                </h5>
              </div>
              <div className="committeeDiv flex  ml-4 flex-col justify-center items-start w-80 bg-gray-600 rounded-md p-4 cursor-pointer hover:scale-105 transition-all">
                <h4
                  className="mt-2 text-lg font-semibold text-start text-white "
                  style={{ fontFamily: "Poppins" }}
                >
                  <span className="font-semibold mr-2">DSG:</span>
                  UNHRC (United Nations Humans Right Council){" "}
                </h4>
                <h5 className="text-start text-sm w-60 mt-4  text-gray-300">
                  Hey! This is the only life we have, the only opportunity,
                  let's utilise all the opportunities we get and have the best
                  fun! ;)
                </h5>
              </div>
              <div className="committeeDiv ml-4 flex flex-col justify-center items-start w-80 bg-gray-600 rounded-md p-4 cursor-pointer hover:scale-105 transition-all">
                <h4
                  className="mt-2 text-lg font-semibold text-start text-white "
                  style={{ fontFamily: "Poppins" }}
                >
                  <span className="font-semibold mr-2">
                    Head of Finance: Here it is, someone here
                  </span>{" "}
                </h4>
                <h5 className="text-start text-sm w-60 mt-4  text-gray-300">
                  Hey! This is the only life we have, the only opportunity,
                  let's utilise all the opportunities we get and have the best
                  fun! ;)
                </h5>
              </div>
            </div>
            <hr className="w-full h-[1.4px] mb-4 mt-4 bg-gray-400" />
            <h3
              className="text-2xl bg-black text-white cursor-pointer hover:bg-gray-800  transition-all w-72 p-2 rounded-md"
              style={{ fontFamily: "Poppins" }}
            >
              Meet the chairs
            </h3>
            <br />
            <div className="chairsDiv  mb-4 flex flex-row justify-center items-center">
              <div className="chair ml-4 flex flex-col justify-center items-start w-64 bg-gray-600 rounded-md p-4 cursor-pointer hover:scale-105 transition-all ">
                <img
                  src="https://cdn.discordapp.com/attachments/1252560950897283162/1282281135451410506/image.png?ex=66dec8de&is=66dd775e&hm=8063295a9714e5cb52e06ce5991561de6dc41666a5fcf16aaa17e123d54729fb&"
                  alt="person img here, hehe"
                  className="rounded-md shadow-md w-full"
                />
                <div className="textDiv w-full flex flex-row justify-start items-start">
                  <h2
                    className="mt-2 text-white text-semibold"
                    style={{ fontFamily: "Poppins" }}
                  >
                    Someone name here
                  </h2>
                </div>
                <div className="textDiv w-full flex flex-row justify-center items-start">
                  <h2
                    className="mt-2 text-gray-300 text-semibold text-sm"
                    style={{ fontFamily: "Poppins" }}
                  >
                    "I like coding! :D"
                  </h2>
                </div>
              </div>
              <div className="chair ml-4 flex flex-col justify-center items-start w-64 bg-gray-600 rounded-md p-4 cursor-pointer hover:scale-105 transition-all ">
                <img
                  src="https://cdn.discordapp.com/attachments/1252560950897283162/1282281135451410506/image.png?ex=66dec8de&is=66dd775e&hm=8063295a9714e5cb52e06ce5991561de6dc41666a5fcf16aaa17e123d54729fb&"
                  alt="person img here, hehe"
                  className="rounded-md shadow-md w-full"
                />
                <div className="textDiv w-full flex flex-row justify-start items-start">
                  <h2
                    className="mt-2 text-white text-semibold"
                    style={{ fontFamily: "Poppins" }}
                  >
                    Someone name here
                  </h2>
                </div>
                <div className="textDiv w-full flex flex-row justify-center items-start">
                  <h2
                    className="mt-2 text-gray-300 text-semibold text-sm"
                    style={{ fontFamily: "Poppins" }}
                  >
                    "I like coding! :D"
                  </h2>
                </div>
              </div>
              <div className="chair ml-4 flex flex-col justify-center items-start w-64 bg-gray-600 rounded-md p-4 cursor-pointer hover:scale-105 transition-all ">
                <img
                  src="https://cdn.discordapp.com/attachments/1252560950897283162/1282281135451410506/image.png?ex=66dec8de&is=66dd775e&hm=8063295a9714e5cb52e06ce5991561de6dc41666a5fcf16aaa17e123d54729fb&"
                  alt="person img here, hehe"
                  className="rounded-md shadow-md w-full"
                />
                <div className="textDiv w-full flex flex-row justify-start items-start">
                  <h2
                    className="mt-2 text-white text-semibold"
                    style={{ fontFamily: "Poppins" }}
                  >
                    Someone name here
                  </h2>
                </div>
                <div className="textDiv w-full flex flex-row justify-center items-start">
                  <h2
                    className="mt-2 text-gray-300 text-semibold text-sm"
                    style={{ fontFamily: "Poppins" }}
                  >
                    "I like coding! :D"
                  </h2>
                </div>
              </div>
              <div className="chair ml-4 flex flex-col justify-center items-start w-64 bg-gray-600 rounded-md p-4 cursor-pointer hover:scale-105 transition-all ">
                <img
                  src="https://cdn.discordapp.com/attachments/1252560950897283162/1282281135451410506/image.png?ex=66dec8de&is=66dd775e&hm=8063295a9714e5cb52e06ce5991561de6dc41666a5fcf16aaa17e123d54729fb&"
                  alt="person img here, hehe"
                  className="rounded-md shadow-md w-full"
                />
                <div className="textDiv w-full flex flex-row justify-start items-start">
                  <h2
                    className="mt-2 text-white text-semibold"
                    style={{ fontFamily: "Poppins" }}
                  >
                    Someone name here
                  </h2>
                </div>
                <div className="textDiv w-full flex flex-row justify-center items-start">
                  <h2
                    className="mt-2 text-gray-300 text-semibold text-sm"
                    style={{ fontFamily: "Poppins" }}
                  >
                    "I like coding! :D"
                  </h2>
                </div>
              </div>
            </div>
            <br />
            <hr className="w-full h-[1.4px] mb-4 mt-4 bg-gray-400" />
            <h3
              className="text-2xl bg-black text-white cursor-pointer hover:bg-gray-800  transition-all w-72 p-2 rounded-md"
              style={{ fontFamily: "Poppins" }}
            >
              Conference Details:
            </h3>
            <br />
            <div className="tilesRow flex flex-row justify-center items-center mb-4">
              <div className="infoTile flex flex-col justify-start text-start items-start bg-white p-4 rounded-md w-[22rem] cursor-pointer hover:bg-gray-100 transition-all ">
                <h2 className="font-semibold text-gray-800 text-2xl">Date:</h2>
                <h3>
                  Not yet decided, but in March for sure!, 🌐 Virtual/Online
                  (Zoom)
                </h3>
              </div>
              <div className="infoTile ml-4 flex flex-col justify-start text-start items-start bg-white p-4 rounded-md w-[24rem] cursor-pointer hover:bg-gray-100 transition-all ">
                <h2 className="font-semibold text-gray-800 text-2xl">
                  Team (delegation size):
                </h2>
                <h3>
                  Solo / Duo (both works! just make sure to inform in the
                  discord!)
                </h3>
              </div>
              <div className="infoTile ml-4 flex flex-col justify-start text-start items-start bg-white p-4 rounded-md w-[16rem] cursor-pointer hover:bg-gray-100 transition-all ">
                <h2 className="font-semibold text-gray-800 text-2xl">Prize:</h2>
                <h3>Certificates (welp, we are poor)</h3>
              </div>
            </div>

            <div className="tilesRow flex flex-row justify-center items-center mb-2">
              <div className="infoTile flex flex-col justify-start text-start items-start bg-white p-4 rounded-md w-[22rem] cursor-pointer hover:bg-gray-100 transition-all ">
                <h2 className="font-semibold text-gray-800 text-2xl">For:</h2>
                <h3>Everyone who's interested to take part and learn! :D</h3>
              </div>
              <div className="infoTile ml-4 flex flex-col justify-start text-start items-start bg-white p-4 rounded-md w-[24rem] cursor-pointer hover:bg-gray-100 transition-all ">
                <h2 className="font-semibold text-gray-800 text-2xl">
                  Time and platform:
                </h2>
                <h3>Coming soon...</h3>
                <h3>
                  Discord:{" "}
                  <span className="text-purple-500 underline mr-1 ">
                    Join here!,
                  </span>
                  for conference: Zoom
                </h3>
              </div>
              <div className="infoTile ml-4 flex flex-col justify-start text-start items-start bg-white p-4 rounded-md w-[16rem] cursor-pointer hover:bg-gray-100 transition-all ">
                <h2 className="font-semibold text-gray-800 text-2xl">
                  Max delegates:
                </h2>
                <h3>60 for each committee, 60*3 = 180 in total!</h3>
              </div>
            </div>
            <div className="buttonsDivNew flex flex-row justify-center items-center mt-4 mb-4">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSduYSijQdoNs26OvZBoI07u345BeLuoLj6jr-bC6YUnpDtCuw/viewform"
                target="_blank"
              >
                <input
                  type="button"
                  value="Register (volunteer)"
                  className="bg-gray-800 cursor-pointer hover:bg-gray-700 transition-all text-xl text-white p-2 rounded-sm w-52"
                />
              </a>
              <a href="https://forms.gle/sZnqdp5iWJsqCG678" target="_blank">
                <input
                  type="button"
                  value="Register (delegate)"
                  className="bg-transparent border-[1.5px] border-black  cursor-pointer hover:bg-white ml-4 transition-all text-xl text-black hover:text-black p-2 rounded-sm w-52"
                />
              </a>
            </div>
          </center>
        </div>
      </div>
    </>
  );
};

export default MiddlePart;
