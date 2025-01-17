"use client";
// system import
import HomeBanner from '@/sections/new/homeBanner/HomeBanner';
import ActSection from '@/sections/new/actSection/ActSection';
import PartnerLogo from '@/sections/new/partnerLogo/PartnerLogo';
import StrategicDigital from '@/sections/new/strategicDigital/StrategicDigital';
import ParallaxVideo from '@/sections/new/parallaxVideo/ParallaxVideo';
import  HubExperties from '@/sections/new/hubExperties/HubExperties';
import Capabilities from '@/sections/new/capabilities/Capabilities';
import CaseStudiesSection from "@/sections/case-studies/CaseStudiesSection";
import BlogSection from "@/sections/blog/BlogSection";
import ReviewSliderSection from "@/sections/reviewSlider/ReviewSliderSection";
import TransformBusinessForm from "@/sections/transformBusinessFrom/TransformBusinessFromSection";
import NewNavBar from "@/components/NewNavBar";
import {TESTIMONIAL_DATA} from "./pageData.js";

export default function Home() {
  return (
    <>
      <NewNavBar />
      <HomeBanner />
      <PartnerLogo />
      <hr className="h-px bg-[#d3d3d3] border-1" />
      <StrategicDigital />
      <ParallaxVideo />
      <ActSection />
      <HubExperties />
      <Capabilities />
      
      {/* @ts-ignore */}
      {/* <CaseStudiesSection
        casestudy={CASE_STUDIES_DATA}
        csLayout={"5"}
        bgColor={"bg-primary-900"}
      /> */}

      <BlogSection
        ID={"blog"}
        blogImageUrl={"/home/images/blogBg.webp"}
        Heading={"Step Up in Your Professional Journey"}
        Desc={
          "Work with talented professionals who inspire and support each other. Join our dynamic team and embark on a rewarding career journey that shapes your future. "
        }
        Color={"text-neutral-white"}
        readMoreUrl={[
          {id:'1', text:'Why Godrej Infotech', url:'/careers/why-join-us'},
          {id:'2', text:'Join Our Team', url:'careers/we-are-hiring'}
        ]} />

      {/* @ts-ignore */}
      <ReviewSliderSection
        ID={"TESTIMONIALS"}
        Heading={"Delighted Customers Share Their Successful Experiences"}
        Desc={""}
        Color="text-neutral-white"
        CardDataList={TESTIMONIAL_DATA}
        BGColor="bg-primary-900"
        SectionHeadingMaxWidth={"w-1/2"}
        setHeadingLayout={'left'}
      ></ReviewSliderSection>

      <TransformBusinessForm
        Title={"Transform your Business with Us"}
        Desc={
          "Let's discuss how our ACT (Automation, Cloud and Digital Transformation) solutions can help you with rapid growth."
        }
      ></TransformBusinessForm>
    </>
  );
}

