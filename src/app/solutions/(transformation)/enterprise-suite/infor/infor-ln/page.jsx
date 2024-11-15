"use client";
import EntIntro from "@/components/EntIntro";
import SectionNav from "@/components/SectionNav";
import OverviewSection from "@/sections/overview/OverviewSection";
import CommonCardThreeSlider from "@/sections/commonCardThreeSlider/CommonCardThreeSlider";
import CommonCardTwoSlider from "@/sections/commonCardTwoSlider/CommonCardTwoSlider";
import IndustrySpotlight from "@/sections/industry-spotlight/industrySpotlight";
import BenefitSliderSection from '@/sections/benefitSlider/BenefitSliderSection';
import TransformBusinessForm from "@/sections/transformBusinessFrom/TransformBusinessFromSection";
import DistinctiveSection from "@/sections/distinctive/DistinctiveSection";

const page = () => {
  const distinctiveData = [
    {
      _id: 1,
      desc: "Serving one of Asia's largest Infor LN user bases",
      icon: "/inforLN/distinctiveEdge/servingOne.webp",
    },
    {
      _id: 2,
      desc: "Project managers take complete responsibility for timely delivery of high-quality solutions",
      icon: "/inforLN/distinctiveEdge/projectManagers.webp",
    },
    {
      _id: 3,
      desc: "Proprietary tool integrating project management and communication, ensuring 100% transparency.",
      icon: "/inforLN/distinctiveEdge/proprietaryTool.webp",
    },
    {
      _id: 4,
      desc: "Delivering significant advantages for complex, multi-site manufacturing operations",
      icon: "/inforLN/distinctiveEdge/delivering.webp",
    },

  ]
  const BENEFITS_CARDS_DATA = [

    { id: '1', icon:'', cardDesc: 'Access advanced features for global financials, supply chain management, manufacturing, project management, and service lifecycle management.' },
    { id: '2', icon:'', cardDesc: 'Top-notch global ERP solution with modern user experience that offers end to end process transparency, agility and quick value delivery.' },
    { id: '3', icon:'', cardDesc: 'Guaranteed optimal, industry- specific business operations aligned with global best practices. ' },
    
  ];
  const INDUSTRY_SPOTLIGHT = [
    {
      id: 1,
      cardBGImageUrl:
        "/industry-spotlight/cards-backgrounds/card-bg--manufacturing.png",
      cardBGColor: "#7F4EE1",
      cardHeading: "Aerospace and Defense",
      cardDesc: "",
      isArrow: false,
      cardTextColor: "white",
    },
    {
      id: 2,
      cardBGImageUrl:
        "/industry-spotlight/cards-backgrounds/card-bg--retail.png",

      cardBGColor: "#7F4EE1",
      cardHeading: "Industrial Manufacturing",
      cardDesc:"",
      isArrow: false,
      cardTextColor: "white",
    },
    {
      id: 3,
      cardBGImageUrl:
        "/industry-spotlight/cards-backgrounds/card-bg--trading-and-distribution.png",

      cardBGColor: "#7F4EE1",
      cardHeading: "Automotive",
      cardDesc:"",
      isArrow: false,
      cardTextColor: "white",
    },
    {
      id: 4,
      cardBGImageUrl:
        "/industry-spotlight/cards-backgrounds/card-bg--healthcare.png",

      cardBGColor: "#EFE9FB",
      cardHeading: "Construction and Engineering",
      cardDesc:"",
      isArrow: false,
      cardTextColor: "white",
    },
    // Add more cards as needed
  ];

  
  const RPASolution = [
    {
      id: 1,
      cardBGImageUrl: '/inforLN/keyCapabilities/masterComplexity.webp',
      cardBGColor: '#7F4EE1',
      cardHeading: 'Master complexity',
      cardDesc: 'Drive better customer experiences with simple and efficient management of technology, activities, information and resources.',
      isArrow: false,
      cardTextColor: 'white',
      cardType: 1,
    },
    {
  
      id: 2,
      cardBGImageUrl: '/inforLN/keyCapabilities/agileSupplyChain.webp',
      cardBGColor: '#000',
      cardHeading: 'Agile supply chain',
      cardDesc: 'Optimize supply chain performance, minimize risk and enable multimodal manufacturing, mass customization and subcontractor integration.',
      isArrow: false,
      cardTextColor: 'white',
      cardType: 2,
    },
    {
  
      id: 3,
      cardBGImageUrl: '/inforLN/keyCapabilities/serviceLifecycle.webp',
      cardBGColor: '#7F4EE1',
      cardHeading: 'Service lifecycle management',
      cardDesc: 'Maximize service effectiveness with comprehensive lifecycle management that covers service planning to performance analytics.',
      isArrow: false,
      cardTextColor: 'white',
      cardType: 1,
    },
    {
  
      id: 4,
      cardBGImageUrl: '/inforLN/keyCapabilities/qualityManagement.webp',
      cardBGColor: '#EFE9FB',
      cardHeading: 'Quality management',
      cardDesc: 'Minimize product recalls, warranty claims and scrap costs, ensuring business requirements and effective quality control.',
      isArrow: false,
      cardTextColor: 'white',
      cardType: 2,
    },
    {
  
      id: 5,
      cardBGImageUrl: '/inforLN/keyCapabilities/projectLifecycle.webp',
      cardBGColor: '#EFE9FB',
      cardHeading: 'Project lifecycle management',
      cardDesc: 'Effectively manage project planning, tracking, and reporting, resource allocation, cost control and risk mitigation.',
      isArrow: false,
      cardTextColor: 'white',
      cardType: 1,
    },
    {
    id: 6,
      cardBGImageUrl: '/inforLN/keyCapabilities/integrationWorkflow.webp',
      cardBGColor: '#EFE9FB',
      cardHeading: 'Integration and workflow',
      cardDesc: 'Infor ION integrates and automates workflows, connecting people, processes and data across organization. Access tasks and critical information anywhere, anytime on mobile.',
      isArrow: false,
      cardTextColor: 'white',
      cardType: 2,
    },
        {
    id: 7,
      cardBGImageUrl: '/inforLN/keyCapabilities/businessIntelligence.webp',
      cardBGColor: '#EFE9FB',
      cardHeading: 'Business intelligence with Infor Birst',
      cardDesc: 'Infor Birst delivers integrated business intelligence, including financial and operational analytics with Infor LN synergy, enabling predictive insights and informed decision-making.',
      isArrow: false,
      cardTextColor: 'white',
      cardType: 1,
    },
            {
    id: 8,
      cardBGImageUrl: '/inforLN/keyCapabilities/productLifecycle.webp',
      cardBGColor: '#EFE9FB',
      cardHeading: 'Product lifecycle management',
      cardDesc: 'Seamless workflows, analysis, CAD integration and collaboration for reduced time-to-market and improved product quality',
      isArrow: false,
      cardTextColor: 'white',
      cardType: 2,
    },
  ]


  const RPASolution2 = [
    {
      id: 1,
      cardBGColor: '#F5B1DC',
      cardHeading: 'Data Conversion Utility Tool',
      cardDesc: 'Convert legacy data to new systems with automated checks and validation overcoming structural changes and master data complexities.',
      isArrow: true,
      cardTextColor: 'black',
      cardTopImageUrl: '/inforLN/inforAccelerators/dataConversion.webp'
    },
    {

      id: 2,
      cardBGColor: '#FCE6F4',
      cardHeading: 'Pre-built business reporting',
      cardDesc: 'Auto- generation of pre-configured reports, providing real time insights into business performance, reducing time and efforts.',
      isArrow: true,
      cardTextColor: 'black',
      cardTopImageUrl: '/inforLN/inforAccelerators/businessReporting.webp'
    },
    {

      id: 3,
      cardBGColor: '#CDBAF3',
      cardHeading: 'Infor Cloud Migration Planner',
      cardDesc: 'Simplify complex data migration with coded standards, automating validation, handling obsolete value and ensuring application compatibility.',
      isArrow: true,
      cardTextColor: 'black',
      cardTopImageUrl: '/inforLN/inforAccelerators/inforCloud.webp'
    },
    {

      id: 4,
      cardBGColor: '#E4E4E4',
      cardHeading: 'Business Process Mapping and Customization',
      cardDesc: 'Configure industry standard practices effortlessly, featuring pre-built functionality and expert-driven add-ons, tailored to business needs.',
      isArrow: true,
      cardTextColor: 'black',
      cardTopImageUrl: '/inforLN/inforAccelerators/processMapping.webp'
    },
  ]
  return (
<>
<EntIntro
        title="Manage complex industry processes, ensuring efficiency with Infor LN"
        desc="We help businesses overcome complex challenges and achieve strategic objectives."
        cta="Let's Connect"
        width="60%"
        video="/inforLN/video/pageBanner.mov"
      />

      <OverviewSection Text={`Discover how our industry expertise and end-to-end services can help you derive maximum value from Infor LN investment.`} />
 {/* optimising rpa solution */}
 <CommonCardTwoSlider
        ID={'AIOfferings'}
        sectionImageUrl={''}
        sectionBGColor={'bg-primary-10'}
        sectionHeading={'Key Capabilities'}
        sectionDesc={'Infor LN is an ERP solution for operations-intensive organizations, offering advanced capabilities to optimize business performance.'}
        sectionTextColor={'text-primary-900'}
        sectionHeaderMaxWidth={'40%'}
        cardData={RPASolution}
        setHeadingLayout='horizontal'
      >
      </CommonCardTwoSlider>
      {/* optimising rpa solution end */}

      <CommonCardThreeSlider
        ID={''}
        sectionImageUrl={''}
        sectionBGColor={'bg-primary-900'}
        sectionHeading={'Infor Accelerators'}
        sectionDesc={'Enhancing the functionalities of business applications, our specialized solutions intend to add value to business with handy support.'}
        sectionTextColor={'text-neutral-white'}
        cardData={RPASolution2}
      />

        <IndustrySpotlight cardData={INDUSTRY_SPOTLIGHT} />
        <BenefitSliderSection
        ID={'BENEFIT'}
        sectionBGColor={'bg-primary-900'}
        sectionHeading={'Benefits of Infor LN'}
        sectionDesc={''}
        sectionTextColor={'text-neutral-white'}
        cardData={BENEFITS_CARDS_DATA}
        sectionHeadingMaxWidth={'100%'}
      />
      <DistinctiveSection DistinctiveData={distinctiveData}
        ID={'Distinctive'} Title={'The Distinctive Edge'} Desc={'We ensure seamless Infor LN implementation, customization and support to maximize ERP investment.'}
      >
      </DistinctiveSection>
<TransformBusinessForm
        Title={"Transform your Business with us"}
        Desc={
          "Let us discuss how Infor LN can help you with rapid growth."
        }
      ></TransformBusinessForm>
</>
     );
};

export default page;
