"use client";

import React from "react";
import Image from "next/image";

import EntIntro from "@/components/EntIntro";
import SectionNav from "@/components/SectionNav";
import OverviewSection from "@/sections/overview/OverviewSection";
import CaseStudiesSection from "@/sections/case-studies/CaseStudiesSection";
import BlogSection from "@/sections/blog/BlogSection";
import DistinctiveSection from "@/sections/distinctive/DistinctiveSection";
import TransformBusinessForm from "@/sections/transformBusinessFrom/TransformBusinessFromSection";
import BenefitSliderSection from '@/sections/benefitSlider/BenefitSliderSection';

const IIOT = () => {
  const blogImageUrl = "/ai-ml/blog-bg.png";
  const CASE_STUDIES_DATA = [
    {
      imageURL: "",
      videoURL: "/CloudStackServices/case-studies/bg--businessman-industry.mp4",
      title: "IIoT Solutions",
      heading: "Low Code, No Code Configurable Portals on Azure or AWS IIOT",
      description:
        "Industry 4.0 Accelerator (IoT for shopfloor) for implementation of IoT in shopfloor – Both for Discrete & Process Manufacturing",
      link: "/case-study-1",
      color: "#FFFFFF",
      bgCardColor: "#2B1624",
    },
    {
      imageURL: "/iiot/bg--bespoke--iiot-soltions.png",
      title: "",
      heading: "Bespoke IIOT Solutions",
      description:
      `  <ul class="py-2 space-y-1 text-gray-700 list-disc list-inside ">
               <li>Customization of reports </li>
               <li>IoT for Vibration Monitoring  </li>
              <li>IoT for Samrt City</li>
               <li>IoT for Vehicle tracking </li>
               </ul>`,
      link: "/case-study-1",
      color: "#2B1624",
      bgCardColor: "#00F8C4",
    },
    {
      imageURL: "",
      title: "Case Studies",
      heading: "Insights to Accelerate Business Growth",
      description:'',
      link: "",
      color: "#FFFFFF",
      bgCardColor: "#2B1624",
    },

    {
      imageURL: "",
      title: "Case Studies",
      heading: "India’s Largest Lift Truck Manufacturer & Exporter",
      description:'Gathers forklift data and enable remote monitoring, troubleshooting & optimization with IoT',
      link: "https://www.godrejinfotech.com/assets/pdf/case-studies/India%E2%80%99s_Largest_Lift_Truck_Manufacturer_Exporter_IoT_Solution_Enterprise_Asset_Integration.pdf",
      color: "#2B1624",
      bgCardColor: "#E4E4E4",
    },

    {
      imageURL: "",
      title: "Case Studies",
      heading: "India's Leading Construction Organization",
      description:'Implements IoT & ML Solution for Real Time Cement Inventory Calibration with 98% accuracy',
      link: "",
      color: "#2B1624",
      bgCardColor:"#FCE6F4"
    },

    // Add more case studies here...
  ];

  const benifitsCardsData = [
  { id: '1', icon:'', cardDesc: 'Improvement of OEE leading to optimised throughput and enhanced quality' },
  { id: '2', icon:'', cardDesc: 'Optimization of Total Productive Maintenance Losses across shopfloors' },
  { id: '3', icon:'', cardDesc: 'Minimised Machine Downtime and Improved Equipment Runtime' },
  { id: '4', icon:'', cardDesc: 'Optimised Maintenance TAT in terms of MTBF and MTTR' },
  { id: '5', icon:'', cardDesc: 'Effective use of Equipment Service Cost and Improved Safety Compliance' },
  { id: '6', icon:'', cardDesc: 'Connected Factory with actionable insights for Operations, Tactical and Strategic Levels of Management - Shopfloor to Top floor ' },
  { id: '7', icon:'', cardDesc: 'Optimised Energy Consumption leading to Optimised Carbon Footprint' },
  { id: '8', icon:'', cardDesc: 'Defect Tracking using image analytics leading to improved quality ' },
]

  const DISTINCTIVE_DATA = [
    {
      _id: 1,
      desc: "Actively shaping the future of manufacturing for our clients through Industry 4.0 and IoT.",
      icon: "",
    },
    {
      _id: 2,
      desc: "Innovative IoT and Industry 4.0 solutions deployed in various manufacturing scenarios.",
      icon: "",
    },
    {
      _id: 3,
      desc: "Ensure replicable success stories for business.",
      icon: "",
    },
    {
      _id: 4,
      desc: "Expertise in Predictive and Prescriptive analytics using IoT and AI/ML (Machine Learning) to foresee potential device failures.",
      icon: "",
    },
    {
      _id: 5,
      desc: "Efficiently ingests machine telemetry data across diverse PLC (Programmable Logic Controller), CNC (Computer Numerical Control) controllers, and OT (Operational Technology) network data points. ",
      icon: "",
    },
  ];

  return (
    <>
      {/* Start--Section--Hero-Banner====================================================================== */}
      <EntIntro
        title="Discover Real-Time Data Brilliance"
        desc="Tap into Data-Driven Insights and Drive Smart Connected Business with IIoT"
        cta="Let's Connect"
        width="60%"
        video="https://gitl-usa.s3.us-west-1.amazonaws.com/banner1.mp4"
      />
      {/* End--Section--Hero-Banner====================================================================== */}

      {/* Start--Section--NAV====================================================================== */}
      <SectionNav
        // Solutions
        // Benefits
        // Why Us

        arr={[
          {
            _id: 1,
            title: "Solutions",
            link: "#Solutions",
          },
          {
            _id: 2,
            title: "Benefits",
            link: "#Benefits",
          },
          {
            _id: 3,
            title: "Why Us",
            link: "#WhyUs",
          },
        ]}
      />
      {/* End--Section--NAV====================================================================== */}

      {/* Start--Section--Overview====================================================================== */}
      <OverviewSection bgColor="#F3F0FA"
        Text={
          "Strengthen logistics and manufacturing supply chain resilience with Industrial Internet of Things, improving OEE, Cycle Time, Machine Throughput, Line Efficiency & Reducing TPM losses"
        }
      />
      {/* End--Section--Overview====================================================================== */}

      {/* Start--Section--IIOT Soltions====================================================================== */}
      <CaseStudiesSection
        casestudy={CASE_STUDIES_DATA}
        csLayout={"6"}
        bgColor="#FFFFFF"
      />
      {/* End--Section--IIOT Soltions====================================================================== */}


      {/* Benefits Vertical Slider */}
      <BenefitSliderSection
        ID={'AIOfferings'}
        sectionBGColor={'#1D162B'}
        sectionHeading={'Benefits'}
        sectionDesc={'IIoT (Industrial Internet of Things) empowers businesses to thrive in the digital era in various ways, including:'}
        sectionTextColor={'white'}
        MaxWidth={'100%'}
        cardData={benifitsCardsData}
      ></BenefitSliderSection>

        {/* Section--Blog */}
        <BlogSection
        ID={"blog"}
        blogImageUrl={blogImageUrl}
        Heading={"The Powerful Duo: AI and the Internet of Things (IoT) Reshaping Our World"}
        Desc={
          "Imagine a world where machines talk to each other, predicting problems before they happen and adjusting on the fly. This isn't magic; it's the incredible team of artificial intelligence (AI) and the Internet of things (IoT) in Industry 4.0, the latest wave of technological revolution. "
        }
        maxWidth={'50%'}
        Color={"white"}
      ></BlogSection>

            {/* Distinctive section*/}
            <DistinctiveSection
        DistinctiveData={DISTINCTIVE_DATA}
        ID={"Distinctive"}
        Title={"The Distinctive Edge"}
        Desc={
          "Incorporating our IoT expertise into business transforms the way business operates and paving the way for long-term success."
        }
        maxWidth={"50%"}
      ></DistinctiveSection>

      {/* transform business with us section */}
      <TransformBusinessForm
        Title={"Transform your Business with us"}
        Desc={
          "Let us discuss how intelligent technologies can help you with rapid growth."
        }
      ></TransformBusinessForm>
    </>
  );
};

export default IIOT;
