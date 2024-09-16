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
      cardDesc: "A high degree of accuracy and consistency in business operations",
    },
    {
      id: "2",
      icon:'',
      cardDesc: "Informed decision-making to extract valuable insights and identify patterns, correlation, and trends",
    },
    {
      id: "3",
      icon:'',
      cardDesc: "Real-time problem-solving enable minimum disruptions and ensures uninterrupted business operations",
    },
    {
      id: "4",
      icon:'',
      cardDesc: "Automation of repetitive tasks, resulting in increased operational efficiency and productivity.",
    },
    {
      id: "5",
      icon:'',
      cardDesc: "Reduce equipment downtime and increase operational efficiency with real-time monitoring and predictive maintenance",
    },
  ];
  const INDUSTRY_SPOTLIGHT = [
    {
      id: 1,
      cardBGImageUrl:
        "/industry-spotlight/cards-backgrounds/card-bg--manufacturing.png",
      cardBGColor: "#7F4EE1",
      cardHeading: "Manufacturing",
      cardDesc: "",
      isArrow: false,
      cardTextColor: "white",
    },
    {
      id: 2,
      cardBGImageUrl:
        "/industry-spotlight/cards-backgrounds/card-bg--retail.png",

      cardBGColor: "#7F4EE1",
      cardHeading: "Retail",
      cardDesc:
        "AI-driven workflows, OCR and rule-based system enables accurate results",
      isArrow: false,
      cardTextColor: "white",
    },
    {
      id: 3,
      cardBGImageUrl:
        "/industry-spotlight/cards-backgrounds/card-bg--trading-and-distribution.png",

      cardBGColor: "#7F4EE1",
      cardHeading: "Trading & Distribution",
      cardDesc:
        "Manage contract workflows, forms and compliance with consistency and regulatory adherence",
      isArrow: false,
      cardTextColor: "white",
    },
    {
      id: 4,
      cardBGImageUrl:
        "/industry-spotlight/cards-backgrounds/card-bg--healthcare.png",

      cardBGColor: "#EFE9FB",
      cardHeading: "Healthcare",
      cardDesc:
        "Empower employees to focus on strategic tasks to deliver attentive experience to customers",
      isArrow: false,
      cardTextColor: "white",
    },
    {
      id: 5,
      cardBGImageUrl:
        "/industry-spotlight/cards-backgrounds/card-bg--professional-services.png",

      cardBGColor: "#EFE9FB",
      cardHeading: "Professional Services",
      cardDesc: "",
      isArrow: false,
      cardTextColor: "white",
    },
    {
      id: 5,
      cardBGImageUrl:
        "/industry-spotlight/cards-backgrounds/card-bg--project.png",

      cardBGColor: "#EFE9FB",
      cardHeading: "Project",
      cardDesc: "",
      isArrow: false,
      cardTextColor: "white",
    },
    // Add more cards as needed
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

  const CHALLENGES_LIST_DATA = [
    { id: 1, title: "Need of digital self-service purchase options", icon: defaultChallengesIcon },
    { id: 2, title: "Unreliable Backup Storage", icon: defaultChallengesIcon },
    { id: 3, title: "Weak Disaster Recovery and Redundancy", icon: defaultChallengesIcon },
    { id: 4, title: "Inadequate Data Integrity and Automation Capabilities", icon: defaultChallengesIcon },
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
        title="Scale up your Omnichannel Business"
        desc="Scale Up Your Omnichannel Business with Personalised Experience Microsoft D365 Commerce"
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
          "Dynamics 365 Commerce offers a complete solution to increase customer engagement through intuitive shopping experiences. It brings together several retail channels, including back-office, in-store, call centre"
        }
      />
      {/* End--Overview-Section================================================================ */}

              {/* Start--Section--Challenges======================================================================== */}
      <ChallengeSection
        setHeading="Challenges of Retail & Ecommerce Management"
        setDesc="Customers now seek personalized experiences, seamless interactions, and a sense of connection with the brands they choose. Businesses face the challenge of understanding this shift"
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
        sectionHeading={"Microsoft Promise for Your Business"}
        sectionDesc={
          "Driving transformational changes, Microsoft Dynamics minimizes operational cost and increases overall efficiency of employees and customers."
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
        Heading={"Unveilling Hyper automation  for supply chain efficiency"}
        Desc={
          "IIoT offers a multitude of benefits that enable businesses to gain competitive edge through innovation and succeed in digital era."
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
          "Trust Godrej Infotech to leverage Intelligent technologies and lead business into competitive digital landscape."
        }
      ></DistinctiveSection>
      {/* End--Distinctive-Section================================================================ */}
     

      {/* Start--Transform-Business-Form-Section============================================================== */}
      <TransformBusinessForm
        Title={"Transform your Business with us"}
        Desc={
          "Let us discuss how intelligent technologies can help you with rapid growth."
        }
      ></TransformBusinessForm>
      {/* End--Transform-Business-Form-Section================================================================ */}
    </>
  );
};

export default D365Commerce;
