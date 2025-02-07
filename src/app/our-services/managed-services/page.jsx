"use client";
import EntIntro from "@/components/EntIntro";
import OverviewSection from "@/sections/overview/OverviewSection";
import SectionWrapper from '@/components/SectionWrapper';
import SectionWrapperNew from '@/components/SectionWrapperNew';
import SectionHeading from '@/components/SectionHeading';
import SectionWithSlider from "@/sections/sectionWithSlider/SectionWithSlider";
import CommonCardThreeSlider from "@/sections/commonCardThreeSlider/CommonCardThreeSlider";
import CaseStudiesSection from "@/sections/case-studies/CaseStudiesSection";
import HubExpertise from "@/sections/hub-of-expertise/HubExpertise";
import BlogSection from "@/sections/blog/BlogSection";
import DistinctiveSection from "@/sections/distinctive/DistinctiveSection";
import ReviewSliderSection from '@/sections/reviewSlider/ReviewSliderSection';
import TransformBusinessForm from "@/sections/transformBusinessFrom/TransformBusinessFromSection";
import BusinessChallenge from "@/sections/new/businessChallenge/BusinessChallenge";

import { Pagination, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

import { distinctiveData, CHALLENGES_LIST_DATA, CASE_STUDIES_DATA, RPASolution, HUBEXPERTISE_COUNTER_DATA, TESTIMONIAL_DATA, TECHNOLOGYSPECTRUM_DATA, DATA_MGMT_DATA } from './data';
  const page = () => {
  const blogImageUrl = '/managedServices/blog-bg.webp';

  return (
    <>
      <EntIntro
        title="Proactive Monitoring for Peak IT Performance"
        desc="Managed IT Services Experts"
        cta="Let's Connect"
        width="60%"
        video="/managedServices/videos/pageBanner.mp4"
      />
      <OverviewSection Text={`Expert 24/7 Support: Our Managed Services ensure seamless IT operations, empowering you to focus on core business`} />
      <BusinessChallenge sectionHeading={'Knocking Business Challenges'} sectionDesc={'Absence of expert managed services results in various business obstacles, difficulty in transforming business operations and addressing transactional needs, ultimately impacting growth and productivity.'} item={CHALLENGES_LIST_DATA} setTop={false} style={{ background: `url(/services/mg01.svg)`, backgroundSize: "cover", backgroundRepeat: "no-repeat" }} />
      
      <SectionWrapperNew >
        <div className="InforSliderWrapper rounded-3xl " style={{ backgroundColor: 'white', zindex: "2", position: 'relative' }}>
          <div className="flex md:flex-row flex-col md:py-10 px-10 " style={{ justifyContent: 'center', alignItems: 'center' }}>
            <div className="w-full md:w-3/12">
              <h1 className="text-heading-03 font-semibold text-center md:text-left border-r-2">Technology
                Spectrum</h1>
            </div>
            <div className="w-full md:w-9/12 my-6 md:my-0">
              <Swiper
                slidesPerView={1}
                modules={[Pagination, Autoplay]}
                pagination={false}
                autoplay={true}
                loop={false}
                spaceBetween={32}
                breakpoints={{
                  640: {
                      slidesPerView: 2,
                      spaceBetween: 16,
                  },
                  768: {
                      slidesPerView: 2,
                      spaceBetween: 24,
                  },
                  1024: {
                      slidesPerView: 5,
                      spaceBetween: 32,
                  },
              }}
              >
                {TECHNOLOGYSPECTRUM_DATA?.map((item, index) => (
                  <SwiperSlide key={item} >
                    <div className="w-full text-heading-04 font-semibold text-center">
                      {/* <Image className="rounded-t-lg" width={100} height={50} src="" alt="" /> */}
                      {item.cardHeading}
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </SectionWrapperNew>

      <SectionWrapperNew
       sectionHeading="How Can We Assist You?"
       sectionDesc="Our team employs proactive monitoring to identify and address potential issues ensuring a seamless and uninterrupted operations."
       sectionTextColor='text-neutral-white'
       sectionDescColor='text-neutral-white'
       sectionHeadingLayout="center"
       bgColor="bg-primary-900">
        <div className="container mx-auto rounded-3xl  pb-0 sm:py-5">
          <div className="flex justify-center items-center flex-col">
            <div>
              <img src="/services/mg02.svg" width="100%"></img>
            </div>
          </div>
        </div>
      </ SectionWrapperNew>

      <SectionWithSlider
       
        ID={"DATA_MGMT_DATA"}
        sectionHeading={"Cornerstones of Managed Services"}
        sectionDesc={
          "Flexible, Scalable, and Secure Managed Solutions for Ambitious Businesses."
        }
        sectionTextColor="text-neutral-white"
        cardData={DATA_MGMT_DATA}
        sectionBGColor="bg-primary-500"
        setHeadingLayout="horizontal"
        setCardsMinHeight={"min-h-[380px] md:min-h-[380px] lg:min-h-[380px] 2xl:min-h-[420px]"}
       
      />

      <CommonCardThreeSlider
        ID={'AIOfferings'}
        sectionImageUrl={''}
        sectionBGColor={'bg-primary-900'}
        sectionHeading={'Benefits of Managed Services'}
        sectionDesc={''}
        sectionTextColor={'text-neutral-white'}
        sectionHeaderMaxWidth={'40%'}
        cardData={RPASolution}
        setHeadingLayout={'left'}
      >

      </CommonCardThreeSlider>
     

      <CaseStudiesSection
        casestudy={CASE_STUDIES_DATA}
        csLayout={"2"}
        bgColor="text-neutral-white"
      />

      <HubExpertise
        BGColor="bg-secondary-700"
        setHeading="Hub of Expertise"
        setDesc="We are here to build edge and bring technology brilliance with the finest in the industry."
        setColor="text-neutral-white"
        counters={HUBEXPERTISE_COUNTER_DATA}
      />

      <BlogSection ID={'blog'} blogImageUrl={blogImageUrl} Heading={'Managed Services: The Promised Land?'}
        Desc={'Reaching the Promised land is no mean feat. Not all can endure the journey but those who do, are surely the chosen ones. With this biblical analogy let’s try to decode Managed Services.'}
        Color={'text-neutral-white'}
        readMoreUrl={[
          {id:'1', text:'Read more', url:"https://www.godrejinfotech.com/blogDetails.aspx?blog=10"},
        ]}
      ></BlogSection>

      <DistinctiveSection DistinctiveData={distinctiveData}
        ID={'Distinctive'} Title={'The Distinctive Edge'} Desc={'We focus on managing all aspects of IT infrastructure and business applications, minimizing the need for in-house expertise. Trusted legacy of 25 years with experience of supporting 40+ Godrej & Boyce applications'}
      >
      </DistinctiveSection>

      <TransformBusinessForm
        Title={"Transform Your Business with Us"}
        Desc={
          "Let's discuss how Managed Support Services can help you to optimize business operations."
        }
      ></TransformBusinessForm>
    </>
  )
}

export default page;