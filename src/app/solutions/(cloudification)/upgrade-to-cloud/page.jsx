"use client";

import React from "react";
import EntIntro from "@/components/EntIntro";
import SectionNav from "@/components/SectionNav";
import OverviewSection from "@/sections/overview/OverviewSection";
import HubExpertise from "@/sections/hub-of-expertise/HubExpertise";
import BlogSection from "@/sections/blog/BlogSection";
import DistinctiveSection from "@/sections/distinctive/DistinctiveSection";
import TransformBusinessForm from "@/sections/transformBusinessFrom/TransformBusinessFromSection";
import HighlightPromo from "@/sections/highlight-promo/HighlightPromo";
import CaseStudiesSection from "@/sections/case-studies/CaseStudiesSection";
import ChallengeSection from "@/sections/challenge/challengeSection";
import SectionWithSlider from "@/sections/sectionWithSlider/SectionWithSlider";
import ServicesCardSlider from "@/sections/services-cards-slider/ServicesCardSlider";
import BenefitSliderSection from '@/sections/benefitSlider/BenefitSliderSection';
import ReviewSliderSection from '@/sections/reviewSlider/ReviewSliderSection';

const UpgradeToCloud = () => {
  const imgBgURL = "/CloudStackServices/background/bg--cloud-services.png";
  const imgBGURL_Challenges =
    "/upgradeCloud/backgrounds/bg--onprem-challenges-left.png";
  const msLogoURL =
    "/CloudStackServices/logos/logo--microsoft-solution-partner.png";
  const msAzureLogoURL =
    "/CloudStackServices/logos/logo-microsoft-azure.png";
  const yourImageUrl = "/ai-ml/AI-bgimage.jpg";

  const challengeData=[
    {id:1,title:'Inadequate Scalability and Availability', icon:'/icons/doubleRoundArrow.png'},
    {id:2,title:'Unreliable Backup Storage', icon:'/icons/doubleRoundArrow.png'},
    {id:3,title:'Unreliable Backup Storage', icon:'/icons/doubleRoundArrow.png'},
    {id:4,title:'Inadequate Data Integrity and Automation Capabilities', icon:'/icons/doubleRoundArrow.png'},
    {id:5,title:'Limited IT Universality and Centralized Monitoring', icon:'/icons/doubleRoundArrow.png'},
    {id:6,title:'High Management Costs of IT Infrastructure', icon:'/icons/doubleRoundArrow.png'},

  ]

  const TESTIMONIAL_DATA = [
    {
      id: 1,
      cardHeading: "Cloud ETL for restaurant sales and COGS process",
      cardDesc: `“Appreciation to Godrej Infotech's team for successfully completing two critical projects - upgrading the old ERP system to Dynamics Business Central on SAAS and implementing a cloud-based ETL process on Azure for restaurant sales and COGS processes. We’re experiencing significant improvements in operational efficiency.” `,
      designation: 'ERP and Business Intelligence Head',
      companyName:'Fast food service chain',
    },
    {
      id: 2,
      cardHeading: "Cost Saving & Speedy Transactional Updates",
      cardDesc: `“Godrej Infotech has proficiently upgraded our software from NAV 2016 to Business Central on SaaS, including seamless data migration. This helped us save on subscription costs & facilitated quicker transactional updates.”`,
      designation:  `Manager IT, India's leading Energy Management System and Solutions provider`,
      },
  ];
  
  const UPGRADE_NOW_DATA = [
    {
      id: 1,
      BGImageUrl: "",
      BGColor: "#fff",
      CardBGColor:"transparent",
      CardTextColor:'white',
      CardTitle: "",
      CardIconUrl: "/upgradeCloud/icons/ico--target.svg",
      CardHeading: "Lift and Shift <br/>to Cloud",
      CardDesc:
        "Migrate email and infrastructure to Microsoft's cloud-based platform for seamless collaboration and security.",
      isArrow: "true",
      link: [],
    },

    {
      id: 2,
      BGImageUrl: "",
      BGColor: "#fff",
      CardBGColor:"transparent",
      CardTextColor:'white',
      CardTitle: "",
      CardIconUrl: "/upgradeCloud/icons/ico--target.svg",
      CardHeading: "ERP on <br/>Cloud",
      CardDesc:
        "Deliver enhanced business agility, operation automation and better decision-making capability with analytics.",
      isArrow: "true",
      link: [],
    },
    {
      id: 3,
      BGImageUrl: "",
      BGColor: "#fff",
      CardBGColor:"transparent",
      CardTextColor:'white',
      CardTitle: "",
      CardIconUrl: "/upgradeCloud/icons/ico--target.svg",
      CardHeading: "Application Migration <br/>to the Cloud",
      CardDesc:
        "Scaling resources on-demand, we specialize in effective migration of applications to the cloud.",
      isArrow: "true",
      link: [],
    },
    
  ];

  const BENEFITS_DATA = [
    {
      _id: 1,
      icon: "benefits-ai-ml/process-analyse",
      cardDesc:
        "A high degree of accuracy and consistency in business operations.",
    },
    {
      _id: 2,
      icon: "benefits-ai-ml/anticipate-future",
      cardDesc:
        "Informed decision-making by extracting valuable insights and identifying patterns, correlation, and trends. ",
    },
    {
      _id: 3,
      icon: "benefits-ai-ml/effortless-communicate",
      cardDesc:
        "Real-time problem-solving capabilities enable minimizing disruptions and ensuring uninterrupted business operations. ",
    },
    {
      _id: 4,
      icon: "benefits-ai-ml/optimise-supply-chain",
      cardDesc:
        "Optimize supply chain management, predict maintenance need, and elevate quality control, resulting in higher productivity ",
    },
  ];

  const CASE_STUDIES_DATA = [
    {
      imageURL: "/CloudStackServices/case-studies/bg--coffee-beans.png",
      videoURL: "/CloudStackServices/case-studies/bg--video-industry.mp4",
      title: "Case Studies",
      heading: "Elevating Customer Experience",
      description:
        "World's top-notch businesses choose us for our technical acumen as we deliver high performing solutions across different industries.",
      link: "/case-study-1",
      color: "#FFFFFF",
    },
    {
      imageURL: "",
      title: "",
      heading: "Non-government Association of Indian Industries",
      description:
        "99% uptime in saving man-days performance and 22% of capex saving after migrating to the Azure cloud environment",
      link: "/case-study-1",
      color: "#000",
      bgCardColor: "#FCE6F4",
    },

    {
      imageURL: "/path/to/image1.jpg",
      title: "",

      heading: "Coffee Brand Distributor in Egypt and Middle East",
      description:
        "Decreasing downtime and optimising system cost along with 100% data transparency through Single Cloud System",
      link: "/case-study-1",
      color: "#000",
      bgCardColor: "#EFE9FB",
    },
    {
      imageURL: "/CloudStackServices/case-studies/bg--electical-devices.png",
      title: "",
      heading: "Middle East-based Electrical Products Manufacturer",
      description:
        "60% cut down in development cost and business performance boost of 5 sister companies with D365 F&O Cloud implementation",
      link: "/case-study-1",
      color: "#000",
      bgCardColor: "#E1F2EF",
    },
    // Add more case studies here...
  ];
  const HUBEXPERTISE_COUNTER_DATA = [
    { start: 10, end: 50, description: "Cloud Deployments" },
    { start: 10, end: 15, description: "Cloud Certified Professionals" },
    // Add more counters as needed
  ];
  const DISTINCTIVE_DATA = [
    {
      _id: 1,
      desc: "Dedicated partner for Azure Migration Services and Managed Services across Europe, APAC, ME and USA ",
      icon: "",
    },
    {
      _id: 2,
      desc: "Business Continuity 99.95%, on - demand scalability and best uptime performance in Industry",
      icon: "",
    },
    {
      _id: 3,
      desc: "Seamless upgradation to cloud platforms such as Microsoft Azure and Amazon Web Services (AWS)",
      icon: "",
    },
    {
      _id: 4,
      desc: "Frictionless cloud upgradation delivery",
      icon: "",
    },
    {
      _id: 5,
      desc: "Cost-efficient and consumption-based model under single SLA",
      icon: "",
    },
  ];
  const reviewCardData = [
    {
      id: 1,
      cardHeading: "Cloud ETL for restaurant sales and COGS process",
      cardDesc: 'Appreciation to Godrej&apos;s Infotech team for successfully completing two critical projects - upgrading the old ERP system to Dynamics Business Central on SAAS and implementing a cloud-based ETL process on Azure for restaurant sales and COGS processes. We Are_You_Serious experiencing significant improvements in operational efficiency.'
    },
    {
      id: 2,
      cardHeading: "Cost Saving & Speedy Transactional Updates",
      cardDesc: 'Godrej Infotech has proficiently upgraded our software from NAV 2016 to Business Central on SaaS, including seamless data migration. This helped us save on subscription costs & facilitated quicker transactional updates.'
    },
    
  ];
  const SERVICE_CARDS_DATA = [
    {
      title: "Infrastructure & Data Evaluation",
      hoverTitle: "Infrastructure & Data Evaluation",
      description: "Assess migration readiness, identify risks and create solid plan. A clear path to a successful transition",
      content: "Additional content for Card 1",
      imageURL: '/techStack1.png'
    },
    {
      title: "Strategy Designing",
      hoverTitle: "Strategy Designing",
      description: "Align business needs & goals, set KPIs and build a tailored strategy for successful cloud adoption",
      content: "Additional content for Card 2",
      imageURL: '/techStack1.png'
    },
    {
      title: "Blueprint Development",
      hoverTitle: "Blueprint Development",
      description: "Define and prioritize tasks, align assets, establish milestones, iterations and timelines for upgradation journey.",
      content: "Additional content for Card 3",
      imageURL: '/techStack1.png'
    },
    {
      title: "Establishing Readiness",
      hoverTitle: "Establishing Readiness",
      description: "Expanding the landing zone blueprint and adequately preparing well-designed cloud environment.  ",
      content: "Additional content for Card 4",
      imageURL: '/techStack1.png'
    },
    {
      title: "Upgrade and Execute",
      hoverTitle: "Upgrade and Execute",
      description: "Assess readiness, refactor IT architecture, rehost, and implement changes to achieve desired outcomes.",
      content: "Additional content for Card 5",
      imageURL: '/techStack1.png'
    },
    {
      title: "Management and Control",
      hoverTitle: "Management and Control",
      description: "Optimize costs, mitigate risks, define policies, standardize processes & ensure governance, resources & security. ",
      content: "Additional content for Card 5",
      imageURL: '/techStack1.png'
    },
    // Add more cards here...
  ];
    const CHALLENGES_LIST_DATA = [
        { id: 1, title: "Inadequate Scalability and Availability", icon: '/upgradeCloud/icons/ico--target.svg' },
        { id: 2, title: "Unreliable Backup Storage", icon:'/upgradeCloud/icons/ico--target.svg' },
        { id: 3, title: "Weak Disaster Recovery and Redundancy", icon:'/upgradeCloud/icons/ico--target.svg' },
        { id: 4, title: "Inadequate Data Integrity", icon:'/upgradeCloud/icons/ico--target.svg' },
        { id: 5, title: "Lack of Automation Capabilities", icon:'/upgradeCloud/icons/ico--target.svg' },
        { id: 6, title: "Subpar IT Performance", icon:'/upgradeCloud/icons/ico--target.svg' },
        { id: 7, title: "Limited Centralized Monitoring", icon:'/upgradeCloud/icons/ico--target.svg' },
        { id: 8, title: "High IT Infrastructure Management Cost", icon:'/upgradeCloud/icons/ico--target.svg' },
    ];
      const benifitsCardsData = [
    { id: '1', cardDesc: 'Minimize operational expenses of IT portfolio' },
    { id: '2', cardDesc: 'Enable user concurrency to support large-scale workloads' },
    { id: '3', cardDesc: 'Enhanced collaboration through cross-device accessibility to information' },
    { id: '4', cardDesc: 'Advanced data management solutions, modernized process and cloud services' },
    { id: '5', cardDesc: 'Aptitude to respond to shifting business requirements' },
    { id: '6', cardDesc: 'Integrate Big Data Analytics into business processes for data-driven decision-making' },
    { id: '7', cardDesc: 'Securely stores confidential business information' },
    { id: '8', cardDesc: 'Enhance system performance and user experience by scaling up the system' },
    { id: '9', cardDesc: 'Accelerate transformation, integrate open innovation and smart workflows' },
  ]
  const blogImageUrl = "/ai-ml/blog-bg.png";
  return (
    <>
      {/* Section--HeroBanner======================================================================= */}
      <EntIntro
        title="Cloud Upgrade Made Easy"
        desc="Enabling businesses to scale with ease, enhance productivity and protect data with security measures. "
        cta="Schedule a call with our Cloud Expert"
        width="60%"
        video="https://gitl-usa.s3.us-west-1.amazonaws.com/banner1.mp4"
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
      {/* Section--Overview=======================================================================  */}
      <OverviewSection
        Text={
          "Minimize costs and maximize agility and security with our cloud upgrade offerings. We help enterprises to build resilience through tailored, all-inclusive cloud transformation that drives business success."
        }
      />
      {/* End-Section--Overview */}
      {/* Start--Section--Challenges======================================================================== */}
      <ChallengeSection
        setHeading="On-premises Infrastructure Challenges"
        setColor="#FFFFFF"
        setImageBGURL={imgBGURL_Challenges}
        setChallengesList={CHALLENGES_LIST_DATA}
      />
      {/* End--Section--Challenges======================================================================== */}

      {/* Start--Section--UpgradeNow======================================================================== */}
      <SectionWithSlider
        ID={"UPGRADE_NOW_DATA"}
        sectionHeading={"Upgrade Now"}
        sectionDesc={
          "We revamp your core business application with cloud-native development so that you can win a competitive threshold in the marketplace. "
        }
        sectionTextColor="#ffffff"
        cardData={UPGRADE_NOW_DATA}
        sectionBGColor="#2B1624"
        setHeadingLayout="horizontal"
       
      />
      {/* End--Section--UpgradeNow======================================================================== */}
            {/* Start--Service--Section======================================================== */}
            <ServicesCardSlider cardData={SERVICE_CARDS_DATA} heading={"Cloud Upgrade<br/>Process Map"} desc={"A step-by-step guide featuring actionable workflows to ensure 99.9% uptime and no data loss."} color={"#1D162B"}  />

{/* End--Service--Section======================================================== */}

      {/* Advantages Vertical Slider */}
      <BenefitSliderSection
        ID={'AIOfferings'}
        sectionBGColor={'#1D162B'}
        sectionHeading={'Upgrade to Cloud Benefits'}
        sectionDesc={'Experience business performance surge with cloud'}
        sectionTextColor={'white'}
        cardData={benifitsCardsData}
        SectionHeadingMaxWidth={'100%'}
        sectionHeaderWidth={'w-full'}
      ></BenefitSliderSection>

      {/* Section--Trained in Cloud Services= */}
      <HighlightPromo
        blurEffect="blurON"
        setHeading="We are Trained and Accredited in Cloud Services"
        setDesc="We ensure that our expertise and practices fulfil highest standards of excellence."
        setColor="#1D162B"
        setImageBGURL={imgBgURL}
        setLogoImages=""
        setPadding={true}
        setMSLogoURL={msLogoURL}
        setMsAzureLogoURL={msAzureLogoURL}
        lay
        sectionHeaderWidth={'w-full'}
      />
      {/* End-Section--Trained in Cloud-Services */}
      {/* Section--Hub-of-Expertise=======================================================================  */}
      <HubExpertise
        setHeading="Hub of Expertise"
        setDesc="We are here to build an edge and bring technology brilliance with the finest in industry. Driving the innovation path, we develop better results for business across the globe."
        setColor="#ffffff"
        counters={HUBEXPERTISE_COUNTER_DATA}
        columnNo={2}
      />
      {/* End-Section--Hub-of-Expertise */}
      {/* Section--Case-Studies======================================================================= */}
      <CaseStudiesSection casestudy={CASE_STUDIES_DATA} csLayout={"1"} />
      {/* End-Section--Case-Studies */}
      {/* Section--Blog======================================================================= */}
      <BlogSection
        ID={"blog"}
        blogImageUrl={blogImageUrl}
        Heading={"Migrate your IT Infrastructure to the Cloud"}
        Desc={
          "In the current situation of cashflow challenges and low budgets to invest in IT CAPEX, companies can move to a better IT Infrastructure, which is OPEX based, scalable, secure, cost effective and above all accessible anytime from anywhere on any device. Whether you want to entirely migrate to the cloud or want to have a hybrid cloud infrastructure, Microsoft Azure is the best cloud computing service you can decide to choose. Here are the top reasons for rapid Microsoft Azure migration: "
        }
        Color={"white"}
      ></BlogSection>
      {/* End-Section--Blog */}
      {/* Section--Distinctive Edge======================================================================= */}
      <DistinctiveSection
        DistinctiveData={DISTINCTIVE_DATA}
        ID={"Distinctive"}
        Title={"The Distinctive Edge"}
        Desc={
          "With our assessment process, delivery framework, strategic resources and data migration practice we ensure efficient performance."
        }
      ></DistinctiveSection>
      {/* End-Section--Distinctive Edge */}
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

export default UpgradeToCloud;