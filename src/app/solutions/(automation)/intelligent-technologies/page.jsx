"use client";
import EntIntro from "@/components/EntIntro";
import Icon from "@mdi/react";
import Link from "next/link";
import { mdiArrowRight } from "@mdi/js";
import SectionNav from "@/components/SectionNav";
import WhySection from "@/components/WhySection";
import Benefits from "@/components/Benefits";
import Subscription from "@/components/Subscription";
import OverviewSection from "@/sections/overview/OverviewSection";
import SectionHeading from '@/components/SectionHeading';
import SectionWrapper from '@/components/SectionWrapper';
import SectionWidthSlider from '@/sections/sectionWithSlider/SectionWithSlider';
import BenefitSliderSection from '@/sections/benefitSlider/BenefitSliderSection';
import BlogSection from "@/sections/blog/BlogSection";
import DistinctiveSection from "@/sections/Distinctive/DistinctiveSection";
import TransformBusinessForm from "@/sections/transformBusinessFrom/TransformBusinessFromSection";


const page = () => {
  const blogImageUrl = '/ai-ml/blog-bg.png';
  const formBGURL = "/formBgImage.svg";
  const yourImageUrl = '/intelligent-tech/Solutions-Background.jpg';
  const advanceSolutionCardData = [
    {
      id: 1,
      BGImageUrl: '',
      BGColor: '#EFE9FB',
      cardTitle: "Machine Learning",
      cardIconUrl: '',
      cardHeading: 'Automating Tasks & Boost Efficiency',
      cardDesc: '',
      isArrow: 'true',
    },
    {
      id: 2,
      BGImageUrl: '',
      BGColor: '#EFE9FB',
      cardTitle: "Machine Learning",
      cardIconUrl: '',
      cardHeading: 'Enhancing Human Capabilities',
      cardDesc: '',
      isArrow: 'true',
    },
    {
      id: 3,
      BGImageUrl: '',
      BGColor: '#EFE9FB',
      cardTitle: "Robotic Process Automation ",
      cardIconUrl: '',
      cardHeading: 'Build, Run & Monitor Your Bots',
      cardDesc: '',
      isArrow: 'true',
    },
    {
      id: 4,
      BGImageUrl: '',
      BGColor: '#EFE9FB',
      cardTitle: "Machine Learning",
      cardIconUrl: '',
      cardHeading: 'Automating Tasks & Boost Efficiency',
      cardDesc: '',
      isArrow: 'true',
    },
  ];

  const benifitsCardsData = [
    { id: '1', text: 'Informed decision-making by extracting valuable insights and identifying patterns, correlation, and trends' },
    { id: '2', text: 'Informed decision-making by extracting valuable insights and identifying patterns, correlation, and trends' },
    { id: '3', text: 'Informed decision-making by extracting valuable insights and identifying patterns, correlation, and trends' },
    { id: '4', text: 'Informed decision-making by extracting valuable insights and identifying patterns, correlation, and trends' },
  ]

  const distinctiveData = [
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
  ]

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
      <OverviewSection Text={'Intelligent technologies like AI, ML, RPA and IoT are transforming businesses by predicting customer behavior, automating manual tasks, providing.'} />

      {/* solutions */}
      <SectionWidthSlider
        ID={'AIOfferings'}
        SectionImageUrl={yourImageUrl}
        Heading={'Advance Solutions for Business Future'}
        Desc={'We specialize in developing algorithms to make your operations smarter, faster and more reliable.'}
        Color={'white'}
        MaxWidth={'40%'}
        CardDataList={advanceSolutionCardData}
      >
      </SectionWidthSlider>

      {/* Advantages Vertical Slider */}
      <BenefitSliderSection
        ID={'AIOfferings'}
        BGColor={'#1D162B'}
        Heading={'Benefits of AI / ML'}
        Desc={'Artificial Intelligence (AI) and Machine Learning (ML) are driving transformative changes, offering multiple benefits that redefine the way you do business.'}
        Color={'white'}
        MaxWidth={'40%'}
        CardDataList={benifitsCardsData}
      ></BenefitSliderSection>

      {/* blog */}

      <BlogSection ID={'blog'} blogImageUrl={blogImageUrl} Heading={'Unveilling Hyper automation  for supply chain efficiency'}
        Desc={'IIoT offers a multitude of benefits that enable businesses to gain competitive edge through innovation and succeed in digital era.'}
        Color={'white'}
        MaxWidth="70%"
      ></BlogSection>

      {/* Distinctive section*/}
      <DistinctiveSection DistinctiveData={distinctiveData}
        ID={'Distinctive'} Title={'The Distinctive Edge'} Desc={'Trust Godrej Infotech to leverage Intelligent technologies and lead business into competitive digital landscape.'}
      >
      </DistinctiveSection>

      {/* transform business with us section */}
      <TransformBusinessForm Title={'Transform your Business with us'} Desc={"Let us discuss how intelligent technologies can help you with rapid growth."}>
      </TransformBusinessForm>
    </>
  );
};

export default page;
