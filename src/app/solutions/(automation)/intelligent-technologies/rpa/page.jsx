"use client";
import EntIntro from "@/components/EntIntro";
import React, { useState } from "react";
import Image from "next/image";
import SectionNav from "@/components/SectionNav";
import InfotechWeeklyAlt from "@/sections/infotechWeeklyAlt/InfotechWeeklyAlt";

/**
 * * Sandeep Rana
 * Logos
 */

import uiPath from "../../../../../../public/logos/rpa/uiPath.svg";
import automationAnywhere from "../../../../../../public/logos/rpa/automation-anywhere.svg";
import powerAutomate from "../../../../../../public/logos/rpa/microsoft-power-automate-logo.jpg";

import OverviewSection from "@/sections/overview/OverviewSection";
import SectionHeading from '@/components/SectionHeading';
import SectionWrapper from '@/components/SectionWrapper';
import SectionWidthSlider from "@/sections/sectionWithSlider/SectionWithSlider";
import ServiceOfferingSection from '@/sections/serviceOffering/ServiceOfferingSection';
import DistinctiveSection from '@/sections/Distinctive/DistinctiveSection';
import TransformBusinessForm from '@/sections/transformBusinessFrom/TransformBusinessFromSection';



const RPASolution = [
  {
    id: 1,
    CardBGImageUrl: '/rpa/ArtboardBg.png',
    Color: 'white',
    cardTitle: "",
    cardIconUrl: '',
    cardHeading: 'Computer Vision',
    cardDesc: 'We specialize in custom video and image analysis tool leveraging advanced',
    isArrow: 'true',
  },
  {
    id: 2,
    CardBGImageUrl: '/rpa/ArtboardBg.png',
    Color: 'white',
    cardTitle: "",
    cardIconUrl: '',
    cardHeading: 'Computer Vision',
    cardDesc: 'We specialize in custom video and image analysis tool leveraging advanced',
    isArrow: 'true',
  },
  {
    id: 3,
    CardBGImageUrl: '/rpa/ArtboardBg.png',
    Color: 'white',
    cardTitle: "",
    cardIconUrl: '',
    cardHeading: 'Computer Vision',
    cardDesc: 'We specialize in custom video and image analysis tool leveraging advanced',
    isArrow: 'true',
  }, {
    id: 4,
    CardBGImageUrl: '/rpa/ArtboardBg.png',
    Color: 'white',
    cardTitle: "",
    cardIconUrl: '',
    cardHeading: 'Computer Vision',
    cardDesc: 'We specialize in custom video and image analysis tool leveraging advanced',
    isArrow: 'true',
  },
]

const RPALifeCycleData = [
  { id: 1, title: 'Enable', cardHeading: 'Infrastructure Setup', list: [{ id: '1', text: 'At least 10 characters (and up to 100 characters)' }, { id: '1', text: 'At least 10 characters (and up to 100 characters)' }] },
  { id: 2, title: 'Enable', cardHeading: 'Infrastructure Setup', list: [{ id: '1', text: 'At least 10 characters (and up to 100 characters)' }, { id: '1', text: 'At least 10 characters (and up to 100 characters)' }] },
  { id: 3, title: 'Enable', cardHeading: 'Infrastructure Setup', list: [{ id: '1', text: 'At least 10 characters (and up to 100 characters)' }, { id: '1', text: 'At least 10 characters (and up to 100 characters)' }] },
  { id: 4, title: 'Enable', cardHeading: 'Infrastructure Setup', list: [{ id: '1', text: 'At least 10 characters (and up to 100 characters)' }, { id: '1', text: 'At least 10 characters (and up to 100 characters)' }] },
]

const offeringLinkListData = [
  { id: 1, text: 'Consultation Services', isActive: 'false', },
  { id: 2, text: 'Feasibility Check Services', isActive: 'false' },
  { id: 3, text: 'RPA Deployment', isActive: 'false' },
]

const offeringCardData = [
  { id: '1', CardBGImageUrl: '', BGColor: '#fff', cardTitle: "Consultancy Services", cardIconUrl: '', cardHeading: '', cardDesc: 'We conduct process and platform estimations, capture automation requirements, create', isArrow: false, downImageUrl: '/rpa/Offering01.png', link: [], Color: '#000', cardDownImageMinHeight: '300px' },
  { id: '2', CardBGImageUrl: '', BGColor: '#fff', cardTitle: "2Consultancy Services", cardIconUrl: '', cardHeading: '', cardDesc: 'We conduct process and platform estimations, capture automation requirements, create', isArrow: false, downImageUrl: '/rpa/Offering01.png', link: [], Color: '#000', cardDownImageMinHeight: '300px' },
  { id: '3', CardBGImageUrl: '', BGColor: '#fff', cardTitle: "3Consultancy Services", cardIconUrl: '', cardHeading: '', cardDesc: 'We conduct process and platform estimations, capture automation requirements, create', isArrow: false, downImageUrl: '/rpa/Offering01.png', link: [], Color: '#000', cardDownImageMinHeight: '300px' },

]

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

