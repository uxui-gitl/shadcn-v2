"use client";

import EntIntro from "@/components/EntIntro";
import SectionNav from "@/components/SectionNav";
import OverviewSection from "@/sections/overview/OverviewSection";
import ChallengeSection from "@/sections/challenge/challengeSection";
import SectionWithSlider from "@/sections/sectionWithSlider/SectionWithSlider";
import CommonCardThreeSlider from "@/sections/commonCardThreeSlider/CommonCardThreeSlider";
import BenefitSliderSection from "@/sections/benefitSlider/BenefitSliderSection";
import CaseStudiesSection from "@/sections/case-studies/CaseStudiesSection";
import BlogSection from "@/sections/blog/BlogSection";
import TransformBusinessForm from "@/sections/transformBusinessFrom/TransformBusinessFromSection";
import ReviewSliderSection from "@/sections/reviewSlider/ReviewSliderSection";

const page = () => {
  const blogImageUrl = "/ai-ml/blog-bg.png";
  const imgBGURL_Challenges = "/infor/inforchallangeleftimage.svg";
  const TESTIMONIAL_DATA = [
    {
      id: 1,
      cardHeading: "Expert Infor Cloud Services",
      cardDesc:
        "Thanks to GITL for the excellent work for cloud-enabling our Infor environment. The services provided were of high quality and we recommend Godrej Infotech as a professional cloud services provider.",
      designation: "IT Manager",
      companyName: `India’s Premier hi-tech Engineering Solutions Provider`,
    },
    {
      id: 2,
      cardHeading: "Timely and Reliable Infor Support",
      cardDesc:
        "We have received timely inputs and guidance across the modules that have been implemented on the system.",
      designation: "Manager Sales and Support",
      companyName: "Manufacturer of Antenna System Technology",
    },
  ];
  const CHALLENGES_LIST_DATA = [
    {
      id: 1,
      title:
        "Meet tight turnaround times despite complex inventory and logistics",
      icon: "/upgradeCloud/icons/ico--target.svg",
    },
    {
      id: 2,
      title: "Reduce manual errors and increase labour productivity",
      icon: "/upgradeCloud/icons/ico--target.svg",
    },
    {
      id: 3,
      title: "Managing inventory obsolescence and waste",
      icon: "/upgradeCloud/icons/ico--target.svg",
    },
    {
      id: 4,
      title: "Adopting to constantly shifting customer requirements",
      icon: "/upgradeCloud/icons/ico--target.svg",
    },
    {
      id: 5,
      title: "Supply chain disruptions and delays",
      icon: "/upgradeCloud/icons/ico--target.svg",
    },
  ];

  const BENEFITS_CARDS_DATA = [
    {
      id: "1",
      icon: "",
      cardDesc: "Reduce fulfilment costs and minimize warehouse space needs",
    },
    {
      id: "2",
      icon: "",
      cardDesc: "Enhance labour productivity and expedite order fulfilment",
    },
    { id: "3", icon: "", cardDesc: "Achieve inventory and shipping accuracy" },
    {
      id: "4",
      icon: "",
      cardDesc: "Support B2B and D2C processing and omnichannel fulfilment",
    },
    {
      id: "5",
      icon: "",
      cardDesc: "Maintain regulatory compliance with audit trails",
    },
    {
      id: "6",
      icon: "",
      cardDesc: "Make data-driven decisions with integrated analytics",
    },
    {
      id: "7",
      icon: "",
      cardDesc: "Deploy cloud-based solutions with seamless system integration",
    },
    { id: "8", icon: "", cardDesc: "Global accessibility with 14-language UI" },
  ];

  const CASE_STUDIES_DATA = [
    {
      imageURL: "",
      videoURL: "/CloudStackServices/case-studies/bg--businessman-industry.mp4",
      title: "",
      heading: "Case study",
      description:
        "Discover how Infor WMS helped our clients to achieve desirable results and gain higher efficiency.",
      link: "/case-study-1",
      color: "#FFFFFF",
      bgCardColor: "#2B1624",
    },
    {
      imageURL: "/iiot/bg--bespoke--iiot-soltions.png",
      title: "",
      heading: "Accelerated Order Processing",
      description:
        "Multinational company specializing in international express courier services automates operations and streamlines order picking process with Infor WMS",
      link: "/case-study-1",
      color: "#2B1624",
      bgCardColor: "#fff",
    },
    {
      imageURL: "",
      title: "Case Studies",
      heading: "30% Reduction in Manual Efforts",
      description: `Auto Sector's Leading Electrical Component Manufacturer Cuts Manual Effort by 30% with Infor LN Implementation`,
      link: "",
      color: "#2B1624",
      bgCardColor: "#fff",
    },

    {
      imageURL: "",
      title: "Case Studies",
      heading: "India's Leading Construction Organization",
      description:
        "Implements IoT & ML Solution for Real Time Cement Inventory Calibration with 98% accuracy",
      link: "",
      color: "#2B1624",
      bgCardColor: "#FCE6F4",
    },

    {
      imageURL: "",
      title: "Case Studies",
      heading: "2 India's Leading Construction Organization",
      description:
        "Implements IoT & ML Solution for Real Time Cement Inventory Calibration with 98% accuracy",
      link: "",
      color: "#2B1624",
      bgCardColor: "#FCE6F4",
    },

    // Add more case studies here...
  ];

  const UPGRADE_NOW_DATA = [
    {
      id: 1,
      BGImageUrl: "",
      BGColor: "#fff",
      CardBGColor: "transparent",
      CardTextColor: "#000",
      CardTitle: "",
      CardIconUrl: "/upgradeCloud/icons/ico--target.svg",
      CardHeading: "Retail",
      CardDesc: `
        <div class="">
    <div class="flex py-2 border-b border-neutral-light-grey ">
        <p class="text-paragraph-01 leading-paragraph-01 mr-4 text-primary-900 font-medium">Dynamic slotting to meet the changing product needs</p>
    </div>
   <div class="flex py-2 border-b border-neutral-light-grey ">
       <p class="text-paragraph-01 leading-paragraph-01 mr-4  text-primary-900 font-medium">Interactive Web & Mobile Dashboards</p>
    </div>
   <div class="flex py-2 border-b border-neutral-light-grey ">
       <p class="text-paragraph-01 leading-paragraph-01 mr-4  text-primary-900 font-medium">Omnichannel combines in-store, depot and warehouse channels</p>
    </div>
</div>
        `,
      isArrow: "false",
      link: [],
    },

    {
      id: 2,
      BGImageUrl: "",
      BGColor: "#fff",
      CardBGColor: "transparent",
      CardTextColor: "#000",
      CardTitle: "",
      CardIconUrl: "/upgradeCloud/icons/ico--target.svg",
      CardHeading: "3 PL Logistics",
      CardDesc: `
        <div class="">
    <div class="flex py-2 border-b border-neutral-light-grey ">
       <p class="text-paragraph-01 leading-paragraph-01 mr-4 text-primary-900 font-medium">Tailored 3PL Dashboard for Intelligent Reporting </p>
    </div>
    <div class="flex py-2 border-b border-neutral-light-grey ">
       <p class="text-paragraph-01 leading-paragraph-01 mr-4 text-primary-900 font-medium">Advanced Inventory, Space and Labor Optimization</p>
    </div>
    <div class="flex py-2 border-b border-neutral-light-grey ">
       <p class="text-paragraph-01 leading-paragraph-01 mr-4 text-primary-900 font-medium">Multi-Warehouse, Multi-Owner Support </p>
    </div>
</div>
        `,
      isArrow: "false",
      link: [],
    },
    {
      id: 3,
      BGImageUrl: "",
      BGColor: "#fff",
      CardBGColor: "transparent",
      CardTextColor: "#000",
      CardTitle: "",
      CardIconUrl: "/upgradeCloud/icons/ico--target.svg",
      CardHeading: "Trading and Distribution",
      CardDesc: `
        <div class="">
    <div class="flex py-2 border-b border-neutral-light-grey ">
       <p class="text-paragraph-01 leading-paragraph-01 mr-4 text-primary-900 font-medium">Warehouse optimisation</p>
    </div>
    <div class="flex py-2 border-b border-neutral-light-grey ">
       <p class="text-paragraph-01 leading-paragraph-01 mr-4 text-primary-900 font-medium">Order fulfilment</p>
    </div>
    <div class="flex py-2 border-b border-neutral-light-grey ">
       <p class="text-paragraph-01 leading-paragraph-01 mr-4 text-primary-900 font-medium">Inventory management</p>
    </div>
    <div class="flex py-2 border-b border-neutral-light-grey ">
       <p class="text-paragraph-01 leading-paragraph-01 mr-4 text-primary-900 font-medium">Minimize stockouts</p>
    </div>
</div>
        `,
      isArrow: "false",
      link: [],
    },
  ];

  const RPASolution = [
    {
      id: 1,
      cardBGColor: "#F5B1DC",
      cardHeading: "3D <br/>Visualization",
      cardDesc: `Infor WMS's 3D visual warehouse provides real-time insights into bottlenecks and asset utilization.`,
      isArrow: true,
      cardTextColor: "black",
      cardTopImageUrl: "https://flowbite.com/docs/images/blog/image-1.jpg",
    },
    {
      id: 2,
      cardBGColor: "#FCE6F4",
      cardHeading: "Advanced Warehousing Processes",
      cardDesc:
        "Enhance efficiency with Radio Frequency receiving, voice-enabled pick/pack operations, and dynamic put-away options.",
      isArrow: true,
      cardTextColor: "black",
      cardTopImageUrl: "https://flowbite.com/docs/images/blog/image-4.jpg",
    },
    {
      id: 3,
      cardBGColor: "#CDBAF3",
      cardHeading: "3PL <br/>Billing",
      cardDesc:
        "Enable precise customer billing and invoicing with multi-warehouse and owner management, tailored workflows, and full traceability.",
      isArrow: true,
      cardTextColor: "black",
      cardTopImageUrl: "https://flowbite.com/docs/images/blog/image-7.jpg",
    },
    {
      id: 4,
      cardBGColor: "#E4E4E4",
      cardHeading: "Labor Management & Configurability",
      cardDesc:
        "Measure performance, identify bottlenecks and balance resources with engineered labor standards to optimize distribution center operations",
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

  return (
    <>
      <EntIntro
        title="Streamline warehouse operations with Infor WMS's"
        desc="We help you to achieve faster inventory turns and take control of your warehouse operations."
        cta="Let's Connect"
        width="60%"
        video="https://gitl-usa.s3.us-west-1.amazonaws.com/banner1.mp4"
      />

      <OverviewSection
        Text={`Transform warehouse operations with Infor WMS, integrating labor tools, 3D analytics and end-to-end supply chain visibility.`}
      />

      <ChallengeSection
        setHeading="Warehouse Operational Challenges"
        setColor="white"
        bgColor={"bg-primary-500"}
        setImageBGURL={imgBGURL_Challenges}
        setChallengesList={CHALLENGES_LIST_DATA}
        setDesc={
          "Warehouses face growing challenges to meet customer demands for speed, availability, and affordability. "
        }
      />

      <CommonCardThreeSlider
        ID={""}
        sectionImageUrl={""}
        sectionBGColor={"bg-primary-900"}
        sectionHeading={"Infor WMS Key Highlights"}
        sectionDesc={
          "Infor WMS optimizes warehouse operations with goods tracking and management, from initial receipt to final dispatch."
        }
        sectionTextColor={"text-neutral-white"}
        cardData={RPASolution}
      />

      <SectionWithSlider
        ID={"UPGRADE_NOW_DATA"}
        sectionHeading={"Infor WMS Accelerators"}
        sectionDesc={
          "Enhancing the features of business applications, our specialized solutions intend to add value to business with handy support, streamlined processes and intense industry expertise."
        }
        sectionTextColor="text-primary-900"
        cardData={UPGRADE_NOW_DATA}
        sectionBGColor="white"
        setHeadingLayout="horizontal"
      />

      <BenefitSliderSection
        ID={"BENEFIT"}
        sectionBGColor={"bg-primary-900"}
        sectionHeading={"Infor WMS Benefits"}
        sectionDesc={
          "Discover a more efficient, accurate and customer-centric supply chain with Infor WMS."
        }
        sectionTextColor={"text-neutral-white"}
        cardData={BENEFITS_CARDS_DATA}
        sectionHeadingMaxWidth={"100%"}
      />

      <CaseStudiesSection
        casestudy={CASE_STUDIES_DATA}
        csLayout={"2"}
        bgColor="bg-secondary-10"
      />

      <BlogSection
        ID={"blog"}
        blogImageUrl={blogImageUrl}
        Heading={
          "How does Infor WMS Enhances Visibility and Control in Warehousing?"
        }
        Desc={
          "In today's complex supply chain ecosystem, the efficient management of warehouses is crucial. Infor Warehouse Management System (WMS) emerges as a sophisticated solution that optimizes inventory control, order processing, and overall warehouse efficiency. It acts as the linchpin, harmonizing operations and providing a comprehensive platform for effective warehouse management."
        }
        maxWidth={"50%"}
        Color={"text-neutral-white"}
      ></BlogSection>

      <ReviewSliderSection
        ID={"TESTIMONIALS"}
        Heading={"Delighted Customers share their Successful Experiences"}
        Desc={""}
        Color="text-neutral-white"
        CardDataList={TESTIMONIAL_DATA}
        BGColor="bg-primary-900"
        SectionHeadingMaxWidth={"70%"}
      ></ReviewSliderSection>

      <TransformBusinessForm
        Title={"Transform your Business with us"}
        Desc={"Let us discuss how Infor WMS can help you with rapid growth."}
      ></TransformBusinessForm>
    </>
  );
};

export default page;
