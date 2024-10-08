'use client';
"use client";
import React from "react";

import EntIntro from "@/components/EntIntro";
import SectionNav from "@/components/SectionNav";
import OverviewSection from "@/sections/overview/OverviewSection";
import BlogSection from "@/sections/blog/BlogSection";
import DistinctiveSection from "@/sections/distinctive/DistinctiveSection";
import TransformBusinessForm from "@/sections/transformBusinessFrom/TransformBusinessFromSection";
import BenefitSliderSection from "@/sections/benefitSlider/BenefitSliderSection";
import IndustrySpotlight from "@/sections/industry-spotlight/industrySpotlight";
import ChallengeSection from "@/sections/challenge/challengeSection";
import SectionWidthSlider from "@/sections/sectionWithSlider/SectionWithSlider";



const D365Commerce = () => {
  const blogImageUrl = "/ai-ml/blog-bg.png";
  const imgBGURL_Challenges =
    "/upgradeCloud/backgrounds/bg--onprem-challenges-left.png";
    const defaultChallengesIcon = '/upgradeCloud/icons/ico--target.svg';
  
  
  const BENEFITS_CARDS_DATA = [
    {
      id: "1",
      icon:'',
      cardDesc: "Reduce complexity and total cost of ownership with a unified commerce platform.",
    },
    {
      id: "2",
      icon:'',
      cardDesc: "AI-based suggestions for cross-selling and up-selling that improves customer buying propositions.",
    },
    {
      id: "3",
      icon:'',
      cardDesc: "Strengthened commerce operations and customer experiences with omnichannel selling and real-time inventory visibility.",
    },
    {
      id: "4",
      icon:'',
      cardDesc: "Open access to full product catalogues and advanced in-built tools for proactive actions and decision-making.",
    },
    {
      id: "5",
      icon:'',
      cardDesc: "Connected view of marketing and commerce operations for improved coordination.",
    },
    {
      id: "6",
      icon:'',
      cardDesc: "Engaging digital storefronts with user-friendly web authoring and development tools.",
    },
  ];
  const INDUSTRY_SPOTLIGHT = [
    {
      id: 1,
      cardBGImageUrl:
        "/industry-spotlight/cards-backgrounds/card-bg--manufacturing.png",
      cardBGColor: "#7F4EE1",
      cardHeading: "Retail",
      cardDesc: "",
      isArrow: false,
      cardTextColor: "white",
    },
    {
      id: 2,
      cardBGImageUrl:
        "/industry-spotlight/cards-backgrounds/card-bg--retail.png",

      cardBGColor: "#7F4EE1",
      cardHeading: "Duty-Free and Travel Retail",
      cardDesc:
        "",
      isArrow: false,
      cardTextColor: "white",
    },
    {
      id: 3,
      cardBGImageUrl:
        "/industry-spotlight/cards-backgrounds/card-bg--trading-and-distribution.png",

      cardBGColor: "#7F4EE1",
      cardHeading: "Food and Beverage",
      cardDesc:
        "",
      isArrow: false,
      cardTextColor: "white",
    },
    {
      id: 4,
      cardBGImageUrl:
        "/industry-spotlight/cards-backgrounds/card-bg--healthcare.png",

      cardBGColor: "#EFE9FB",
      cardHeading: "Hospitality",
      cardDesc:
        "",
      isArrow: false,
      cardTextColor: "white",
    },
    
    // Add more cards as needed
  ];

  const DISTINCTIVE_DATA = [
    {
      _id: 1,
      desc: "Strong track record in Customer and Channel Commerce (C-Commerce) domain.",
      icon: "",
    },
    {
      _id: 2,
      desc: "Proficiency in Magento CE & Enterprise for a seamless end-to-end customer experience journey.",
      icon: "",
    },
    {
      _id: 3,
      desc: "Expertise in developing native iOS and Android apps for end-users, dealers, and sales personnel.",
      icon: "",
    },
    {
      _id: 4,
      desc: "Gold Partnership with Microsoft and specialized expertise in retail vertical, SMEs, and Channel Commerce.",
      icon: "",
    },
    {
      _id: 5,
      desc: "Troubleshoot, evaluates and optimizes D365 Commerce solution with expertise.",
      icon: "",
    },
    {
      _id: 6,
      desc: "Global delivery model and pool of certified D365 experts.",
      icon: "",
    },
    {
      _id: 7,
      desc: "Microsoft cloud partner and proven history of working with small, medium and large size enterprises.",
      icon: "",
    },
  ];

  const CHALLENGES_LIST_DATA = [
    { id: 1, title: "Managing timely order delivery & return", icon: defaultChallengesIcon },
    { id: 2, title: "Adapting to changing consumer behaviors", icon: defaultChallengesIcon },
    { id: 3, title: "Providing digital self-service options for seamless CX", icon: defaultChallengesIcon },
    { id: 4, title: "Optimising inventory management", icon: defaultChallengesIcon },
    { id: 5, title: "Breaking data silos for better collaboration", icon: defaultChallengesIcon },
  ];
  const KEY_CAPABILITIES = [
    {
      id: 1,
      BGImageUrl: "",
      BGColor: "#fff",
      CardBGColor: "transparent",
      CardTextColor: 'white',
      CardTitle: "",
      CardIconUrl: "/upgradeCloud/icons/ico--target.svg",
      CardHeading: "Omnichannel Engagement",
      CardDesc:
        "We smoothly relocate your IT to Azure Cloud without redesigning applications and with minimal disruption in your workflows.",
      isArrow: "true",
      link: [],
    },

    {
      id: 2,
      BGImageUrl: "",
      BGColor: "#fff",
      CardBGColor: "transparent",
      CardTextColor: 'white',
      CardTitle: "",
      CardIconUrl: "/upgradeCloud/icons/ico--target.svg",
      CardHeading: "Customer Loyalty & Personalization",
      CardDesc:
        "We revitalize your business performance delivering more agile, responsive and human-cantered ERP on Cloud.",
      isArrow: "true",
      link: [],
    },
    {
      id: 3,
      BGImageUrl: "",
      BGColor: "#fff",
      CardBGColor: "transparent",
      CardTextColor: 'white',
      CardTitle: "",
      CardIconUrl: "/upgradeCloud/icons/ico--target.svg",
      CardHeading: "Streamlined Digital Commerce",
      CardDesc:
        "With the ability to scale resources on-demand, we specialize in the precise, secure and efficient migration of your applications to the cloud,",
      isArrow: "",
      link: [],
    },
    {
      id: 4,
      BGImageUrl: "",
      BGColor: "#fff",
      CardBGColor: "transparent",
      CardTextColor: 'white',
      CardTitle: "",
      CardIconUrl: "/upgradeCloud/icons/ico--target.svg",
      CardHeading: "Sample Heading",
      CardDesc:
        "Highest levels of security and privacy, ensuring data is safeguarded",
      isArrow: "",
      link: [],
    },
  ];


  return (
    <>
      {/* Start--HeroBanner-Section========================================================= */}
      <EntIntro
        title="Experience unified commerce, customer insights and streamlined operations with D365 Commerce"
        desc="Delivering tailored solutions for eCommerce, point-of-sale and customer relationship management"
        cta="Let's Connect"
        width="60%"
        video="https://gitl-usa.s3.us-west-1.amazonaws.com/banner1.mp4"
      />

      {/* End--HeroBanner-Section=========================================================== */}

      {/* Start--Section-Navigation-Section============================================================== */}
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

      {/* End--Section-Navigation-Section================================================================ */}

      {/* Start--Overview-Section============================================================== */}
      <OverviewSection
        Text={
          "Dynamics 365 Commerce enables seamless omnichannel experiences, integrating back-office, in-store, call center, and digital, driven by consumer insights."
        }
      />
      {/* End--Overview-Section================================================================ */}

              {/* Start--Section--Challenges======================================================================== */}
      <ChallengeSection
        setHeading="Retail Business Challenges"
        setDesc="Retailers face a pressing need to evolve with tech-savvy customers, prioritizing personalized connections and seamless interactions."
        setColor="#FFFFFF"
        setImageBGURL={imgBGURL_Challenges}
        setChallengeList = {CHALLENGES_LIST_DATA}
      />
      {/* End--Section--Challenges======================================================================== */}
{/* Start--Section--UltimateChoice======================================================================== */}
       <SectionWidthSlider
        ID={"ULTIMATE_CHOICE_DATA"}
        sectionHeading={"Why Cloud is your Ultimate Choice?"}
        sectionDesc={
          "With a fault-tolerant architecture and a global network of data centers, cloud empowers you to expand your infrastructure and leverage advanced analytics."
        }
        sectionTextColor="#ffffff"
        cardData={KEY_CAPABILITIES}
        sectionBGColor="#2B1624"
        setHeadingLayout="horizontal"

      />
      {/* End--Section--UltimateChoice======================================================================== */}
     
      {/* Start--Industry-Spotlight-Section============================================================== */}
      <IndustrySpotlight cardData={INDUSTRY_SPOTLIGHT} />
      {/* End--Industry-Spotlight-Section================================================================ */}

      

      {/* Start--Benefits-Section============================================================== */}
      <BenefitSliderSection
        ID={"BENEFIT"}
        sectionBGColor={"#1D162B"}
        sectionHeading={"D365 Commerce Benefits"}
        sectionDesc={
          "Discover a scalable and secure commerce platform that empowers retailers to thrive in fast-paced digital landscape."
        }
        sectionTextColor={"white"}
        cardData={BENEFITS_CARDS_DATA}
        SectionHeadingMaxWidth={"100%"}
      />
      {/* End--Benefits-Section================================================================ */}

      


     

      

      {/* Start--Blogs-Section============================================================== */}
      <BlogSection
        ID={"blog"}
        blogImageUrl={blogImageUrl}
        Heading={"The Significance of Dynamics 365 Commerce in B2B Sales Evolution"}
        Desc={
          "In the realm of B2B digital sales, Dynamics 365 Commerce stands as a beacon of innovation. This platform plays a pivotal role in reshaping B2B sales strategies, enabling businesses to navigate the digital landscape effectively. "
        }
        Color={"white"}
      ></BlogSection>
      {/* End--Blogs-Section================================================================ */}

      {/* Start--Distinctive-Section============================================================== */}
      <DistinctiveSection
        DistinctiveData={DISTINCTIVE_DATA}
        ID={"Distinctive"}
        Title={"The Distinctive Edge"}
        Desc={
          "Maximize ROI and transform your commerce experience with our D365 Commerce expertise"
        }
      ></DistinctiveSection>
      {/* End--Distinctive-Section================================================================ */}
     

      {/* Start--Transform-Business-Form-Section============================================================== */}
      <TransformBusinessForm
        Title={"Transform your Business with us"}
        Desc={
          "Let us discuss how D365 Commerce can help you with rapid growth."
        }
      ></TransformBusinessForm>
      {/* End--Transform-Business-Form-Section================================================================ */}
    </>
  );
};

export default D365Commerce;
