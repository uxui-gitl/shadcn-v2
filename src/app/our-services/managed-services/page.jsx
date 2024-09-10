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

import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
const page = () => {

  const distinctiveData = [
    {
      _id: 1,
      desc: "Enables automation across diverse use cases",
      icon: "",
    },
    {
      _id: 2,
      desc: "Help businesses achieve high productivity",
      icon: "",
    },
    {
      _id: 3,
      desc: "Substantial improvements in return on investment (ROI)",
      icon: "",
    },
    {
      _id: 4,
      desc: "Extensive experience in understanding industry-specific challenges and opportunities",
      icon: "",
    },

  ]

  const blogImageUrl = '/ai-ml/blog-bg.png';

  const CHALLENGES_LIST_DATA = [
    { id: 1, title: "Inadequate Scalability and Availability", icon: '/upgradeCloud/icons/ico--target.svg' },
    { id: 2, title: "Unreliable Backup Storage", icon: '/upgradeCloud/icons/ico--target.svg' },
    { id: 3, title: "Weak Disaster Recovery and Redundancy", icon: '/upgradeCloud/icons/ico--target.svg' },
    { id: 4, title: "Inadequate Data Integrity", icon: '/upgradeCloud/icons/ico--target.svg' },
  ];

  const DATA_MGMT_DATA = [
    {
      id: 1,
      BGImageUrl: "",
      BGColor: "#fff",
      CardBGColor: "transparent",
      CardTextColor: "white",
      CardTitle: "",
      CardIconUrl: "/upgradeCloud/icons/ico--target.svg",
      CardHeading: "Azure SQL Data Ware Housing",
      CardDesc:
        "Accelerate analytics with petabyte scale storage and high-performance querying",
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
      CardIconUrl: "/upgradeCloud/icons/ico--target.svg",
      CardHeading: "AWS Redshift",
      CardDesc:
        "Optimize data storage and queries while we provide the experience to enhance data efficiency.",
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
      CardIconUrl: "/upgradeCloud/icons/ico--target.svg",
      CardHeading: "Azure Synapse",
      CardDesc:
        "Unify analytics and data management, and integrate data warehousing and big data capabilities",
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
      CardIconUrl: "/upgradeCloud/icons/ico--target.svg",
      CardHeading: "Azure Data Factory",
      CardDesc:
        "Move, transform and orchestrate data across cloud and on-premises sources with automated workflows.",
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
      CardIconUrl: "/upgradeCloud/icons/ico--target.svg",
      CardHeading: "Databricks",
      CardDesc:
        "Harness unified data analytics gaining deeper insights with our data-driven strategies.",
      isArrow: "true",
      link: [],
    },
    {
      id: 5,
      BGImageUrl: "",
      BGColor: "#fff",
      CardBGColor: "transparent",
      CardTextColor: "white",
      CardTitle: "",
      CardIconUrl: "/upgradeCloud/icons/ico--target.svg",
      CardHeading: "Amazon S3",
      CardDesc:
        "Securely store and serve data with highly scalable and cost-effective object storage.",
      isArrow: "true",
      link: [],
    },
    {
      id: 6,
      BGImageUrl: "",
      BGColor: "#fff",
      CardBGColor: "transparent",
      CardTextColor: "white",
      CardTitle: "",
      CardIconUrl: "/upgradeCloud/icons/ico--target.svg",
      CardHeading: "Azure Data Lake",
      CardDesc:
        "Experience high-performance and secure data management with Azure Data Lake.",
      isArrow: "true",
      link: [],
    },
    {
      id: 7,
      BGImageUrl: "",
      BGColor: "#fff",
      CardBGColor: "transparent",
      CardTextColor: "white",
      CardTitle: "",
      CardIconUrl: "/upgradeCloud/icons/ico--target.svg",
      CardHeading: "Microsoft Fabric",
      CardDesc:
        "Integrated Lakehouse, Datawarehouse & AI-powered platform driving business effectiveness.",
      isArrow: "true",
      link: [],
    },
  ];

  const RPASolution = [
    {
      id: 1,
      cardBGColor: '#F5B1DC',
      cardHeading: 'Custom Application Development',
      cardDesc: 'Automate repetitive tasks to enhance productivity with AI-driven workflow automation and analytics',
      isArrow: true,
      cardTextColor: 'black',
      cardTopImageUrl: 'https://flowbite.com/docs/images/blog/image-1.jpg'
    },
    {

      id: 2,
      cardBGColor: '#FCE6F4',
      cardHeading: 'Custom Application Development',
      cardDesc: 'AI-driven workflows, OCR and rule-based system enables accurate results',
      isArrow: true,
      cardTextColor: 'black',
      cardTopImageUrl: 'https://flowbite.com/docs/images/blog/image-4.jpg'
    },
    {

      id: 3,
      cardBGColor: '#CDBAF3',
      cardHeading: 'Compliance and Consistency',
      cardDesc: 'Manage contract workflows, forms and compliance with consistency and regulatory adherence',
      isArrow: true,
      cardTextColor: 'black',
      cardTopImageUrl: 'https://flowbite.com/docs/images/blog/image-7.jpg'
    },
    {

      id: 4,
      cardBGColor: '#E4E4E4',
      cardHeading: 'Strengthen Potential',
      cardDesc: 'Empower employees to focus on strategic tasks to deliver attentive experience to customers',
      isArrow: true,
      cardTextColor: 'black',
      cardTopImageUrl: 'https://flowbite.com/docs/images/blog/image-1.jpg'
    },
    {

      id: 5,
      cardBGImageUrl: '/rpa/ArtboardBg.png',
      cardBGColor: '#EFE9FB',
      cardHeading: 'Enhance Flexibility',
      cardDesc: 'Adapt to changing business needs without hiring and training new staff, saving time and expense',
      isArrow: true,
      cardTextColor: 'black',
      cardTopImageUrl: 'https://flowbite.com/docs/images/blog/image-2.jpg'
    },
    {


      id: 5,
      cardBGImageUrl: '/rpa/ArtboardBg.png',
      cardBGColor: '#EFE9FB',
      cardHeading: 'Reduce AHT (Average Handling Time)',
      cardDesc: 'Enhance customer service quality, minimize response time and improve operational efficiency',
      isArrow: false,
      cardTextColor: 'black',
      cardTopImageUrl: 'https://flowbite.com/docs/images/blog/image-3.jpg'
    },
  ]

  const CASE_STUDIES_DATA = [
    {
      imageURL: "",
      videoURL: "/CloudStackServices/case-studies/bg--businessman-industry.mp4",
      title: "IIoT Solutions",
      heading: "Low Code, No Code Configurable Portals on Azure or AWS IIOT",
      description:
        "Industry 4.0 Accelerator (IoT for shopfloor) for implementation of IoT in shopfloor – Both for Discrete & Process Manufacturing",
      link: "/case-study-1",
      color: "#FFFFFF",
      bgCardColor: "#2B1624",
    },
    {
      imageURL: "/iiot/bg--bespoke--iiot-soltions.png",
      title: "",
      heading: "Bespoke IIOT Solutions",
      description:
        "Require Development from Scratch.",
      link: "/case-study-1",
      color: "#2B1624",
      bgCardColor: "#00F8C4",
    },
    {
      imageURL: "",
      title: "Case Studies",
      heading: "Insights to Accelerate Business Growth",
      description: '',
      link: "",
      color: "#FFFFFF",
      bgCardColor: "#2B1624",
    },

    {
      imageURL: "",
      title: "Case Studies",
      heading: "India's Largest Lift Truck Manufacturer",
      description: 'Gathers forklift data and enable remote monitoring, troubleshooting & optimization with IoT',
      link: "",
      color: "#2B1624",
      bgCardColor: "#E4E4E4",
    },

    {
      imageURL: "",
      title: "Case Studies",
      heading: "India's Leading Construction Organization",
      description: 'Implements IoT & ML Solution for Real Time Cement Inventory Calibration with 98% accuracy',
      link: "",
      color: "#2B1624",
      bgCardColor: "#FCE6F4"
    },

    // Add more case studies here...
  ];


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


  return (
    <>
      <EntIntro
        title="Embrace the Digital Future of Business Efficiency with Industry Specialized Infor Application"
        desc=""
        cta="Let's Connect"
        width="60%"
        video="https://gitl-usa.s3.us-west-1.amazonaws.com/banner1.mp4"
      />
      <OverviewSection Text={`Globally recognized Infor is a robust ERP solution that delivers improved business strength and operational responsiveness. Committed to offering core industry application `} />

      <SectionWrapper style={{ background: `url(/services/mg01.svg)`, backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
        <div className="container mx-auto">
          <SectionHeading
            layout="horizontal"
            Color="white"
            headingContainerWidth="w-full"
            Heading="Knocking Business Challenges  "
            Desc="We help executive leadership navigate critical challenges, manage process complexity and develop future-ready organizations.  "
          ></SectionHeading>
          <div className="grid grid-cols-2 gap-4 mt-16">
            <ul className=" space-y-4 w-full text-white">
              {CHALLENGES_LIST_DATA.map((challenge, index) => (
                <li
                  key={challenge.id}
                  className={`flex items-start py-6 border-b-[0.5px] border-white w-full ${index === CHALLENGES_LIST_DATA.length - 1 ? 'border-b-0' : ''}`}
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
                    <h3 className="text-2xl font-normal">
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
        <div className="InforSliderWrapper rounded-3xl" style={{ backgroundColor: 'white', zindex: "2", position: 'relative' }}>
          <div className="flex md:py-10 px-10 container" style={{ justifyContent: 'center', alignItems: 'center' }}>
            <div className="w-3/12">
              <h1 className="text-[54px] font-[600] leading-[64px]">Technology
                Spectrum</h1>
            </div>
            <div className="w-9/12">
              <Swiper
                slidesPerView={6}
                navigation={false}
                pagination={{ type: "bullets", clickable: true }}
                autoplay={true}
                loop={false}
                spaceBetween={30}
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9]?.map((item, index) => (
                  <SwiperSlide key={item}>
                    <div className="w-fullbg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                      <Image className="rounded-t-lg" width={100} height={50} src="" alt="" />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper BGColor="#1D162B">
        <div className="container mx-auto">
          <div className="flex justify-center items-center flex-col">
            <div className="w-1/2 mb-10">
              <SectionHeading
                center
                Color="white"
                headingContainerWidth="w-full"
                Heading="How Can We Assist You?"
                Desc="Our team employs proactive monitoring to identify and address potential issues before they impact your operations, ensuring a seamless and uninterrup"
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
        sectionHeading={"Cornerstones of Managed "}
        sectionDesc={
          "Scalable data management solutions leveraging analytics and business intelligence for informed decisions."
        }
        sectionTextColor="#ffffff"
        cardData={DATA_MGMT_DATA}
        sectionBGColor="#5F22D9"
        setHeadingLayout="horizontal"
      />

      <CommonCardThreeSlider
        ID={'AIOfferings'}
        sectionImageUrl={''}
        sectionBGColor={'#1D162B'}
        sectionHeading={'Benefits of Managed Services'}
        sectionDesc={'We design, develop and implement hundreds of custom solutions and software applications using Microsoft technologies across Azure, Microsoft 365, Dynamics 365 and Power Platform.'}
        sectionTextColor={'#fff'}
        sectionHeaderMaxWidth={'40%'}
        cardData={RPASolution}
      >

      </CommonCardThreeSlider>

      <SectionWrapper BGColor="#1D162B">
        <div className="container mx-auto">
          <div className="flex justify-center items-center flex-col">
            <div className="w-1/2 mb-10">
              <SectionHeading
                center
                Color="white"
                headingContainerWidth="w-full"
                Heading="How do We Make it Happen?"
                Desc="The foundation of our consulting service is strengthened by our ACT model, facilitating growth and success in a dynamic competitive landscape. "
              ></SectionHeading>
            </div>
            <div>
              <img src="/services/service01.svg" width="100%"></img>
            </div>
          </div>
        </div>
      </ SectionWrapper>

      <CaseStudiesSection
        casestudy={CASE_STUDIES_DATA}
        csLayout={"2"}
        bgColor="#FFFFFF"
      />

      <HubExpertise
        BGColor="#7B014E"
        setHeading="Hub of Expertise"
        setDesc="We are here to build edge and bring technology brilliance with the finest in the industry."
        setColor="#ffffff"
        counters={HUBEXPERTISE_COUNTER_DATA}
      />

      <BlogSection ID={'blog'} blogImageUrl={blogImageUrl} Heading={'Digitalization with Infor Coleman Artificial Intelligence & Machine Learning'}
        Desc={'Many of the organizations we work with today are looking for ways to optimize business processes, reduce manual work, and enhance customer service by using best-of-breed digital technologies that promise a speedy ROI.'}
        Color={'white'}
      ></BlogSection>

      <DistinctiveSection DistinctiveData={distinctiveData}
        ID={'Distinctive'} Title={'The Distinctive Edge'} Desc={'Reliable Expertise in Intelligent Tech Solutions'}
      >
      </DistinctiveSection>

      <ReviewSliderSection
        ID={"TESTIMONIALS"}
        Heading={"Delighted customers share their success experience"}
        Desc={''}
        Color="#ffffff"
        CardDataList={TESTIMONIAL_DATA}
        BGColor="#1D162B"
        SectionHeadingMaxWidth={'70%'}
      ></ReviewSliderSection>

      <TransformBusinessForm
        Title={"Transform your Business with us"}
        Desc={
          "Let us discuss how intelligent technologies can help you with rapid growth."
        }
      ></TransformBusinessForm>
    </>
  )
}

export default page;