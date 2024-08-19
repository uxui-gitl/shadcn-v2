"use client";
import EntIntro from "@/components/EntIntro";
import StrategySub from "@/components/StrategySub";
import shield from "../../../../../../public/upgradeCloud/sheild.png";
import puzzle from "../../../../../../public/upgradeCloud/puzzle.png";
import Testimonial from "@/sections/testimonial/Testimonial";
import Expertise from "@/components/Expertise";
import WhySection from "@/components/WhySection";
import icon from "../../../../../../public/icon.png";
import microsoft from "../../../../../../public/upgradeCloud/microsoft.png";
import azure from "../../../../../../public/upgradeCloud/azure.png";
import checkout from "../../../../../../public/upgradeCloud/checkout.png";
import curiousPerson from "../../../../../../public/upgradeCloud/curiousPerson.png";
import cloud from "../../../../../../public/upgradeCloud/cloud.png";
import cloudArrows from "../../../../../../public/upgradeCloud/cloudArrows.png";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import PowerBI from "../../../../../../public/Power-BI-Logo.png";
import PowerApp from "../../../../../../public/Power-App.png";
import Birst from "../../../../../../public/Birst-logo.png";
import dummy from "../../../../../../public/dummy.png";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Icon from "@mdi/react";
import { mdiBullseyeArrow } from "@mdi/js";
import Link from "next/link";
import { mdiArrowRight } from "@mdi/js";
import CaseStudy from "@/sections/caseStudy/CaseStudy";
import SectionNav from "@/components/SectionNav";
import BlogSlider from "@/components/BlogSlider";
import SME from "@/components/SME";
// import WhyInfotech from "@/components/WhyInfotech";
import InfotechWeeklyAlt from "@/sections/infotechWeeklyAlt/InfotechWeeklyAlt";

import uiPath from "../../../../../../public/logos/rpa/uiPath.svg";
import automationAnywhere from "../../../../../../public/logos/rpa/automation-anywhere.svg";
import powerAutomate from "../../../../../../public/logos/rpa/microsoft-power-automate-logo.jpg";

import { mdiArrowTopRight } from "@mdi/js";
import { mdiPlayCircle } from "@mdi/js";

