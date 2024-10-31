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
import CommonCardTwoSlider from "@/sections/commonCardTwoSlider/CommonCardTwoSlider";
import ReviewSliderSection from "@/sections/reviewSlider/ReviewSliderSection";
import BlogSliderSection from '@/sections/blogSlider/BlogSliderSection';
import HighlightPromo from "@/sections/highlight-promo/HighlightPromo";
import SectionWrapperNew from "@/components/SectionWrapperNew";
import { Swiper, SwiperSlide } from "swiper/react";
import Slider from "@/components/Slider";

import Link from "next/link";
import Icon from "@mdi/react";
import { mdiArrowRight } from "@mdi/js";

const CyberSecurity = () => {
  const blogImageUrl = "/ai-ml/blog-bg.png";
  const imgBgURL = "/CloudStackServices/background/bg--strategic-partnership.png";

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

  const blogSliderData = [
    {
      id: 1,
      cardBGImageUrl: '/cyberSecurity/backgrounds/blog.webp',
      cardBGColor: 'red',
      cardHeading: "Cyber-Resilience Strategy Importance",
      cardDesc: `'Businesses are continuously navigating the complex web of technology, where the ever-present threats of cyber-attacks and cybersecurity vulnerabilities loom large.'`,
      cardTextColor: 'white',
      readMoreUrl: "#"
    },
    {
      id: 2,
      cardBGImageUrl: '/ai-ml/blog-bg.png',
      cardBGColor: 'red',
      cardHeading: "Step-By-Step Approach for Building Effective Privacy Programs:",
      cardDesc: 'The information revolution has transformed businesses, governments, and people in a big way. Virtually all business and government operations are now digital, resulting in everyone’s personal details being stored in information systems.',
      cardTextColor: 'white',
      readMoreUrl: "#"
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


  const businessData =[
    {id:1,heading:'Identify',
      list:[
        'Risk Assesment and Management',
        'Risk Assesment and Management',
        'Risk Assesment and Management',
      ],
      url:'',
    },
    {id:2,heading:'Protect',
      list:[
        'Risk Assesment and Management',
        'Risk Assesment and Management',
        'Risk Assesment and Management',
      ],
      url:'',
    },
    {id:2,heading:'Defend',
      list:[
        'Risk Assesment and Management',
        'Risk Assesment and Management',
        'Risk Assesment and Management',
      ],
      url:'',
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
        video="/cyberSecurity\backgrounds/homeBannerVideo.mov"
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

      {/*  */}
      <BlogSection
        ID={"blog"}
        blogImageUrl={'/homeNew/blog-svg.png'}
        Heading={"Dynamic Cybersecurity"}
        Desc={
          "End to End Business Security with Our Cybersecurity Suite.End to End Business Security with Our Cybersecurity Suite"
        }
        Color={"white"}
        readMoreUrl={""}
      >
        <div className="">
          <Link
            href={``}
            target="_blank"
            className="text-white mr-5 mt-10 md:my-10 inline-flex items-center transition-all bg-[#5F22D9] hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-base px-8 py-3 me-2 dark:bg-[#5F22D9] dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          >
            {'Read more'}
            <Icon
              path={mdiArrowRight}
              style={{ marginLeft: "0.5em", marginTop: '1px' }}
              size={1}
            />
          </Link>

        </div>

      </BlogSection>
      {/*  */}

      <SectionWrapperNew
        sectionHeading={"End to End Business Security"}
        sectionDesc={"End to End Business Security with Our Cybersecurity Suite.End to End Business Security with Our Cybersecurity Suite"}
        sectionTextColor="black"
        sectionHeadingLayout="left"
        style={{ backgroundColor: "white"}}
      >
        <Slider slidesPerView={3}>
          {businessData?.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="p-8 bg-white border border-gray-200 rounded-3xl">
                <svg className="w-10 mb-10 h-10 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z" />
                </svg>
             
                  <h5 className="mb-10 text-[42px] font-medium  text-[#1D162B] leading-[50px]">{item.heading}</h5>
              {item?.list.map((data, index) => (
                <p className="mb-3 font-[20px] text-gray-500 leading-[28px]" key={index}>{data}</p>
              ))}
          <div className="flex justify-end px-6 py-4">
           <Link href={item?.url} target="_blank">
                  <OutlinedButtonWithArrow arrowColor={'black'} size={48} />
                  </Link>
                </div>
              </div>

            </SwiperSlide>
          ))}
        </Slider>
      </SectionWrapperNew>
      {/*  */}

      {/* Section--Synergetic-Partnership======================================================= */}
      <HighlightPromo
        setHeading="Our Partners"
        setDesc=""
        setColor="#1D162B"
        setImageBGURL={imgBgURL}
        setLogoImages="true"
        setPadding={false}
      />
      {/* End-Section--Synergetic-Partnership */}

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
