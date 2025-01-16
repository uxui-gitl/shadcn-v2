"use client";
import React, { useRef, useEffect, useState } from "react";
import useScrollTriggeredCountUp from "@/components/home/useScrollTriggeredCountUp";
import SectionWrapperNew from "@/components/SectionWrapperNew";

function HubExperties() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);

  const count1 = useScrollTriggeredCountUp(ref1, 25); // Count-up from 0 to 25
  const count2 = useScrollTriggeredCountUp(ref2, 500); // Count-up from 0 to 500
  const count3 = useScrollTriggeredCountUp(ref3, 15); // Count-up from 0 to 15000 (15k)
  const count4 = useScrollTriggeredCountUp(ref4, 1000); // Count-up from 0 to 15000 (15k)


  return (
    <SectionWrapperNew
      bgColor={"bg-primary-600"}
      sectionHeading={"Hub of Expertise"}
      sectionDesc={
        "We are here to build an edge and bring technology brilliance with the finest in industry"
      }
      sectionTextColor="text-neutral-white"
      sectionDescColor="text-neutral-white"
      sectionHeadingLayout="center"
      style={{
        background: `url(/homeNew/globe.svg), linear-gradient(360deg, #5F22D9 12.04%, #0c031f 57.96%)`,
        paddingTop: "50px",
        paddingBottom: "50px",

        backgroundPosition: "bottom center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover", // Optional: ensures the image covers the div area
      }}
    >
      <div className=" py-0 md:pt-10 text-center md:text-left">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-16">
          <div className="" ref={ref1}>
            <h1 className="text-heading-03 mb-2 md:text-display-02  font-bold text-white">
              {count1}
              <sup className="text-normal">+</sup>
            </h1>
            <p className="text-body-02 md:text-heading-04  text-primary-10">Years in Business</p>
          </div>
          <div className="" ref={ref2}>
            <h1 className="text-heading-03 mb-2 md:text-display-02  font-bold text-white">
              {count2}
              <sup>+</sup>
            </h1>
            <p className="text-body-02 md:text-heading-04  text-primary-10">Customers Worldwide</p>
          </div>
          <div className="" ref={ref3}>
            <h1 className="text-heading-03 mb-2 md:text-display-02  font-bold text-white">
              {count3}k<sup>+</sup>
            </h1>
            <p className="text-body-02 md:text-heading-04  text-primary-10">
              Man years of Experience
            </p>
          </div>
          <div className="" ref={ref4}>
            <h1 className="text-heading-03 mb-2 md:text-display-02  font-bold text-white">
              {count4}
              <sup>+</sup>
            </h1>
            <p className="text-body-02 md:text-heading-04  text-primary-10">Implementation Sites</p>
          </div>
        </div>
      </div>
    </SectionWrapperNew>
  )
}


export default HubExperties;