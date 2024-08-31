"use client";
import React from "react";

import EntIntro from "@/components/EntIntro";
import SectionNav from "@/components/SectionNav";
import OverviewSection from "@/sections/overview/OverviewSection";
import HighlightPromo from "@/sections/highlight-promo/HighlightPromo";
import BlogSection from "@/sections/blog/BlogSection";
import DistinctiveSection from "@/sections/distinctive/DistinctiveSection";
import TransformBusinessForm from "@/sections/transformBusinessFrom/TransformBusinessFromSection";
import ServicesCardSlider from "@/sections/services-cards-slider/ServicesCardSlider";
import CommonCardThreeSlider from "@/sections/commonCardThreeSlider/CommonCardThreeSlider";
import BenefitSliderSection from "@/sections/benefitSlider/BenefitSliderSection";
import IndustrySpotlight from "@/sections/industry-spotlight/industrySpotlight";
import HubExpertise from "@/sections/hub-of-expertise/HubExpertise";
import CaseStudiesSection from "@/sections/case-studies/CaseStudiesSection";
import ReviewSliderSection from "@/sections/reviewSlider/ReviewSliderSection";

const MicrosoftPractises = () => {
  const blogImageUrl = "/ai-ml/blog-bg.png";
  const highlightPromoBGURL =
    "/CloudStackServices/smiling-businessman-standing-with-arms-folded-isolated-white.png";
  const synergeticPartnerBGURL =
    "/CloudStackServices/background/bg--strategic-partnership.png";
  const awardsBGURL =
    "/transformation/microsoft-practices/backgrounds/bg--awards.png";

  const SERVICE_CARDS_DATA = [
    {
      title: "Azure",
      hoverTitle: "Azure",
      description:
        "Meticulous selection of frameworks, programming languages, libraries and tools followed by the development of innovative application with a clean code architecture.",
      content: "Additional content for Card 1",
      imageURL: "/techStack1.png",
    },
    {
      title: "Microsoft Dynamics",
      hoverTitle: "Microsoft Dynamics",
      description:
        "Meticulous selection of frameworks, programming languages, libraries and tools followed by the development of innovative application with a clean code architecture.",
      content: "Additional content for Card 2",
      imageURL: "/techStack1.png",
    },
    {
      title: "M365",
      hoverTitle: "M365",
      description:
        "Meticulous selection of frameworks, programming languages, libraries and tools followed by the development of innovative application with a clean code architecture.",
      content: "Additional content for Card 3",
      imageURL: "/techStack1.png",
    },
    {
      title: "Technologies",
      hoverTitle: "Technologies",
      description:
        "Meticulous selection of frameworks, programming languages, libraries and tools followed by the development of innovative application with a clean code architecture.",
      content: "Additional content for Card 4",
      imageURL: "/techStack1.png",
    },
    {
      title: "Microsoft Fabric",
      hoverTitle: "Microsoft Fabric",
      description:
        "Meticulous selection of frameworks, programming languages, libraries and tools followed by the development of innovative application with a clean code architecture.",
      content: "Additional content for Card 5",
      imageURL: "/techStack1.png",
    },
    {
      title: "Power Platforms",
      hoverTitle: "Power Platforms",
      description:
        "Meticulous selection of frameworks, programming languages, libraries and tools followed by the development of innovative application with a clean code architecture.",
      content: "Additional content for Card 5",
      imageURL: "/techStack1.png",
    },
    // Add more cards here...
  ];
  const SOLUTION_DATA = [
    {
      id: 1,
      cardBGColor: "#F5B1DC",
      cardHeading: "Dealer <br/> Management",
      cardDesc:
        "Experience streamlined operations with Infor WMS's 3D visual warehouse, providing real-time insights into ",
      isArrow: true,
      cardTextColor: "black",
      cardTopImageUrl: "https://flowbite.com/docs/images/blog/image-1.jpg",
    },
    {
      id: 2,
      cardBGColor: "#FCE6F4",
      cardHeading: "Lease Process<br/>Managment",
      cardDesc:
        "Enhance efficiency with RF receiving, voice-enabled pick/pack operations, and dynamic put-away options.",
      isArrow: true,
      cardTextColor: "black",
      cardTopImageUrl: "https://flowbite.com/docs/images/blog/image-4.jpg",
    },
    {
      id: 3,
      cardBGColor: "#CDBAF3",
      cardHeading: "Gate Pass<br/>Management",
      cardDesc:
        "Require Development from Scratch. Customisation of manufacturing reports",
      isArrow: true,
      cardTextColor: "black",
      cardTopImageUrl: "https://flowbite.com/docs/images/blog/image-7.jpg",
    },
    {
      id: 4,
      cardBGColor: "#E4E4E4",
      cardHeading: "Strengthen Potential",
      cardDesc:
        "Empower employees to focus on strategic tasks to deliver attentive experience to customers",
      isArrow: true,
      cardTextColor: "black",
      cardTopImageUrl: "https://flowbite.com/docs/images/blog/image-1.jpg",
    },
    {
      id: 5,
      cardBGImageUrl: "/rpa/ArtboardBg.png",
      cardBGColor: "#EFE9FB",
      cardHeading: "Enhance Flexibility",
      cardDesc:
        "Adapt to changing business needs without hiring and training new staff, saving time and expense",
      isArrow: true,
      cardTextColor: "black",
      cardTopImageUrl: "https://flowbite.com/docs/images/blog/image-2.jpg",
    },
    {
      id: 5,
      cardBGImageUrl: "/rpa/ArtboardBg.png",
      cardBGColor: "#EFE9FB",
      cardHeading: "Reduce AHT (Average Handling Time)",
      cardDesc:
        "Enhance customer service quality, minimize response time and improve operational efficiency",
      isArrow: false,
      cardTextColor: "black",
      cardTopImageUrl: "https://flowbite.com/docs/images/blog/image-3.jpg",
    },
  ];

  const BENEFITS_CARDS_DATA = [
    {
      id: "1",
      text: "A high degree of accuracy and consistency in business operations",
    },
    {
      id: "2",
      text: "Informed decision-making to extract valuable insights and identify patterns, correlation, and trends",
    },
    {
      id: "3",
      text: "Real-time problem-solving enable minimum disruptions and ensures uninterrupted business operations",
    },
    {
      id: "4",
      text: "Automation of repetitive tasks, resulting in increased operational efficiency and productivity.",
    },
    {
      id: "5",
      text: "Reduce equipment downtime and increase operational efficiency with real-time monitoring and predictive maintenance",
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
  const HUBEXPERTISE_COUNTER_DATA = [
    {
      start: 100,
      end: 250,
      description: "Micorsoft Dynamics Projects Delivered",
    },
    {
      start: 100,
      end: 150,
      description: "Projects Migrated to Microsoft",
    },
    {
      start: 100,
      end: 1000,
      description: "Management of Microsoft License",
    },

    {
      start: 10,
      end: 20,
      description: "years of experience in Microsoft Platforms",
    },

    /**
     * ! To set static title
     * TODO:    {
      staticTitle: "24*7",
      description: "Implementation Sites",
    }
    */

    // Add more counters as needed
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
      {/* Start--HeroBanner-Section========================================================= */}
      <EntIntro
        title="Your Ace Microsoft Partner for
Successful Business Outcomes
"
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, quae."
        cta="Let's Connect"
        width="60%"
        video="https://gitl-usa.s3.us-west-1.amazonaws.com/banner1.mp4"
      />

      {/* End--HeroBanner-Section=========================================================== */}

      {/* Start--Section-Navigation-Section============================================================== */}
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

      {/* End--Section-Navigation-Section================================================================ */}

      {/* Start--Overview-Section============================================================== */}
      <OverviewSection
        Text={
          "Microsoft Solutions such as cloud, workplace & business applications infused with our capability, enable businesses to adapt, innovate and transform operations for excellence and better customer satisfaction. "
        }
      />
      {/* End--Overview-Section================================================================ */}

      {/* Start--Highlight-Customer-Centeric-Section============================================================== */}
      <HighlightPromo
        setImageURL={highlightPromoBGURL}
        setHeading="Seamless Implementation to Customer Centric Support"
        setDesc="Employing proven methodologies such as Waterfall, Agile and Rapid, we tailor our implementation strategy to meet the distinct requirements of each project. The goal is to deliver optimal system performance."
        setColor="#1D162B"
        setPadding={false}
        setHeadingContainerWidthFull={"w-full"}
      />
      {/* End--Highlight-Customer-Centeric-Section================================================================ */}

      {/* Start--Solution-Section============================================================== */}
      <ServicesCardSlider
        cardData={SERVICE_CARDS_DATA}
        heading={"Delivering Full Stack Microsoft Solutions"}
        desc={
          "We bring together the power of Microsoft technologies delivering cohesive ecosystems, enabling you to achieve more."
        }
        color={"#1D162B"}
      />

      {/* End--Solution-Section================================================================ */}

      {/* Start--Microsoft-Solution-Section============================================================== */}
      <CommonCardThreeSlider
        ID={"AIOfferings"}
        sectionImageUrl={""}
        sectionBGColor={"#1D162B"}
        sectionHeading={"Experience efficiency with Microsoft Solutions"}
        sectionDesc={
          "We design, develop and implement hundreds of custom solutions and software applications using Microsoft technologies across Azure, Microsoft 365, Dynamics 365 and Power Platform."
        }
        sectionTextColor={"#FFF"}
        sectionHeaderMaxWidth={"40%"}
        x
        cardData={SOLUTION_DATA}
      ></CommonCardThreeSlider>
      {/* End--Microsoft-Solution-Section================================================================ */}

      {/* Start--Synergetic Partnerships-Section============================================================== */}
      <HighlightPromo
        setHeading="Synergetic Partnership"
        setDesc="Our expansive worldwide network of market innovators enables us to embrace breakthrough technologies and confront business roadblocks effectively."
        setColor="#1D162B"
        setImageBGURL={synergeticPartnerBGURL}
        setLogoImages="true"
        setPadding={false}
      />
      {/* End--Synergetic Partnerships-Section================================================================ */}

      {/* Start--Benefits-Section============================================================== */}
      <BenefitSliderSection
        ID={"BENEFIT"}
        BGColor={"#1D162B"}
        Heading={"Microsoft Promise for Your Business"}
        Desc={
          "Driving transformational changes, Microsoft Dynamics minimizes operational cost and increases overall efficiency of employees and customers."
        }
        Color={"white"}
        CardDataList={BENEFITS_CARDS_DATA}
        SectionHeadingMaxWidth={"100%"}
      />
      {/* End--Benefits-Section================================================================ */}

      {/* Start--Awards-Section============================================================== */}
      <HighlightPromo
        blurEffect="blurON"
        setHeading="We are Trained and Accredited in Cloud Services"
        setDesc="We undergo demanding assessment and authorisation to guarantee that our expertise and practices fulfil highest standards of excellence."
        setColor="#1D162B"
        setImageBGURL={awardsBGURL}
        setLogoImages=""
        setPadding={true}
        setMSLogoURL=""
        setHeadingContainerWidthFull={"w-full"}
      />
      {/* End--Awards-Section================================================================ */}

      {/* Start--Industry-Spotlight-Section============================================================== */}
      <IndustrySpotlight cardData={INDUSTRY_SPOTLIGHT} />
      {/* End--Industry-Spotlight-Section================================================================ */}

      {/* Start--Hub-Of-Expertise-Section============================================================== */}
      <HubExpertise
        setHeading="Microsoft Excellence with Godrej Infotech"
        setDesc="We are here to build an edge and bring technology brilliance with the finest in the industry. Driving the innovation path, we develop better results for businesses across the globe.
"
        setColor="#ffffff"
        counters={HUBEXPERTISE_COUNTER_DATA}
        columnNo={2} //Define how many columns you want to display
      />
      {/* End--Hub-Of-Expertise-Section================================================================ */}

      {/* Start--Case-Study-Section============================================================== */}
      <CaseStudiesSection
        casestudy={CASE_STUDIES_DATA}
        csLayout={"1"}
        bgColor={"#E4E4E4"}
      />
      {/* End--Case-Study-Section================================================================ */}

      {/* Start--Blogs-Section============================================================== */}
      <BlogSection
        ID={"blog"}
        blogImageUrl={blogImageUrl}
        Heading={"Unveilling Hyper automation  for supply chain efficiency"}
        Desc={
          "IIoT offers a multitude of benefits that enable businesses to gain competitive edge through innovation and succeed in digital era."
        }
        Color={"white"}
      ></BlogSection>
      {/* End--Blogs-Section================================================================ */}

      {/* Start--Distinctive-Section============================================================== */}
      <DistinctiveSection
        DistinctiveData={DISTINCTIVE_DATA}
        ID={"Distinctive"}
        Title={"The Distinctive Edge"}
        Desc={
          "Trust Godrej Infotech to leverage Intelligent technologies and lead business into competitive digital landscape."
        }
      ></DistinctiveSection>
      {/* End--Distinctive-Section================================================================ */}
      {/* Start--Testimonial-Section============================================================== */}
      <ReviewSliderSection
        ID={"TESTIMONIALS"}
        Heading={"Delighted customers share their success experience"}
        Desc={""}
        Color="#ffffff"
        CardDataList={TESTIMONIAL_DATA}
        BGColor="#1D162B"
        SectionHeadingMaxWidth={"70%"}
      ></ReviewSliderSection>
      {/* End--Testimonial-Section================================================================ */}

      {/* Start--Transform-Business-Form-Section============================================================== */}
      <TransformBusinessForm
        Title={"Transform your Business with us"}
        Desc={
          "Let us discuss how intelligent technologies can help you with rapid growth."
        }
      ></TransformBusinessForm>
      {/* End--Transform-Business-Form-Section================================================================ */}
    </>
  );
};

export default MicrosoftPractises;
