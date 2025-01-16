"use client";
import React, { useState } from "react";
import EntIntro from "@/components/EntIntro";
import OverviewSection from "@/sections/overview/OverviewSection";
import SectionWrapper from '@/components/SectionWrapper';
import SectionHeading from '@/components/SectionHeading';
import SectionWidthSlider from "@/sections/sectionWithSlider/SectionWithSlider";
import HubExpertise from "@/sections/hub-of-expertise/HubExpertise";
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




import
ReviewSliderSection from '@/sections/reviewSlider/ReviewSliderSection';
import { Fascinate } from "next/font/google";



const Page = () => {

  const TESTIMONIAL_DATA = [
    {
      id: 1,
      cardHeading: "Power BI Solution on time with quality",
      cardDesc: 'We sincerely appreciate GITL team for delivering Power BI solution on time and with great quality. We really like the data visualisations & dashboards provided and it makes it easier for us to get a good grip on our business performance indicators.'
    },
    {
      id: 2,
      cardHeading: "Power BI Solution on time with quality",
      cardDesc: 'We sincerely appreciate GITL team for delivering Power BI solution on time and with great quality. We really like the data visualisations & dashboards provided and it makes it easier for us to get a good grip on our business performance indicators.'
    },
    {
      id: 3,
      cardHeading: "Power BI Solution on time with quality",
      cardDesc: 'We sincerely appreciate GITL team for delivering Power BI solution on time and with great quality. We really like the data visualisations & dashboards provided and it makes it easier for us to get a good grip on our business performance indicators.'
    },
  ];

  const CHALLENGES_LIST_DATA = [
    { id: 1, title: "Inadequate understanding of business and customer perspectives", icon: '/upgradeCloud/icons/challengesIcon.svg' },
    { id: 2, title: "Existing or upcoming market conditions ambiguity", icon: '/upgradeCloud/icons/challengesIcon.svg' },
    { id: 3, title: "Discord between business vision and strategy", icon: '/upgradeCloud/icons/challengesIcon.svg' },
    { id: 4, title: "Innovation challenges and new capabilities deployment", icon: '/upgradeCloud/icons/challengesIcon.svg' },
    { id: 5, title: "Absence of enterprise-wide adaptability", icon: '/upgradeCloud/icons/challengesIcon.svg' },
    { id: 6, title: "Ineffectual strategy implementation", icon: '/upgradeCloud/icons/challengesIcon.svg' },
  ];

  const ourServices1 = [
    { id: 1, title: "Operation Transformation (ERP) ", icon: '/upgradeCloud/icons/ico--target.svg' },
    { id: 2, title: "Operation Transformation (ERP) ", icon: '/upgradeCloud/icons/ico--target.svg' },
    { id: 3, title: "Weak Disaster Recovery and Redundancy", icon: '/upgradeCloud/icons/ico--target.svg' },
    { id: 4, title: "Inadequate Data Integrity", icon: '/upgradeCloud/icons/ico--target.svg' },
  ];

  const ourServices2 = [
    { id: 1, title: "Operation Transformation (ERP) ", icon: '/upgradeCloud/icons/ico--target.svg' },
    { id: 2, title: "Operation Transformation (ERP) ", icon: '/upgradeCloud/icons/ico--target.svg' },
    { id: 3, title: "Weak Disaster Recovery and Redundancy", icon: '/upgradeCloud/icons/ico--target.svg' },
    { id: 4, title: "Inadequate Data Integrity", icon: '/upgradeCloud/icons/ico--target.svg' },
  ];

  const CASE_STUDIES_DATA = [
    {
      imageURL: " ",
      videoURL: "/businessConsulting/videos/caseStudy.mp4",
      title: "Case Studies",
      heading: 'Delivering Results that Matters',
      description: "",
      link: "",
      color: '#FFFFFF',
      bgCardColor: '#2B1624'
    },
    {
      imageURL: "",
      title: "",
      heading: 'Cloud Consulting Services',
      description: "Exclusive Distributor of Renowned Coffee Brand in Egypt and Saudi Arabia Implements cloud-based D365 Finance, SCM, and Commerce.",
      link: "/case-study-1",
      color: '#000',
      bgCardColor: '#E4E4E4'
    },

    {
      imageURL: "/path/to/image1.jpg",
      title: "",
      heading: "Transformation Consulting",
      description: "Leading manufacturer of Electrical components for the Automobile sector modernize its business application with successful implementation of Infor LN.",
      link: "/case-study-1",
      color: '#000',
      bgCardColor: '#FCE6F4'
    },

    // Add more case studies here...
  ];

  const distinctiveData = [
    {
      _id: 1,
      desc: "Strong legacy of our parent company - Godrej Enterprise group which has succeeded for more than 125 years.",
      icon: "/businessConsulting/distinctiveEdge/strongLegacy.svg",
    },
    {
      _id: 2,
      desc: "Shared DNA of engineering expertise from our parent group - Godrej Enterprise Group with 1.7Bn revenue.",
      icon: "/businessConsulting/distinctiveEdge/sharedDNA.svg",
    },
    {
      _id: 3,
      desc: "Long-term global relationships built on trust, reliability and collaboration.",
      icon: "/businessConsulting/distinctiveEdge/globalRelationships.svg",
    },
    {
      _id: 4,
      desc: "Industry-focused teams executing time-tested practices of excellence.",
      icon: "/businessConsulting/distinctiveEdge/industryFocused.svg",
    },
    {
      _id: 5,
      desc: "Holistic ecosystem including scalable deployment, support services and diverse portfolio of ERPs and digital solutions.",
      icon: "/businessConsulting/distinctiveEdge/holisticEcosystem.svg",
    },
    {
      _id: 6,
      desc: "Responsive approach and defined processes that set high standards.",
      icon: "/businessConsulting/distinctiveEdge/responsiveApproach.svg",
    },

  ]

  const blogImageUrl = "/businessConsulting/blog-bg.webp";
  const imgBGURL_Challenges =
    "/businessConsulting/knockingBusinessChallenges.webp";

  const HUBEXPERTISE_COUNTER_DATA = [
    {
      start: 10,
      end: 20,
      description: "Years of Managing Global customer for Data Security",
    },
    {
      start: 10,
      end: 100,
      description: "Cyber Security Solutions Implemented",
    },
    // Add more counters as needed
  ];

  const ultimateChoiceData = [
    {
      id: 1,
      BGImageUrl: "",
      BGColor: "#fff",
      CardBGColor: "transparent",
      CardTextColor: '#000',
      CardTitle: "",
      CardIconUrl: "/upgradeCloud/icons/ico--target.svg",
      CardHeading: "Sample Heading",
      CardDesc:
        "Scalability according to evolving business needs.Scalability according to evolving business needs.",
      isArrow: "",
      link: [],
    },

    {
      id: 2,
      BGImageUrl: "",
      BGColor: "#fff",
      CardBGColor: "transparent",
      CardTextColor: '#000',
      CardTitle: "",
      CardIconUrl: "/upgradeCloud/icons/ico--target.svg",
      CardHeading: "Sample Heading",
      CardDesc:
        "Faster development cycles with pay-as-you-go model offering cost effectiveness and business agility",
      isArrow: "",
      link: [],
    },
    {
      id: 3,
      BGImageUrl: "",
      BGColor: "#fff",
      CardBGColor: "transparent",
      CardTextColor: '#000',
      CardTitle: "",
      CardIconUrl: "/upgradeCloud/icons/ico--target.svg",
      CardHeading: "Sample Heading",
      CardDesc:
        "Drive business agility and improved ROI with automation",
      isArrow: "",
      link: [],
    },
    {
      id: 4,
      BGImageUrl: "",
      BGColor: "#fff",
      CardBGColor: "transparent",
      CardTextColor: '#000',
      CardTitle: "",
      CardIconUrl: "/upgradeCloud/icons/ico--target.svg",
      CardHeading: "Sample Heading",
      CardDesc:
        "Highest levels of security and privacy, ensuring data is safeguarded",
      isArrow: "",
      link: [],
    },
  ];


  const bscData = [
    {
      id: 1, icon: '', title: 'Automation and Data Consulting ', desc: 'We smoothly relocate your IT to Azure Cloud without redesigning applications and with minimal disruption in your workflows.',
      offering: [
        { id: 1, text: 'ai and rpa' },
        { id: 2, text: 'ai and rpa' },
        { id: 3, text: 'ai and rpa' },
      ],
      process: [
        { id: 1, text: 'ai and rpa' },
        { id: 2, text: 'ai and rpa' },
        { id: 3, text: 'ai and rpa' },
      ],
    },
    {
      id: 2, icon: '', title: 'Automation and Data Consulting ', desc: 'We smoothly relocate your IT to Azure Cloud without redesigning applications and with minimal disruption in your workflows.',
      offering: [
        { id: 1, text: 'ai and rpa' },
        { id: 2, text: 'ai and rpa' },
        { id: 3, text: 'ai and rpa' },
      ],
      process: [
        { id: 1, text: 'ai and rpa' },
        { id: 2, text: 'ai and rpa' },
        { id: 3, text: 'ai and rpa' },
      ],
    },
  ];

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
      <SectionWrapperNew
        sectionHeading="Knocking Business Challenges"
        sectionDesc="Partner with us to navigate critical challenges, simplify complex processes, and develop a future-ready organization"
        sectionTextColor='text-neutral-white'
        sectionDescColor='text-neutral-white'
        sectionHeadingLayout="horizontal"
        bgColor={'bg-primary-900'}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ul className=" space-y-4 w-full text-neutral-white">
            {CHALLENGES_LIST_DATA.map((challenge, index) => (
              <li
                key={challenge.id}
                className={`flex items-start py-2 border-b-[0.5px] border-neutral-white border-opacity-20 w-full ${index === CHALLENGES_LIST_DATA.length - 1 ? 'border-b-0' : ''}`}
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
          <div>
            {/* <img src="/about/video.png" /> */}
          </div>
        </div>
      </SectionWrapperNew>

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
                        <h3 className="font-normal text-paragraph-01">
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
                        <h3 className="text-paragraph-01 font-normal">
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
              <div className="sm:px-6" style={{ borderRight: '2px solid #000' }} >
                <Image
                  src={item.icon}
                  width={64}
                  height={64}
                  alt={"icon"}
                  className=""
                />
                <div className="px-4 sm:px-0">
                  <div className="text-heading-03 mb-2 font-semibold">{item.title}</div>
                  <p className="text-paragraph-02 sm:min-h-[72px] mb-4">{item.desc}</p>
                  <div className="flex justify-end">
                    <OutlinedButtonWithArrow size={20} arrowColor={'#000'} onClick={() => handleBscCardClick(true, item)} />
                  </div>
                </div>
              </div>
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
