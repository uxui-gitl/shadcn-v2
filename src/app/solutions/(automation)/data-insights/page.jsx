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
const DataInsights = () => {
  const sectionSliderBGImageUrl =
    "/data-insights/backgrounds/bg--data-visualization.png";
  const blogImageUrl = "/ai-ml/blog-bg.png";

  const VISUALIZATION_DATA = [
    {
      id: 1,
      BGImageUrl: "",
      CardBGColor: "#FFF",
      CardColor: "#000",
      cardTitle: "",
      cardIconUrl: "/data-insights/logos/logo--power-bi.png",
      cardHeading: "Power BI",
      cardDesc:
        "Backed by seasoned professionals, we have developed a distinct proficiency in harnessing the capabilities of Power BI. Our focus is to distill intricate data into actionable insights that catalyze a culture of business excellence.",
      isArrow: "",
      arrowColor: "#000",
      link: [],
    },

    {
      id: 2,
      BGImageUrl: "",
      CardBGColor: "#FFF",
      CardColor: "#000",
      cardTitle: "",
      cardIconUrl: "/data-insights/logos/logo--tableau.png",
      cardHeading: "Tableau",
      cardDesc:
        "Seamlessly integrate Tableau into your operations, enabling to visualize data in captivating ways, discover hidden trends and insights, and make informed decisions.",
      isArrow: "",
      arrowColor: "#000",
      link: [],
    },
    {
      id: 3,
      BGImageUrl: "",
      CardBGColor: "#FFF",
      CardColor: "#000",
      cardTitle: "",
      cardIconUrl: "/data-insights/logos/logo--birst.png",
      cardHeading: "Birst",
      cardDesc:
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
      CardColor: "white",
      cardTitle: "",
      cardIconUrl: "/upgradeCloud/icons/ico--target.svg",
      cardHeading: "Azure SQL Data Ware Housing",
      cardDesc:
        "Leverage seamless analysis of your business data and trust in our expertise to scale your insights.",
      isArrow: "true",
      link: [],
    },

    {
      id: 2,
      BGImageUrl: "",
      BGColor: "#fff",
      CardBGColor: "transparent",
      CardColor: "white",
      cardTitle: "",
      cardIconUrl: "/upgradeCloud/icons/ico--target.svg",
      cardHeading: "AWS Redshift",
      cardDesc:
        "Optimize your data storage and queries while we provide the experience to enhance your data efficiency.",
      isArrow: "true",
      link: [],
    },
    {
      id: 3,
      BGImageUrl: "",
      BGColor: "#fff",
      CardBGColor: "transparent",
      CardColor: "white",
      cardTitle: "",
      cardIconUrl: "/upgradeCloud/icons/ico--target.svg",
      cardHeading: "Azure Synapse",
      cardDesc:
        "Seamlessly integrate, analyze and visualize your data with Azure Synapse, and rely on us for real-time insights that drive informed decisions.",
      isArrow: "true",
      link: [],
    },
    {
      id: 4,
      BGImageUrl: "",
      BGColor: "#fff",
      CardBGColor: "transparent",
      CardColor: "white",
      cardTitle: "",
      cardIconUrl: "/upgradeCloud/icons/ico--target.svg",
      cardHeading: "Azure Data Factory",
      cardDesc:
        "Effortlessly move, transform and orchestrate data while we streamline your data workflows for you.",
      isArrow: "true",
      link: [],
    },
    {
      id: 4,
      BGImageUrl: "",
      BGColor: "#fff",
      CardBGColor: "transparent",
      CardColor: "white",
      cardTitle: "",
      cardIconUrl: "/upgradeCloud/icons/ico--target.svg",
      cardHeading: "Databricks",
      cardDesc:
        "Harness unified data analytics gaining deeper insights with our guidance and empowering data-driven strategies.",
      isArrow: "true",
      link: [],
    },
    {
      id: 5,
      BGImageUrl: "",
      BGColor: "#fff",
      CardBGColor: "transparent",
      CardColor: "white",
      cardTitle: "",
      cardIconUrl: "/upgradeCloud/icons/ico--target.svg",
      cardHeading: "Amazon S3",
      cardDesc:
        "Securely store, retrieve and manage data knowing that we offer right scalability and durability to safeguard your valuable information.",
      isArrow: "true",
      link: [],
    },
    {
      id: 6,
      BGImageUrl: "",
      BGColor: "#fff",
      CardBGColor: "transparent",
      CardColor: "white",
      cardTitle: "",
      cardIconUrl: "/upgradeCloud/icons/ico--target.svg",
      cardHeading: "Azure Data Lake",
      cardDesc:
        "Experience high-performance and secure data management with Azure Data Lake, customized to meet your evolving data needs while we provide our expertise.",
      isArrow: "true",
      link: [],
    },
    {
      id: 7,
      BGImageUrl: "",
      BGColor: "#fff",
      CardBGColor: "transparent",
      CardColor: "white",
      cardTitle: "",
      cardIconUrl: "/upgradeCloud/icons/ico--target.svg",
      cardHeading: "Microsoft Fabric",
      cardDesc:
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
        title="Reimagine Your Business With Our Intelligent Edge 
"
        desc="Reimagine Your Business Capabilities with
our Intelligent Edge Cloud Stack and Services"
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
        setHeading="Take Confident Business Decisions with Industry Tailored Cloud Technology"
        setDesc="This approach helps us to adeptly manage software development projects involving complexity levels."
        setColor="#1D162B"
        setPadding={false}
        setHeadingLayout="horizontal"
        setHeadingContainerWidthFull={'w-1/2'}
   />
      
      {/* Section--Distinctive Edge======================================================================= */}
      <DistinctiveSection
        DistinctiveData={DISTINCTIVE_DATA}
        ID={"Distinctive"}
        Title={"The Distinctive Edge"}
        Desc={
          "Trust Godrej Infotech to leverage Intelligent technologies and lead business into competitive digital landscape."
        }
      ></DistinctiveSection>
      {/* End-Section--Distinctive Edge */}

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
