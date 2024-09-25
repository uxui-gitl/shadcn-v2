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
import HolisticApproach from "@/sections/es-transformation-section/holisticApproach";
import IndustrySpotlight from "@/sections/industry-spotlight/industrySpotlight";
import ReviewSliderSection from "@/sections/reviewSlider/ReviewSliderSection";



const EnterpriseSuite = () => {
  const blogImageUrl = "/ai-ml/blog-bg.png";
  const TESTIMONIAL_DATA = [
    {
      id: 1,
      cardHeading: "95% Increase in Inventory Efficiency",
      cardDesc: 'Sincere appreciation or the kind support and delivery performance demonstrated by the Godrej Infotech team. Our implementation of Business Central is now live, and we are now happy with the easy-to-use interface and simplified processes. With the e-invoicing module, our digital transactions are secure and compliant with the ZATCA regulations. Overall, with the automated system, we see a productivity improvement of nearly 95% along with inventory efficiency of approx. 95%',
      designation: 'Manager - Trading Division',
      companyName: 'Leading Tyre Trading Organization in Middle East',
    },
    {
      id: 2,
      cardHeading: "High - Quality Infor Cloud Implementation ",
      cardDesc: 'On behalf of our organization, I would like to convey our gratitude to Godrej Infotech for the excellent work for cloud-enabling our Infor environment. The services provided were of high quality and we would not hesitate to recommend Godrej Infotech as a professional cloud services provider.',
      designation: 'IT Manager',
      companyName: `'India's Premier hi-tech Engineering Solutions Provider'`,
    },

  ];
  const SERVICE_CARDS_DATA = [
    {
      title: "Business Consulting & Journey Mapping",
      hoverTitle: "Business Consulting & Journey Mapping",
      description:
        "Discover right-fit solutions through tech landscape audit, inefficiency identification, and bottleneck analysis.",
      content: "Additional content for Card 1",
      imageURL: "/techStack1.png",
    },
    {
      title: "Development Aimed at Performance Enhancement",
      hoverTitle: "Development Aimed at Performance Enhancement",
      description:
        "We configure and manage infrastructure, streamline data management, reengineer business processes and implement automation solutions.",
      content: "Additional content for Card 2",
      imageURL: "/techStack1.png",
    },
    {
      title: "Deployment to Ensure Seamless Transition",
      hoverTitle: "Deployment to Ensure Seamless Transition",
      description:
        "Our solution delivery process includes implementation, data migration, customization, rollout management and country localization.",
      content: "Additional content for Card 3",
      imageURL: "/techStack1.png",
    },
    {
      title: "Support for System Maintenance",
      hoverTitle: "Support for System Maintenance",
      description:
        "We offer expert system support, encompassing maintenance, monitoring, troubleshooting, training, and upgrades.",
      content: "Additional content for Card 4",
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
        "Dot Net based Business Central-integrated solution for retail dealers, streamlining end to end inventory and order management. It eliminates manual data entry, reducing errors and streamlines processes, enabling users to access real-time insights, track inventory, monitor sales, and make data-driven decisions with ease. ",
      isArrow: true,
      cardTextColor: "black",
      cardTopImageUrl: "https://flowbite.com/docs/images/blog/image-1.jpg",
    },
    {
      id: 2,
      cardBGColor: "#FCE6F4",
      cardHeading: "Value Manufacturing Process Management",
      cardDesc:
        "Valve manufacturing solution with pre-configured process mapping and standardized workflows for seamless operations in complex scenarios.",
      isArrow: true,
      cardTextColor: "black",
      cardTopImageUrl: "https://flowbite.com/docs/images/blog/image-4.jpg",
    },
    {
      id: 3,
      cardBGColor: "#CDBAF3",
      cardHeading: "Metal Recycling Operations Management",
      cardDesc:
        "Pre-built customizations for metal recycling, optimizing operations backed by our process knowledge.",
      isArrow: true,
      cardTextColor: "black",
      cardTopImageUrl: "https://flowbite.com/docs/images/blog/image-7.jpg",
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
      end: 25,
      description: "Years of Experience",
    },

    {
      staticTitle: "24*7",
      description: "Support",
    },

    // Add more counters as needed
  ];
  const INDUSTRY_SPOTLIGHT = [
    {
      id: 1,
      cardBGImageUrl: "/industry-spotlight/cards-backgrounds/card-bg--manufacturing.png",
      cardBGColor: "#7F4EE1",
      cardHeading: "Manufacturing",
      cardDesc: "jzhsdvgjh dqwjhydvikqhw dyiqbw dkhn iku",
      isArrow: true,
      cardTextColor: "white",
      additionalData: `
      <ul class="space-y-4 text-gray-500 list-disc list-inside dark:text-gray-400">
    <li>
        Manufacturing
        <ol class="ps-5 mt-2 space-y-1 list-decimal list-inside">
            <li>Automotive </li>
            <li>Discrete</li>
            <li>Industrial</li>
            <li>Engineering and Construction</li>
            <li>Process Manufacturing</li>
        </ol>
    </li>
</ul>`
},
    {
      id: 2,
      cardBGImageUrl: "/industry-spotlight/cards-backgrounds/card-bg--retail.png",

      cardBGColor: "#7F4EE1",
      cardHeading: "Retail & Distribution",
      cardDesc:
        "AI-driven workflows, OCR and rule-based system enables accurate results",
      isArrow: true,
      cardTextColor: "white",
      additionalData: `
      <ul class="space-y-4 text-gray-500 list-disc list-inside dark:text-gray-400">
    <li>
        Retail & Distribution
        <ol class="ps-5 mt-2 space-y-1 list-decimal list-inside">
            <li>Retail stores</li>
            <li>Duty free & Travel retail</li>
            <li>Hospitality businesses</li>
        </ol>
    </li>
</ul>`
    },
    {
      id: 3,
      cardBGImageUrl: "/industry-spotlight/cards-backgrounds/card-bg--trading-and-distribution.png",

      cardBGColor: "#7F4EE1",
      cardHeading: "Healthcare",
      cardDesc:
        "Manage contract workflows, forms and compliance with consistency and regulatory adherence",
      isArrow: true,
      cardTextColor: "white",
      additionalData: `
      <ul class="space-y-4 text-gray-500 list-disc list-inside dark:text-gray-400">
    <li>
        Healthcare
        <ol class="ps-5 mt-2 space-y-1 list-decimal list-inside">
            <li>Pharma Manufacturing & Distributors</li>
            <li>Health Facilities</li>
            <li>Medical Equipment & Supplies</li>
        </ol>
    </li>
</ul>`
    },
    {
      id: 4,
      cardBGImageUrl: "/industry-spotlight/cards-backgrounds/card-bg--healthcare.png",

      cardBGColor: "#EFE9FB",
      cardHeading: "Project",
      cardDesc:
        "",
      isArrow: true,
      cardTextColor: "white",
      additionalData: `
      <ul class="space-y-4 text-gray-500 list-disc list-inside dark:text-gray-400">
    <li>
        Project
        <ol class="ps-5 mt-2 space-y-1 list-decimal list-inside">
            <li>Real estate</li>
            <li>Industrial setup</li>
            <li>Turnkey infrastructure</li>
            <li>Shipbuilding</li>
            <li>Small-scale machine building</li>
        </ol>
    </li>
</ul>`
    },
    {
      id: 5,
      cardBGImageUrl: "/industry-spotlight/cards-backgrounds/card-bg--professional-services.png",

      cardBGColor: "#EFE9FB",
      cardHeading: "Professional services",
      cardDesc: "",
      isArrow: true,
      cardTextColor: "white",
      additionalData: `
      <ul class="space-y-4 text-gray-500 list-disc list-inside dark:text-gray-400">
    <li>
        Professional services
        <ol class="ps-5 mt-2 space-y-1 list-decimal list-inside">
            <li>Education</li>
            <li>IT Consultancy</li>
            <li>Real Estate</li>
            <li>Non-Government Associations</li>
            <li>Plant Maintenance</li>
            <li>Hospitality</li>
        </ol>
    </li>
</ul>`
    },
    
    // Add more cards as needed
  ];
  return (
    <>
      {/* Start--HeroBanner-Section============================================================== */}
      <EntIntro
        title="Bridging Transformation with Enterprise Agility"
        desc="Redefining enterprise future with strategic transformation through Enterprise Solutions"
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
          "Transforming core business paradigms & go-to-market strategies to empower proactive decision-making & enrich stakeholder experiences."
        }
      />
      {/* End--OverviewSection================================================================ */}

      {/* Start--EnterpriseTransformation============================================================== */}
      <EnterpriseTransformation />
      <EnterpriseTransformationCards />
      {/* End--EnterpriseTransformation============================================================== */}

      {/* Start--Holistic-Approach============================================================== */}
      <HolisticApproach />

      {/* End--Holistic-Approach============================================================== */}

      {/* Start--Service--Section======================================================== */}
      <ServicesCardSlider
        cardData={SERVICE_CARDS_DATA}
        heading={"Accomplishing Business Goals at Every stage"}
        desc={
          "We deliver high-end enterprise solutions, spanning from core ERP suite to accelerators across complete business spectrum."
        }
        color={"#1D162B"}
      />

      {/* End--Service--Section======================================================== */}
      {/* Start--Solution-Card-Slider======================================================== */}
      <CommonCardThreeSlider
        ID={"AIOfferings"}
        sectionImageUrl={""}
        sectionBGColor={"#1D162B"}
        sectionHeading={"Accelerators"}
        sectionDesc={
          "Enhancing business apps, our solutions integrate seamlessly, delivering value with expert support & streamlined processes."
        }
        sectionTextColor={"#FFF"}
        sectionHeaderMaxWidth={"40%"}
        x
        cardData={SOLUTION_DATA}
      ></CommonCardThreeSlider>
      {/* End--Solution-Card-Slider======================================================== */}
      {/* Start--Industry-Spotlight======================================================== */}
      <IndustrySpotlight cardData={INDUSTRY_SPOTLIGHT} />
      {/* End--Industry-Spotlight======================================================== */}
      {/* Section--Hub-of-Expertise=======================================================================  */}

      <HubExpertise
        setHeading="The Hub of Expertise"
        setDesc="We are here to build competitive edge with technology brilliance for businesses across the world."
        setColor="#ffffff"
        counters={HUBEXPERTISE_COUNTER_DATA}
        columnNo={3} //Define how many columns you want to display
      />
      {/* End-Section--Hub-of-Expertise */}

      {/* Start-Section--Blog======================================================================= */}
      <BlogSection
        ID={"blog"}
        blogImageUrl={blogImageUrl}
        Heading={"Digital Transformation - The need of the hour"}
        Desc={
          "Digital Transformation is changing the way business is done in every sector of the economy. Businesses need to transform themselves into digital enterprises to thrive and succeed in this new era."
        }
        Color={"white"}
        readMoreUrl={"https://www.godrejinfotech.com/blogDetails.aspx?blog=7"}
      ></BlogSection>
      {/* End-Section--Blog======================================================================= */}
      <ReviewSliderSection
        ID={"TESTIMONIALS"}
        Heading={"Delighted customers share their success experience"}
        Desc={''}
        Color="#ffffff"
        CardDataList={TESTIMONIAL_DATA}
        BGColor="#1D162B"
        SectionHeadingMaxWidth={'70%'}
      ></ReviewSliderSection>
      {/* Section--TransformBusinessForm======================================================================= */}
      <TransformBusinessForm
        Title={"Transform your Business with us"}
        Desc={
          "Let us discuss how enterprise solutions can help you with rapid growth."
        }
      ></TransformBusinessForm>
      {/* End-Section--TransformBusinessForm */}
    </>
  );
};

export default EnterpriseSuite;
