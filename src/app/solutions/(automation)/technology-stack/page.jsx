"use client";

import React from 'react';
import Styles from './page.module.css';

import EntIntro from '@/components/EntIntro';
import SectionNav from '@/components/SectionNav';
import OverviewSection from '@/sections/overview/OverviewSection';
import HubExpertise from '@/sections/hub-of-expertise/HubExpertise';
import BlogSection from '@/sections/blog/BlogSection';
import DistinctiveSection from '@/sections/distinctive/DistinctiveSection';
import TransformBusinessForm from '@/sections/transformBusinessFrom/TransformBusinessFromSection';
import ReviewSliderSection from '@/sections/reviewSlider/ReviewSliderSection';
import SectionWithSlider from '@/sections/sectionWithSlider/SectionWithSlider';
import CaseStudiesSection from '@/sections/case-studies/CaseStudiesSection';
import BenefitSliderSection from '@/sections/benefitSlider/BenefitSliderSection';
import TechnologyStackLogos from '@/sections/tech-stack/TechnologyStackLogos';
import ServicesCardSlider from '@/sections/services-cards-slider/ServicesCardSlider';
import CommonCardThreeSlider from "@/sections/commonCardThreeSlider/CommonCardThreeSlider";

const TechnologyStack = () => {
  const blogImageUrl = "/ai-ml/blog-bg.png";
  const DISTINCTIVE_DATA = [
    {
      _id: 1,
      desc: "Scalable infrastructure support for your business requirements",
      icon: "",
    },
    {
      _id: 2,
      desc: "High agility and elevated user experience delivery while meeting timelines",
      icon: "",
    },
    {
      _id: 3,
      desc: "Assured continuous support through bug fixing and upgradation",
      icon: "",
    },
    {
      _id: 4,
      desc: "100% collaborative approach, quality guidelines & adherence to the right coding standards",
      icon: "",
    },
    {
      _id: 5,
      desc: "Comprehensive requirement analysis and scope-of-work documentation before designing",
      icon: "",
    },

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

  const BENEFITS_CARDS_DATA = [

    { id: '1',icon:'', cardDesc: 'A high degree of accuracy and consistency in business operations' },
    { id: '2',icon:'', cardDesc: 'Informed decision-making to extract valuable insights and identify patterns, correlation, and trends' },
    { id: '3',icon:'', cardDesc: 'Real-time problem-solving enable minimum disruptions and ensures uninterrupted business operations' },
    { id: '4',icon:'', cardDesc: 'Automation of repetitive tasks, resulting in increased operational efficiency and productivity.' },
    { id: '5',icon:'', cardDesc: 'Reduce equipment downtime and increase operational efficiency with real-time monitoring and predictive maintenance' },

  ];
  const SERVICE_CARDS_DATA = [
    {
      title: "Planning and Designing",
      hoverTitle: "Planning & Designing",
      description: "Meticulous selection of frameworks, programming languages, libraries and tools followed by the development of innovative application with a clean code architecture.",
      content: "Additional content for Card 1",
      imageURL: '/techStack1.png'
    },
    {
      title: "Define and Develop",
      hoverTitle: "Define & Develop",
      description: "Meticulous selection of frameworks, programming languages, libraries and tools followed by the development of innovative application with a clean code architecture.",
      content: "Additional content for Card 2",
      imageURL: '/techStack1.png'
    },
    {
      title: "Testing",
      hoverTitle: "Testing",
      description: "Meticulous selection of frameworks, programming languages, libraries and tools followed by the development of innovative application with a clean code architecture.",
      content: "Additional content for Card 3",
      imageURL: '/techStack1.png'
    },
    {
      title: "Deployment",
      hoverTitle: "Deployment",
      description: "Meticulous selection of frameworks, programming languages, libraries and tools followed by the development of innovative application with a clean code architecture.",
      content: "Additional content for Card 4",
      imageURL: '/techStack1.png'
    },
    {
      title: "Maintainence",
      hoverTitle: "Maintainence",
      description: "Meticulous selection of frameworks, programming languages, libraries and tools followed by the development of innovative application with a clean code architecture.",
      content: "Additional content for Card 5",
      imageURL: '/techStack1.png'
    },
    // Add more cards here...
  ];

  const RPASolution = [
    {
      id: 1,
      cardBGColor: '#F5B1DC',
      cardHeading: 'Custom Application Development',
      cardDesc: 'Automate repetitive tasks to enhance productivity with AI-driven workflow automation and analytics',
      isArrow: true,
      cardTextColor: 'black',
      cardTopImageUrl: 'https://flowbite.com/docs/images/blog/image-1.jpg'
    },
    {

      id: 2,
      cardBGColor: '#FCE6F4',
      cardHeading: 'Custom Application Development',
      cardDesc: 'AI-driven workflows, OCR and rule-based system enables accurate results',
      isArrow: true,
      cardTextColor: 'black',
      cardTopImageUrl: 'https://flowbite.com/docs/images/blog/image-4.jpg'
    },
    {

      id: 3,
      cardBGColor: '#CDBAF3',
      cardHeading: 'Compliance and Consistency',
      cardDesc: 'Manage contract workflows, forms and compliance with consistency and regulatory adherence',
      isArrow: true,
      cardTextColor: 'black',
      cardTopImageUrl: 'https://flowbite.com/docs/images/blog/image-7.jpg'
    },
    {

      id: 4,
      cardBGColor: '#E4E4E4',
      cardHeading: 'Strengthen Potential',
      cardDesc: 'Empower employees to focus on strategic tasks to deliver attentive experience to customers',
      isArrow: true,
      cardTextColor: 'black',
      cardTopImageUrl: 'https://flowbite.com/docs/images/blog/image-1.jpg'
    },
    {

      id: 5,
      cardBGImageUrl: '/rpa/ArtboardBg.png',
      cardBGColor: '#EFE9FB',
      cardHeading: 'Enhance Flexibility',
      cardDesc: 'Adapt to changing business needs without hiring and training new staff, saving time and expense',
      isArrow: true,
      cardTextColor: 'black',
      cardTopImageUrl: 'https://flowbite.com/docs/images/blog/image-2.jpg'
    },
    {


      id: 5,
      cardBGImageUrl: '/rpa/ArtboardBg.png',
      cardBGColor: '#EFE9FB',
      cardHeading: 'Reduce AHT (Average Handling Time)',
      cardDesc: 'Enhance customer service quality, minimize response time and improve operational efficiency',
      isArrow: false,
      cardTextColor: 'black',
      cardTopImageUrl: 'https://flowbite.com/docs/images/blog/image-3.jpg'
    },
  ]


  return (<>
    {/* Start--Section--HeroBanner======================================================== */}
    <EntIntro
      title="Scalable and Customized Business Applications"
      desc="Your Trusted Technology Partner for Scalable and
Customized Business Applications
"
      cta="Let's Connect"
      width="60%"
      video="https://gitl-usa.s3.us-west-1.amazonaws.com/banner1.mp4"
    />

    {/* End--Section--HeroBanner======================================================== */}
    {/* Start--Section-Navigation======================================================== */}

    <SectionNav
      /**
       * ! Solutions
       * ! Benefits
       * ! Why Us
       */

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
    <TechnologyStackLogos />

    <CommonCardThreeSlider
      ID={'AIOfferings'}
      sectionImageUrl={''}
      sectionBGColor={'#fff'}
      sectionHeading={'Service Offerings'}
      sectionDesc={''}
      sectionTextColor={'#000'}
      sectionHeaderMaxWidth={'40%'}
      cardData={RPASolution}
    >

    </CommonCardThreeSlider>
    {/* End--Overview-Section======================================================== */}
    {/* Start--Logos--Section======================================================== */}
    {/* End--Logos--Section======================================================== */}
    {/* Start--Benefit--Section======================================================== */}
    <BenefitSliderSection
      ID={'BENEFIT'}
      sectionBGColor={'#1D162B'}
      sectionHeading={'Benefits of BeSpoke Application'}
      sectionDesc={'Implementing intelligent technologies is crucial for businesses to fuel growth & stay relevant in digital era.'}
      sectionTextColor={'white'}
      cardData={BENEFITS_CARDS_DATA}
      sectionHeadingMaxWidth={'100%'}
    />
    {/* End--Benefit--Section======================================================== */}
    {/* Start--Service--Section======================================================== */}
    <ServicesCardSlider cardData={SERVICE_CARDS_DATA} heading={"Technology Stack"} desc={""} color={"#1D162B"} />

    {/* End--Service--Section======================================================== */}



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
    {/* Start--Section--Distinctive======================================================== */}
    <DistinctiveSection DistinctiveData={DISTINCTIVE_DATA}
      ID={'Distinctive'} Title={'The Distinctive Edge'} Desc={'We understand the intricacies of diverse technologies, leverage our capability and experience to deliver solutions that ally exquisitely with your business ambitions.'}
    >
    </DistinctiveSection>
    {/* End--Section--Distinctive======================================================== */}
    {/* Start--Section--Testimonials======================================================== */}
    <ReviewSliderSection
      ID={"TESTIMONIALS"}
      Heading={"Delighted customers share their success experience"}
      Desc={''}
      Color="#ffffff"
      CardDataList={TESTIMONIAL_DATA}
      BGColor="#1D162B"
      SectionHeadingMaxWidth={'70%'}
    ></ReviewSliderSection>
    {/* End--Section--Testimonials======================================================== */}
    {/* Section--TransformBusinessForm======================================================================= */}
    <TransformBusinessForm
      Title={"Transform your Business with us"}
      Desc={
        "Let us discuss how intelligent technologies can help you with rapid growth."
      }
    ></TransformBusinessForm>
    {/* End-Section--TransformBusinessForm */}


  </>);
};

export default TechnologyStack;