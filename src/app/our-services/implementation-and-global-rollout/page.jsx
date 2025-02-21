"use client";
import EntIntro from "@/components/EntIntro";
import OverviewSection from "@/sections/overview/OverviewSection";
import CommonCardTwoSlider from "@/sections/commonCardTwoSlider/CommonCardTwoSlider";
import { Swiper, SwiperSlide } from "swiper/react";
import SectionHeading from "@/components/SectionHeading";
import BlogSection from "@/sections/blog/BlogSection";
import ReviewSliderSection from "@/sections/reviewSlider/ReviewSliderSection";
import TransformBusinessForm from "@/sections/transformBusinessFrom/TransformBusinessFromSection";
import ServicesCardSlider from "@/sections/services-cards-slider/ServicesCardSlider";
import SectionWithSlider from "@/sections/sectionWithSlider/SectionWithSlider";
import HubExpertise from "@/sections/hub-of-expertise/HubExpertise";
import DistinctiveSection from "@/sections/distinctive/DistinctiveSection";
import CaseStudiesSection from "@/sections/case-studies/CaseStudiesSection";
import Image from "next/image";
import { Pagination } from "swiper/modules";
import {SERVICE_CARDS_DATA, CASE_STUDIES_DATA, CyberSecurityData, IMPLEMENTATION_VIRTUES_DATA, TESTIMONIAL_DATA, DATA_MGMT_DATA,
  HUBEXPERTISE_COUNTER_DATA, distinctiveData, serviceData} from './data';

  const page = () => {

const blogImageUrl = "/implementation/blog-bg.webp";


  return (
    <>
      <EntIntro
        title="Implementation & Global Rollout Services"
        desc="Expertly Implemented, Globally Delivered"
        cta="Let's Connect"
        width="60%"
        video="/implementation/videos/pageBanner.mp4"
      />
      <OverviewSection
        Text={`25+ years expertise in implementation services, delivering secure rollouts and timely results for global clients.`}
      />

      <CommonCardTwoSlider
        ID={""}
        sectionImageUrl={""}
        sectionBGColor={"bg-secondary-10"}
        sectionHeading={"Our Services"}
        sectionDesc={
          "Our implementation services combine industry expertise with a customer-centric approach, ensuring minimal disruption and maximum impact."
        }
        sectionTextColor={"text-primary-900"}
        sectionHeaderMaxWidth={"40%"}
        setHeadingLayout={"horizontal"}
        cardData={CyberSecurityData}
        style={{paddingBottom:'8rem'}}
        setTop={false}
      />


  <div className="bg-primary-900 rounded-3xl -mt-8">
        <div
          className="container mx-auto flex "
          style={{ alignItems: "center", overflow: "hidden" }}
        >
          {/* Left Column */}
          <div className="w-full md:w-1/2 min-h-[420px] py-8">
            <SectionHeading
              Heading={`Infor CloudSuite Services`}
              Color={"white"}
              Desc={`Leverage our understanding of industry specific business processes refined through years of experience and benefit from end-to-end Infor CloudSuite services`}
              headingContainerWidth={"w-full"}
            />
          </div>

          {/* Right Column */}
          <div
            className="hidden md:w-1/2 lg:block"
            style={{
              backgroundImage: "url(/infor/Infor-Cloudsuite-Services.png)",
              backgroundSize: "cover",
              backgroundPosition: "left",
              height: "520px", // Added explicit height
            }}
          ></div>
        </div>

        {/* Swiper Section */}
        <div
          className="container mx-auto bg-secondary-10 pt-8 pb-32 rounded-t-3xl"
          style={{
  
          }}
        >
          <Swiper
            slidesPerView={1}
            navigation={false}
            pagination={{ clickable: true }}
            followFinger={true}
            modules={[ Pagination]}
            autoplay={true}
            loop={false}
            spaceBetween={30}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 16,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 32,
              },
            }}
          >
            {IMPLEMENTATION_VIRTUES_DATA.map((item, index) => (
              <SwiperSlide key={index}>
                <div className= "rounded-3xl ">
                  <Image
                    className="rounded-3xl mx-auto md:mx-2 ml-3"
                    src={item.icon}
                    width={48}
                    height={48}
                    alt="Img"
                  />
                  <div className="pt-5 mb-4">
                    <h5 className="mb-4 text-heading-03 font-semibold text-left">
                    {item.cardHeading}
                    </h5>
                    <p>{item.cardDesc}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>



      <ServicesCardSlider
        cardData={SERVICE_CARDS_DATA}
        heading={"Key Implementation Phases"}
        desc={
          "Constant optimization is important during every stage, as we fine-tune the solution to maximize its value."
        }
        color={"text-primary-900"}
      />

      <SectionWithSlider
        ID={"DATA_MGMT_DATA"}
        sectionHeading={"360 Degree Implementation Practice"}
        sectionDesc={
          "Every successful implementation needs more than technology expertise. Our all-inclusive approach delivers winning implementation services for our customers."
        }
        sectionTextColor="text-neutral-white"
        cardData={DATA_MGMT_DATA}
        sectionBGColor="bg-secondary-900"
        setHeadingLayout="horizontal"
      />

      <HubExpertise
        BGColor="bg-primary-400"
        setHeading="Hub of Expertise"
        setDesc="We’re here to build an edge and bring technology brilliance with the finest in the industry."
        setColor="text-neutral-white"
        counters={HUBEXPERTISE_COUNTER_DATA}
        columnNo={"2"}
      />

      <BlogSection
        ID={"blog"}
        blogImageUrl={blogImageUrl}
        Heading={"Key Strategies for Seamless Implementation"}
        Desc={`As organizations transit to new systems or upgrade existing ones, ensuring smooth data migration becomes imperative to maintain continuity, accuracy, and efficiency in operations. In this blog, we'll delve into the critical aspects of data migration and outline key strategies to ensure a seamless implementation process.`}
        Color={"text-neutral-white"}
      ></BlogSection>

      <DistinctiveSection
        DistinctiveData={distinctiveData}
        ID={"Distinctive"}
        Title={"The Distinctive Edge"}
        Desc={
          "With our track record of consistently delivering projects on schedule, we are recognizedas the trusted partner for implementation, migration and rollouts worldwide."
        }
      ></DistinctiveSection>

      <ReviewSliderSection
        ID={"TESTIMONIALS"}
        Heading={"Delighted Customers Share their Successful Experiences"}
        Desc={
          "Discover how we have helped our customers to realize better results aligned with their business goals."
        }
        Color="text-neutral-white"
        CardDataList={TESTIMONIAL_DATA}
        BGColor="bg-primary-900"
        SectionHeadingMaxWidth={"70%"}
        setHeadingLayout={'left'}
      ></ReviewSliderSection>

      {/* Section--Case-Studies======================================================================= */}
      <CaseStudiesSection
        casestudy={CASE_STUDIES_DATA}
        csLayout={"2"}
        bgColor="bg-neutral-white"
      />
      {/* End-Section--Case-Studies */}

      <TransformBusinessForm
        Title={
          "Start your implementation journey with us for seamless experience"
        }
        Desc={
          "Need expert guidance? Share your details in the form and let's make it happen!"
        }
      ></TransformBusinessForm>
    </>
  );
};

export default page;
