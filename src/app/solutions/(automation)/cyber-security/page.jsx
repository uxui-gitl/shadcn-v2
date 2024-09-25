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
import CommonCardTwoSlider from "@/sections/commonCardTwoSlider/CommonCardTwoSlider";
import ReviewSliderSection from "@/sections/reviewSlider/ReviewSliderSection";
import BlogSliderSection from '@/sections/blogSlider/BlogSliderSection';

const CyberSecurity = () => {
  const blogImageUrl = "/ai-ml/blog-bg.png";

  const HUBEXPERTISE_COUNTER_DATA = [
    {
      start: 10,
      end: 20,
      description: "Years of Managing Global customer for Data Security",
    },
    {
      start: 10,
      end: 100,
      description: "Solutions Implemented",
    },
    // Add more counters as needed
  ];

  const TESTIMONIAL_DATA = [
    {
      id: 1,
      cardHeading: "Power BI Solution on time with quality",
      cardDesc: 'We sincerely appreciate GITL team for delivering Power BI solution on time and with great quality. We really like the data visualisations & dashboards provided and it makes it easier for us to get a good grip on our business performance indicators.'
    },
    {
      id: 2,
      cardHeading: "Power BI Solution on time with quality",
      cardDesc: 'We sincerely appreciate GITL team for delivering Power BI solution on time and with great quality. We really like the data visualisations & dashboards provided and it makes it easier for us to get a good grip on our business performance indicators.'
    },
    {
      id: 3,
      cardHeading: "Power BI Solution on time with quality",
      cardDesc: 'We sincerely appreciate GITL team for delivering Power BI solution on time and with great quality. We really like the data visualisations & dashboards provided and it makes it easier for us to get a good grip on our business performance indicators.'
    },
  ];

  const blogSliderData=[
    {
    id: 1,
    cardBGImageUrl: '/ai-ml/blog-bg.png',
    cardBGColor:'red',
    cardHeading: "Strengthen Your Business Armor with Cyber–Resilience Strategy",
    cardDesc: `'Businesses are continuously navigating the complex web of technology, where the ever-present threats of cyber-attacks and cybersecurity vulnerabilities loom large. Today, we delve into the critical facets of cyber resilience, emphasizing the importance of a disaster recovery plan, robust cybersecurity measures, and a comprehensive understanding of cyber-attacks and cybersecurity threats. Let's explore how concepts is key to fortifying your business against the evolving challenges of the digital realm.'`,
    cardTextColor:'white',
    readMoreUrl:"#"
  },
  {
    id: 2,
    cardBGImageUrl: '/ai-ml/blog-bg.png',
    cardBGColor:'red',
    cardHeading: "Step-By-Step Approach for Building Effective Privacy Programs:",
    cardDesc: 'The information revolution has transformed businesses, governments, and people in a big way. Virtually all business and government operations are now digital, resulting in everyone’s personal details being stored in information systems.',
    cardTextColor:'white',
    readMoreUrl:"#"
  },
  
  ]

  const CyberSecurityData = [
    {
      id: 1,
      cardBGImageUrl: '/rpa/ArtboardBg.png',
      cardBGColor: '#7F4EE1',
      cardHeading: 'Business Consulting',
      cardDesc: 'Speed up operations with smart work of RPA, delivering proficient service to your customers and increasing your ROI.',
      isArrow: false,
      cardTextColor: 'white',
      cardType: 1,
    },
    {

      id: 2,
      cardBGImageUrl: '',
      cardBGColor: '#7F4EE1',
      cardHeading: 'Implementation & Management',
      cardDesc: 'Automate the time-consuming and error-prone manual tasks and get consistent, error-free results while',
      isArrow: false,
      cardTextColor: 'white',
      cardType: 2,
    },
    {

      id: 3,
      cardBGImageUrl: '',
      cardBGColor: '#9F0165',
      cardHeading: 'Application Security Testing',
      cardDesc: 'Manage contract workflows, form updates, and compliance notifications, adhering to regulations with precision',
      isArrow: false,
      cardTextColor: 'white',
      cardType: 1,
    },
    {

      id: 4,
      cardBGImageUrl: '/rpa/ArtboardBg.png',
      cardBGColor: '#EFE9FB',
      cardHeading: 'Strengthen Potential',
      cardDesc: 'Empower employees to focus on strategic tasks to deliver attentive experience to customers',
      isArrow: false,
      cardTextColor: 'white',
      cardType: 2,
    },
    {

      id: 5,
      cardBGImageUrl: '/rpa/ArtboardBg.png',
      cardBGColor: '#EFE9FB',
      cardHeading: 'Enhance Flexibility',
      cardDesc: 'Adapt to changing business needs without hiring and training new staff, saving time and expense',
      isArrow: false,
      cardTextColor: 'white',
      cardType: 1,
    },
    {


      id: 5,
      cardBGImageUrl: '/rpa/ArtboardBg.png',
      cardBGColor: '#EFE9FB',
      cardHeading: 'Reduce AHT (Average Handling Time)',
      cardDesc: 'Enhance customer service quality, minimize response time and improve operational efficiency',
      isArrow: false,
      cardTextColor: 'white',
      cardType: 2,
    },
  ];

  return (
    <>
      {/* Start--Section--HeroBanner======================================================== */}
      <EntIntro
        title="Leading Digital Protection with Cybersecurity Services"
        desc="Partner with us to effectively safeguard your business's future in this ever-evolving digital landscape."
        cta="Let's Connect"
        width="60%"
        video="https://gitl-usa.s3.us-west-1.amazonaws.com/banner1.mp4"
      />

      {/* End--Section--HeroBanner======================================================== */}
      {/* Start--Section-Navigation======================================================== */}

      <SectionNav
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
      {/* End--Section--Navigation======================================================== */}
      {/* Start--Overview-Section======================================================== */}
      <OverviewSection
        Text={
          "The escalating threat landscape has led to a rising demand for specialized cybersecurity and risk consulting services, specifically designed to fortify global enterprises"
        }
      />
      {/* End--Overview-Section======================================================== */}
      {/* Section--Hub-of-Expertise=======================================================================  */}

      <CommonCardTwoSlider
        ID={''}
        sectionImageUrl={''}
        sectionBGColor={'#F3F0FA'}
        sectionHeading={'Our Offerings'}
        sectionDesc={''}
        sectionTextColor={'#000'}
        cardData={CyberSecurityData}
      >

      </CommonCardTwoSlider>
      <HubExpertise
        setHeading="Hub of Expertise"
        setDesc="We are here to build edge and bring technology brilliance with the finest in the industry."
        setColor="#ffffff"
        counters={HUBEXPERTISE_COUNTER_DATA}
      />
      {/* End-Section--Hub-of-Expertise */}
      {/* Start--Section--CyberSecurityInfographics======================================================== */}
      <CyberSecurityInfograhics />
      {/* End--Section--CyberSecurityInfographics======================================================== */}


      {/* Start-Section--Blog======================================================================= */}
      
        <BlogSliderSection 
    cardData={blogSliderData}
    ></BlogSliderSection>
      
      {/* <BlogSection
        ID={"blog"}
        blogImageUrl={blogImageUrl}
        Heading={"Strengthen Your Business Armor with Cyber–Resilience Strategy"}
        Desc={
          "Businesses are continuously navigating the complex web of technology, where the ever-present threats of cyber-attacks and cybersecurity vulnerabilities loom large. Today, we delve into the critical facets of cyber resilience, emphasizing the importance of a disaster recovery plan, robust cybersecurity measures, and a comprehensive understanding of cyber-attacks and cybersecurity threats. Let's explore how concepts is key to fortifying your business against the evolving challenges of the digital realm."
        }
        Color={"white"}
      ></BlogSection> */}
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
      BGColor="#1D162B"
      SectionHeadingMaxWidth={'70%'}
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
