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
import { mdiArrowTopRight } from "@mdi/js";
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
      desc: "Be a world class provider of high-quality Information’s & Technology solutions.",
    },
    {
      id: 2,
      title: "Mission",
      desc: "Beyond Business through integrated IT solutions.",
    },
    {
      id: 3,
      title: "Values",
      desc: "Integrity, Responsiveness, Commitment, Teamwork",
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
      pageURL: "http://google.com"
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
      pageURl: "http://google.com"
    },
    {
      id: 3,
      cardBGImageUrl:
        "/industry-spotlight/cards-backgrounds/card-bg--trading-and-distribution.png",

      cardBGColor: "#7F4EE1",
      cardHeading: "Testimonials ",
      cardDesc: "",
      isArrow: true,
      cardTextColor: "white",
      pageURL: "http://google.com"
    },
    {
      id: 4,
      cardBGImageUrl:
        "/industry-spotlight/cards-backgrounds/card-bg--trading-and-distribution.png",

      cardBGColor: "#7F4EE1",
      cardHeading: "Success Stories ",
      cardDesc: "",
      isArrow: true,
      cardTextColor: "white",
      pageURL: "http://google.com"
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
      content: "AUTOMATION  ",
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
      title: "Industry Spotlight",
      value: "industryspotlight",
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
      heading: "Increased Efficiency",
      description:
        "Belgium based Global Manufacturer of Sheet Metal Forming Machines Implements Infor LN",
      link: "case-studies/case-study-87?type=Transformation",
      color: "#000",
      bgCardColor: "#FCE6F4",
    },

    {
      imageURL: "/path/to/image1.jpg",
      title: "",

      heading: "Streamlined Operations",
      description:
        "Europe's Leading Machine Manufacturer Automates Operations with Integrated Infor LN 10.4 Solution",
      link: "case-studies/case-study-9?type=Transformation",
      color: "#000",
      bgCardColor: "#EFE9FB",
    },
    {
      imageURL: "/CloudStackServices/case-studies/bg--electical-devices.png",
      title: "",
      heading: "Optimised Operations",
      description:
        "Global Leader in Industrial Packaging Products and Services company signs contract for Infor LN rollout & support activities",
      link: "",
      color: "#000",
      bgCardColor: "#E1F2EF",
    },

    {
      imageURL: "/CloudStackServices/case-studies/bg--electical-devices.png",
      title: "",
      heading: "Optimise 25% Operational Cost",
      description:
        "Europe’s Leading Maritime Service Provider Increases Efficiency with Infor Managed Services ",
      link: "case-studies/case-study-3?type=Transformation",
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
      cardHeading: "3.	Successful Migration to Infor CloudSuite ",
      cardDesc: `Successful migration from on-premises to multi-tenant environment with minimal issues, thanks to Godrej Infotech's dedicated resources, expertise, and support. Their timely assistance ensures seamless customization, data migration, and end-user support. `,
      designation: "- IT Manager",
      companyName: "Leading Dredging and Maritime Service Provider",
    },
  ];

  const BusinessTransformationDrive_DATA = [
    {
      id: 1,
      cardTitle: "",
      cardHeading: "Embrace Tomorrow with AUTOMATION",
      cardDesc:
        "Enabling organizations to optimize cost & enhance business processes with next-gen digital technologies like Robotic Process Automation (RPA), IoT & Analytics.",
        cardBgImg: "/home/images/card1.webp",
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
              Technology Suite
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
    },
    {
      id: 2,
      cardTitle: "",
      cardHeading: "Cloud Enables New Possibilities",
      cardDesc:
        "We are committed to provide, secure, cost-effective & scalable cloud implementation, cloud migration & cloud support services to our customers. ",
        cardBgImg: "/home/images/card2.webp",
        rawData: `<div class="grid grid-cols-2 gap-4">
            <div>
              <div class="text-[40px] font-semibold mb-12">
             Upgrade to Cloud
              </div>
              <p class="text-[22px] font-medium mb-8">Dynamics AX Upgrade</p>
              <p class="text-[22px] font-medium mb-8">Dynamics NAV Upgrade</p>
              <p class="text-[22px] font-medium mb-8">Upgrade to Infor LN Cloud</p>
              <p class="text-[22px] font-medium mb-8">Migrate Applications to Cloud</p>
              <p class="text-[22px] font-medium mb-8">Lift and Shift to Cloud</p>
            </div>
            <div>
              <div class="text-[40px] font-semibold mb-12">
              Cloud Solution and Services
              </div>
              <p class="text-[22px] font-medium mb-8">Cloud Infrastructure </p>
              <p class="text-[22px] font-medium mb-8">Business Apps on Cloud</p>
              <p class="text-[22px] font-medium mb-8">M365 Services</p>
              <p class="text-[22px] font-medium mb-8">Data Analytics </p>
            </div>
            <div>
          </div>`,
    },
    {
      id: 3,
      cardTitle: "",
      cardHeading:
        "Future-Proof Transformation Solutions",
      cardDesc:
        "We implement digital solutions that modernize and enhance user experience, ultimately leading to a digitally- sound businesses.",
        cardBgImg: "/home/images/card3.webp",
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
        <p class="text-[22px] font-medium mb-8">Salesforce CRM</p>
        <p class="text-[22px] font-medium mb-8">LS Retail</p>
        <p class="text-[22px] font-medium mb-8">Magento Ecommerce</p>

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
      desc: "- Analytical financial reporting leveraged by management with D365 F&O on Cloud for non-profit, industry managed organisation. ",
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

  function handleReadMoreClick() {
    setShowReadMoreModal(true);
  }

  // end handle click businesstranform card click
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
        "Boskalis Signs 5 years of renewal contract after a successful 3-year relationship with Godrej Infotech for Infor Products & Services ",
      cta: "",
      targetBlank: true,
      link: "/",
    },

  ]

  return (
    <>
      <Announcement content={announcemnetData} country={'BE'} />
      <div className={`sticky top-0 w-full z-[500]`}>
        <NewNavBar />
      </div>
      {/* banner slider */}
      <div className="slider-wrapper bg-black h-[95vh] md:h-[90vh] -mt-10">
        <div className="video relative h-full">
          {/* Background Video */}
          <video
            src="/home/1.mp4"
            autoPlay
            loop
            muted
            className="absolute inset-0 w-full h-full object-cover"
          ></video>

          {/* Overlay Image */}
          <div
            className={`absolute inset-0 transition duration-700 ${sliderImageUrl
                ? "opacity-100 ease-in-out"
                : "opacity-0 ease-in-out"
              }`}
            style={{
              backgroundImage: `url(${sliderImageUrl})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>

          {/* Headline */}
          <div className="container headline-position mx-auto text-display-01 text-white absolute top-[20%] left-0 right-0 text-left ">
            Delivering Business
            <br /> value with
            {items4[index] && (
              <motion.div
                key={`item4-${items4[index].id}`}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ ease: "easeInOut", duration: 0.5, delay: 0.2 }}
                className="inline-block"
              >
                <span className="text-neutral-white md:ml-2">
                  {items4[index].content}.
                </span>
              </motion.div>
            )}
          </div>

          {/* Horizontal Line */}
          <hr className="absolute top-[50vh] md:top-[55vh] left-0 right-0 h-px bg-white bg-opacity-20 border-0"></hr>

          {/* Slider Section */}
          <div className="container mx-auto absolute w-full left-0 right-0 bottom-[10vh] ">
            <div className="flex flex-wrap justify-between items-center">
              {/* Slider Content */}
              <div className="w-full md:w-[80%]">
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
                      <div className="w-full py-6 md:py-2 xl:py-2 bg-transparent rounded-3xl">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <motion.div
                            ref={ref}
                            whileInView={{ y: 0, opacity: 1 }}
                            initial={{ y: 100, opacity: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                          >
                            <div className="text-heading-04 font-bold text-neutral-white">
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
                            <p className="text-body-01 text-white mb-6 md:mb-4">
                              {item.desc}
                            </p>
                            <button
                              type="button"
                              className="text-body-01 text-neutral-white border border-white  hover:bg-neutral-white hover:text-primary-900 rounded-full px-4 py-2"
                              onMouseOver={() =>
                                handleReadMoreHover(item, true)
                              }
                              onMouseOut={() =>
                                handleReadMoreHover(item, false)
                              }
                            >
                              Read more
                            </button>
                          </motion.div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              {/* Slider Navigation Buttons */}
              <div className="w-full absolute left-[-1rem] top-[1rem] md:w-[20%] md:relative md:left-0 md:right-0 flex justify-end space-x-4 md:p-6">
                <button className="swiper-button-prev flex items-center justify-center !left-0 w-14 h-14">
                  <Image
                    src="/homeNew/btn-arrows-left.svg"
                    alt="Prev"
                    width={56}
                    height={56}
                  />
                </button>
                <button className="swiper-button-next flex items-center justify-center w-14 h-14">
                  <Image
                    src="/homeNew/btn-arrows-right.svg"
                    alt="Next"
                    width={56}
                    height={56}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*  */}
      <div className="bg-white relative z-10"  style={{
          borderBottomLeftRadius: "24px",
          borderBottomRightRadius: "24px",
        }}>
        <div className="container mx-auto pt-40 relative">
          <div
            className="absolute"
            style={{
              left: "50%",
              transform: "translateX(-50%)",
              backgroundSize: "cover",
              background: "url('/homeNew/Union.svg')",
              backgroundRepeat: "no-repeat",
              width: "320px",
              height: "-webkit-fill-available",
              top: "-77px",
              overflow: "hidden",
            }}
          >
            <Image
              className="absolute rotating"
              style={{
                left: "30%",
                transform: "translateX(-50%)",
                top: "11px",
              }}
              src={"/homeNew/partner-circle.svg"}
              width={130}
              height={130}
              alt="asdjn"
            />
          </div>
          <div className="pb-4">
            <p className="text-[#1D162B] text-heading-03 font-medium mb-4">
              {`Godrej Infotech (Netherlands Branch) is a fully owned subsidiary of Godrej Infotech Limited (GITL) which is based in Mumbai, India. A leading IT service provider specializing in end-to-end IT solutions, GITL is part of the USD 1.7 Billion Godrej Enterprise Group.`}
            </p>
            <button
              type="button"
              onClick={() => handleReadMoreClick()}
              className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2"
            >
              Read more
            </button>
          </div>
        </div>
      </div>

      {/* video */}
      <div className="h-[75vh] w-full -mt-5">
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
        bgColor={"bg-white"}
        style={{}}
      />

      <SectionWrapperNew
        sectionHeading={"ACT based Approach for Leading Future Ready Business"}
        sectionDesc={"Value - Driven Solutions for Tomorrow's Opportunities"}
        sectionTextColor="text-primary-900"
        sectionDescColor="text-neutral-darkest-grey"
        sectionHeadingLayout="horizontal"
        title="Business Transformation Drive"
        bgColor={"bg-primary-600"}
        style={{
          backgroundColor: "white",
          position: "relative",
          zIndex: "2",
        }}
      >
        <Slider slidesPerView={3}>
          {BusinessTransformationDrive_DATA.map((item, index) => (
            <SwiperSlide key={index}>
              <div
                className="p-5 bg-[#5F22D9] rounded-3xl md:min-h-[525px]"
                style={{
                  backgroundImage: `url(${item.cardBgImg})`,
                  backgroundSize: "cover",
                  backgroundPosition: "bottom center",
                }}
              >
                {item?.cardTitle && (
                  <div className="text-body-01 text-neutral-white mb-[100px] ">
                    {item?.cardTitle}
                  </div>
                )}
                <div className="my-5 text-heading-02 text-neutral-white min-h-[150px]">
                  {item.cardHeading}
                </div>
                <div className="mb-8 text-body-01 text-neutral-white min-h-[75px]">
                  {item.cardDesc}
                </div>
                <div className="flex justify-end right-0 bottom-0">
                  {/* setshowModal1((prev) => !prev) */}
                  <OutlinedButtonWithArrow
                    arrowColor={"white"}
                    size={32}
                    onClick={() => handleBusinessCardClick(true, item)}
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Slider>
      </SectionWrapperNew>

      {/* offerings */}
      <SectionWrapperNew
        bgColor={"bg-neutral-white"}
        sectionHeading={"Capabilities and Expertise"}
        sectionDesc={
          "Delivering transformative results with our industry knowledge, strategic partnership and end-to-end service offerings."
        }
        sectionTextColor="text-primary-900"
        sectionDescColor="text-neutral-dark-grey"
        title="Count on Us"
        sectionHeadingLayout="center"
      >
        <div className="h-[724px] md:h-[724px] [perspective:1000px] relative b flex flex-col mx-auto w-full  items-start justify-start my-0">
          <Tabs
            activeTabClassName="!bg-[#f2f2f2] !text-[#fff]"
            contentClassName="!mt-5"
            tabClassName="!px-4 hover:bg-[#CDBAF3] hover:text-[#fff]"
            containerClassName="!my-2"
            tabs={tabs}
          />
        </div>
      </SectionWrapperNew>


      {/* end offerings */}
      {/* guiding section */}
      <SectionWrapperNew style={{ backgroundColor: "#000" }}
        sectionHeading="The Guiding Principles We Live By"
        sectionDesc={`Driven by our principles, we strive to make a difference in every we do, building value and enhancing growth.`}
        sectionTextColor='text-neutral-white'
        sectionDescColor='text-neutral-white'
        sectionHeadingLayout="center"
      >

        <Slider>
          {GuidingPrinciples.map((item, index) => (
            <SwiperSlide key={index}>
              <div class="p-2 sm:p-6 bg-[transparent]">
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
        Color={"text-neutral-white"}
        readMoreUrl={""}
      >
        <div className="z-50 flex gap-4 flex-col items-left align-middle justify-left sm:flex-row sm:justify-start md:justify-start mt-6">
          <Link
            href={`/careers/why-join-us`}
            className="text-neutral-white text-body-01 flex items-center bg-primary-400 hover:bg-primary-500 rounded-full px-8 py-3 mb-2 group"
          >
            {"Why Godrej Infotech"}
            <div className="transition-transform duration-300 ease-in-out transform group-hover:translate-x-2">
              <Icon
                path={mdiArrowTopRight}
                style={{
                  marginLeft: "0.5em",
                  transform: "rotate(45deg)",
                  marginTop: "1px",
                }}
                size={1}
              />
            </div>
          </Link>
          <Link
            href={"careers/we-are-hiring"}
            className="text-neutral-white text-body-01 flex items-center bg-primary-400 hover:bg-primary-500 rounded-full px-8 py-3 mb-2 group"
          >
            {"Join Our Team"}
            <div className="transition-transform duration-300 ease-in-out transform group-hover:translate-x-2">
              <Icon
                path={mdiArrowTopRight}
                style={{
                  marginLeft: "0.5em",
                  transform: "rotate(45deg)",
                  marginTop: "1px",
                }}
                size={1}
              />
            </div>
          </Link>
        </div>
      </BlogSection>
      {/* @ts-ignore */}
      <ReviewSliderSection
        ID={"TESTIMONIALS"}
        Heading={"Customers Share their Successful Experiences"}
        Desc={""}
        Color="text-neutral-white"
        CardDataList={TESTIMONIAL_DATA}
        BGColor="bg-primary-900"
      ></ReviewSliderSection>

      <TransformBusinessForm
        Title={"Transform your Business with Us"}
        Desc={
          "Let’s discuss how digital transformation solutions can help you with rapid growth."
        }
      ></TransformBusinessForm>

      {/* <Footer /> */}


      <Dialog
        shouldShow={showReadMoreModal}
        onRequestClose={() => {
          setShowReadMoreModal((prev) => !prev);
        }}
        title={'About Us'}
      >
        <div className="py-10">
          <p className="mb-4">We are an automation-driven, cloud and digital transformation solutions and services company.  Our service offerings include Business Consulting, ERP Implementation & Roll Out, Web Application Development, Integration, Digital Transformation, Analytical Services, Mobile Application Development, Infrastructure Management, e-Commerce and Managed Support Services. We have domain and technology expertise in the Manufacturing, Retail, Trading &Distribution, Retail, Logistics, Hospitality, Project and Professional Service industries. </p>
          <p className="mb-4">GITL&#39;s Strategic partnership with industry leaders like Microsoft, Infor, LS Retail, and Oracle have played an instrumental role in making the organization a mature IT partner that understands the value of business process automation. Headquartered in Mumbai, India, GITL has presence in Middle East, APAC, Europe and US with customer footprints extending across multiple geographies.</p>
          <p>A technology focused organization, Godrej Infotech has emerged as a pioneer in the Digital Solutions space. Our team of knowledge experts provide ready-to-deploy and customizable IT-solutions for individual business functions like Enterprise Resource Planning (ERP), Customer Relationship Management, Product Life Cycle Management, Asset Management and Business Intelligence (BI). We also have a Remote Infrastructure Management team that works as an extended IT arm for their clients and provides skilled IT proactive services of Azure Cloud, Database, Network, System and Security Administration.</p>
        </div>
      </Dialog>

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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-20 h-full">
      <div className="px-5 py-8">
        {services.map((item) => (
          <>
            <div
              className="list text-heading-04 py-3 flex justify-between border-b border-gray-300 last:border-b-0"
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
        className="relative invisible md:visible"
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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-20 h-full">
      <div className="px-5 py-8">
        {data.map((item) => (
          <>
            <div
              className="list text-heading-04 py-3 flex justify-between border-b border-gray-300 last:border-b-0"
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
        className="relative invisible md:visible"
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
    "Hexagon EAM ",
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-20 h-full">
      <div className="px-5 py-8">
        {data.map((item) => (
          <>
            <div
              className="list text-heading-04 py-3 flex justify-between border-b border-gray-300 last:border-b-0"
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
        className="relative invisible md:visible"
        style={{
          backgroundImage: `url(/homeNew/tab1.svg)`,
          backgroundSize: "cover",
        }}
      ></div>
    </div>
  );
};
