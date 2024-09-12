"use client";
import EntIntro from "@/components/EntIntro";
import SectionWrapper from '@/components/SectionWrapper';
import SectionHeading from '@/components/SectionHeading';
import OverviewSection from "@/sections/overview/OverviewSection";
import BenefitSliderSection from '@/sections/benefitSlider/BenefitSliderSection';
import CaseStudiesSection from "@/sections/case-studies/CaseStudiesSection";
import BlogSection from "@/sections/blog/BlogSection";
import TransformBusinessForm from "@/sections/transformBusinessFrom/TransformBusinessFromSection";
import DistinctiveSection from "@/sections/distinctive/DistinctiveSection";
import ReviewSliderSection from '@/sections/reviewSlider/ReviewSliderSection';
import { Swiper, SwiperSlide } from "swiper/react";
import CommonCardTwo from "@/components/CommonCardThree";
const page = () => {
  const blogImageUrl = "/ai-ml/blog-bg.png";

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
  const BENEFITS_CARDS_DATA = [
    { id: '1', icon:'', cardDesc: 'A high degree of accuracy and consistency in business operations' },
    { id: '2', icon:'', cardDesc: 'Informed decision-making to extract valuable insights and identify patterns, correlation, and trends' },
    { id: '3', icon:'', cardDesc: 'Real-time problem-solving enable minimum disruptions and ensures uninterrupted business operations' },
    { id: '4', icon:'', cardDesc: 'Automation of repetitive tasks, resulting in increased operational efficiency and productivity.' },
    { id: '5', icon:'', cardDesc: 'Reduce equipment downtime and increase operational efficiency with real-time monitoring and predictive maintenance' },

  ];

  const CASE_STUDIES_DATA = [
    {
      imageURL: "/CloudStackServices/case-studies/bg--coffee-beans.png",
      videoURL: "/CloudStackServices/case-studies/bg--video-industry.mp4",
      title: "Case Studies",
      heading: "Elevating Customer Experience",
      description:
        "World's top-notch businesses choose us for our technical acumen as we deliver high performing solutions across different industries.",
      link: "/case-study-1",
      color: "#FFFFFF",
    },
    {
      imageURL: "",
      title: "",
      heading: "Non-government Association of Indian Industries",
      description:
        "99% uptime in saving man-days performance and 22% of capex saving after migrating to the Azure cloud environment",
      link: "/case-study-1",
      color: "#000",
      bgCardColor: "#FCE6F4",
    },

    {
      imageURL: "/path/to/image1.jpg",
      title: "",

      heading: "Coffee Brand Distributor in Egypt and Middle East",
      description:
        "Decreasing downtime and optimising system cost along with 100% data transparency through Single Cloud System",
      link: "/case-study-1",
      color: "#000",
      bgCardColor: "#EFE9FB",
    },
    {
      imageURL: "/CloudStackServices/case-studies/bg--electical-devices.png",
      title: "",
      heading: "Middle East-based Electrical Products Manufacturer",
      description:
        "60% cut down in development cost and business performance boost of 5 sister companies with D365 F&O Cloud implementation",
      link: "/case-study-1",
      color: "#000",
      bgCardColor: "#E1F2EF",
    },
    // Add more case studies here...
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

  const RPASolution2 = [
    {
      id: 1,
      cardBGColor: 'white',
      cardHeading: 'Custom Application Development',
      cardDesc: 'Automate repetitive tasks to enhance productivity with AI-driven workflow automation and analytics',
      isArrow: true,
      cardTextColor: 'black',
      cardTopImageUrl: 'https://flowbite.com/docs/images/blog/image-1.jpg'
    },
    {

      id: 2,
      cardBGColor: 'white',
      cardHeading: 'Custom Application Development',
      cardDesc: 'AI-driven workflows, OCR and rule-based system enables accurate results',
      isArrow: true,
      cardTextColor: 'black',
      cardTopImageUrl: 'https://flowbite.com/docs/images/blog/image-4.jpg'
    },
    {

      id: 3,
      cardBGColor: 'white',
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
      <div className="bg-[#1D162B]" style={{ borderTopLeftRadius: '24px', borderTopRightRadius: '24px' }}>
        <div className="py-36 pb-[200px]" style={{ background: `url('/Transformation/customers/bgimage1.png')`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
          <div className="container mx-auto">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <img src="" />
              </div>
              <div>
                <SectionHeading
                  Color="white"
                  headingContainerWidth="w-full"
                  Heading="Infor Intelligent Supply System"
                  Desc="Infor proudly presents the most extensive suite of global supply chain solutions, including the world's largest single-instance, multi-enterprise business network and comprehensive CloudSuite capabilities. These capabilities optimize supply chains from end to end, covering planning, procurement, orchestration and fulfillment. "
                ></SectionHeading>
              </div>
            </div>

          </div>
        </div>
        <div className="container mx-auto" style={{ marginTop: '-166px', }} >
          <Swiper
            slidesPerView={3}
            navigation={false}
            pagination={{ type: "bullets", clickable: true }}
            autoplay={true}
            loop={false}
            spaceBetween={30}
          >
            {RPASolution2?.map((item, index) => (
              <SwiperSlide key={item}>
                <CommonCardTwo Item={item}></CommonCardTwo>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <BenefitSliderSection
        ID={'BENEFIT'}
        sectionBGColor={'#1D162B'}
        sectionHeading={'Benefits of Infor LN'}
        sectionDesc={'Discover substantial benefits that Infor LN brings to the table, helping in competitive business landscape.'}
        sectionTextColor={'white'}
        cardData={BENEFITS_CARDS_DATA}
        sectionHeadingMaxWidth={'100%'}
      />
      <CaseStudiesSection
        casestudy={CASE_STUDIES_DATA}
        csLayout={"1"}
        bgColor="#FFFFFF"
      />


      <BlogSection
        ID={"blog"}
        blogImageUrl={blogImageUrl}
        Heading={"The Powerful Duo: AI and the Internet of Things (IoT) Reshaping Our World"}
        Desc={
          "Imagine a world where machines talk to each other, predicting problems before they happen and adjusting on the fly. This isn't magic; it's the incredible team of artificial intelligence (AI) and the Internet of things (IoT) in Industry 4.0, the latest wave of technological revolution. "
        }
        maxWidth={'50%'}
        Color={"white"}
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
  );
};

export default page;
