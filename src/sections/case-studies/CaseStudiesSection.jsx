'use client'
import { useEffect, useState } from "react";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import SectionWrapper from "@/components/SectionWrapper";
import styles from "./CaseStudiesSection.module.css";
import OutlinedButtonWithArrow from "@/components/ui/buttons/OutlinedButtonWithArrow";
import SectionHeading from "@/components/SectionHeading";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Dialog from "@/components/Dialog";
const CaseStudiesSection = ({ casestudy, csLayout, bgColor, style }) => {
  const caseStudyLayout = csLayout;
  const setHeading = 'IIoT  Solution Offerings';
  const setDesc = 'Our IIoT expertise help businesses across various sectors - Manufacturing, Supply Chain, Construction, Transportation, Power Generation, and Smart Cities.';
  const setColor = "#2B1624";

  const [showModal, setshowModal] = useState(false);
  const [tabSection1, setTabSection1] = useState(true);
  const [tabSection2, setTabSection2] = useState(false);
  const [tab1Active, setTab1Active] = useState(true);
  const [tab2Active, setTab2Active] = useState(false);

  function tabsClickHandle(id) {
    if (id == 1) {
      setTab1Active(true);
      setTab2Active(false);
      setTabSection1(true);
      setTabSection2(false);

    } else {
      setTab1Active(false);
      setTab2Active(true);
      setTabSection1(false);
      setTabSection2(true);
    }
  }

  return (
    <>
    {/* dialog  */}
      <Dialog
        shouldShow={showModal}
        onRequestClose={() => {
          setshowModal((prev) => !prev);
        }}
        title="Low Code, No Code Configurable IIoT Accelerators on Azure IoT or AWS IoT"
      >
        <div className="">
          <div className="mb-4 border-b border-gray-200">
            <ul className="flex flex-wrap -mb-px text-sm font-medium text-center">
                <>
                  <li className="me-2">
                    <button
                      onClick={() => tabsClickHandle(1)}
                      className={`inline-block p-4 border-gray-200 border-b-2 rounded-t-lg ${tab1Active == true
                        ? "text-indigo-500 border-b-indigo-500"
                        : "text-slate-950"
                        }`}
                    >
                      {`Low Code, No Code Configurable IIoT Accelerators on Azure IoT or AWS IoT Remote Asset Tracking with Connected Field Service & Predictive Analytics `}
                    </button>
                  </li>
                  <li className="me-2">
                    <button
                      onClick={() => tabsClickHandle(2)}
                      className={`inline-block p-4 border-gray-200 border-b-2 rounded-t-lg ${tab2Active == true
                        ? "text-indigo-500 border-b-indigo-500"
                        : "text-slate-950"
                        }`}
                    >
                      {`IIoT  Accelerator for  shopfloor in  Discrete & Process Manufacturing `}
                    </button>
                  </li>
                </>
            </ul>
          </div>
          <div>
            {/* tab1 */}
            {tabSection1 && (
              <div className="p-4 rounded-lg bg-gray-50">
                <p className="text-xl font-semibold leading-relaxed text-black-500">
                  Solution Features
                </p>

                <div className="grid grid-cols-2 gap-4">
                <ul class="py-6 space-y-4 text-gray-500 list-disc list-inside ">
                  <li>
                  Real-time Monitoring 
                    <ol class="ps-5 mt-2 space-y-1 list-decimal list-inside">
                      <li>Alerts </li>
                      <li>Machine parameter-wise graphical reports </li>
                      <li>Real-time asset tracking </li>
                    </ol>
                  </li>
                  <li>
                  Work Management 
                    <ul class="ps-5 mt-2 space-y-1 list-decimal list-inside">
                      <li>Work Order Generation for Asset Maintenance  </li>
                    </ul>
                  </li>
                  <li>
                  Predictive Maintenance 
                    <ul class="ps-5 mt-2 space-y-1 list-decimal list-inside">
                      <li>Multivariate Azure ML-driven predictive failure analytics </li>
                      
                    </ul>
                  </li>
                </ul>

                <ul class="py-6 space-y-4 text-gray-500 list-disc list-inside ">
                  <li>
                  Service Management 
                    <ol class="ps-5 mt-2 space-y-1 list-decimal list-inside">
                      <li>Service performance monitoring  </li>
                      <li>Expense management and Warranty tracking  </li>
                    </ol>
                  </li>
                  <li>
                  Collaboration and Integration 
                    <ul class="ps-5 mt-2 space-y-1 list-decimal list-inside">
                      <li>Chat collaboration </li>
                      <li>Integration with SAP using file-based data transfer mechanism  </li>
                    </ul>
                  </li>
                  <li>
                  Customer Portal   
                    <ul class="ps-5 mt-2 space-y-1 list-decimal list-inside">
                      <li>Notifications  </li>
                      <li>Reporting and analytics</li>
                      <li>Service contracts (AMC)</li>
                    </ul>
                  </li>
                </ul>
                  </div>
              </div>
            )}
            {/* tab2 */}
            {tabSection2 && (
             <div className="p-4 rounded-lg bg-gray-50">
             <p className="text-xl font-semibold leading-relaxed text-black-500">
               Solution Features
             </p>

             <div className="grid grid-cols-2 gap-4">
             <ul class="py-6 space-y-4 text-gray-500 list-disc list-inside ">
               <li>
               Real-time Monitoring 
                 <ol class="ps-5 mt-2 space-y-1 list-decimal list-inside">
                   <li>Production monitoring  </li>
                   <li>Machine-wise, batch-wise, and part-wise production analysis  </li>
                   <li>Real-time material consumption analysis</li>
                   <li>Energy and utility monitoring </li>
                 </ol>
               </li>
               <li>
               Costing and Optimization 
                 <ul class="ps-5 mt-2 space-y-1 list-decimal list-inside">
                   <li>Usage-based costing </li>
                   <li>Consumption-based costing analysis  </li>
                   <li>OEE (Overall Equipment Effectiveness) optimization  </li>
                   <li>Line efficiency calculation </li>
                 </ul>
               </li>
               <li>
               Quality and Performance Analysis 
                 <ul class="ps-5 mt-2 space-y-1 list-decimal list-inside">
                   <li>42TPM (Total Productive Maintenance) loss reports </li>
                   <li>Rejection analysis </li>
                   <li>Cycle time report analysis </li>
                   <li>Shot count report analysis </li>
                 </ul>
               </li>
               <li>
               Quality reports 
                 <ol class="ps-5 mt-2 space-y-1 list-decimal list-inside">
                   <li>SPC (Statistical Process Control) reports </li>
                   <li>Defect analysis  </li>
                   <li>RCA (Root Cause Analysis) </li>
                   <li>Machine downtime analysis </li>
                 </ol>
               </li>
             </ul>

             <ul class="py-6 space-y-4 text-gray-500 list-disc list-inside ">
          
               <li>
               Tracking and Traceability 
                 <ul class="ps-5 mt-2 space-y-1 list-decimal list-inside">
                   <li>Production order and item-wise tracking </li>
                   <li>MHU (Machine Hour Unit) wise tracking </li>
                   <li>Trace and tracking of MHU equipment </li>
                   <li>Trace and track of parts across the shop floor (discrete manufacturing) </li>
                 </ul>
               </li>
               <li>
               Predictive Maintenance and Uptime    
                 <ul class="ps-5 mt-2 space-y-1 list-decimal list-inside">
                   <li>Predictive maintenance </li>
                   <li>MTTR (Mean Time To Repair) and MTBF (Mean Time Between Failures) reports </li>
                   <li>Safety and Compliance Reports </li>
                 </ul>
               </li>

               <li>
               Alerts and Reporting 
                 <ul class="ps-5 mt-2 space-y-1 list-decimal list-inside">
                   <li>Alerts  </li>
                   <li>Energy consumption report (in kWh)  </li>
                   <li>Customized reporting and analytics </li>
                 </ul>
               </li>
             </ul>
               </div>
           </div>
            )}
          </div>
        </div>
      </Dialog>
    {/* dialog  end*/}

      <SectionWrapper BGColor={bgColor} Padding={true} style={{ ...style }}>
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
                    color: casestudy[1].color,
                    backgroundColor: casestudy[1].bgCardColor,
                  }}
                >
                  <h1 className="w-[80%] text-3xl font-medium mb-6">
                    {casestudy[1].heading}
                  </h1>
                  <p className="mb-4">{casestudy[1].description}</p>

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
                  <h1 className=" text-3xl font-medium mb-6">
                    {casestudy[2].heading}
                  </h1>
                  <p className=" mb-4">{casestudy[2].description}</p>

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
                className="w-full relative lg:w-1/3 h-full rounded-3xl p-8"
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
                {casestudy[0].link && <div className="absolute bottom-4 right-4">
                  <Link href={casestudy[0].link} target="_blank">
                  <OutlinedButtonWithArrow arrowColor="white" size={56}/>
                  </Link>
                </div>}
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
                {casestudy[1].link && <div className="absolute bottom-4 right-4">
                  <Link href={casestudy[1].link} target="_blank">
                  <OutlinedButtonWithArrow size={56}/>
                  </Link>
                </div>}
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
                {casestudy[2].link && <div className="absolute bottom-4 right-4">
                  <OutlinedButtonWithArrow size={56} />
                </div>}
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
                      <div className="absolute bottom-4 right-4" onClick={() => { setshowModal((prev) => !prev); }}>
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
                      <p className="mb-4" dangerouslySetInnerHTML={{ __html: casestudy[1].description }}/>
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
