"use client";
import React from "react";

import EntIntro from "@/components/EntIntro";
import SectionNav from "@/components/SectionNav";
import OverviewSection from "@/sections/overview/OverviewSection";
import HighlightPromo from "@/sections/highlight-promo/HighlightPromo";
import BlogSection from "@/sections/blog/BlogSection";
import DistinctiveSection from "@/sections/distinctive/DistinctiveSection";
import TransformBusinessForm from "@/sections/transformBusinessFrom/TransformBusinessFromSection";
import ServicesCardSlider from "@/sections/services-cards-slider/ServicesCardSlider";
import CommonCardThreeSlider from "@/sections/commonCardThreeSlider/CommonCardThreeSlider";
import BenefitSliderSection from "@/sections/benefitSlider/BenefitSliderSection";
import IndustrySpotlight from "@/sections/industry-spotlight/industrySpotlight";
import HubExpertise from "@/sections/hub-of-expertise/HubExpertise";
import CaseStudiesSection from "@/sections/case-studies/CaseStudiesSection";
import ReviewSliderSection from "@/sections/reviewSlider/ReviewSliderSection";
import ServiceSlider from '@/sections/serviceSlider/ServiceSlider';
import Slider from "@/components/Slider";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

import BlogSliderSection from '@/sections/blogSlider/BlogSliderSection';
import SectionWrapperNew from "@/components/SectionWrapperNew";
import LeftHeading from '@/components/LeftHeading';

