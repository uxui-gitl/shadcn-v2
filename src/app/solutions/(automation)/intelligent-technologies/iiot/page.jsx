"use client";

import React from "react";
import Image from "next/image";

import EntIntro from "@/components/EntIntro";
import SectionNav from "@/components/SectionNav";
import OverviewSection from "@/sections/overview/OverviewSection";
import CaseStudiesSection from "@/sections/case-studies/CaseStudiesSection";
import BlogSection from "@/sections/blog/BlogSection";
import DistinctiveSection from "@/sections/Distinctive/DistinctiveSection";
import TransformBusinessForm from "@/sections/transformBusinessFrom/TransformBusinessFromSection";

const IIOT = () => {
  const blogImageUrl = "/ai-ml/blog-bg.png";
  const CASE_STUDIES_DATA = [
    {
      imageURL: "",
      videoURL: "/CloudStackServices/case-studies/bg--businessman-industry.mp4",
      title: "IIoT Solutions",
      heading: "Low Code, No Code Configurable Portals on Azure or AWS IIOT",
      description:
        "We bring a wealth of industry knowledge and expertise to the table and follow the.We bring a wealth of industry knowledge and expertise to the table and follow the",
      link: "/case-study-1",
      color: "#FFFFFF",
      bgCardColor: "#2B1624",
    },
    {
      imageURL: "/iiot/bg--bespoke--iiot-soltions.png",
      title: "",
      heading: "Bespoke IIOT Solutions",
      description:
        "Require Development from Scratch. Customisation of manufacturing reports",
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
      heading: "India's Largest Lift Truck Manufacturer",
      description:'Require Development from Scratch. Customisation of manufacturing reports. Require Development from Scratch. Customisation of manufacturing reports',
      link: "",
      color: "#2B1624",
      bgCardColor: "#E4E4E4",
    },

    {
      imageURL: "",
      title: "Case Studies",
      heading: "Real Time Cement Inventory Calibration",
      description:'Require Development from Scratch. Customisation of manufacturing reports. Require Development from Scratch. Customisation of manufacturing reports',
      link: "",
      color: "#2B1624",
      bgCardColor:"#FCE6F4"
    },

    // Add more case studies here...
  ];

  const DISTINCTIVE_DATA = [
    {
      _id: 1,
      desc: "Deep understanding of specific business domains for developing AI and ML solutions that truly meet your needs.",
      icon: "",
    },
    {
      _id: 2,
      desc: "Agile approach that keeps projects on cutting edge.",
      icon: "",
    },
    {
      _id: 3,
      desc: "Fully signed Non-Disclosure Agreement (NDA) to protect your sensitive information.",
      icon: "",
    },
    {
      _id: 4,
      desc: "Exceed customer expectations and deliver AI and ML solutions in most effective way.",
      icon: "",
    },
    {
      _id: 5,
      desc: "Extensive experience in understanding industry-specific challenges and opportunities. ",
      icon: "",
    },
  ];

  return (
    <>
      {/* Start--Section--Hero-Banner====================================================================== */}
      <EntIntro
        title="Discover Real-Time Data Brilliance"
        desc="Discover Real-Time Data Brilliance with Godrej Infotech IIoT Expertise"
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
          "We focus on refining businesses through IIoT services across diverse sectors, spanning Manufacturing, Supply Chain, Construction, Transportation, Power Generation"
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

        {/* Section--Blog */}
        <BlogSection
        ID={"blog"}
        blogImageUrl={blogImageUrl}
        Heading={"Unveilling Hyper automation  for supply chain efficiency"}
        Desc={
          "IIoT offers a multitude of benefits that enable businesses to gain competitive edge through innovation and succeed in digital era."
        }
        Color={"white"}
      ></BlogSection>

            {/* Distinctive section*/}
            <DistinctiveSection
        DistinctiveData={DISTINCTIVE_DATA}
        ID={"Distinctive"}
        Title={"The Distinctive Edge"}
        Desc={
          "Trust Godrej Infotech to leverage Intelligent technologies and lead business into competitive digital landscape."
        }
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
