"use client";

import Image from "next/image";
import "react-creative-cursor/dist/styles.css";

import EntIntro from "@/components/EntIntro";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import SectionNav from "@/components/SectionNav";
import CaseStudiesSection from "@/sections/case-studies/CaseStudiesSection";

/**
 * * New Imports---Sandeep Rana
 * * 2022-08-09
 */
import OverviewSection from "@/sections/overview/OverviewSection";
import HighlightPromo from "@/sections/highlightPromo/HighlightPromo";
import SolutionSliderCloud from "@/sections/solutionSlider/SolutionSliderCloud";
import BlogSection from "@/sections/blog/BlogSection";
import DistinctiveSection from "@/sections/Distinctive/DistinctiveSection";
import TransformBusinessForm from "@/sections/transformBusinessFrom/TransformBusinessFromSection";




const CloudStack = () => {
  const imgURL = "/CloudStackServices/smiling-businessman-standing-with-arms-folded-isolated-white.png";
  const imgBgURL = "/CloudStackServices/background/bg--strategic-partnership.png";
  
  const blogImageUrl = "/ai-ml/blog-bg.png";

  const CASE_STUDIES_DATA = [
    {
      imageURL:"",
      videoURL:"",
      title: "Case Studies",
      heading: 'Elevating Customer Experience',
      description: "",
      link: "/case-study-1",
      color: '#FFFFFF',
      bgCardColor: '#2B1624'
    },
    {
      imageURL: "",
      title: "",
      heading: 'Non-government Association of Indian Industries',
      description: "99% uptime in saving man-days performance and 22% of capex saving after migrating on-premises ERP servers to the Azure cloud environment",
      link: "/case-study-1",
      color: '#000',
      bgCardColor: '#E4E4E4'
    },

    {
      imageURL: "/path/to/image1.jpg",
      title: "",

      heading: "Coffee Brand Distributor in Egypt and Middle East",
      description: "Decreasing downtime and optimising system cost along with 100% data transparency through Single Cloud System",
      link: "/case-study-1",
      color: '#000',
      bgCardColor: '#FCE6F4'
    },
    {
      imageURL: "/CloudStackServices/case-studies/bg--electical-devices.png",
      title: "",
      heading: "Middle East-based Electrical Products Manufacturer",
      description: "Require Development from Scratch. Customisation of manufacturing reports. Require Development from Scratch. ",
      link: "/case-study-1",
      color: '#000',
      bgCardColor: '#FFFFFF'
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
      {/* Section--HeroBanner */}
      <EntIntro
        title="Reimagine Your Business With Our Intelligent Edge 
"
        desc="Reimagine Your Business Capabilities with
our Intelligent Edge Cloud Stack and Services"
        cta="Let's Connect"
        width="60%"
        video="https://gitl-usa.s3.us-west-1.amazonaws.com/banner1.mp4"
      />
      {/* Section Nav */}
 
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
      
      {/* Section--Overview */}
      <OverviewSection
        Text={
          "We collaborate closely with clients to design and implement robust cloud systems. Our focus is on recalibrating businesses, delivering enhanced value, and refining user experiences."
        }
      />
      {/* Section--Take Confident */}
      <HighlightPromo
        setImageURL={imgURL}
        setHeading="Take Confident Business Decisions with Industry Tailored Cloud Technology"
        setDesc="This approach helps us to adeptly manage software development projects involving complexity levels."
        setColor="#1D162B"
        setPadding={false}
  
        
      />
      {/* Section--Blog */}
      <SolutionSliderCloud
        setHeading="Advance Solution for Business Future"
        setDesc="This approach helps us to adeptly manage software development projects involving complexity levels."
        setColor="#1D162B"
      />
      {/* Section--Section--Hub-of-Expertise */}
      <section className="container max-auto"><h1>Why Cloud is your ultimate choice?</h1></section>
      <section className="container max-auto"><h1>Cloud Services</h1></section>

      {/* Section--Synergetic-Partnership======================================================= */}
      <HighlightPromo
   
        setHeading="Synergetic Partnership"
        setDesc="Our expansive worldwide network of market innovators enables us to embrace breakthrough technologies and confront business roadblocks effectively."
        setColor="#1D162B"
        setImageBGURL={imgBgURL}
        setLogoImages="true"
        setPadding={false}
        
      />
      {/* End-Section--Synergetic-Partnership */}
        {/* Section--Case-Studies======================================================================= */}
        <CaseStudiesSection casestudy={CASE_STUDIES_DATA} csLayout={"5"} bgColor='#FFFFFF'/>
      {/* End-Section--Case-Studies */}

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
export default CloudStack;