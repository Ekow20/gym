import React from "react";
import gpic from "../assets/gpic.jpg";
import gpic2 from "../assets/gpic2.jpg";
import gpic3 from "../assets/gpic3.jpg";
import image4 from "../assets/image4.png";
import nb from "../assets/nb.png";
import adidas from "../assets/adidas.png";
import nike from "../assets/nike.png";
import tick from "../assets/tick.png";

const Reasons = () => {
  return (
    <div className="resFlex gap-10" id="Why">
      <div className="flex-1 grid grid-cols-3 gap-3 ">
        <img src={gpic} alt="" className="image row-span-2 " />
        <img src={gpic2} alt="" className="image col-span-2" />
        <img src={gpic3} alt="" className="image " />
        <img src={image4} alt="" className="image " />
      </div>
      <div className="flex-1 flex flex-col gap-6 uppercase ">
        <p className="text-5xl">
          <span className="strokeText">Why</span> choose us?
        </p>
        <div className="flex items-center gap-3">
          <img src={tick} alt="" className="w-9" />
          <p className="">over 140 + coaches</p>
        </div>
        <div className="flex items-center gap-3">
          <img src={tick} alt="" className="w-9" />
          <p className="">train faster and smarter</p>
        </div>
        <div className="flex items-center gap-3">
          <img src={tick} alt="" className="w-9" />
          <p className="">1 free program for new members</p>
        </div>
        <div className="flex items-center gap-3">
          <img src={tick} alt="" className="w-9" />
          <p className="">Reliable partners</p>
        </div>
        <div className="">
          <p className="text-gray-400 mb-2">our partners</p>
          <div className="flex gap-3">
            <img src={nike} alt="" />
            <img src={adidas} alt="" />
            <img src={nb} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reasons;
