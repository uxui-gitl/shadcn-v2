"use client";
import EntIntro from "@/components/EntIntro";
import SectionNav from "@/components/SectionNav";
import SectionWrapperNew from "@/components/SectionWrapperNew";
import OverviewSection from "@/sections/overview/OverviewSection";
import CommonCardOneSlider from '@/sections/commonCardOneSlider/CommonCardOneSlider';
import BenefitSliderSection from '@/sections/benefitSlider/BenefitSliderSection';
import BlogSection from "@/sections/blog/BlogSection";
import DistinctiveSection from "@/sections/distinctive/DistinctiveSection";
import TransformBusinessForm from "@/sections/transformBusinessFrom/TransformBusinessFromSection";
import { SwiperSlide } from "swiper/react";
import Slider from "@/components/Slider";
import CommonCardOne from "@/components/CommonCardOne";


const page = () => {
  const blogImageUrl = '/intelligent-tech/Digitalized.webp';
  const formBGURL = "/formBgImage.svg";
  const imageUrl = '/intelligent-tech/advanceSolutions.webp';

  const advanceSolutionCardData = [
    {
      id: 1,
      cardBGImage: '/intelligent-tech/cards-background/bg-card-machine-learning.png',
      cardBGColor: '#EFE9FB',
      cardTitle: "Machine Learning",
      cardIconUrl: '/intelligent-tech/icons/machineLearning.svg',
      cardHeading: 'Automated Pattern Recognition',
      cardDesc: 'Our ability in constructing, training, and deploying ML models assures an effective implementation process',
      isArrow: false,
    },
    {
      id: 2,
      cardBGImage: '/intelligent-tech/cards-background/bg-card-artificial-intelligence.png',
      cardBGColor: '#EFE9FB',
      cardTitle: "Artificial Intelligence",
      cardIconUrl: '/intelligent-tech/icons/artificialIntelligence.svg',
      cardHeading: 'Cognitive Computing Solutions',
      cardDesc: 'Ensure improvement in customer experiences, facilitating acceleration and optimized business operations.',
      isArrow: false,
    },
    {
      id: 3,
      cardBGImage: '/intelligent-tech/cards-background/bg-card-rpa.png',
      cardBGColor: '#EFE9FB',
      cardTitle: "Robotic Process Automation",
      cardIconUrl: '/intelligent-tech/icons/roboticProcessAutomation.svg',
      cardHeading: 'Efficient Task Automation',
      cardDesc: 'Minimize time-consuming repetitive tasks and dedicate more time to strategic initiatives',
      isArrow: false,
    },
    {
      id: 4,
      cardBGImage: '/intelligent-tech/cards-background/bg-card-asset-management.png',
      cardBGColor: '#EFE9FB',
      cardTitle: "IIoT",
      cardIconUrl: '/intelligent-tech/icons/iIoT.svg',
      cardHeading: 'Asset Optimization and Uptime',
      cardDesc: 'Optimize industrial operations with real-time machine performance data and predictive maintenance insights from our IoT services.',
      isArrow: false,
    },
  ];

  // const benefitsCardsData = [
  //   { id: '1', text: 'high degree of accuracy and consistency in business operations' },
  //   { id: '2', text: 'Informed decision-making to extract valuable insights and identify patterns, correlation, and trends' },
  //   { id: '3', text: 'Real-time problem-solving enable minimum disruptions and ensures uninterrupted business operations' },
  //   { id: '4', text: 'Automation of repetitive tasks, resulting in increased operational efficiency and productivity.' },
  //   { id: '5', text: 'Reduce equipment downtime and increase operational efficiency with real-time monitoring and predictive maintenance' },
  // ]

  const distinctiveData = [
    {
      _id: 1,
      desc: "Enables automation across diverse use cases",
      icon: "/intelligent-tech/distinctiveEdge/enablesAutomation.svg",
    },
    {
      _id: 2,
      desc: "Help businesses achieve high productivity",
      icon: "/intelligent-tech/distinctiveEdge/helpBusinesses.svg",
    },
    {
      _id: 3,
      desc: "Substantial improvements in return on investment (ROI)",
      icon: "/intelligent-tech/distinctiveEdge/substantialImprovements.svg",
    },
    {
      _id: 4,
      desc: "Extensive experience in understanding industry-specific challenges and opportunities",
      icon: "/intelligent-tech/distinctiveEdge/extensiveExperience.svg",
    },

  ]

  const BenefitsData = [
    {
      _id: 1,
      icon: "/intelligent-tech/benefits/accuracyConsistency.svg",
      title: "",
      cardDesc:
        "A high degree of accuracy and consistency in business operations",
    },
    {
      _id: 2,
      icon: "/intelligent-tech/benefits/problemSolving.svg",
      title: "",
      cardDesc:
        "Real-time problem-solving enable minimum disruptions and ensures uninterrupted business operations",
    },
    {
      _id: 3,
      icon: "/intelligent-tech/benefits/Automation.svg",
      title: "",
      cardDesc:
        "Automation of repetitive tasks, resulting in increased operational efficiency and productivity.",
    },
    {
      _id: 4,
      icon: "/intelligent-tech/benefits/reduceEquipment.svg",
      title: "",
      cardDesc:
        "Reduce equipment downtime and increase operational efficiency with real-time monitoring and predictive maintenance",
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
        video="/intelligent-tech/videos/pageBanner.mp4"
      />

      {/* Overview  */}
      <OverviewSection Text={'Discover how AI, ML, RPA and IIoT help businesses with customer behavior prediction, process automation and generate new revenue streams with real time insights. As a strategic tech partner, Godrej Infotech ensures a future-ready foundation for clients.'} />
      {/* solutions */}
      <SectionWrapperNew
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${imageUrl})`,
          backgroundSize: "cover",
          backgroundAttachment: "fixed", // This is key for the parallax effect
          backgroundPosition: "center",
        }}
        sectionHeading={"Advance Solutions for Business Future Readiness"}
        sectionDesc={''}
        sectionTextColor="text-neutral-white"
        sectionHeadingLayout="left"
        setTop={false}
      >
        <Slider>
          {advanceSolutionCardData?.map((item, index) => (
            <SwiperSlide key={index}>
              <CommonCardOne Item={item} />
            </SwiperSlide>
          ))}
        </Slider>
      </SectionWrapperNew>

      {/* Advantages Vertical Slider */}
      <BenefitSliderSection
        ID={'AIOfferings'}
        sectionBGColor={'bg-primary-900'}
        sectionHeading={'Advantage of Intelligent Technologies'}
        sectionDesc={'Implementing intelligent technologies is crucial for businesses to fuel growth & stay relevant in digital era.'}
        sectionTextColor={'text-neutral-white'}
        cardData={BenefitsData}
        sectionHeaderWidth={'w-full'}
      ></BenefitSliderSection>

      {/* blog */}
      <BlogSection ID={'blog'} blogImageUrl={blogImageUrl} Heading={'Digitalization with Infor Coleman AI & ML'}
        Desc={'Many of the organizations we work with today are looking for ways to optimize business processes, reduce manual work, and enhance customer service by using best-of-breed digital technologies that promise a speedy ROI.'}
        Color={'text-neutral-white'}
      ></BlogSection>

      {/* Distinctive section*/}
      <DistinctiveSection DistinctiveData={distinctiveData}
        ID={'Distinctive'} Title={'The Distinctive Edge'} Desc={'Reliable Expertise in Intelligent Tech Solutions'}
      >
      </DistinctiveSection>

      {/* transform business with us section */}
      <TransformBusinessForm Title={'Transform your Business with us'} Desc={"Let us discuss how our expertise can help you with rapid growth."} max>
      </TransformBusinessForm>
    </>
  );
};

export default page;
