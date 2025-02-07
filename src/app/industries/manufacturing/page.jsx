
'use client';
import React, { useState } from "react";
import EntIntro from "@/components/EntIntro";
import OverviewSection from "@/sections/overview/OverviewSection";
import SectionWrapper from "@/components/SectionWrapper";
import SectionHeading from "@/components/SectionHeading";
import Image from "next/image";
import IndustrySpotlight from "@/sections/industry-spotlight/industrySpotlight";
import { Swiper, SwiperSlide } from "swiper/react";
import BlogSection from "@/sections/blog/BlogSection";
import ReviewSliderSection from "@/sections/reviewSlider/ReviewSliderSection";
import TransformBusinessForm from "@/sections/transformBusinessFrom/TransformBusinessFromSection";
import Slider from "@/components/Slider";
import SectionWrapperNew from "@/components/SectionWrapperNew";
import { Tabs } from "@/components/ui/tabs";
import Link from "next/link";
import OutlinedButtonWithArrow from "@/components/ui/buttons/OutlinedButtonWithArrow";
import BlogSliderSection from "@/sections/blogSlider/BlogSliderSection";
import CaseStudiesSection from "@/sections/case-studies/CaseStudiesSection";
import Dialog from "@/components/Dialog";
import {
    CHALLENGES_LIST_DATA,
    blogSliderData,
    INDUSTRY_SPOTLIGHT,
    RPASolution2,
    DATA_MGMT_DATA,
    SOLUTION_DATA,
    TESTIMONIAL_DATA,
    CASE_STUDIES_DATA
} from './data';

import BusinessChallenge from "@/sections/new/businessChallenge/BusinessChallenge";
import MFCard from "@/components/cards/MFCard";
import BorderRightCard from "@/components/cards/BorderRightCard";



