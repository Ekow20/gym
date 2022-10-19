import React from "react";
import heroImg from "../assets/heropic.png";
import heroImgBack from "../assets/hero_image_back.png";
import heart from "../assets/heart.png";
import calories from "../assets/calories.png";
import { motion } from "framer-motion";
import NumberCounter from "number-counter";
const Hero = () => {
  const transition = { duration: 3 };
  return (
    <div className="flex md:flex-row flex-col " id="Home">
      <div className="blur top-16"></div>
      <div className="flex-[3]">
        {/* ................................................................................ */}
        <div
          className="bg-gray-900 rounded-[4rem]  py-4 px-3
          w-fit relative text-white text-lg uppercase mt-16 
          flex items-center justify-start"
        >
          <motion.div
            className="absolute h-[80%] left-2 rounded-[3rem]
            w-20 bg-red-600 z-10"
            initial={{ left: "70%" }}
            whileInView={{ left: 8 }}
            transition={transition}
          ></motion.div>
          <p className="z-20">The best Fitness club in town</p>
        </div>
        {/* ................................................................................ */}
        <div className="text-5xl md:text-7xl font-bold uppercase mt-8 ">
          <div className="">
            <span className="strokeText  ">Shape </span>
            <span>Your</span>
          </div>
          <div className="">
            <span>Ideal body</span>
          </div>
          <div
            className="normal-case text-base font-medium 
          mt-5 tracking-wider "
          >
            <p>
              In here we will help you build your ideal body and live up your
              life to the fullest
            </p>
          </div>
        </div>
        {/* ................................................................................ */}
        <div className="flex gap-8 mt-10 ">
          <div className="">
            <p className="text-3xl flex">
              <NumberCounter start={53} end={100} delay="4" />+
            </p>
            <p className="figText">Expert Coaches</p>
          </div>
          <div className="">
            <p className="text-3xl flex">
              <NumberCounter start={379} end={450} delay="4" />+
            </p>
            <p className="figText">Members joined</p>
          </div>
          <div className="">
            <p className="text-3xl flex">
              <NumberCounter start={10} end={40} delay="4" prefix="+" />+
            </p>
            <p className="figText">Fitness Programs</p>
          </div>
        </div>
        {/* ................................................................................ */}
        <div className="flex gap-5 mt-8">
          <button className="btn">Get Started</button>
          <button className="btnTrans">Learn More</button>
        </div>
      </div>
      {/* -----------------------------------------------------------------------------------------------       */}
      <div
        className="flex-1 relative  md:flex flex-col
         items-end gap-5 pt-5 pr-5 hidden"
      >
        <motion.div
          initial={{ x: -100 }}
          whileInView={{ x: 0 }}
          transition={transition}
          className="flex flex-col gap-3 p-5 rounded-md bg-gray-600 w-fit"
        >
          <img src={heart} alt="" className="w-7" />
          <p className="text-gray-400">Heart Rate</p>
          <p className="text-2xl">114 bpm</p>
        </motion.div>

        <img src={heroImg} alt="" className=" w-[23rem] " />
        <motion.img
          initial={{ opacity: 0, x: 0 }}
          whileInView={{ opacity: 1, x: -200 }}
          transition={transition}
          src={heroImgBack}
          className="absolute top-[25%] w-[15rem] -z-10"
        />
      </div>
    </div>
  );
};

export default Hero;
