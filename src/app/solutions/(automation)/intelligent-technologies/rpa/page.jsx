"use client";
import EntIntro from "@/components/EntIntro";
import Subscription from "@/components/Subscription";
import React, { useState } from "react";
import Image from "next/image";
import clsx from "clsx";

import Icon from "@mdi/react";
import Link from "next/link";
import { mdiArrowRight } from "@mdi/js";
import SectionNav from "@/components/SectionNav";
import InfotechWeeklyAlt from "@/sections/infotechWeeklyAlt/InfotechWeeklyAlt";
import { mdiCheckboxMultipleMarked } from "@mdi/js";

import Capabilities from "@/components/Capabilities";
import inforCloudSuite from "../../../../../../public/inforCloudSuite.png";
import Dynamic365 from "../../../../../../public/Dynamic365.png";
import Oracle from "../../../../../../public/Oracle.png";
import Azure from "../../../../../../public/azure.png";
import RPAPlaceholder from "../../../../../../public/RPAPlaceholder.png";

/**
 * * Sandeep Rana
 * Logos
 */

import uiPath from "../../../../../../public/logos/rpa/uiPath.svg";
import automationAnywhere from "../../../../../../public/logos/rpa/automation-anywhere.svg";
import powerAutomate from "../../../../../../public/logos/rpa/microsoft-power-automate-logo.jpg";

import MLExpertise from "../../../../../../public/MLExpertise.png";
import scalable1 from "../../../../../../public/scalable1.png";
import scalable2 from "../../../../../../public/scalable2.png";
import scalable3 from "../../../../../../public/scalable3.png";
import scalable4 from "../../../../../../public/scalable4.png";
import scalable5 from "../../../../../../public/scalable5.png";
import scalable6 from "../../../../../../public/scalable6.png";
import styles from "./page.module.css";
import WhySection from "@/components/WhySection";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import MSAzure from "../../../../../../public/ai-ml/ms-azure.png";
import GoogleAI from "../../../../../../public/ai-ml/google-ai-logo.png";
import TensorFlow from "../../../../../../public/ai-ml/tensorflow-logo.png";

import Abstract from "@/components/Abstract";
import OverviewSection from "@/sections/overview/OverviewSection";
import SectionHeading from '@/components/SectionHeading';
import SectionWrapper from '@/components/SectionWrapper';
import CommonCardBackground from '@/components/CommonCardBackground';

const RPASolution = [
  { id: 1, Title: 'Increase Productivity', Des: 'Speed up operations with smart work of RPA, delivering proficient service to your customers and increasing your ROI.', BGColor: '#1D162B', BGImageUrl: '/rpa/ArtboardBg.png', ImageUrl: '/rpa/image-10.png' },
  { id: 2, Title: 'Gain Accurate Outcomes', Des: 'Automate the time-consuming and error-prone manual tasks and get consistent, error-free results while strengthening trust in your services.', BGColor: '#1D162B', BGImageUrl: '/rpa/ArtboardBg.png', ImageUrl: '/rpa/image-10.png' },
  { id: 3, Title: 'Ensure Compliance & Consistency', Des: 'Manage contract workflows, form updates, and compliance notifications, adhering to regulations with precision', BGColor: '#1D162B', BGImageUrl: '/rpa/ArtboardBg.png', ImageUrl: '/rpa/image-10.png' },
  { id: 4, Title: 'Expertise in RPA Platform', Des: 'Speed up operations with smart work of RPA, delivering proficient service to your customers and increasing your ROI.', BGColor: '#1D162B', BGImageUrl: '/rpa/ArtboardBg.png', ImageUrl: '/rpa/image-10.png' },
]

