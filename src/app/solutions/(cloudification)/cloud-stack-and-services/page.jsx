"use client";

import Image from "next/image";
import "react-creative-cursor/dist/styles.css";

import EntIntro from "@/components/EntIntro";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import SectionNav from "@/components/SectionNav";

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
{/* Section Nav */}
<>
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
      </>
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
      />
      {/* Section--Blog */}
      <SolutionSliderCloud
        setHeading="Advance Solution for Business Future"
        setDesc="This approach helps us to adeptly manage software development projects involving complexity levels."
        setColor="#1D162B"
      />
    </>
  );
};
export default page;
