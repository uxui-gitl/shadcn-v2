"use client";
import EntIntro from "@/components/EntIntro";
import StrategySub from "@/components/StrategySub";
import Testimonials from "@/sections/testimonial/Testimonial";
import shield from "../../../../../public/upgradeCloud/sheild.png";
import puzzle from "../../../../../public/upgradeCloud/puzzle.png";
import icon from "../../../../../public/icon.png";
import microsoft from "../../../../../public/upgradeCloud/microsoft.png";
import azure from "../../../../../public/upgradeCloud/azure.png";
import checkout from "../../../../../public/upgradeCloud/checkout.png";
import curiousPerson from "../../../../../public/upgradeCloud/curiousPerson.png";
import cloud from "../../../../../public/upgradeCloud/cloud.png";
import cloudArrows from "../../../../../public/upgradeCloud/cloudArrows.png";


/**
 * * Sandeep Rana
 * * 05/09/2022
 * Icons
 */

import AutomationRepetitiveTasks from "../../../../../public/icon/benefisIntelligentTechnologies/AutomationRepetitiveTasks.svg";
import HighDegreeAccuracyConsistency from "../../../../../public/icon/benefisIntelligentTechnologies/highDegreeAccuracyConsistency.svg";
import InformedDecisionMaking from "../../../../../public/icon/benefisIntelligentTechnologies/InformedDecisionmaking.svg";
import RealTimeProblemSolvingCapabilities from "../../../../../public/icon/benefisIntelligentTechnologies/RealTimeProblemSolvingCapabilities.svg";
import MSAzure from "../../../../../public/ai-ml/ms-azure.png";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import Icon from "@mdi/react";
import { mdiBullseyeArrow } from "@mdi/js";
import Link from "next/link";
import { mdiArrowRight } from "@mdi/js";
import CaseStudy from "@/sections/caseStudy/CaseStudy";
import SectionNav from "@/components/SectionNav";
import Testimonial from "@/sections/testimonial/Testimonial";

import BlogSlider from "@/components/BlogSlider";
import SME from "@/components/SME";
import InfotechWeeklyAlt from "@/sections/infotechWeeklyAlt/InfotechWeeklyAlt";

import { mdiArrowTopRight } from "@mdi/js";
import { mdiPlayCircle } from "@mdi/js";

