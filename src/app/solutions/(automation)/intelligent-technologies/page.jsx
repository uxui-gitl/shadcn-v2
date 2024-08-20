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
import DistinctiveSection from "@/sections/distinctive/DistinctiveSection";
import TransformBusinessForm from "@/sections/transformBusinessFrom/TransformBusinessFromSection";


const page = () => {
  const blogImageUrl = '/ai-ml/blog-bg.png';
  const formBGURL = "/formBgImage.svg";
  const yourImageUrl = '/intelligent-tech/Solutions-Background.jpg';
  const advanceSolutionCardData = [
    {
      id: 1,
      BGImageUrl: '',
      CardBGColor:'#EFE9FB',
      CardTitle: "Machine Learning",
      CardIconUrl: '',
      CardHeading: 'Automated Pattern Recognition',
      CardDesc: 'Our ability in constructing, training, and deploying ML models assures an effective implementation process',
      isArrow:false,
    },
    {
      id: 2,
      BGImageUrl: '',
      CardBGColor:'#EFE9FB',
      CardTitle: "Artificial Intelligence",
      CardIconUrl: '',
      CardHeading: 'Cognitive Computing Solutions',
      CardDesc: 'Ensure improvement in customer experiences, facilitating acceleration and optimized business operations.',
      isArrow: false,
    },
    {
      id: 3,
      BGImageUrl: '',
      CardBGColor:'#EFE9FB',
      CardTitle: "Robotic Process Automation",
      CardIconUrl: '',
      CardHeading: 'Efficient Task Automation',
      CardDesc: 'Minimize time-consuming repetitive tasks and dedicate more time to strategic initiatives',
      isArrow: false,
    },
    {
      id: 4,
      BGImageUrl: '',
      CardBGColor:'#EFE9FB',
      CardTitle: "IIoT",
      CardIconUrl: '',
      CardHeading: 'Asset Optimization and Uptime',
      CardDesc: 'Optimize industrial operations with real-time machine performance data and predictive maintenance insights from our IoT services.',
      isArrow: false,
    },
  ];

  const benifitsCardsData = [
    { id: '1', text: 'A high degree of accuracy and consistency in business operations' },
    { id: '2', text: 'Informed decision-making to extract valuable insights and identify patterns, correlation, and trends' },
    { id: '3', text: 'Real-time problem-solving enable minimum disruptions and ensures uninterrupted business operations' },
    { id: '4', text: 'Automation of repetitive tasks, resulting in increased operational efficiency and productivity.' },
    { id: '5', text: 'Reduce equipment downtime and increase operational efficiency with real-time monitoring and predictive maintenance' },
  ]

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

  const BenefitsData = [
    {
      _id: 1,
      icon: "benefisIntelligentTechnologies/AutomationRepetitiveTasks",
      title: "",
      CardDesc:
        "Automation of repetitive tasks, resulting in increased operational efficiency and productivity. ",
    },
    {
      _id: 2,
      icon: "benefisIntelligentTechnologies/RealTimeProblemSolvingCapabilities",
      title: "",
      CardDesc:
        "Real-time problem-solving capabilities enables rapid identification and resolution of issues, minimizing disruptions and ensuring uninterrupted business operations.",
    },
    {
      _id: 3,
      icon: "benefisIntelligentTechnologies/InformedDecisionmaking",
      title: "",
      CardDesc:
        "Informed decision-making by extracting valuable insights and identifying patterns, correlation, and trends.",
    },
    {
      _id: 4,
      icon: "benefisIntelligentTechnologies/highDegreeAccuracyConsistency",
      title: "",
      CardDesc:
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
        title="Intelligent Solutions for Future-Proof Business"
        desc="Delivering business - fit intelligent solutions to automate tedious tasks and augment business strength."
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
      <OverviewSection Text={'Discover how AI, ML, RPA and IIoT help businesses with customer behavior prediction, process automation and generate new revenue streams with real time insights. As a strategic tech partner, Godrej Infotech ensures a future-ready foundation for clients.'} />

      {/* solutions */}
      <SectionWidthSlider
        ID={'AIOfferings'}
        SectionImageUrl={yourImageUrl}
        Heading={'Advance Solutions for Business Future Readiness'}
        Desc={''}
        Color={'white'}
        SectionHeadingMaxWidth={'60%'}
        CardDataList={advanceSolutionCardData}
      >
      </SectionWidthSlider>

      {/* Advantages Vertical Slider */}
      <BenefitSliderSection
        ID={'AIOfferings'}
        BGColor={'#1D162B'}
        Heading={'Advantage of Intelligent Technologies'}
        Desc={'Implementing intelligent technologies is crucial for businesses to fuel growth & stay relevant in digital era.'}
        Color={'white'}
        CardDataList={benifitsCardsData}
        SectionHeadingMaxWidth={'100%'}
      ></BenefitSliderSection>

      {/* blog */}

      <BlogSection ID={'blog'} blogImageUrl={blogImageUrl} Heading={'Digitalization with Infor Coleman Artificial Intelligence & Machine Learning'}
        Desc={'Many of the organizations we work with today are looking for ways to optimize business processes, reduce manual work, and enhance customer service by using best-of-breed digital technologies that promise a speedy ROI.'}
        Color={'white'}
        MaxWidth="70%"
      ></BlogSection>

      {/* Distinctive section*/}
      <DistinctiveSection DistinctiveData={distinctiveData}
        ID={'Distinctive'} Title={'The Distinctive Edge'} Desc={'Reliable Expertise in Intelligent Tech Solutions'}
      >
      </DistinctiveSection>

      {/* transform business with us section */}
      <TransformBusinessForm Title={'Transform your Business with us'} Desc={"Let us discuss how intelligent technologies can help you with rapid growth."} max>
      </TransformBusinessForm>
    </>
  );
};

export default page;
