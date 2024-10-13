"use client";
import EntIntro from "@/components/EntIntro";
import OverviewSection from "@/sections/overview/OverviewSection";
import SectionWrapper from '@/components/SectionWrapper';
import SectionHeading from '@/components/SectionHeading';
import SectionWidthSlider from "@/sections/sectionWithSlider/SectionWithSlider";
import HubExpertise from "@/sections/hub-of-expertise/HubExpertise";
import BlogSection from "@/sections/blog/BlogSection";
import TransformBusinessForm from "@/sections/transformBusinessFrom/TransformBusinessFromSection";
import DistinctiveSection from "@/sections/distinctive/DistinctiveSection";
import Image from "next/image";


import 
ReviewSliderSection from '@/sections/reviewSlider/ReviewSliderSection';

const page = () => {

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

  const CHALLENGES_LIST_DATA = [
    { id: 1, title: "Inadequate understanding of business and customer perspectives", icon: '/upgradeCloud/icons/ico--target.svg' },
    { id: 2, title: "Existing or upcoming market conditions ambiguity", icon: '/upgradeCloud/icons/ico--target.svg' },
    { id: 3, title: "Discord between business vision and strategy", icon: '/upgradeCloud/icons/ico--target.svg' },
    { id: 4, title: "Innovation challenges and new capabilities deployment", icon: '/upgradeCloud/icons/ico--target.svg' },
    { id: 5, title: "Absence of enterprise-wide adaptability", icon: '/upgradeCloud/icons/ico--target.svg' },
    { id: 6, title: "Ineffectual strategy implementation", icon: '/upgradeCloud/icons/ico--target.svg' },
  ];

  const ourServices1 = [
    { id: 1, title: "abhay", icon: '/upgradeCloud/icons/ico--target.svg' },
    { id: 2, title: "manish Storage", icon: '/upgradeCloud/icons/ico--target.svg' },
    { id: 3, title: "Weak Disaster Recovery and Redundancy", icon: '/upgradeCloud/icons/ico--target.svg' },
    { id: 4, title: "Inadequate Data Integrity", icon: '/upgradeCloud/icons/ico--target.svg' },
  ];

  const ourServices2 = [
    { id: 1, title: "anish", icon: '/upgradeCloud/icons/ico--target.svg' },
    { id: 2, title: "manish Storage", icon: '/upgradeCloud/icons/ico--target.svg' },
    { id: 3, title: "Weak Disaster Recovery and Redundancy", icon: '/upgradeCloud/icons/ico--target.svg' },
    { id: 4, title: "Inadequate Data Integrity", icon: '/upgradeCloud/icons/ico--target.svg' },
  ];

  const distinctiveData = [
    {
      _id: 1,
      desc: "Strong legacy of our parent company – Godrej Enterprise group which hassucceeded for more than 125 years.",
      icon: "",
    },
    {
      _id: 2,
      desc: "Shared DNA of engineering expertise from our parent group – Godrej EnterpriseGroup with 1.7Bn revenue.",
      icon: "",
    },
    {
      _id: 3,
      desc: "Long-term global relationships built on trust, reliability and collaboration.",
      icon: "",
    },
    {
      _id: 4,
      desc: "Industry-focused teams executing time-tested practices of excellence.",
      icon: "",
    },
    {
      _id: 5,
      desc: "Holistic ecosystem including scalable deployment, support services and diverseportfolio of ERPs and digital solutions.",
      icon: "",
    },
    {
      _id: 6,
      desc: "Responsive approach and defined processes that set high standards.",
      icon: "",
    },

  ]

  const blogImageUrl = "/ai-ml/blog-bg.png";
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

  const ultimateChoiceData = [
    {
      id: 1,
      BGImageUrl: "",
      BGColor: "#fff",
      CardBGColor: "transparent",
      CardTextColor: '#000',
      CardTitle: "",
      CardIconUrl: "/upgradeCloud/icons/ico--target.svg",
      CardHeading: "Sample Heading",
      CardDesc:
        "Scalability according to evolving business needs.Scalability according to evolving business needs.",
      isArrow: "",
      link: [],
    },

    {
      id: 2,
      BGImageUrl: "",
      BGColor: "#fff",
      CardBGColor: "transparent",
      CardTextColor: '#000',
      CardTitle: "",
      CardIconUrl: "/upgradeCloud/icons/ico--target.svg",
      CardHeading: "Sample Heading",
      CardDesc:
        "Faster development cycles with pay-as-you-go model offering cost effectiveness and business agility",
      isArrow: "",
      link: [],
    },
    {
      id: 3,
      BGImageUrl: "",
      BGColor: "#fff",
      CardBGColor: "transparent",
      CardTextColor: '#000',
      CardTitle: "",
      CardIconUrl: "/upgradeCloud/icons/ico--target.svg",
      CardHeading: "Sample Heading",
      CardDesc:
        "Drive business agility and improved ROI with automation",
      isArrow: "",
      link: [],
    },
    {
      id: 4,
      BGImageUrl: "",
      BGColor: "#fff",
      CardBGColor: "transparent",
      CardTextColor: '#000',
      CardTitle: "",
      CardIconUrl: "/upgradeCloud/icons/ico--target.svg",
      CardHeading: "Sample Heading",
      CardDesc:
        "Highest levels of security and privacy, ensuring data is safeguarded",
      isArrow: "",
      link: [],
    },
  ];

  

  return (
    <>
      <EntIntro
        title="Begin Your Digital Journey with Strategic Consulting Expertise"
        desc=""
        cta="Let's Connect"
        width="60%"
        video="https://gitl-usa.s3.us-west-1.amazonaws.com/banner1.mp4"
      />
      <OverviewSection Text={`Purpose-driven strategy fuels business transformation. Our consultants design future-ready digital programs for enterprise success `} />
      
      <SectionWrapper BGColor="black">
        <div className="md:container mx-auto">
          <SectionHeading
            layout="horizontal"
            Color="white"
            headingContainerWidth="w-full"
            Heading="Knocking Business Challenges  "
            Desc="Partner with us to navigate critical challenges, simplify complex processes, and develop afuture-ready organization"
          ></SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-16">
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

      <SectionWrapper BGColor="#5F22D9">
        <div className="md:container mx-auto">
          <SectionHeading
            layout="horizontal"
            Color="white"
            headingContainerWidth="w-full"
            Heading="Our Services   "
            Desc="With deep digital experience and broad global reach, we help enterprises to embrace the digital future that enhances decision-making across the organisation.  "
          ></SectionHeading>
          <div className="grid grid-cols-1 gap-4 mt-4 md:mt-16">
            <div>
              <div className="grid grid-cols-2 gap-12">
                <ul className=" space-y-4 w-full text-white">
                  {ourServices1.map((challenge, index) => (
                    <li
                      key={challenge.id}
                      className={`flex items-start py-6 border-b-[0.5px] border-white w-full ${index === CHALLENGES_LIST_DATA.length - 1 ? 'border-b-0' : ''}`}
                    >
                      <div className="text-left">
                        <h3 className="text-2xl font-normal">
                          {challenge.title}
                        </h3>
                      </div>
                    </li>
                  ))}
                </ul>
                <ul className=" space-y-4 w-full text-white">
                  {ourServices2.map((challenge, index) => (
                    <li
                      key={challenge.id}
                      className={`flex items-start py-6 border-b-[0.5px] border-white w-full ${index === CHALLENGES_LIST_DATA.length - 1 ? 'border-b-0' : ''}`}
                    >
                      <div className="text-left">
                        <h3 className="text-2xl font-normal">
                          {challenge.title}
                        </h3>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

      </SectionWrapper>

     {/*  <SectionWidthSlider
        ID={"ultimateChoiceData"}
        sectionHeading={""}
        sectionDesc={''}
        sectionTextColor="white"
        cardData={ultimateChoiceData}
        sectionBGColor="#EFE9FB"
      /> */}

      <SectionWrapper BGColor="#1D162B">
        <div className="md:container mx-auto">
          <div className="flex justify-center items-center flex-col">
            <div className="w-full md:w-1/2 mb-10">
              <SectionHeading
                center
                Color="white"
                headingContainerWidth="w-full"
                Heading="Consulting Service Approach"
                Desc="The foundation of our consulting service is strengthened by our ACT model, facilitating growth and success in a dynamic competitive landscape. "
              ></SectionHeading>
            </div>
            <div>
              <img src="/services/service01.svg" width="100%"></img>
            </div>
          </div>
        </div>
      </ SectionWrapper>

      
      <BlogSection
        ID={"blog"}
        blogImageUrl={blogImageUrl}
        Heading={"Holistic Approach to Process Improvement"}
        Desc={
          "One of the most effective ways to achieve this is through process improvementstrategies. By refining workflows, eliminating bottlenecks, and streamlining operations,businesses can enhance productivity, reduce costs and drive growth. In this blog, we'llexplore the importance of process improvement and discuss key strategies forimplementing it effectively."
        }
        maxWidth={'50%'}
        Color={"white"}
      ></BlogSection>
      
      <DistinctiveSection DistinctiveData={distinctiveData}
        ID={'Distinctive'} Title={'The Distinctive Edge'} Desc={'We are a strategic IT partner to ambitious enterprises on their journeytowards business progression'}
      >
      </DistinctiveSection>
        
      
      <TransformBusinessForm
        Title={"Transform your Business with us"}
        Desc={
          "Let us discuss how business consulting can help you with rapid growth."
        }
      ></TransformBusinessForm>
    </>
  );
};

export default page;
