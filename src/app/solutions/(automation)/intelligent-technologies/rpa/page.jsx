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