const RPAServiceOfferings = [
  {
    _id: 1,
    title: "Consultation Services",
    desc: "We conduct process and platform estimations, capture automation requirements, create business cases, process validations and make clear Standard Operating Procedures (SoPs), ensuring your RPA journey aligns perfectly with your business goals.",
    cta: "Know More",
    ctaUrl: "/",
    image: "/rpa/Service-offeringConsultation-Services.jpg",
  },
  {
    _id: 2,
    title: "Feasibility Check Services",
    desc: "Our expert team design RPA pilot and build Proof of Concepts (PoCs) taking your RPA vision into consideration.",
    cta: "Know More",
    ctaUrl: "/",
    image: "/rpa/Service-offeringFeasibility-Check-Services.jpg",
  },
  {
    _id: 3,
    title: "RPA Deployment ",
    desc: "We install / configure automation scripts with precision followed by continuous enhancements, run end-to-end testing, manage QA(Quality assurance) processes and carefully document the code.",
    cta: "Know More",
    ctaUrl: "/",
    image: "/rpa/Service-offeringRPA-Deployment.jpg",
  },
  {
    _id: 4,
    title: "RPA Managed Services ",
    desc: "We maintain and monitor your RPA application and Bot for their excellent performance, offering ongoing support and driving continuous improvement, ensuring efficient operations.",
    cta: "Know More",
    ctaUrl: "/",
    image: "/rpa/Service-offeringRPA-Managed-Services.jpg",
  },
];

const ConsiderRPA = [
  {
    _id: 1,
    title: "Increase Productivity",
    desc: "Speed up operations with smart work of RPA, delivering proficient service to your customers and increasing your ROI.",
    cta: "Know More",
    ctaUrl: "/",
    image: "/rpa/IncreasedProductivity.png",
  },
  {
    _id: 2,
    title: "Gain Accurate Outcomes",
    desc: "Automate the time-consuming and error-prone manual tasks and get consistent, error-free results while strengthening trust in your services.",
    cta: "Know More",
    ctaUrl: "/",
    image: "/rpa/GainAccurateOutcomes.png",
  },
  {
    _id: 3,
    title: "Ensure Compliance and Consistency",
    desc: "Manage contract workflows, form updates, and compliance notifications, adhering to regulations with precision, consistency, reducing the risk of noncompliance and the hassle of audits.",
    cta: "Know More",
    ctaUrl: "/",
    image: "/rpa/EnsureCompliance.png",
  },
  // {
  //   _id: 4,
  //   title: "Strengthen Potential",
  //   desc: "Enable employees to focus on more meaningful and strategic endeavors, helping them to deliver attentive experience to customers.",
  //   cta: "Know More",
  //   ctaUrl: "/",
  //   image: "/rpa/StrengthenPotential.png",
  // },
  {
    _id: 5,
    title: "Optimize FTE Cost",
    desc: "Cut down the requirement for additional full-time equivalent employees (FTEs), leading to major cost savings in salaries, benefits and allied overheads.",

    cta: "Know More",
    ctaUrl: "/",
    image: "/rpa/OptimizeFTEcost.png",
  },
  {
    _id: 6,
    title: "Enhance Flexibility",
    desc: "Enables businesses to quickly adapt to changing business needs without the time and expense required to hire and train new employees.",
    cta: "Know More",
    ctaUrl: "/",
    image: "/rpa/EnhanceFlexibility.png",
  },
  {
    _id: 7,
    title: "Reduce AHT (Average Handling Time)",
    desc: "Businesses can enhance customer service quality, shrink response times and improve operational efficiency.",
    cta: "Know More",
    ctaUrl: "/",
    image: "/rpa/ReduceAHT.png",
  },
];

const UseCases = [
  {
    _id: 1,
    title: "Employee Access Creation",
    cta: "Know More",
    link: "",
  },
  {
    _id: 2,
    title: "Ticketing system - Incident management",
    cta: "Know More",
    link: "",
  },
  {
    _id: 3,
    title: "Account Payable and Receivable Process",
    cta: "Know More",
    link: "",
  },
  {
    _id: 4,
    title: "Vendor Onboarding Process",
    cta: "Know More",
    link: "",
  },
  {
    _id: 5,
    title: "Customer Onboarding Process",
    cta: "Know More",
    link: "",
  },
];