function Page() {
    const blogImageUrl = "/manufacturing/blog-bg.webp";
    const imgBgURL = "/CloudStackServices/background/bg--strategic-partnership.png";
    const tabs = [
        {
            title: "Automation",
            value: "automation",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-3xl text-xl md:text-4xl font-bold text-black bg-[#FCE6F4]">
                    <AutomationContent />
                </div>
            ),
        },
        {
            title: "Cloud",
            value: "cloud",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-3xl text-xl md:text-4xl font-bold text-black bg-[#FCE6F4]">
                    <CloudContent />
                </div>
            ),
        },
        {
            title: "Transformation",
            value: "transformation",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-3xl text-xl md:text-4xl font-bold text-black bg-[#FCE6F4]">
                    <TransformationContent />
                </div>
            ),
        },
    ];
    const [showMAModal, setShowMAModal] = useState(false);
    const [maDataItem, setMADataItem] = useState([]);

    function handleMACardClick(modal, item) {
        console.log("hjbjh", item);
        setShowMAModal(modal);
        setMADataItem(item);
    }

    return (
        <>
            <EntIntro
                title="Manufacturing Digitalization Starts Here"
                desc="Transforming Factory to Shop Floor Operations with Future-Proof Solutions"
                cta="Let's Connect"
                width="60%"
                video="/manufacturing/videos/pageBanner.mp4"
            />
            <OverviewSection Text={`Adopting automation enables our manufacturing clients to achieve transformative benefits, including enhanced quality, predictable supply chain and increased profitability.`} />
            <BusinessChallenge sectionHeading={'Challenges Faced by Manufacturing Businesses'} item={CHALLENGES_LIST_DATA} setTop={false} style={{ background: `url(/services/mg01.svg)`, backgroundSize: "cover", backgroundRepeat: "no-repeat" }} />
            
            <SectionWrapperNew
                sectionHeading={"Solution Offerings"}
                sectionDesc={"We deploy solutions that modernize every aspect of the manufacturing value chain from design and production to supply chain management and customer delivery."}
                sectionTextColor="text-primary-900"
                title="OUR OFFERINGS"
                sectionHeadingLayout="center"
                style={{ background: '#f2f2f2' }}
            >
                <div className="h-[70vh] [perspective:1000px] relative b flex flex-col mx-auto w-full  items-start justify-start my-0">
                    <Tabs
                        activeTabClassName="!bg-[#cccccc] !text-[#fff]"
                        contentClassName="!mt-5"
                        tabClassName="!px-4 hover:bg-[#ccc] "
                        containerClassName="!my-2"
                        tabs={tabs}
                    />
                </div>
            </SectionWrapperNew>

      {/* end future section */}

      <SectionWrapperNew
        sectionHeading="Key Capabilities"
        sectionDesc="We equip manufacturing businesses with greater growth potential to drive agility and innovation across the entire production lifecycle."
        sectionTextColor="text-neutral-white"
        sectionDescColor="text-neutral-white"
        sectionHeadingLayout="horizontal"
        bgColor={"bg-primary-500"}
        setTop={false}
      >
        <Slider>
          {DATA_MGMT_DATA?.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="p-6 bg-[transparent] border-[0.5px] border-white rounded-3xl border-opacity-20 min-h-[424px] mb-2 lg:mb-0">
                <Image
                  src={item.icon}
                  width={56}
                  height={56}
                  alt={"hioasdo"}
                  className="mb-4"
                />
                <div className="text-heading-03 font-semibold text-neutral-white">
                  {item.CardHeading}
                </div>
                <p className="text-body-01 py-4 text-neutral-white">
                  {item.CardDesc}
                </p>
                <div
                  dangerouslySetInnerHTML={{ __html: item?.additionalData }}
                />
              </div>
            </SwiperSlide>
          ))}
        </Slider>
      </SectionWrapperNew>
      {/* capabilites section end */}

      <SectionWrapperNew
        bgColor={"bg-neutral-white"}
        sectionHeading="Manufacturing Accelerators"
        sectionDesc="Our pre-configured solutions ensure seamless integration and rapid implementation."
        sectionTextColor="text-primary-900"
        sectionHeadingLayout="left"
      >
        <Slider>
          {RPASolution2?.map((item, index) => (
            <SwiperSlide key={index}>
              <MFCard item={item}></MFCard>
            </SwiperSlide>
          ))}
        </Slider>
      </SectionWrapperNew>
      {/* custome solution */}

      <IndustrySpotlight
        cardData={INDUSTRY_SPOTLIGHT}
        sectionDesc={
          "Godrej Infotech has extensive experience of working with more than 200+ customers in discrete and process manufacturing."
        }
        setBGColor={"bg-primary-10"}
        slidePerView={"3"}
      />
      <CaseStudiesSection
        casestudy={CASE_STUDIES_DATA}
        csLayout={"5"}
        bgColor="bg-neutral-white"
        setTop={false}
      />

            <SectionWrapperNew
                bgColor={"bg-neutral-white"}
                sectionHeading="Manufacturing Accelerators"
                sectionDesc="Our pre-configured solutions ensure seamless integration and rapid implementation."
                sectionTextColor='text-primary-900'
                sectionHeadingLayout="left"
            >
                <Slider>
                    {RPASolution2?.map((item, index) => (
                        <SwiperSlide key={index}>
                              <BorderRightCard item={item} onclick={handleMACardClick} />
                        </SwiperSlide>
                    ))}
                </Slider>

            </SectionWrapperNew>
            {/* modal bsc data */}
            <Dialog
                shouldShow={showMAModal}
                onRequestClose={() => {
                    setShowMAModal((prev) => !prev);
                }}
                title={maDataItem?.cardHeading}
            >
                <div>
                    <div className="">
                        <div className="grid grid-cols-1 gap-4">
                            <ul className="space-y-2 w-full">
                                {maDataItem.cardHoverData?.map((challenge, index) => (
                                    <li
                                        key={index}
                                        className={`flex items-start py-1 border-b-[0.5px] border-text-white border-opacity-20 w-full ${index === maDataItem.cardHoverData?.length - 1 ? 'border-b-0' : ''}`}
                                    >
                                        <p className="text-left">
                                            <h3 className="font-normal text-paragraph-02">
                                                {challenge}
                                            </h3>
                                        </p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </Dialog>
            {/* modal end bsc data */}
            {/* custome solution */}

            <IndustrySpotlight cardData={INDUSTRY_SPOTLIGHT} sectionDesc={'Godrej Infotech has extensive experience of working with more than 200+ customers in discrete and process manufacturing.'} />
            <CaseStudiesSection casestudy={CASE_STUDIES_DATA} csLayout={"5"} bgColor='bg-neutral-white' />

            <BlogSliderSection
                cardData={blogSliderData}
            ></BlogSliderSection>

            <ReviewSliderSection
                ID={"TESTIMONIALS"}
                Heading={"Delighted Customers Share their Successful Experience"}
                Desc={''}
                Color="text-neutral-white"
                CardDataList={TESTIMONIAL_DATA}
                BGColor="bg-primary-900"
                SectionHeadingMaxWidth={'70%'}
            ></ReviewSliderSection>

            {/* transform business with us section */}
            <TransformBusinessForm Title={'Transform your Business with us'} Desc={"Let us discuss how digital transformation solutions can help you with rapid growth. "}>
            </TransformBusinessForm>

        </>
    )
}

const AutomationContent = () => {
  const services = [
    "IoT",
    "Data Driven Analytics-Data Lake",
    "Predictive & Preventive Maintenance",
    "Augmented Intelligence",
    "RPA",
    "Configure Price Quote",
    "Product Lifecycle Management",
    "Power BI Reporting",
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-20 h-full">
      <div className="p-5">
        {services.map((item) => (
          <>
            <div
              className="list text-body-01 py-3 flex justify-between"
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
          backgroundImage: `url(/manufacturing/Automation.webp)`,
          backgroundSize: "cover",
        }}
      ></div>
    </div>
  );
};

const CloudContent = () => {
  const data = [
    "Upgrade/Migrate to cloud",
    "ERP on cloud",
    "IoT Data management in Cloud",
    "Manufacturing Execution System in Cloud",
    "DevOps",
    "Cloud Security Solutions",
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-20 h-full">
      <div className="p-5">
        {data.map((item) => (
          <>
            <div
              className="list text-body-01 leading-body-01 py-3 flex justify-between"
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
          backgroundImage: `url(/manufacturing/cloud.webp)`,
          backgroundSize: "cover",
        }}
      ></div>
    </div>
  );
};

const TransformationContent = () => {
  const data = [
    "Smart Manufacturing ERP",
    "Customer Experience – CRM",
    "Supply Chain Management",
    "Process Optimization",
    "Enterprise Planning and Scheduling",
    "Shopfloor Management",
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-20 h-full">
      <div className="p-5">
        {data.map((item) => (
          <>
            <div
              className="list text-body-01 leading-body-01 py-3 flex justify-between"
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
          backgroundImage: `url(/manufacturing/transformation.webp)`,
          backgroundSize: "cover",
        }}
      ></div>
    </div>
  );
};

export default Page;
