"use client";
import EntIntro from "@/components/EntIntro";
import OverviewSection from "@/sections/overview/OverviewSection";
import CommonCardTwoSlider from "@/sections/commonCardTwoSlider/CommonCardTwoSlider";
import { Swiper, SwiperSlide } from "swiper/react";
import SectionHeading from "@/components/SectionHeading";
import BlogSection from "@/sections/blog/BlogSection";
import ReviewSliderSection from '@/sections/reviewSlider/ReviewSliderSection';
import TransformBusinessForm from "@/sections/transformBusinessFrom/TransformBusinessFromSection";
import ServicesCardSlider from '@/sections/services-cards-slider/ServicesCardSlider';
import SectionWithSlider from "@/sections/sectionWithSlider/SectionWithSlider";
import HubExpertise from "@/sections/hub-of-expertise/HubExpertise";
import DistinctiveSection from "@/sections/distinctive/DistinctiveSection";
const page = () => {

  const SERVICE_CARDS_DATA = [
    {
      title: "Planning and Designing",
      hoverTitle: "Planning & Designing",
      description: "Meticulous selection of frameworks, programming languages, libraries and tools followed by the development of innovative application with a clean code architecture.",
      content: "Additional content for Card 1",
      imageURL: '/techStack1.png'
    },
    {
      title: "Define and Develop",
      hoverTitle: "Define & Develop",
      description: "Meticulous selection of frameworks, programming languages, libraries and tools followed by the development of innovative application with a clean code architecture.",
      content: "Additional content for Card 2",
      imageURL: '/techStack1.png'
    },
    {
      title: "Testing",
      hoverTitle: "Testing",
      description: "Meticulous selection of frameworks, programming languages, libraries and tools followed by the development of innovative application with a clean code architecture.",
      content: "Additional content for Card 3",
      imageURL: '/techStack1.png'
    },
    {
      title: "Deployment",
      hoverTitle: "Deployment",
      description: "Meticulous selection of frameworks, programming languages, libraries and tools followed by the development of innovative application with a clean code architecture.",
      content: "Additional content for Card 4",
      imageURL: '/techStack1.png'
    },
    {
      title: "Maintainence",
      hoverTitle: "Maintainence",
      description: "Meticulous selection of frameworks, programming languages, libraries and tools followed by the development of innovative application with a clean code architecture.",
      content: "Additional content for Card 5",
      imageURL: '/techStack1.png'
    },
    // Add more cards here...
  ];

  const CyberSecurityData = [
    {
      id: 1,
      cardBGImageUrl: '/rpa/ArtboardBg.png',
      cardBGColor: '#7F4EE1',
      cardHeading: 'Business Consulting',
      cardDesc: 'Speed up operations with smart work of RPA, delivering proficient service to your customers and increasing your ROI.',
      isArrow: false,
      cardTextColor: 'white',
      cardType: 1,
    },
    {

      id: 2,
      cardBGImageUrl: '',
      cardBGColor: '#7F4EE1',
      cardHeading: 'Implementation & Management',
      cardDesc: 'Automate the time-consuming and error-prone manual tasks and get consistent, error-free results while',
      isArrow: false,
      cardTextColor: 'white',
      cardType: 2,
    },
    {

      id: 3,
      cardBGImageUrl: '',
      cardBGColor: '#9F0165',
      cardHeading: 'Application Security Testing',
      cardDesc: 'Manage contract workflows, form updates, and compliance notifications, adhering to regulations with precision',
      isArrow: false,
      cardTextColor: 'white',
      cardType: 1,
    },
    {

      id: 4,
      cardBGImageUrl: '/rpa/ArtboardBg.png',
      cardBGColor: '#EFE9FB',
      cardHeading: 'Strengthen Potential',
      cardDesc: 'Empower employees to focus on strategic tasks to deliver attentive experience to customers',
      isArrow: false,
      cardTextColor: 'white',
      cardType: 2,
    },
    {

      id: 5,
      cardBGImageUrl: '/rpa/ArtboardBg.png',
      cardBGColor: '#EFE9FB',
      cardHeading: 'Enhance Flexibility',
      cardDesc: 'Adapt to changing business needs without hiring and training new staff, saving time and expense',
      isArrow: false,
      cardTextColor: 'white',
      cardType: 1,
    },
    {


      id: 5,
      cardBGImageUrl: '/rpa/ArtboardBg.png',
      cardBGColor: '#EFE9FB',
      cardHeading: 'Reduce AHT (Average Handling Time)',
      cardDesc: 'Enhance customer service quality, minimize response time and improve operational efficiency',
      isArrow: false,
      cardTextColor: 'white',
      cardType: 2,
    },
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

  const blogImageUrl = '/ai-ml/blog-bg.png';

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

      <CommonCardTwoSlider
        ID={''}
        sectionImageUrl={''}
        sectionBGColor={'#EFE9FB'}
        sectionHeading={'Our Implementation Services'}
        sectionDesc={'We offer implementation services focused on delivering specific outcomes from inception to project completion with our commitment to quality.'}
        sectionTextColor={'#000'}
        sectionHeaderMaxWidth={'40%'}
        setHeadingLayout={'horizontal'}
        cardData={CyberSecurityData}
      />

      <div className="" style={{ backgroundColor: '#1D162B' }}>
        <div className="md:container mx-auto pt-20 flex h-[500px]" style={{ alignItems: 'center', overflow: 'hidden' }}>
          <div className="w-1/2">
            <SectionHeading
              Heading={`Infor CloudSuite Services`}
              Color={'white'}
              Desc={`Leveraging our understanding of business processes refined through years of experience, we deliver end to end services along with strategic business insights powered by Infor Cloud Suite expertise.`}
              headingContainerWidth={'w-full'}
            />
          </div>
          <div className="w-1/2">
            <img src="/infor/man.svg" style={{ width: '100%' }} />
          </div>
        </div>
        <div className="md:container mx-auto bg-[#EFE9FB] py-20" style={{ zindex: '2', position: 'relative', borderTopLeftRadius: "24px", borderTopRightRadius: "24px" }}>
          <Swiper
            slidesPerView={4}
            navigation={false}
            pagination={{ type: "bullets", clickable: true }}
            autoplay={true}
            loop={false}
            spaceBetween={30}
          >
            {[1, 2, 3, 4, 5]?.map((item, index) => (
              <SwiperSlide key={item}>
                <div className="bg-[#EFE9FB] rounded-lg">
                  <img className="rounded-t-lg pl-4" src="/infor/blackstar.svg" alt="" />
                  <div className="p-5">
                    <h5 className="mb-2 text-2xl font-bold">Consulting</h5>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <ServicesCardSlider cardData={SERVICE_CARDS_DATA} heading={"Technology Stack"} desc={""} color={"#1D162B"} />

      <SectionWithSlider
        ID={"DATA_MGMT_DATA"}
        sectionHeading={"360 Degree Implementation "}
        sectionDesc={
          "Scalable data management solutions leveraging analytics and business intelligence for informed decisions."
        }
        sectionTextColor="#ffffff"
        cardData={DATA_MGMT_DATA}
        sectionBGColor="#2B1624"
        setHeadingLayout="horizontal"
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