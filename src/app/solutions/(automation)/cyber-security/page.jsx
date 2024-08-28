"use client";

import React from "react";
import Styles from "./page.module.css";
import EntIntro from "@/components/EntIntro";
import SectionNav from "@/components/SectionNav";
import OverviewSection from "@/sections/overview/OverviewSection";
import HubExpertise from "@/sections/hub-of-expertise/HubExpertise";
import BlogSection from "@/sections/blog/BlogSection";
import TransformBusinessForm from "@/sections/transformBusinessFrom/TransformBusinessFromSection";
import ExperienceSlider from "@/sections/experience-slider/experienceSlider";
import CyberSecurityInfograhics from "@/sections/cyber-security-infograhic/CyberSecurityInfographic";


const CyberSecurity = () => {
  const blogImageUrl = "/ai-ml/blog-bg.png";
  const HUBEXPERTISE_COUNTER_DATA = [
    {
      start: 10,
      end: 20,
      description: "Years of Managing Global customer for Data Security",
    },
    {
      start: 10,
      end: 100,
      description: "Cyber Security Solutions Implemented",
    },
    // Add more counters as needed
  ];

  return (
    <>
      {/* Start--Section--HeroBanner======================================================== */}
      <EntIntro
        title="Leading Digital Protection with Cybersecurity Services"
        desc="Achieve Breakthrough Performance through
Data-Driven Automation"
        cta="Let's Connect"
        width="60%"
        video="https://gitl-usa.s3.us-west-1.amazonaws.com/banner1.mp4"
      />

      {/* End--Section--HeroBanner======================================================== */}
      {/* Start--Section-Navigation======================================================== */}

      <SectionNav
        /**
         * ! Solutions
         * ! Benefits
         * ! Why Us
         */

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
      {/* End--Section--Navigation======================================================== */}
      {/* Start--Overview-Section======================================================== */}
      <OverviewSection
        Text={
          "The escalating threat landscape has led to a rising demand for specialized cybersecurity and risk consulting services, specifically designed to fortify global enterprises"
        }
      />
      {/* End--Overview-Section======================================================== */}
      {/* Section--Hub-of-Expertise=======================================================================  */}
      <HubExpertise
        setHeading="Hub of Expertise"
        setDesc="We are here to build edge and bring technology brilliance with the finest in the industry."
        setColor="#ffffff"
        counters={HUBEXPERTISE_COUNTER_DATA}
      />
      {/* End-Section--Hub-of-Expertise */}
      {/* Start--Section--CyberSecurityInfographics======================================================== */}
        <CyberSecurityInfograhics/>
      {/* End--Section--CyberSecurityInfographics======================================================== */}
      

      {/* Start-Section--Blog======================================================================= */}
      <BlogSection
        ID={"blog"}
        blogImageUrl={blogImageUrl}
        Heading={"Unveilling Hyper automation  for supply chain efficiency"}
        Desc={
          "IIoT offers a multitude of benefits that enable businesses to gain competitive edge through innovation and succeed in digital era."
        }
        Color={"white"}
      ></BlogSection>
      {/* End-Section--Blog======================================================================= */}
      {/* Start--Section--ExperienceSlider======================================================== */}
      <ExperienceSlider/>
      {/* End--Section--ExperienceSlider======================================================== */}
      {/* Section--TransformBusinessForm======================================================================= */}
      <TransformBusinessForm
        Title={"Transform your Business with us"}
        Desc={
          "Let us discuss how intelligent technologies can help you with rapid growth."
        }
      ></TransformBusinessForm>
      {/* End-Section--TransformBusinessForm */}
    </>
  );
};

export default CyberSecurity;
