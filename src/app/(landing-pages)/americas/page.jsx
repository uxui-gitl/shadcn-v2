"use client";
// system import
import Image from "next/image";
import { useRef } from "react";
import Slider from "@/components/Slider";
import SectionWrapperNew from "@/components/SectionWrapperNew";
import CaseStudiesSection from "@/sections/case-studies/CaseStudiesSection";
import BlogSection from "@/sections/blog/BlogSection";
import ReviewSliderSection from "@/sections/reviewSlider/ReviewSliderSection";
import TransformBusinessForm from "@/sections/transformBusinessFrom/TransformBusinessFromSection";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import Navbar from "@/components/Navbar/Navbar";
import NewNavBar from "@/components/NewNavBar";

import { Tabs } from "@/components/ui/tabs";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React, { useEffect, useState } from "react";
import OutlinedButtonWithArrow from "@/components/ui/buttons/OutlinedButtonWithArrow";
import Dialog from "@/components/Dialog";
import useScrollTriggeredCountUp from "@/components/home/useScrollTriggeredCountUp";
import Announcement from "@/sections/announcement/Announcement";
import Link from "next/link";
import Icon from "@mdi/react";
import { mdiArrowRight } from "@mdi/js";
import IndustrySpotlight from "@/sections/industry-spotlight/industrySpotlight";


