"use client";
import EntIntro from "@/components/EntIntro";
import React, { useState } from "react";
import Image from "next/image";
import OverviewSection from "@/sections/overview/OverviewSection";
import SectionHeading from "@/components/SectionHeading";
import SectionWrapper from "@/components/SectionWrapper";
import ServiceOfferingSection from "@/sections/serviceOffering/ServiceOfferingSection";
import DistinctiveSection from "@/sections/distinctive/DistinctiveSection";
import TransformBusinessForm from "@/sections/transformBusinessFrom/TransformBusinessFromSection";
import IndustrySpotlight from "@/sections/industry-spotlight/industrySpotlight";
import SectionWrapperNew from "@/components/SectionWrapperNew";
import { SwiperSlide } from "swiper/react";
import Slider from "@/components/Slider";
import RPABusiness from '@/sections/new/rpaSection/RPABusiness';
import RPAPlatform from '@/sections/new/rpaSection/RPAPlatform';
import RPALifecycle from '@/sections/new/rpaSection/RPALifecycle';


const distinctiveData = [
  {
    _id: 1,
    desc: "Employee Access Creation",
    icon: "/rpa/Icons/EmployeeAccessCreation.svg",
  },
  {
    _id: 2,
    desc: "Ticketing system - Incident management",
    icon: "/rpa/Icons/TicketingSystemIncidentManagement.svg",
  },
  {
    _id: 3,
    desc: "Account Payable and Receivable Process",
    icon: "/rpa/Icons/AccountPayableReceivableProcess.svg",
  },
  {
    _id: 4,
    desc: "Vendor Onboarding Process",
    icon: "/rpa/Icons/VendorOnboardingProcess.svg",
  },
  {
    _id: 5,
    desc: "Customer Onboarding Process",
    icon: "/rpa/Icons/customerOnBorading.svg",
  },
];

const INDUSTRY_SPOTLIGHT = [
  {
    id: 1,
    cardBGImageUrl: "/rpa/industrySpotlight/Manufacturing.webp",
    cardBGColor: "#7F4EE1",
    cardHeading: "Manufacturing",
    cardDesc: "",
    isArrow: false,
    cardTextColor: "white",
  },

  // Add more cards as needed
];

const page = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [hoveredCard, setHoveredCard] = useState(null);
  return (
    <>
      <EntIntro
        title="Multiply Your Business Efficiency"
        desc="Automate Operations with Our Robotic Process Automation (RPA) Solutions and Services"
        cta="Let's Connect"
        width="60%"
        video="/rpa/video/pageBanner.mp4"
      />

      {/* Overview  */}
      <OverviewSection
        Text={
          "Manage high-volume tasks by slashing down time requirements and enabling precise outcomes. Our tailored RPA solutions enable businesses to seamlessly navigate intricate workflows and attain operational excellence."
        }
      />
      <RPABusiness />

      <RPAPlatform />

      <ServiceOfferingSection />

      <IndustrySpotlight
        slidePerView={1}
        cardData={INDUSTRY_SPOTLIGHT}
        sectionHeading={"Industry Spotlight"}
        sectionDesc={
          "Understanding unique demands of each industry vertical and capitalizing  capabilities, we equip businesses to thrive in competitive market."
        }
        setTop={true}
      />

      {/* project life cycle */}
      <RPALifecycle />

      {/* Distinctive section*/}
      <DistinctiveSection
        DistinctiveData={distinctiveData}
        ID={"Distinctive"}
        Title={"Our RPA Use Cases"}
        Desc={
          "We endeavor to build actual business impact of RPA improving business output and leading digital transformation."
        }
      ></DistinctiveSection>

      {/* transform business with us section */}
      <TransformBusinessForm
        Title={"Transform your Business with us"}
        Desc={
          "Let us discuss how our RPA expertise can help you with rapid growth."
        }
      ></TransformBusinessForm>

      {/* Infotech Weekly Updates */}
    </>
  );
};

export default page;
