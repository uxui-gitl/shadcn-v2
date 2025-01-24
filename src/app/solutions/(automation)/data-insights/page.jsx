"use client";

import React from "react";
import EntIntro from "@/components/EntIntro";
import SectionNav from "@/components/SectionNav";
import OverviewSection from "@/sections/overview/OverviewSection";
import SectionWithSlider from "@/sections/sectionWithSlider/SectionWithSlider";
import CaseStudiesSection from "@/sections/case-studies/CaseStudiesSection";
import BlogSection from "@/sections/blog/BlogSection";
import TransformBusinessForm from "@/sections/transformBusinessFrom/TransformBusinessFromSection";
import OurCapabilities from "@/sections/ourcapabilities/OurCapabilities";
import ReviewSliderSection from "@/sections/reviewSlider/ReviewSliderSection";
import {VISUALIZATION_DATA, DATA_MGMT_DATA, TESTIMONIAL_DATA, CASE_STUDIES_DATA, ACCORDION_DATA} from "./data.js";


const DataInsights = () => {
  const sectionSliderBGImageUrl =
    "/data-insights/backgrounds/bg--data-visualization.webp";
  const blogImageUrl = "/data-insights/blog.webp";

  return (
    <>
      {/* Start--Section--HeroBanner======================================================== */}
      <EntIntro
        title="Data driven intelligence for informed decisions"
        desc="Discover new insights and drive business success with our data analytics solutions"
        cta="Let's Connect"
        width="60%"
        video="/data-insights/video/pageBanner.mp4"
      />

      {/* End--Section--HeroBanner======================================================== */}

      {/* Start--Overview-Section======================================================== */}
      <OverviewSection
        Text={
          "Building governed data estates for meaningful insights, seamless workflow integration and AI-driven automation to optimize operational efficiency."
        }
      />
      {/* End--Overview-Section======================================================== */}

      {/* Start--DataVisualization--Section======================================================== */}
      <SectionWithSlider
        ID={"DATA_VISUALIZATION"}
        sectionBGImageUrl={sectionSliderBGImageUrl}
        sectionHeading={"Data Visualization"}
        sectionDesc={
          "Real-time data access and visualization enabling insights into business operations."
        }
        sectionTextColor={"text-neutral-white"}
        sectionDescColor={"text-neutral-white"}
        cardData={VISUALIZATION_DATA}
        pageID="ai-ml"
        setHeadingLayout={"left"}
        setTop={false}

       
      ></SectionWithSlider>

      {/* End--DataVisualization--Section======================================================== */}
      {/* Start--Section--DataManagement======================================================================== */}
      <SectionWithSlider
        ID={"DATA_MGMT_DATA"}
        sectionHeading={"Data Management"}
        sectionDesc={
          "Scalable data management solutions leveraging analytics and business intelligence for informed decisions."
        }
        sectionBGColor={"bg-secondary-900"}
        sectionTextColor={"text-neutral-white"}
        cardData={DATA_MGMT_DATA}
        setHeadingLayout={"horizontal"}
      />
      {/* End--Section--DataManagement======================================================================== */}

      {/* Section--Case-Studies======================================================================= */}
      <CaseStudiesSection casestudy={CASE_STUDIES_DATA} csLayout={"1"} />
      {/* End-Section--Case-Studies */}
      {/* Start--Section--Blog======================================================================= */}
      <BlogSection
        ID={"blog"}
        blogImageUrl={blogImageUrl}
        Heading={"Azure Data Lake - Data Storage Solution for Big Data Analytics"}
        Desc={"Data Science today has become essential for organizations that are looking to bring about predictability in their business functions. It removes the guesswork and provides companies with accurate insights related to product features, target audiences and user behavior."}
        Color={"text-neutral-white"}
        readMoreUrl={[
          {id:'1', text:'Why Godrej Infotech', url:'https://www.godrejinfotech.com/blogDetails.aspx?blog=13'}
        ]}
      ></BlogSection>
      {/* End-Section--Blog */}

      <OurCapabilities
        setHeading="Our Capabilities"
        setDesc="Benefit from predictive insights and ensure data quality, security and compliance to maximize organization's data asset potential"
        setColor="bg-primary-900"
        setTextColor="text-primary-900"
        setHeadingLayout="horizontal"
        ACCORDION_DATA={ACCORDION_DATA}
        setPad={true}
        setTop={true}
      />
   
      {/* Start--Section--Testimonial======================================================================= */}
      <ReviewSliderSection
      ID={"TESTIMONIALS"}
      Heading={"Delighted customers share their success experience"}
      Desc={''}
      Color="text-neutral-white"
      CardDataList={TESTIMONIAL_DATA}
      BGColor="bg-primary-900"
      SectionHeadingMaxWidth="w-1/2"
      setHeadingLayout={'horizontal'}
    ></ReviewSliderSection>
    
      {/* End-Section--Testimonial======================================================= */}
      {/* Section--TransformBusinessForm======================================================================= */}
      <TransformBusinessForm
        Title={"Transform your Business with us"}
        Desc={
          "Let us discuss how data analytics expertise can help you with rapid growth."
        }
      ></TransformBusinessForm>
      {/* End-Section--TransformBusinessForm */}
    </>
  );
};

export default DataInsights;