export default function Home() {
  const [showModal1, setshowModal1] = useState(false);
  const [showReadMoreModal, setShowReadMoreModal] = useState(false);

  const { ref, inView } = useInView({
    threshold: 0.1, // Trigger when 10% of the component is in view
  });
  const GuidingPrinciples = [
    {
      id: 1,
      title: "Vision",
      desc: `Be a world class provider of high-quality Information’s & Technology solutions.`,
    },
    {
      id: 2,
      title: "Mission",
      desc: `Beyond Business through integrated IT solutions.`,
    },
    {
      id: 3,
      title: "Values",
      desc: `Integrity, Responsiveness, Commitment, Teamwork`,
    },
  ];

  const INDUSTRY_SPOTLIGHT = [
    {
      id: 1,
      cardBGImageUrl:
        "/industry-spotlight/cards-backgrounds/card-bg--manufacturing.png",
      cardBGColor: "#7F4EE1",
      cardHeading: "Blogs",
      cardDesc: "",
      isArrow: true,
      cardTextColor: "white",
      pageURL:"http://google.com"
    },
    {
      id: 2,
      cardBGImageUrl:
        "/industry-spotlight/cards-backgrounds/card-bg--retail.png",
      cardBGColor: "#7F4EE1",
      cardHeading: "Brochures",
      cardDesc: "",
      isArrow: true,
      cardTextColor: "white",
      pageURl:"http://google.com"
    },
    {
      id: 3,
      cardBGImageUrl:
        "/industry-spotlight/cards-backgrounds/card-bg--trading-and-distribution.png",

      cardBGColor: "#7F4EE1",
      cardHeading: "Testimonials",
      cardDesc: "",
      isArrow: true,
      cardTextColor: "white",
      pageURL:"http://google.com"
    },
    {
      id: 4,
      cardBGImageUrl:
        "/industry-spotlight/cards-backgrounds/card-bg--trading-and-distribution.png",

      cardBGColor: "#7F4EE1",
      cardHeading: "Success Stories",
      cardDesc: "",
      isArrow: true,
      cardTextColor: "white",
      pageURL:"http://google.com"
    },

    
    // Add more cards as needed
  ];

  const items = [
    {
      id: 1,
      content: "manufacturing",
    },
    {
      id: 2,
      content: "retail",
    },
    {
      id: 3,
      content: "project",
    },
    {
      id: 4,
      content: "professional service",
    },
    {
      id: 5,
      content: "healthcare",
    },
  ];

  const items2 = [
    {
      id: 6,
      content: "smart factory",
    },
    {
      id: 7,
      content: "omnichannel expertise",
    },
    {
      id: 8,
      content: "agility",
    },
    {
      id: 9,
      content: "client centric approach",
    },
    {
      id: 10,
      content: "streamlined operations",
    },
  ];

  const items3 = [
    {
      id: 11,
      content: "agility",
    },
    {
      id: 12,
      content: "customer loyalty",
    },
    {
      id: 13,
      content: "delivery speed",
    },
    {
      id: 14,
      content: "competitiveness",
    },
    {
      id: 15,
      content: "quality",
    },
  ];

  const items4 = [
    {
      id: 17,
      content: "AUTOMATION",
    },
    {
      id: 18,
      content: "CLOUD",
    },
    {
      id: 19,
      content: "TRANSFORMATION",
    },
  ];

  const tabs = [
    {
      title: "Services",
      value: "services",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-3xl text-xl md:text-4xl font-bold text-black bg-[#FCE6F4]">
          <ServiceContent />
        </div>
      ),
    },
    {
      title: "Industry Spotlight ",
      value: "industryspotlight ",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-3xl text-xl md:text-4xl font-bold text-black bg-[#FCE6F4]">
          <IndustryContent />
        </div>
      ),
    },
    {
      title: "Partners",
      value: "partners",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-3xl text-xl md:text-4xl font-bold text-black bg-[#FCE6F4]">
          <ParternerContent />
        </div>
      ),
    },
  ];
  const blogImageUrl = "/homeNew/blog.svg";

  const partnerLogo = [
    "/homeNew/partner1.svg",
    "/homeNew/partner2.svg",
    "/homeNew/partner3.svg",
    "/homeNew/partner4.svg",
    "/homeNew/partner1.svg",
    "/homeNew/partner2.svg",
    "/homeNew/partner3.svg",
  ];

  const CASE_STUDIES_DATA = [
    {
      imageURL: "/CloudStackServices/case-studies/bg--coffee-beans.png",
      videoURL: "/CloudStackServices/case-studies/bg--video-industry.mp4",
      title: "Case Studies",
      heading: "Delivering Results that Matters",
      description:
        "World’s top-notch businesses choose us for our industry knowledge and excellent technical acumen.",
      link: "",
      color: "#FFFFFF",
    },
    {
      imageURL: "",
      title: "",
      heading: "Improved Operational Uptime",
      description:
        "USA based Global Leader in Speciality Materials Optimises Operational Efficiency with Infor CSIE Managed Services",
      link: "",
      color: "#000",
      bgCardColor: "#FCE6F4",
    },

    {
      imageURL: "/path/to/image1.jpg",
      title: "",

      heading: "Increase in Operational Agility",
      description:
        "USA based Premium Kitchen and Bath Products Distributor Implements Infor CSIE & WMS on MT Cloud",
      link: "",
      color: "#000",
      bgCardColor: "#EFE9FB",
    },
    {
      imageURL: "/CloudStackServices/case-studies/bg--electical-devices.png",
      title: "",
      heading: "Reduced Cost",
      description:
        "5 Years of Infor LN, ION & OS Managed Services Engagement with New Jersy based Specialty Coatings and Building Materials Solutions Company",
      link: "",
      color: "#000",
      bgCardColor: "#E1F2EF",
    },

    {
      imageURL: "/CloudStackServices/case-studies/bg--electical-devices.png",
      title: "",
      heading: "Streamlined Operations",
      description:
        "Industrial Packaging and Products based Company in Ohio Implements and Roll out Infor LN solution",
      link: "case-studies/case-study-82?type=Transformation",
      color: "#000",
      bgCardColor: "#E1F2EF",
    },

    {
      imageURL: "/CloudStackServices/case-studies/bg--electical-devices.png",
      title: "",
      heading: "",
      description:
        "Massachusetts based Tyre Manufacturer implements Infor LN with 5 years of Managed Supports Services",
      link: "case-studies/case-study-60?type=Transformation",
      color: "#000",
      bgCardColor: "#E1F2EF",
    },

    
    // Add more case studies here...
  ];

  const TESTIMONIAL_DATA = [
    {
      id: "1",
      cardHeading: "79% Cut down in Purchase Order Processing",
      cardDesc:
        "GITL helped us in accelerating digital transformation journey with Business Central on Azure cloud and Power BI solution. As a result, our material requisition efficiency has increased by 66%, time taken in processing purchase orders is reduced by 79% and invoice processing efficiency has improved by 60%.",
      designation: "-	IT Director,",
      companyName: "Cooling Facility Management Company",
    },
    {
      id: "2",
      cardHeading: "Effective finance and budgeting management",
      cardDesc:
        "GITL upgraded Dynamics AX to Business Central on SAAS - and integrated Power BI seamlessly. The upgradation to an all-inclusive solution significantly helped us in taking control over our finance and budgeting processes.",
      designation: "-	IT Director",
      companyName:
        "Saudi Arabia’s Leading Engineering & Construction Service Provider",
    },
    {
      id: 3,
      cardHeading: "3.	Successful Migration to Infor CloudSuite",
      cardDesc: `Successful migration from on-premises to multi-tenant environment with minimal issues, thanks to Godrej Infotech's dedicated resources, expertise, and support. Their timely assistance ensures seamless customization, data migration, and end-user support. `,
      designation: "- IT Manager",
      companyName: "Leading Dredging and Maritime Service Provider ",
    },
  ];

  const BusinessTransformationDrive_DATA = [
    {
      id: 1,
      cardTitle: "",
      cardHeading: "Embrace Tomorrow with Automation",
      cardDesc:
        "Enabling organizations to optimize cost & enhance business processes with next-gen digital technologies like Robotic Process Automation (RPA), IoT & Analytics.",
      rawData: `<div class="grid grid-cols-3 gap-4">
            <div>
              <div class="text-[40px] font-semibold mb-12">
              Intelligent Technologies
              </div>
              <p class="text-[22px] font-medium mb-8">Artificial Intelligence & Machine Learning</p>
              <p class="text-[22px] font-medium mb-8">RPA</p>
              <p class="text-[22px] font-medium mb-8"> IIoT</p>
            </div>
            <div>
              <div class="text-[40px] font-semibold mb-12">
              Tech Stack
              </div>
              <p class="text-[22px] font-medium mb-8">Java </p>
              <p class="text-[22px] font-medium mb-8">.Net, SharePoint</p>
              <p class="text-[22px] font-medium mb-8">Low code application development</p>
            </div>
            <div>
              <div class="text-[40px] font-semibold mb-12">
              Data Insights
              </div>
              <p class="text-[22px] font-medium mb-8">Power BI and Power Apps</p>
              <p class="text-[22px] font-medium mb-8">Birst</p>
              <p class="text-[22px] font-medium mb-8"> Tableau</p>
              <p class="text-[22px] font-medium mb-8">Azure and AWS data management </p>

            </div>
          </div>`,
    },
    {
      id: 2,
      cardTitle: "",
      cardHeading: "Cloud Enables New Possibilities",
      cardDesc:
        "We are committed to provide, secure, cost-effective & scalable cloud implementation, cloud migration & cloud support services to our customers.",
      rawData: `<div class="grid grid-cols-2 gap-4">
            <div>
              <div class="text-[40px] font-semibold mb-12">
             Upgrade to Cloud
              </div>
              <p class="text-[22px] font-medium mb-8">Dynamics AX Upgrade</p>
              <p class="text-[22px] font-medium mb-8">Dynamics NAV Upgrade</p>
              <p class="text-[22px] font-medium mb-8">Upgrade to Infor LN</p>
              <p class="text-[22px] font-medium mb-8">Migrate Applications to Cloud</p>
              <p class="text-[22px] font-medium mb-8">Lift and Shift to Cloud</p>
            </div>
            <div>
              <div class="text-[40px] font-semibold mb-12">
              Cloud Solution and Services
              </div>
              <p class="text-[22px] font-medium mb-8">Cloud Infrastructure </p>
              <p class="text-[22px] font-medium mb-8">Business Apps on Cloud</p>
              <p class="text-[22px] font-medium mb-8"> M365 Services</p>
            </div>
            <div>
          </div>`,
    },
    {
      id: 3,
      cardTitle: "",
      cardHeading:
        "Future-Proof Transformation Solutions ",
      cardDesc:
        "We implement digital solutions that modernize and enhance user experience, ultimately leading to a digitally- sound businesses.",
      rawData: `<div class="grid grid-cols-2 gap-4">
      <div>
        <div class="text-[40px] font-semibold mb-12">
      Enterprise Suite
        </div>
        <p class="text-[22px] font-medium mb-8">Microsoft Dynamics 365</p>
        <p class="text-[22px] font-medium mb-8">Infor</p>
        <p class="text-[22px] font-medium mb-8">Oracle</p>
        <p class="text-[22px] font-medium mb-8">Hexagon EAM</p>
      </div>
      <div>
        <div class="text-[40px] font-semibold mb-12">
        Customer Experience
        </div>
        <p class="text-[22px] font-medium mb-8">Microsoft CRM </p>
        <p class="text-[22px] font-medium mb-8">Infor CRM</p>
        <p class="text-[22px] font-medium mb-8">Salesforce</p>
        <p class="text-[22px] font-medium mb-8">LS Retail</p>
        <p class="text-[22px] font-medium mb-8">Ecommerce</p>

      </div>
      <div>
    </div>`,
    },
  ];

  const sliderData = [
    {
      id: 1,
      title: "Automation Project Insight",
      desc: "AI powered Computer vision saves 75% of monthly man hours with automated auditing for leading retailer",
      url: "https://png.pngtree.com/background/20230512/original/pngtree-business-meeting-room-dark-background-picture-image_2502832.jpg",
    },
    {
      id: 2,
      title: "Cloud Project Insight",
      desc: "Analytical financial reporting leveraged by management with D365 F&O on Cloud for non-profit, industry managed organisation. ",
      url: "https://img.freepik.com/premium-photo/artificial-intelligence-scattering-head-profile-chromeplated-robot-black-background-ai-generated_868611-1860.jpg",
    },
    {
      id: 3,
      title: "Transformation Project Insight",
      desc: "8 years of Infor managed support services and migration for MT Infor cloud optimises operational cost by 25 for Europe’s maritime service provider",
      url: "https://images.prismic.io/hubtic/3890db0a-cd65-45bb-8ac6-f08b971e68cb_Website+Go%CC%88rselleri+1080x608+%281%29.jpg?auto=compress,format&rect=135,0,811,608&w=2000&h=1500",
    },
  ];

  const [sliderImageUrl, setSliderImageUrl] = useState("");
  const [index, setIndex] = useState(0);
  const [index2, setIndex2] = useState(0);
  const [businessItem, setBusinessItem] = useState({
    id: 1,
    cardTitle: "",
    cardHeading: "Embrace Tomorrow with AUTOMATION",
    cardDesc:
      "Accelerate operations, drive innovation and increase accuracy with AI powered solutions",
    rawData: `<div class="grid grid-cols-3 gap-4">
          <div>
            <div class="text-[40px] font-semibold mb-12">
            Intelligent Technologies
            </div>
            <p class="text-[22px] font-medium mb-8">Artificial Intelligence & Machine Learning</p>
            <p class="text-[22px] font-medium mb-8">RPA</p>
            <p class="text-[22px] font-medium mb-8"> IIoT</p>
          </div>
          <div>
            <div class="text-[40px] font-semibold mb-12">
            Tech Stack
            </div>
            <p class="text-[22px] font-medium mb-8">Java </p>
            <p class="text-[22px] font-medium mb-8">.Net, SharePoint</p>
            <p class="text-[22px] font-medium mb-8"> Low code application development</p>
          </div>
          <div>
            <div class="text-[40px] font-semibold mb-12">
            Data Insights
            </div>
            <p class="text-[22px] font-medium mb-8">Power BI and Power Apps</p>
            <p class="text-[22px] font-medium mb-8">Birst</p>
            <p class="text-[22px] font-medium mb-8"> Tableau</p>
            <p class="text-[22px] font-medium mb-8">Azure and AWS data management </p>

          </div>
        </div>`,
  });

  // animate text
  useEffect(() => {
    const id = setInterval(() => {
      setIndex((state) => {
        if (state >= items.length - 1) return 0;
        return state + 1;
      });
    }, 4500);
    return () => clearInterval(id);
  });

  useEffect(() => {
    const id2 = setInterval(() => {
      setIndex2((state) => {
        if (state >= items4.length - 1) return 0;
        return state + 1;
      });
    }, 2500);
    return () => clearInterval(id2);
  });
  // end animate text

  // banner Hover ReadMore
  function handleReadMoreHover(item, isFilled) {
    if (isFilled) {
      setSliderImageUrl(item.url);
    } else {
      setSliderImageUrl("");
    }
  }
  // end banner Hover ReadMore

  // handle click businesstranform card click
  function handleBusinessCardClick(modal, item) {
    setshowModal1(modal);
    setBusinessItem(item);
  }

  // end handle click businesstranform card click

  function handleReadMoreClick(){
    setShowReadMoreModal(true);
  }


  const announcemnetData = [
    {
      _id: 1,
      title:
        "Dredging & Marine Global Giant of Netherlands",
      cta: "",
      targetBlank: true,
      link: "/",
    },
    {
      _id: 2,
      title:
        "Boskalis Signs 5 years of renewal contract after a successful 3-year relationship with Godrej Infotech for Infor Products & Services",
      cta: "",
      targetBlank: true,
      link: "/",
    },
    
  ]

  return (
    <>
      <Announcement content={announcemnetData} country={'US'} />
      <div className={`relative z-[500]`}>
        <div className={`absolute w-full  `}>
          <NewNavBar />
        </div>
      </div>
      {/* banner slider */}
      <div className="slider-wrapper bg-black" style={{ height: "100vh" }}>
        <div className="video relative" style={{ height: "inherit" }}>
          <video
            src="/home/1.mp4"
            autoPlay
            loop
            muted
            className="inset-0 w-full h-full object-cover"
          ></video>
          <div
            className={` w-full h-full absolute top-0 transition duration-700  ${
              sliderImageUrl
                ? "opacity-100 ease-in-out"
                : "opacity-0 ease-in-out"
            }`}
            style={{
              backgroundImage: `url(${sliderImageUrl})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <div
            className="container mx-auto text-[76px] leading-[86px] text-white absolute"
            style={{ top: "30%", left: "0", right: "0" }}
          >
            DELIVERING BUSINESS<br></br> VALUE WITH
            <motion.div
              key={items4[index2]?.id}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ ease: "easeInOut", duration: 0.5, delay: 0.1 }}
              style={{ display: "inline-block" }}
            >
              <span className="ml-2">{items4[index2]?.content}</span>
            </motion.div>
          </div>
          <hr
            className="h-px my-8 bg-[#e5e7eb5c] border-0 absolute"
            style={{ top: "55%", left: "0", right: "0" }}
          ></hr>
          {/* slider */}
          <div
            className="container mx-auto h-60"
            style={{
              position: "absolute",
              width: "100%",
              bottom: "0",
              left: 0,
              right: 0,
            }}
          >
            <div className="flex h-60" style={{ alignItems: "baseline" }}>
              <div className=" w-[70%]">
                <Swiper
                  slidesPerView={1}
                  navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                  }}
                  autoplay={false}
                  loop={true}
                  spaceBetween={30}
                  modules={[Navigation]}
                >
                  {sliderData?.map((item, index) => (
                    <SwiperSlide key={item.id}>
                      <div className="w-full py6 bg-transparent rounded-3xl">
                        <div className="grid grid-cols-3 gap-4">
                          <motion.div
                            ref={ref}
                            whileInView={{ y: 0, opacity: 1 }}
                            initial={{ y: 100, opacity: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                          >
                            <div className="text-[#fff] text-[20px] font-semibold ">
                              {item.title}
                            </div>
                          </motion.div>
                          <motion.div
                            className="col-span-2"
                            ref={ref}
                            whileInView={{ y: 0, opacity: 1 }}
                            initial={{ y: 100, opacity: 0 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                          >
                            <div className="">
                              <p className="text-base font-medium leading-[24px] text-white mb-10">
                                {item.desc}
                              </p>
                              <button
                                type="button"
                                className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2"
                                onMouseOver={() =>
                                  handleReadMoreHover(item, true)
                                }
                                onMouseOut={() =>
                                  handleReadMoreHover(item, false)
                                }
                              >
                                Read more
                              </button>
                            </div>
                          </motion.div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <div className="w-[30%] relative">
                <div
                  className={`swiper-button-next`}
                  style={{ width: "48px", height: "48px" }}
                >
                  <img src="/homeNew/btn-arrows-right.svg" alt="icon" />
                </div>
                <div
                  className={`swiper-button-prev`}
                  style={{
                    width: "48px",
                    height: "48px",
                    transform: "translateX(268px)",
                  }}
                >
                  <img src="/homeNew/btn-arrows-left.svg" alt="icon" />
                </div>
              </div>
            </div>
          </div>
          {/*end slider */}
        </div>
      </div>
      <SectionWrapperNew style={{ backgroundColor: "#ffffff", height: "70vh" }}>
        <p className="text-[#1D162B] text-[32px] font-medium leading-[46px] py-16">
          {`Godrej Infotech Americas (GIA) is the subsidiary of Godrej Infotech Ltd (GITL) which is one of the holding companies within 1.7 USD Bn Godrej Enterprise Group.  `}
        </p>
        <button
          type="button"
          onClick={() => handleReadMoreClick()}
          className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2"
        >
          Read more
        </button>
      </SectionWrapperNew>

      {/* video */}
      <div className="h-[65vh] -mt-5">
        <video
          src={"video-background-mioti-consulting-opt.mp4"} // Replace with your video path
          autoPlay
          loop
          muted
          className="inset-0 w-full h-full object-cover fixed -z-50"
        />
      </div>
      {/* video */}

      <CaseStudiesSection
        casestudy={CASE_STUDIES_DATA}
        csLayout={"6"}
        bgColor={"#1D162B"}
        style={{}}
      />

      {/* innovative section */}
      <SectionWrapperNew
        sectionHeading={"ACT BASED APPROACH OF BUILDING FUTURE READY SOLUTIONS"}
        sectionDesc={""}
        sectionTextColor="white"
        sectionHeadingLayout="horizontal"
        title="Business Transformation Drive"
        style={{
          //backgroundColor: "black",

          background: `url('AdobeStock_339383545.jpeg') no-repeat center center / cover`,
          position: "relative",
          zIndex: "2",
          height: "750px",
        }}
      >
        <Slider slidesPerView={3}>
          {BusinessTransformationDrive_DATA.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="relative min-h-[600px] p-8 bg-[#5F22D9] rounded-3xl">
                {item?.cardTitle && (
                  <div className="text-xl text-white font-semibold mb-[100px]">
                    {item?.cardTitle}
                  </div>
                )}
                <div className="mb-[50px] text-[42px] font-medium text-white leading-[50px]">
                  {item.cardHeading}
                </div>
                <div className="mb-3 text-xl leading-[31px] text-white h-[75px]">
                  {item.cardDesc}
                </div>

                {/* Container for the button */}
                <div className="absolute bottom-4 right-4">
                  <OutlinedButtonWithArrow
                    arrowColor={"white"}
                    size={48}
                    onClick={() => handleBusinessCardClick(true, item)}
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Slider>
      </SectionWrapperNew>
      {/* end innovative section */}

      {/* offerings */}
      <SectionWrapperNew
        sectionHeading={"Capabilities and Partnership"}
        sectionDesc={
          "Delivering transformative results with our industry knowledge, strategic partnership and end-to-end service offerings."
        }
        sectionTextColor="black"
        title="Count on Us"
        sectionHeadingLayout="horizontal"
        style={{ background: "white", padding:'32rem 0rem 16rem 0rem' }}
      >
        <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col mx-auto w-full  items-start justify-start my-0">
          <Tabs
            activeTabClassName={`!bg-[#5F22D9]`}
            contentClassName={`!mt-20`}
            tabClassName={`!px-10 hover:bg-[#5F22D9]`}
            containerClassName={`!my-2`}
            tabs={tabs}
          />
        </div>
      </SectionWrapperNew>
      {/* end offerings */}
      {/* guiding section */}
      <SectionWrapperNew style={{ backgroundColor: "#000" }}
        sectionHeading="The Guiding Principles We Live By"
        sectionDesc={`Driven by our principles, we strive to make a difference in every we do, building value and enhancing growth.`}
        sectionTextColor='#fff'
        sectionHeadingLayout="center"
      >

        <Slider>
          {GuidingPrinciples.map((item, index) => (
            <SwiperSlide key={index}>
              <div class="p-6 bg-[transparent]">
                <div className="flex py-4" style={{ borderBottom: '1px solid #CDBAF3' }}>
                  <Image src={"about/whiteStar.svg"} width={30} height={30} alt={"hioasdo"} className="mr-4" />
                  <div className="text-[28px] text-white">{item.title}</div>
                </div>
                <p class="text-[20px] py-4 text-white">{item.desc}</p>
              </div>

            </SwiperSlide>
          ))}
        </Slider>

      </SectionWrapperNew>
      {/*end guiding section */}

      <IndustrySpotlight
        cardData={INDUSTRY_SPOTLIGHT}
        sectionHeading="Resources"
        sectionDesc={
          "Learn more about our solutions, success stories and insights."
        }
      />

      <BlogSection
        ID={"blog"}
        blogImageUrl={"/homeNew/blog-svg.png"}
        Heading={"Step Up in Your Professional Journey"}
        Desc={
          "Work with talented professionals who inspire and support each other. Join our dynamic team and embark on a rewarding career journey that shapes your future."
        }
        Color={"white"}
        readMoreUrl={""}
      >
        <div className="">
          <Link
            href={``}
            target="_blank"
            className="text-white mr-5 mt-10 md:my-10 inline-flex items-center transition-all bg-[#5F22D9] hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-base px-8 py-3 me-2 dark:bg-[#5F22D9] dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          >
            {"Why Godrej Infotech"}
            <Icon
              path={mdiArrowRight}
              style={{ marginLeft: "0.5em", marginTop: "1px" }}
              size={1}
            />
          </Link>
          <Link
            href={""}
            target="_blank"
            className="text-white mt-10 md:my-10 inline-flex items-center transition-all bg-[#5F22D9] hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-base px-8 py-3 me-2 dark:bg-[#5F22D9] dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          >
            {"Join Our Team"}
            <Icon
              path={mdiArrowRight}
              style={{ marginLeft: "0.5em", marginTop: "1px" }}
              size={1}
            />
          </Link>
        </div>
      </BlogSection>
      {/* @ts-ignore */}
      <ReviewSliderSection
        ID={"TESTIMONIALS"}
        Heading={"Delighted Customers share their Successful Experience"}
        Desc={""}
        Color="#ffffff"
        CardDataList={TESTIMONIAL_DATA}
        BGColor="#1D162B"
      ></ReviewSliderSection>

      <TransformBusinessForm
        Title={"Transform your Business with Us"}
        Desc={
          "Let’s discuss how digital transformation solutions can help you with rapid growth."
        }
      ></TransformBusinessForm>

      {/* <Footer /> */}

      {/* readmore modal */}
      <Dialog
        shouldShow={showReadMoreModal}
        onRequestClose={() => {
          setShowReadMoreModal((prev) => !prev);
        }}
        title={'About Us'}
      >
        <div className="py-10">
          <p className="mb-4">Based out of Texas, USA, GIA is one of the leading IT service providers specializing in End-to-End IT solutions. We are an automation-driven, cloud and digital transformation solutions and services company.  Our service offerings include Business Consulting, ERP Implementation & Roll Out, Web Application Development, Integration, Digital Transformation, Analytical Services, Mobile Application Development, Infrastructure Management, e-Commerce and Managed Support Services. We have domain and technology expertise in the Manufacturing, Retail, Trading &Distribution, Retail, Logistics, Hospitality, Project and Professional Service industries. </p>
          <p className="mb-4">GITL&#39;s Strategic partnership with industry leaders like Microsoft, Infor, LS Retail, and Oracle have played an instrumental role in making the organization a mature IT partner that understands the value of business process automation. Headquartered in Mumbai, India, GITL has presence in Middle East, APAC, Europe and US with customer footprints extending across multiple geographies. </p>
          <p>A technology focused organization, Godrej Infotech has emerged as a pioneer in the Digital Solutions space. Our team of knowledge experts provide ready-to-deploy and customizable IT-solutions for individual business functions like Enterprise Resource Planning (ERP), Customer Relationship Management, Product Life Cycle Management, Asset Management and Business Intelligence (BI). We also have a Remote Infrastructure Management team that works as an extended IT arm for their clients and provides skilled IT proactive services of Azure Cloud, Database, Network, System and Security Administration. </p>
        </div>
      </Dialog>

      {/* readmore modal */}
      {/* modal */}
      <Dialog
        shouldShow={showModal1}
        onRequestClose={() => {
          setshowModal1((prev) => !prev);
        }}
        title={businessItem.cardHeading}
      >
        <div className="py-10">
          <div dangerouslySetInnerHTML={{ __html: businessItem?.rawData }} />
        </div>
      </Dialog>
      {/* end modal */}
    </>
  );
}

const ServiceContent = () => {
  const services = [
    "Business Consulting",
    "Implementation & Global Rollout",
    "Migration & Transformation",
    "Legacy Modernisation",
    "Infrastructure as a Service",
    "Managed Services",
  ];
  return (
    <div className="grid grid-cols-2 gap-20 h-full">
      <div className="py-10 px-10">
        {services.map((item) => (
          <>
            <div
              className="list text-[22px] py-4 flex justify-between"
              style={{ borderBottom: "1px solid #d3d3d3" }}
            >
              {item}
              <Image
                width={35}
                height={35}
                src="/homeNew/chevron-right.svg"
                alt="char"
              ></Image>
            </div>
          </>
        ))}
      </div>
      <div
        className="relative"
        style={{
          backgroundImage: `url(/homeNew/tab1.svg)`,
          backgroundSize: "cover",
        }}
      ></div>
    </div>
  );
};

const IndustryContent = () => {
  const data = [
    "Manufacturing",
    "Retail",
    "Project",
    "Trading & Distribution",
    "Professional Service",
    "Healthcare",
    
  ];

  return (
    <div className="grid grid-cols-2 gap-20 h-full">
      <div className="py-10 px-10">
        {data.map((item) => (
          <>
            <div
              className="list text-[22px] py-4 flex justify-between"
              style={{ borderBottom: "1px solid #d3d3d3" }}
            >
              {item}
              <Image
                width={35}
                height={35}
                src="/homeNew/chevron-right.svg"
                alt="char"
              ></Image>
            </div>
          </>
        ))}
      </div>
      <div
        className="relative"
        style={{
          backgroundImage: `url(/homeNew/tab1.svg)`,
          backgroundSize: "cover",
        }}
      ></div>
    </div>
  );
};

const ParternerContent = () => {
  const data = [
    "Microsoft  ",
    "Infor  ",
    "Oracle  ",
    "Hexagon EAM  ",
  ];

  return (
    <div className="grid grid-cols-2 gap-20 h-full">
      <div className="py-10 px-10">
        {data.map((item) => (
          <>
            <div
              className="list text-[22px] py-4 flex justify-between"
              style={{ borderBottom: "1px solid #d3d3d3" }}
            >
              {item}
              <Image
                width={35}
                height={35}
                src="/homeNew/chevron-right.svg"
                alt="char"
              ></Image>
            </div>
          </>
        ))}
      </div>
      <div
        className="relative"
        style={{
          backgroundImage: `url(/homeNew/tab1.svg)`,
          backgroundSize: "cover",
        }}
      ></div>
    </div>
  );
};
