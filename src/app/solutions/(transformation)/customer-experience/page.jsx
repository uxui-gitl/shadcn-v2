"use client";
import EntIntro from "@/components/EntIntro";
import SectionWrapperNew from "@/components/SectionWrapperNew";
import OverviewSection from "@/sections/overview/OverviewSection";
import { SwiperSlide } from "swiper/react";
import Slider from "@/components/Slider";
import CommonCardThree from "@/components/CommonCardThree";
import CommonCardTwo from "@/components/CommonCardThree";
import BenefitSliderSection from '@/sections/benefitSlider/BenefitSliderSection';
import HubExpertise from "@/sections/hub-of-expertise/HubExpertise";
import DistinctiveSection from "@/sections/distinctive/DistinctiveSection";
import TransformBusinessForm from "@/sections/transformBusinessFrom/TransformBusinessFromSection";
import ReviewSliderSection from '@/sections/reviewSlider/ReviewSliderSection';


import Image from 'next/image'



const page = () => {

  const RPASolution = [
    {
      id: 1,
      cardBGColor: '#F5B1DC',
      cardHeading: 'Custom Application Development',
      cardDesc: 'Transcending off-the-shelf offerings, we develop apps ensuring alignment with business needs',
      isArrow: true,
      cardTextColor: 'black',
      cardTopImageUrl: 'https://flowbite.com/docs/images/blog/image-1.jpg'
    },
    {

      id: 2,
      cardBGColor: '#FCE6F4',
      cardHeading: 'Legacy Modernisation',
      cardDesc: 'Transform legacy systems into agile solutions assuring Triple Aim goals and optimal RoI',
      isArrow: true,
      cardTextColor: 'black',
      cardTopImageUrl: 'https://flowbite.com/docs/images/blog/image-4.jpg'
    },
    {

      id: 3,
      cardBGColor: '#CDBAF3',
      cardHeading: 'Application Managed Services',
      cardDesc: 'Right expertise and technology to drive value across the entire app lifecycle',
      isArrow: true,
      cardTextColor: 'black',
      cardTopImageUrl: 'https://flowbite.com/docs/images/blog/image-7.jpg'
    },
    {

      id: 4,
      cardBGColor: '#E4E4E4',
      cardHeading: 'Mobile Application',
      cardDesc: 'Mobile app with strong backend, user engagement & offers cross-platform experience',
      isArrow: true,
      cardTextColor: 'black',
      cardTopImageUrl: 'https://flowbite.com/docs/images/blog/image-1.jpg'
    },
    {

      id: 5,
      cardBGImageUrl: '/rpa/ArtboardBg.png',
      cardBGColor: '#EFE9FB',
      cardHeading: 'Enterprise Application Integration',
      cardDesc: '',
      isArrow: true,
      cardTextColor: 'black',
      cardTopImageUrl: 'https://flowbite.com/docs/images/blog/image-2.jpg'
    },

  ];

  const distinctiveData = [
    {
      _id: 1,
      desc: "Serving one of Asia's largest Infor LN user bases",
      icon: "",
    },
    {
      _id: 2,
      desc: "Project managers take complete responsibility for timely delivery of high-quality solutions",
      icon: "",
    },
    {
      _id: 3,
      desc: "Proprietary tool integrating project management and communication, ensuring 100% transparency.",
      icon: "",
    },
    {
      _id: 4,
      desc: "Delivering significant advantages for complex, multi-site manufacturing operations",
      icon: "",
    },

  ]

  const HUBEXPERTISE_COUNTER_DATA = [
    {
      start: 10000,
      end: 15000,
      description: "Man Years  of Experience",
    },
    {
      start: 1200,
      end: 1000,
      description: "Implementation Sites",
    },
    {
      start: 1200,
      end: 500,
      description: "Employees Worldwide",
    },

    {
      start: 1200,
      end: 500,
      description: "Customer Worldwide",
    },
    {
      start: 10,
      end: 25,
      description: "Years of Experience",
    },

    {
      staticTitle: "24*7",
      description: "Support",
    },

    // Add more counters as needed
  ];

  const benifitsCardsData = [
    {
      id: '1',
      icon: "/benefisIntelligentTechnologies/AutomationRepetitiveTasks",
      cardDesc: 'Process and analyse vast volumes of data and offers round-the-clock assistance to customers'
    },
    {
      id: '2',
      icon: "/benefisIntelligentTechnologies/AutomationRepetitiveTasks",
      cardDesc: 'Anticipate future outcomes based on historical data, making informed decisions'
    },
    {
      id: '3', icon: "/benefisIntelligentTechnologies/AutomationRepetitiveTasks",
      cardDesc: 'Enables effortless communication and efficient information retrieval through Natural Language Processing'
    },
    {
      id: '4', icon: "/benefisIntelligentTechnologies/AutomationRepetitiveTasks",
      cardDesc: 'Optimize supply chain management, predict maintenance need, and elevate quality control, resulting in higher productivity'
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
  return (
    <>
      <EntIntro
        title="Embrace the Digital Future of Business Efficiency with Industry Specialized Infor Application"
        desc=""
        cta="Let's Connect"
        width="60%"
        video="https://gitl-usa.s3.us-west-1.amazonaws.com/banner1.mp4"
      />

      <OverviewSection
        Text={
          "Minimize costs and maximize agility and security with our cloud upgrade offerings. We help enterprises to build resilience through tailored, all-inclusive cloud transformation that drives business success."
        }
      />

      <SectionWrapperNew
       
        sectionTextColor="text-neutral-white"
        sectionHeadingLayout="horizontal"
        bgColor={'bg-secondary-900'}
       >
        <Slider>
          {RPASolution?.map((item, index) => (
            <SwiperSlide key={index}>
              {index == 0 ? (

                <div className="rounded-3xl shadow min-h-[540px] py-5 px-7 bg-primary-400">
                  <h5 className="mb-10 text-heading-01 leading-heading-01 font-semibold text-neutral-white">Solutions for Transforming Customer Experience</h5>
                  <p className="mb-3 text-body-01 font-medium text-neutral-white">We understand that partnering with an expert is paramount to deliver remarkable customer experiences. Thus, we partner with market-</p>
                </div>

              ) : (<CommonCardThree Item={item}></CommonCardThree>)}
            </SwiperSlide>
          ))}
        </Slider>

      </SectionWrapperNew>

      <SectionWrapperNew style={{ background: `url('/Transformation/customers/bgimage3.svg')`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }}
        sectionHeading={'Customer experience Service'}
        sectionDesc={'Delivering experience of unified commerce with advanced retail management applications and ensuring personalized journey for every shopper.'
        }
        sectionTextColor="text-neutral-white"
        sectionHeadingLayout="center"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <div className=" p-8 bg-[#5F22D9] rounded-3xl">
              <h5 className="mb-2 text-heading-02 leading-heading-02 font-bold text-neutral-white">LS Central for Retail</h5>
              <p className="mb-3 text-body-01 leading-body-01font-normal text-white ">Seamlessly integrated cloud-based platform designed to optimize the management of retail enterprise and enhance the performance of individual store locations.</p>

            </div>
          </div>
          <div>
            <div className=" p-8 bg-[#F18BCB] rounded-3xl">
              <h5 className="mb-2 text-heading-02 leading-heading-02 font-bold text-neutral-white">LS Central for Retail</h5>
              <p className="mb-3 text-body-01 leading-body-01 font-normal text-white ">Seamlessly integrated cloud-based platform designed to optimize the management of retail enterprise and enhance the performance of individual store locations.</p>
            </div>
          </div>
        </div>
      </SectionWrapperNew>

      <SectionWrapperNew
        sectionHeading={'Doctrine of Customer Experience'}
        sectionDesc={'Delivering experience of unified commerce with advanced retail management applications and ensuring personalized journey for every shopper.'
        }
        sectionTextColor="black"
        sectionHeadingLayout="center"
        style={{ backgroundColor: "#fff" }}
      >
        <div className="flex justify-center">
          <Image src="/Transformation/customers/doctrine.svg" width="700" height="700" />
        </div>
      </SectionWrapperNew>

      <BenefitSliderSection
        ID={'AIOfferings'}
        sectionBGColor={'bg-primary-900'}
        sectionHeading={'Customer Experience Transformation'}
        sectionDesc={'Maximizing Business Opportunities &Building Resilient Brand'}
        sectionTextColor={'text-neutral-white'}
        cardData={benifitsCardsData}
      ></BenefitSliderSection>

      <HubExpertise
        BGColor={'bg-primary-400'}
        setHeading="The Hub of Expertise"
        setDesc="We are here to build competitive edge with technology brilliance for businesses across the world."
        setColor="text-neutral-white"
        counters={HUBEXPERTISE_COUNTER_DATA}
        columnNo={3} //Define how many columns you want to display
      />

      <DistinctiveSection DistinctiveData={distinctiveData}
        ID={'Distinctive'} Title={'The Distinctive Edge'} Desc={'We ensure seamless Infor LN implementation, customization and support to maximize ERP investment.'}
      >
      </DistinctiveSection>
      <ReviewSliderSection
        ID={"TESTIMONIALS"}
        Heading={"Delighted customers share their success experience"}
        Desc={''}
        Color="text-neutral-white"
        CardDataList={TESTIMONIAL_DATA}
        BGColor="bg-primary-900"
        SectionHeadingMaxWidth={'70%'}
      ></ReviewSliderSection>
      <TransformBusinessForm
        Title={"Transform your Business with us"}
        Desc={
          "Let us discuss how Infor LN can help you with rapid growth."
        }
      ></TransformBusinessForm>

    </>
  );
};

export default page;
