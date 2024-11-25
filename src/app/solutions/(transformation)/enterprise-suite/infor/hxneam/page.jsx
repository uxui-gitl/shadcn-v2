"use client";

import EntIntro from "@/components/EntIntro";
import OverviewSection from "@/sections/overview/OverviewSection";
import CommonCardTwoSlider from "@/sections/commonCardTwoSlider/CommonCardTwoSlider";
import IndustrySpotlight from "@/sections/industry-spotlight/industrySpotlight";
import BenefitSliderSection from '@/sections/benefitSlider/BenefitSliderSection';
import CaseStudiesSection from "@/sections/case-studies/CaseStudiesSection";
import BlogSection from "@/sections/blog/BlogSection";
import TransformBusinessForm from "@/sections/transformBusinessFrom/TransformBusinessFromSection";
import DistinctiveSection from "@/sections/distinctive/DistinctiveSection";
const page = () => {

  const blogImageUrl = "/hxneam/blogBg.webp";
  const RPASolution = [
    {
      id: 1,
      cardBGImageUrl: '/hxneam/coreCapabilities/assetManagement.webp',
      cardBGColor: '#7F4EE1',
      cardHeading: 'Asset Management',
      cardDesc: 'Centralized approach efficiently manages asset portfolio with accurate record, structure and standardize asset information.',
      isArrow: false,
      cardTextColor: 'white',
      cardType: 1,
    },
    {

      id: 2,
      cardBGImageUrl: '/hxneam/coreCapabilities/assetPerformance.webp',
      cardBGColor: '#000',
      cardHeading: 'Asset Performance Management',
      cardDesc: 'Real-time monitoring, asset health tracking and lifecycle management, enables proactive potential issue identification.',
      isArrow: false,
      cardTextColor: 'white',
      cardType: 2,
    },
    {

      id: 3,
      cardBGImageUrl: '/hxneam/coreCapabilities/automateWork.webp',
      cardBGColor: '#7F4EE1',
      cardHeading: 'Work Management',
      cardDesc: 'Automate work orders and monitor purchase orders. Implement preventive maintenance to minimize downtime & prolong asset life.',
      isArrow: false,
      cardTextColor: 'white',
      cardType: 1,
    },
    {

      id: 4,
      cardBGImageUrl: '/hxneam/coreCapabilities/intelligentNonconformity.webp',
      cardBGColor: '#EFE9FB',
      cardHeading: 'Intelligent nonconformity tracking',
      cardDesc: 'Quickly detect and manage nonconformities with intelligent tracking, prioritized corrective action and customizable indexing.',
      isArrow: false,
      cardTextColor: 'white',
      cardType: 2,
    },
    {

      id: 5,
      cardBGImageUrl: '/hxneam/coreCapabilities/inspectionManagement.webp',
      cardBGColor: '#EFE9FB',
      cardHeading: 'Inspection management',
      cardDesc: 'Simplify inspection planning and execution with easy scheduling, classification, and workflow management.',
      isArrow: false,
      cardTextColor: 'white',
      cardType: 1,
    },

    {

      id: 6,
      cardBGImageUrl: '/hxneam/coreCapabilities/electronicRecords.webp',
      cardBGColor: '#EFE9FB',
      cardHeading: 'Electronic records and signatures',
      cardDesc: 'Electronic records, signatures, and automated audit trails, ensuring compliance and version control',
      isArrow: false,
      cardTextColor: 'white',
      cardType: 2,
    },
    
    {

      id: 7,
      cardBGImageUrl: '/hxneam/coreCapabilities/safetyManagement.webp',
      cardBGColor: '#EFE9FB',
      cardHeading: 'Safety management',
      cardDesc: 'Identify and control hazards, ensure HSE compliance, mitigate risks and safe work environment.',
      isArrow: false,
      cardTextColor: 'white',
      cardType: 1,
    },
     {

      id: 8,
      cardBGImageUrl: '/hxneam/coreCapabilities/calibration.webp',
      cardBGColor: '#EFE9FB',
      cardHeading: 'Calibration',
      cardDesc: 'Track calibration data, define test points, and associate with work orders to ensure equipment accuracy',
      isArrow: false,
      cardTextColor: 'white',
      cardType: 2,
    },
        {

      id: 9,
      cardBGImageUrl: '/hxneam/coreCapabilities/managementServices.webp',
      cardBGColor: '#EFE9FB',
      cardHeading: 'Asset management services',
      cardDesc: 'Optimize asset management financials with transparent & automated cost tracking and deliver accurate service costs to customers through invoices.',
      isArrow: false,
      cardTextColor: 'white',
      cardType: 1,
    },
     
       
  ];

  const INDUSTRY_SPOTLIGHT = [
    {
      id: 1,
      cardBGImageUrl:
        "/industry-spotlight/cards-backgrounds/card-bg--manufacturing.png",
      cardBGColor: "#7F4EE1",
      cardHeading: "Manufacturing",
      cardDesc: "",
      isArrow: false,
      cardTextColor: "white",
    },
    {
      id: 2,
      cardBGImageUrl:
        "/industry-spotlight/cards-backgrounds/card-bg--retail.png",

      cardBGColor: "#7F4EE1",
      cardHeading: "Facility Management",
      cardDesc:
        "AI-driven workflows, OCR and rule-based system enables accurate results",
      isArrow: false,
      cardTextColor: "white",
    },
    {
      id: 3,
      cardBGImageUrl:
        "/industry-spotlight/cards-backgrounds/card-bg--trading-and-distribution.png",

      cardBGColor: "#7F4EE1",
      cardHeading: "Trading & Distribution",
      cardDesc:
        "Manage contract workflows, forms and compliance with consistency and regulatory adherence",
      isArrow: false,
      cardTextColor: "white",
    },
    {
      id: 4,
      cardBGImageUrl:
        "/industry-spotlight/cards-backgrounds/card-bg--healthcare.png",

      cardBGColor: "#EFE9FB",
      cardHeading: "Healthcare",
      cardDesc:
        "Empower employees to focus on strategic tasks to deliver attentive experience to customers",
      isArrow: false,
      cardTextColor: "white",
    },
    {
      id: 5,
      cardBGImageUrl:
        "/industry-spotlight/cards-backgrounds/card-bg--professional-services.png",

      cardBGColor: "#EFE9FB",
      cardHeading: "Projects",
      cardDesc: "",
      isArrow: false,
      cardTextColor: "white",
    },
    
    // Add more cards as needed
  ];

  const BENEFITS_CARDS_DATA = [
    { id: '1', icon:'/hxneam/benefits/assetUptime.svg', cardDesc: '35% increase in asset uptime' },
    { id: '2', icon:'/hxneam/benefits/improvement.svg', cardDesc: '70% improvement in labor utilisation' },
    { id: '3', icon:'/hxneam/benefits/decrease.svg', cardDesc: '45% decrease in inventory cost' },
    { id: '4', icon:'/hxneam/benefits/reduction.svg', cardDesc: '50% reduction in warranty cost recovery' },
    { id: '5', icon:'/hxneam/benefits/production.svg', cardDesc: '20% reduction in production downtime' },
    { id: '6', icon:'/hxneam/benefits/materialsCost.svg', cardDesc: '10% reduction in materials costs' },
  ];

  const CASE_STUDIES_DATA = [
    {
      imageURL: " ",
      videoURL: "",
      title: "Case Studies",
      heading: 'HxGN EAM Project Highlights',
      description: "",
      link: "",
      color: '#FFFFFF',
      bgCardColor: '#2B1624'
    },
    {
      imageURL: "",
      title: "",
      heading: `Enabling asset lifecycle management`,
      description: "Indian based Global Oncology Pharmaceuticals Company Implements HxGN EAM Solution with Equipment, Work and Material Modules",
      link: "/knowledge-center/case-studies.aspx",
      color: '#000',
      bgCardColor: '#E4E4E4'
    },

    {
      imageURL: "/path/to/image1.jpg",
      title: "",
       heading: "Enterprise Asset Management",
      description: "Indian Prominent Healthcare Organization Offering Emergency Medical Response Services Upgrades to Hexagon EAM 11.6.",
      link: "/case-study-1",
      color: '#000',
      bgCardColor: '#FCE6F4'
    },
    {
      imageURL: "/CloudStackServices/case-studies/bg--electical-devices.png",
      title: "",
      heading: "Leading Distributor of Fruits & Vegetables in the Philippines",
      description: "Flexible system accessibility and Faster deployment time with D365 F&O Cloud Solution",
      link: "/case-study-1",
      color: '#000',
      bgCardColor: '#FFFFFF'
    },
    // Add more case studies here...
  ];

  const distinctiveData = [
    {
      _id: 1,
      desc: "Trusted global partner for Infor and Hexagon.",
      icon: "/hxneam/distinctiveEdge/trusted.svg",
    },
    {
      _id: 2,
      desc: "Domain knowledge and a proven track record of success.",
      icon: "/hxneam/distinctiveEdge/domainKnowledge.svg",
    },
    {
      _id: 3,
      desc: "Expertise in delivering innovative solutions that address most complex digital transformation needs.",
      icon: "/hxneam/distinctiveEdge/expertise.svg",
    },
    

  ]
  return (
    <>
      <EntIntro
        title="Gain Asset Management Visibility for Informed Capital Investments with HxGN EAM"
        desc="Maximize asset lifecycles with leading asset management solution"
        cta="Let's Connect"
        width="60%"
        video="/hxneam/videos/pageBanner.mp4"
      />

      <OverviewSection Text={`Expert HxGN EAM implementation transforming asset management and enabling predictive maintenance & maintenance cost optimization for improved ROI.`} />
      {/* optimising rpa solution */}
      <CommonCardTwoSlider
        ID={'AIOfferings'}
        sectionImageUrl={''}
        sectionBGColor={'bg-neutral-light-grey'}
        sectionHeading={'Core Capabilities'}
        sectionDesc={'HxGN EAM dynamically adapts to asset lifecycle stages ensuring higher efficiency, consistently.'}
        sectionTextColor={'text-primary-900'}
        sectionHeaderMaxWidth={'40%'}
        cardData={RPASolution}
        setHeadingLayout={'horizontal'}
        setTop={false}
      >
      </CommonCardTwoSlider>

      <IndustrySpotlight cardData={INDUSTRY_SPOTLIGHT} sectionHeading={'Industry Spotlight'} sectionDesc={'Addressing distinct technological needs of diverse sectors, supporting businesses to succeed '}/>

      <BenefitSliderSection
        ID={'BENEFIT'}
        sectionBGColor={'bg-primary-900'}
        sectionHeading={'Benefits of HxGN EAM'}
        sectionDesc={`Hexagon EAM's modular architecture adapts to changing business needs, ensuring seamless system integration`}
        sectionTextColor={'text-neutral-white'}
        cardData={BENEFITS_CARDS_DATA} 
        sectionHeadingMaxWidth={'100%'}
      />

      <CaseStudiesSection casestudy={CASE_STUDIES_DATA} csLayout={"5"} bgColor='bg-neutral-white' />


      <BlogSection
        ID={"blog"}
        blogImageUrl={blogImageUrl}
        Heading={"Why customizing HxGN EAM is important for your business"}
        Desc={
          "Customizing HxGN EAM is not just a desirable feature, but a strategic imperative that can propel your organization to the forefront of efficiency and productivity."
        }
        maxWidth={'50%'}
        Color={"text-neutral-white"}
      ></BlogSection>
     <DistinctiveSection DistinctiveData={distinctiveData}
        ID={'Distinctive'} Title={'The Distinctive Edge'} Desc={''}
      >
      </DistinctiveSection>

      <TransformBusinessForm
        Title={"Ready to Optimize Your Asset Performance?"}
        Desc={
          "Let's Discuss!"
        }
      ></TransformBusinessForm>
    </>
  );
};

export default page;
