import React from "react";

const Join = () => {
  return (
    <div className="resFlex  ">
      <div className="md:text-5xl text-3xl uppercase flex-1 relative">
        <div className="absolute top-0 w-[10rem] h-1 rounded-[20%] bg-red-600 "></div>
        <p className="mt-3">
          <span className="strokeText">ready to</span> level up
        </p>
        <p className="mt-2">
          your body <span className="strokeText">with us?</span>
        </p>
      </div>
      <div className="flex-1 mt-16 md:mt-0">
        <div className="flex justify-between lg:max-w-[70%] px-5 py-3 bg-gray-500 ">
          <input
            type="email"
            className="w-[60%] px-4 bg-transparent focus:outline-none
             placeholder:text-gray-300"
            placeholder="Enter email address here"
          />
          <button className="btn">Join Now</button>
        </div>
      </div>
    </div>
  );
};

export default Join;
