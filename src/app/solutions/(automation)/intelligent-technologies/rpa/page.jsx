"use client";
import EntIntro from "@/components/EntIntro";
import React, { useState } from "react";
import Image from "next/image";
import SectionNav from "@/components/SectionNav";
import InfotechWeeklyAlt from "@/sections/infotechWeeklyAlt/InfotechWeeklyAlt";

/**
 * * Sandeep Rana
 * Logos
 */

import uiPath from "../../../../../../public/logos/rpa/uiPath.svg";
import automationAnywhere from "../../../../../../public/logos/rpa/automation-anywhere.svg";
import powerAutomate from "../../../../../../public/logos/rpa/microsoft-power-automate-logo.jpg";

import OverviewSection from "@/sections/overview/OverviewSection";
import SectionHeading from '@/components/SectionHeading';
import SectionWrapper from '@/components/SectionWrapper';
import CommonCardBackground from '@/components/CommonCardBackground';
import SectionWidthSlider from "@/sections/sectionWithSlider/SectionWithSlider";
import ServiceOfferingSection from'@/sections/serviceOffering/ServiceOfferingSection'

const RPASolution = [
  {
    id: 1,
    CardBGImageUrl:'/rpa/ArtboardBg.png',
    Color:'white',
    cardTitle: "",
    cardIconUrl: '',
    cardHeading: 'Computer Vision',
    cardDesc: 'We specialize in custom video and image analysis tool leveraging advanced',
    isArrow: 'true',
  },
  {
    id: 2,
    CardBGImageUrl:'/rpa/ArtboardBg.png',
    Color:'white',
    cardTitle: "",
    cardIconUrl: '',
    cardHeading: 'Computer Vision',
    cardDesc: 'We specialize in custom video and image analysis tool leveraging advanced',
    isArrow: 'true',
  },
  {
    id: 3,
    CardBGImageUrl:'/rpa/ArtboardBg.png',
    Color:'white',
    cardTitle: "",
    cardIconUrl: '',
    cardHeading: 'Computer Vision',
    cardDesc: 'We specialize in custom video and image analysis tool leveraging advanced',
    isArrow: 'true',
  },   {
    id: 4,
    CardBGImageUrl:'/rpa/ArtboardBg.png',
    Color:'white',
    cardTitle: "",
    cardIconUrl: '',
    cardHeading: 'Computer Vision',
    cardDesc: 'We specialize in custom video and image analysis tool leveraging advanced',
    isArrow: 'true',
  },
]

