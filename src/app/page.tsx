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
import NewNavBar from "@/components/NewNavBar";
import { mdiArrowTopRight } from "@mdi/js";

export default function Home() {
  const ref1 = useRef<HTMLDivElement>(null);
  const ref2 = useRef<HTMLDivElement>(null);
  const ref3 = useRef<HTMLDivElement>(null);
  const ref4 = useRef<HTMLDivElement>(null);

  const count1 = useScrollTriggeredCountUp(ref1, 25); // Count-up from 0 to 25
  const count2 = useScrollTriggeredCountUp(ref2, 500); // Count-up from 0 to 500
  const count3 = useScrollTriggeredCountUp(ref3, 15); // Count-up from 0 to 15000 (15k)
  const count4 = useScrollTriggeredCountUp(ref4, 1000); // Count-up from 0 to 15000 (15k)

  const [showModal1, setshowModal1] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.1, // Trigger when 10% of the component is in view
  });
  const items = [
    { id: 1, content: "Healthcare" },
    { id: 2, content: "Professional Service" },
    { id: 3, content: "Retail" },
    { id: 4, content: "Manufacturing" },
    { id: 5, content: "Project" },
  ];

  const items2 = [
    { id: 6, content: "AI powered Care" },
    { id: 7, content: "Automation" },
    { id: 8, content: "Ecommerce" },
    { id: 9, content: "Smart Factory" },
    { id: 10, content: "Cloud ERP" },
  ];

  const items3 = [
    { id: 11, content: "Quality" },
    { id: 12, content: "Competitiveness" },
    { id: 13, content: "Customer Centricity" },
    { id: 14, content: "Agility" },
    { id: 15, content: "Project Visibility" },
  ];
  const items4 = [
    { id: 16, content: "Automation" },
    { id: 17, content: "Cloud" },
    { id: 18, content: "Transformation" },
  ];

  const tabs = [
    {
      title: "Services",
      value: "services",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-3xl text-body-01 text-primary-900 bg-[#FCE6F4]">
          <ServiceContent />
        </div>
      ),
    },
    {
      title: "Industries",
      value: "industries",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-3xl text-body-01 text-primary-900 bg-[#FCE6F4]">
          <IndustryContent />
        </div>
      ),
    },
    {
      title: "Partners",
      value: "partners",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-3xl text-body-01 text-primary-900 bg-[#FCE6F4]">
          <ParternerContent />
        </div>
      ),
    },
  ];
  const blogImageUrl = "/home/images/blogBg.webp";

  const partnerLogo = [
    "/homeNew/partner1.svg",
    "/homeNew/partner2.svg",
    "/homeNew/partner3.svg",
    "/homeNew/partner1.svg",
    "/homeNew/partner2.svg",
    "/homeNew/partner3.svg",
    "/homeNew/partner1.svg",
  ];

  const CASE_STUDIES_DATA = [
    {
      imageURL: "/home/images/caseStudyleft.webp",
      videoURL: "/CloudStackServices/case-studies/bg--video-industry.mp4",
      title: "Case Studies",
      heading: "Delivering Results that Matter",
      description:
        "World's top-notch businesses choose us for our industry knowledge and excellent technical acumen as we deliver high performing solutions across the spectrum of industries.",
      link: "",
      color: "#FFFFFF",
    },
    {
      imageURL: "",
      title: "",
      heading: "Speedy Analytics Report Generation",
      description:
        "India's leading TV audience measurement firm employs calibrated RPA bots, reducing manual tasks of channel metrics, efficiently sharing results with stakeholders and saving consultant hours.",
      link: "https://www.godrejinfotech.com/assets/pdf/case-studies/Manufacturer-Electrical-components-Automobile.pdf ",
      color: "#000",
      bgCardColor: "#FCE6F4",
    },

    {
      imageURL: "/path/to/image1.jpg",
      title: "",

      heading: "Positive ROI with Cloud Transition",
      description:
        "Prominent American watch and lifestyle distribution organization achieves increase in uptime, seamless management, positive ROI and enhanced data durability and reliability by transitioning to Azure through a Lift and Shift approach.",
      link: "https://www.godrejinfotech.com/assets/pdf/case-studies/Infor-LN-India-Localization.pdf",
      color: "#000",
      bgCardColor: "#EFE9FB",
    },
    {
      imageURL: "",
      videoURL: "/home/videos/homeCaseStudy.mp4",
      title: "",
      heading: "Infor CloudSuite Managed Support Services ",
      description:
        "Germany based Automotive Company navigates system complexities and optimizes efficiency with Infor CloudSuite automotive support services from Godrej Infotech",
      link: "/case-study-1",
      color: "#000",
      bgCardColor: "#E1F2EF",
    },
    // Add more case studies here...
  ];

  const TESTIMONIAL_DATA: any = [
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
      cardHeading: "Salesforce Implementation within Tight Deadline",
      cardDesc: `Salesforce Sales Cloud implementation connected out complete lead-to-order cycle in customers' journey. GITL team proved their Infor LN expertise and project management abilities by achieving highly challenging deadline. `,
      designation: "- Operations Head",
      companyName: `India's Security Solutions Company`,
    },
  ];

  const BusinessTransformationDrive_DATA = [
    {
      id: 1,
      cardTitle: "",
      cardHeading: "Embrace Tomorrow with Automation",
      cardDesc:
        "Accelerate operations, drive innovation and increase accuracy with AI powered solutions",
      cardBgImg: "/home/images/card1.webp",
      rawData: `<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <div class="text-body-01 leading-body-01 font-semibold mb-4">
              Intelligent Technologies
              </div>
              <p class="text-body-01 font-medium mb-2">Artificial Intelligence & Machine Learning</p>
              <p class="text-body-01 font-medium mb-2">RPA</p>
              <p class="text-body-01 font-medium mb-2">IIoT</p>
            </div>
            <div>
              <div class="text-body-01 leading-body-01 font-semibold mb-4">
              Tech Stack
              </div>
              <p class="text-body-01 font-medium mb-2">Java </p>
              <p class="text-body-01 font-medium mb-2">.Net, SharePoint</p>
              <p class="text-body-01 font-medium mb-2">Low code application development</p>
            </div>
            <div>
              <div class="text-body-01 leading-body-01 font-semibold mb-4">
              Data Insights
              </div>
              <p class="text-body-01 font-medium mb-2">Power BI and Power Apps</p>
              <p class="text-body-01 font-medium mb-2">Birst</p>
              <p class="text-body-01 font-medium mb-2">Tableau</p>
              <p class="text-body-01 font-medium mb-2">Azure and AWS data management </p>

            </div>
          </div>`,
    },
    {
      id: 2,
      cardTitle: "",
      cardHeading: "Cloud Enables New Possibilities",
      cardDesc:
        "Leverage secure and cost-effective cloud solutions to improve business scalability, collaboration and agility",
      cardBgImg: "/home/images/card2.webp",
      rawData: `<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <div class="text-body-01 leading-body-01 font-semibold mb-4">
             Upgrade to Cloud
              </div>
               <p class="text-body-01 font-medium mb-2">Dynamics AX Upgrade</p>
               <p class="text-body-01 font-medium mb-2">Dynamics NAV Upgrade</p>
               <p class="text-body-01 font-medium mb-2">Upgrade to Infor LN</p>
               <p class="text-body-01 font-medium mb-2">Migrate Applications to Cloud</p>
               <p class="text-body-01 font-medium mb-2">Lift and Shift to Cloud</p>
            </div>
            <div>
              <div class="text-body-01 leading-body-01 font-semibold mb-4">
              Cloud Solution and Services
              </div>
               <p class="text-body-01 font-medium mb-2">Cloud Infrastructure </p>
               <p class="text-body-01 font-medium mb-2">Business Apps on Cloud</p>
               <p class="text-body-01 font-medium mb-2">M365 Services</p>
            </div>
            <div>
          </div>`,
    },
    {
      id: 3,
      cardTitle: "",
      cardHeading: "Future Focused Transformation Solutions",
      cardDesc:
        "Enhance business productivity and modernize stakeholder experience with streamlined operations",
      cardBgImg: "/home/images/card3.webp",
      rawData: `<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <div class="text-body-01 leading-body-01 font-semibold mb-4">
      Enterprise Suite
        </div>
         <p class="text-body-01 font-medium mb-2">Microsoft Dynamics 365</p>
         <p class="text-body-01 font-medium mb-2">Infor</p>
         <p class="text-body-01 font-medium mb-2">Oracle</p>
         <p class="text-body-01 font-medium mb-2">Hexagon EAM</p>
      </div>
      <div>
        <div class="text-body-01 leading-body-01 font-semibold mb-4">
        Customer Experience
        </div>
         <p class="text-body-01 font-medium mb-2">Microsoft CRM </p>
         <p class="text-body-01 font-medium mb-2">Infor CRM</p>
         <p class="text-body-01 font-medium mb-2">Salesforce</p>
         <p class="text-body-01 font-medium mb-2">LS Retail</p>
         <p class="text-body-01 font-medium mb-2">Ecommerce</p>

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
      url: "/home/images/Automation.webp",
    },
    {
      id: 2,
      title: "Cloud Project Insight",
      desc: "- Analytical financial reporting leveraged by management with D365 F&O on Cloud for non-profit, industry managed organisation. ",
      url: "/home/images/Cloud.webp",
    },
    {
      id: 3,
      title: "Transformation Project Insight",
      desc: "8 years of Infor managed support services and migration for MT Infor cloud optimises operational cost by 25 for Europe's maritime service provider",
      url: "/home/images/Transformation.webp",
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
    rawData: `<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
  <!-- Column 1 -->
  <div>
    <div class="text-body-01 leading-body-01font-semibold mb-6 lg:mb-12">
      Intelligent Technologies
    </div>
    <p class="text-body-01 leading-body-01  font-medium mb-4">Artificial Intelligence & Machine Learning</p>
    <p class="text-body-01 leading-body-01  font-medium mb-4">RPA</p>
    <p class="text-body-01 leading-body-01  font-medium mb-4">IIoT</p>
  </div>

  <!-- Column 2 -->
  <div>
    <div class="text-body-01 leading-body-01font-semibold mb-6 lg:mb-12">
      Tech Stack
    </div>
    <p class="text-body-01 leading-body-01  font-medium mb-4">Java</p>
    <p class="text-body-01 leading-body-01  font-medium mb-4">.Net, SharePoint</p>
    <p class="text-body-01 leading-body-01  font-medium mb-4">Low code application development</p>
  </div>

  <!-- Column 3 -->
  <div>
    <div class="text-body-01 leading-body-01font-semibold mb-6 lg:mb-12">
      Data Insights
    </div>
    <p class="text-body-01 leading-body-01  font-medium mb-4">Power BI and Power Apps</p>
    <p class="text-body-01 leading-body-01  font-medium mb-4">Birst</p>
    <p class="text-body-01 leading-body-01  font-medium mb-4">Tableau</p>
    <p class="text-body-01 leading-body-01  font-medium mb-4">Azure and AWS data management</p>
  </div>
</div>
`,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 5000);
    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [items.length]);

  // banner Hover ReadMore
  function handleReadMoreHover(item: any, isFilled: boolean) {
    if (isFilled) {
      setSliderImageUrl(item.url);
    } else {
      setSliderImageUrl("");
    }
  }
  // end banner Hover ReadMore

  // handle click businesstranform card click
  function handleBusinessCardClick(modal: boolean, item: any) {
    setshowModal1(modal);
    setBusinessItem(item);
  }

  // end handle click businesstranform card click

  return (
    <>
      <Announcement content={""} country={"IN"} />
      <div className={`relative z-[500]`}>
        <div className={`absolute w-full  `}>
          <NewNavBar></NewNavBar>
        </div>
      </div>
      {/* banner slider */}
      <div className="slider-wrapper bg-black h-[95vh] md:h-[90vh]">
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
      className={`absolute inset-0 transition duration-700 ${
        sliderImageUrl ? "opacity-100 ease-in-out" : "opacity-0 ease-in-out"
      }`}
      style={{
        backgroundImage: `url(${sliderImageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    ></div>

    {/* Headline */}
    <div className="container headline-position mx-auto text-display-01 leading-display-01 text-white absolute top-[20%] left-0 right-0 text-left ">
      Delivering Business<br /> value with
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
                        onMouseOver={() => handleReadMoreHover(item, true)}
                        onMouseOut={() => handleReadMoreHover(item, false)}
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

      {/* [partner Section] */}

      <div className="bg-white relative z-10">
        <div className="container mx-auto pt-40 pb-20 relative">
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
          <Slider slidesPerView={6} autoplay={true}>
            {partnerLogo?.map((item, index) => (
              <SwiperSlide key={index}>
                <Image
                  src={item}
                  width={100}
                  height={100}
                  alt="Logos"
                  className="brightness-110 hover:brightness-0 mb-6"
                />
              </SwiperSlide>
            ))}
          </Slider>
        </div>
      </div>

      {/* end partner Section */}
      <hr className="h-px bg-[#d3d3d3] border-1" />
      <div
        className=" relative z-2 bg-white"
        style={{
          borderBottomLeftRadius: "24px",
          borderBottomRightRadius: "24px",
        }}
      >
        <div className="container mx-auto py-32">
          <p className="text-body-01 text-neutral-dark-grey w-[214px] mb-5 md:mb-20">
            Strategic Digital Transformation across Industries
          </p>
          <div className="text-heading-01">
            Transform your{" "}
            {items[index] && (
              <motion.div
                key={`item-${items[index].id}`}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ ease: "easeInOut", duration: 0.5, delay: 0.1 }}
                style={{ display: "inline-block" }}
              >
                <span className="text-[#5F22D9] md:ml-2">
                  {items[index].content}
                </span>
              </motion.div>
            )}
            <br />
            business with{" "}
            {items2[index] && (
              <motion.div
                key={`item2-${items2[index].id}`}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ ease: "easeInOut", duration: 0.5, delay: 0.3 }}
                style={{ display: "inline-block" }}
              >
                <span className="text-[#5F22D9] md:ml-2">
                  {items2[index].content}
                </span>
              </motion.div>
            )}
            <br />
            enhancing{" "}
            {items3[index] && (
              <motion.div
                key={`item3-${items3[index].id}`}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ ease: "easeInOut", duration: 0.5, delay: 0.4 }}
                style={{ display: "inline-block" }}
              >
                <span className="text-[#5F22D9]">{items3[index].content}.</span>
              </motion.div>
            )}
          </div>
        </div>
      </div>
      {/* video */}
      <div className="h-[75vh] w-full -mt-5">
        <video
          src={"/home/videos/homePageVideo.mp4"} // Replace with your video path
          autoPlay
          loop
          muted
          className="inset-0 w-full h-full object-cover fixed -z-50"
        />
      </div>
      {/* video */}

      {/* innovative section */}
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
          height: "750px",
        }}
      >
        <Slider slidesPerView={3}>
          {BusinessTransformationDrive_DATA.map((item, index) => (
            <SwiperSlide key={index}>
              <div
                className="p-5 bg-[#5F22D9] rounded-3xl md:min-h-[525px]"
                style={{ backgroundImage: `url(${item.cardBgImg})` }}
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
      {/* end innovative section */}

      {/* hub of experties */}
      <SectionWrapperNew
        bgColor={"bg-primary-600"}
        sectionHeading={"Hub of Expertise"}
        sectionDesc={
          "We are here to build an edge and bring technology brilliance with the finest in industry"
        }
        sectionTextColor="text-neutral-white"
        sectionDescColor="text-neutral-white"
        sectionHeadingLayout="center"
        style={{
          background: `url(/homeNew/globe.svg), linear-gradient(360deg, #5F22D9 12.04%, #0c031f 57.96%)`,
          paddingTop: "350px",
          backgroundPosition: "bottom center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover", // Optional: ensures the image covers the div area
        }}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-16 ">
          <div className="" ref={ref1}>
            <h1 className="text-[56px] md:text-[72px] font-bold text-white">
              {count1}
              <sup className="text-normal">+</sup>
            </h1>
            <p className="text-body-01 text-primary-10">Years in Business</p>
          </div>
          <div className="" ref={ref2}>
            <h1 className="text-[56px] md:text-[72px] font-bold text-white">
              {count2}
              <sup>+</sup>
            </h1>
            <p className="text-body-01 text-primary-10">Customers Worldwide</p>
          </div>
          <div className="" ref={ref3}>
            <h1 className="text-[56px] md:text-[72px] font-bold text-white">
              {count3}k<sup>+</sup>
            </h1>
            <p className="text-body-01 text-primary-10">
              Man years of Experience
            </p>
          </div>
          <div className="" ref={ref4}>
            <h1 className="text-[56px] md:text-[72px] font-bold text-white">
              {count4}
              <sup>+</sup>
            </h1>
            <p className="text-body-01 text-primary-10">Implementation Sites</p>
          </div>
        </div>
      </SectionWrapperNew>
      {/* end hub of experties */}

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

      {/* @ts-ignore */}
      <CaseStudiesSection
        casestudy={CASE_STUDIES_DATA}
        csLayout={"5"}
        bgColor={"bg-primary-900"}
      />

      <BlogSection
        ID={"blog"}
        blogImageUrl={"/home/images/blogBg.webp"}
        Heading={"Step Up in Your Professional Journey"}
        Desc={
          "Work with talented professionals who inspire and support each other. Join our dynamic team and embark on a rewarding career journey that shapes your future. "
        }
        Color={"text-neutral-white"}
        
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
        Heading={"Delighted Customers Share Their Successful Experiences"}
        Desc={""}
        Color="text-neutral-white"
        CardDataList={TESTIMONIAL_DATA}
        BGColor="bg-primary-900"
        SectionHeadingMaxWidth={"w-1/2"}
      ></ReviewSliderSection>

      <TransformBusinessForm
        Title={"Transform your Business with Us"}
        Desc={
          "Let's discuss how our ACT (Automation, Cloud and Digital Transformation) solutions can help you with rapid growth."
        }
      ></TransformBusinessForm>

      {/* <Footer /> */}

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
          backgroundImage: `url(/home/images/Servives.webp)`,
          backgroundSize: "cover",
          backgroundPosition: "top center",
        }}
      ></div>
    </div>
  );
};

const IndustryContent = () => {
  const data = [
    "Manufacturing",
    "Retail",
    "Trading & Distribution",
    "Healthcare",
    "Professional Service",
    "Project",
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-20 h-full">
      <div className="px-5 py-8">
        {data.map((item) => (
          <>
         <div
  className="list text-heading-04 py-3 flex justify-between border-b border-gray-300 last:border-b-0"
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
          backgroundImage: `url(/home/images/Industry.webp)`,
          backgroundSize: "cover",
          backgroundPosition: "top center",
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
    "Salesforce  ",
    "LS Retail  ",
    "Automation Anywhere ",
    "Ui Path",
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-20 h-full">
       <div className="px-5 py-8">
        {data.map((item) => (
          <>
                 <div
  className="list text-heading-04 py-3 flex justify-between border-b border-gray-300 last:border-b-0"
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
          backgroundImage: `url(/home/images/Partners.webp)`,
          backgroundSize: "cover",
          backgroundPosition: "top center",
        }}
      ></div>
    </div>
  );
};
