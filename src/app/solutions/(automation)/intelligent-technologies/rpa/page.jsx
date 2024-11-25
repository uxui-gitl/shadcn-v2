"use client";
import EntIntro from "@/components/EntIntro";
import React, { useState } from "react";
import Image from "next/image";
import SectionNav from "@/components/SectionNav";



import OverviewSection from "@/sections/overview/OverviewSection";
import SectionHeading from "@/components/SectionHeading";
import SectionWrapper from "@/components/SectionWrapper";
import ServiceOfferingSection from "@/sections/serviceOffering/ServiceOfferingSection";
import DistinctiveSection from "@/sections/distinctive/DistinctiveSection";
import TransformBusinessForm from "@/sections/transformBusinessFrom/TransformBusinessFromSection";
import CommonCardTwoSlider from "@/sections/commonCardTwoSlider/CommonCardTwoSlider";
import IndustrySpotlight from "@/sections/industry-spotlight/industrySpotlight";
import SectionWrapperNew from "@/components/SectionWrapperNew";
import { SwiperSlide } from "swiper/react";
import Slider from "@/components/Slider";
import CommonCardTwo from "@/components/CommonCardTwo";


const uiPath = '/logos/rpa/uiPath.svg';
const automationAnywhere = '/logos/rpa/automation-anywhere.svg';
const powerAutomate = '/logos/rpa/power-automate.svg';

const RPASolution = [
  {
    id: 1,
    cardBGImageUrl: "/rpa/Cards/1.webp",
    cardBGColor: "#7F4EE1",
    cardHeading: "Increase Productivity",
    cardDesc:
      "Automate repetitive tasks to enhance productivity with AI-driven workflow automation and analytics",
    isArrow: false,
    cardTextColor: "white",
    cardType: 1,
  },
  {
    id: 2,
    cardBGImageUrl: "/rpa/Cards/2.webp",
    cardBGColor: "#7F4EE1",
    cardHeading: "Accurate Outcomes",
    cardDesc:
      "AI-driven workflows, OCR and rule-based system enables accurate results",
    isArrow: false,
    cardTextColor: "white",
    cardType: 2,
  },
  {
    id: 3,
    cardBGImageUrl: '/rpa/Cards/3.webp',
    cardBGColor: '#fff',
    cardHeading: 'Compliance and Consistency',
    cardDesc: 'Manage contract workflows, forms and compliance with consistency and regulatory adherence',
    isArrow: false,
    cardTextColor: 'white',
    cardType: 1,
    downImageUrl:'',
  },
  {
    id: 4,
    cardBGImageUrl: "/rpa/Cards/4.webp",
    cardBGColor: "#EFE9FB",
    cardHeading: "Strengthen Potential",
    cardDesc:
      "Empower employees to focus on strategic tasks to deliver attentive experience to customers",
    isArrow: false,
    cardTextColor: "white",
    cardType: 2,
  },
  {
    id: 5,
    cardBGImageUrl: "/rpa/Cards/5.webp",
    cardBGColor: "#EFE9FB",
    cardHeading: "Enhance Flexibility",
    cardDesc:
      "Adapt to changing business needs without hiring and training new staff, saving time and expense",
    isArrow: false,
    cardTextColor: "white",
    cardType: 1,
  },
  {
 id: 6,
    cardBGImageUrl: '/rpa/Cards/6.webp',
    cardBGColor: '#fff',
    cardHeading: 'Reduce AHT (Average Handling Time)',
    cardDesc: 'Enhance customer service quality, minimize response time and improve operational efficiency',
    isArrow: false,
    cardTextColor: 'white',
    cardType: 2,
    downImageUrl:'',
  },
  {
    id: 7,
    cardBGImageUrl: "/rpa/Cards/7.webp",
    cardBGColor: "#EFE9FB",
    cardHeading: "Optimize FTE Cost)",
    cardDesc:
      "Reduce additional FTE requirements to save significant cost on salaries, benefits and overheads",
    isArrow: false,
    cardTextColor: "white",
    cardType: 1,
  },
];

