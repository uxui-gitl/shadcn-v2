import React from "react";
import Image from "next/image";
import Link from "next/link";
import SectionWrapper from "@/components/SectionWrapper";
import styles from "./CaseStudiesSection.module.css";
import OutlinedButtonWithArrow from "@/components/ui/buttons/OutlinedButtonWithArrow";
import SectionHeading from "@/components/SectionHeading";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
const CaseStudiesSection = ({ casestudy, csLayout, bgColor }) => {
  const caseStudyLayout = csLayout;
  const setHeading = 'IIoT  Solution Offerings';
  const setDesc = 'Our IIoT expertise help businesses across various sectors - Manufacturing, Supply Chain, Construction, Transportation, Power Generation, and Smart Cities.';
  const setColor = "#2B1624";
  return (
    <>
      <SectionWrapper BGColor={bgColor} Padding={true}>
        <div className="md:container mx-auto">
          {caseStudyLayout === "1" && (
            <div
              className="flex flex-col md:flex-row justify-start items-center gap-8 w-full h-full md:h-[724px]"
              style={{ color: casestudy[0].color }}
            >
              <div
                className="w-full md:w-1/3 h-full rounded-3xl p-8"
                style={{
                  backgroundImage: `url(${casestudy[0].imageURL})`,
                  backgroundSize: "cover",
                  backgroundPosition: "bottom",
                  backgroundColor: casestudy[0].bgCardColor,
                }}
              >
                <h3 className="text-base font-semibold mb-12">
                  {casestudy[0].title}
                </h3>
                <h1 className="text-5xl font-medium mb-6">
                  {casestudy[0].heading}
                </h1>
                <p className="w-[80%] mb-4">{casestudy[0].description}</p>
              </div>
              <div
                className="flex flex-col w-full md:w-1/3 h-full rounded-3xl gap-8"
                style={{ backgroundColor: "transparent" }}
              >
                <div
                  className="relative w-full h-1/2 rounded-3xl  p-8"
                  style={{
                    color: casestudy[1].color,
                    backgroundColor: casestudy[1].bgCardColor,
                  }}
                >
                  <h1 className="w-[80%] text-3xl font-medium mb-6">
                    {casestudy[1].heading}
                  </h1>
                  <p className="w-[80%] mb-4">{casestudy[1].description}</p>

                  <div className="absolute bottom-4 right-4">
                    <OutlinedButtonWithArrow size={56} />
                  </div>
                </div>
                <div
                  className="relative w-full h-1/2 rounded-3xl  p-8"
                  style={{
                    color: casestudy[2].color,
                    backgroundColor: casestudy[2].bgCardColor,
                  }}
                >
                  <h1 className="w-[80%] text-3xl font-medium mb-6">
                    {casestudy[2].heading}
                  </h1>
                  <p className="w-[80%] mb-4">{casestudy[2].description}</p>

                  <div className="absolute bottom-4 right-4">
                    <OutlinedButtonWithArrow size={56} />
                  </div>
                </div>
              </div>
              <div
                className="flex flex-col w-full md:w-1/3 h-full rounded-3xl gap-8"
                style={{ backgroundColor: "transparent" }}
              >
                <div
                  className="relative w-full h-full md:h-1/2 rounded-3xl  p-8"
                  style={{
                    color: casestudy[3].color,
                    backgroundColor: casestudy[3].bgCardColor,
                  }}
                >
                  <h1 className="w-[80%] text-3xl font-medium mb-6">
                    {casestudy[3].heading}
                  </h1>
                  <p className="w-[80%] mb-4">{casestudy[3].description}</p>

                  <div className="absolute bottom-4 right-4">
                    <OutlinedButtonWithArrow size={56} />
                  </div>
                </div>
                <div
                  className="relative w-full h-full h-[270px] md:h-1/2 rounded-3xl  p-8"
                  style={{
                    color: casestudy[3].color,
                    backgroundColor: casestudy[3].bgCardColor,
                    backgroundImage: `url(${casestudy[3].imageURL})`,
                    backgroundSize: "cover",
                    backgroundPosition: "bottom",
                    backgroundBlendMode: "luminosity",
                    backgroundColor: casestudy[0].color,
                  }}
                >
                 <video
                                        src={casestudy[3].videoURL} // Replace with your video path
                                        autoPlay
                                        loop
                                        muted
                                        className="absolute inset-0 w-full h-full object-cover rounded-3xl"
                                    />
                </div>
              </div>
            </div>
          )}
          {caseStudyLayout === "2" && (
            <div className="flex flex-col md:flex-row justify-start items-center gap-8 w-full h-full md:h-[724px]">
              <div
                className="relative md:w-full md:w-2/3 h-full rounded-3xl p-8 flex flex-col justify-end"
                style={{
                  color: casestudy[0].color,
                  overflow: "hidden", // Ensures no overflow from the video
                }}
              >
                <video
                  src={casestudy[0].videoURL} // Replace with your video path
                  autoPlay
                  loop
                  muted
                  className="absolute inset-0 w-full h-full object-cover z-0"
                />
                <div className="absolute inset-0 z-10">
                  {/* Gradient overlay covering the bottom 50% */}
                  <div
                    className="absolute bottom-0 left-0 w-full h-[80%] bg-gradient-to-t from-black to-transparent"
                    style={{ opacity: 1 }}
                  />
                </div>
                <div className="relative z-20  w-[70%] flex flex-col justify-end">
                  {" "}
                  {/* Ensure content is aligned at the bottom */}
                  <h3 className="text-base font-semibold mb-12">
                    {casestudy[0].title}
                  </h3>
                  <h1 className="text-5xl font-medium mb-6">
                    {casestudy[0].heading}
                  </h1>
                  <p className=" mb-4">{casestudy[0].description}</p>
                </div>
              </div>

              <div
                className="flex flex-col w-full md:w-1/3 h-full rounded-3xl gap-8"
                style={{ backgroundColor: "transparent" }}
              >
                <div
                  className="relative w-full h-1/2 rounded-3xl  p-8"
                  style={{
                    color: casestudy[3].color,
                    backgroundColor: casestudy[3].bgCardColor,
                  }}
                >
                  <h1 className="w-[80%] text-3xl font-medium mb-6">
                    {casestudy[3].heading}
                  </h1>
                  <p className="mb-4">{casestudy[3].description}</p>

                  <div className="absolute bottom-4 right-4">
                    <OutlinedButtonWithArrow size={56} />
                  </div>
                </div>
                <div
                  className="relative w-full h-1/2 rounded-3xl  p-8"
                  style={{
                    color: casestudy[3].color,
                    backgroundColor: casestudy[3].bgCardColor,
                  }}
                >
                  <h1 className=" text-3xl font-medium mb-6">
                    {casestudy[3].heading}
                  </h1>
                  <p className=" mb-4">{casestudy[3].description}</p>

                  <div className="absolute bottom-4 right-4">
                    <OutlinedButtonWithArrow size={56} />
                  </div>
                </div>
              </div>
            </div>
          )}
          {caseStudyLayout === "3" && (
            <div className="flex flex-row justify-start items-center gap-8 w-full h-[724px]">
              <div
                className="w-1/3 h-full rounded-3xl p-8"
                style={{ backgroundColor: "red" }}
              >
                DIV A
              </div>
              <div
                className="flex flex-col w-1/3 h-full rounded-3xl gap-8"
                style={{ backgroundColor: "blue" }}
              >
                <div
                  className="w-full h-1/2 rounded-3xl  p-8"
                  style={{ backgroundColor: "yellow" }}
                >
                  DIV A
                </div>
                <div
                  className="w-full  h-1/2  rounded-3xl  p-8"
                  style={{ backgroundColor: "orange" }}
                >
                  DIV A
                </div>
              </div>
              <div
                className="flex flex-col w-1/3 h-full rounded-3xl gap-8"
                style={{ backgroundColor: "blue" }}
              >
                <div
                  className="w-full h-1/2 rounded-3xl  p-8"
                  style={{ backgroundColor: "yellow" }}
                >
                  DIV A
                </div>
                <div
                  className="w-full  h-1/2  rounded-3xl  p-8"
                  style={{ backgroundColor: "orange" }}
                >
                  DIV A
                </div>
              </div>
            </div>
          )}
          {caseStudyLayout === "4" && (
            <div className="flex flex-row justify-start items-center gap-8 w-full h-[624px]">
              <div
                className="w-2/3 h-full rounded-3xl p-8"
                style={{ backgroundColor: "red" }}
              >
                DIV A
              </div>
              <div
                className="flex flex-col w-1/3 h-full rounded-3xl gap-8"
                style={{ backgroundColor: "blue" }}
              >
                <div
                  className="w-full h-1/2 rounded-3xl  p-8"
                  style={{ backgroundColor: "yellow" }}
                >
                  DIV A
                </div>
                <div
                  className="w-full  h-1/2  rounded-3xl  p-8"
                  style={{ backgroundColor: "orange" }}
                >
                  DIV A
                </div>
              </div>
            </div>
          )}
          {caseStudyLayout === "5" && (
           
            <div
              className="flex flex-col lg:flex-row justify-start items-center gap-8 w-full h-auto lg:h-[362px]"
              style={{ color: casestudy[0].color }}
            >
              <div
                className="w-full lg:w-1/3 h-full rounded-3xl p-8"
                style={{
                  backgroundImage: `url(${casestudy[0].imageURL})`,
                  backgroundSize: "cover",
                  backgroundPosition: "bottom",
                  backgroundColor: casestudy[0].bgCardColor,
                }}
              >
                <h3 className="text-base font-semibold mb-4 lg:mb-12">
                  {casestudy[0].title}
                </h3>
                <h1 className="text-3xl lg:text-5xl font-medium mb-4 lg:mb-6">
                  {casestudy[0].heading}
                </h1>
                <p className="w-full lg:w-[80%] mb-4">
                  {casestudy[0].description}
                </p>
              </div>
              <div
                className="relative w-full lg:w-1/3 h-full rounded-3xl p-8"
                style={{
                  color: casestudy[1].color,
                  backgroundColor: casestudy[1].bgCardColor,
                }}
              >
                <h1 className="text-3xl font-medium mb-4 lg:mb-6">
                  {casestudy[1].heading}
                </h1>
                <p className="mb-4">{casestudy[3].description}</p>
                <div className="absolute bottom-4 right-4">
                  <OutlinedButtonWithArrow size={56} />
                </div>
              </div>
              <div
                className="relative w-full lg:w-1/3 h-full rounded-3xl p-8"
                style={{
                  color: casestudy[2].color,
                  backgroundColor: casestudy[2].bgCardColor,
                }}
              >
                <h1 className="text-3xl font-medium mb-4 lg:mb-6">
                  {casestudy[2].heading}
                </h1>
                <p className="mb-4">{casestudy[3].description}</p>
                <div className="absolute bottom-4 right-4">
                  <OutlinedButtonWithArrow size={56} />
                </div>
              </div>
            </div>
          
          )}

          {/* For IIoT Soltution Page */}

          {caseStudyLayout === "6" && (
            <>
            <SectionHeading
            Heading={setHeading}
            Color={setColor}
            Desc={setDesc}
            center
          ></SectionHeading>
            <div className="flex flex-col gap-8">
              <div className="flex flex-col md:flex-row justify-start items-center gap-8 w-full h-[624px]">
                {/* Grid--One */}
                <div
                  className="relative w-full lg:w-2/3 h-full rounded-3xl p-8 flex flex-col justify-end"
                  style={{
                    color: casestudy[0].color,
                    overflow: "hidden", // Ensures no overflow from the video
                  }}
                >
                  <video
                    src={casestudy[0].videoURL} // Replace with your video path
                    autoPlay
                    loop
                    muted
                    className="absolute inset-0 w-full h-full object-cover z-0"
                  />
                  <div className="absolute inset-0 z-10">
                    {/* Gradient overlay covering the bottom 50% */}
                    <div
                      className="absolute bottom-0 left-0 w-full h-[80%] bg-gradient-to-t from-black to-transparent"
                      style={{ opacity: 1 }}
                    />
                  </div>
                  <div className="relative z-20  w-[100%] flex flex-col justify-end">
                    <div className="w-[70%]">
                      <h3 className="text-base font-semibold mb-12">
                        {casestudy[0].title}
                      </h3>
                      <h1 className="text-5xl font-medium mb-6">
                        {casestudy[0].heading}
                      </h1>
                      <p className=" mb-4">{casestudy[0].description}</p>
                    </div>
                    <div className="absolute bottom-4 right-4">
                      <OutlinedButtonWithArrow size={56} arrowColor="#FFFFFF" />
                    </div>
                  </div>
                </div>

                {/* Grid--Two */}
                <div
                  className="flex flex-col w-full lg:w-1/3 h-full rounded-3xl gap-8"
                  style={{ backgroundColor: casestudy[1].bgCardColor }}
                >
                  <div
                    className="relative w-full h-1/2 rounded-3xl  p-8 overflow-hidden"
                    style={{
                      color: casestudy[1].color,
                      backgroundColor: casestudy[1].bgCardColor,
                    }}
                  >
                    <h1 className="text-5xl font-medium mb-4 lg:mb-6">
                      {casestudy[1].heading}
                    </h1>
                    <p className="mb-4">{casestudy[1].description}</p>
                  </div>
                  <div
                    className="w-full  h-1/2 rounded-3xl  p-8"
                    style={{
                      backgroundImage: `url(${casestudy[1].imageURL})`,
                      backgroundSize: "cover",
                      backgroundPosition: "bottom",
                      backgroundColor: casestudy[1].bgCardColor,
                    }}
                  ></div>
                </div>
              </div>

              <div
                className="flex flex-col lg:flex-row justify-start items-center gap-8 w-full h-auto lg:h-[362px]"
                style={{ color: casestudy[2].color }}
              >



                {/* Grid--Three */}

                <div
                  className="w-full lg:w-1/3 h-full rounded-3xl p-8"
                  style={{
                    backgroundImage: `url(${casestudy[2].imageURL})`,
                    backgroundSize: "cover",
                    backgroundPosition: "bottom",
                    backgroundColor: casestudy[2].bgCardColor,
                  }}
                >
                  <h3 className="text-base font-semibold mb-4 lg:mb-12">
                    {casestudy[2].title}
                  </h3>
                  <h1 className="text-3xl lg:text-5xl font-medium mb-4 lg:mb-6">
                    {casestudy[2].heading}
                  </h1>
                  <p className="w-full lg:w-[80%] mb-4">
                    {casestudy[2].description}
                  </p>
                </div>

                {/* Grid--Four */}
                <div
                  className="relative w-full lg:w-1/3 h-full rounded-3xl p-8"
                  style={{
                    color: casestudy[3].color,
                    backgroundColor: casestudy[3].bgCardColor,
                  }}
                >
                  <h1 className="text-3xl font-medium mb-4 lg:mb-6">
                    {casestudy[3].heading}
                  </h1>
                  <p className="mb-4">{casestudy[3].description}</p>
                  <div className="absolute bottom-4 right-4">
                    <OutlinedButtonWithArrow size={56} />
                  </div>
                </div>


                {/* Grid--Five */}
                <div
                  className="relative w-full lg:w-1/3 h-full rounded-3xl p-8"
                  style={{
                    color: casestudy[4].color,
                    backgroundColor: casestudy[4].bgCardColor,
                  }}
                >
                  <h1 className="text-3xl font-medium mb-4 lg:mb-6">
                    {casestudy[4].heading}
                  </h1>
                  <p className="mb-4">{casestudy[4].description}</p>
                  <div className="absolute bottom-4 right-4">
                    <OutlinedButtonWithArrow size={56} />
                  </div>
                </div>
              </div>
            </div>
            </>)}
        </div>
      </SectionWrapper>
    </>
  );
};

export default CaseStudiesSection;
