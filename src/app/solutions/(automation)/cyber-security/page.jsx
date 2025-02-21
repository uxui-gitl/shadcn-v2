"use client";

import React from "react";
import EntIntro from "@/components/EntIntro";
import SectionNav from "@/components/SectionNav";
import OverviewSection from "@/sections/overview/OverviewSection";
import HubExpertise from "@/sections/hub-of-expertise/HubExpertise";
import BlogSection from "@/sections/blog/BlogSection";
import TransformBusinessForm from "@/sections/transformBusinessFrom/TransformBusinessFromSection";
import ExperienceSlider from "@/sections/experience-slider/experienceSlider";
import CyberSecurityInfograhics from "@/sections/cyber-security-infograhic/CyberSecurityInfographic";
import OutlinedButtonWithArrow from "@/components/ui/buttons/OutlinedButtonWithArrow";
import ReviewSliderSection from "@/sections/reviewSlider/ReviewSliderSection";
import BlogSliderSection from '@/sections/blogSlider/BlogSliderSection';
import HighlightPromo from "@/sections/highlight-promo/HighlightPromo";
import SectionWrapperNew from "@/components/SectionWrapperNew";
import { Swiper, SwiperSlide } from "swiper/react";
import Slider from "@/components/Slider";
import Image from "next/image";

import Link from "next/link";
import Icon from "@mdi/react";
import { mdiArrowRight } from "@mdi/js";
import OfferingCard from "@/components/cards/OfferingCard";
import BusinessCard from "@/components/cards/BusinessCard";
import { CyberSecurityData, HUBEXPERTISE_COUNTER_DATA, TESTIMONIAL_DATA, blogSliderData, businessData } from "./data.js";

const CyberSecurity = () => {

  return (
    <>
      {/* Start--Section--HeroBanner======================================================== */}
      <EntIntro
        title="Leading Digital Protection with Cybersecurity Services"
        desc="Partner with us to effectively safeguard your business's future in this ever-evolving digital landscape."
        cta="Let's Connect"
        width="60%"
        video="/cyberSecurity/video/pageBanner.mp4"
      />

      {/* End--Section--HeroBanner======================================================== */}
      {/* Start--Overview-Section======================================================== */}
      <OverviewSection
        Text={
          "The escalating threat landscape has led to a rising demand for specialized cybersecurity and risk consulting services, specifically designed to fortify global enterprises"
        }
      />
      {/* End--Overview-Section======================================================== */}
      {/* Section--Hub-of-Expertise=======================================================================  */}

      <SectionWrapperNew
        sectionHeading={"Our Offerings"}
        sectionDesc={""}
        sectionTextColor="tex-primary-900"
        sectionHeadingLayout="left"
        bgColor={'bg-neutral-ghost-white'}
        setTop={true}
      >
        <Slider slidesPerView={4}>
          {CyberSecurityData?.map((item, index) => (
            <SwiperSlide key={index}>
                <OfferingCard item={item}/>
            </SwiperSlide>
          ))}
        </Slider>
      </SectionWrapperNew>
      
      <HubExpertise
        setHeading="Hub of Expertise"
        setDesc="We are here to build edge and bring technology brilliance with the finest in the industry."
        setColor="text-neutral-white"
        BGColor="bg-secondary-900"
        counters={HUBEXPERTISE_COUNTER_DATA}
        columnNo={2}
      />
      {/* End-Section--Hub-of-Expertise */}

      {/*  */}
      <BlogSection
        ID={"blog"}
        blogImageUrl={'/cyberSecurity/backgrounds/dynamicCybersecurityBg.webp'}
        Heading={"Dynamic Cybersecurity"}
        Desc={
          "End to End Business Security with Our Cybersecurity Suite.End to End Business Security with Our Cybersecurity Suite"
        }
        Color={"text-neutral-white"}
        readMoreUrl={[]}
      >
      </BlogSection>
    

      <SectionWrapperNew
        sectionHeading={"End to End Business Security"}
        sectionDesc={"End to End Business Security with Our Cybersecurity Suite.End to End Business Security with Our Cybersecurity Suite"}
        sectionTextColor="black"
        sectionHeadingLayout="left"
        style={{ backgroundColor: "white", position:'relative', zIndex:8, }}
      >
        <Slider slidesPerView={4}>
          {businessData?.map((item, index) => (
            <SwiperSlide key={index}>
              <BusinessCard item={item} />
            </SwiperSlide>
          ))}
        </Slider>
      </SectionWrapperNew>
      {/*  */}

      {/* Section--Synergetic-Partnership======================================================= */}
      <HighlightPromo
        setHeading="Our Partners"
        setDesc=""
        setColor="text-primary-900"
        setImageBGURL={'/cyberSecurity/OurPartners.webp'}
        setLogoImages="true"
        setPadding={false}
      />
      {/* End-Section--Synergetic-Partnership */}

      {/* Start-Section--Blog======================================================================= */}

      <BlogSliderSection
        cardData={blogSliderData}
      ></BlogSliderSection>
      {/* End-Section--Blog======================================================================= */}
      {/* Start--Section--ExperienceSlider======================================================== */}
      <ExperienceSlider />
      {/* End--Section--ExperienceSlider======================================================== */}
      <ReviewSliderSection
        ID={"TESTIMONIALS"}
        Heading={"Delighted customers share their success experience"}
        Desc={''}
        Color="#ffffff"
        CardDataList={TESTIMONIAL_DATA}
        BGColor="bg-primary-900"
        setHeadingLayout='left'

       
      ></ReviewSliderSection>
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

export default CyberSecurity;
