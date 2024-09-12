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

  const blogImageUrl = "/ai-ml/blog-bg.png";
  const RPASolution = [
    {
      id: 1,
      cardBGImageUrl: 'https://flowbite.com/docs/images/blog/image-1.jpg',
      cardBGColor: '#7F4EE1',
      cardHeading: 'Increase Productivity',
      cardDesc: 'Automate repetitive tasks to enhance productivity with AI-driven workflow automation and analytics',
      isArrow: false,
      cardTextColor: 'white',
      cardType: 1,
    },
    {

      id: 2,
      cardBGImageUrl: '',
      cardBGColor: '#000',
      cardHeading: 'Accurate Outcomes',
      cardDesc: 'AI-driven workflows, OCR and rule-based system enables accurate results',
      isArrow: false,
      cardTextColor: 'white',
      cardType: 2,
    },
    {

      id: 3,
      cardBGImageUrl: 'https://flowbite.com/docs/images/blog/image-6.jpg',
      cardBGColor: '#7F4EE1',
      cardHeading: 'Compliance and Consistency',
      cardDesc: 'Manage contract workflows, forms and compliance with consistency and regulatory adherence',
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
      cardBGImageUrl: 'https://flowbite.com/docs/images/blog/image-4.jpg',
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
      cardHeading: "Retail",
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
      cardHeading: "Professional Services",
      cardDesc: "",
      isArrow: false,
      cardTextColor: "white",
    },
    {
      id: 5,
      cardBGImageUrl:
        "/industry-spotlight/cards-backgrounds/card-bg--project.png",

      cardBGColor: "#EFE9FB",
      cardHeading: "Project",
      cardDesc: "",
      isArrow: false,
      cardTextColor: "white",
    },
    // Add more cards as needed
  ];

  const BENEFITS_CARDS_DATA = [
    { id: '1', icon:'', cardDesc: 'A high degree of accuracy and consistency in business operations' },
    { id: '2', icon:'', cardDesc: 'Informed decision-making to extract valuable insights and identify patterns, correlation, and trends' },
    { id: '3', icon:'', cardDesc: 'Real-time problem-solving enable minimum disruptions and ensures uninterrupted business operations' },
    { id: '4', icon:'', cardDesc: 'Automation of repetitive tasks, resulting in increased operational efficiency and productivity.' },
    { id: '5', icon:'', cardDesc: 'Reduce equipment downtime and increase operational efficiency with real-time monitoring and predictive maintenance' },
  ];

  const CASE_STUDIES_DATA = [
    {
      imageURL: " ",
      videoURL: "",
      title: "Case Studies",
      heading: 'KSA based Distributor of Electrical Components',
      description: "",
      link: "/case-study-1",
      color: '#FFFFFF',
      bgCardColor: '#2B1624'
    },
    {
      imageURL: "",
      title: "",
      heading: 'India’s Leading Wildlife & Nature Conservation Organization',
      description: "Built-in redundancy & automatic backups with Successful implementation of D365 Finance & Operations on Cloud",
      link: "/case-study-1",
      color: '#000',
      bgCardColor: '#E4E4E4'
    },

    {
      imageURL: "/path/to/image1.jpg",
      title: "",

      heading: "Coffee Brand Distributor in Egypt and Middle East",
      description: "Decreasing downtime and optimising system cost along with 100% data transparency through Single Cloud System",
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
      desc: "Enables automation across diverse use cases",
      icon: "",
    },
    {
      _id: 2,
      desc: "Help businesses achieve high productivity",
      icon: "",
    },
    {
      _id: 3,
      desc: "Substantial improvements in return on investment (ROI)",
      icon: "",
    },
    {
      _id: 4,
      desc: "Extensive experience in understanding industry-specific challenges and opportunities",
      icon: "",
    },

  ]
  return (
    <>
      <EntIntro
        title="Embrace the Digital Future of Business Efficiency with Industry Specialized Infor Application"
        desc=""
        cta="Let's Connect"
        width="60%"
        video="https://gitl-usa.s3.us-west-1.amazonaws.com/banner1.mp4"
      />

      <OverviewSection Text={`Globally recognized Infor is a robust ERP solution that delivers improved business strength and operational responsiveness. Committed to offering core industry application `} />
      {/* optimising rpa solution */}
      <CommonCardTwoSlider
        ID={'AIOfferings'}
        sectionImageUrl={''}
        sectionBGColor={'#E1F2EF'}
        sectionHeading={'Core Capabilities'}
        sectionDesc={'Beyond static approaches, HxGN EAM dynamically adapts to the lifecycle stages ensuring assets remain at their peak throughout.'}
        sectionTextColor={'#000'}
        sectionHeaderMaxWidth={'40%'}
        cardData={RPASolution}
        setHeadingLayout="horizontal"
      >
      </CommonCardTwoSlider>

      <IndustrySpotlight cardData={INDUSTRY_SPOTLIGHT} />

      <BenefitSliderSection
        ID={'BENEFIT'}
        sectionBGColor={'#1D162B'}
        sectionHeading={'Benefits of Infor LN'}
        sectionDesc={'Discover substantial benefits that Infor LN brings to the table, helping in competitive business landscape.'}
        sectionTextColor={'white'}
        cardData={BENEFITS_CARDS_DATA}
        sectionHeadingMaxWidth={'100%'}
      />

      <CaseStudiesSection casestudy={CASE_STUDIES_DATA} csLayout={"5"} bgColor='#FFFFFF' />


      <BlogSection
        ID={"blog"}
        blogImageUrl={blogImageUrl}
        Heading={"The Powerful Duo: AI and the Internet of Things (IoT) Reshaping Our World"}
        Desc={
          "Imagine a world where machines talk to each other, predicting problems before they happen and adjusting on the fly. This isn't magic; it's the incredible team of artificial intelligence (AI) and the Internet of things (IoT) in Industry 4.0, the latest wave of technological revolution. "
        }
        maxWidth={'50%'}
        Color={"white"}
      ></BlogSection>
     <DistinctiveSection DistinctiveData={distinctiveData}
        ID={'Distinctive'} Title={'The Distinctive Edge'} Desc={'Reliable Expertise in Intelligent Tech Solutions'}
      >
      </DistinctiveSection>

      <TransformBusinessForm
        Title={"Transform your Business with us"}
        Desc={
          "Let us discuss how intelligent technologies can help you with rapid growth."
        }
      ></TransformBusinessForm>
    </>
  );
};

export default page;
