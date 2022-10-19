import React, { useState } from "react";
import { testimonialsData } from "../data/testimonialsData";
import leftArrow from "../assets/leftArrow.png";
import rightArrow from "../assets/rightArrow.png";
import { motion } from "framer-motion";
const Testimonials = () => {
  const [selected, setSelected] = useState(0);
  const TesLength = testimonialsData.length;
  return (
    <div className="resFlex" id="Testimonials">
      <div className="uppercase flex flex-col gap-4 flex-1">
        <p className="text-red-500 font-bold">Testimonials</p>
        <p className="strokeText text-[3rem]">What they </p>
        <p className="text-[3rem]">say about us</p>
        <motion.p
          key={selected}
          initial={{ x: -40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -40, opacity: 0 }}
          transition={{ duration: 1 }}
          className="normal-case leading-10"
        >
          {testimonialsData[selected].review}
        </motion.p>
        <p className="">
          <span className="text-red-500">
            {testimonialsData[selected].name}
          </span>{" "}
          - {testimonialsData[selected].status}
        </p>
      </div>

      <div className="flex-1 flex md:gap-32 mt-10 flex-col-reverse gap-5 md:flex-row ">
        <div className="flex items-end gap-5 mx-auto md:mx-0  ">
          <img
            src={leftArrow}
            className="w-7 cursor-pointer"
            onClick={() => {
              selected === 0
                ? setSelected(TesLength - 1)
                : setSelected(selected - 1);
            }}
          />
          <img
            src={rightArrow}
            className="w-7 cursor-pointer"
            onClick={() => {
              selected === TesLength - 1
                ? setSelected(0)
                : setSelected(selected + 1);
            }}
          />
        </div>

        <div className="relative h-[20rem] md:w-[16rem] bg-red-600 ">
          <motion.img
            className="h-full w-full object-cover "
            key={selected}
            initial={{ x: 40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 40, opacity: 0 }}
            transition={{ duration: 1 }}
            src={testimonialsData[selected].image}
          />
          <motion.div
            initial={{ x: -40, opacity: 0.2 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 2, type: "spring" }}
            className="absolute border-4 border-red-600
          -z-10 w-full h-full -top-4 -left-4 hidden md:inline"
          ></motion.div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
