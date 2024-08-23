import React from "react";

type Props = {};

const MiddlePart = (props: Props) => {
  return (
    <>
      <div className="middlePartDiv flex flex-col justify-center items-center">
        <h4
          className="text-[#8e85fc] text-lg  font-bold mt-8 "
          style={{ fontFamily: "Poppins" }}
        >
          Model United Nations
        </h4>
        <h5
          className="w-[36rem] text-center text-4xl mt-4 font-semibold"
          style={{ fontFamily: "Poppins" }}
        >
          The Only Model United Nations resource that you need :)
        </h5>
        <h4 className="mt-4 w-[28rem] text-lg text-gray-600  text-center">
          Happily Attend M.U.N Conferences, Learn the skill of diplomacy at your
          comfort zones.
        </h4>
        <br />
        <center>
          <div className="buttonsDiv flex flex-row justify-center items-center">
            <input
              type="button"
              value="Get Started"
              className="bg-[#18171d] rounded-md text-gray-200 py-2 px-4 cursor-pointer transition-all hover:bg-[#25242c]"
            />
            <input
              type="button"
              value="Learn"
              className="bg-white border-gray-800 border-[1.2px] ml-4 py-2 px-6 rounded-md cursor-pointer hover:bg-gray-100 transition-all"
            />
          </div>
        </center>
      </div>
    </>
  );
};

export default MiddlePart;
