import React from "react";
import instagram from "../assets/instagram.png";
import logo from "../assets/logo1.png";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";
const Footer = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20 
    border-t-2 border-t-white gap-16 relative"
    >
      <div className="blur top-[30%] right-[20%] "></div>
      <div className="blur top-[30%] right-[60%] "></div>
      <div className="flex gap-20">
        <img src={instagram} className="w-8" />
        <img src={linkedin} className="w-8" />
        <img src={github} className="w-8" />
      </div>
      <div className="">
        <img src={logo} className="w-40" />
      </div>
    </div>
  );
};

export default Footer;
