"use client";
import EntIntro from "@/components/EntIntro";
import OverviewSection from "@/sections/overview/OverviewSection";
import SectionWrapper from '@/components/SectionWrapper';
import SectionHeading from '@/components/SectionHeading';
import SectionWithSlider from "@/sections/sectionWithSlider/SectionWithSlider";
import CommonCardThreeSlider from "@/sections/commonCardThreeSlider/CommonCardThreeSlider";
import CaseStudiesSection from "@/sections/case-studies/CaseStudiesSection";
import HubExpertise from "@/sections/hub-of-expertise/HubExpertise";
import BlogSection from "@/sections/blog/BlogSection";
import DistinctiveSection from "@/sections/distinctive/DistinctiveSection";
import ReviewSliderSection from '@/sections/reviewSlider/ReviewSliderSection';
import TransformBusinessForm from "@/sections/transformBusinessFrom/TransformBusinessFromSection";
import { Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
const page = () => {

  const distinctiveData = [
    {
      _id: 1,
      desc: "Prioritize incident resolution beyond SLAs and conduct thorough problem analysis using data and facts",
      icon: "/managedServices/distictiveEdge/prioritizeIncident.svg",
    },
    {
      _id: 2,
      desc: "Ensure your IT adapts, scales and evolves with business dynamics",
      icon: "/managedServices/distictiveEdge/ensureYour.svg",
    },
    {
      _id: 3,
      desc: "Global and Ticket-based support with weekly reviews",
      icon: "/managedServices/distictiveEdge/global.svg",
    },
    {
      _id: 4,
      desc: "Resilient incident management and timely IT support",
      icon: "/managedServices/distictiveEdge/resilient.svg",
    },
    {
      _id: 5,
      desc: "Reduce direct employment while maintaining effective operations",
      icon: "/managedServices/distictiveEdge/reduce.svg",
    },
    {
      _id: 6,
      desc: "Access to specialized IT expertise and proactive solutions",
      icon: "/managedServices/distictiveEdge/access.svg",
    },

  ]

  const blogImageUrl = '/managedServices/blog-bg.webp';

  const CHALLENGES_LIST_DATA = [
    { id: 1, title: "Unplanned downtime, security risks and inefficient operations.", icon: '/upgradeCloud/icons/ico--target.svg' },
    { id: 2, title: "Prolonged resolution times, increased errors, and decreased productivity.", icon: '/upgradeCloud/icons/ico--target.svg' },
    { id: 3, title: "Confront technological advancements and updates in the competitive landscape.", icon: '/upgradeCloud/icons/ico--target.svg' },
    { id: 4, title: "Need for refinement in incident resolution approach and effective tracking of issues.", icon: '/upgradeCloud/icons/ico--target.svg' },
    { id: 5, title: "Inconsistent formats and irregular audits of documentation for business process.", icon: '/upgradeCloud/icons/ico--target.svg' },
  ];

  const DATA_MGMT_DATA = [
    {
      id: 1,
      BGImageUrl: "",
      BGColor: "#fff",
      CardBGColor: "transparent",
      CardTextColor: "white",
      CardTitle: "",
      CardIconUrl: "/managedServices/Cornerstones/businessContinuity.svg",
      CardHeading: "Business continuity",
      CardDesc:
        "",
      isArrow: "true",
      link: [],
    },

    {
      id: 2,
      BGImageUrl: "",
      BGColor: "#fff",
      CardBGColor: "transparent",
      CardTextColor: "white",
      CardTitle: "",
      CardIconUrl: "/managedServices/Cornerstones/costEffectiveness.svg",
      CardHeading: "Cost effectiveness",
      CardDesc:
        "",
      isArrow: "true",
      link: [],
    },
    {
      id: 3,
      BGImageUrl: "",
      BGColor: "#fff",
      CardBGColor: "transparent",
      CardTextColor: "white",
      CardTitle: "",
      CardIconUrl: "/managedServices/Cornerstones/contingencyManagement.svg",
      CardHeading: "Proactive contingency management",
      CardDesc:
        "",
      isArrow: "true",
      link: [],
    },
    {
      id: 4,
      BGImageUrl: "",
      BGColor: "#fff",
      CardBGColor: "transparent",
      CardTextColor: "white",
      CardTitle: "",
      CardIconUrl: "/managedServices/Cornerstones/standardize.svg",
      CardHeading: "Standardize processes and practices",
      CardDesc:
        "",
      isArrow: "true",
      link: [],
    },
    
  ];

  const RPASolution = [
    {
      id: 1,
      cardBGColor: '#F5B1DC',
      cardHeading: 'Improved User Experience',
      cardDesc: 'Enhanced end-user satisfaction and experience through a responsive IT environment with minimal disruptions',
      isArrow: true,
      cardTextColor: 'black',
      cardTopImageUrl: '/managedServices/benefits/improved.webp'
    },
    {

      id: 2,
      cardBGColor: '#FCE6F4',
      cardHeading: 'Operational Efficiency',
      cardDesc: 'Optimized business time and cost, allowing for strategic focus',
      isArrow: true,
      cardTextColor: 'black',
      cardTopImageUrl: '/managedServices/benefits/operationalEfficiency.webp'
    },
    {

      id: 3,
      cardBGColor: '#CDBAF3',
      cardHeading: 'Proactive Issue Resolution',
      cardDesc: 'Rapid resolution of IT challenges, reducing response time',
      isArrow: true,
      cardTextColor: 'black',
      cardTopImageUrl: '/managedServices/benefits/proactive.webp'
    },
    {

      id: 4,
      cardBGColor: '#E4E4E4',
      cardHeading: 'Reliable IT Performance',
      cardDesc: 'Consistent performance, reliability, and flexibility',
      isArrow: true,
      cardTextColor: 'black',
      cardTopImageUrl: '/managedServices/benefits/reliable.webp'
    },
    
  ]

  const CASE_STUDIES_DATA = [
    {
      imageURL: "",
      videoURL: "/CloudStackServices/case-studies/bg--businessman-industry.mp4",
      title: "",
      heading: "Managed Services Projects Highlights",
      description:
        "World's top-notch businesses choose us for our excellent technical acumen and proven standards as wedeliver high- performing multidisciplinary solutions globally.",
      link: "",
      color: "#FFFFFF",
      bgCardColor: "#2B1624",
    },
    {
      imageURL: "/iiot/bg--bespoke--iiot-soltions.png",
      title: "",
      heading: "Optimises Operational cost by 25%",
      description:
        "Europe’s Leading Marine Services Provider optimises operational cost by 25% with Godrej Infotech’s Infor LN Managed & Rollout Services from Offshore",
      link: "https://godrejinfotech.com/assets/pdf/case-studies/EuropeLeadingMarineService_InforLN.pdf",
      color: "#2B1624",
      bgCardColor: "#00F8C4",
    },
    {
      imageURL: "",
      title: "",
      heading: "30% Cost Reduction by Standardising Processes",
      description: 'Multi-Year MS Dynamics NAV Support for Leading Global Tire Manufacturing Organization',
      link: "https://www.godrejinfotech.com/assets/pdf/case-studies/Global-Tire-Manufacturing-NAV-Support.pdf",
      color: "#FFFFFF",
      bgCardColor: "#2B1624",
    },
    
    // Add more case studies here...
  ];


  const HUBEXPERTISE_COUNTER_DATA = [
    {
      start: 10,
      end: 25,
      description: "Years of Excellence",
    },
    {
      start: 10,
      end: 500,
      description: "Happy Customers",
    },
    {
      start: 10,
      end: 15000,
      description: "Man Years of Expertise",
    },
    // Add more counters as needed
  ];

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
    // Add more Testimonials as needed
  ];

  const TECHNOLOGYSPECTRUM_DATA = [
    {
      id: 1,
      cardHeading: "Infor",
    },
    {
      id: 2,
      cardHeading: "MS Dynamics",
    },
    {
      id: 3,
      cardHeading: "LS Retail",
    },
    {
      id: 4,
      cardHeading: "Oracle",
    },
    {
      id: 5,
      cardHeading: "AWS",
    },
    {
      id: 6,
      cardHeading: "Azure",
    },
    {
      id: 7,
      cardHeading: "HxN EAM",
    },
    {
      id: 8,
      cardHeading: "Java",
    },
    {
      id: 9,
      cardHeading: "Dot Net",
    },
    {
      id: 10,
      cardHeading: "Share Point",
    },
    // Add more Technology spectrum as needed
  ]

  return (
    <>
      <EntIntro
        title="Proactive Monitoring for Peak IT Performance"
        desc="Managed IT Services Experts"
        cta="Let's Connect"
        width="60%"
        video="/managedServices/pageBanner.mp4"
      />
      <OverviewSection Text={`Expert 24/7 Support: Our Managed Services ensure seamless IT operations, empowering you to focus on core business`} />

      <SectionWrapper style={{ background: `url(/services/mg01.svg)`, backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
        <div className="container mx-auto bg-[#95e0db] py-32">
          <SectionHeading
            layout="horizontal"
            Color="text-primary-900"
            headingContainerWidth="w-full"
            Heading="Knocking Business Challenges"
            Desc="Absence of expert managed services results in various business obstacles, difficulty in transforming business operations and addressing transactional needs, ultimately impacting growth and productivity."
          ></SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-16">
            <ul className=" space-y-4 w-full text-primary-900">
              {CHALLENGES_LIST_DATA.map((challenge, index) => (
                <li
                  key={challenge.id}
                  className={`flex items-start py-2 border-b-[0.5px] border-neutral-black border-opacity-20 w-full ${index === CHALLENGES_LIST_DATA.length - 1 ? 'border-b-0' : ''}`}
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
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="InforSliderWrapper rounded-3xl py-32" style={{ backgroundColor: 'white', zindex: "2", position: 'relative' }}>
          <div className="flex md:flex-row flex-col md:py-10 px-10 container" style={{ justifyContent: 'center', alignItems: 'center' }}>
            <div className="w-full md:w-3/12">
              <h1 className="text-heading-01 leading-heading-01 font-semibold text-center md:text-center">Technology
                Spectrum</h1>
            </div>
            <div className="w-full md:w-9/12 my-6 md:my-0">
              <Swiper
                slidesPerView={1}
                navigation={true}
                pagination={{ type: "bullets", clickable: true }}
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
                  <SwiperSlide key={item}>
                    <div className="w-full text-heading-02 leading-heading-02 font-semibold text-center">
                      {/* <Image className="rounded-t-lg" width={100} height={50} src="" alt="" /> */}
                      {item.cardHeading}
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper BGColor="bg-primary-900">
        <div className="container mx-auto rounded-3xl py-32">
          <div className="flex justify-center items-center flex-col">
            <div className="w-full md:w-1/2 mb-10">
              <SectionHeading
                center
                Color="white"
                headingContainerWidth="w-full"
                Heading="How Can We Assist You?"
                Desc="Our team employs proactive monitoring to identify and address potential issues ensuring a seamless and uninterrupted operations."
              ></SectionHeading>
            </div>
            <div>
              <img src="/services/mg02.svg" width="100%"></img>
            </div>
          </div>
        </div>
      </ SectionWrapper>

      <SectionWithSlider
        style={{ marginTop: '-35px' }}
        ID={"DATA_MGMT_DATA"}
        sectionHeading={"Cornerstones of Managed Services"}
        sectionDesc={
          "Flexible, Scalable, and Secure Managed Solutions for Ambitious Businesses."
        }
        sectionTextColor="text-neutral-white"
        cardData={DATA_MGMT_DATA}
        sectionBGColor="bg-primary-500"
        setHeadingLayout="horizontal"
        setMinHeight="min-h-[40rem]"
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
        readMoreUrl={"https://www.godrejinfotech.com/blogDetails.aspx?blog=10"}
      ></BlogSection>

      <DistinctiveSection DistinctiveData={distinctiveData}
        ID={'Distinctive'} Title={'The Distinctive Edge'} Desc={'We focus on managing all aspects of IT infrastructure and business applications, minimizing the need for in-house expertise. Trusted legacy of 25 years with experience of supporting 40+ Godrej & Boyce applications'}
      >
      </DistinctiveSection>

      {/* <ReviewSliderSection
        ID={"TESTIMONIALS"}
        Heading={"Delighted customers share their success experience"}
        Desc={''}
        Color="#ffffff"
        CardDataList={TESTIMONIAL_DATA}
        BGColor="#1D162B"
        SectionHeadingMaxWidth={'70%'}
      ></ReviewSliderSection> */}

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