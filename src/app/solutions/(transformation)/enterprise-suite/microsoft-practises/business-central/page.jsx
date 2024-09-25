"use client";
import EntIntro from "@/components/EntIntro";
import SectionWrapperNew from "@/components/SectionWrapperNew";
import OverviewSection from "@/sections/overview/OverviewSection";
import BenefitSliderSection from '@/sections/benefitSlider/BenefitSliderSection';
import IndustrySpotlight from "@/sections/industry-spotlight/industrySpotlight";
import CaseStudiesSection from "@/sections/case-studies/CaseStudiesSection";
import BlogSection from "@/sections/blog/BlogSection";
import DistinctiveSection from "@/sections/distinctive/DistinctiveSection";
import ReviewSliderSection from "@/sections/reviewSlider/ReviewSliderSection";
import TransformBusinessForm from "@/sections/transformBusinessFrom/TransformBusinessFromSection";


const page = () => {

  const benifitsCardsData = [
    {
      id: '1',
      icon: "benefisIntelligentTechnologies/AutomationRepetitiveTasks",
      cardDesc: 'Process and analyse vast volumes of data and offers round-the-clock assistance to customers'
    },
    {
      id: '2',
      icon: "benefisIntelligentTechnologies/AutomationRepetitiveTasks",
      cardDesc: 'Anticipate future outcomes based on historical data, making informed decisions'
    },
    {
      id: '3', icon: "benefisIntelligentTechnologies/AutomationRepetitiveTasks",
      cardDesc: 'Enables effortless communication and efficient information retrieval through Natural Language Processing'
    },
    {
      id: '4', icon: "benefisIntelligentTechnologies/AutomationRepetitiveTasks",
      cardDesc: 'Optimize supply chain management, predict maintenance need, and elevate quality control, resulting in higher productivity'
    },
  ];

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
      cardHeading: "Retail",
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
      cardHeading: "Trading & Distribution",
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
      cardHeading: "Healthcare",
      cardDesc:
        "Empower employees to focus on strategic tasks to deliver attentive experience to customers",
      isArrow: false,
      cardTextColor: "white",
    },
    {
      id: 5,
      cardBGImageUrl:
        "/industry-spotlight/cards-backgrounds/card-bg--professional-services.png",

      cardBGColor: "#EFE9FB",
      cardHeading: "Professional Services",
      cardDesc: "",
      isArrow: false,
      cardTextColor: "white",
    },
    {
      id: 5,
      cardBGImageUrl:
        "/industry-spotlight/cards-backgrounds/card-bg--project.png",

      cardBGColor: "#EFE9FB",
      cardHeading: "Project",
      cardDesc: "",
      isArrow: false,
      cardTextColor: "white",
    },
    // Add more cards as needed
  ];

  const CASE_STUDIES_DATA = [
    {
      imageURL:
        "/transformation/microsoft-practices/case-studies-section/bg--case-study.png",
      videoURL: "",
      title: "Case Studies",
      heading: "Elevating Customer Experience with Cloud",
      description:
        "World's top-notch businesses choose us for our excellent technical acumen and proven standards as we deliver high-performing multidisciplinary solutions across the spectrum of industries.",
      link: "/case-study-1",
      color: "#FFFFFF",
    },
    {
      imageURL: "path/to/image1.jpg",
      title: "",
      heading: "Non-government Association of Indian Industries",
      description:
        "99% uptime in saving man-days performance and 22% of capex saving after migrating on-premises ERP servers to the Azure cloud environment",
      link: "/case-study-1",
      color: "#000",
      bgCardColor: "#FFF",
    },

    {
      imageURL: "/path/to/image1.jpg",
      title: "",

      heading: "Coffee Brand Distributor in Egypt and Middle East",
      description:
        "Decreasing downtime and optimising system cost along with 100% data transparency through Single Cloud System",
      link: "/case-study-1",
      color: "#000",
      bgCardColor: "#FFF",
    },
    {
      imageURL:
        "/transformation/microsoft-practices/case-studies-section/bg--case-study.png",

      videoURL:
        "/transformation/microsoft-practices/case-studies-section/bg--video.mp4",
      title: "",
      heading: "Middle East-based Electrical Products Manufacturer",
      description:
        "Require Development from Scratch. Customisation of manufacturing reports. Require Development from Scratch. ",
      link: "/case-study-1",
      color: "#000",
      bgCardColor: "#FFF",
    },
    // Add more case studies here...
  ];

  const blogImageUrl = "/ai-ml/blog-bg.png";

  const DISTINCTIVE_DATA = [
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
    },
  ];

  const TESTIMONIAL_DATA = [
    {
      id: 1,
      cardHeading: "Power BI Solution on time with quality",
      cardDesc:
        "We sincerely appreciate GITL team for delivering Power BI solution on time and with great quality. We really like the data visualisations & dashboards provided and it makes it easier for us to get a good grip on our business performance indicators.",
    },
    {
      id: 2,
      cardHeading: "Power BI Solution on time with quality",
      cardDesc:
        "We sincerely appreciate GITL team for delivering Power BI solution on time and with great quality. We really like the data visualisations & dashboards provided and it makes it easier for us to get a good grip on our business performance indicators.",
    },
    {
      id: 3,
      cardHeading: "Power BI Solution on time with quality",
      cardDesc:
        "We sincerely appreciate GITL team for delivering Power BI solution on time and with great quality. We really like the data visualisations & dashboards provided and it makes it easier for us to get a good grip on our business performance indicators.",
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
        sectionHeading="Cutting-Edge Management Solutions"
        sectionDesc="We specialize in delivering cutting-edge Internet of Things (IIOT) solutions that are tailored to meet your unique needs."
        sectionTextColor='#000'
        sectionHeadingLayout="center"
        style={{ backgroundColor: '#E4E4E4' }}
      >

      </SectionWrapperNew>

      {/* benifits slider */}

      <BenefitSliderSection
        ID={'AIOfferings'}
        sectionBGColor={'#1D162B'}
        sectionHeading={'D365 Business Central Benefits'}
        sectionDesc={'Microsoft Dynamics 365 Business Central offers your business a strategic edge.'}
        sectionTextColor={'white'}
        cardData={benifitsCardsData}
      ></BenefitSliderSection>

      <IndustrySpotlight cardData={INDUSTRY_SPOTLIGHT} />

      <CaseStudiesSection
        casestudy={CASE_STUDIES_DATA}
        csLayout={"1"}
        bgColor={"#E4E4E4"}
      />

      <BlogSection
        ID={"blog"}
        blogImageUrl={blogImageUrl}
        Heading={"Unveilling Hyper automation  for supply chain efficiency"}
        Desc={
          "IIoT offers a multitude of benefits that enable businesses to gain competitive edge through innovation and succeed in digital era."
        }
        Color={"white"}
      ></BlogSection>

      <DistinctiveSection
        DistinctiveData={DISTINCTIVE_DATA}
        ID={"Distinctive"}
        Title={"The Distinctive Edge"}
        Desc={
          "Trust Godrej Infotech to leverage Intelligent technologies and lead business into competitive digital landscape."
        }
      ></DistinctiveSection>

      <ReviewSliderSection
        ID={"TESTIMONIALS"}
        Heading={"Delighted customers share their success experience"}
        Desc={""}
        Color="#ffffff"
        CardDataList={TESTIMONIAL_DATA}
        BGColor="#1D162B"
        SectionHeadingMaxWidth={"70%"}
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
