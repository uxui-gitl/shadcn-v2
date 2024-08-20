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
import DistinctiveSection from '@/sections/distinctive/DistinctiveSection';
import TransformBusinessForm from '@/sections/transformBusinessFrom/TransformBusinessFromSection';



const RPASolution = [
  {
    id: 1,
    CardBGImageUrl: '/rpa/ArtboardBg.png',
    CardTextColor: 'white',
    CardBGColor:'#1D162B',
    CardBGImageUrlSize:"contain",
    CardTitle: "",
    CardIconUrl: '',
    CardHeading: 'Increase Productivity',
    CardDesc: 'Automate repetitive tasks to enhance productivity with AI-driven workflow automation and analytics',
    isArrow: false,
  },
  {
    id: 2,
    CardBGImageUrl: '/rpa/ArtboardBg.png',
    CardTextColor: 'white',
    CardBGColor:'#1D162B',
    CardBGImageUrlSize:"contain",
    CardTitle: "",
    CardIconUrl: '',
    CardHeading: 'Accurate Outcomes',
    CardDesc: 'AI-driven workflows, OCR and rule-based system enables accurate results',
    isArrow: false,
  },
  {
    id: 3,
    CardBGImageUrl: '/rpa/ArtboardBg.png',
    CardTextColor: 'white',
    CardBGColor:'#1D162B',
    CardBGImageUrlSize:"contain",
    CardTitle: "",
    CardIconUrl: '',
    CardHeading: 'Compliance and Consistency',
    CardDesc: 'Manage contract workflows, forms and compliance with consistency and regulatory adherence',
    isArrow: false,
  }, 
  {
    id: 4,
    CardBGImageUrl: '/rpa/ArtboardBg.png',
    CardTextColor: 'white',
    CardBGColor:'#1D162B',
    CardBGImageUrlSize:"contain",
    CardTitle: "",
    CardIconUrl: '',
    CardHeading: 'Strengthen Potential',
    CardDesc: 'Empower employees to focus on strategic tasks to deliver attentive experience to customers',
    isArrow: false,
  },
    {
    id: 5,
    CardBGImageUrl: '/rpa/ArtboardBg.png',
    CardTextColor: 'white',
    CardBGColor:'#1D162B',
    CardBGImageUrlSize:"contain",
    CardTitle: "",
    CardIconUrl: '',
    CardHeading: 'Optimize FTE Cost',
    CardDesc: 'Reduce additional FTE requirements to save significant cost on salaries, benefits and overheads',
    isArrow: false,
  },
  {
    id: 6,
    CardBGImageUrl: '/rpa/ArtboardBg.png',
    CardTextColor: 'white',
    CardBGColor:'#1D162B',
    CardBGImageUrlSize:"contain",
    CardTitle: "",
    CardIconUrl: '',
    CardHeading: 'Enhance Flexibility',
    CardDesc: 'Adapt to changing business needs without hiring and training new staff, saving time and expense',
    isArrow: false,
  },
  {
    id: 7,
    CardBGImageUrl: '/rpa/ArtboardBg.png',
    CardTextColor: 'white',
    CardBGColor:'#1D162B',
    CardBGImageUrlSize:"contain",
    CardTitle: "",
    CardIconUrl: '',
    CardHeading: 'Reduce AHT (Average Handling Time)',
    CardDesc: 'Enhance customer service quality, minimize response time and improve operational efficiency',
    isArrow: false,
  },
]

const RPALifeCycleData = [
  { id: 1, title: 'Enable', CardHeading: 'Infrastructure Setup', list: [{ id: '1', text: 'Design server architecture' }, { id: '2', text: 'Install and configure)' }, { id: '3', text: 'Set up development, test & production environments)' }] },
  { id: 2, title: 'Preparation', CardHeading: 'Project Governance', list: [{ id: '1', text: 'Discuss & finalize project development approach)' }, { id: '2', text: 'Review RPA best practices)' }] },
  { id: 3, title: 'Design', CardHeading: 'Workflow Design', list: [{ id: '1', text: 'Create Process Design Document (PDD))' }, { id: '2', text: 'Build test cases )' }, { id: '3', text: 'Solution Design)' }] },
  { id: 4, title: 'Build', CardHeading: 'Workflow Development', list: [{ id: '1', text: 'Build workflows' }, { id: '2', text: 'Unit and Functional testing' }, { id: '3', text: 'Create Development Specification Document (DSD)' }] },
  { id: 5, title: 'Test', CardHeading: 'Quality Assurance', list: [{ id: '1', text: 'Execute test cases' }, { id: '2', text: 'Report results' }, { id: '3', text: 'Go/NoGo decision finalization  ' }] },
  { id: 6, title: 'Sustain', CardHeading: 'Hypercare', list: [{ id: '1', text: 'Support workflow' }, { id: '2', text: 'Manage Changes and Improvements)' }] },
]

const offeringLinkListData = [
  { id: 1, text: 'Consultation Services', isActive: 'false', },
  { id: 2, text: 'Feasibility Check Services', isActive: 'false' },
  { id: 3, text: 'RPA Deployment', isActive: 'false' },
  { id: 4, text: 'RPA Managed Services', isActive: 'false' },
]

