"use client";
// system import
import Image from "next/image";
import { useRef } from "react";
import Slider from "@/components/Slider";
import SectionWrapperNew from "@/components/SectionWrapperNew";
import CaseStudiesSection from "@/sections/case-studies/CaseStudiesSection";
import BlogSection from "@/sections/blog/BlogSection";
import ReviewSliderSection from '@/sections/reviewSlider/ReviewSliderSection';
import TransformBusinessForm from "@/sections/transformBusinessFrom/TransformBusinessFromSection";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';
import Navbar from "@/components/Navbar/Navbar";
import { Tabs } from "@/components/ui/tabs";
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from 'react-intersection-observer';
import React, { useEffect, useState } from "react";
import OutlinedButtonWithArrow from "@/components/ui/buttons/OutlinedButtonWithArrow";
import Dialog from "@/components/Dialog";
import useScrollTriggeredCountUp from "@/components/home/useScrollTriggeredCountUp";
import Announcement from "@/sections/announcement/Announcement";
import Link from "next/link";
import Icon from "@mdi/react";
import { mdiArrowRight } from "@mdi/js";



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
    {
      id: 1,
      content: "Healthcare"
    },
    {
      id: 2,
      content: "Professional Service"
    },
    {
      id: 3,
      content: "Retail"
    },
    {
      id: 4,
      content: "Manufacturing"
    },
    {
      id: 5,
      content: "Project"
    }
  ];

  const items2 = [
    {
      id: 6,
      content: "AI powered Care"
    },
    {
      id: 7,
      content: "Automation"
    },
    {
      id: 8,
      content: "Ecommerce"
    },
    {
      id: 9,
      content: "Smart Factory"
    },
    {
      id: 10,
      content: "Cloud ERP"
    }
  ]

  const items3 = [
    {
      id: 11,
      content: "Quality"
    },
    {
      id: 12,
      content: "Competitiveness"
    },
    {
      id: 13,
      content: "Customer Centricity"
    },
    {
      id: 14,
      content: "Agility"
    },
    {
      id: 15,
      content: "Project Visibility"
    }
  ];

  const items4 = [
    {
      id: 17,
      content: "Automation  "
    },
    {
      id: 18,
      content: "Cloud"
    },
    {
      id: 19,
      content: "Transformation"
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
      title: "Industries",
      value: "industries",
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
  const blogImageUrl = "/home/images/blogBg.webp";

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
      imageURL: "/home/images/caseStudyleft.webp",
      videoURL: "/CloudStackServices/case-studies/bg--video-industry.mp4",
      title: "Case Studies",
      heading: "Delivering Results that Matter",
      description:
        "World's top-notch businesses choose us for our industry knowledge and excellent technical acumen as we deliver high performing solutions across the spectrum of industries.",
      link: "/case-study-1",
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
      id: '1',
      cardHeading: "79% Cut down in Purchase Order Processing",
      cardDesc: 'GITL helped us in accelerating digital transformation journey with Business Central on Azure cloud and Power BI solution. As a result, our material requisition efficiency has increased by 66%, time taken in processing purchase orders is reduced by 79% and invoice processing efficiency has improved by 60%.',
      designation: '-	IT Director,',
      companyName: 'Cooling Facility Management Company'
    },
    {
      id: '2',
      cardHeading: "Effective finance and budgeting management",
      cardDesc: 'GITL upgraded Dynamics AX to Business Central on SAAS - and integrated Power BI seamlessly. The upgradation to an all-inclusive solution significantly helped us in taking control over our finance and budgeting processes.',
      designation: '-	IT Director',
      companyName: 'Saudi Arabia’s Leading Engineering & Construction Service Provider',
    },
    {
      id: 3,
      cardHeading: "Salesforce Implementation within Tight Deadline",
      cardDesc: `Salesforce Sales Cloud implementation connected out complete lead-to-order cycle in customers' journey. GITL team proved their Infor LN expertise and project management abilities by achieving highly challenging deadline. `,
      designation: '- Operations Head',
      companyName: `India's Security Solutions Company`,
    },
  ];

  const BusinessTransformationDrive_DATA = [
    {
      id: 1,
      cardTitle: "",
      cardHeading: "Embrace Tomorrow with Automation",
      cardDesc: 'Accelerate operations, drive innovation and increase accuracy with AI powered solutions',
      cardBgImg:'/home/images/card1.webp',
      rawData: `<div class="grid grid-cols-3 gap-4">
            <div>
              <div class="text-[40px] font-semibold mb-12">
              Intelligent Technologies
              </div>
              <p class="text-[22px] font-medium mb-8">Artificial Intelligence & Machine Learning</p>
              <p class="text-[22px] font-medium mb-8">RPA</p>
              <p class="text-[22px] font-medium mb-8">IIoT</p>
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
              <p class="text-[22px] font-medium mb-8">Tableau</p>
              <p class="text-[22px] font-medium mb-8">Azure and AWS data management </p>

            </div>
          </div>`
    },
    {
      id: 2,
      cardTitle: "",
      cardHeading: "Cloud Enables New Possibilities",
      cardDesc: 'Leverage secure and cost-effective cloud solutions to improve business scalability, collaboration and agility',
      cardBgImg:'/home/images/card2.webp',
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
          </div>`
    },
    {
      id: 3,
      cardTitle: "",
      cardHeading: "Future Focused Transformation Solutions",
      cardDesc: 'Enhance business productivity and modernize stakeholder experience with streamlined operations',
      cardBgImg:'/home/images/card1.webp',
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
    </div>`
    },
  ]

  const sliderData = [
    { id: 1, title: 'Automation Project Insight', desc: "AI powered Computer vision saves 75% of monthly man hours with automated auditing for leading retailer", url: '/home/images/automation.webp' },
    { id: 2, title: 'Cloud Project Insight', desc: "- Analytical financial reporting leveraged by management with D365 F&O on Cloud for non-profit, industry managed organisation. ", url: '/home/images/Cloud.webp' },
    { id: 3, title: 'Transformation Project Insight', desc: "8 years of Infor managed support services and migration for MT Infor cloud optimises operational cost by 25 for Europe's maritime service provider", url: '/home/images/Transformation.webp' },

  ]

  const [sliderImageUrl, setSliderImageUrl] = useState('');
  const [index, setIndex] = useState(0);
  const [index2, setIndex2] = useState(0);
  const [businessItem, setBusinessItem] = useState({
    id: 1,
    cardTitle: "",
    cardHeading: "Embrace Tomorrow with AUTOMATION",
    cardDesc: 'Accelerate operations, drive innovation and increase accuracy with AI powered solutions',
    rawData: `<div class="grid grid-cols-3 gap-4">
          <div>
            <div class="text-[40px] font-semibold mb-12">
            Intelligent Technologies
            </div>
            <p class="text-[22px] font-medium mb-8">Artificial Intelligence & Machine Learning</p>
            <p class="text-[22px] font-medium mb-8">RPA</p>
            <p class="text-[22px] font-medium mb-8">IIoT</p>
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
        </div>`
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
  }, []);

  useEffect(() => {
    const id2 = setInterval(() => {
      setIndex2((state) => {
        if (state >= items4.length - 1) return 0;
        return state + 1;
      });
    }, 2500);
    return () => clearInterval(id2);
  }, []);
  // end animate text

  // banner Hover ReadMore
  function handleReadMoreHover(item: any, isFilled: boolean) {
    if (isFilled) {
      setSliderImageUrl(item.url)
    }
    else {
      setSliderImageUrl('')
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
      <Announcement content={''} country={'IN'} />
      <div className={`relative z-[500]`}>
        <div className={`absolute w-full  `}>
          <Navbar theme="light" />
        </div>
      </div>
      {/* banner slider */}
      <div className="slider-wrapper bg-black" style={{ height: '100vh' }}>
        <div className="video relative" style={{ height: 'inherit' }}>
          <video src="/home/1.mp4"
            autoPlay
            loop
            muted
            className="inset-0 w-full h-full object-cover"></video>
          <div className={` w-full h-full absolute top-0 transition duration-700  ${sliderImageUrl ? 'opacity-100 ease-in-out' : 'opacity-0 ease-in-out'}`} style={{
            backgroundImage: `url(${sliderImageUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}>

          </div>
          <div className="container mx-auto text-[76px] leading-[86px] text-white absolute" style={{ top: '30%', left: '0', right: '0' }}>
            Delivering Business<br></br> Value with
            <motion.div
              key={items4[index2]?.id}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ ease: "easeInOut", duration: 0.5, delay: 0.1 }}
              style={{ display: 'inline-block' }}
            >
              <span className="ml-2">{items4[index2]?.content}</span>
            </motion.div>
          </div>
          <hr className="h-px my-8 bg-[#e5e7eb5c] border-0 absolute" style={{ top: '55%', left: '0', right: '0' }}></hr>
          {/* slider */}
          <div className="container mx-auto h-60" style={{ position: "absolute", width: "100%", bottom: '0', left: 0, right: 0 }}>
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
                            <div className="text-[#fff] text-[20px] font-semibold ">{item.title}</div>
                          </motion.div>
                          <motion.div className="col-span-2"
                            ref={ref}
                            whileInView={{ y: 0, opacity: 1 }}
                            initial={{ y: 100, opacity: 0 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                          >
                            <div className="">
                              <p className="text-base font-medium leading-[24px] text-white mb-10">{item.desc}</p>
                              <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2" onMouseOver={() => handleReadMoreHover(item, true)} onMouseOut={() => handleReadMoreHover(item, false)}>Read more</button>
                            </div>
                          </motion.div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <div className="w-[30%] relative">
                <div className={`swiper-button-next`} style={{ width: '48px', height: '48px' }}>
                  <img src="/homeNew/btn-arrows-right.svg" alt="icon" />
                </div>
                <div className={`swiper-button-prev`} style={{ width: '48px', height: '48px', transform: "translateX(268px)", }}>
                  <img src="/homeNew/btn-arrows-left.svg" alt="icon" />
                </div>
              </div>
            </div>
          </div>
          {/*end slider */}
        </div>
      </div>
      {/* [partner Section] */}

      <div className="bg-white relative z-10">
        <div className="md:container mx-auto pt-40 pb-20 relative">
          <div className="absolute"
            style={{
              left: "50%",
              transform: "translateX(-50%)",
              backgroundSize: 'cover',
              background: "url('/homeNew/Union.svg')",
              backgroundRepeat: "no-repeat",
              width: '459px',
              height: "-webkit-fill-available",
              top: "-77px",
            }}>

            <Image className="absolute rotating"
              style={{
                left: "36%",
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
                <Image src={item} width={100} height={100} alt="Logos" className="brightness-110 hover:brightness-0" />
              </SwiperSlide>
            ))}
          </Slider>
        </div>
      </div>

      {/* end partner Section */}
      <hr className="h-px bg-[#d3d3d3] border-1" />
      <div className=" relative z-2 bg-white" style={{ borderBottomLeftRadius: '24px', borderBottomRightRadius: "24px" }}>
        <div className="md:container mx-auto pt-32 pb-40">
          <p className="text-[20px] text-[#808080] font-medium w-[214px] mb-20">
            Strategic Digital Transformation across Industries
          </p>
          <div className="text-[64px] leading-[74px] font-semibold">
            Transform your
            <motion.div
              key={items[index].id}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ ease: "easeInOut", duration: 0.5, delay: 0.1 }}
              style={{ display: 'inline-block' }}
            >
              <span className="text-[#5F22D9] ml-2">{items[index].content}</span>
            </motion.div>
            <br></br>
            business with
            <motion.div
              key={items2[index].id}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ ease: "easeInOut", duration: 0.5, delay: 0.3 }}
              style={{ display: 'inline-block' }}
            >
              <span className="text-[#5F22D9] ml-2">{items2[index].content}</span> </motion.div>
            <br></br>
            enhancing <motion.div
              key={items3[index].id}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ ease: "easeInOut", duration: 0.5, delay: 0.4 }}
              style={{ display: 'inline-block' }}
            ><span className="text-[#5F22D9]">{items3[index].content}.</span></motion.div>
          </div>
        </div>
      </div>
      {/* video */}
      <div className="h-screen -mt-5" >
        <video
          src={'/home/videos/homePageVideo.mp4'} // Replace with your video path
          autoPlay
          loop
          muted
          className="inset-0 w-full h-full object-cover fixed -z-50"
        />
      </div >
      {/* video */}

      {/* innovative section */}
      <SectionWrapperNew
        sectionHeading={"ACT based Approach for Leading Future Ready Business"}
        sectionDesc={"Value - Driven Solutions for Tomorrow's Opportunities"}
        sectionTextColor="black"
        sectionHeadingLayout="horizontal"
        title="Business Transformation Drive"
        style={{ backgroundColor: "white", position: 'relative', zIndex: '2', height: '750px' }}
      >
        <Slider slidesPerView={3}>
          {BusinessTransformationDrive_DATA.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="p-8 bg-[#5F22D9] rounded-3xl" style={{backgroundImage: `url(${item.cardBgImg})`,
        }}>
                {item?.cardTitle && <div className="text-xl text-white text-semibold mb-[100px]">
                  {item?.cardTitle}
                </div>}
                <div className="mb-[50px] text-[42px] font-medium text-white leading-[50px] min-h-[150px]">{item.cardHeading}</div>
                <div className="mb-3 text-xl leading-[31px] text-white h-[75px]">{item.cardDesc}</div>
                <div className="flex justify-end px-6 py-4">
                  {/* setshowModal1((prev) => !prev) */}
                  <OutlinedButtonWithArrow arrowColor={'white'} size={48} onClick={() => handleBusinessCardClick(true, item)} />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Slider>
      </SectionWrapperNew>
      {/* end innovative section */}

      {/* hub of experties */}
      <SectionWrapperNew
        sectionHeading={"Hub of Expertise"}
        sectionDesc={"We are here to build an edge and bring technology brilliance with the finest in industry"}
        sectionTextColor="white"
        sectionHeadingLayout="center"
        style={{ background: "linear-gradient(360deg, #5F22D9 12.04%, #0c031f 57.96%)", paddingTop: '400px' }}
      >
        <div className="grid grid-cols-4 gap-16 py-6">
          <div className="" ref={ref1}>
            <h1 className="text-[96px] font-[700] text-white">{count1}<sup className="text-normal">+</sup></h1>
            <p className="text-base font-medium text-[#EFE9FB]">Years in Business</p>
          </div>
          <div className="" ref={ref2}>
            <h1 className="text-[96px] font-[700] text-white">{count2}<sup>+</sup></h1>
            <p className="text-base font-medium text-[#EFE9FB]">Customers Worldwide</p>
          </div>
          <div className="" ref={ref3}>
            <h1 className="text-[96px] font-[700] text-white">{count3}k<sup>+</sup></h1>
            <p className="text-base font-medium text-[#EFE9FB]">Man years of Experience</p>
          </div>
          <div className="" ref={ref4}>
            <h1 className="text-[96px] font-[700] text-white">{count4}<sup>+</sup></h1>
            <p className="text-base font-medium text-[#EFE9FB]">Implementation Sites</p>
          </div>
        </div>

        <div className="relative h-[450px] translate-y-[92px]">
          <Image src="/homeNew/globe.svg" layout="fill" alt="globe" />
        </div>
      </SectionWrapperNew>
      {/* end hub of experties */}

      {/* offerings */}
      <SectionWrapperNew
        sectionHeading={"Capabilities and Expertise"}
        sectionDesc={"Delivering transformative results with our industry knowledge, strategic partnership and end-to-end service offerings."}
        sectionTextColor="black"
        title="Count on Us"
        sectionHeadingLayout="horizontal"
        style={{ background: 'white' }}
      >
        <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col mx-auto w-full  items-start justify-start my-0">
          <Tabs activeTabClassName={`!bg-[#5F22D9]`} contentClassName={`!mt-20`} tabClassName={`!px-10 hover:bg-[#5F22D9]`} containerClassName={`!my-2`} tabs={tabs} />
        </div>
      </SectionWrapperNew>
      {/* end offerings */}

      {/* @ts-ignore */}
      <CaseStudiesSection casestudy={CASE_STUDIES_DATA} csLayout={"1"} bgColor={'#1D162B'} />

      <BlogSection
        ID={"blog"}
        blogImageUrl={'/home/images/blogBg.webp'}
        Heading={"Step Up in Your Professional Journey"}
        Desc={
          "Work with talented professionals who inspire and support each other. Join our dynamic team and embark on a rewarding career journey that shapes your future. "
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
            {'Why Godrej Infotech'}
            <Icon
              path={mdiArrowRight}
              style={{ marginLeft: "0.5em", marginTop: '1px' }}
              size={1}
            />
          </Link>
          <Link
            href={''}
            target="_blank"
            className="text-white mt-10 md:my-10 inline-flex items-center transition-all bg-[#5F22D9] hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-base px-8 py-3 me-2 dark:bg-[#5F22D9] dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          >
            {'Join Our Team'}
            <Icon
              path={mdiArrowRight}
              style={{ marginLeft: "0.5em", marginTop: '1px' }}
              size={1}
            />
          </Link>
        </div>

      </BlogSection>
      {/* @ts-ignore */}
      <ReviewSliderSection
        ID={"TESTIMONIALS"}
        Heading={"Delighted Customers Share Their Successful Experiences"}
        Desc={''}
        Color="#ffffff"
        CardDataList={TESTIMONIAL_DATA}
        BGColor="#1D162B"
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
    'Business Consulting',
    'Implementation & Global Rollout',
    'Migration & Transformation',
    'Legacy Modernisation',
    'Infrastructure as a Service',
    'Managed Services',
  ];
  return (
    <div className="grid grid-cols-2 gap-20 h-full">
      <div className="py-10 px-10">
        {services.map((item) => (
          <>
            <div className="list text-[18px] py-4 flex justify-between" style={{ borderBottom: '1px solid #d3d3d3' }}>
              {item}
              <Image width={35} height={35} src="/homeNew/chevron-right.svg" alt="char"></Image>
            </div>
          </>
        ))}

      </div>
      <div className="relative" style={{ backgroundImage: `url(/home/images/servives.webp)`, backgroundSize: 'cover' }}>
      </div>
    </div>
  );
};

const IndustryContent = () => {
  const data = [
    'Manufacturing',
    'Retail',
    'Trading & Distribution',
    'Healthcare',
    'Professional Service',
    'Project',
  ];

  return (
    <div className="grid grid-cols-2 gap-20 h-full">
      <div className="py-10 px-10">
        {data.map((item) => (
          <>
            <div className="list text-[18px] py-4 flex justify-between" style={{ borderBottom: '1px solid #d3d3d3' }}>
              {item}
              <Image width={35} height={35} src="/homeNew/chevron-right.svg" alt="char"></Image>
            </div>
          </>
        ))}

      </div>
      <div className="relative" style={{ backgroundImage: `url(/home/images/industry.webp)`, backgroundSize: 'cover' }}>
      </div>
    </div>
  );
};

const ParternerContent = () => {
  const data = [
    'Microsoft  ',
    'Infor  ',
    'Oracle  ',
    'Salesforce  ',
    'LS Retail  ',
    'Automation Anywhere ',
    'Ui Path',
  ];

  return (
    <div className="grid grid-cols-2 gap-20 h-full">
      <div className="py-10 px-10">
        {data.map((item) => (
          <>
            <div className="list text-[18px] py-4 flex justify-between" style={{ borderBottom: '1px solid #d3d3d3' }}>
              {item}
              <Image width={35} height={35} src="/homeNew/chevron-right.svg" alt="char"></Image>
            </div>
          </>
        ))}

      </div>
      <div className="relative" style={{ backgroundImage: `url(/home/images/partners.webp)`, backgroundSize: 'cover' }}>
      </div>
    </div>
  );
};