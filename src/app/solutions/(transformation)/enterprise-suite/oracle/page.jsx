"use client";
import EntIntro from "@/components/EntIntro";
import SectionNav from "@/components/SectionNav";
import OverviewSection from "@/sections/overview/OverviewSection";
import SectionHeading from '@/components/SectionHeading';
import SectionWrapper from '@/components/SectionWrapper';
import CommonCardTwoSlider from "@/sections/commonCardTwoSlider/CommonCardTwoSlider";
import SectionWidthSlider from "@/sections/sectionWithSlider/SectionWithSlider";
import BenefitSliderSection from '@/sections/benefitSlider/BenefitSliderSection';
import IndustrySpotlight from "@/sections/industry-spotlight/industrySpotlight";
import BlogSection from "@/sections/blog/BlogSection";
import DistinctiveSection from "@/sections/distinctive/DistinctiveSection";
import TransformBusinessForm from "@/sections/transformBusinessFrom/TransformBusinessFromSection";

import SectionWrapperNew from '@/components/SectionWrapperNew';
import { SwiperSlide } from "swiper/react";
import Slider from "@/components/Slider";
import Image from "next/image";

const page = () => {
  const DISTINCTIVE_DATA = [
    {
      _id: 1,
      desc: "Hassle-free Oracle implementation and migration",
      icon: "/oracle/distinctiveEdge/hassleFree.svg",
    },
    {
      _id: 2,
      desc: "Complex financial and operational data analysis expertise",
      icon: "/oracle/distinctiveEdge/complexFinancial.svg",
    },
    {
      _id: 3,
      desc: "Integrated cross-functional insights for informed decisions",
      icon: "/oracle/distinctiveEdge/integrated.svg",
    },
    {
      _id: 4,
      desc: "Committed to increase operations productivity and business performance",
      icon: "/oracle/distinctiveEdge/increaseOperations.svg",
    },

  ];
  const blogImageUrl = "/oracle/blog-bg.webp";
  const INDUSTRY_SPOTLIGHT = [
    {
      id: 1,
      cardBGImageUrl:
        "/industry-spotlight/cards-backgrounds/card-bg--manufacturing.png",
      cardBGColor: "#7F4EE1",
      cardHeading: "Manufacturing",
      cardDesc: "",
      isArrow: false,
      cardTextColor: "white",
    },
    {
      id: 2,
      cardBGImageUrl:
        "/industry-spotlight/cards-backgrounds/card-bg--retail.png",

      cardBGColor: "#7F4EE1",
      cardHeading: "Healthcare",
      cardDesc:
        "AI-driven workflows, OCR and rule-based system enables accurate results",
      isArrow: false,
      cardTextColor: "white",
    },
    {
      id: 3,
      cardBGImageUrl:
        "/industry-spotlight/cards-backgrounds/card-bg--trading-and-distribution.png",

      cardBGColor: "#7F4EE1",
      cardHeading: "Projects",
      cardDesc:
        "Manage contract workflows, forms and compliance with consistency and regulatory adherence",
      isArrow: false,
      cardTextColor: "white",
    },
    {
      id: 4,
      cardBGImageUrl:
        "/industry-spotlight/cards-backgrounds/card-bg--healthcare.png",

      cardBGColor: "#EFE9FB",
      cardHeading: "Professional Services",
      cardDesc:
        "Empower employees to focus on strategic tasks to deliver attentive experience to customers",
      isArrow: false,
      cardTextColor: "white",
    },

    // Add more cards as needed
  ];
  const BENEFITS_CARDS_DATA = [
    { id: '1', icon: '/oracle/benefits/centralized.svg', cardDesc: 'Centralized data for insightful multidimensional reporting.' },
    { id: '2', icon: '/oracle/benefits/accelerated.svg', cardDesc: 'Accelerated business operation with regulatory compliance.' },
    { id: '3', icon: '/oracle/benefits/blockchain.svg', cardDesc: 'Pre-built blockchain applications for cost-effective, transparent operations.' },
    { id: '4', icon: '/oracle/benefits/applications.svg', cardDesc: 'Enable IoT applications for enhanced customer experiences and HR.' },
    { id: '5', icon: '/oracle/benefits/improved.svg', cardDesc: 'Improved decision-making and productivity with machine learning enablement' },
    { id: '6', icon: '/oracle/benefits/unified.svg', cardDesc: 'Unified financial management and streamlined procurement' },
    { id: '7', icon: '/oracle/benefits/efficient.svg', cardDesc: 'Efficient project management and enhanced human capital management' },
  ];
  const keyResponsibilityData = [
    {
      title: "Financial Management",
      desc:
        "Track income, expenses and assets while ensuring tax compliance and enhancing forecasting precision.",
    },

    {
      title: "Supply chain Management",
      desc:
        "Monitor and manage information and services, spanning from procurement of raw materials to delivery of the final product.",
    },
    {
      title: "Human Capital Management",
      desc:
        "Experience unified user experience, harmonized data model and integrated processes with an AI-infused infrastructure.",
     
    },
    {
      title: "Sample Heading",
      desc:
        "Highest levels of security and privacy, ensuring data is safeguarded",
    },
  ];
  const oracleOfferingData = [
    {
      id: 1,
      cardBGImageUrl: 'https://flowbite.com/docs/images/blog/image-1.jpg',
      cardBGColor: '#7F4EE1',
      cardHeading: 'Business Consulting & Implementation',
      cardDesc: 'Expert guidance for business transformation through strategic assessment and seamless implementation.',
      cardHoverData:[
        'Strategic Assessment',
        'Solution Design',
        'Implementation',
        'Training and Change Management',
      ]
    },
    {

      id: 2,
      cardBGImageUrl: '',
      cardBGColor: '#000',
      cardHeading: 'Oracle Cloud Integration Services',
      cardDesc: 'Integrate Oracle Cloud solutions effortlessly, enabling enhanced productivity.',
      cardHoverData:[
        'Middleware Implementation',
        'Electronic Data Interchange Implementation',
        'API-led Integration',
      ]
    },
    {

      id: 3,
      cardBGImageUrl: 'https://flowbite.com/docs/images/blog/image-6.jpg',
      cardBGColor: '#7F4EE1',
      cardHeading: 'Oracle Database Management',
      cardDesc: 'Optimize database performance and security with expert management services.',
      cardHoverData:[
        'Design & Development of Database Model',
        'Disaster Recovery Services',
        'Maintenance',
        'Upgrades and Migrations',
      ]
    },
    {

      id: 4,
      cardBGImageUrl: '/rpa/ArtboardBg.png',
      cardBGColor: '#EFE9FB',
      cardHeading: 'Quality Assurance Service',
      cardDesc: 'Ensure solution reliability and performance with comprehensive testing services.',
      cardHoverData:[
        'Security Testing',
        'Performance Testing',
        'Test Data Management ',
      ]
    },
    {

      id: 5,
      cardBGImageUrl: 'https://flowbite.com/docs/images/blog/image-4.jpg',
      cardBGColor: '#EFE9FB',
      cardHeading: 'Managed Services',
      cardDesc: 'Outsource IT operations to our experts, ensuring proactive monitoring and continuous improvement.',
      cardHoverData:[
        'Enterprise Application Management',
        'Cloud Migration Services',
        'Agile Product Lifecycle Management Services',
        'Application Outsourcing',
        'Database Services',
      ]
    },

  ];
  return (
    <>
      <EntIntro
        title="Improve Operation Performance and Efficiency with Oracle"
        desc="Leading Customer Centric and Cutting-Edge Solution for Enterprises"
        cta="Let's Connect"
        width="60%"
        video="/oracle/video/pageBanner.mp4"
      />

      <OverviewSection Text={`Oracle Cloud's autonomous capabilities enable self-driving databases, automated security and streamlined operations. Businesses can reduce total cost of ownership and realize faster time-to-market.`} />
      <SectionWrapperNew
        sectionHeading={'Oracle Fusion Cloud'}
        sectionDesc={'Transform businesses into information-driven enterprises through AI-powered solutions and continuous updates.'}
        sectionTextColor={'#000'}
        sectionHeadingLayout="left"

        style={{
          backgroundImage: `url(${`/oracle/ofc-bg.webp`})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
      </SectionWrapperNew>
      {/* our offering section */}

      <SectionWrapperNew
        sectionHeading={'Our Oracle Offerings'}
        sectionDesc={'We offer comprehensive Oracle services that help organizations to achieve their goals. Our expert consultants provide everything from strategic guidance to optimized support.'}
        sectionTextColor={'#000'}
        sectionHeadingLayout="left"

        style={{ backgroundColor: '#E1F2EF' }}
      >

        <Slider slidesPerView={3.2}>
          {oracleOfferingData?.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="max-w-sm bg-[black] rounded-3xl group overflow-hidden relative" >
                <div className="py-10 px-10 ">
                  <h5 className="mb-6 text-[42px] font-semibold text-white leading-[50px] min-h-[150px]">{item?.cardHeading}</h5>
                  <p className="mb-3 text-[16px] font-medium text-white min-h-[72px]">{item?.cardDesc}</p>
                </div>
               {item?.cardHoverData && (
                  <div className="bg-white py-10 px-10 rounded-3xl h-full w-full duration-200 group-hover:-translate-y-full absolute">
                  <div className="">
                    <ul class="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
                      {item?.cardHoverData.map((item2) => (
                        <>
                      <li>
                        <span className="font-semibold text-black">{item2}</span>
                      </li>
                        </>
                      ))}
                    </ul>
                  </div>
                </div>
               )} 
             
              </div>

            </SwiperSlide>
          ))}
        </Slider>

      </SectionWrapperNew>
          {/* our offering section wnd*/}
{/* key responsibility */}
        <SectionWrapperNew
        sectionHeading={'Key Capabilities'}
        sectionDesc={`Streamline finance, HR, supply chain and customer experience with Oracle Fusion Cloud's integrated solutions.`}
        sectionTextColor={'#fff'}
        sectionHeadingLayout="horizontal"
        style={{ backgroundColor: '#5F22D9' }}
      >

        <Slider slidesPerView={3.2}>
          {keyResponsibilityData?.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="p-6 bg-[transparent]" style={{ borderRight: '1px solid #d3d3d3' }}>
                <Image src={"/about/whiteStar.svg"} width={30} height={30} alt={"hioasdo"} className="mb-4" />
                <div className="text-[28px] text-white">{item?.title}</div>
                <p className="text-[20px] py-4 text-white">{item?.desc}</p>
              </div>
            </SwiperSlide>
          ))}
        </Slider>
      </SectionWrapperNew>

      <BenefitSliderSection
        ID={'BENEFIT'}
        sectionBGColor={'#1D162B'}
        sectionHeading={'Benefits of Oracle'}
        sectionDesc={`Oracle's cloud-agnostic approach ensures scalability, flexibility and seamless integration, future-proofing your enterprise with hybrid cloud solutions.`}
        sectionTextColor={'white'}
        cardData={BENEFITS_CARDS_DATA}
        sectionHeadingMaxWidth={'100%'}
      />

      <IndustrySpotlight cardData={INDUSTRY_SPOTLIGHT} sectionDesc={'We serve diverse industries, addressing unique challenges and delivering tailored Oracle solutions to drive transformation.'} />
      <BlogSection
        ID={"blog"}
        blogImageUrl={blogImageUrl}
        Heading={"Leverage Database Potential with Oracle Cloud"}
        Desc={
          "Oracle Cloud has become an indispensable asset for modern enterprises seeking transformative capabilities. It provides a powerful platform that integrates database functionalities with cloud services, offering a host of benefits for businesses striving towards digital evolution and cloud transformation services. "
        }
        Color={"white"}
      ></BlogSection>
      <DistinctiveSection
        DistinctiveData={DISTINCTIVE_DATA}
        ID={"Distinctive"}
        Title={"The Distinctive Edge"}
        Desc={
          "We're a trusted Oracle partner, ensuring your business operations remain efficient and secure."
        }
      ></DistinctiveSection>
      {/* Start--Transform-Business-Form-Section============================================================== */}
      <TransformBusinessForm
        Title={"Transform your Business with us"}
        Desc={
          "Let us discuss how Oracle can help you with rapid growth."
        }
      ></TransformBusinessForm>
    </>
  );
};

export default page;
