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
import ServicesCardSlider from "@/sections/services-cards-slider/ServicesCardSlider";

/**
 * * New Imports---Sandeep Rana
 * * 2022-08-09
 */
import OverviewSection from "@/sections/overview/OverviewSection";
import HighlightPromo from "@/sections/highlight-promo/HighlightPromo";
import SolutionSliderCloud from "@/sections/solutionSlider/SolutionSliderCloud";
import BlogSection from "@/sections/blog/BlogSection";
import DistinctiveSection from "@/sections/distinctive/DistinctiveSection";
import TransformBusinessForm from "@/sections/transformBusinessFrom/TransformBusinessFromSection";
import SectionWithSlider from "@/sections/sectionWithSlider/SectionWithSlider";
import ReviewSliderSection from '@/sections/reviewSlider/ReviewSliderSection';
import SectionWidthSlider from "@/sections/sectionWithSlider/SectionWithSlider";
import SectionSliderAdditionalData from "@/sections/SectionSliderAdditionalData/SectionSliderAdditionalData";

const CloudStack = () => {
  const imgURL = "/CloudStackServices/smiling-businessman-standing-with-arms-folded-isolated-white.png";
  const imgBgURL = "/CloudStackServices/background/bg--strategic-partnership.png";

  const advanceSolutionData = [
    {
      id: 1,
      cardBGImageUrl: "",
      cardBGColor: "#EFE9FB",
      cardTextColor: 'black',
      cardTitle: "Machine Learning",
      cardIconUrl: "",
      cardHeading: "Automated Pattern Recognition",
      isArrow: "",
      additionalData: [
        { id: 1, text: 'dummy text dummy textdummy text dummy text' },
        { id: 2, text: 'dummy text dummy text' },
        { id: 3, text: 'dummy text dummy text' },
        { id: 4, text: 'dummy text dummy text' },
      ]
    },
    {
      id: 2,
      cardBGImageUrl: "",
      cardBGColor: "#EFE9FB",
      cardTextColor: 'black',
      cardTitle: "Artificial Intelligence",
      cardIconUrl: "",
      cardHeading: "Cognitive Computing Solutions",
      isArrow: "",
      additionalData: [
        { id: 1, text: 'dummy text dummy textdummy text dummy text', textColor:'#000' },
        { id: 2, text: 'dummy text dummy text' },
        { id: 3, text: 'dummy text dummy text' },
        { id: 4, text: 'dummy text dummy text' },
      ]
    },

    {
      id: 3,
      cardBGImageUrl: "",
      cardBGColor: "#EFE9FB",
      cardTextColor: 'black',
      cardTitle: "Robotic Process Automation",
      cardIconUrl: "",
      cardHeading: "Efficient Task Automation",
      isArrow: "",
      link: [],
    },
    {
      id: 4,
      cardBGImageUrl: "",
      cardBGColor: "#EFE9FB",
      cardTextColor: 'black',
      cardTitle: "IIoT",
      cardIconUrl: "",
      cardHeading: "Asset Optimization and Uptime", 
      isArrow: "",
      link: [],
    },
  ]
  const blogImageUrl = "/ai-ml/blog-bg.png";


  const ULTIMATE_CHOICE_DATA = [
    {
      id: 1,
      BGImageUrl: "",
      BGColor: "#fff",
      CardBGColor: "transparent",
      CardTextColor: 'white',
      CardTitle: "",
      CardIconUrl: "/upgradeCloud/icons/ico--target.svg",
      CardHeading: "Sample Heading",
      CardDesc:
        "Scalability according to evolving business needs.Scalability according to evolving business needs.",
      isArrow: "",
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
      CardHeading: "Sample Heading",
      CardDesc:
        "Faster development cycles with pay-as-you-go model offering cost effectiveness and business agility",
      isArrow: "",
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
      CardHeading: "Sample Heading",
      CardDesc:
        "Drive business agility and improved ROI with automation",
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

  const reviewCardData = [
    {
      id: 1,
      cardHeading: "sdkhgajgdsjhgasdkhg",
      cardDesc: 'sjdgvfjkgqukhdbkqwgdkqhgkwdg'
    },
    {
      id: 2,
      cardHeading: "sdkhgajgdsjhgasdkhg",
      cardDesc: 'sjdgvfjkgqukhdbkqwgdkqhgkwdg'
    },
    {
      id: 3,
      cardHeading: "sdkhgajgdsjhgasdkhg",
      cardDesc: 'sjdgvfjkgqukhdbkqwgdkqhgkwdg'
    },
  ];

  const CASE_STUDIES_DATA = [
    {
      imageURL: "",
      videoURL: "",
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
    // Add more cards here...
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
        setHeadingContainerWidthFull={'w-full'}
      />

  {/* Advance Solution for Business Future */}
      <SectionSliderAdditionalData
        ID={'additionalData'}
        sectionImageUrl={''}
        sectionHeading={'Advance Solution for Business Future'}
        sectionDesc={'This approach helps us to adeptly manage software development projects involving complexity levels.'}
        sectionHeaderMaxWidth={'50%'}
        slidesPerView="3"
        autoplay="false"
        cardData={advanceSolutionData}
        sectionTextColor="#000"
        sectionBGColor="#fff"
      >

      </SectionSliderAdditionalData>

  {/* end Advance Solution for Business Future */}

      {/* Start--Section--UltimateChoice======================================================================== */}
      <SectionWithSlider
        ID={"ULTIMATE_CHOICE_DATA"}
        Heading={"Why Cloud is your Ultimate Choice?"}
        Desc={
          "With a fault-tolerant architecture and a global network of data centers, cloud empowers you to expand your infrastructure and leverage advanced analytics."
        }
        Color="#ffffff"
        CardDataList={ULTIMATE_CHOICE_DATA}
        BGColor="#2B1624"
        setHeadingLayout="horizontal"

      />
      {/* End--Section--UltimateChoice======================================================================== */}
           {/* Start--Service--Section======================================================== */}
           <ServicesCardSlider cardData={SERVICE_CARDS_DATA} heading={"Leading Forefront with <br/> our Cloud Services"} desc={"We aim for business foster growth and convert effective pilot initiatives into enterprise-scale implementation"} color={"#1D162B"}  />

{/* End--Service--Section======================================================== */}


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
      <CaseStudiesSection casestudy={CASE_STUDIES_DATA} csLayout={"5"} bgColor='#FFFFFF' />
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
      <ReviewSliderSection
        ID={"ULTIMATE_CHOICE_DATA"}
        Heading={"Delighted customers share their success experience"}
        Desc={''}
        Color="#ffffff"
        CardDataList={reviewCardData}
        BGColor="#1D162B"
        SectionHeadingMaxWidth={'70%'}
      ></ReviewSliderSection>
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
