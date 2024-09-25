"use client";

import EntIntro from "@/components/EntIntro";
import SectionNav from "@/components/SectionNav";
import OverviewSection from "@/sections/overview/OverviewSection";
import ChallengeSection from "@/sections/challenge/challengeSection";
import SectionWithSlider from "@/sections/sectionWithSlider/SectionWithSlider";
import CommonCardThreeSlider from "@/sections/commonCardThreeSlider/CommonCardThreeSlider";
import BenefitSliderSection from '@/sections/benefitSlider/BenefitSliderSection';
import CaseStudiesSection from "@/sections/case-studies/CaseStudiesSection";
import BlogSection from "@/sections/blog/BlogSection";
import TransformBusinessForm from "@/sections/transformBusinessFrom/TransformBusinessFromSection";
import ReviewSliderSection from '@/sections/reviewSlider/ReviewSliderSection';


const page = () => {

  const blogImageUrl = "/ai-ml/blog-bg.png";
  const imgBGURL_Challenges =
    "/infor/inforchallangeleftimage.svg";
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
    { id: 1, title: "Inadequate Scalability and Availability", icon: '/upgradeCloud/icons/ico--target.svg' },
    { id: 2, title: "Unreliable Backup Storage", icon: '/upgradeCloud/icons/ico--target.svg' },
    { id: 3, title: "Weak Disaster Recovery and Redundancy", icon: '/upgradeCloud/icons/ico--target.svg' },
    { id: 4, title: "Inadequate Data Integrity", icon: '/upgradeCloud/icons/ico--target.svg' },
  ];

  const BENEFITS_CARDS_DATA = [

    { id: '1', icon: '', cardDesc: 'A high degree of accuracy and consistency in business operations' },
    { id: '2', icon: '', cardDesc: 'Informed decision-making to extract valuable insights and identify patterns, correlation, and trends' },
    { id: '3', icon: '', cardDesc: 'Real-time problem-solving enable minimum disruptions and ensures uninterrupted business operations' },
    { id: '4', icon: '', cardDesc: 'Automation of repetitive tasks, resulting in increased operational efficiency and productivity.' },
    { id: '5', icon: '', cardDesc: 'Reduce equipment downtime and increase operational efficiency with real-time monitoring and predictive maintenance' },

  ];

  const CASE_STUDIES_DATA = [
    {
      imageURL: "",
      videoURL: "/CloudStackServices/case-studies/bg--businessman-industry.mp4",
      title: "IIoT Solutions",
      heading: "Low Code, No Code Configurable Portals on Azure or AWS IIOT",
      description:
        "Industry 4.0 Accelerator (IoT for shopfloor) for implementation of IoT in shopfloor – Both for Discrete & Process Manufacturing",
      link: "/case-study-1",
      color: "#FFFFFF",
      bgCardColor: "#2B1624",
    },
    {
      imageURL: "/iiot/bg--bespoke--iiot-soltions.png",
      title: "",
      heading: "Bespoke IIOT Solutions",
      description:
        "Require Development from Scratch.",
      link: "/case-study-1",
      color: "#2B1624",
      bgCardColor: "#00F8C4",
    },
    {
      imageURL: "",
      title: "Case Studies",
      heading: "Insights to Accelerate Business Growth",
      description: '',
      link: "",
      color: "#FFFFFF",
      bgCardColor: "#2B1624",
    },

    {
      imageURL: "",
      title: "Case Studies",
      heading: "India's Largest Lift Truck Manufacturer",
      description: 'Gathers forklift data and enable remote monitoring, troubleshooting & optimization with IoT',
      link: "",
      color: "#2B1624",
      bgCardColor: "#E4E4E4",
    },

    {
      imageURL: "",
      title: "Case Studies",
      heading: "India's Leading Construction Organization",
      description: 'Implements IoT & ML Solution for Real Time Cement Inventory Calibration with 98% accuracy',
      link: "",
      color: "#2B1624",
      bgCardColor: "#FCE6F4"
    },

    // Add more case studies here...
  ];

  const UPGRADE_NOW_DATA = [
    {
      id: 1,
      BGImageUrl: "",
      BGColor: "#fff",
      CardBGColor: "transparent",
      CardTextColor: '#000',
      CardTitle: "",
      CardIconUrl: "/upgradeCloud/icons/ico--target.svg",
      CardHeading: "Lift and Shift <br/>to Cloud",
      CardDesc:
        "Migrate email and infrastructure to Microsoft's cloud-based platform for seamless collaboration and security.",
      isArrow: "true",
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
      CardHeading: "ERP on <br/>Cloud",
      CardDesc:
        "Deliver enhanced business agility, operation automation and better decision-making capability with analytics.",
      isArrow: "true",
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
      CardHeading: "Application Migration <br/>to the Cloud",
      CardDesc:
        "Scaling resources on-demand, we specialize in effective migration of applications to the cloud.",
      isArrow: "true",
      link: [],
    },

  ];


  const RPASolution = [
    {
      id: 1,
      cardBGColor: '#F5B1DC',
      cardHeading: 'Custom Application Development',
      cardDesc: 'Automate repetitive tasks to enhance productivity with AI-driven workflow automation and analytics',
      isArrow: true,
      cardTextColor: 'black',
      cardTopImageUrl: 'https://flowbite.com/docs/images/blog/image-1.jpg'
    },
    {

      id: 2,
      cardBGColor: '#FCE6F4',
      cardHeading: 'Custom Application Development',
      cardDesc: 'AI-driven workflows, OCR and rule-based system enables accurate results',
      isArrow: true,
      cardTextColor: 'black',
      cardTopImageUrl: 'https://flowbite.com/docs/images/blog/image-4.jpg'
    },
    {

      id: 3,
      cardBGColor: '#CDBAF3',
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

      <ChallengeSection
        setHeading="Warehouse and  Supply chain - Challenges"
        setColor="white"
        bgColor={'#5F22D9'}
        setImageBGURL={imgBGURL_Challenges}
        setChallengesList={CHALLENGES_LIST_DATA}
      />

      <CommonCardThreeSlider
        ID={''}
        sectionImageUrl={''}
        sectionBGColor={'#1D162B'}
        sectionHeading={'Infor WMS Key Highlights'}
        sectionDesc={'Extending the capabilities of Infor with tailored functional enhancements for enhancement of business productivity'}
        sectionTextColor={'#fff'}
        cardData={RPASolution}
      />

      <SectionWithSlider
        ID={"UPGRADE_NOW_DATA"}
        sectionHeading={"Infor WMS Industry Solutions"}
        sectionDesc={
          "Enhancing the features of business applications, our specialized solutions intend to add value to business with handy support, streamlined processes and intense industry expertise."
        }
        sectionTextColor="#000"
        cardData={UPGRADE_NOW_DATA}
        sectionBGColor="white"
        setHeadingLayout="horizontal"

      />

      <BenefitSliderSection
        ID={'BENEFIT'}
        sectionBGColor={'#1D162B'}
        sectionHeading={'Benefits of Infor WMS'}
        sectionDesc={'Achieving warehouse operation goals in an excellent way'}
        sectionTextColor={'white'}
        cardData={BENEFITS_CARDS_DATA}
        sectionHeadingMaxWidth={'100%'}
      />

      <CaseStudiesSection
        casestudy={CASE_STUDIES_DATA}
        csLayout={"2"}
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