const offeringCardData = [
  { id: '1', CardBGImageUrl: '', CardDownImageMinHeight:"350px", CardBGColor: '#fff', CardTitle: "Consultation Services", CardIconUrl: '', CardHeading: '', CardDesc: 'We conduct process and platform estimations, capture automation requirements, create business cases, process validations and make clear Standard Operating Procedures (SoPs), ensuring your RPA journey aligns perfectly with your business goals.', isArrow: false, DownImageUrl: '/rpa/Offering01.png', link: [], Color: '#000', cardDownImageMinHeight: '300px' },
  { id: '2', CardBGImageUrl: '', CardDownImageMinHeight:"350px", CardBGColor: '#fff', CardTitle: "Feasibility Check Services", CardIconUrl: '', CardHeading: '', CardDesc: 'Our expert team design RPA pilot and build Proof of Concepts (PoCs) taking your RPA vision into consideration.', isArrow: false, DownImageUrl: '/rpa/Offering01.png', link: [], Color: '#000', cardDownImageMinHeight: '300px' },
  { id: '3', CardBGImageUrl: '', CardDownImageMinHeight:"350px", CardBGColor: '#fff', CardTitle: "RPA Deployment", CardIconUrl: '', CardHeading: '', CardDesc: 'We install / configure automation scripts with precision followed by continuous enhancements, run end-to-end testing, manage QA(Quality assurance) processes and carefully document the code.', isArrow: false, DownImageUrl: '/rpa/Offering01.png', link: [], Color: '#000', cardDownImageMinHeight: '300px' },
  { id: '4', CardBGImageUrl: '', CardDownImageMinHeight:"350px", CardBGColor: '#fff', CardTitle: "RPA Managed Services", CardIconUrl: '', CardHeading: '', CardDesc: 'We maintain and monitor your RPA application and Bot for their excellent performance, offering ongoing support and driving continuous improvement.', isArrow: false, DownImageUrl: '/rpa/Offering01.png', link: [], Color: '#000', cardDownImageMinHeight: '300px' },

]

const distinctiveData = [
  {
    _id: 1,
    desc: "Employee Access Creation",
    icon: "",
  },
  {
    _id: 2,
    desc: "Ticketing system - Incident management",
    icon: "",
  },
  {
    _id: 3,
    desc: "Account Payable and Receivable Process",
    icon: "",
  },
  {
    _id: 4,
    desc: "Vendor Onboarding Process",
    icon: "",
  },
  {
    _id: 5,
    desc: "Customer Onboarding Process",
    icon: "",
  }
]

const page = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [hoveredCard, setHoveredCard] = useState(null);
  return (
    <>
      <EntIntro
        title="Multiply Your Business Efficiency"
        desc="Automate Operations with Our Robotic Process Automation (RPA) Solutions and Services"
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
      <OverviewSection Text={'Manage high-volume tasks by slashing down time requirements and enabling precise outcomes. Our tailored RPA solutions enable businesses to seamlessly navigate intricate workflows and attain operational excellence.'} />

      {/* optimising rpa solution */}
      <SectionWidthSlider
        BGColor="#EFE9FB"
        Heading={'Optimising businesses through RPA solutions'}
        Color={'black'}
        SectionHeadingMaxWidth={'50%'}
        CardDataList={RPASolution}
      ></SectionWidthSlider>

      {/* inteligent technologies */}
      <SectionWrapper ID="Platforms">
        <div className="text-left max-w-screen-xl md:max-w-screen-xl mb-5 pb-0 grid grid-cols-1">
          {/* left */}
          <div className="bg-[#FFF] flex items-start flex-col justify-between relative">
            <div className="w-full md:max-w-[607px]">
              <SectionHeading
                Heading={'RPA Platform Expertise'}
                Desc={'Our in-depth expertise in RPA platforms helps in maximizing functionality, ensuring optimal business performance.'}
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
              Desc={'From inception to upheld outcomes, every stage of our RPA project lifecycle is precisely developed to optimize your business processes.'}
              Color="white"
            >
            </SectionHeading>
            <div className="my-10" style={{ minHeight: '300px', position: 'relative' }}>
              <Image src="/rpa/Offering01.png" alt="name" layout='fill' objectFit='cover' className="rounded-3xl" />
            </div>
          </div>

          <div className="" style={{ maxHeight: '600px' }}>
            <div class=" p-6 bg-[#EFE9FB] border border-gray-200 rounded-3xl flex flex-col" style={{ overflow: 'auto', maxHeight: 'inherit' }}>
              {RPALifeCycleData.map((item) => (
                <>
                  <div className="card bg-white rounded-3xl mb-3">
                    <div className="card-body p-6">
                      <div className="text-[#E0028E] mb-3">{item.title}</div>
                      <h5 class="text-[28px] leading-[36px] font-semibold mb-3">{item.CardHeading}</h5>
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
        ID={'Distinctive'} Title={'Our RPA Use Cases'} Desc={'We endeavor to build actual business impact of RPA improving business output and leading digital transformation.'}
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
