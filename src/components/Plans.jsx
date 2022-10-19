import React from "react";
import whiteTick from "../assets/whiteTick.png";
import rightArrow from "../assets/rightArrow.png";
import { plansData } from "../data/plansData";
const Plans = () => {
  return (
    <div className="relative" id="Plans">
      <div className="blur top-5 left-0"></div>
      <div className="blur top-5 right-0"></div>

      <div
        className="flex md:text-5xl justify-center text-4xl flex-wrap 
        font-bold uppercase mb-20 gap-2 md:gap-5"
      >
        <p className="strokeText">Ready to start</p>
        <p className="">your journey</p>
        <p className="strokeText">now with us</p>
      </div>
      <div className="flex justify-center items-center gap-10 flex-col md:flex-row ">
        {plansData.map((item, index) => (
          <div
            className={`${
              index === 1 ? "bg-red-600 md:scale-110" : "bg-gray-500"
            }  p-10 flex flex-col gap-6 w-fit`}
          >
            {item.icon}
            <p className="font-bold">{item.name}</p>
            <p className="text-[3rem] font-bold">$ {item.price}</p>

            <div className="flex flex-col gap-3 font-semibold">
              <div className="flex items-center gap-2 ">
                <img src={whiteTick} width={20} /> {item.features[0]}
              </div>
              <div className="flex items-center gap-2">
                <img src={whiteTick} width={20} />
                {item.features[1]}
              </div>
              <div className="flex items-center gap-2">
                <img src={whiteTick} width={20} />
                {item.features[2]}
              </div>
            </div>

            <div className="flex items-center gap-2">
              <p>See More Benefits</p>
              <img src={rightArrow} alt="" className="h-3 w-4" />
            </div>
            <button className="btnWhite">Join Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
