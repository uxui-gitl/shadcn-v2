"use client";
import EntIntro from "@/components/EntIntro";
import SectionNav from "@/components/SectionNav";
import OverviewSection from "@/sections/overview/OverviewSection";
import SectionHeading from '@/components/SectionHeading';
import SectionWrapper from '@/components/SectionWrapper';
import CommonCardTwoSlider from "@/sections/commonCardTwoSlider/CommonCardTwoSlider";
import SectionWidthSlider from "@/sections/sectionWithSlider/SectionWithSlider";
import BenefitSliderSection from '@/sections/benefitSlider/BenefitSliderSection';
import IndustrySpotlight from "@/sections/industry-spotlight/industrySpotlight";
import BlogSection from "@/sections/blog/BlogSection";
import DistinctiveSection from "@/sections/distinctive/DistinctiveSection";
import TransformBusinessForm from "@/sections/transformBusinessFrom/TransformBusinessFromSection";
const page = () => {
  const DISTINCTIVE_DATA = [
    {
      _id: 1,
      desc: "Hassle-free Oracle implementation and migration",
      icon: "",
    },
    {
      _id: 2,
      desc: "Complex financial and operational data analysis expertise",
      icon: "",
    },
    {
      _id: 3,
      desc: "Integrated cross-functional insights for informed decisions",
      icon: "",
    },
    {
      _id: 4,
      desc: "Committed to increase operations productivity and business performance",
      icon: "",
    },
    
  ];
  const blogImageUrl = "/ai-ml/blog-bg.png";
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
      cardHeading: "Healthcare",
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
      cardHeading: "Projects",
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
      cardHeading: "Professional Services",
      cardDesc:
        "Empower employees to focus on strategic tasks to deliver attentive experience to customers",
      isArrow: false,
      cardTextColor: "white",
    },
    
    // Add more cards as needed
  ];
  const BENEFITS_CARDS_DATA = [
    { id: '1', icon:'' ,cardDesc: 'Centralized data for insightful multidimensional reporting.' },
    { id: '2', icon:'' ,cardDesc: 'Accelerated business operation with regulatory compliance.' },
    { id: '3', icon:'' ,cardDesc: 'Pre-built blockchain applications for cost-effective, transparent operations.' },
    { id: '4', icon:'' ,cardDesc: 'Enable IoT applications for enhanced customer experiences and HR.' },
    { id: '5', icon:'' ,cardDesc: 'Improved decision-making and productivity with machine learning enablement' },
    { id: '6', icon:'' ,cardDesc: 'Unified financial management and streamlined procurement' },
    { id: '7', icon:'' ,cardDesc: 'Efficient project management and enhanced human capital management' },
  ];
  const ultimateChoiceData = [
    {
      id: 1,
      BGImageUrl: "",
      BGColor: "#fff",
      CardBGColor: "transparent",
      CardTextColor: '#fff',
      CardTitle: "",
      CardIconUrl: "/upgradeCloud/icons/ico--target.svg",
      CardHeading: "Financial Management",
      CardDesc:
        "Track income, expenses and assets while ensuring tax compliance and enhancing forecasting precision.",
      isArrow: "",
      link: [],
    },

    {
      id: 2,
      BGImageUrl: "",
      BGColor: "#fff",
      CardBGColor: "transparent",
      CardTextColor: '#fff',
      CardTitle: "",
      CardIconUrl: "/upgradeCloud/icons/ico--target.svg",
      CardHeading: "Supply chain Management",
      CardDesc:
        "Monitor and manage information and services, spanning from procurement of raw materials to delivery of the final product.",
      isArrow: "",
      link: [],
    },
    {
      id: 3,
      BGImageUrl: "",
      BGColor: "#fff",
      CardBGColor: "transparent",
      CardTextColor: '#fff',
      CardTitle: "",
      CardIconUrl: "/upgradeCloud/icons/ico--target.svg",
      CardHeading: "Human Capital Management",
      CardDesc:
        "Experience unified user experience, harmonized data model and integrated processes with an AI-infused infrastructure.",
      isArrow: "",
      link: [],
    },
    {
      id: 4,
      BGImageUrl: "",
      BGColor: "#fff",
      CardBGColor: "transparent",
      CardTextColor: '#fff',
      CardTitle: "",
      CardIconUrl: "/upgradeCloud/icons/ico--target.svg",
      CardHeading: "Sample Heading",
      CardDesc:
        "Highest levels of security and privacy, ensuring data is safeguarded",
      isArrow: "",
      link: [],
    },
  ];
  const RPASolution = [
    {
      id: 1,
      cardBGImageUrl: 'https://flowbite.com/docs/images/blog/image-1.jpg',
      cardBGColor: '#7F4EE1',
      cardHeading: 'Business Consulting & Implementation',
      cardDesc: 'Expert guidance for business transformation through strategic assessment and seamless implementation.',
      isArrow: true,
      cardTextColor: 'white',
      cardType: 1,
    },
    {

      id: 2,
      cardBGImageUrl: '',
      cardBGColor: '#000',
      cardHeading: 'Oracle Cloud Integration Services',
      cardDesc: 'Integrate Oracle Cloud solutions effortlessly, enabling enhanced productivity.',
      isArrow: false,
      cardTextColor: 'white',
      cardType: 2,
    },
    {

      id: 3,
      cardBGImageUrl: 'https://flowbite.com/docs/images/blog/image-6.jpg',
      cardBGColor: '#7F4EE1',
      cardHeading: 'Oracle Database Management',
      cardDesc: 'Optimize database performance and security with expert management services.',
      isArrow: false,
      cardTextColor: 'white',
      cardType: 1,
    },
    {

      id: 4,
      cardBGImageUrl: '/rpa/ArtboardBg.png',
      cardBGColor: '#EFE9FB',
      cardHeading: 'Quality Assurance Service',
      cardDesc: 'Ensure solution reliability and performance with comprehensive testing services.',
      isArrow: false,
      cardTextColor: 'white',
      cardType: 2,
    },
    {

      id: 5,
      cardBGImageUrl: 'https://flowbite.com/docs/images/blog/image-4.jpg',
      cardBGColor: '#EFE9FB',
      cardHeading: 'Managed Services',
      cardDesc: 'Outsource IT operations to our experts, ensuring proactive monitoring and continuous improvement.',
      isArrow: false,
      cardTextColor: 'white',
      cardType: 1,
    },
    
  ]
  return (
    <>
      <EntIntro
        title="Improve Operation Performance and Efficiency with Oracle"
        desc="Leading Customer Centric and Cutting-Edge Solution for Enterprises"
        cta="Let's Connect"
        width="60%"
        video="https://gitl-usa.s3.us-west-1.amazonaws.com/banner1.mp4"
      />

      <OverviewSection Text={`Oracle Cloud's autonomous capabilities enable self-driving databases, automated security and streamlined operations. Businesses can reduce total cost of ownership and realize faster time-to-market.`} />

      <SectionWrapper BGColor="#a0efe5db">
        <div className="md:container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <SectionHeading
              headingContainerWidth="w-full"
              Heading="Oracle Fusion Cloud"
              Desc={'Transform businesses into information-driven enterprises through AI-powered solutions and continuous updates.'}
            >

            </SectionHeading>
          </div>
          <div className="hidden md:block">
            <img src="/ai-ml/Industry-served_Automotive.jpg" width="100%" style={{ maxHeight: '300px' }} />
          </div>
        </div>

      </SectionWrapper>

      <CommonCardTwoSlider
        ID={'AIOfferings'}
        sectionImageUrl={''}
        sectionBGColor={'#E1F2EF'}
        sectionHeading={'Our Oracle Offerings'}
        sectionDesc={'We offer comprehensive Oracle services that help organizations to achieve their goals. Our expert consultants provide everything from strategic guidance to optimized support.'}
        sectionTextColor={'#000'}
        sectionHeaderMaxWidth={'40%'}
        cardData={RPASolution}
      >
      </CommonCardTwoSlider>
      <SectionWidthSlider
        ID={"ultimateChoiceData"}
        sectionHeading={"Key Capabilities"}
        sectionDesc={
          "Streamline finance, HR, supply chain and customer experience with Oracle Fusion Cloud's integrated solutions. "
        }
        sectionTextColor="white"
        cardData={ultimateChoiceData}
        sectionBGColor="#7B014E"
        setHeadingLayout="horizontal"

      />

      <BenefitSliderSection
        ID={'BENEFIT'}
        sectionBGColor={'#1D162B'}
        sectionHeading={'Benefits of Oracle'}
        sectionDesc={`Oracle's cloud-agnostic approach ensures scalability, flexibility and seamless integration, future-proofing your enterprise with hybrid cloud solutions.`}
        sectionTextColor={'white'}
        cardData={BENEFITS_CARDS_DATA}
        sectionHeadingMaxWidth={'100%'}
      />

 
      <IndustrySpotlight cardData={INDUSTRY_SPOTLIGHT} sectionDesc={'We serve diverse industries, addressing unique challenges and delivering tailored Oracle solutions to drive transformation.'}/>
      <BlogSection
        ID={"blog"}
        blogImageUrl={blogImageUrl}
        Heading={"Leverage Database Potential with Oracle Cloud"}
        Desc={
          "Oracle Cloud has become an indispensable asset for modern enterprises seeking transformative capabilities. It provides a powerful platform that integrates database functionalities with cloud services, offering a host of benefits for businesses striving towards digital evolution and cloud transformation services. This article explores the essence of Oracle Cloud Integration and how it facilitates database optimization and cloud-driven innovations."
        }
        Color={"white"}
      ></BlogSection>
      <DistinctiveSection
        DistinctiveData={DISTINCTIVE_DATA}
        ID={"Distinctive"}
        Title={"The Distinctive Edge"}
        Desc={
          "We're a trusted Oracle partner, ensuring your business operations remain efficient and secure."
        }
      ></DistinctiveSection>
      {/* Start--Transform-Business-Form-Section============================================================== */}
      <TransformBusinessForm
        Title={"Transform your Business with us"}
        Desc={
          "Let us discuss how Oracle can help you with rapid growth."
        }
      ></TransformBusinessForm>
    </>
  );
};

export default page;