const IndustryExperts = [
  {
    _id: 1,
    title: "Manufacturing",
    image: "manufacturing",
  },
  {
    _id: 2,
    title: "Accounts and Finance",
    image: "finance",
  },
  {
    _id: 3,
    title: "HR",
    image: "hr",
  },
  {
    _id: 4,
    title: "IT Infra",
    image: "itinfra",
  },
];

const RPACards = [
  {
    _id: 1,
    title: "Infrastructure Setup",
    keyword: "Enable",
    color: "#fff",
    bgTopColor1: "#7491D4",
    bgCardColor2: "#edf1ff",
    bgBottomColor3: "#0745d4",
    icon: "icon/RPA-projectLifestyle/InfrastructureSetup",
    list: [
      "Design server architecture",
      "Install and configuration",
      "Setting up development, test & production environments",
    ],
  },
  {
    _id: 2,
    title: "Project Governance ",
    keyword: "Preparation",
    color: "#fff",
    bgTopColor1: "#4f9d73",
    bgCardColor2: "#e4f8ed",
    bgBottomColor3: "#4f9d73",
    icon: "icon/RPA-projectLifestyle/ProjectGovernance",
    list: [
      "Discuss & finalize project development approach",
      "Review RPA best practices",
    ],
  },
  {
    _id: 3,
    title: "Workflow Design",
    keyword: "Design",
    color: "#fff",
    bgTopColor1: "#d4a73b",
    bgCardColor2: "#fff8e5",
    bgBottomColor3: "#d4a73b",
    icon: "icon/RPA-projectLifestyle/WorkflowDesign",
    list: [
      "Create Process Design Document (PDO)",
      "Build test cases",
      "Solution Design",
    ],
  },
  {
    _id: 4,
    title: "Workflow Development",
    keyword: "Build",
    color: "#fff",
    bgTopColor1: "#78797c",
    bgCardColor2: "#ededee",
    bgBottomColor3: "#78797c",
    icon: "icon/RPA-projectLifestyle/WorkflowDevelopment",
    list: [
      "Build workflows",
      "Unit and Functional testing",
      "Create Development Specification Document (DSD)",
    ],
  },
  {
    _id: 5,
    title: "Quality Assurance",
    keyword: "Test",
    color: "#fff",
    bgTopColor1: "#8098ff",
    bgCardColor2: "#edf0ff",
    bgBottomColor3: "#0745d4",
    icon: "icon/RPA-projectLifestyle/QualityAssurance",
    list: [
      "Execute test cases",
      "Report results",
      "Go/NoGo decision finalization",
    ],
  },
  {
    _id: 6,
    title: "Hypercare",
    keyword: "Sustain",
    color: "#fff",
    bgTopColor1: "#4f9d73",
    bgCardColor2: "#e4f8ed",
    bgBottomColor3: "#4f9d73",
    icon: "icon/RPA-projectLifestyle/Hypercare",
    list: ["Support workflow", "Manage Changes and Improvements"],
  },
];
const ChoiceSlider = [
  {
    _id: 1,
    title: "Manufacturing",
    imgUrl: "1",
    url: "/",
  },
  {
    _id: 2,
    title: "Accounts and Finance",
    imgUrl: "2",
    url: "/",
  },
  {
    _id: 3,
    title: "HR",
    imgUrl: "3",
    url: "/",
  },
  {
    _id: 4,
    title: "IT Infra",
    imgUrl: "4",
    url: "/",
  },
];

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
      <SectionWrapper ID="whyrpa" BGColor="#EFE9FB">
        <SectionHeading
          Heading={'Optimising businesses through RPA solutions'}
          Desc={''}
          Color={'#1D162B'}
          MaxWidth={'40%'}
        >
        </SectionHeading>

        <div className="my-8">
          <Swiper
            slidesPerView={3.2}
            spaceBetween={30}
            navigation={false}
            pagination={{ type: "bullets", clickable: true }}
            autoplay={true}
            loop={true}
            modules={[Autoplay, Navigation,]}
          >
            {RPASolution.map((item) => (
              <SwiperSlide key={item.id}>
                <div
                  className="h-full w-full absolute left-0 top-0"
                // style={{
                //   background: `url(${image}) center center / cover scroll no-repeat`,
                // }}
                >
                </div>

                <CommonCardBackground Item={item} style={{ minWidth: '250px', minHeight: '550px' }}></CommonCardBackground>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </SectionWrapper>

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
                <Image src={MSAzure} alt="Microsoft Azure" />
              </div>
              <div>
                <Image src={GoogleAI} alt="Google AI" />
              </div>
              <div>
                <Image src={TensorFlow} alt="TensorFlow" />
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* service Offerings section */}
      <SectionWrapper id="Benefits" BGColor="#1D162B">
        <div className="grid grid-cols-2 gap-4">
          <div className="">
            <SectionHeading
              Heading={'Service Offerings'}
              Desc={'Artificial Intelligence (AI) and Machine Learning (ML) are driving transformative changes, offering multiple benefits that redefine the way you do business.'}
              Color="white"
            >
            </SectionHeading>
            <div className="my-10">
              <a href="#" class="inline-flex items-center justify-center p-5 text-base font-medium text-gray-500 rounded-lg bg-gray-50 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white">
                <svg aria-hidden="true" class="w-5 h-5 me-3" viewBox="0 0 22 31" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_4151_63004)"><path d="M5.50085 30.1242C8.53625 30.1242 10.9998 27.8749 10.9998 25.1035V20.0828H5.50085C2.46546 20.0828 0.00195312 22.332 0.00195312 25.1035C0.00195312 27.8749 2.46546 30.1242 5.50085 30.1242Z" fill="#0ACF83" /><path d="M0.00195312 15.062C0.00195312 12.2905 2.46546 10.0413 5.50085 10.0413H10.9998V20.0827H5.50085C2.46546 20.0827 0.00195312 17.8334 0.00195312 15.062Z" fill="#A259FF" /><path d="M0.00195312 5.02048C0.00195312 2.24904 2.46546 -0.000244141 5.50085 -0.000244141H10.9998V10.0412H5.50085C2.46546 10.0412 0.00195312 7.79193 0.00195312 5.02048Z" fill="#F24E1E" /><path d="M11 -0.000244141H16.4989C19.5343 -0.000244141 21.9978 2.24904 21.9978 5.02048C21.9978 7.79193 19.5343 10.0412 16.4989 10.0412H11V-0.000244141Z" fill="#FF7262" /><path d="M21.9978 15.062C21.9978 17.8334 19.5343 20.0827 16.4989 20.0827C13.4635 20.0827 11 17.8334 11 15.062C11 12.2905 13.4635 10.0413 16.4989 10.0413C19.5343 10.0413 21.9978 12.2905 21.9978 15.062Z" fill="#1ABCFE" /></g><defs><clipPath id="clip0_4151_63004"><rect width="22" height="30.1244" fill="white" transform="translate(0 -0.000244141)" /></clipPath></defs></svg>
                <span class="w-full">Get started with our  Figma Design System</span>
                <svg class="w-4 h-4 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </a>
              <a href="#" class="inline-flex items-center justify-center p-5 text-base font-medium text-gray-500 rounded-lg bg-gray-50 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white">
                <svg aria-hidden="true" class="w-5 h-5 me-3" viewBox="0 0 22 31" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_4151_63004)"><path d="M5.50085 30.1242C8.53625 30.1242 10.9998 27.8749 10.9998 25.1035V20.0828H5.50085C2.46546 20.0828 0.00195312 22.332 0.00195312 25.1035C0.00195312 27.8749 2.46546 30.1242 5.50085 30.1242Z" fill="#0ACF83" /><path d="M0.00195312 15.062C0.00195312 12.2905 2.46546 10.0413 5.50085 10.0413H10.9998V20.0827H5.50085C2.46546 20.0827 0.00195312 17.8334 0.00195312 15.062Z" fill="#A259FF" /><path d="M0.00195312 5.02048C0.00195312 2.24904 2.46546 -0.000244141 5.50085 -0.000244141H10.9998V10.0412H5.50085C2.46546 10.0412 0.00195312 7.79193 0.00195312 5.02048Z" fill="#F24E1E" /><path d="M11 -0.000244141H16.4989C19.5343 -0.000244141 21.9978 2.24904 21.9978 5.02048C21.9978 7.79193 19.5343 10.0412 16.4989 10.0412H11V-0.000244141Z" fill="#FF7262" /><path d="M21.9978 15.062C21.9978 17.8334 19.5343 20.0827 16.4989 20.0827C13.4635 20.0827 11 17.8334 11 15.062C11 12.2905 13.4635 10.0413 16.4989 10.0413C19.5343 10.0413 21.9978 12.2905 21.9978 15.062Z" fill="#1ABCFE" /></g><defs><clipPath id="clip0_4151_63004"><rect width="22" height="30.1244" fill="white" transform="translate(0 -0.000244141)" /></clipPath></defs></svg>
                <span class="w-full">Get started with our  Figma Design System</span>
                <svg class="w-4 h-4 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </a>
              <a href="#" class="inline-flex items-center justify-center p-5 text-base font-medium text-gray-500 rounded-lg bg-gray-50 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white">
                <svg aria-hidden="true" class="w-5 h-5 me-3" viewBox="0 0 22 31" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_4151_63004)"><path d="M5.50085 30.1242C8.53625 30.1242 10.9998 27.8749 10.9998 25.1035V20.0828H5.50085C2.46546 20.0828 0.00195312 22.332 0.00195312 25.1035C0.00195312 27.8749 2.46546 30.1242 5.50085 30.1242Z" fill="#0ACF83" /><path d="M0.00195312 15.062C0.00195312 12.2905 2.46546 10.0413 5.50085 10.0413H10.9998V20.0827H5.50085C2.46546 20.0827 0.00195312 17.8334 0.00195312 15.062Z" fill="#A259FF" /><path d="M0.00195312 5.02048C0.00195312 2.24904 2.46546 -0.000244141 5.50085 -0.000244141H10.9998V10.0412H5.50085C2.46546 10.0412 0.00195312 7.79193 0.00195312 5.02048Z" fill="#F24E1E" /><path d="M11 -0.000244141H16.4989C19.5343 -0.000244141 21.9978 2.24904 21.9978 5.02048C21.9978 7.79193 19.5343 10.0412 16.4989 10.0412H11V-0.000244141Z" fill="#FF7262" /><path d="M21.9978 15.062C21.9978 17.8334 19.5343 20.0827 16.4989 20.0827C13.4635 20.0827 11 17.8334 11 15.062C11 12.2905 13.4635 10.0413 16.4989 10.0413C19.5343 10.0413 21.9978 12.2905 21.9978 15.062Z" fill="#1ABCFE" /></g><defs><clipPath id="clip0_4151_63004"><rect width="22" height="30.1244" fill="white" transform="translate(0 -0.000244141)" /></clipPath></defs></svg>
                <span class="w-full">Get started with our  Figma Design System</span>
                <svg class="w-4 h-4 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </a>
            </div>
          </div>
          <div className="">

          </div>
        </div>

      </SectionWrapper>


      {/* RPA Platform Expertise Logos */}
      <>
        <div id="Partners" className={` w-full bg-[#FFF] pt-20`}>
          <div className="text-left max-w-screen-xl md:max-w-screen-xl mb-5 mx-auto p-5 pb-0 px-[2rem] grid grid-cols-1 ">
            {/* left */}
            <div className="bg-[#FFF] flex items-start flex-col justify-between  relative">
              <div className="">
                <h3 className="text-[42px]  leading-[54px] mb-3 font-bold ">
                  RPA Platform Expertise
                </h3>
              </div>
              <div>
                <p className="font-medium leading-[22px] md:w-[100%] ">
                  Our in-depth expertise in RPA platforms helps in maximizing
                  functionality, ensuring optimal business performance.
                </p>
              </div>
              <div className="flex justify-center items-center gap-20">
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
        </div>
      </>

      {/* RPA Service Offerings */}
      <>
        <div id="Services" className={` w-full bg-[#F2F4F7] py-32`}>
          <div className="text-left max-w-screen-xl md:max-w-screen-xl mb-5 mx-auto p-5 pb-0 px-[2rem] ">
            <div className="bg-[#F2F4F7] grid grid-cols-1 gap-5 relative">
              <div className="">
                <h3 className="text-[42px]  leading-[54px] mb-3 font-bold text-center ">
                  RPA Service Offerings
                </h3>
              </div>
            </div>
          </div>
          <div className="text-left max-w-screen-xl md:max-w-screen-xl mb-5 mx-auto p-5 pb-0 px-[2rem] grid grid-cols-1 gap-10 sm:grid-cols-2">
            {RPAServiceOfferings.map((item, index) => (
              <div className="" key={item._id}>
                <Image
                  src={item.image}
                  className="w-[100%]"
                  alt="ML Expertise"
                  width={500}
                  height={500}
                />
                <div className="p-4 pb-0">
                  <p className="text-[#101828] font-medium text-base leading-[22px]">
                    {item.title}
                  </p>
                  <p className="text-[#475467] text-[14px] font-normal my-4 leading-[22px]">
                    {item.desc}
                  </p>
                  <Link
                    href={item.ctaUrl}
                    className={clsx({
                      "text-[#0745D3] text-[14px] font-medium leading-[22px] w-fit flex transition-all hover:opacity-75":
                        !(item.ctaUrl === "" || item.ctaUrl === "/"),
                      hidden: item.ctaUrl === "" || item.ctaUrl === "/",
                    })}
                  >
                    {item.cta}{" "}
                    <Icon
                      path={mdiArrowRight}
                      style={{ marginLeft: "0.5em" }}
                      size={1}
                    />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>

      {/* Industry Spotlight Slider */}
      {/* <>
        <div className={` w-full bg-[#FFF] pt-20`}>
          <div className="text-left max-w-screen-xl md:max-w-screen-xl mb-5 mx-auto p-5 pb-0 px-[2rem] grid grid-cols-1 ">

            <div className="bg-[#FFF] flex items-start flex-col justify-between  relative">
              <div className="">
                <h3 className="text-[42px]  leading-[54px] mb-3 font-bold ">
                  Elevating RPA Domain Advantage - Industry
                </h3>
              </div>
              <div>
                <p className="font-medium leading-[22px] md:w-[90%] pb-4">
                  We deliver innovative RPA solutions backed by our extensive
                  experience and commitment to excellence.
                </p>
              </div>
              <div className="flex justify-center items-center max-w-screen-xl w-full">
                <div>
                  <Swiper
                    slidesPerView={"auto"}
                    pagination={{
                      clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                  >
                    {ChoiceSlider.map((item) => (
                      <>
                        <SwiperSlide
                          key={item._id}
                          className="w-[283px] max-w-[283px] mr-4  relative group"
                        >
                          <div className="relative overflow-hidden">
                            <Image
                              src={`/industrySpotlight/${item.imgUrl}.png`}
                              height={350}
                              width={283}
                              alt="icon"
                              className=" transition-transform transform group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity  ">
                              <h3 className="text-[22px] text-white absolute bottom-4 left-4 w-fit leading-[30px] font-bold mb-5">
                                {item.title}
                              </h3>
                            </div>
                          </div>
                        </SwiperSlide>
                      </>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
      </> */}

      {/* RPA UseCases */}
      <>
        <div id="UseCases" className={` w-full bg-[#FFF] pt-32`}>
          <div className="text-left max-w-screen-xl md:max-w-screen-xl mb-5 mx-auto p-5 pb-0 px-[2rem] grid grid-cols-1 gap-5 sm:grid-cols-2">
            {/* left */}
            <div className="bg-[#FFF] flex items-start flex-col justify-between  relative">
              <div className="">
                <h3 className="text-[42px]  leading-[54px] mb-3 font-bold w-[90%]">
                  Godrej Infotech RPA Use Cases
                </h3>
              </div>
            </div>
            {/* right */}
            <div>
              <div>
                <p className="font-medium leading-[22px] md:w-[90%] ">
                  We endeavor to build actual business impact of Robotic Process
                  Automation (RPA) reforming industries, improving output and
                  leading digital transformation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
      <>
        <div className={`bg-rpa w-full pt-48 pb-12 `} id="productivity">
          <div className="flex flex-col sm:flex-row gap-y-5 justify-center text-left max-w-screen-xl md:max-w-screen-2xl mb-5 mx-auto  p-5">
            {UseCases.map((item, index) => {
              return (
                <div
                  key={item._id}
                  className=" mx-2 bg-white sm:w-[320px] w-full flex flex-col justify-between"
                >
                  <div className="p-5 w-fit ">
                    <h4 className="text-[26px] font-bold mb-2 leading-[34px] text-[#101828]">
                      {item.title}
                    </h4>
                  </div>
                  <div
                    // className=" w-full bg-[#0745D3] p-5"
                    className={clsx({
                      "w-full bg-[#0745D3] p-5": item.link !== "",
                      hidden: item.link === "",
                    })}
                  >
                    <Link
                      href={item.link}
                      className="text-white  flex transition-all hover:opacity-75  "
                    >
                      {item.cta}
                      <Icon
                        path={mdiArrowRight}
                        style={{ marginLeft: "0.5em" }}
                        size={1}
                      />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </>

      {/* Industry Expertise Slider */}
      {/* <IndustryExpertise
        heading="Industry Expertise"
        desc="Being preferred partner of leading industries, we help in
                  shaping specific technology prerequisites and deliver
                  brilliant value driven solutions tailored to your sector"
        list={IndustryExperts}
      /> */}

      {/* GITL RPA Cards */}
      <>
        <div id="ProjectLifecycle" className={` w-full bg-[#FFF] pt-32`}>
          <div className="text-left max-w-screen-xl md:max-w-screen-xl mb-5 mx-auto p-5 pb-0 px-[2rem] grid grid-cols-1 gap-5 sm:grid-cols-2">
            {/* left */}
            <div className="bg-[#FFF] flex items-start flex-col justify-between  relative">
              <div className="">
                <h3 className="text-[42px]  leading-[54px] mb-3 font-bold  ">
                  GITL RPA Project Lifecycle
                </h3>
              </div>
            </div>
            {/* right */}
            <div>
              <div>
                <p className="font-medium leading-[22px] md:w-[90%] ">
                  From inception to upheld brilliance, every stage of our
                  project lifecycle is precisely devised to optimize your
                  business processes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
      {/* Rpa Card Backup */}
      <>
        <div className={` w-full pb-12 `}>
          <div className="flex flex-col sm:flex-row gap-y-5 justify-center text-left max-w-screen-xl md:max-w-screen-2xl mb-5 mx-auto  p-5">
            {RPACards.map((item) => {
              const isHovered = item._id === hoveredCard;
              return (
                <div
                  key={item._id}
                  className={` mx-2  sm:w-[320px] w-full flex flex-col justify-between`}
                  onMouseOver={() => setHoveredCard(item._id)}
                  onMouseOut={() => setHoveredCard(null)}
                >
                  <div
                    className={`w-full text-2xl font-bold ${isHovered ? "hidden" : "block"
                      }  p-5`}
                    style={{
                      backgroundColor: item.bgTopColor1,
                      color: item.color,
                    }}
                  >
                    {item.keyword}
                  </div>
                  <div
                    className={`p-5 w-full h-full `}
                    style={{
                      backgroundColor: item.bgCardColor2,
                    }}
                  >
                    <div className="mb-4 max-h-[56px]">
                      {item.icon !== "" ? (
                        <Image
                          className="max-h-[56px] h-[56px]"
                          src={`/${item.icon}.svg`}
                          width={56}
                          height={56}
                          alt={item.icon}
                        />
                      ) : (
                        <Icon path={mdiDomain} size={3} />
                      )}
                    </div>
                    <h4 className={`text-2xl font-bold my-2 text-[#101828]`}>
                      {item.title}
                    </h4>
                    <div className={`${isHovered ? "block" : "hidden"} `}>
                      <ul className="  list-disc ml-4">
                        {item.list.map((i, index) => (
                          <li className="text-[14px] mb-2" key={index}>
                            {i}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div
                    className={`w-full p-2`}
                    style={{
                      backgroundColor: item.bgBottomColor3,
                    }}
                  ></div>
                </div>
              );
            })}
          </div>
        </div>
      </>

      {/* <>
        <div className={`w-full pb-12`}>
          <div className="flex flex-col sm:flex-row gap-y-5 justify-center text-left max-w-screen-xl md:max-w-screen-2xl mb-5 mx-auto p-5">
            {RPACards.map((item) => {
              const isHovered = item._id === hoveredCard;

              return (
                <div
                  key={item._id}
                  className={`mx-2 sm:w-[320px] w-fit flex flex-col justify-between relative ${
                    isHovered ? "shadow-lg" : ""
                  }`}
                  onMouseOver={() => setHoveredCard(item._id)}
                  onMouseOut={() => setHoveredCard(null)}
                >
                  <div
                    className={`w-full text-2xl font-bold p-5 ${
                      isHovered ? "block" : "hidden"
                    }`}
                    style={{
                      backgroundColor: item.bgTopColor1,
                      color: item.color,
                    }}
                  >
                    {item.keyword}
                  </div>
                  <div
                    className={`p-5 w-full h-full `}
                    style={{
                      backgroundColor: isHovered
                        ? item.bgCardColor2
                        : item.bgCardColor2,
                    }}
                  >
                    {isHovered && (
                      <>
                        <Image
                          src={`/${item.icon}.png`}
                          width={32}
                          height={32}
                          alt="scalable"
                        />
                        <h4 className={`text-lg font-bold my-2 text-[#101828]`}>
                          {item.title}
                        </h4>
                        <ul className="list-disc ml-5">
                          {item.list.map((link, index) => (
                            <li key={index}>{link}</li>
                          ))}
                        </ul>
                      </>
                    )}
                  </div>
                  <div
                    className={`w-full p-2`}
                    style={{
                      backgroundColor: isHovered
                        ? item.bgBottomColor3
                        : item.bgBottomColor3,
                    }}
                  ></div>
                </div>
              );
            })}
          </div>
        </div>
      </> */}

      {/* Subscription */}
      <Subscription
        title="Ready to revolutionize your workflow? "
        blue="Streamline complexity effortlessly."
        title2=""
        desc="Share your details to upgrade your business future with us!"
      />

      {/* Infotech Weekly Updates */}
      <InfotechWeeklyAlt />
    </>
  );
};

export default page;