const RPALifeCycleData = [
  {
    id: 1,
    title: "Enable",
    CardHeading: "Infrastructure Setup",
    list: [
      { id: "1", text: "Design server architecture" },
      { id: "2", text: "Install and configure)" },
      { id: "3", text: "Set up development, test & production environments)" },
    ],
  },
  {
    id: 2,
    title: "Preparation",
    CardHeading: "Project Governance",
    list: [
      { id: "1", text: "Discuss & finalize project development approach)" },
      { id: "2", text: "Review RPA best practices)" },
    ],
  },
  {
    id: 3,
    title: "Design",
    CardHeading: "Workflow Design",
    list: [
      { id: "1", text: "Create Process Design Document (PDD))" },
      { id: "2", text: "Build test cases )" },
      { id: "3", text: "Solution Design)" },
    ],
  },
  {
    id: 4,
    title: "Build",
    CardHeading: "Workflow Development",
    list: [
      { id: "1", text: "Build workflows" },
      { id: "2", text: "Unit and Functional testing" },
      { id: "3", text: "Create Development Specification Document (DSD)" },
    ],
  },
  {
    id: 5,
    title: "Test",
    CardHeading: "Quality Assurance",
    list: [
      { id: "1", text: "Execute test cases" },
      { id: "2", text: "Report results" },
      { id: "3", text: "Go/NoGo decision finalization  " },
    ],
  },
  {
    id: 6,
    title: "Sustain",
    CardHeading: "Hypercare",
    list: [
      { id: "1", text: "Support workflow" },
      { id: "2", text: "Manage Changes and Improvements)" },
    ],
  },
];

const offeringLinkListData = [
  {
    id: 1,
    text: "Consultation Services",
    beforeIconUrl: "",
    isArrowIconVisiable: "false",
  },
  {
    id: 2,
    text: "Feasibility Check Services",
    beforeIconUrl: "",
    isArrowIconVisiable: "false",
  },
  {
    id: 3,
    text: "RPA Deployment",
    beforeIconUrl: "",
    isArrowIconVisiable: "false",
  },
  {
    id: 4,
    text: "RPA Managed Services",
    beforeIconUrl: "",
    isArrowIconVisiable: "false",
  },
];

const offeringCardData = [
  {
    id: "1",
    cardTitle: "Consultation Services",
    cardDesc:
      "We conduct process and platform estimations, capture automation requirements, create business cases, process validations and make clear Standard Operating Procedures (SoPs), ensuring your RPA journey aligns perfectly with your business goals.",
    cardImageUrl: "/rpa/ServiceOfferings/ConsultationServices.webp",
  },
  {
    id: "2",
    cardTitle: "Feasibility Check Services",
    cardDesc:
      "Our expert team design RPA pilot and build Proof of Concepts (PoCs) taking your RPA vision into consideration.",
    cardImageUrl: "/rpa/ServiceOfferings/FeasibilityCheckServices.webp",
  },
  {
    id: "3",
    cardTitle: "RPA Deployment",
    cardDesc:
      "We install / configure automation scripts with precision followed by continuous enhancements, run end-to-end testing, manage QA(Quality assurance) processes and carefully document the code.",
    cardImageUrl: "/rpa/ServiceOfferings/RPA_Deployment.webp",
  },
  {
    id: "4",
    cardTitle: "RPA Managed Services",
    cardDesc:
      "We maintain and monitor your RPA application and Bot for their excellent performance, offering ongoing support and driving continuous improvement.",
    cardImageUrl: "/rpa/ServiceOfferings/RPA_ManagedServices.webp",
  },
];

const distinctiveData = [
  {
    _id: 1,
    desc: "Employee Access Creation",
    icon: "/rpa/Icons/EmployeeAccessCreation.svg",
  },
  {
    _id: 2,
    desc: "Ticketing system - Incident management",
    icon: "/rpa/Icons/TicketingSystemIncidentManagement.svg",
  },
  {
    _id: 3,
    desc: "Account Payable and Receivable Process",
    icon: "/rpa/Icons/AccountPayableReceivableProcess.svg",
  },
  {
    _id: 4,
    desc: "Vendor Onboarding Process",
    icon: "/rpa/Icons/VendorOnboardingProcess.svg",
  },
  {
    _id: 5,
    desc: "Customer Onboarding Process",
    icon: "/rpa/Icons/customerOnBorading.svg",
  },
];

