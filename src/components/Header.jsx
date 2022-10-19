import React, { useState } from "react";
import logo from "../assets/logo1.png";
import bars from "../assets/bars.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex justify-between py-4 md:py-8 items-center">
      <img src={logo} alt="" className="h-16" />
      <ul className="md:flex hidden text-white gap-7">
        <a href="#Home">Home</a>
        <a href="#Programs">Programs</a>
        <a href="#Why">Why us</a>
        <a href="#Plans">Plans</a>
        <a href="#Testimonials">Testimonials</a>
      </ul>
      <button className="md:flex hidden btnWhite ">Join Now</button>
      {!isOpen && (
        <div
          onClick={() => setIsOpen(true)}
          className="md:hidden bg-gray-900 rounded-md p-3 fixed top-4 right-4 z-50"
        >
          <img src={bars} alt="" className="w-6 h-6" />
        </div>
      )}

      <div
        className={`fixed top-4 right-4 flex flex-col gap-8 z-50 md:hidden
      bg-gray-900  p-10 transition-all ease-in-out duration-200 text-lg font-semibold
       ${isOpen ? "scale-100" : "scale-x-0"} `}
      >
        <a onClick={() => setIsOpen(false)} href="#Home" className="">
          Home
        </a>
        <a onClick={() => setIsOpen(false)} href="#Programs" className="">
          Programs
        </a>
        <a onClick={() => setIsOpen(false)} href="#Why" className="">
          Why Us
        </a>
        <a onClick={() => setIsOpen(false)} href="#Plans" className="">
          Plans
        </a>
        <a onClick={() => setIsOpen(false)} href="#Testimonials" className="">
          Testimonials
        </a>
      </div>
    </div>
  );
};

export default Header;