import styles from "./page.module.css";
import Awards from "@/sections/awards/Awards";
import Infographics from "@/components/Infographics";
import clsx from "clsx";
import Subscription from "@/components/Subscription";
import Abstract from "@/components/Abstract";
import { Benefits, OfferingsSlider, NewTestimonial } from "@/components";
const smartTools = [
  {
    _id: 1,
    type: "box",
    title: "Infor CRM",
    theme: "light",
    bg: "transparent",
    desc: "With Power BI integration - a highly scalable analytics platform that accommodates both individual users",
    icon: "Power-BI-Logo.png",
    cta: "Know More",
  },
  {
    _id: 2,
    type: "box",
    title: "Microsoft CRM",
    theme: "dark",
    bg: "#4C6FFF",
    desc: "We help you to efficiently develop low-code applications in a fraction of the time with Power Apps",
    icon: "Power-App.png",
    cta: "Know More",
  },
  {
    _id: 3,
    type: "box",
    title: "Salesforce ",
    theme: "dark",
    bg: "#07001F",
    desc: "The aim is to facilitate faster decision-making with the tools and flexibility to implement new insight",
    icon: "Birst-logo.png",
    cta: "Know More",
  },
  {
    _id: 4,
    type: "box",
    title: "Magento",
    theme: "dark",
    bg: "transparent",
    desc: "Extracting insights from tapped and  untapped data assets, we help you understand customer behaviour",
    icon: "dummy.png",
    cta: "Know More",
  },
  {
    _id: 5,
    type: "box",
    title: "LS Retail",
    theme: "light",
    bg: "transparent",
    desc: "We specialize in assisting customers on their digital transformation journey by designing and deploying custom data lake",
    icon: "dummy.png",
    cta: "Know More",
  },
];
const ChoiceSlider = [
  {
    _id: 1,
    imgUrl: "Industry-Spotlight-Manufacturing",
    title: "Manufacturing",
    desc: "",
    url: "/",
  },
  {
    _id: 2,
    imgUrl: "Industry-Spotlight-Retail",
    title: "Retail",
    desc: "",
    url: "/",
  },
  {
    _id: 3,
    title: "Trading and Distribution",
    desc: "",
    imgUrl: "Industry-Spotlight-rading-and-Distribution",
    url: "/",
  },
  {
    _id: 4,
    title: "Healthcare ",
    desc: "",
    imgUrl: "Industry-served-Healthcare",
    url: "/",
  },
  {
    _id: 5,
    title: "Project ",
    desc: "",
    imgUrl: "Industry-Spotlight-Projects",
    url: "/",
  },
  {
    _id: 6,
    title: "Professional services",
    desc: "",
    imgUrl: "ProfessionalServices",
    url: "/",
  },
];
const UseCases = [
  {
    _id: 1,
    title: "Consulting ",
    cta: "Know More",
    link: "/",
    icon: "Benefits-upgradeCloud/EnhanceSystemPerformance",
  },
  {
    _id: 2,
    title: "Employee Access Creation ",
    cta: "Know More",
    link: "/",
    icon: "Benefits-upgradeCloud/EnhanceSystemPerformance",
  },
  {
    _id: 3,
    title: "Account Payable and Receivable Process",
    cta: "Know More",
    link: "/",
    icon: "Benefits-upgradeCloud/EnhanceSystemPerformance",
  },
  {
    _id: 4,
    title: "Vendor Onboarding Process",
    cta: "Know More",
    link: "/",
    icon: "Benefits-upgradeCloud/EnhanceSystemPerformance",
  },
  {
    _id: 5,
    title: "Customer Onboarding Process",
    cta: "Know More",
    link: "/",
    icon: "Benefits-upgradeCloud/EnhanceSystemPerformance",
  },
];
const InforGrid = [
  {
    _id: 1,
    title: "Infor LN (On Prem & On Cloud - MT)",
    icon: "dummy",
  },
  {
    _id: 2,
    title: "Factory Track",
    icon: "dummy",
  },
  {
    _id: 3,
    title: "Infor OS",
    icon: "dummy",
  },
  {
    _id: 4,
    title: "Infor CPQ",
    icon: "dummy",
  },
  {
    _id: 5,
    title: "Infor HCM ",
    icon: "dummy",
  },
  {
    _id: 6,
    title: "Infor WMS",
    icon: "dummy",
  },
  {
    _id: 7,
    title: "HxGN EAM",
    icon: "dummy",
  },
  {
    _id: 8,
    title: "Infor XM",
    icon: "dummy",
  },

  {
    _id: 9,
    title: "Infor CRM",
    icon: "dummy",
  },
  {
    _id: 10,
    title: "Infor Birst",
    icon: "dummy",
  },
];
const fadeInAnimationVariant = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5 * index,
    },
  }),
};
const page = () => {
  const lists = [
    {
      id: 1,
      text: "Inadequate Scalability and Availability",
    },
    {
      id: 2,
      text: "Unreliable Backup Storage",
    },
    {
      id: 3,
      text: "Weak Disaster Recovery and Redundancy",
    },
    {
      id: 4,
      text: "Inadequate Data Integrity and Automation Capabilities",
    },
    {
      id: 5,
      text: "Subpar IT Performance",
    },
    {
      id: 6,
      text: "Limited IT Universality and Centralized Monitoring",
    },
    {
      id: 7,
      text: "High Management Costs of IT Infrastructure",
    },
  ];

  const upgradeCloud = [
    {
      _id: 1,
      title: "Migrate to the Cloud ",
      desc: "Ensuring a smooth and efficient migration process while minimizing disruptions to your business operations.",
      cta: "Know more",
      link: "/",
      bg: "/gradient-1.png",
    },
    {
      _id: 2,
      title: "Migrate From a different ERP Platform to Infor LN",
      desc: "Experience seamless and transformative migration with data integrity for your business.",
      cta: "Know more",
      link: "/",
      bg: "/gradient-1.png",
    },
    {
      _id: 3,
      title: "Upgrade with Infor",
      desc: "Get access to enhanced innovation, business preferences and value.",
      cta: "Know more",
      link: "/",
      bg: "/gradient-1.png",
    },
    {
      _id: 4,
      title: "End-to-End Implementation",
      desc: "Streamlining every phase of the implementation, we provide the capability of successful and on-time delivery of Infor solution.",
      cta: "Know more",
      link: "/",
      bg: "/gradient-1.png",
    },
    {
      _id: 5,
      title: "Managed Services ",
      desc: "Managing every complex, time-consuming and resource-rigorous process and on demand maintenance of Infor application.",
      cta: "Know more",
      link: "/",
      bg: "/gradient-1.png",
    },
    {
      _id: 6,
      title: "Custom Development & Integrations",
      desc: "Value-adding Infor application customizations and integrations to drive innovation that delivers great business outcomes.",
      cta: "Know more",
      link: "/",
      bg: "/gradient-1.png",
    },
  ];

  const aglity = [
    {
      _id: 1,
      title: "Database Migration",
    },
    {
      _id: 2,
      title: "Infrastructure Migration ",
    },
    {
      _id: 3,
      title: "Enterprise Platforms Migration",
    },
    {
      _id: 4,
      title: "Cloud Microservices",
    },
    {
      _id: 5,
      title: "Disaster Recovery and Enterprise Backup Service",
    },
    {
      _id: 6,
      title: "Application Migration and Modernization",
    },
    {
      _id: 7,
      title: "Cloud Monitoring and Reporting ",
    },
  ];

  const ul = [
    {
      _id: 1,
      title: "Business Applications",
      expandedTitle: "Business Applications On Cloud",
      bgImg: "bg1",
      bgColor: "",
      linksArr: [
        {
          _id: 1,
          title: "Microsoft Dynamics 365",
          url: "/",
        },
        {
          _id: 2,
          title: "Infor",
          url: "/",
        },
        {
          _id: 3,
          title: "Oracle",
          url: "/",
        },
        {
          _id: 4,
          title: "LS Retail",
          url: "/",
        },
      ],

      ctaBtn: false,
      ctaUrl: "/",
      cta: "Know More",
    },
    {
      _id: 2,
      title: "Business Applications",
      expandedTitle: "Business Applications On Cloud",
      bgImg: "",
      bgColor: "#101828",
      linksArr: [
        {
          _id: 1,
          title: "Microsoft Dynamics 365",
          url: "/",
        },
        {
          _id: 2,
          title: "Infor",
          url: "/",
        },
        {
          _id: 3,
          title: "Oracle",
          url: "/",
        },
        {
          _id: 4,
          title: "LS Retail",
          url: "/",
        },
      ],

      ctaBtn: true,
      ctaUrl: "/",
      cta: "Know More",
    },
    {
      _id: 3,
      title: "Business Applications",
      expandedTitle: "Business Applications On Cloud",
      bgImg: "bg3",
      bgColor: "",
      linksArr: [
        {
          _id: 1,
          title: "Microsoft Dynamics 365",
          url: "/",
        },
        {
          _id: 2,
          title: "Infor",
          url: "/",
        },
        {
          _id: 3,
          title: "Oracle",
          url: "/",
        },
        {
          _id: 4,
          title: "LS Retail",
          url: "/",
        },
      ],

      ctaBtn: false,
      ctaUrl: "/",
      cta: "Know More",
    },
  ];

  return (
    <>
      <EntIntro
        title="Accelerating Sales with Salesforce for High-Velocity Enterprises"
        desc=""
        cta="Let's Connect"
        width="80%"
        video="https://gitl-usa.s3.us-west-1.amazonaws.com/banner1.mp4"
      />
      {/* Section Nav */}
      <>
        <SectionNav
          // Modules
          // Key Capabilities
          // Industries
          // Benefits
          // Testimonials - Temp Removed since no data

          arr={[
            {
              _id: 1,
              title: "Modules",
              link: "#Modules",
            },
            {
              _id: 2,
              title: "Key Capabilities",
              link: "#KeyCapabilities",
            },
            {
              _id: 3,
              title: "Industries",
              link: "#Industries",
            },
            {
              _id: 4,
              title: "Benefits",
              link: "#Benefits",
            },
          ]}
        />
      </>

      {/* Overview  */}
      <Abstract abstractdesc="Salesforce stands as a leading cloud-based CRM, catering to service, marketing, and sales needs, and making it accessible to users without technical expertise. The platform revolutionizes customer-business interactions, encouraging more sincere relationships. With its capacity to provide a comprehensive view of every customer interaction, the Salesforce CRM application delivers an intuitive user experience. Distinguished from other CRM applications, Salesforce offers the ultimate solution for businesses, encompassing all the essential elements needed for running operations on an automated platform infused with intelligent capabilities."></Abstract>

      {/* Stack Offering Sliders */}
      <>
        <div id="Modules">
          <OfferingsSlider
            title="Modules"
            alignment="left"
            expandedDesc={true}
            arr={[
              /*One*/
              {
                _id: 1,
                title: "Sales CRM",
                desc: "Automate lead qualification, prioritization and distribution for the identification of sales opportunities and their automatic assignment to the most suitable representatives.",
                cta: "Explore Service",
                subArr: true,
                subArrLinks: [
                  {
                    _id: 1,
                    icon: "gear",
                    title: "Sales Cloud",
                    desc: "Enables you to manage Lead to order contacts from any device and location.",
                    cta: "Know More",
                    ctaUrl: "/",
                    list: [],
                  },
                  {
                    _id: 2,
                    icon: "gear",
                    title: "Salesforce CPQ (Configure, Price, Quote)",
                    desc: "Allows executives to understand customer requirements, configure quotes, accordingly, apply discounts and generate accurate billing, streamlining revenue recognition.",
                    cta: "Know More",
                    ctaUrl: "/",
                    list: [],
                  },
                 
                ],
                image: "rpa/Cyber-security-offerings_Business-Consulting.jpg",
                inline: true,
                ctaUrl: "/",
                links: [
                  {
                    title: "Sales Execution CRM",
                    url: "/",
                  },
                  {
                    title:
                      "Assessment services against cyber security frameworks & standards",
                    url: "/",
                  },
                ],
              },
              /*End One*/
              {
                _id: 2,
                title: "Marketing Automation",
                desc: "Visualize the complete 360-degree customer journey and create personalized, no-code engagement workflows for your customers across multiple channels.",
                inline: true,
                subArr: true,
                subArrLinks: [
                  {
                    _id: 1,
                    icon: "gear",
                    title: "Marketing Cloud",
                    desc: "Automate various email campaign activities, enhancing product/ service marketing for your organization. The tool also builds attractive landing pages for solutions and service information delivery.",
                    cta: "Know More",
                    ctaUrl: "/",
                    list: [],
                  },
                  {
                    _id: 2,
                    icon: "gear",
                    title: "Pardot",
                    desc: "B2B marketing tool equipped with automation capabilities that drives increased sales and more efficient marketing planning.",
                    cta: "Know More",
                    ctaUrl: "/",
                    list: [],
                  },
                  
                ],
                cta: "Explore Service",
                image: "rpa/Cyber-security_Technology-Solutions.jpg",
                ctaUrl: "/",
                links: [
                  [
                    {
                      title: "Transcription Services",
                      url: "/",
                    },
                    {
                      title: "Speech recognition",
                      url: "/",
                    },
                    {
                      title: "Language translation",
                      url: "/",
                    },
                  ],
                ],
              },
              {
                _id: 3,
                title: "Customer Portal",
                desc: "Self-service applications and referral portals for your prospects, customers and partners. Enjoy live application tracking, mobile-responsive form and seamless payment integrations to provide a hassle-free customer experience.",
                cta: "Explore Service",
                image: "rpa/Application-Security-Testing.jpg",
                inline: true,
                subArr: true,
                subArrLinks: [
                  
                ],
                ctaUrl: "/",
                links: [
                  {
                    title: "Web application Security testing",
                    url: "/",
                  },
                  {
                    title: "Mobile App Security testing",
                    url: "/",
                  },
                  {
                    title:
                      "Vulnerability Assessment and Penetration Testing (VAPT)",
                    url: "/",
                  },
                ],
              },

              {
                _id: 4,
                title: "Mobile CRM",
                desc: "Automate, plan, track and monitor your agents' daily sales routines and ensure your representatives never miss a single customer inquiry and keep them engaged, even while on the go.",
                cta: "Explore Service",
                inline: true,
                image: "rpa/Cyber-security_vCISO.jpg",
                subArr: true,
                subArrLinks: [
                  
                ],
                ctaUrl: "/",
                links: [
                  {
                    title: "Strategy",
                    url: "/",
                  },
                  {
                    title: "Risk Management",
                    url: "/",
                  },
                  {
                    title: "Regulatory & Standards compliance",
                    url: "/",
                  },
                  {
                    title: "Policy & procedures",
                    url: "/",
                  },
                  {
                    title: "Security Program",
                    url: "/",
                  },
                  {
                    title: "End user Training",
                    url: "/",
                  },
                ],
              },
              {
                _id: 5,
                title: "Service Cloud",
                desc: "Leverage the power of case management to streamline issue resolution. Automate complex workflows to enhance agent productivity.",
                inline: true,
                subArr: true,
                subArrLinks: [
                  {
                    _id: 1,
                    icon: "gear",
                    title: "Service",
                    desc: "360-degree view of customers, ensuring personalized and efficient service interactions.",
                    cta: "Know More",
                    ctaUrl: "/",
                    list: [],
                  },
                  {
                    _id: 2,
                    icon: "gear",
                    title: "Field Service",
                    desc: "Seamlessly schedule and dispatch resources using intelligent algorithms. Equip your field service teams with real-time information with a mobile-friendly interface.",
                    cta: "Know More",
                    ctaUrl: "/",
                    list: [],
                  },
                  
                ],
                cta: "Explore Service",
                image: "rpa/Cyber-security_Technology-Solutions.jpg",
                ctaUrl: "/",
                links: [
                  [
                    {
                      title: "Transcription Services",
                      url: "/",
                    },
                    {
                      title: "Speech recognition",
                      url: "/",
                    },
                    {
                      title: "Language translation",
                      url: "/",
                    },
                  ],
                ],
              },
            ]}
          />
        </div>
      </>

      {/* Ms slider */}
      <>
        <div className={`bg-ms-practise w-full py-32 hidden`} id="KeyCapabilities"
        >
          <div className={` w-full`}>
            <div className="text-left max-w-screen-xl md:max-w-screen-xl mb-5 mx-auto p-5 pb-0 px-[2rem] grid grid-cols-1 gap-5 sm:grid-cols-2">
              {/* left */}
              <div className="  flex items-start flex-col justify-between  relative">
                <div className="">
                  <h3 className="text-[42px]  leading-[54px] mb-3 font-bold ">
                    Microsoft Services
                  </h3>
                </div>
                <div>
                  <p className="font-medium  leading-[22px] md:w-[90%] ">
                    We deliver high-performing services for a comprehensive
                    suite Microsoft ecosystem, devised to elevate growth and
                    productivity and build stronger stakeholder connections
                  </p>
                </div>
              </div>
              {/* right */}
              <div>
                <div></div>
              </div>
            </div>
          </div>
          <div className="text-left max-w-screen-xl md:max-w-screen-xl mb-5 mx-auto p-5 pb-0 px-[2rem] flex gap-10  overflow-hidden">
            <Swiper
              slidesPerView={"auto"}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                // when window width is >= 320px
                320: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                // when window width is >= 480px
                480: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                // when window width is >= 640px
                640: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
              }}
              modules={[Pagination]}
              className="flex flex-col sm:flex-row gap-y-5 flex-wrap justify-center text-left max-w-screen-xl md:max-w-screen-2xl mb-5 mx-auto  p-5 "
            >
              {UseCases.map((item, index) => {
                return (
                  <SwiperSlide
                    key={item._id}
                    className="sm:w-full h-full flex flex-col justify-between  mr-4  relative group"
                  >
                    <div className="sm:w-full h-full bg-white  flex flex-col justify-between">
                      <div className="p-5  mx-2">
                        <div className="mb-4">
                          {item.icon !== "" ? (
                            <Image
                              src={`/icon/${item.icon}.svg`}
                              width="48"
                              height="48"
                              alt={item.icon}
                            />
                          ) : (
                            <Icon path={mdiDomain} size={3} />
                          )}
                        </div>
                        <h4 className="text-[26px] font-bold mb-2 leading-[34px] text-[#101828]">
                          {item.title}
                        </h4>
                      </div>
                      <div
                        className={clsx("w-full bg-[#0745D3] p-5", {
                          hidden: item.link === "",
                        })}
                      >
                        <Link
                          href={item.link}
                          className={
                            "text-white flex transition-all hover:opacity-75"
                          }
                        >
                          {item.cta}
                          <Icon
                            path={mdiArrowRight}
                            style={{ marginLeft: "0.5em" }}
                            size={1}
                          />
                        </Link>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </>

      {/* Industry Spotlight Slider */}
      

      {/* Benefits Vertical Slider */}
      <Benefits
        ribbon="Benefits"
        ribbonTxtWhite="true"
        title="Salesforce CRM"
        desc="Salesforce CRM is a thrust of innovation and efficiency designed to transform the way you do business with prospects and customers."
        arr={[
          {
            _id: 1,
            icon: "benefits-ai-ml/process-analyse",
            cardDesc:
              "Access to relevant information saves time, boosts customer satisfaction and streamlines issue resolution.",
          },
          {
            _id: 2,
            icon: "benefits-ai-ml/anticipate-future",
            cardDesc:
              "Enhance lead nurturing, consistency in interactions and lead scoring.",
          },
          {
            _id: 3,
            icon: "benefits-ai-ml/effortless-communicate",
            cardDesc:
              "Design effective campaigns and personalize buying experiences.",
          },
          {
            _id: 4,
            icon: "benefits-ai-ml/optimise-supply-chain",
            cardDesc:
              "Centralized record of customer interactions, making it accessible to all team members.",
          },
          {
            _id: 5,
            icon: "benefits-ai-ml/healthcare",
            cardDesc: "Improve teamwork, allowing simultaneous work on documents and faster customer responses.",
          },
        ]}
      ></Benefits>

      {/* Blog */}
      <BlogSlider
        arr={[
          {
            _id: 1,
            ribbon: "blog",
            title: "Elevating Customer Service with Salesforce Service Cloud",
            desc: "Salesforce's Service Cloud is transforming customer service paradigms through its cutting-edge capabilities. With social media CRM and Salesforce Managed Services at its core, Salesforce Service Cloud stands as a beacon in enhancing customer service experiences. This article delves into how Salesforce, particularly its Service Cloud, redefines customer service dynamics, leveraging social media integrations and comprehensive managed services. ",
            cta: "Know More",
            link: "/",
            imgUrl: "",
          },
        ]}
      />

      {/* Case Study */}
      <CaseStudy
        ribbon="CASE STUDY"
        title="Elevating Customer Experience with Salesforce CRM"
        desc="World's top-notch businesses choose us for our excellent technical acumen and proven standards as we deliver high-performing multidisciplinary solutions globally."
        isHomepage={false}
        arr={[
          {
            id: 1,
            title:
              "India's Top Forklift Truck Manufacturer Increases Opportunity-to-Order Conversions by 10% and Elevates Customer Experience with Salesforce Integration",
            thumbnail: "1",

            description: "",
            tags: [""],
            cta: "Know More",
            link: "https://www.godrejinfotech.com/assets/pdf/case-studies/Manufacturer-Electrical-components-Automobile.pdf",
          },
          {
            id: 2,
            title:
              "India's premium furniture brand in both home and institutional segments achieves 360-degree customer visibility by integrating Salesforce with its ERP.",
            thumbnail: "2",

            description: "",
            tags: [""],
            cta: "Know More",
            link: "",
          },
          {
            id: 3,
            title:
              "Top notch Indian security solutions company implements Salesforce CRM",
            thumbnail: "3",

            description: "",
            tags: [""],
            cta: "Know More",
            link: "",
          },
        ]}
      />


{/* Testimonaisl */}
      <NewTestimonial
        ribbon="CLIENT TESTIMONIALS"
        ribbonVisible={false}
        title="Delighted customers share their success experience "
        desc="Discover how we have helped our clients to realize tangible outcomes aligned with their business goals."
        arr={[
          {
            id: 1,
            clientName: "",
            clientDesignation:
              "",
            thumbnail: "1",
            description:
              "With Salesforce Sales Cloud smooth implementation, Godrej Infotech’s team allied our lead-to-order cycle. With deep Infor LN integration and fine-tuned project management, the team met aggressive go-live targets, providing us with streamlined data. Thank you GITL team for contributing to our visionary goal of a singular CRM system.",
            category: "static",
            link: "/",
          },
          
         
        ]}
      />
      {/* Subscription */}
      <Subscription
        title="Are you Ready for Infor-driven growth?"
        blue="Let's get started!?"
        title2=""
        desc="Share your details now to optimize your business operations or implement industry-specific enhancements."
      />

      {/* Infotech weekly */}
      <>
        <div className="hidden">
          <InfotechWeeklyAlt />
        </div>
      </>
    </>
  );
};

export default page;