import styles from "./page.module.css";
import WhySection from "@/components/WhySection";
import Benefits from "@/components/Benefits";
import Expertise from "@/components/Expertise";
import Subscription from "@/components/Subscription";
import Navbar from "@/components/Navbar";
import Abstract from "@/components/Abstract";
import Overview from "@/components/OverviewText";
import OverviewSection from "@/sections/overview/OverviewSection";
import SectionHeading from '@/components/SectionHeading';
import SectionWrapper from '@/components/SectionWrapper';
import CardWidthBackground from '@/components/CardWithBackground';
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const fadeInAnimationVariant = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5 * index,
    },
  }),
};
const page = () => {
  const blogImageUrl = '/ai-ml/blog-bg.png';
  const formBGURL = "/formBgImage.svg";
  const yourImageUrl = '/intelligent-tech/Solutions-Background.jpg';
  const advanceSolutionCardData = [
    { id: '1', CardTitle: 'Machine Learning', icon: '', Heading: 'Automating Tasks & Boost Efficiency', Desc: '', BGColor: '#EFE9FB' },
    { id: '2', CardTitle: 'Machine Learning', icon: '', Heading: 'Automating Tasks & Boost Efficiency', Desc: '', BGColor: '#EFE9FB' },
    { id: '3', CardTitle: 'Machine Learning', icon: '', Heading: 'Automating Tasks & Boost Efficiency', Desc: '', BGColor: '#EFE9FB' },
    { id: '4', CardTitle: 'Machine Learning', icon: '', Heading: 'Automating Tasks & Boost Efficiency', Desc: '', BGColor: '#EFE9FB' },
    { id: '5', CardTitle: 'Machine Learning', icon: '', Heading: 'Automating Tasks & Boost Efficiency', Desc: '', BGColor: '#EFE9FB' },

  ]
  const lists = [
    {
      id: 1,
      text: "Inadequate Scalability and Availability",
    },
    {
      id: 2,
      text: "Unreliable Backup Storage",
    },
    {
      id: 3,
      text: "Weak Disaster Recovery and Redundancy",
    },
    {
      id: 4,
      text: "Inadequate Data Integrity and Automation Capabilities",
    },
    {
      id: 5,
      text: "Subpar IT Performance",
    },
    {
      id: 6,
      text: "Limited IT Universality and Centralized Monitoring",
    },
    {
      id: 7,
      text: "High Management Costs of IT Infrastructure",
    },
  ];
  const blogData = [
    {
      _id: 1,
      ribbon: "blog",
      title:
        "Digitalization with Infor Coleman Artificial Intelligence & Machine Learning",
      desc: "Many of the organizations we work with today are looking for ways to optimize business processes, reduce manual work, and enhance customer service by using best-of-breed digital technologies that promise a speedy ROI. Having worked with Infor solutions for many years now, I see that Infor too has evolved its applications by introducing artificial intelligence & machine learning features to meet the needs of these organizations. Let’s take a closer look at these exciting features in Infor Coleman and how organizations can benefit from them.",
      cta: "Read More",
      link: "https://www.godrejinfotech.com/blogDetails.aspx?blog=18",
      imgUrl: "",
    },
  ];
  const upgradeCloud = [
    {
      _id: 1,
      title: "Upgrade AX to D365 F&O",
      desc: "Upgrade AX to D365 F&O to Revitalize Your Business Performance",
      cta: "Know more",
      link: "/",
      bg: "",
    },
    {
      _id: 2,
      title: "Upgrade Nav to Business Central ",
      desc: "Unlock Maximum Modern Benefits with Business Central Upgrade",
      cta: "Know more",
      link: "/",
      bg: "",
    },
    {
      _id: 3,
      title: "Upgrade to Infor LN Cloud",
      desc: "Future proof your business growth with Upgrade to Infor LN Cloud",
      cta: "Know more",
      link: "/",
      bg: "",
    },
    {
      _id: 4,
      title: "Application Migration",
      desc: "Migrate your Application to Cloud to Unleash Modernisation",
      cta: "Know more",
      link: "/",
      bg: "",
    },
    {
      _id: 5,
      title: "Migrate email to cloud",
      desc: "We aim for a more efficient and collaborative communication environment that will improve efficiency and streamline communication with minimum disruption to your everyday operations",
      cta: "Know more",
      link: "/",
      bg: "",
    },
  ];

  const AdvancedSolutions = [
    {
      _id: 1,
      title: "Machine Learning",
      desc: "Our ability in constructing, training, and deploying ML models assures an effective implementation process.",
      cta: "Know More",
      link: "Solutions/Intelligent-Technologies/AI-ML",
    },
    {
      _id: 2,
      title: "Artificial Intelligence ",
      desc: "Improvement in customer experiences, facilitating acceleration and optimized business operations.",
      cta: "Know More",
      link: "Solutions/Intelligent-Technologies/AI-ML",
    },
    {
      _id: 3,
      title: "Robotic Process Automation",
      desc: "Dedicate more time to strategic initiatives, enhance productivity and minimize the time-consuming repetitive tasks.",
      cta: "Know More",
      link: "Solutions/Intelligent-Technologies/RPA",
    },
  ];

  const BenefitsData = [
    {
      _id: 1,
      icon: "benefisIntelligentTechnologies/AutomationRepetitiveTasks",
      title: "",
      cardDesc:
        "Automation of repetitive tasks, resulting in increased operational efficiency and productivity. ",
    },
    {
      _id: 2,
      icon: "benefisIntelligentTechnologies/RealTimeProblemSolvingCapabilities",
      title: "",
      cardDesc:
        "Real-time problem-solving capabilities enables rapid identification and resolution of issues, minimizing disruptions and ensuring uninterrupted business operations.",
    },
    {
      _id: 3,
      icon: "benefisIntelligentTechnologies/InformedDecisionmaking",
      title: "",
      cardDesc:
        "Informed decision-making by extracting valuable insights and identifying patterns, correlation, and trends.",
    },
    {
      _id: 4,
      icon: "benefisIntelligentTechnologies/highDegreeAccuracyConsistency",
      title: "",
      cardDesc:
        "A high degree of accuracy and consistency in business operations.",
    },
  ];

  const navLinks = [
    {
      _id: 1,
      title: "Enterprise Suite",
      link: "#about",
    },
    {
      _id: 2,
      title: "Act Cards",
      link: "#actCards",
    },
    {
      _id: 3,
      title: "Employee Experience",
      link: "#empExp",
    },
    {
      _id: 4,
      title: "Spotlight",
      link: "#spotlight",
    },
  ];
  return (
    <>
      <EntIntro
        title="Cognitive Intelligent Solutions to Charge Your Business Value Chain with Ease "
        desc=""
        cta="Let's Connect"
        width="60%"
        video="https://gitl-usa.s3.us-west-1.amazonaws.com/banner1.mp4"
      />

      {/* Section Nav */}
      <>
        <SectionNav
          // Solutions
          // Benefits
          // Why Us

          arr={[
            {
              _id: 1,
              title: "Solutions",
              link: "#Solutions",
            },
            {
              _id: 2,
              title: "Benefits",
              link: "#Benefits",
            },
            {
              _id: 3,
              title: "Why Us",
              link: "#WhyUs",
            },
          ]}
        />
      </>

      {/* Overview  */}
      {/* <Abstract abstractdesc="Our primary goal is to realize positive business outcomes by harnessing our business-grade intelligent capabilities while concurrently optimizing overall business performance. We prioritize achieving positive results through the application of advanced competencies, ensuring strategic alignment with our clients' business objectives. Intelligent Technologies drive transformative innovations, utilizing AI, ML, and IoT to optimize processes, enhance decision-making, and propel businesses into a future of efficiency and agility."></Abstract> */}
      <OverviewSection Text={'Intelligent technologies like AI, ML, RPA and IoT are transforming businesses by predicting customer behavior, automating manual tasks, providing.'} />

      <SectionWrapper style={{
        backgroundImage: `url(${yourImageUrl})`, backgroundSize: 'cover', backgroundColor: 'rgba(0, 0, 0, 0.4)',
        backgroundBlendMode: "multiply"
      }}>

        <SectionHeading Heading={'Advance Solutions for Business Future'} Color="white"></SectionHeading>
        <div className="my-8">
          <Swiper
            slidesPerView={3}
            navigation={false}
            pagination={{ type: "bullets", clickable: true }}
            autoplay={true}
            loop={true}
            modules={[Autoplay, Navigation,]}
          >
            {advanceSolutionCardData.map((item) => (
              <SwiperSlide key={item.id}>
                <div
                  className="h-full w-full absolute left-0 top-0"
                // style={{
                //   background: `url(${image}) center center / cover scroll no-repeat`,
                // }}
                ></div>
                <CardWidthBackground Item={item}></CardWidthBackground>

              </SwiperSlide>
            ))}
          </Swiper>


        </div>
      </SectionWrapper>

      {/* Benefits Vertical Slider */}
      <SectionWrapper id="Benefits" BGColor="#1D162B">
        <Benefits
          ribbon="Benefits of AI / ML"
          ribbonTxtWhite="true"
          title=""
          desc="Artificial Intelligence (AI) and Machine Learning (ML) are driving transformative changes, offering multiple benefits that redefine the way you do business."
          arr={BenefitsData}
        ></Benefits>
      </SectionWrapper>
      {/* blog section  */}

      <SectionWrapper id="blog" style={{
        backgroundImage: `url(${blogImageUrl})`, backgroundSize: 'cover', marginTop: "-40px"
      }}>

        <div className="">
          <SectionHeading
            Heading={'Unveilling Hyper automation  for supply chain efficiency'}
            Desc={'IIoT offers a multitude of benefits that enable businesses to gain competitive edge through innovation and succeed in digital era.'}
            Color={'white'}
            MaxWidth="70%"
          >
          </SectionHeading>
        </div>

        <Link
          href={"#Contact"}
          className="text-white mt-20 mb-16 inline-flex items-center transition-all bg-[#5F22D9] hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-base px-8 py-3 me-2 dark:bg-[#5F22D9] dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
        >
          {'Read More'}
          <Icon
            path={mdiArrowRight}
            style={{ marginLeft: "0.5em", marginTop: '1px' }}
            size={1}
          />
        </Link>
      </SectionWrapper>


      {/* Why choose gitl and ai and ml  WhyUs*/}
      <SectionWrapper ID="WhyUs" style={{ marginTop: "-40px" }}>
        <WhySection
          title="The Distinctive Edge"
          desc="Trust Godrej Infotech to leverage Intelligent technologies and lead business into competitive digital landscape. "
          arr={[
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
          ]}
          renderInlineSpans={true}
        ></WhySection>
      </SectionWrapper>

      {/* Subscription */}
      <div className="" style={{ backgroundColor: '#1D162B' }}>
        <div className="" style={{
          backgroundImage: `url(${formBGURL})`, backgroundSize: 'cover', backgroundPosition: 'bottom'
        }}>
          <div className="py-10 sm:py-14 px-4 sm:px-12 md:px-36 md:pt-44">
            <div className="card-body p-5 md:p-24 rounded-3xl" style={{ background: "linear-gradient(180deg, #5F22D9 2.14%, rgba(95, 34, 217, 0.00) 74.44%)" }}>
              <Subscription
                title="Transform your Business with us"
                blue=""
                title2=""
                desc="Let us discuss how intelligent technologies can help you with rapid growth."
              />
            </div>
          </div>

        </div>
      </div>

      {/* Infotech Weekly Updates */}
      <InfotechWeeklyAlt />
    </>
  );
};

export default page;
