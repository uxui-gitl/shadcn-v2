"use client";
import React, { useState } from "react";
import EntIntro from "@/components/EntIntro";
import OverviewSection from "@/sections/overview/OverviewSection";
import BlogSection from "@/sections/blog/BlogSection";
import TransformBusinessForm from "@/sections/transformBusinessFrom/TransformBusinessFromSection";
import DistinctiveSection from "@/sections/distinctive/DistinctiveSection";
import Image from "next/image";
import CaseStudiesSection from "@/sections/case-studies/CaseStudiesSection";
import SectionWrapperNew from '@/components/SectionWrapperNew';
import Slider from "@/components/Slider";
import { SwiperSlide } from "swiper/react";
import OutlinedButtonWithArrow from "@/components/ui/buttons/OutlinedButtonWithArrow";
import Dialog from "@/components/Dialog";
import BusinessChallenge from "@/sections/new/businessChallenge/BusinessChallenge";
import { Fascinate } from "next/font/google";
import { CHALLENGES_LIST_DATA, ourServices1, ourServices2, TESTIMONIAL_DATA, CASE_STUDIES_DATA, distinctiveData, HUBEXPERTISE_COUNTER_DATA, ultimateChoiceData, bscData} from './data';
import BorderRightCard from "@/components/cards/BorderRightCard";



const Page = () => {
  const blogImageUrl = "/businessConsulting/blog-bg.webp";
  const imgBGURL_Challenges =
    "/businessConsulting/knockingBusinessChallenges.webp";

  const [showBscModal, setShowBscModal] = useState(false);
  const [bscDataItem, setBscDataItem] = useState([]);

  function handleBscCardClick(modal, item) {
    setShowBscModal(modal);
    setBscDataItem(item);
  }

  return (
    <>
      <EntIntro
        title="Business Consulting Services"
        desc="Begin Your Digital Journey with Strategic Consulting Expertise"
        cta="Let's Connect"
        width="60%"
        video="/businessConsulting/videos/pageBanner.mp4"
      />
      <OverviewSection Text={`Purpose-driven strategy fuels business transformation. Our consultants design future-ready digital programs for enterprise success`} />
      
      <BusinessChallenge item={CHALLENGES_LIST_DATA} setTop={false} />

      <SectionWrapperNew
        className=""
        sectionHeading="Business Consulting Services"
        sectionDesc="With deep digital experience and broad global reach, we help enterprises to embrace the digital future that enhances decision-making across the organisation."
        sectionTextColor='text-neutral-white'
        sectionDescColor='text-neutral-white'
        sectionHeadingLayout="horizontal"
        bgColor={'bg-primary-500'}>
        <div className="">
          <div className="grid grid-cols-1 gap-4 mt-5">
            <div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <ul className="space-y-4 w-full text-white sm:col-start-2">
                  <li className="text-heading-03">Offerings</li>
                  {ourServices1.map((challenge, index) => (
                    <li
                      key={challenge.id}
                      className={`flex items-start py-2 border-b-[0.5px] border-text-white border-opacity-20 w-full ${index === CHALLENGES_LIST_DATA.length - 1 ? 'border-b-0' : ''}`}
                    >
                      <div className="text-left">
                        <h3 className="font-normal text-paragraph-02">
                          {challenge.title}
                        </h3>
                      </div>
                    </li>
                  ))}
                </ul>
                <ul className="space-y-4 w-full text-white">
                  <li className="text-heading-03">Process</li>
                  {ourServices2.map((challenge, index) => (
                    <li
                      key={challenge.id}
                      className={`flex items-start py-2 border-b-[0.5px] border-text-white border-opacity-20 w-full ${index === CHALLENGES_LIST_DATA.length - 1 ? 'border-b-0' : ''}`}
                    >
                      <div className="text-left">
                        <h3 className="text-paragraph-02 font-normal">
                          {challenge.title}
                        </h3>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapperNew>

      <SectionWrapperNew
        sectionHeading=""
        sectionDesc=""
        sectionTextColor='#000'
        sectionHeadingLayout="center"
        style={{ backgroundColor: '#EFE9FB' }}
      >
        <Slider>
          {bscData.map((item, index) => (
            <SwiperSlide key={index}>
              <BorderRightCard item={item} onclick={handleBscCardClick} />
            </SwiperSlide>
          ))}
        </Slider>
      </SectionWrapperNew>
      {/* modal bsc data */}
      <Dialog
        shouldShow={showBscModal}
        onRequestClose={() => {
          setShowBscModal((prev) => !prev);
        }}
        title={bscDataItem?.title}
      >
        <div>
          <div className="">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <ul className="space-y-2 w-full">
                <li className="text-heading-04">Offerings</li>
                {bscDataItem?.offering?.map((challenge, index) => (
                  <li
                    key={challenge.id}
                    className={`flex items-start py-1 border-b-[0.5px] border-text-white border-opacity-20 w-full ${index === bscDataItem?.offering.length - 1 ? 'border-b-0' : ''}`}
                  >
                    <div className="text-left">
                      <h3 className="font-normal text-paragraph-02">
                        {challenge.text}
                      </h3>
                    </div>
                  </li>
                ))}
              </ul>
              <ul className="space-y-2 w-full">
                <li className="text-heading-04">Process</li>
                {bscDataItem?.process?.map((challenge2, index) => (
                  <li
                    key={challenge2.id}
                    className={`flex items-start py-1 border-b-[0.5px] border-text-white border-opacity-20 w-full ${index === bscDataItem?.process.length - 1 ? 'border-b-0' : ''}`}
                  >
                    <div className="text-left">
                      <h3 className="text-paragraph-02 font-normal">
                        {challenge2.text}
                      </h3>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Dialog>
      {/* modal end bsc data */}

      <SectionWrapperNew
        sectionHeading="Consulting Service Approach"
        sectionDesc="The foundation of our consulting service is strengthened by our ACT model, facilitating growth and success in a dynamic competitive landscape."
        sectionTextColor='text-neutral-white'
        sectionDescColor='text-neutral-white'
        sectionHeadingLayout="center"
        bgColor={'bg-primary-900'}>
        <div className="flex justify-center items-center flex-col">
          <div>
            <img src="/services/service01.svg" width="100%"></img>
          </div>
        </div>
      </ SectionWrapperNew>

      <BlogSection
        ID={"blog"}
        blogImageUrl={blogImageUrl}
        Heading={"Holistic Approach to Process Improvement"}
        Desc={
          "One of the most effective ways to achieve this is through process improvement strategies. By refining workflows, eliminating bottlenecks, and streamlining operations, businesses can enhance productivity, reduce costs and drive growth. In this blog, we'll explore the importance of process improvement and discuss key strategies for implementing it effectively."
        }
        maxWidth={'50%'}
        Color={"text-neutral-white"}
        BGColor={"bg-primary-900"}
      ></BlogSection>

      <DistinctiveSection DistinctiveData={distinctiveData}
        ID={'Distinctive'} Title={'The Distinctive Edge'} Desc={'We are a strategic IT partner to ambitious enterprises on their journey towards business progression'}
      >
      </DistinctiveSection>

      {/* Section--Case-Studies======================================================================= */}
      <CaseStudiesSection casestudy={CASE_STUDIES_DATA} csLayout={"2"} bgColor='bg-neutral-white' />
      {/* End-Section--Case-Studies */}

      <TransformBusinessForm
        Title={"Ready to Discuss with our Expert Consultant?"}
        Desc={
          "Share your details to discover how we can help you achieve better business results."
        }
      ></TransformBusinessForm>

    </>
  );
};

export default Page;
