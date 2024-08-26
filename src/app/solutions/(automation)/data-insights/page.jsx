"use client";

import React from "react";
import Styles from "./page.module.css";
import EntIntro from "@/components/EntIntro";
import SectionNav from "@/components/SectionNav";
import OverviewSection from "@/sections/overview/OverviewSection";
import SectionWithSlider from "@/sections/sectionWithSlider/SectionWithSlider";
import CaseStudiesSection from "@/sections/case-studies/CaseStudiesSection";
import BlogSection from "@/sections/blog/BlogSection";
import DistinctiveSection from "@/sections/distinctive/DistinctiveSection";
import TransformBusinessForm from "@/sections/transformBusinessFrom/TransformBusinessFromSection";
import OurCapabilities from "@/sections/ourcapabilities/OurCapabilities";
import ReviewSliderSection from "@/sections/reviewSlider/ReviewSliderSection";
const DataInsights = () => {
  const sectionSliderBGImageUrl =
    "/data-insights/backgrounds/bg--data-visualization.png";
  const blogImageUrl = "/ai-ml/blog-bg.png";

  const VISUALIZATION_DATA = [
    {
      id: 1,
      BGImageUrl: "",
      CardBGColor: "#FFF",
      CardTextColor: "#000",
      CardTitle: "",
      CardIconUrl: "/data-insights/logos/logo--power-bi.png",
      CardHeading: "Power BI",
      CardDesc:
        "Backed by seasoned professionals, we have developed a distinct proficiency in harnessing the capabilities of Power BI. Our focus is to distill intricate data into actionable insights that catalyze a culture of business excellence.",
      isArrow: "",
      arrowColor: "#000",
      link: [],
    },

    {
      id: 2,
      BGImageUrl: "",
      CardBGColor: "#FFF",
      CardTextColor: "#000",
      CardTitle: "",
      CardIconUrl: "/data-insights/logos/logo--tableau.png",
      CardHeading: "Tableau",
      CardDesc:
        "Seamlessly integrate Tableau into your operations, enabling to visualize data in captivating ways, discover hidden trends and insights, and make informed decisions.",
      isArrow: "",
      arrowColor: "#000",
      link: [],
    },
    {
      id: 3,
      BGImageUrl: "",
      CardBGColor: "#FFF",
      CardTextColor: "#000",
      CardTitle: "",
      CardIconUrl: "/data-insights/logos/logo--birst.png",
      CardHeading: "Birst",
      CardDesc:
        "The aim is to facilitate faster decision-making with flexibility and keep your business agile and forward-thinking. Birst seamlessly connect and consolidates data from various sources, regardless of their structure or location.",
      isArrow: "",
      arrowColor: "#000",
      link: [],
    },
  ];

  const DATA_MGMT_DATA = [
    {
      id: 1,
      BGImageUrl: "",
      BGColor: "#fff",
      CardBGColor: "transparent",
      CardTextColor: "white",
      CardTitle: "",
      CardIconUrl: "/upgradeCloud/icons/ico--target.svg",
      CardHeading: "Azure SQL Data Ware Housing",
      CardDesc:
        "Leverage seamless analysis of your business data and trust in our expertise to scale your insights.",
      isArrow: "true",
      link: [],
    },

    {
      id: 2,
      BGImageUrl: "",
      BGColor: "#fff",
      CardBGColor: "transparent",
      CardTextColor: "white",
      CardTitle: "",
      CardIconUrl: "/upgradeCloud/icons/ico--target.svg",
      CardHeading: "AWS Redshift",
      CardDesc:
        "Optimize your data storage and queries while we provide the experience to enhance your data efficiency.",
      isArrow: "true",
      link: [],
    },
    {
      id: 3,
      BGImageUrl: "",
      BGColor: "#fff",
      CardBGColor: "transparent",
      CardTextColor: "white",
      CardTitle: "",
      CardIconUrl: "/upgradeCloud/icons/ico--target.svg",
      CardHeading: "Azure Synapse",
      CardDesc:
        "Seamlessly integrate, analyze and visualize your data with Azure Synapse, and rely on us for real-time insights that drive informed decisions.",
      isArrow: "true",
      link: [],
    },
    {
      id: 4,
      BGImageUrl: "",
      BGColor: "#fff",
      CardBGColor: "transparent",
      CardTextColor: "white",
      CardTitle: "",
      CardIconUrl: "/upgradeCloud/icons/ico--target.svg",
      CardHeading: "Azure Data Factory",
      CardDesc:
        "Effortlessly move, transform and orchestrate data while we streamline your data workflows for you.",
      isArrow: "true",
      link: [],
    },
    {
      id: 4,
      BGImageUrl: "",
      BGColor: "#fff",
      CardBGColor: "transparent",
      CardTextColor: "white",
      CardTitle: "",
      CardIconUrl: "/upgradeCloud/icons/ico--target.svg",
      CardHeading: "Databricks",
      CardDesc:
        "Harness unified data analytics gaining deeper insights with our guidance and empowering data-driven strategies.",
      isArrow: "true",
      link: [],
    },
    {
      id: 5,
      BGImageUrl: "",
      BGColor: "#fff",
      CardBGColor: "transparent",
      CardTextColor: "white",
      CardTitle: "",
      CardIconUrl: "/upgradeCloud/icons/ico--target.svg",
      CardHeading: "Amazon S3",
      CardDesc:
        "Securely store, retrieve and manage data knowing that we offer right scalability and durability to safeguard your valuable information.",
      isArrow: "true",
      link: [],
    },
    {
      id: 6,
      BGImageUrl: "",
      BGColor: "#fff",
      CardBGColor: "transparent",
      CardTextColor: "white",
      CardTitle: "",
      CardIconUrl: "/upgradeCloud/icons/ico--target.svg",
      CardHeading: "Azure Data Lake",
      CardDesc:
        "Experience high-performance and secure data management with Azure Data Lake, customized to meet your evolving data needs while we provide our expertise.",
      isArrow: "true",
      link: [],
    },
    {
      id: 7,
      BGImageUrl: "",
      BGColor: "#fff",
      CardBGColor: "transparent",
      CardTextColor: "white",
      CardTitle: "",
      CardIconUrl: "/upgradeCloud/icons/ico--target.svg",
      CardHeading: "Microsoft Fabric",
      CardDesc:
        "We leverage the capabilities of Microsoft Fabric, an integrated Lakehouse, Datawarehouse & AI-powered platform designed to drive your business efficiency through the seamless consolidation of data estate, enhanced access management, robust governance and compliance mechanisms.",
      isArrow: "true",
      link: [],
    },
  ];

  const CASE_STUDIES_DATA = [
    {
      imageURL: "",
      videoURL: "/CloudStackServices/case-studies/bg--video-industry.mp4",
      title: "Case Studies",
      heading: "Elevating Customer Experience",
      description: "",
      link: "/case-study-1",
      color: "#FFFFFF",
      bgCardColor: "#2B1624",
    },
    {
      imageURL: "",
      title: "",
      heading: "Non-government Association of Indian Industries",
      description:
        "99% uptime in saving man-days performance and 22% of capex saving after migrating on-premises ERP servers to the Azure cloud environment",
      link: "/case-study-1",
      color: "#000",
      bgCardColor: "#FCE6F4",
    },

    {
      imageURL: "/path/to/image1.jpg",
      title: "",

      heading: "Coffee Brand Distributor in Egypt and Middle East",
      description:
        "Decreasing downtime and optimising system cost along with 100% data transparency through Single Cloud System",
      link: "/case-study-1",
      color: "#000",
      bgCardColor: "#EFE9FB",
    },
    {
      imageURL: "/CloudStackServices/case-studies/bg--electical-devices.png",
      title: "",
      heading: "Middle East-based Electrical Products Manufacturer",
      description:
        "Require Development from Scratch. Customisation of manufacturing reports. Require Development from Scratch. ",
      link: "/case-study-1",
      color: "#000",
      bgCardColor: "#E1F2EF",
    },
    // Add more case studies here...
  ];
  const ACCORDION_DATA = [
    { id: 1, title: "Data Platform Modernization", content: "Collaborating with industry-leading partners such as AWS, Microsoft, and Salesforce, we modernize your data infrastructure on any cloud platform steering optimal acceptance and performance.", image: "/data-insights/our-capabilties/img-01.png" },
    { id: 2, title: "Advance Analytics", content: "From planning and investigating data to developing, employing, managing and examining models, we leverage your enterprise with the modern progresses in AI, machine learning and automation.", image: "/data-insights/our-capabilties/img-02.png" },
    { id: 3, title: "Business Intelligence", content: "Experience visuals of valuable insights from your crucial data sets from supply chain, finance and talent domains or more.", image: "/data-insights/our-capabilties/img-03.png" },
    { id: 4, title: "Data Governance", content: "We build scalable data warehouse architectures custom-made to your business requirements and our end-to-end data integration processes a unified view of your organization's information assets.", image: "/data-insights/our-capabilties/img-04.png" },
    { id: 5, title: "Data Warehouse and Integration", content: "Ensuring advanced metadata controls, precise access governance, and compliance mechanisms while adhering to stringent regulatory standards, we provide granular visibility and control over your data landscape.", image: "/data-insights/our-capabilties/img-05.png" },
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
      {/* Start--Section--HeroBanner======================================================== */}
      <EntIntro
        title="Achieve Breakthrough 
Performance through Data 
"
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
          "We collaborate closely with clients to design and implement robust cloud systems. Our focus is on recalibrating businesses, delivering enhanced value, and refining user experiences."
        }
      />
      {/* End--Overview-Section======================================================== */}

      {/* Start--DataVisualization--Section======================================================== */}
      <SectionWithSlider
        ID={"DATA_VISUALIZATION"}
        SectionImageUrl={sectionSliderBGImageUrl}
        Heading={"Data Visualization"}
        Desc={
          "With real-time data access and visualization,you will always have your finger on the pulse of your business operations."
        }
        Color={"white"}
        CardDataList={VISUALIZATION_DATA}
        pageID="ai-ml"
        setHeadingContainerWidth={true}
      ></SectionWithSlider>
      {/* End--DataVisualization--Section======================================================== */}
      {/* Start--Section--DataManagement======================================================================== */}
      <SectionWithSlider
        ID={"DATA_MGMT_DATA"}
        Heading={"Data Management"}
        Desc={
          "We revamp your core business application with cloud-native development so that you can win a competitive threshold in the marketplace. "
        }
        Color="#ffffff"
        CardDataList={DATA_MGMT_DATA}
        BGColor="#2B1624"
        setHeadingLayout="horizontal"
        moveSectionToTOP={true}
      />
      {/* End--Section--DataManagement======================================================================== */}

      {/* Section--Case-Studies======================================================================= */}
      <CaseStudiesSection casestudy={CASE_STUDIES_DATA} csLayout={"5"} />
      {/* End-Section--Case-Studies */}
      {/* Start--Section--Blog======================================================================= */}
      <BlogSection
        ID={"blog"}
        blogImageUrl={blogImageUrl}
        Heading={"Unveilling Hyper automation  for supply chain efficiency"}
        Desc={
          "IIoT offers a multitude of benefits that enable businesses to gain competitive edge through innovation and succeed in digital era."
        }
        Color={"white"}
      ></BlogSection>
      {/* End-Section--Blog */}
        <OurCapabilities
        setHeading="Our Capabilities"
        setDesc="Data is catalyst to the transformation and our commitment to delivering cutting-edge data solutions is rooted in three fundamental "
        setColor="#1D162B"
        setPadding={false}
        setHeadingLayout="horizontal"
        ACCORDION_DATA={ACCORDION_DATA}
        
   />
   
      {/* Start--Section--Testimonial======================================================================= */}
      <h1>Pending with Abhay---Testimonial</h1>
      {/* End-Section--Testimonial======================================================= */}
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

export default DataInsights;
