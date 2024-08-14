"use client";

import CaseStudy from "@/sections/caseStudy/CaseStudy";
import Image from "next/image";
import "react-creative-cursor/dist/styles.css";
import Subscription from "@/components/Subscription";
import EntIntro from "@/components/EntIntro";
import SME from "@/components/SME";
import StrategySub from "@/components/StrategySub";
import WhySection from "@/components/WhySection";
import Testimonial from "@/sections/testimonial/Testimonial";
import Lottie from "lottie-react";
// import robotAnimation from "../../../../assets/robot.json";
import robotAnimation from "@/assets/robot.json";
import infor from "../../../../../public/upgradeCloud/infor.png";
import OracleDB from "../../../../../public/upgradeCloud/OracleDB.png";
import Dynamic from "../../../../../public/upgradeCloud/Dynamic.png";
import azure from "../../../../../public/upgradeCloud/azure.png";
import checkout from "../../../../../public/upgradeCloud/checkout.png";
import curiousPerson from "../../../../../public/upgradeCloud/curiousPerson.png";
import cloud from "../../../../../public/upgradeCloud/cloud.png";
import cloudArrows from "../../../../../public/upgradeCloud/cloudArrows.png";
import { motion, AnimatePresence } from "framer-motion";
import BlogSlider from "@/components/BlogSlider";

import verticalImg from "../../../../../public/components/verticalImg.png";
import icon from "../../../../../public/icon.png";
import Icon from "@mdi/react";
import { mdiArrowRight } from "@mdi/js";
import { mdiArrowTopRight } from "@mdi/js";

import Benefits from "@/components/Benefits";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import JoinExpTeam from "@/components/JoinExpTeam";
import { useState } from "react";
import Link from "next/link";
import SectionNav from "@/components/SectionNav";
import SpotlightImageGrid from "@/components/SpotlightImageGrid";
import Spotlight from "@/components/Spotlight";

import scalabilityAccording from "../../../../../public/icon/cloudStackServices/scalabilityAccording.svg";
import Fasterdevelopment from "../../../../../public/icon/cloudStackServices/Fasterdevelopment.svg";
import Drivebusiness from "../../../../../public/icon/cloudStackServices/Drivebusiness.svg";
import Highestlevels from "../../../../../public/icon/cloudStackServices/Highestlevels.svg";
import StreamlineDelivery from "../../../../../public/icon/cloudStackServices/StreamlineDelivery.svg";
import Effortlessintegration from "../../../../../public/icon/cloudStackServices/Effortlessintegration.svg";
import BuiltInreliable from "../../../../../public/icon/cloudStackServices/BuiltInreliable.svg";
import Abstract from "@/components/Abstract";
import { NewTestimonial } from "@/components";

/**
 * * New Imports---Sandeep Rana
 * * 2022-08-09
 */
import OverviewSection from "@/sections/overview/OverviewSection";
import HighlightPromo from "@/sections/highlightPromo/HighlightPromo";
import SolutionSliderCloud from "@/sections/solutionSlider/SolutionSliderCloud";

const fadeInAnimationVariant = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5 * index,
    },
  }),
};

const page = () => {
  const imgURL =
    "/CloudStackServices/smiling-businessman-standing-with-arms-folded-isolated-white.png";
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
      setColor='#1D162B'/>
      {/* Section--Blog */}
      <SolutionSliderCloud
      setHeading="Advance Solution for Business Future"
      setDesc="This approach helps us to adeptly manage software development projects involving complexity levels."
      setColor='#1D162B'/>
    </>
  );
};
export default page;