const page = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [hoveredCard, setHoveredCard] = useState(null);
  return (
    <>
      <EntIntro
        title="Automate Business Operations"
        desc=""
        cta="Let's Connect"
        width="60%"
        video="https://gitl-usa.s3.us-west-1.amazonaws.com/banner1.mp4"
      />
      <>
        <SectionNav
          // Why RPA?
          // Partners
          // Services
          // Use Cases
          // Project Lifecycle

          arr={[
            {
              _id: 1,
              title: "Why RPA?",
              link: "#whyrpa",
            },
            {
              _id: 2,
              title: "Partners",
              link: "#Partners",
            },
            {
              _id: 3,
              title: "Services",
              link: "#Services",
            },
            {
              _id: 4,
              title: "Use Cases",
              link: "#UseCases",
            },
            {
              _id: 5,
              title: "Project Lifecycle",
              link: "#ProjectLifecycle",
            },
          ]}
        />
      </>

      {/* Overview  */}
      <OverviewSection Text={'Our forte lies in upgrading business operations with the high-powered productivity of Robotic Process Automation (RPA). We help you to manage high-volume tasks by'} />

      {/* optimising rpa solution */}
      <SectionWidthSlider
        BGColor="#EFE9FB"
        Heading={'Optimising businesses through RPA solutions'}
        Color={'black'}
        MaxWidth={'50%'}
        CardDataList={RPASolution}
      ></SectionWidthSlider>

      {/* inteligent technologies */}
      <SectionWrapper ID="Platforms">
        <div className="text-left max-w-screen-xl md:max-w-screen-xl mb-5 pb-0 grid grid-cols-1">
          {/* left */}
          <div className="bg-[#FFF] flex items-start flex-col justify-between  relative">
            <div className="w-full md:max-w-[607px]">
              <SectionHeading
                Heading={'Expertise in RPA Platform'}
                Desc={'Our proficiency with AI/ML platforms paves the way for progressive business results with the intersection of innovation and efficiency.'}
              >
              </SectionHeading>
            </div>
            <div className="flex flex-col md:flex-row justify-center py-10 items-center gap-20 md:py-20 mb-5">
              <div>
                <Image src={uiPath} alt="uiPath" width={200} />

              </div>
              <div>
                <Image src={powerAutomate} alt="powerAutomate" width={320} />
              </div>
              <div>
                <Image
                  src={automationAnywhere}
                  alt="automationAnywhere"
                  width={200}
                />
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* service Offerings section */}

      <ServiceOfferingSection id="Benefits"
        BGColor="#1D162B"
        Heading={'Service Offerings'}
        Desc={'Artificial Intelligence (AI) and Machine Learning (ML) are driving transformative changes, offering multiple benefits that redefine the way you do business.'}
        Color={'white'}
        MaxWidth={'40%'}
        CardDataList={offeringCardData}
        LinkListData={offeringLinkListData}
      >

      </ServiceOfferingSection>

      {/* project life cycle */}
      <SectionWrapper id="" BGColor="#1D162B" style={{ marginTop: '-35px' }}>
        <div className="grid grid-cols-2 gap-20">
          <div className="">
            <SectionHeading
              Heading={'RPA Project Lifecycle'}
              Desc={'From inception to upheld brilliance, every stage of our project lifecycle is precisely devised to optimize your business processes.'}
              Color="white"
            >
            </SectionHeading>
            <div className="my-10" style={{ minHeight: '300px', position: 'relative' }}>
              <Image src="/rpa/Offering01.png" alt="name" layout='fill' objectFit='cover' className="rounded-3xl" />
            </div>
          </div>

          <div className="" style={{ maxHeight: '540px' }}>
            <div class=" p-6 bg-[#EFE9FB] border border-gray-200 rounded-3xl flex flex-col" style={{ overflow: 'auto', maxHeight: 'inherit' }}>
              {RPALifeCycleData.map((item) => (
                <>
                  <div className="card bg-white rounded-3xl mb-3">
                    <div className="card-body p-6">
                      <div className="text-[#E0028E] mb-3">{item.title}</div>
                      <h5 class="text-[28px] leading-[36px] font-semibold mb-3">{item.cardHeading}</h5>
                      <ul class="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
                        {item.list && item.list.map((listItem) => (
                          <>
                            <li>
                              {listItem.text}
                            </li>
                          </>
                        ))}
                      </ul>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>

      </SectionWrapper>

      {/* Distinctive section*/}
      <DistinctiveSection DistinctiveData={distinctiveData}
        ID={'Distinctive'} Title={'The Distinctive Edge'} Desc={'Trust Godrej Infotech to leverage Intelligent technologies and lead business into competitive digital landscape.'}
      >
      </DistinctiveSection>

      {/* transform business with us section */}
      <TransformBusinessForm Title={'Transform your Business with us'} Desc={"Let us discuss how intelligent technologies can help you with rapid growth."}>
      </TransformBusinessForm>

      {/* Infotech Weekly Updates */}
      <InfotechWeeklyAlt />
    </>
  );
};

export default page;
