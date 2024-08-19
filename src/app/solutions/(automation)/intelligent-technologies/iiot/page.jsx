"use client";
import EntIntro from "@/components/EntIntro";
import SectionNav from "@/components/SectionNav";
import DistinctiveSection from '@/sections/Distinctive/DistinctiveSection';
import BlogSection from '@/sections/blog/BlogSection';
import TransformBusinessForm from '@/sections/transformBusinessFrom/TransformBusinessFromSection';
import BenefitSliderSection from '@/sections/benefitSlider/BenefitSliderSection';
import { useState } from "react";

// component

import OverviewSection from "@/sections/overview/OverviewSection";

const distinctiveData = [
  {
    _id: 1,
    desc: "Deep understanding of specific business domains for developing AI and ML solutions that truly meet your needs.",
    icon: "",
  },
  {
    _id: 2,
    desc: "Agile approach that keeps projects on cutting edge.",
    icon: "",
  },
  {
    _id: 3,
    desc: "Fully signed Non-Disclosure Agreement (NDA) to protect your sensitive information.",
    icon: "",
  },
  {
    _id: 4,
    desc: "Exceed customer expectations and deliver AI and ML solutions in most effective way.",
    icon: "",
  },
  {
    _id: 5,
    desc: "Extensive experience in understanding industry-specific challenges and opportunities. ",
    icon: "",
  }
]

const benifitsCardsData = [
  { id: '1', text: 'Informed decision-making by extracting valuable insights and identifying patterns, correlation, and trends' },
  { id: '2', text: 'Informed decision-making by extracting valuable insights and identifying patterns, correlation, and trends' },
  { id: '3', text: 'Informed decision-making by extracting valuable insights and identifying patterns, correlation, and trends' },
  { id: '4', text: 'Informed decision-making by extracting valuable insights and identifying patterns, correlation, and trends' },
]

const yourImageUrl = '/ai-ml/AI-bgimage.jpg';
const blogImageUrl = '/ai-ml/blog-bg.png';

const Page = () => {
  return (
    <>
      <EntIntro
        title="Discover Real-Time Data Brilliance with Godrej Infotech IIoT Expertise"
        desc=""
        cta="Let's Connect"
        width="80%"
        video="https://gitl-usa.s3.us-west-1.amazonaws.com/banner1.mp4"
      />

      {/* section Nav */}
      <>
        <SectionNav
          // Solutions
          // Case Study
          // Benefits
          // Insights
          // Why Us

          arr={[
            {
              _id: 1,
              title: "Solutions",
              link: "#Solutions",
            },
            {
              _id: 2,
              title: "Case Study",
              link: "#CaseStudy",
            },
            {
              _id: 3,
              title: "Benefits",
              link: "#Benefits",
            },
            {
              _id: 4,
              title: "Insights",
              link: "#Insights",
            },
            {
              _id: 5,
              title: "Why Us",
              link: "#WhyUs",
            },
          ]}
        />
      </>
      {/* Overview  */}

      <OverviewSection Text={'We focus on refining businesses through IIoT services across diverse sectors, spanning Manufacturing, Supply Chain, Construction, Transportation, Power Generation'} />
      {/* GITL IOT solutions */}
      <BenefitSliderSection
        ID={'AIOfferings'}
        BGColor={'#1D162B'}
        Heading={'Benefits of AI / ML'}
        Desc={'Artificial Intelligence (AI) and Machine Learning (ML) are driving transformative changes, offering multiple benefits that redefine the way you do business.'}
        Color={'white'}
        MaxWidth={'40%'}
        CardDataList={benifitsCardsData}
      ></BenefitSliderSection>
      {/* blog section  */}

      <BlogSection ID={'blog'} blogImageUrl={blogImageUrl} Heading={'Unveilling Hyper automation  for supply chain efficiency'}
        Desc={'IIoT offers a multitude of benefits that enable businesses to gain competitive edge through innovation and succeed in digital era.'}
        Color={'white'}
        MaxWidth="70%"
      ></BlogSection>

      {/* Distinctive section*/}
      <DistinctiveSection DistinctiveData={distinctiveData}
        ID={'Distinctive'} Title={'The Distinctive Edge'} Desc={'Trust Godrej Infotech to leverage Intelligent technologies and lead business into competitive digital landscape.'}
      >
      </DistinctiveSection>

      {/* transform business with us section */}
      <TransformBusinessForm Title={'Transform your Business with us'} Desc={"Let us discuss how intelligent technologies can help you with rapid growth."}>
      </TransformBusinessForm>

    </>
  );
};

export default Page;
