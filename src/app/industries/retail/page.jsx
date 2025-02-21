"use client";
import EntIntro from "@/components/EntIntro";
import OverviewSection from "@/sections/overview/OverviewSection";
import SectionWrapper from "@/components/SectionWrapper";
import SectionHeading from "@/components/SectionHeading";
import Image from "next/image";
import IndustrySpotlight from "@/sections/industry-spotlight/industrySpotlight";
import { Swiper, SwiperSlide } from "swiper/react";
import BlogSection from "@/sections/blog/BlogSection";
import AcceleratorSection from "@/sections/accelerator/AcceleratorSection";
import ReviewSliderSection from "@/sections/reviewSlider/ReviewSliderSection";
import TransformBusinessForm from "@/sections/transformBusinessFrom/TransformBusinessFromSection";
import Slider from "@/components/Slider";
import SectionWrapperNew from "@/components/SectionWrapperNew";
import { Tabs } from "@/components/ui/tabs";
import Link from "next/link";
import OutlinedButtonWithArrow from "@/components/ui/buttons/OutlinedButtonWithArrow";
import CaseStudiesSection from "@/sections/case-studies/CaseStudiesSection";
import {CHALLENGES_LIST_DATA, INDUSTRY_SPOTLIGHT, RPASolution2, keyResponsibilityData, DATA_MGMT_DATA, SOLUTION_DATA , 
  CASE_STUDIES_DATA, TESTIMONIAL_DATA,} from './data';