const INDUSTRY_SPOTLIGHT = [
  {
    id: 1,
    cardBGImageUrl: "/rpa/industrySpotlight/Manufacturing.webp",
    cardBGColor: "#7F4EE1",
    cardHeading: "Manufacturing",
    cardDesc: "",
    isArrow: false,
    cardTextColor: "white",
  },

  // Add more cards as needed
];

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
        video="/rpa/video/pageBanner.mp4"
      />

      {/* Overview  */}
      <OverviewSection
        Text={
          "Manage high-volume tasks by slashing down time requirements and enabling precise outcomes. Our tailored RPA solutions enable businesses to seamlessly navigate intricate workflows and attain operational excellence."
        }
      />

      {/* optimising rpa solution */}
      <SectionWrapperNew
        bgColor={"bg-primary-10"}
        sectionHeading={
          "Why Consider RPA for Your Business?"
        }
        sectionDesc={""}
        sectionTextColor="text-primary-900"
        sectionHeadingLayout="left"
        setTop={false}
      >
        <Slider>
          {RPASolution?.map((item, index) => (
            <SwiperSlide key={index}>
              <CommonCardTwo Item={item}></CommonCardTwo>
            </SwiperSlide>
          ))}
        </Slider>
      </SectionWrapperNew>

      {/* optimising rpa solution end */}

      {/* inteligent technologies */}
      <SectionWrapperNew
        sectionHeading={"RPA Platform Expertise"}
        sectionDesc={
          "Our in-depth expertise in RPA platforms helps in maximizing functionality, ensuring optimal business performance.  "
        }
        sectionTextColor={"text-primary-900"}
        sectionHeadingLayout="horizontal"
        setTop={false}
      >
        <Slider>
          {[uiPath, powerAutomate, automationAnywhere]?.map((item, index) => (
            <SwiperSlide key={index} className="p-8">
              <Image src={item} width={320} height={100} alt='' />
            </SwiperSlide>
          ))}
        </Slider>
      </SectionWrapperNew>
      {/* service Offerings section */}

      <ServiceOfferingSection
        id=""
        sectionBGColor={"bg-primary-900"}
        sectionHeading={"Service Offerings"}
        sectionDesc={
          "We offer AI-driven process automation, process re-engineering and seamless implementation support for transformative business results."
        }
        sectionTextColor={"text-neutral-white"}
        cardData={offeringCardData}
        LinkListData={offeringLinkListData}
        setTop={true}
      ></ServiceOfferingSection>

      <IndustrySpotlight
        slidePerView={1}
        cardData={INDUSTRY_SPOTLIGHT}
        sectionHeading={"Industry Spotlight"}
        sectionDesc={
          "Understanding unique demands of each industry vertical and capitalizing  capabilities, we equip businesses to thrive in competitive market."
        }
        setTop={false}
      />

      {/* project life cycle */}
      <SectionWrapper
        id=""
        BGColor="bg-primary-900"
        style={{ marginTop: "-35px" }}
      >
        <div className="max-auto py-32 container grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-20">
          {/* Left Column */}
          <div className="flex flex-col justify-between min-h-[600px]">
            <SectionHeading
              Heading={"RPA Project Lifecycle"}
              Desc={
                "From inception to upheld outcomes, every stage of our RPA project lifecycle is precisely developed to optimize your business processes."
              }
              Color="white"
              headingContainerWidth="w-full"
            />

            {/* Image Container with 50% Height */}
            <div
              className="flex items-end h-1/2 mt-6 bg-primary-10 rounded-3xl"
              style={{
                backgroundImage: "url('/rpa/RPA_ProjectLifecycle.webp')",
                backgroundSize: "cover",
                backgroundPosition: "center center",
              }}
            ></div>
          </div>

          {/* Right Column */}
          <div className="" style={{ maxHeight: "600px" }}>
            <div
              className="p-2 bg-primary-10 border border-gray-200 rounded-3xl flex flex-col"
              style={{ overflow: "auto", maxHeight: "inherit" }}
            >
              {RPALifeCycleData.map((item, index) => (
                <div className="card bg-white rounded-3xl mb-3" key={index}>
                  <div className="card-body p-6">
                    <div className="text-body-01  text-secondary-400 mb-3">
                      {item.title}
                    </div>
                    <h5 className=" text-heading-03 font-bold mb-3">
                      {item.CardHeading}
                    </h5>
                    <ul className="max-w-md space-y-2 text-neutral-darkest-grey  text-base font-medium">
                      {item.list &&
                        item.list.map((listItem, listIndex) => (
                          <li
                            key={listIndex}
                            className="relative text-neutral-700 hover:text-primary-900 transition-colors duration-300 pl-4" // Ensure the padding is consistent
                          >
                            <span className="before:content-['•'] before:w-4 before:h-4 before:bg-no-repeat before:absolute before:left-0 before:top-0 before:bg-[url('/path/to/your-floral-icon.svg')] inline-block pr-2">
                              {listItem.text}
                            </span>
                          </li>
                        ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Distinctive section*/}
      <DistinctiveSection
        DistinctiveData={distinctiveData}
        ID={"Distinctive"}
        Title={"Our RPA Use Cases"}
        Desc={
          "We endeavor to build actual business impact of RPA improving business output and leading digital transformation."
        }
      ></DistinctiveSection>

      {/* transform business with us section */}
      <TransformBusinessForm
        Title={"Transform your Business with us"}
        Desc={
          "Let us discuss how our RPA expertise can help you with rapid growth."
        }
      ></TransformBusinessForm>

      {/* Infotech Weekly Updates */}
    </>
  );
};

export default page;
