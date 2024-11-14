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


const DataInsights = () => {
  const sectionSliderBGImageUrl =
    "/data-insights/backgrounds/bg--data-visualization.png";
  const blogImageUrl = "/data-insights/blog.webp";

  const VISUALIZATION_DATA = [
    {
      id: 1,
      BGImageUrl: "",
      
      CardBGColor: "bg-primary-10",
      CardTextColor: "text-primary-900",
      CardTitle: "",
      CardIconUrl: "/data-insights/logos/logo--power-bi.png",
      CardHeading: "Power BI",
      CardDesc:
        "Leverage data potential with robust analytics engine, scalable data modeling and advanced visualization capabilities",
      isArrow: "",
      arrowColor: "#000",
      link: [],
    },

    {
      id: 2,
      BGImageUrl: "",
      CardBGColor: "bg-primary-10",
      CardTextColor: "#000",
      CardTitle: "",
      CardIconUrl: "/data-insights/logos/logo--tableau.png",
      CardHeading: "Tableau",
      CardDesc:
        "Integrate diverse data sources, enable intuitive visualization, and deploy secure interactive dashboards with Tableau",
      isArrow: "",
      arrowColor: "#000",
      link: [],
    },
    {
      id: 3,
      BGImageUrl: "",
      CardBGColor: "bg-primary-10",
      CardTextColor: "#000",
      CardTitle: "",
      CardIconUrl: "/data-insights/logos/logo--birst.png",
      CardHeading: "Birst",
      CardDesc:
        "Seamlessly connect and consolidates data from various sources, regardless of their structure or location (on-premises or in the cloud).",
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
        "Accelerate analytics with petabyte scale storage and high-performance querying",
      isArrow:false,
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
        "Optimize data storage and queries while we provide the experience to enhance data efficiency.",
      isArrow:false,
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
        "Unify analytics and data management, and integrate data warehousing and big data capabilities",
      isArrow: false,
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
        "Move, transform and orchestrate data across cloud and on-premises sources with automated workflows.",
      isArrow: false,
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
        "Harness unified data analytics gaining deeper insights with our data-driven strategies.",
      isArrow: false,
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
        "Securely store and serve data with highly scalable and cost-effective object storage.",
      isArrow: false,
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
        "Experience high-performance and secure data management with Azure Data Lake.",
      isArrow: false,
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
        "Integrated Lakehouse, Datawarehouse & AI-powered platform driving business effectiveness.",
      isArrow:false,
      link: [],
    },
  ];

  const TESTIMONIAL_DATA = [
    {
      id: 1,
      cardHeading: "Easy insights into business performance",
      cardDesc: 'We sincerely appreciate GITL team for delivering Power BI solution on time and with great quality. We really like the data visualisations & dashboards provided and it makes it easier for us to get a good grip on our business performance indicators.',
      designation: 'IT Manager',
      companyName:'Leading Cooling Services Provider in the Middle East',
    },
    {
      id: 2,
      cardHeading: "Real-Time Warehouse Data Interfacing",
      cardDesc: 'We decided to choose the LS Retail NAV solution after technical. One of the most interesting aspects of this implementation is the Automated Data Capture System (ADCS) which provides a real-time interface between the handheld devices at the warehouse and the back-end ERP system at the head-office.',
      designation: "IT Manager",
      companyName:`Saudi Arabia's Major Retail Chain`,
    },
    
  ];

  const CASE_STUDIES_DATA = [
    {
      imageURL: "",
      videoURL: "/CloudStackServices/case-studies/bg--video-industry.mp4",
      title: "Case Studies",
      heading: "Delivering high-performing data solutions globally",
      description: "",
      link: "#",
      color: "#FFFFFF",
      bgCardColor: "#2B1624",
    },
    {
      imageURL: "",
      title: "",
      heading: "Leading Indian Refiner of Precious Metals",
      description:
        "Improved data quality and leverages strategic decision-making with Power BI   Solution",
      link: "https://www.godrejinfotech.com/assets/pdf/case-studies/Precious-Metals-Refiner.pdf",
      color: "#000",
      bgCardColor: "#FCE6F4",
    },

    {
      imageURL: "/path/to/image1.jpg",
      title: "",
      heading: "Middle East based Leading Cooling Services Provider",
      description:
        "Experiences productivity savings and leverages data mart consolidation with Power BI implementation",
      link: "https://www.godrejinfotech.com/assets/pdf/case-studies/Leading-Cooling-Services-Provider.pdf",
      color: "#000",
      bgCardColor: "#EFE9FB",
    },
    {
      imageURL: "/CloudStackServices/case-studies/bg--electical-devices.png",
      title: "",
      heading: "Global fast-food chain with 170+ stores in Saudi Arabia",
      description:
        "Implements Data Lake for faster processing and lower storage costs and automates Data Archiving and Power BI ready Analytics for improved governance and insights",
      link: "/case-study-1",
      color: "#000",
      bgCardColor: "#E1F2EF",
    },
    // Add more case studies here...
  ];

  const ACCORDION_DATA = [
    { id: 1, title: "Data Platform Modernization", content: "Collaborating with industry-leading partners such as AWS, Microsoft, and Salesforce, we modernize data infrastructure on cloud platform steering optimal acceptance and performance. ", image: "/data-insights/OurCapabilities/DataPlatform.webp" },
    { id: 2, title: "Advance Analytics", content: "From planning and investigating data to developing, employing, managing and examining models, we leverage potential with AI, machine learning and automation.", image: "/data-insights/OurCapabilities/AdvanceAnalytics.webp" },
    { id: 3, title: "Business Intelligence", content: "Experience visuals of valuable insights of crucial data sets from supply chain, finance and talent domains or more.", image: "/data-insights/OurCapabilities/BusinessInt.webp" },
    { id: 4, title: "Data Governance", content: "Ensure advanced metadata controls, precise access governance and compliance mechanisms while adhering to stringent regulatory standards. We provide granular visibility and control over data landscape.", image: "/data-insights/OurCapabilities/DataGovence.webp" },
    { id: 5, title: "Data Warehouse and Integration", content: "We build scalable data warehouse architectures custom-made to business requirements and data integration helps in a unified view of organization's information assets. ", image: "/data-insights/OurCapabilities/DataWarehouse.webp" },
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
        title="Data driven intelligence for informed decisions"
        desc="Discover new insights and drive business success with our data analytics solutions"
        cta="Let's Connect"
        width="60%"
        video="/data-insights/homeBannerVideo.mp4"
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
        sectionTextColor={"text-primary-900"}
        cardData={VISUALIZATION_DATA}
        pageID="ai-ml"
        setHeadingContainerWidth={true}
      ></SectionWithSlider>

      {/* End--DataVisualization--Section======================================================== */}
      {/* Start--Section--DataManagement======================================================================== */}
      <SectionWithSlider
        ID={"DATA_MGMT_DATA"}
        sectionHeading={"Data Management"}
        sectionDesc={
          "Scalable data management solutions leveraging analytics and business intelligence for informed decisions."
        }
        sectionTextColor="text-neutral-white"
        cardData={DATA_MGMT_DATA}
        sectionBGColor="bg-secondary-900"
        setHeadingLayout="horizontal"
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
        readMoreUrl={"https://www.godrejinfotech.com/blogDetails.aspx?blog=13"}
      ></BlogSection>
      {/* End-Section--Blog */}

      <OurCapabilities
        setHeading="Our Capabilities"
        setDesc="Benefit from predictive insights and ensure data quality, security and compliance to maximize organization's data asset potential"
        setColor="bg-primary-900"
        setTextColor="text-primary-900"
        setHeadingLayout="horizontal"
        ACCORDION_DATA={ACCORDION_DATA}
      />
   
      {/* Start--Section--Testimonial======================================================================= */}
      <ReviewSliderSection
      ID={"TESTIMONIALS"}
      Heading={"Delighted customers share their success experience"}
      Desc={''}
      Color="text-neutral-white"
      CardDataList={TESTIMONIAL_DATA}
      BGColor="bg-primary-900"
      SectionHeadingMaxWidth={'70%'}
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
