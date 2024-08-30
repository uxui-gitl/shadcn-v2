"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

import EntIntro from "@/components/EntIntro";
import SectionNav from "@/components/SectionNav";
import OverviewSection from "@/sections/overview/OverviewSection";
import EnterpriseTransformation from "@/sections/es-transformation-section/enterpriseTransformation";
import ServicesCardSlider from "@/sections/services-cards-slider/ServicesCardSlider";
import EnterpriseTransformationCards from "@/sections/es-transformation-section/enterpriseTransformationCards";
import CommonCardThreeSlider from "@/sections/commonCardThreeSlider/CommonCardThreeSlider";
import HubExpertise from "@/sections/hub-of-expertise/HubExpertise";
import BlogSection from "@/sections/blog/BlogSection";
import TransformBusinessForm from "@/sections/transformBusinessFrom/TransformBusinessFromSection";
import ExperienceSlider from "@/sections/experience-slider/experienceSlider";
import HolisticApproach from "@/sections/es-transformation-section/holisticApproach";

const EnterpriseSuite = () => {
  const blogImageUrl = "/ai-ml/blog-bg.png";
  const SERVICE_CARDS_DATA = [
    {
      title: "Planning and Designing",
      hoverTitle: "Planning & Designing",
      description:
        "Meticulous selection of frameworks, programming languages, libraries and tools followed by the development of innovative application with a clean code architecture.",
      content: "Additional content for Card 1",
      imageURL: "/techStack1.png",
    },
    {
      title: "Define and Develop",
      hoverTitle: "Define & Develop",
      description:
        "Meticulous selection of frameworks, programming languages, libraries and tools followed by the development of innovative application with a clean code architecture.",
      content: "Additional content for Card 2",
      imageURL: "/techStack1.png",
    },
    {
      title: "Testing",
      hoverTitle: "Testing",
      description:
        "Meticulous selection of frameworks, programming languages, libraries and tools followed by the development of innovative application with a clean code architecture.",
      content: "Additional content for Card 3",
      imageURL: "/techStack1.png",
    },
    {
      title: "Deployment",
      hoverTitle: "Deployment",
      description:
        "Meticulous selection of frameworks, programming languages, libraries and tools followed by the development of innovative application with a clean code architecture.",
      content: "Additional content for Card 4",
      imageURL: "/techStack1.png",
    },
    {
      title: "Maintainence",
      hoverTitle: "Maintainence",
      description:
        "Meticulous selection of frameworks, programming languages, libraries and tools followed by the development of innovative application with a clean code architecture.",
      content: "Additional content for Card 5",
      imageURL: "/techStack1.png",
    },
    // Add more cards here...
  ];
  const SOLUTION_DATA = [
    {
      id: 1,
      cardBGColor: "#F5B1DC",
      cardHeading: "Dealer<br/>Management",
      cardDesc:
        "Require Development from Scratch. Customisation of manufacturing reports",
      isArrow: true,
      cardTextColor: "black",
      cardTopImageUrl: "https://flowbite.com/docs/images/blog/image-1.jpg",
    },
    {
      id: 2,
      cardBGColor: "#FCE6F4",
      cardHeading: "Value Manufacturing Process Management",
      cardDesc:
        "Require Development from Scratch. Customisation of manufacturing reports",
      isArrow: true,
      cardTextColor: "black",
      cardTopImageUrl: "https://flowbite.com/docs/images/blog/image-4.jpg",
    },
    {
      id: 3,
      cardBGColor: "#CDBAF3",
      cardHeading: "Metal Recycling Operation Management",
      cardDesc:
        "Require Development from Scratch. Customisation of manufacturing reports",
      isArrow: true,
      cardTextColor: "black",
      cardTopImageUrl: "https://flowbite.com/docs/images/blog/image-7.jpg",
    },
    {
      id: 4,
      cardBGColor: "#E4E4E4",
      cardHeading: "Strengthen Potential",
      cardDesc:
        "Empower employees to focus on strategic tasks to deliver attentive experience to customers",
      isArrow: true,
      cardTextColor: "black",
      cardTopImageUrl: "https://flowbite.com/docs/images/blog/image-1.jpg",
    },
    {
      id: 5,
      cardBGImageUrl: "/rpa/ArtboardBg.png",
      cardBGColor: "#EFE9FB",
      cardHeading: "Enhance Flexibility",
      cardDesc:
        "Adapt to changing business needs without hiring and training new staff, saving time and expense",
      isArrow: true,
      cardTextColor: "black",
      cardTopImageUrl: "https://flowbite.com/docs/images/blog/image-2.jpg",
    },
    {
      id: 5,
      cardBGImageUrl: "/rpa/ArtboardBg.png",
      cardBGColor: "#EFE9FB",
      cardHeading: "Reduce AHT (Average Handling Time)",
      cardDesc:
        "Enhance customer service quality, minimize response time and improve operational efficiency",
      isArrow: false,
      cardTextColor: "black",
      cardTopImageUrl: "https://flowbite.com/docs/images/blog/image-3.jpg",
    },
  ];

  const HUBEXPERTISE_COUNTER_DATA = [
    {
      start: 10000,
      end: 15000,
      description: "Man Years  of Experience",
    },
    {
      start: 1200,
      end: 1000,
      description: "Implementation Sites",
    },
    {
      start: 1200,
      end: 500,
      description: "Employees Worldwide",
    },

    {
      start: 1200,
      end: 500,
      description: "Customer Worldwide",
    },
    {
      start: 10,
      end:25,
      description: "Years of Experience",
    },

    {
      staticTitle:'24*7',
      description: "Implementation Sites",
    },



    // Add more counters as needed
  ];
  return (
    <>
      {/* Start--HeroBanner-Section============================================================== */}
      <EntIntro
        title="Bridging Transformation
with Enterprise Agility
"
        desc="Reimagine Your Business Capabilities with
our Intelligent Edge Cloud Stack and Services"
        cta="Let's Connect"
        width="60%"
        video="https://gitl-usa.s3.us-west-1.amazonaws.com/banner1.mp4"
      />
      {/* End--HeroBanner-Section=============================================================== */}

      {/* Start--SectionNavigation============================================================== */}
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

      {/* End--SectionNavigation================================================================ */}

      {/* Start--OverviewSection============================================================== */}
      <OverviewSection
        Text={
          "We collaborate closely with clients to design and implement robust cloud systems. Our focus is on recalibrating businesses, delivering enhanced value, and refining user experiences."
        }
      />
      {/* End--OverviewSection================================================================ */}

      {/* Start--EnterpriseTransformation============================================================== */}
      <EnterpriseTransformation />
      <EnterpriseTransformationCards />
      {/* End--EnterpriseTransformation============================================================== */}


      {/* Start--Holistic-Approach============================================================== */}
      <HolisticApproach/>

      {/* End--Holistic-Approach============================================================== */}

      {/* Start--Service--Section======================================================== */}
      <ServicesCardSlider
        cardData={SERVICE_CARDS_DATA}
        heading={"Accomplishing Your Goals at Every stage"}
        desc={
          "Equipping your organization to thrive in the digital era, we deliver high-end solutions, spanning from core "
        }
        color={"#1D162B"}
      />

      {/* End--Service--Section======================================================== */}
      {/* Start--Solution-Card-Slider======================================================== */}
      <CommonCardThreeSlider
        ID={"AIOfferings"}
        sectionImageUrl={""}
        sectionBGColor={"#1D162B"}
        sectionHeading={"Unlock More Potential with Add on Solution Offerings"}
        sectionDesc={
          "Enhancing the features of business applications, our easily integrating specialized solutions intend to add "
        }
        sectionTextColor={"#FFF"}
        sectionHeaderMaxWidth={"40%"}
        x
        cardData={SOLUTION_DATA}
      ></CommonCardThreeSlider>
      {/* End--Solution-Card-Slider======================================================== */}

      {/* Section--Hub-of-Expertise=======================================================================  */}

      <HubExpertise
        style={{ marginTop: "-350px", paddingTop: "150px" }}
        setHeading="Hub of Expertise"
        setDesc="We are here to build edge and bring technology brilliance with the finest in the industry."
        setColor="#ffffff"
        counters={HUBEXPERTISE_COUNTER_DATA}
        columnNo = {3} //Define how many columns you want to display

      />
      {/* End-Section--Hub-of-Expertise */}

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
      <ExperienceSlider />
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

export default EnterpriseSuite;
