import React from "react";
import { programsData } from "../data/programsData";
import rightArrow from "../assets/rightArrow.png";
const Programs = () => {
  return (
    <div className="" id="Programs">
      <div
        className="flex md:text-5xl justify-center text-4xl flex-wrap 
        font-bold uppercase gap-2 md:gap-5"
      >
        <p className="strokeText">explore our</p>
        <p className="">programs </p>
        <p className="strokeText">to shape you</p>
      </div>

      <div className="flex gap-5 mt-5 flex-wrap justify-center">
        {programsData.map((item) => (
          <div className="card">
            {item.image}
            <p className="text-lg font-bold">{item.heading}</p>
            <p className="leading-7">{item.details}</p>
            <div className="flex gap-5 items-center">
              <p>Join Now</p>
              <img src={rightArrow} alt="" className="scale-75" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Programs;
