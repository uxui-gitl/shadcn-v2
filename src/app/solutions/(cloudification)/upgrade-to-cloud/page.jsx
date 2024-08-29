"use client";

import React from "react";
import Image from "next/image";

import EntIntro from "@/components/EntIntro";
import SectionNav from "@/components/SectionNav";
import OverviewSection from "@/sections/overview/OverviewSection";
import HubExpertise from "@/sections/hub-of-expertise/HubExpertise";
import BlogSection from "@/sections/blog/BlogSection";
import DistinctiveSection from "@/sections/distinctive/DistinctiveSection";
import TransformBusinessForm from "@/sections/transformBusinessFrom/TransformBusinessFromSection";
import HighlightPromo from "@/sections/highlight-promo/HighlightPromo";
import CaseStudiesSection from "@/sections/case-studies/CaseStudiesSection";
import Benefits from "@/components/Benefits";
import SectionWrapper from "@/components/SectionWrapper";
import ChallengeSection from "@/sections/challenge/challengeSection";
import SectionWithSlider from "@/sections/sectionWithSlider/SectionWithSlider";
import ServicesCardSlider from "@/sections/services-cards-slider/ServicesCardSlider";

const UpgradeToCloud = () => {
  const imgBgURL = "/CloudStackServices/background/bg--cloud-services.png";
  const imgBGURL_Challenges =
    "/upgradeCloud/backgrounds/bg--onprem-challenges-left.png";
  const msLogoURL =
    "/CloudStackServices/logos/logo--microsoft-solution-partner.png";
  const yourImageUrl = "/ai-ml/AI-bgimage.jpg";
  const UPGRADE_NOW_DATA = [
    {
      id: 1,
      BGImageUrl: "",
      BGColor: "#fff",
      CardBGColor:"transparent",
      CardTextColor:'white',
      CardTitle: "",
      CardIconUrl: "/upgradeCloud/icons/ico--target.svg",
      CardHeading: "Computer<br/>Vision",
      CardDesc:
        "We specialize in custom video and image analysis tool, leveraging advanced technology like OpenCV to optimize or create computer vision algorithms.",
      isArrow: "true",
      link: [],
    },

    {
      id: 2,
      BGImageUrl: "",
      BGColor: "#fff",
      CardBGColor:"transparent",
      CardTextColor:'white',
      CardTitle: "",
      CardIconUrl: "/upgradeCloud/icons/ico--target.svg",
      CardHeading: "Speech & Language",
      CardDesc:
        "Our approach to Speech and Language AI empowers business with the tools to elevate customer experiences and stand",
      isArrow: "true",
      link: [],
    },
    {
      id: 3,
      BGImageUrl: "",
      BGColor: "#fff",
      CardBGColor:"transparent",
      CardTextColor:'white',
      CardTitle: "",
      CardIconUrl: "/upgradeCloud/icons/ico--target.svg",
      CardHeading: "Document Understanding",
      CardDesc:
        "We enable error-free and AI-driven data capture from diverse document types and helps business with unstructured data.",
      isArrow: "true",
      link: [],
    },
    {
      id: 4,
      BGImageUrl: "",
      BGColor: "#fff",
      CardBGColor:"transparent",
      CardTextColor:'white',
      CardTitle: "",
      CardIconUrl: "/upgradeCloud/icons/ico--target.svg",
      CardHeading: "Conversational<br/>AI",
      CardDesc:
        "Ensuring a more human-centric engagement with data, we provide solutions that facilitate customer-centric decision-making. ",
      isArrow: "true",
      link: [],
    },
  ];

  const BENEFITS_DATA = [
    {
      _id: 1,
      icon: "benefits-ai-ml/process-analyse",
      cardDesc:
        "A high degree of accuracy and consistency in business operations.",
    },
    {
      _id: 2,
      icon: "benefits-ai-ml/anticipate-future",
      cardDesc:
        "Informed decision-making by extracting valuable insights and identifying patterns, correlation, and trends. ",
    },
    {
      _id: 3,
      icon: "benefits-ai-ml/effortless-communicate",
      cardDesc:
        "Real-time problem-solving capabilities enable minimizing disruptions and ensuring uninterrupted business operations. ",
    },
    {
      _id: 4,
      icon: "benefits-ai-ml/optimise-supply-chain",
      cardDesc:
        "Optimize supply chain management, predict maintenance need, and elevate quality control, resulting in higher productivity ",
    },
  ];

  const CASE_STUDIES_DATA = [
    {
      imageURL: "/CloudStackServices/case-studies/bg--coffee-beans.png",
      videoURL: "/CloudStackServices/case-studies/bg--video-industry.mp4",
      title: "Case Studies",
      heading: "Elevating Customer Experience",
      description:
        "99% uptime in saving man-days performance and 22% of capex saving after migrating on-premises ERP servers to the Azure cloud environment",
      link: "/case-study-1",
      color: "#FFFFFF",
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
  const HUBEXPERTISE_COUNTER_DATA = [
    { start: 10, end: 50, description: "Cloud Deployments" },
    { start: 10, end: 15, description: "Cloud Certified Professionals" },
    // Add more counters as needed
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
  const SERVICE_CARDS_DATA = [
    {
      title: "Planning and Designing",
      hoverTitle: "Planning & Designing",
      description: "Meticulous selection of frameworks, programming languages, libraries and tools followed by the development of innovative application with a clean code architecture.",
      content: "Additional content for Card 1",
      imageURL: '/techStack1.png'
    },
    {
      title: "Define and Develop",
      hoverTitle: "Define & Develop",
      description: "Meticulous selection of frameworks, programming languages, libraries and tools followed by the development of innovative application with a clean code architecture.",
      content: "Additional content for Card 2",
      imageURL: '/techStack1.png'
    },
    {
      title: "Testing",
      hoverTitle: "Testing",
      description: "Meticulous selection of frameworks, programming languages, libraries and tools followed by the development of innovative application with a clean code architecture.",
      content: "Additional content for Card 3",
      imageURL: '/techStack1.png'
    },
    {
      title: "Deployment",
      hoverTitle: "Deployment",
      description: "Meticulous selection of frameworks, programming languages, libraries and tools followed by the development of innovative application with a clean code architecture.",
      content: "Additional content for Card 4",
      imageURL: '/techStack1.png'
    },
    {
      title: "Maintainence",
      hoverTitle: "Maintainence",
      description: "Meticulous selection of frameworks, programming languages, libraries and tools followed by the development of innovative application with a clean code architecture.",
      content: "Additional content for Card 5",
      imageURL: '/techStack1.png'
    },
    {
      title: "Maintainence",
      hoverTitle: "Maintainence",
      description: "Meticulous selection of frameworks, programming languages, libraries and tools followed by the development of innovative application with a clean code architecture.",
      content: "Additional content for Card 5",
      imageURL: '/techStack1.png'
    },
    // Add more cards here...
  ];
  const blogImageUrl = "/ai-ml/blog-bg.png";
  return (
    <>
      {/* Section--HeroBanner======================================================================= */}
      <EntIntro
        title="Seamless Upgrade to Cloud"
        desc="Minimizing Cost and Strengthening Agility with Better Security"
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
      {/* Section--Overview=======================================================================  */}
      <OverviewSection
        Text={
          "Minimizing Cost and Strengthening Agility with Better Security.We help enterprises to foster resilience by entailing bespoke and inclusive cloud upgradation roadmap."
        }
      />
      {/* End-Section--Overview */}
      {/* Start--Section--Challenges======================================================================== */}
      <ChallengeSection
        setHeading="On-premisesInfrastructure Challenges"
        setColor="#FFFFFF"
        setImageBGURL={imgBGURL_Challenges}
      />
      {/* End--Section--Challenges======================================================================== */}

      {/* Start--Section--UpgradeNow======================================================================== */}
      <SectionWithSlider
        ID={"UPGRADE_NOW_DATA"}
        Heading={"Upgrade Now"}
        Desc={
          "We revamp your core business application with cloud-native development so that you can win a competitive threshold in the marketplace. "
        }
        Color="#ffffff"
        CardDataList={UPGRADE_NOW_DATA}
        BGColor="#2B1624"
         setHeadingLayout="horizontal"
       
      />
      {/* End--Section--UpgradeNow======================================================================== */}
            {/* Start--Service--Section======================================================== */}
            <ServicesCardSlider cardData={SERVICE_CARDS_DATA} heading={"Streamline Cloud<br/>Upgrade Service"} desc={"This approach helps us to adeptly manage software development projects involving complexity levels."} color={"#1D162B"}  />

{/* End--Service--Section======================================================== */}

      {/* Section--Trained in Cloud Services= */}
      <HighlightPromo
        blurEffect="blurON"
        setHeading="We are Trained and Accredited in Cloud Services"
        setDesc="We undergo demanding assessment and authorisation to guarantee that our expertise and practices fulfil highest standards of excellence."
        setColor="#1D162B"
        setImageBGURL={imgBgURL}
        setLogoImages=""
        setPadding={true}
        setMSLogoURL={msLogoURL}
        setHeadingContainerWidthFull={'w-full'}
      />
      {/* End-Section--Trained in Cloud-Services */}
      {/* Section--Hub-of-Expertise=======================================================================  */}
      <HubExpertise
        setHeading="Hub of Expertise"
        setDesc="We are here to build edge and bring technology brilliance with the finest in the industry."
        setColor="#ffffff"
        counters={HUBEXPERTISE_COUNTER_DATA}
      />
      {/* End-Section--Hub-of-Expertise */}
      {/* Section--Case-Studies======================================================================= */}
      <CaseStudiesSection casestudy={CASE_STUDIES_DATA} csLayout={"1"} />
      {/* End-Section--Case-Studies */}
      {/* Section--Blog======================================================================= */}
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

export default UpgradeToCloud;