"use client";

import "react-creative-cursor/dist/styles.css";
import EntIntro from "@/components/EntIntro";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import SectionNav from "@/components/SectionNav";
import CaseStudiesSection from "@/sections/case-studies/CaseStudiesSection";
import ServicesCardSlider from "@/sections/services-cards-slider/ServicesCardSlider";

/**
 * * New Imports---Sandeep Rana
 * * 2022-08-09
 */
import OverviewSection from "@/sections/overview/OverviewSection";
import HighlightPromo from "@/sections/highlight-promo/HighlightPromo";
import BlogSection from "@/sections/blog/BlogSection";
import DistinctiveSection from "@/sections/distinctive/DistinctiveSection";
import TransformBusinessForm from "@/sections/transformBusinessFrom/TransformBusinessFromSection";
import ReviewSliderSection from '@/sections/reviewSlider/ReviewSliderSection';
import SectionSliderAdditionalData from "@/sections/sectionSliderAdditionalData/SectionSliderAdditionalData";
import SectionWidthSlider from "@/sections/sectionWithSlider/SectionWithSlider";

const CloudStack = () => {
  const imgURL = "/CloudStackServices/smiling-businessman-standing-with-arms-folded-isolated-white.png";
  const imgBgURL = "/CloudStackServices/background/bg--strategic-partnership.png";

  const advanceSolutionData = [
    {
      id: 1,
      cardBGImageUrl: "",
      cardBGColor: "#EFE9FB",
      cardTextColor: 'black',
      cardTitle: "Core Infrastructure & Virtualization",
      cardIconUrl: "",
      cardHeading: "Core Infrastructure & Virtualization",
      isArrow: "",
      additionalData: [
        { id: 1, text: 'Infrastructure as a Service (IAAS)' },
        { id: 2, text: 'Virtual Desktop Infrastructure (VDI)' },
        { id: 3, text: 'Disaster Recovery as a Service (DrAAS)' },
        { id: 4, text: 'Database as a Service (DBaaS)' },
        { id: 5, text: 'BaaS: Backup as a Service (BaaS)' },
      ]
    },
    {
      id: 2,
      cardBGImageUrl: "",
      cardBGColor: "#EFE9FB",
      cardTextColor: 'black',
      cardTitle: "Advanced Cloud Infrastructure",
      cardIconUrl: "",
      cardHeading: "Advanced Cloud Infrastructure",
      isArrow: "",
      additionalData: [
        { id: 1, text: 'Azure IoT', textColor:'#000' },
        { id: 2, text: 'DevOps and Bespoke Applications' },
        { id: 3, text: 'Hybrid and Multicloud Managed Services' },
       
      ]
    },

    {
      id: 3,
      cardBGImageUrl: "",
      cardBGColor: "#EFE9FB",
      cardTextColor: 'black',
      cardTitle: "M365",
      cardIconUrl: "",
      cardHeading: "M365",
      isArrow: "",
      additionalData: [
        { id: 1, text: 'Office apps and services', textColor:'#000' },
        { id: 2, text: 'Collaboration Tools' },
        { id: 3, text: 'Cloud storage' },
        { id: 4, text: 'Device Security and Access Management ' },
       { id: 5, text: 'Lowcode Application Development' },
      ]
    },
    {
      id: 4,
      cardBGImageUrl: "",
      cardBGColor: "#EFE9FB",
      cardTextColor: 'black',
      cardTitle: "Business Applications",
      cardIconUrl: "",
      cardHeading: "Business Applications", 
      isArrow: "",
      additionalData: [
        { id: 1, text: 'Microsoft Dynamics 365', textColor:'#000' },
        { id: 2, text: 'Infor' },
        { id: 3, text: 'Oracle' },
        { id: 4, text: 'LS Retail' },
       
      ]
    },
  ]
  const blogImageUrl = "/CloudStackServices/blog.webp";


  const ULTIMATE_CHOICE_DATA = [
    {
      id: 1,
      BGImageUrl: "",
      BGColor: "#fff",
      CardBGColor: "transparent",
      CardTextColor: 'white',
      CardTitle: "",
      CardIconUrl: "/CloudStackServices/icons/scalability.svg",
      CardHeading: "",
      CardDesc:
        "Scalability according to evolving business needs",
      isArrow: "",
      link: [],
    },

    {
      id: 2,
      BGImageUrl: "",
      BGColor: "#fff",
      CardBGColor: "transparent",
      CardTextColor: 'white',
      CardTitle: "",
      CardIconUrl: "/CloudStackServices/icons/fasterDevelopment.svg",
      CardHeading: "",
      CardDesc:
        "Faster development cycles with pay-as-you-go model offering cost effectiveness and business agility",
      isArrow: "",
      link: [],
    },
    {
      id: 3,
      BGImageUrl: "",
      BGColor: "#fff",
      CardBGColor: "transparent",
      CardTextColor: 'white',
      CardTitle: "",
      CardIconUrl: "/CloudStackServices/icons/driveBusiness.svg",
      CardHeading: "",
      CardDesc:
        "Drive business agility and improved ROI with automation",
      isArrow: "",
      link: [],
    },
    {
      id: 4,
      BGImageUrl: "",
      BGColor: "#fff",
      CardBGColor: "transparent",
      CardTextColor: 'white',
      CardTitle: "",
      CardIconUrl: "/CloudStackServices/icons/highestLevels.svg",
      CardHeading: "",
      CardDesc:
        "Highest levels of security and privacy, ensuring data is safeguarded",
      isArrow: "",
      link: [],
    },
    {
      id: 5,
      BGImageUrl: "",
      BGColor: "#fff",
      CardBGColor: "transparent",
      CardTextColor: 'white',
      CardTitle: "",
      CardIconUrl: "/CloudStackServices/icons/streamlineDelivery.svg",
      CardHeading: "",
      CardDesc:
        "Streamline delivery pipeline with all the essential tools covered under one umbrella",
      isArrow: "",
      link: [],
    },
    {
      id: 6,
      BGImageUrl: "",
      BGColor: "#fff",
      CardBGColor: "transparent",
      CardTextColor: 'white',
      CardTitle: "",
      CardIconUrl: "/CloudStackServices/icons/effortlessIntegration.svg",
      CardHeading: "",
      CardDesc:
        "Effortless integration with data solutions and Big Data",
      isArrow: "",
      link: [],
    },
    {
      id: 7,
      BGImageUrl: "",
      BGColor: "#fff",
      CardBGColor: "transparent",
      CardTextColor: 'white',
      CardTitle: "",
      CardIconUrl: "/CloudStackServices/icons/reliableDisaster.svg",
      CardHeading: "",
      CardDesc:
        "Built-in reliable disaster recovery capabilities and integrated development framework",
      isArrow: "",
      link: [],
    },
  ];

  const reviewCardData = [
    {
      id: 1,
      cardHeading: "Cloud-Enabled Business Transformation",
      cardDesc: 'Appreciation to Godrej Infotech team for successfully completing two critical projects – upgrade to Dynamics Business Central and ETL implementation on Azure for restaurant sales and COGS processes. We’re experiencing significant improvements in operational efficiency. We look forward to continuing this partnership with Godrej Infotech for future technological needs. ',
    designation: 'IT Head',
    companyName:'Middle East based Fast Food Chain',
    },
    {
      id: 2,
      cardHeading: "Cloud Enabled Infor Solution Success",
      cardDesc: 'Thank you to Godrej Infotech for the excellent work for cloud-enabling our Infor environment. The services provided were of high quality and we would not hesitate to recommend Godrej Infotech as a professional cloud services provider.',
    designation: 'IT Manager',
    companyName:`India's Premier hi-tech Engineering Solutions Provider`,
    },
    {
      id: 3,
      cardHeading: "Cloud Migration Project Delivered On Time",
      cardDesc: 'Thanks to Godrej Infotech team for their support. It was tough for us to complete the project within the given timeframe without your handholding and support of Godrej Infotech’s team. It was nice working with you on this migration project.',
    designation: 'Head EDP',
    companyName:`India's Premier Hi-Tech Engineering Solutions Provider`,
    },
  ];

  const CASE_STUDIES_DATA = [
    {
      imageURL: " ",
      videoURL: "",
      title: "Case Studies",
      heading: 'Delivering Results that Matters',
      description: "",
      link: "",
      color: '#FFFFFF',
      bgCardColor: '#2B1624'
    },
    {
      imageURL: "",
      title: "",
      heading: 'KSA - Electrical Components Distributor',
      description: "Greater scalability and cost-effectiveness with integration of Dynamics 365 F&O and Dynamics CRM on Cloud",
      link: "/case-study-1",
      color: '#000',
      bgCardColor: '#E4E4E4'
    },

    {
      imageURL: "/CloudStackServices/WildLife.Webp",
      title: "",

      heading: "Indian Wildlife Conservation Organization",
      description: "Built-in redundancy & automatic backups with Successful implementation of D365 Finance & Operations on Cloud",
      link: "/case-study-1",
      color: '#000',
      bgCardColor: '#FCE6F4'
    },
    {
      imageURL: "/CloudStackServices/WildLife.Webp",
      title: "",
      heading: "Philippines Fresh Produce Distributor",
      description: "Flexible system accessibility and Faster deployment time with D365 F&O Cloud Solution",
      link: "/case-study-1",
      color: '#000',
      bgCardColor: '#e1f2ef'
    },
    // Add more case studies here...
  ];

  const DISTINCTIVE_DATA = [
    {
      _id: 1,
      desc: "Comprehensive access to our cloud services across worldwide",
      icon: "/CloudStackServices/distinctiveData/comprehensiveAccess.svg",
    },
    {
      _id: 2,
      desc: "Tailored solutions for sensitive performing on-premises applications and conventional enterprise applications",
      icon: "/CloudStackServices/distinctiveData/tailoredSolutions.svg",
    },
    {
      _id: 3,
      desc: "Holistic approach includes resource gathering for cloud availability and scale-up architectures to manage multi-cloud risks ",
      icon: "/CloudStackServices/distinctiveData/holisticApproach.svg",
    },
    {
      _id: 4,
      desc: "End-to-end strategic cloud services for complete cloud journey",
      icon: "/CloudStackServices/distinctiveData/endToEnd.svg",
    },
    {
      _id: 5,
      desc: "Cloud expertise that offers business growth and localized requirements support ",
      icon: "/CloudStackServices/distinctiveData/cloudExpertise.svg",
    },
  ];

  const SERVICE_CARDS_DATA = [
    {
      title: "Cloud Consulting",
      hoverTitle: "Cloud Consulting",
      description: "Strategic guidance and actionable plan for adoption and management of cloud while optimizing cloud investment.",
      content: "Additional content for Card 1",
      imageURL: '/CloudStackServices/CloudDrivenServices/CloudConsulting.webp'
    },
    {
      title: "Architect and Manage Cloud",
      hoverTitle: "Architect and Manage Cloud",
      description: "Design, develop and manage cloud infrastructure and platforms, providing 360-degree visibility into business application ecosystem.",
      content: "Additional content for Card 2",
      imageURL: '/CloudStackServices/CloudDrivenServices/ArchitechtManage.webp'
    },
    {
      title: "Cloud Security",
      hoverTitle: "Cloud Security",
      description: "Identify security gaps, design risk-based cloud architecture & automate deployment of security guardrails for cloud-native services.",
      content: "Additional content for Card 3",
      imageURL: '/CloudStackServices/CloudDrivenServices/CloudSecurity.webp'
    },
    {
      title: "Public Cloud",
      hoverTitle: "Public Cloud",
      description: "Intact cloud environment development and industry-leading practices that support cloud implementation and management.",
      content: "Additional content for Card 4",
      imageURL: '/CloudStackServices/CloudDrivenServices/publicCloud.webp'
    },
    {
      title: "App transformation & Cost Optimization",
      hoverTitle: "App transformation & Cost Optimization",
      description: "Transform & optimize apps with cloud-native architecture, containerization & cost optimization strategies",
      content: "Additional content for Card 5",
      imageURL: '/CloudStackServices/CloudDrivenServices/appTransformation.webp'
    },
    // Add more cards here...
  ];


  return (
    <>
      {/* Section--HeroBanner */}
      <EntIntro
        title="Reimagine Your Business Capabilities with Cloud"
        desc="Make confident business decisions with our tailored cloud offerings, developed to drive scalability and cost savings. "
        cta="Let's Connect"
        width="60%"
        video="/cloudStackServices/video/pageBanner.mov"
      />
      {/* Section Nav */}

      <SectionNav
        // Solutions
        // Benefits
        // Why Us

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

      {/* Section--Overview */}
      <OverviewSection
        Text={
          "Our focus is on recalibrating businesses, delivering enhanced value, and refining user experiences. Trust us to navigate the complexities of cloud technology, deliver greater business value and refine user experience."
        }
      />
      {/* Section--Take Confident */}
      <HighlightPromo
        setImageURL={imgURL}
        setHeading="Take Confident Business Decisions with Industry Tailored Cloud Technology"
        setDesc="This approach helps us to adeptly manage software development projects involving complexity levels."
        setColor="#1D162B"
        setPadding={false}
        sectionHeaderWidth={'w-full'}
      />

      {/* Advance Solution for Business Future */}
      <SectionSliderAdditionalData
        ID={'additionalData'}
        sectionImageUrl={''}
        sectionHeading={'Cloud Solutions Portfolio'}
        sectionDesc={''}
        sectionHeaderMaxWidth={'50%'}
        slidesPerView="3"
        autoplay="false"
        cardData={advanceSolutionData}
        sectionTextColor="#000"
        sectionBGColor="#fff"
      >
      </SectionSliderAdditionalData>

      {/* end Advance Solution for Business Future */}

      {/* Start--Section--UltimateChoice======================================================================== */}
      <SectionWidthSlider
        ID={"ULTIMATE_CHOICE_DATA"}
        sectionHeading={"Why Cloud is your Ultimate Choice?"}
        sectionDesc={
          "A fault-tolerant architecture and global data centers that helps to expand infrastructure and leverage advanced analytics."
        }
        sectionTextColor="#ffffff"
        cardData={ULTIMATE_CHOICE_DATA}
        sectionBGColor="#2B1624"
        setHeadingLayout="horizontal"

      />
      {/* End--Section--UltimateChoice======================================================================== */}
           {/* Start--Service--Section======================================================== */}
           <ServicesCardSlider cardData={SERVICE_CARDS_DATA} heading={"Cloud Driven Services"} desc={"Developing and scaling pilot into enterprise-scale implementation including all cloud-based business requirements"} color={"#1D162B"}  />

{/* End--Service--Section======================================================== */}


      {/* Section--Synergetic-Partnership======================================================= */}
      <HighlightPromo
        setHeading="Synergetic Partnership"
        setDesc="Our expansive worldwide network of market innovators enables us to embrace breakthrough technologies and confront business roadblocks effectively."
        setColor="#1D162B"
        setImageBGURL={imgBgURL}
        setLogoImages="true"
        setPadding={false}
      />
      {/* End-Section--Synergetic-Partnership */}
      {/* Section--Case-Studies======================================================================= */}
      <CaseStudiesSection casestudy={CASE_STUDIES_DATA} csLayout={"1"} bgColor='#FFFFFF' />
      {/* End-Section--Case-Studies */}

      {/* Section--Blog */}
      <BlogSection
        ID={"blog"}
        blogImageUrl={blogImageUrl}
        Heading={"Optimizing Cloud Infrastructure"}
        Desc={
          "As cloud computing continues to transform the way organizations operate, the importance of effective cloud monitoring and maintenance cannot be overstated. In this article, we will delve into the critical aspects of cloud monitoring and maintenance, providing actionable tips and best practices to ensure optimal performance, reliability, and security in cloud environments."
        }
        Color={"white"}
        readMoreUrl="#"
      ></BlogSection>

      {/* Distinctive section*/}
      <DistinctiveSection
        DistinctiveData={DISTINCTIVE_DATA}
        ID={"Distinctive"}
        Title={"The Distinctive Edge"}
        Desc={
          ""
        }
      ></DistinctiveSection>

      <ReviewSliderSection
        ID={"ULTIMATE_CHOICE_DATA"}
        Heading={"Delighted customers share their success experience"}
        Desc={'Discover how we have helped our customers to realize tangible outcomes aligned with their business goals.'}
        Color="#ffffff"
        CardDataList={reviewCardData}
        BGColor="#1D162B"
        SectionHeadingMaxWidth={'70%'}
      ></ReviewSliderSection>
      {/* transform business with us section */}
      
      <TransformBusinessForm
        Title={"Free 30-Minute Strategy Session with our Cloud Expert?"}
        Desc={
          "Let's discuss how cloud can help you with rapid growth."
        }
      ></TransformBusinessForm>
    </>
  );
};
export default CloudStack;
