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
           CardDataList={advanceSolutionCardData}
           ></BenefitSliderSection>
      {/* <SectionWrapper id="Benefits" BGColor="#1D162B" style={{ marginTop: '-200px', paddingTop: '200px' }}>
        <Benefits
          ribbon="Benefits of AI / ML"
          ribbonTxtWhite="true"
          title=""
          desc="Artificial Intelligence (AI) and Machine Learning (ML) are driving transformative changes, offering multiple benefits that redefine the way you do business."
          arr={BenefitsData}
        ></Benefits>
      </SectionWrapper> */}

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


      {/* Distinctive */}
      <SectionWrapper ID="WhyUs" style={{ marginTop: "-40px" }}>
        <WhySection
          title="The Distinctive Edge"
          desc="Trust Godrej Infotech to leverage Intelligent technologies and lead business into competitive digital landscape. "
          arr={distinctiveData}
          renderInlineSpans={true}
        ></WhySection>
      </SectionWrapper>

      {/* transform  your Business */}
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
    </>
  );
};

export default page;