function page() {
  const sectionBGImageUrl =
    "/data-insights/backgrounds/bg--data-visualization.webp";
  const blogImageUrl = "/retail/blogBg.webp";

  const imgBgURL =
    "/CloudStackServices/background/bg--strategic-partnership.png";

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
      title: "Industry",
      value: "industry",
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
          <PartnersContent />
        </div>
      ),
    },
  ];

  const imgBGURL_Challenges="/manufacturing/gear.webp";

  return (
    <>
      <EntIntro
        title="Expert Digital Solutions for Retailers"
        desc="Create seamless shopping experiences across channels and touchpoint"
        cta="Let's Connect"
        width="60%"
        video="/retail/videos/pageBanner.mp4"
      />
      <OverviewSection
        Text={`From adoption of CRM and e-commerce to the integration of data analytics, our expert team holds extensive experience of providing comprehensive advance solutions for global retail businesses.`}
      />

      <SectionWrapper BGColor="bg-secondary-900" setTop={false} style={{
          backgroundImage: `url(${imgBGURL_Challenges})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}>
        <div className="container mx-auto py-32">
          <SectionHeading
            Color="text-neutral-white"
            sectionBGImageUrl={sectionBGImageUrl}
            Heading="Knocking Business Challenges"
            Desc=""
            SectionHeadingMaxWidth="w-1/2"
          ></SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ul className=" space-y-4 w-full text-neutral-white">
              {CHALLENGES_LIST_DATA.map((challenge, index) => (
                <li
                  key={challenge.id}
                  className={`flex items-start py-2 border-b-[0.5px] border-neutral-white border-opacity-20 w-full ${
                    index === CHALLENGES_LIST_DATA.length - 1
                      ? "border-b-0"
                      : ""
                  }`}
                >
                  <div className="flex-shrink-0 mr-4">
                    <Image
                      src={challenge.icon}
                      alt={`${challenge.title} icon`}
                      width={32}
                      height={32}
                    />
                  </div>
                  <div className="text-left">
                    <h3 className="text-paragraph-01 leading-paragraph-01 font-normal">
                      {challenge.title}
                    </h3>
                  </div>
                </li>
              ))}
            </ul>
            <div>{/* <img src="/about/video.png" /> */}</div>
          </div>
        </div>
      </SectionWrapper>
      {/* end challenges */}

      <SectionWrapperNew
        bgColor={"bg-neutral-white"}
        sectionHeading="Solution Offerings"
        sectionDesc="From specialty stores to large-scale retailers, we help businesses with enhanced competency, customer engagement and inclusive performance. "
        sectionTextColor="text-primary-900"
        sectionHeadingLayout="left"
      >
        <Slider>
          {RPASolution2?.map((item, index) => (
            <SwiperSlide key={index}>
              <div class="w-full min-h-[50vh] bg-white rounded-3xl group overflow-hidden relative border-[0.5px] border-primary-900 border-opacity-20">
                <div
                  className="h-[35vh] bg-slate-700"
                  style={{
                    background: `url('item.cardTopImageUrl')`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                ></div>
                <div className="h-[25vh] p-5 relative">
                  <h5 className="mb-4 text-heading-03 text-primary-900 font-semibold ">
                    {item?.cardHeading}
                  </h5>
                  <p className="mb-6 text-base text-primary-900 font-normal">
                    {item?.cardDesc}
                  </p>
                  {item?.cardHoverData && (
                    <div className="absolute bottom-4 right-4">
                      <OutlinedButtonWithArrow size={24} />
                    </div>
                  )}
                </div>
                {item?.cardHoverData && (
                  <div className="bg-secondary-10 p-5 rounded-3xl h-full w-full duration-200 group-hover:-translate-y-full absolute">
                    <div className="">
                      <ol className="max-w-md space-y-1 text-gray-500 list-decimal list-inside dark:text-gray-400">
                        {item?.cardHoverData.map((item2) => (
                          <>
                            <li>
                              <span className="font-semibold text-black">
                                {item2}
                              </span>
                            </li>
                          </>
                        ))}
                      </ol>
                      <ol className="max-w-md space-y-1 text-gray-500 list-decimal list-inside dark:text-gray-400">
                        {item?.cardHoverData.map((item2) => (
                          <>
                            <li>
                              <span className="font-semibold text-black">
                                {item2}
                              </span>
                            </li>
                          </>
                        ))}
                      </ol>
                    </div>
                  </div>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Slider>
      </SectionWrapperNew>
      {/* custome solution */}

      {/* key responsibility */}
      <SectionWrapperNew
        sectionHeading={"Key Capabilities"}
        sectionDesc={`Streamline finance, HR, supply chain and customer experience with Oracle Fusion Cloud's integrated solutions.`}
        sectionTextColor={"text-neutral-white"}
        sectionDescColor={"text-neutral-white"}
        sectionHeadingLayout="horizontal"
        bgColor={"bg-primary-500"}
      >
        <Slider slidesPerView={3}>
          {keyResponsibilityData?.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="p-6 bg-[transparent]  border-[0.5px] border-white rounded-3xl border-opacity-20 min-h-[424px] ">
                <Image
                  src={item.icon}
                  width={56}
                  height={56}
                  alt={"hioasdo"}
                  className="mb-4"
                />
                <div className="text-heading-03 font-semibold text-neutral-white">
                  {item?.title}
                </div>
                <p className="text-body-01 py-4 text-neutral-white">
                  {item?.desc}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Slider>
      </SectionWrapperNew>

      <AcceleratorSection
        style={{ backgroundColor: "#EFE9FB" }}
        ID={"Accelerator"}
        Heading={"Accelerator"}
        Desc={
          "Helping speciality stores to large –scale retailers to increase business competency."
        }
        Color={""}
        accImageURL={blogImageUrl}
      >
        <p className="text-heading-04 font-semibold mb-4 mt-8 text-center md:text-left md:mt-16">
          Order Management System (OMS)
        </p>
        <p className=" w-full md:w-1/2 text-body-01 text-center md:text-left ">
          Integrated with D365 F&O, this value-added solution provides real-time
          tracking, automated stock management, and customer onboarding.
        </p>
      </AcceleratorSection>

      <IndustrySpotlight
        cardData={INDUSTRY_SPOTLIGHT}
        sectionDesc={
          "Driving growth across various business sectors with scalable Business Central expertise."
        }
        slidePerView={"3"}
      />
      <CaseStudiesSection
        casestudy={CASE_STUDIES_DATA}
        csLayout={"5"}
        bgColor="bg-secondary-10"
      />

      {/* end case studies */}
      <BlogSection
        ID={"blog"}
        blogImageUrl={blogImageUrl}
        Heading={"Adobe Commerce Solution for Online Business"}
        Desc={
          "Formerly known as Magento Commerce, it is an e-commerce platform development tool that builds multi-channel e-commerce experiences, equipped with robust security, high performance, and intuitive interfaces for B2B and B2C merchants."
        }
        Color={"text-primary-900"}
        readMoreUrl={[{id:'1', text:'Read more', url:'https://www.godrejinfotech.com/blogDetails.aspx?blog=13'},]}
      ></BlogSection>

      <ReviewSliderSection
        ID={"TESTIMONIALS"}
        Heading={"Delighted Customers Share their Successful Experiences"}
        Desc={""}
        Color="text-neutral-white"
        CardDataList={TESTIMONIAL_DATA}
        BGColor="bg-primary-900"
        SectionHeadingMaxWidth={"70%"}
        setHeadingLayout={'left'}
      ></ReviewSliderSection>

      {/* transform business with us section */}
      <TransformBusinessForm
        Title={"Transform your Business with us"}
        Desc={
          "Let’s discuss how digital transformation can help you with rapid growth."
        }
      ></TransformBusinessForm>
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

const PartnersContent = () => {
  const data = [
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

export default page;
