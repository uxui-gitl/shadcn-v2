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
import Image from "next/image";

import Link from "next/link";
import Icon from "@mdi/react";
import { mdiArrowRight } from "@mdi/js";

const CyberSecurity = () => {
  const blogImageUrl = "";
  const imgBgURL = "/cyberSecurity/OurPartners.webp";

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
      cardBGImageUrl: '/cyberSecurity/backgrounds/blogbg1.webp',
      cardBGColor: 'red',
      cardHeading: "Cyber-Resilience Strategy Importance",
      cardDesc: `'Businesses are continuously navigating the complex web of technology, where the ever-present threats of cyber-attacks and cybersecurity vulnerabilities loom large.'`,
      cardTextColor: 'white',
      readMoreUrl: "#"
    },
    {
      id: 2,
      cardBGImageUrl: '/cyberSecurity/backgrounds/blogbg2.webp',
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
      cardBGImageUrl: '/cyberSecurity/ourOfferings/businessConsulting.webp',
      cardHeading: 'Business Consulting',
      cardDesc: 'Speed up operations with smart work of RPA, delivering proficient service to your customers and increasing your ROI.',
      isArrow: false,
      cardTextColor: '#fff',
      cardType: 1,
   
    },
    {

      id: 2,
      cardBGImageUrl: '/cyberSecurity/ourOfferings/implementationManagement.webp',
      cardBGColor: '#7F4EE1',
      cardHeading: 'Implementation & Management',
      cardDesc: 'Automate the time-consuming and error-prone manual tasks and get consistent, error-free results while',
      isArrow: false,
      cardTextColor: '#fff',
      cardType: 2,
    },
    {

      id: 3,
      cardBGImageUrl: '/cyberSecurity/ourOfferings/applicationSecurity.webp',
      cardBGColor: '#9F0165',
      cardHeading: 'Application Security Testing',
      cardDesc: 'Manage contract workflows, form updates, and compliance notifications, adhering to regulations with precision',
      isArrow: false,
      cardTextColor: '#fff',
      cardType: 1,
    },
    {

      id: 4,
      cardBGImageUrl: '/cyberSecurity/ourOfferings/strengthenPotential.webp',
      cardBGColor: '#EFE9FB',
      cardHeading: 'Strengthen Potential',
      cardDesc: 'Empower employees to focus on strategic tasks to deliver attentive experience to customers',
      isArrow: false,
      cardTextColor: '#fff',
      cardType: 2,
    },
    {

      id: 5,
      cardBGImageUrl: '/cyberSecurity/ourOfferings/enhanceFlexibility.webp',
      cardBGColor: '#EFE9FB',
      cardHeading: 'Enhance Flexibility',
      cardDesc: 'Adapt to changing business needs without hiring and training new staff, saving time and expense',
      isArrow: true,
      cardTextColor: '#fff',
      cardType: 1,
    },
    {


      id: 6,
      cardBGImageUrl: '/cyberSecurity/ourOfferings/reduceAHT.webp',
      cardBGColor: '#EFE9FB',
      cardHeading: 'Reduce AHT (Average Handling Time)',
      cardDesc: 'Enhance customer service quality, minimize response time and improve operational efficiency',
      isArrow: false,
      cardTextColor: '#fff',
      cardType: 2,
    },
  ];


  const businessData = [
    {
      id: 1, heading: 'Identify',
      list: [
        'Risk Assesment and Management',
        'Risk Assesment and Management',
        'Risk Assesment and Management',
      ],
      url: '',
      icon:'https://www.svgrepo.com/show/151387/star.svg',
    },
    {
      id: 2, heading: 'Protect',
      list: [
        'Risk Assesment and Management',
        'Risk Assesment and Management',
        'Risk Assesment and Management',
      ],
      url: '',
      icon:'https://www.svgrepo.com/show/535617/shield-check.svg',
    },
    {
      id: 3, heading: 'Defend',
      list: [
        'Risk Assesment and Management',
        'Risk Assesment and Management',
        'Risk Assesment and Management',
      ],
      url: '',
      icon:'https://www.svgrepo.com/show/535617/shield-check.svg',
    },
    {
      id: 4, heading: 'Safeguard',
      list: [
        'Risk Assesment and Management',
        'Risk Assesment and Management',
        'Risk Assesment and Management',
      ],
      url: '',
      icon:'https://www.svgrepo.com/show/535617/shield-check.svg',
    }

  ];

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
        setTop={false}
      >
        <Slider slidesPerView={4}>
          {CyberSecurityData?.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="w-full rounded-3xl group overflow-hidden relative" style={{ background: `url('${item?.cardBGImageUrl}')`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }} >
                <div className={`p-5 relative min-h-[420px] flex flex-col ${item.cardType == 1 ? 'justify-start' : 'justify-end'}`}>
                  <h5 className={`mb-4 text-heading-03 text-[${item?.cardTextColor}] font-semibold min-h-[40px]`}>{item?.cardHeading}</h5>
                  <p className={`mb-3 text-base font-medium min-h-[144px] text-[${item?.cardTextColor}]`}>{item?.cardDesc}</p>
                  {item?.cardHoverData && (
                    <div className="absolute bottom-5 right-5">
                      <OutlinedButtonWithArrow size={32} arrowColor={item?.cardTextColor} />
                    </div>)}

                </div>
                {item?.cardHoverData && (
                  <div className="bg-white p-5 rounded-3xl h-full w-full duration-200 group-hover:-translate-y-full absolute">
                    <div className="">
                      <ol className="max-w-md space-y-1 text-neutral-dark-grey list-decimal list-inside">
                        {item?.cardHoverData.map((item2) => (
                          <>
                            <li>
                              <span className=" text-paragraph-01 leading-paragraph-01 font-semibold text-primary-900">{item2}</span>
                            </li>
                          </>
                        ))}
                      </ol>
                     
                    </div>
                  </div>
                )}
              </div>
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
        readMoreUrl={"/test"}
      >
        

      </BlogSection>
    

      <SectionWrapperNew
        sectionHeading={"End to End Business Security"}
        sectionDesc={"End to End Business Security with Our Cybersecurity Suite.End to End Business Security with Our Cybersecurity Suite"}
        sectionTextColor="black"
        sectionHeadingLayout="left"
        style={{ backgroundColor: "white" }}
      >
        <Slider slidesPerView={4}>
          {businessData?.map((item, index) => (
            <SwiperSlide key={index}>
              
              <div className="p-5 bg-white border border-gray-200 rounded-3xl">
              <div className="flex justify-left mb-4">
            <Image src={item.icon} alt="icon" width={48} height={48}/> {/* Adjust size as needed */}
          </div>
              
                <h5 className="mb-5 text-heading-02  font-medium  text-[#1D162B] ">{item.heading}</h5>
                {item?.list.map((data, index) => (
                  <p className="mb-2 p-1 border-b border-neutral-light-grey text-body-01 text-gray-500 " key={index}>{data}</p>
                ))}
                <div className="flex justify-end bottom-5 right-5">
                  <Link href={item?.url} target="_blank">
                    <OutlinedButtonWithArrow arrowColor={'black'} size={24} />
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
        setColor="text-primary-900"
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
