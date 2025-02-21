"use client";
import React from "react";
import { motion } from "framer-motion";
import { useRef } from "react";
import useScrollTriggeredCountUp from "./useScrollTriggeredCountUp";
import Image from "next/image";

const HubExpertise = () => {
  const ref = useRef<HTMLDivElement>(null);
  const ref1 = useRef<HTMLDivElement>(null);
  const ref2 = useRef<HTMLDivElement>(null);
  const count = useScrollTriggeredCountUp(ref, 25); // Count-up from 0 to 25
  const count1 = useScrollTriggeredCountUp(ref1, 500); // Count-up from 0 to 500
  const count2 = useScrollTriggeredCountUp(ref2, 15); // Count-up from 0 to 15000 (15k)

  return (
    <div className="bg-[rgb(0,59,153)] bg-[linear-gradient(180deg,_rgba(0,59,153,1)_0%,_rgba(0,98,255,0.5)_47%,_rgba(132,42,203,1)_100%)]">
      <div className="mt-8 flex-col px-10 md:container mx-auto" >
        <div className="flex flex-col items-center justify-end pt-20 min-h-screen relative w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mb-8"
          >
            <h2 className="font-semibold text-[60px] leading-[70px] text-[#ffffff] mb-2">
              Hub of Expertise
            </h2>
            <p className="text-[#d4beff] max-w-[50%] mx-auto text-xl font-[500] leading-8">
              We are here to build edge and bring technology brilliance with the
              finest in the industry.
            </p>
          </motion.div>
          <div className="flex flex-col sm:flex-row justify-center sm:gap-x-20 gap-y-10 my-10">
            <div ref={ref} className="text-center">
              <h3
                className={`relative text-[72px] leading-[70px] text-[#fff] font-bold`}
              >
                {count}
                <span className="absolute -top-2 text-[48px] font-medium leading-[70px]">
                  +
                </span>
              </h3>
              <p className="text-white">Years of Excellence</p>
            </div>
            <div ref={ref1} className="text-center">
              <h3
                className={`relative text-[72px] leading-[70px] text-[#fff] font-bold`}
              >
                {count1}
                <span className="absolute -top-2 text-[48px] font-medium leading-[70px]">
                  +
                </span>
              </h3>
              <p className="text-white">
                Global Reach with Satisfied Customers
              </p>
            </div>
            <div ref={ref2} className="text-center">
              <h3
                className={`relative text-[72px] leading-[70px] text-[#fff] font-bold`}
              >
                {count2}k
                <span className="absolute -top-2 text-[48px] font-medium leading-[70px]">
                  +
                </span>
              </h3>
              <p className="text-white">Man Years of Expertise</p>
            </div>
          </div>
          <div className="relative w-full flex justify-center">
            <div className="relative w-2/3" style={{ height: "50vh" }}>
              <Image
                src="home/globe.svg"
                alt="globe"
                layout="fill"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HubExpertise;