const page = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [hoveredCard, setHoveredCard] = useState(null);
  return (
    <>
      <EntIntro
        title="Automate Business Operations"
        desc=""
        cta="Let's Connect"
        width="60%"
        video="https://gitl-usa.s3.us-west-1.amazonaws.com/banner1.mp4"
      />
      <>
        <SectionNav
          // Why RPA?
          // Partners
          // Services
          // Use Cases
          // Project Lifecycle

          arr={[
            {
              _id: 1,
              title: "Why RPA?",
              link: "#whyrpa",
            },
            {
              _id: 2,
              title: "Partners",
              link: "#Partners",
            },
            {
              _id: 3,
              title: "Services",
              link: "#Services",
            },
            {
              _id: 4,
              title: "Use Cases",
              link: "#UseCases",
            },
            {
              _id: 5,
              title: "Project Lifecycle",
              link: "#ProjectLifecycle",
            },
          ]}
        />
      </>

      {/* Overview  */}
      <OverviewSection Text={'Our forte lies in upgrading business operations with the high-powered productivity of Robotic Process Automation (RPA). We help you to manage high-volume tasks by'} />

      {/* optimising rpa solution */}
          <SectionWidthSlider
          BGColor="#EFE9FB"
           Heading={'Optimising businesses through RPA solutions'}
           Color={'black'}
           MaxWidth={'40%'}
           CardDataList={RPASolution}
          ></SectionWidthSlider>

      {/* inteligent technologies */}
      <SectionWrapper ID="Platforms">
        <div className="text-left max-w-screen-xl md:max-w-screen-xl mb-5 pb-0 grid grid-cols-1">
          {/* left */}
          <div className="bg-[#FFF] flex items-start flex-col justify-between  relative">
            <div className="w-full md:max-w-[607px]">
              <SectionHeading
                Heading={'Expertise in RPA Platform'}
                Desc={'Our proficiency with AI/ML platforms paves the way for progressive business results with the intersection of innovation and efficiency.'}
              >
              </SectionHeading>
            </div>
            <div className="flex flex-col md:flex-row justify-center py-10 items-center gap-20 md:py-20 mb-5">
              <div>
                <Image src={uiPath} alt="uiPath" width={200} />

              </div>
              <div>
                <Image src={powerAutomate} alt="powerAutomate" width={320} />
              </div>
              <div>
                <Image
                  src={automationAnywhere}
                  alt="automationAnywhere"
                  width={200}
                />
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* service Offerings section */}

      <ServiceOfferingSection id="Benefits" 
      BGColor="#1D162B"
       Heading={'Service Offerings'}
       Desc={'Artificial Intelligence (AI) and Machine Learning (ML) are driving transformative changes, offering multiple benefits that redefine the way you do business.'}
       Color={'white'}
       MaxWidth={'40%'}
       CardDataList={RPASolution}
       >

      </ServiceOfferingSection>
      
      <SectionWrapper id="Benefits" BGColor="#1D162B">
        <div className="grid grid-cols-2 gap-20">
          <div className="">
            <SectionHeading
              Heading={'Service Offerings'}
              Desc={'Artificial Intelligence (AI) and Machine Learning (ML) are driving transformative changes, offering multiple benefits that redefine the way you do business.'}
              Color="white"
            >
            </SectionHeading>
            <div className="my-10">
              <div href="#" class="flex items-center justify-center p-5 text-2xl font-medium text-gray-500 bg-gray-50 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 bg-transparent dark:hover:bg-gray-700 dark:hover:text-white" style={{ borderBottom: '2px solid #43189A' }}>
                <span class="w-full">Get started with our  Figma Design System</span>
                <svg class="w-4 h-4 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </div>
              <div href="#" class="flex items-center justify-center p-5 text-2xl font-medium text-gray-500 bg-gray-50 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 bg-transparent dark:hover:bg-gray-700 dark:hover:text-white" style={{ borderBottom: '2px solid #43189A' }}>
                <span class="w-full">Get started with our  Figma Design System</span>
                <svg class="w-4 h-4 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </div>
              <div href="#" class="flex items-center justify-center p-5 text-2xl font-medium text-gray-500 bg-gray-50 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 bg-transparent dark:hover:bg-gray-700 dark:hover:text-white" style={{ borderBottom: '2px solid #43189A' }}>
                <span class="w-full">Get started with our  Figma Design System</span>
                <svg class="w-4 h-4 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </div>
            </div>
          </div>
          <div className="">
            <CommonCardBackground Color='#000' Item={{ id: 1, Title: 'Consultancy Services', Des: 'We conduct process and platform estimations, capture automation requirements, create business cases, process validations and make clear Standard Operating Procedures (SoPs), ensuring your RPA journey aligns perfectly with your business goals.', ImageUrl: '/rpa/image-10.png' }} style={{ minWidth: '100%', minHeight: '100%' }}></CommonCardBackground>
          </div>
        </div>
      </SectionWrapper>

      {/* project life cycle */}
      <SectionWrapper id="" BGColor="#1D162B">
        <SectionHeading
          Heading={'RPA Project Lifecycle'}
          Desc={'From inception to upheld brilliance, every stage of our project lifecycle is precisely devised to optimize your business processes.'}
          Color="white"
        >
        </SectionHeading>
        <div className="grid grid-cols-2 gap-20">
          <div className="my-10">
            <img src="/bgInforScreen.png"></img>
          </div>
          <div className="">


          </div>
        </div>
      </SectionWrapper>

      {/* Infotech Weekly Updates */}
      <InfotechWeeklyAlt />
    </>
  );
};

export default page;