const MicrosoftPractises = () => {
  const blogImageUrl = "/ai-ml/blog-bg.png";
  const highlightPromoBGURL =
    "/CloudStackServices/smiling-businessman-standing-with-arms-folded-isolated-white.png";
  const synergeticPartnerBGURL =
    "/msPractises/synergeticPartnership.webp";
  const awardsBGURL =
    "/transformation/microsoft-practices/backgrounds/bg--awards.png";

  const SERVICE_CARDS_DATA = [
    {
      title: "Azure",
      hoverTitle: "Azure",
      description:
        `<ul class="max-w-md space-y-1 text-white list-disc list-outside">
              <li>Virtualization</li>
              <li>Backup &Disaster Recovery</li>
              <li>Azure IoT</li>
              <li>Business Applications on Azure</li>
              <li>Networking</li>
              <li>Security & Governance</li>
              <li>Hybrid and multicloud Solutions</li>
              <li>Data and Analytics</li>
          </ul>`,
      content: "Additional content for Card 1",
      imageURL: "/msPractises/solutions/azure.webp",
    },
    {
      title: "Microsoft Dynamics",
      hoverTitle: "Microsoft Dynamics",
       description:
        `<ul class="max-w-md space-y-1 text-white list-disc list-outside">
              <li>D365 Finance & Operations</li>
              <li>D365 Business Central</li>
              <li>D365 Commerce</li>
              <li>D365 CRM</li>
              <li>Dynamics AX</li>
              <li>Dynamics Nav</li>
              
          </ul>`,
      content: "Additional content for Card 2",
      imageURL: "/msPractises/solutions/msDynamics.webp",
    },
    {
      title: "M365",
      hoverTitle: "M365",
      description:
        `<ul class="max-w-md space-y-1 text-white list-disc list-outside">
              <li>Office apps and services</li>
              <li>Outlook and Exchange</li>
              <li>Cloud storage</li>
              <li>Device Security and Access Management</li>
              
          </ul>`,
      content: "Additional content for Card 3",
      imageURL: "/msPractises/solutions/M365.webp",
    },
    {
      title: "Technologies",
      hoverTitle: "Technologies",
      description:
        `<ul class="max-w-md space-y-1 text-white list-disc list-outside">
              <li>Dot Net</li>
              <li>SQL</li>
              <li>Share Point </li>
              
          </ul>`,
      content: "Additional content for Card 4",
      imageURL: "/msPractises/solutions/technologies.webp",
    },
    {
      title: "Microsoft Fabric",
      hoverTitle: "Microsoft Fabric",
     description:
        `<ul class="max-w-md space-y-1 text-white list-disc list-outside">
              <li>Data Factory</li>
              <li>Synapse Data Engineering</li>
              <li>Synapse5 Data Science</li>
              <li>Synapse Data Warehousing</li>
              <li>Synapse Real-Time Analytics</li>
              <li>Data Activator</li>
              
          </ul>`,
      content: "Additional content for Card 5",
      imageURL: "/msPractises/solutions/microsoftFabric.webp",
    },
    {
      title: "Power Platforms",
      hoverTitle: "Power Platforms",
       description:
        `<ul class="max-w-md space-y-1 text-white list-disc list-outside">
              <li>Power BI</li>
              <li>Power Apps</li>
              <li>Power Automate</li>
        </ul>`,
      content: "Additional content for Card 5",
      imageURL: "/msPractises/solutions/powerPlatforms.webp",
    },
    // Add more cards here...
  ];

  const serviceSliderData = [
    { id: '1', icon:'/msPractises/serviceExpertise/businessConsulting.svg', text: 'Business Consulting' },
    { id: '2', icon:'/msPractises/serviceExpertise/implementationRollout.svg', text: 'Implementation & Rollout' },
    { id: '3', icon:'/msPractises/serviceExpertise/upgradeMigration.svg', text: 'Upgrade & Migration' },
    { id: '4', icon:'/msPractises/serviceExpertise/Development.svg', text: 'Development & Customization' },
    { id: '5', icon:'/msPractises/serviceExpertise/Training.svg', text: 'Training Workshop' },
    { id: '6', icon:'/msPractises/serviceExpertise/managedServices.svg', text: 'Managed Services' },
    { id: '7', icon:'/msPractises/serviceExpertise/legacyModernization.svg', text: 'Legacy Modernization' },
    { id: '8', icon:'/msPractises/serviceExpertise/bespokeApplications.svg', text: 'Bespoke Applications' },
    { id: '9', icon:'/msPractises/serviceExpertise/licenseSales.svg', text: 'License sales and services' },
    { id: '10', icon:'/msPractises/serviceExpertise/dataInsights.svg', text: 'Data Insights' },
  ]

  const SOLUTION_DATA = [
    {
      id: 1,
      cardBGColor: "#F5B1DC",
      cardHeading: "Dealer <br/> Management",
      cardDesc:
      `
        <ul class="min-w-[100%] space-y-1 text-black list-disc list-inside">
              <li>Data Factory</li>
              <li>Synapse Data Engineering</li>
              <li>Synapse5 Data Science</li>
              <li>Synapse Data Warehousing</li>
              <li>Synapse Real-Time Analytics</li>
              <li>Data Activator</li>
          </ul>`,
        isArrow: true,
      cardTextColor: "black",
      cardTopImageUrl: "/msPractises/customSolutions/dealerManagement.webp",
    },
    {
      id: 2,
      cardBGColor: "#FCE6F4",
      cardHeading: "Lease Process<br/>Managment",
      cardDesc:
        "Enhance efficiency with RF receiving, voice-enabled pick/pack operations, and dynamic put-away options.",
      isArrow: true,
      cardTextColor: "black",
      cardTopImageUrl: "/msPractises/customSolutions/processManagement.webp",
    },
    {
      id: 3,
      cardBGColor: "#CDBAF3",
      cardHeading: "Gate Pass<br/>Management",
      cardDesc:
        "Require Development from Scratch. Customisation of manufacturing reports",
      isArrow: true,
      cardTextColor: "black",
      cardTopImageUrl: "/msPractises/customSolutions/gatePassManagement.webp",
    },
    {
      id: 4,
      cardBGColor: "#E4E4E4",
      cardHeading: "Strengthen Potential",
      cardDesc:
        "Empower employees to focus on strategic tasks to deliver attentive experience to customers",
      isArrow: true,
      cardTextColor: "black",
      cardTopImageUrl: "/msPractises/customSolutions/strengthenPotential.webp",
    },
    {
      id: 5,
      cardBGImageUrl: "/rpa/ArtboardBg.png",
      cardBGColor: "#EFE9FB",
      cardHeading: "Enhance Flexibility",
      cardDesc:
        "Adapt to changing business needs without hiring and training new staff, saving time and expense",
      isArrow: true,
      cardTextColor: "black",
      cardTopImageUrl: "/msPractises/customSolutions/enhanceFlexibility.webp",
    },
    {
      id: 6,
      cardBGImageUrl: "/rpa/ArtboardBg.png",
      cardBGColor: "#EFE9FB",
      cardHeading: "Reduce AHT (Average Handling Time)",
      cardDesc:
        "Enhance customer service quality, minimize response time and improve operational efficiency",
      isArrow: false,
      cardTextColor: "black",
      cardTopImageUrl: "/msPractises/customSolutions/reduceAHT.webp",
    },
  ];

  const BENEFITS_CARDS_DATA = [
    {
      id: "1",
      icon: '/msPractises/benefits/platformScalability.svg',
      cardDesc: "Platform scalability in accordance with business demands and render it suitable for varying sizes",
    },
    {
      id: "2",
      icon: '/msPractises/benefits/liveDataAnalytics.svg',
      cardDesc: "Live data analytics and insights from reporting, enabling smarter decisions",
    },
    {
      id: "3",
      icon: '/msPractises/benefits/cloudOnPremises.svg',
      cardDesc: "Cloud or on-premises deployment options based on business requirements and preferences.",
    },
    {
      id: "4",
      icon: '/msPractises/benefits/manageNurture.svg',
      cardDesc: "Manage and nurture customer relationship from lead generation to post-sale support, improving customer satisfaction and retention.",
    },
    {
      id: "5",
      icon: '/msPractises/benefits/supplyChain.svg',
      cardDesc: "Supply chain management functionalities for optimizing inventory, procurement and logistics processes that help to increase efficiency and cost savings. ",
    },
    {
      id: "6",
      icon: '/msPractises/benefits/streamlineFinancial.svg',
      cardDesc: "Streamline financial processes like accounting, budgeting and forecasting, offering error-free insights for better financial management.",
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
        "",
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
        "",
      isArrow: false,
      cardTextColor: "white",
    },
    {
      id: 4,
      cardBGImageUrl:
        "/industry-spotlight/cards-backgrounds/card-bg--healthcare.png",

      cardBGColor: "#EFE9FB",
      cardHeading: "Project",
      cardDesc:
        "",
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
    
    // Add more cards as needed
  ];

  const HUBEXPERTISE_COUNTER_DATA = [
    {
      start: 100,
      end: 250,
      description: "Micorsoft Dynamics Projects Delivered",
    },
    {
      start: 100,
      end: 150,
      description: "Projects Migrated to Microsoft",
    },
    {
      start:1,
      end: 10000,
      description: "Management of Microsoft License",
    },

    {
      start: 10,
      end: 20,
      description: "years of experience in Microsoft Platforms",
    },

    /**
     * ! To set static title
     * TODO:    {
      staticTitle: "24*7",
      description: "Implementation Sites",
    }
    */

    // Add more counters as needed
  ];

  const CASE_STUDIES_DATA = [
    {
      imageURL:
        "/msPractises/CaseStudy.webp",
      videoURL: "",
      title: "Case Studies",
      heading: "Elevating Customer Experience with Cloud",
      description:
        "The world's top-notch businesses choose us for our excellent technical acumen and proven standards as we deliver high performing multidisciplinary solutions across the spectrum of industries.",
      link: "/case-study-1",
      color: "#FFFFFF",
    },
    {
      imageURL: "path/to/image1.jpg",
      title: "",
      heading: "D365 Business Central on Cloud",
      description:
        "Leading Middle East Conglomerate cuts down 79% of the time taken for purchase orders & approval with MS Dynamics Business Central SaaS Solution.",
      link: "https://www.godrejinfotech.com/assets/pdf/case-studies/LeadingConglomerate-MiddleEast-BusinessCentral-SaaS.pdf",
      color: "#000",
      bgCardColor: "#FFF",
    },

    {
      imageURL: "/path/to/image1.jpg",
      title: "",

      heading: "D365 F&O Implementation",
      description:
        "Seamless D365 F&O Implementation Revolutionizes Global Dairy Manufacturer's Subsidiary with Integrated Value Chain",
      link: "https://www.godrejinfotech.com/assets/pdf/case-studies/SubsidiaryLeadingGlobalDairyProductManufacturer_MD365FinanceOperation.pdf.",
      color: "#000",
      bgCardColor: "#FFF",
    },
    {
      imageURL:"",
      videoURL:
        "/msPractises/videos/caseStudyVideo.mp4",
      title: "",
      heading: "Migration  to D365 for Sales Online",
      description:
        "Leading Manufacturer of Optical Fibers in USA Slashes On-Premises Cost and leverages efficiency after Successfully Migrating to D365 for Sales (Online)",
      link: "https://www.godrejinfotech.com/assets/pdf/case-studies/LeadingManufacturerofOpticalFibersinUSASuccessfullyMigratesCRM2016toMD365forSales.pdf",
      color: "#000",
      bgCardColor: "#FFF",
    },
    // Add more case studies here...
  ];

  const DISTINCTIVE_DATA = [
    {
      _id: 1,
      desc: "20 years of experience with deep understanding of Microsoft Solutions",
      icon: "/msPractises/distinctiveData/20yrs.svg",
    },
    {
      _id: 2,
      desc: "Proactive support to clients, ensuring needs are met with attentive assistance ",
      icon: "/msPractises/distinctiveData/proactiveSupport.svg",
    },
    {
      _id: 3,
      desc: "Project quality is ensured through milestone-wise quality checks performed by a dedicated quality team ",
      icon: "/msPractises/distinctiveData/projectQuality.svg",
    },
    {
      _id: 4,
      desc: "Actively incorporate customer feedback obtained from unbiased third-party sources ",
      icon: "/msPractises/distinctiveData/activelyIncorporate.svg",
    },
    {
      _id: 5,
      desc: "Stability extends to both users and consultants involved in the project",
      icon: "/msPractises/distinctiveData/stabilityExtends.svg",
    },
    {
      _id: 6,
      desc: "Dedicated team for comprehensive project audits",
      icon: "/msPractises/distinctiveData/dedicatedTeam.svg",
    },
    {
      _id: 7,
      desc: "Extensive domain expertise of Microsoft dynamics solutions",
      icon: "/msPractises/distinctiveData/extensiveDomain.svg",
    },
    {
      _id: 8,
      desc: "Rigorous testing is conducted by standalone tester team to guarantee solution excellence",
      icon: "/msPractises/distinctiveData/rigorousTesting.svg",
    },
  ];

  const TESTIMONIAL_DATA = [
    {
      id: 1,
      cardHeading: "Streamlined Operations with LS Retail",
      cardDesc:
        "We've implemented LS Retail Solution, streamlining our store and backend operations. Our association with Godrej Infotech is rooted in shared values—simplicity, affordability and top-notch quality. I look forward to continuing association with GITL as we advance our vision of tech-driven business simplicity.",
      designation: 'IT Manager',
      companyName: `Saudi Arabia's Hypermarket Retail Chain`,
    },
    {
      id: 2,
      cardHeading: "Seamless D365 F&O Deployment",
      cardDesc:
        "We're delighted with the successful D365 implementation executed by talented GITL team. Their collaboration with our team was seamless, ensuring timely delivery. They have dedicated significant effort to grasp our distinctive needs, reinforcing our satisfaction.",
      designation: 'Director of Finance',
      companyName: 'Wildlife Conservation International NGO based in India',
    },
    {
      id: 3,
      cardHeading: "Transforming Operations with Business Central",
      cardDesc:
        "Congratulations to GITL team for successful go-live of Microsoft Business Central SAAS and KSA GITL Add-on HR & Payroll Solution. The key achievement was the seamless integration between Business Central and bio-time attendance machine. Our material requisition efficiency has improved by 66%, purchase order processing time is cut down by 79% and boosted invoicing productivity by 60%.",
      designation: 'Project Manager',
      companyName: 'Investment Holding Company in Riyadh & Dubai',
    },
  ];

  const blogSliderData = [
    {
      id: 1,
      cardBGImageUrl: '/msPractises/blogbg.webp',
      cardBGColor: 'red',
      cardHeading: "Microsoft Dynamics 365 Finance and Operations or Business Central?",
      cardDesc: 'Which business would not like to experience outstanding growth within a short span of time? But is that even feasible in this fast-paced world?  ',
      cardTextColor: 'white',
      readMoreUrl: "https://www.godrejinfotech.com/blogDetails.aspx?blog=20"
    },
    {
      id: 2,
      cardBGImageUrl: '/ai-ml/blog-bg.png',
      cardBGColor: 'red',
      cardHeading: "Upgrading Microsoft Dynamics AX to D365 Finance & Supply Chain",
      cardDesc: 'After successful client acquisitions and implementation projects across the globe, Microsoft Dynamics AX 2012 ERP is now entering its end-of-life phase. ',
      cardTextColor: 'white',
      readMoreUrl: "https://www.godrejinfotech.com/blogDetails.aspx?blog=12"
    },

  ];

  return (
    <>
      {/* Start--HeroBanner-Section========================================================= */}
      <EntIntro
        title="Integrate. Automate. Accelerate:"
        desc="MS Dynamics 365 CRM & ERP Solutions for growing enterprises"
        cta="Let's Connect"
        width="60%"
        video="/msPractises/videos/pageBanner.mp4"
      />

      {/* End--HeroBanner-Section=========================================================== */}

      {/* Start--Overview-Section============================================================== */}
      <OverviewSection
        Text={
          "Unlock business potential with our 20+ years of Microsoft expertise, delivering agile, resilient, and customer-centric solutions through cloud and business applications."
        }
      />
      {/* End--Overview-Section================================================================ */}

      {/* Start--Highlight-Customer-Centeric-Section============================================================== */}
      <HighlightPromo
        setImageURL={highlightPromoBGURL}
        setHeading="Seamless Implementation to Customer Centric Support"
        setDesc="Employing proven methodologies such as Waterfall, Agile and Rapid, we tailor our implementation strategy to meet the distinct requirements of each project. The goal is to deliver optimal system performance. In instances of system issues, our team meticulously assesses the impact on business processes and prioritizes swift resolutions. Further, our adaptable support services offer both dedicated and shared teams to effectively address individual customer needs."
        setColor="text-primary-900"
      

        sectionHeaderWidth={"w-full"}
      />
      {/* End--Highlight-Customer-Centeric-Section================================================================ */}

      {/* Start--Solution-Section============================================================== */}
      <ServicesCardSlider
        cardData={SERVICE_CARDS_DATA}
        heading={"Delivering Full Stack Microsoft Solutions"}
        desc={
          "We bring together the power of Microsoft technologies delivering cohesive ecosystems, enabling you to achieve more."
        }
        color={"text-primary-900"}
      >

      </ServicesCardSlider>

      {/* End--Solution-Section================================================================ */}

      {/*  */}
      <ServiceSlider
        sectionHeading="Our Service Expertise"
        sectionDesc="Our comprehensive Microsoft services include everything that business requires to effectively digitize business operations"
      >
        <Slider>
          {serviceSliderData?.map((item, index) => (
            <SwiperSlide key={index}>
             <div className="bg-transparent rounded-3xl">
              <Image className="rounded-3xl mx-auto md:mx-2" src="/infor/blackstar.svg" alt="" width={64} height={64}/>
                <div className="p-5">
                <h5 className="mb-4 text-heading-02 leading-heading-02 font-bold text-center md:text-left">{item.text}</h5>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Slider>
      </ServiceSlider>
      {/*  */}

      {/* Start--Microsoft-Solution-Section============================================================== */}
      <CommonCardThreeSlider
        ID={"AIOfferings"}
        sectionImageUrl={""}
        sectionBGColor={"bg-primary-900"}
        sectionHeading={"MS based Custom Solutions"}
        sectionDesc={
          "Building tailored software applications with Microsoft Azure, 365, Dynamics, and Power Platform."
        }
        sectionTextColor={"text-neutral-white"}
        sectionHeaderMaxWidth={"40%"}
        x
        cardData={SOLUTION_DATA}
      ></CommonCardThreeSlider>
      {/* End--Microsoft-Solution-Section================================================================ */}


      {/* Start--Synergetic Partnerships-Section============================================================== */}
      <HighlightPromo
        setHeading="Synergetic Partnership"
        setDesc="Our 20-year Microsoft alliance delivers industry-leading solutions, leveraging expertise and domain insight for customer success."
        setColor="text-primary-900"
        setImageBGURL={synergeticPartnerBGURL}
        setLogoImages="true"
        setPadding={true}
      />
      {/* End--Synergetic Partnerships-Section================================================================ */}

      {/* Start--Benefits-Section============================================================== */}
      <BenefitSliderSection
        ID={"BENEFIT"}
        sectionBGColor={"bg-primary-900"}
        sectionHeading={"Microsoft Dynamics Benefits"}
        sectionDesc={
          "Microsoft Dynamics optimizes operations, cuts costs, and enhances employee and customer experiences for sustainable growth."
        }
        sectionTextColor={"text-neutral-white"}
        cardData={BENEFITS_CARDS_DATA}
      />
      {/* End--Benefits-Section================================================================ */}

      {/* Start--Awards-Section============================================================== */}

      <SectionWrapperNew
        sectionHeading={''}
        sectionDesc={''}
        sectionTextColor={''}
        sectionHeadingLayout={'left'}
        style={{
          backgroundImage: `url(${awardsBGURL})`,
          backgroundSize: "cover",
          Zindex: 1,
          position: 'relative',
        }}
      >
       <div
  className="container mx-auto p-5"
  style={{
    background: 'linear-gradient(145deg, rgba(205, 186, 243, 0.25) 0%, rgba(205, 186, 243, 0.10) 75%)',
    boxShadow: '0px 40px 100px rgba(0, 0, 0, 0.10)',
    borderRadius: '24px',
    border: '2px #EFE9FB solid',
    backdropFilter: 'blur(30px)',
  }}
>
  <div className="grid grid-cols-1 gap-4">
    <div>
      <div className="text-heading-01 leading-heading-01 font-semibold text-primary-900 text-center md:text-left">
        Microsoft Expertise<br /> Recognition
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-5">
      {[1, 2, 3].map((item, index) => (
        <div key={index} className="max-w-sm bg-neutral-white border border-gray-200 rounded-3xl">
          <Image
            width="382"
            height="200"
            className="rounded-t-3xl"
            src="/Transformation/microsoft-practices/merLogo01.png"
            alt="logo"
          />
          <div className="p-5">
            <h5 className="mb-2 text-label-01 leading-label-01 font-semibold">2023</h5>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

      </SectionWrapperNew>


      {/* <HighlightPromo
        blurEffect="blurON"
        setHeading="We are Trained and Accredited in Cloud Services"
        setDesc="We undergo demanding assessment and authorisation to guarantee that our expertise and practices fulfil highest standards of excellence."
        setColor="#1D162B"
        setImageBGURL={awardsBGURL}
        setLogoImages=""
        setPadding={true}
        setMSLogoURL=""
        setHeadingContainerWidthFull={"w-full"}
      /> */}
      {/* End--Awards-Section================================================================ */}

      {/* Start--Industry-Spotlight-Section============================================================== */}
      <IndustrySpotlight cardData={INDUSTRY_SPOTLIGHT} sectionDesc={'Being preferred partner of leading industries, we help in shaping specific technology prerequisites and deliver brilliant value driven solutions tailored to your industry'} />
      {/* End--Industry-Spotlight-Section================================================================ */}

      {/* Start--Hub-Of-Expertise-Section============================================================== */}
      <HubExpertise
        setHeading="Microsoft Excellence with Godrej Infotech"
        setDesc="We are here to build an edge and bring technology brilliance with the finest in the industry. Driving the innovation path, we develop better results for businesses across the globe."
        setColor="text-neutral-white"
        counters={HUBEXPERTISE_COUNTER_DATA}
        columnNo={4} //Define how many columns you want to display
        BGColor="bg-secondary-900"
      />
      {/* End--Hub-Of-Expertise-Section================================================================ */}

      {/* Start--Case-Study-Section============================================================== */}
      <CaseStudiesSection
        casestudy={CASE_STUDIES_DATA}
        csLayout={"1"}
        bgColor={"#E4E4E4"}
      />
      {/* End--Case-Study-Section================================================================ */}

      {/* Start--Blogs-Section============================================================== */}
      <BlogSliderSection
        cardData={blogSliderData}
      ></BlogSliderSection>
      {/* <BlogSection
        ID={"blog"}
        blogImageUrl={blogImageUrl}
        Heading={"Unveilling Hyper automation  for supply chain efficiency"}
        Desc={
          "IIoT offers a multitude of benefits that enable businesses to gain competitive edge through innovation and succeed in digital era."
        }
        Color={"white"}
      ></BlogSection> */}
      {/* End--Blogs-Section================================================================ */}
      {/* Start--Distinctive-Section============================================================== */}
      <DistinctiveSection
        DistinctiveData={DISTINCTIVE_DATA}
        ID={"Distinctive"}
        Title={"The Distinctive Edge"}
        Desc={
          "We have established trustworthiness in the global marketplace with our high-level technical capabilities aligned with Microsoft's standards."
        }
      ></DistinctiveSection>
      {/* End--Distinctive-Section================================================================ */}
      {/* Start--Testimonial-Section============================================================== */}
      <ReviewSliderSection
        ID={"TESTIMONIALS"}
        Heading={"Delighted customers share their success experience"}
        Desc={""}
        Color="text-neutral-white"
        CardDataList={TESTIMONIAL_DATA}
        BGColor="bg-primary-900"
        SectionHeadingMaxWidth={"70%"}
      ></ReviewSliderSection>
      {/* End--Testimonial-Section================================================================ */}

      {/* Start--Transform-Business-Form-Section============================================================== */}
      <TransformBusinessForm
        Title={"Transform your business with us"}
        Desc={
          "Discover how we can help you achieve exceptional results!"
        }
      ></TransformBusinessForm>
      {/* End--Transform-Business-Form-Section================================================================ */}
    </>
  );
};

export default MicrosoftPractises;
