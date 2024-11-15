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
import CommonCardTwoSlider from "@/sections/commonCardTwoSlider/CommonCardTwoSlider";
import AddedSolutionSection from "@/sections/microsoft-services/fno-sections/added-solution-section/addedSolutionSection";

const FNO = () => {
  const blogImageUrl = "/fnO/blog-bg.webp";
  const highlightPromoBGURL =
    "/CloudStackServices/smiling-businessman-standing-with-arms-folded-isolated-white.png";
  const synergeticPartnerBGURL =
    "/CloudStackServices/background/bg--strategic-partnership.png";
  const awardsBGURL =
    "/transformation/microsoft-practices/backgrounds/bg--awards.png";

  
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
      icon:'/fnO/benefits/enhanceEfficiency.svg',
      cardDesc: "Enhance efficiency with Microsoft 365 integration",
    },
    {
      id: "2",
      icon:'/fnO/benefits/boostPerformance.svg',
      cardDesc: "Boost performance through data connectivity and task automation",
    },
    {
      id: "3",
      icon:'/fnO/benefits/gain.svg',
      cardDesc: "Gain real-time insights, reporting, and AI-driven agility for growth",
    },
    {
      id: "4",
      icon:'/fnO/benefits/achieve.svg',
      cardDesc: "Achieve on-time, on-budget project delivery with integrated teams",
    },
    {
      id: "5",
      icon:'/fnO/benefits/transform.svg',
      cardDesc: "Transform your workforce, meet demands, and control costs",
    },
     {
      id: "6",
      icon:'/fnO/benefits/ensureTransparency.svg',
      cardDesc: "Ensure transparency across processes, enabling informed decisions",
    },
     {
      id: "7",
      icon:'/fnO/benefits/accessInternational.svg',
      cardDesc: "Access international functionality for global uniformity",
    },
     {
      id: "8",
      icon:'/fnO/benefits/supplyChain.svg',
      cardDesc: "Unify supply chain operations for financial visibility, risk control and innovation.",
    },
     {
      id: "9",
      icon:'/fnO/benefits/builtInSecurity.svg',
      cardDesc: "Built-in security safeguards data with Azure integration",
    },
     {
      id: "10",
      icon:'/fnO/benefits/substantial.svg',
      cardDesc: "Substantial return on investment (ROI) through enhanced efficiency and automation",
    },
        {
      id: "11",
      icon:'/fnO/benefits/comprehensiveReporting.svg',
      cardDesc: "With comprehensive reporting and analytics capabilities, companies can plan more effectively and respond to customer demands with agility",
    },
  ];
  const INDUSTRY_SPOTLIGHT = [
    {
      id: 1,
      cardBGImageUrl: "/industry-spotlight/cards-backgrounds/card-bg--manufacturing.png",
      cardBGColor: "#7F4EE1",
      cardHeading: "Manufacturing",
      cardDesc: "",
      isArrow: true,
      cardTextColor: "white",
      additionalData: `
      <ul class="space-y-4 text-gray-500 list-disc list-inside dark:text-gray-400">
    <li>
        Manufacturing
        <ol class="ps-5 mt-2 space-y-1 list-decimal list-inside">
            <li>Full process coverage for discrete and process manufacturing </li>
            <li>Real-time planning and optimization</li>
            <li>IoT and mixed reality roadmap for a connected factory experience</li>
        </ol>
    </li>
</ul>`
},
    {
      id: 2,
      cardBGImageUrl: "/industry-spotlight/cards-backgrounds/card-bg--retail.png",

      cardBGColor: "#7F4EE1",
      cardHeading: "Trading & Distribution",
      cardDesc:
        "",
      isArrow: true,
      cardTextColor: "white",
      additionalData: `
      <ul class="space-y-4 text-gray-500 list-disc list-inside dark:text-gray-400">
    <li>
        Trading & Distribution
        <ol class="ps-5 mt-2 space-y-1 list-decimal list-inside">
            <li>Comprehensive process coverage for trading & distribution</li>
            <li>Material requirement planning</li>
            <li>Machine learning-driven demand forecasting </li>
        </ol>
    </li>
</ul>`
    },
    {
      id: 3,
      cardBGImageUrl: "/industry-spotlight/cards-backgrounds/card-bg--trading-and-distribution.png",

      cardBGColor: "#7F4EE1",
      cardHeading: "Professional services",
      cardDesc:
        "Manage contract workflows, forms and compliance with consistency and regulatory adherence",
      isArrow: true,
      cardTextColor: "white",
      additionalData: `
      <ul class="space-y-4 text-gray-500 list-disc list-inside dark:text-gray-400">
    <li>
        Professional services
        <ol class="ps-5 mt-2 space-y-1 list-decimal list-inside">
            <li>Financial precision for budgeting, invoicing and expense management</li>
            <li>Project-centric approach for professional services firms</li>
        </ol>
    </li>
</ul>`
    },
    {
      id: 4,
      cardBGImageUrl: "/industry-spotlight/cards-backgrounds/card-bg--trading-and-distribution.png",

      cardBGColor: "#7F4EE1",
      cardHeading: "Projects",
      cardDesc:
        "Manage contract workflows, forms and compliance with consistency and regulatory adherence",
      isArrow: true,
      cardTextColor: "white",
      additionalData: `
      <ul class="space-y-4 text-gray-500 list-disc list-inside dark:text-gray-400">
    <li>
        Projects
        <ol class="ps-5 mt-2 space-y-1 list-decimal list-inside">
            <li>Financial transparency and control for budgeting and cost management </li>
            <li>Real-time project insights for better decision-making and proactive issue resolution</li>
            <li>Precise project management and resource optimization</li>
        </ol>
    </li>
</ul>`
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
      heading: "Dynamics 365 F&O Project Highlights",
      description:
        "",
      link: "/case-study-1",
      color: "#FFFFFF",
    },
    {
      imageURL: "path/to/image1.jpg",
      title: "",
      heading: "Upgrade to D365 F&O on Cloud",
      description:
        "Indian Wildlife Nature Conservation Organization successfully upgrade to D365 F&O",
      link: "/case-study-1",
      color: "#000",
      bgCardColor: "#fdfdfd",
    },

    {
      imageURL: "/path/to/image1.jpg",
      title: "",

      heading: "Implementation of D365 F&O, CRM and Power BI",
      description:
        "KSA's Leading Distributor of Electrical Components implements Dynamics 365 F&O with Microsoft CRM on Cloud for streamlined item creation process and increased quality compliance ",
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
      heading: "D365 F&O Implementation",
      description:
        "Achieved significant cost savings along with operations digitalization through D365 F&O Cloud Solution for Leading Distributor of Fruits & Vegetables in Philippines",
      link: "/case-study-1",
      color: "#000",
      bgCardColor: "#FFF",
    },
    // Add more case studies here...
  ];
  const DISTINCTIVE_DATA = [
    {
      _id: 1,
      desc: "Our Microsoft Dynamics 365 certified experts have executed projects across diverse industries across the globe. ",
      icon: "/fnO/distinctiveEdge/microsoftDynamics.svg",
    },
    {
      _id: 2,
      desc: "We hold a prestigious Gold Partnership with Microsoft and operate global delivery models.",
      icon: "/fnO/distinctiveEdge/goldPartnership.svg",
    },
    {
      _id: 3,
      desc: "Our toolkit includes tested, proven and reusable tools and frameworks.",
      icon: "/fnO/distinctiveEdge/toolkit.svg",
    },
    {
      _id: 4,
      desc: "Predefined templates for onsite and offshore cost-effective models",
      icon: "/fnO/distinctiveEdge/predefinedTemplates.svg",
    },
    {
      _id: 5,
      desc: "Extensive experience in understanding industry-specific challenges and opportunities. ",
      icon: "/fnO/distinctiveEdge/extensiveExperience.svg",
    },
  ];
  const TESTIMONIAL_DATA = [
    {
      id: 1,
      cardHeading: "Discover how we have helped our customers to realize tangible outcomes aligned with their business goals.",
      cardDesc:
        "We are delighted to say that D365 F&O has solved our earlier performance issues and we now have an IT infrastructure that is streamlined, systematic, and secure. We would like to take this opportunity to express our gratitude to the entire team of Godrej Infotech that has worked along with our team to make this go live successful.",
      designation:'Distributor of a popular coffee brand in Egypt and Saudi Arabia',  
    },
    {
      id: 2,
      cardHeading: "",
      cardDesc:
        "Godrej Infotech team's dedication and commitment with excellent domain knowledge of our business was the key factor to our success and we cannot thank them enough for their valuable contribution. We have benefited tremendously from working with Godrej Infotech and hope to have the opportunity to continue a long-term relationship with them.",
      designation:'General Manager',
      companyName:'Distributor of Fruits & Vegetables in the Philippines',
      },
    
  ];
  const SOLUTIONS_CARDS_DATA = [
    {
      id: 1,
      cardBGImageUrl: '/fnO/keyHighlights/assetManagement.webp',
      cardBGColor: '#7F4EE1',
      cardHeading: 'Asset Management',
      cardDesc: 'Effectively monitor your business assets to maintain their optimal condition, ensuring uniform business operations.',
      isArrow: false,
      cardTextColor: 'white',
      cardType: 1,
    },
    {

      id: 2,
      cardBGImageUrl: '/fnO/keyHighlights/financialManagement.webp',
      cardBGColor: '#7F4EE1',
      cardHeading: 'Financial Management',
      cardDesc: 'Handle financial and accounting matters with precision, promoting financial stability.',
      isArrow: false,
      cardTextColor: 'white',
      cardType: 2,
    },
    {

      id: 3,
      cardBGImageUrl: '/fnO/keyHighlights/inventory.webp',
      cardBGColor: '#9F0165',
      cardHeading: 'Inventory and Warehouse Management',
      cardDesc: 'Assure that products are precisely where they need to be, precisely when they need to be there, enhancing business efficiency.',
      isArrow: false,
      cardTextColor: 'white',
      cardType: 1,
    },
    {

      id: 4,
      cardBGImageUrl: '/fnO/keyHighlights/budgeting.webp',
      cardBGColor: '#EFE9FB',
      cardHeading: 'Budgeting',
      cardDesc: 'Skillfully plan and manage organization budgeting and allocate resources accordingly to achieve financial objectives.',
      isArrow: false,
      cardTextColor: 'white',
      cardType: 2,
    },
    {

      id: 5,
      cardBGImageUrl: '/fnO/keyHighlights/retailCommerce.webp',
      cardBGColor: '#7F4EE1',
      cardHeading: 'Retail Commerce',
      cardDesc: 'Craft a seamless shopping experience both online and in-store, ensuring hassle-free shopping journey.',
      isArrow: false,
      cardTextColor: 'white',
      cardType: 1,
    },
    {
      id: 6,
      cardBGImageUrl: '/fnO/keyHighlights/vendor.webp',
      cardBGColor: '#7F4EE1',
      cardHeading: 'Vendor Collaboration)',
      cardDesc: 'Cultivate robust relationships with both customers and vendors enhancing mutual success.',
      isArrow: false,
      cardTextColor: 'white',
      cardType: 2,
    },
     {
      id: 7,
      cardBGImageUrl: '/fnO/keyHighlights/manufacturing.webp',
      cardBGColor: '#9F0165',
      cardHeading: 'Manufacturing',
      cardDesc: 'Optimize your manufacturing processes, streamlining production and upholding product quality to meet or exceed market standards.',
      isArrow: false,
      cardTextColor: 'white',
      cardType: 1,
    },
     {

      id: 8,
      cardBGImageUrl: '/fnO/keyHighlights/projectManagement.webp',
      cardBGColor: '#EFE9FB',
      cardHeading: 'Project Management and Accounting',
      cardDesc: 'Efficiently manage projects and maintain immaculate financial records, ensuring compliance with accounting standards.',
      isArrow: false,
      cardTextColor: 'white',
      cardType: 2,
    },
     {

      id: 9,
      cardBGImageUrl: '/fnO/keyHighlights/procurement.webp',
      cardBGColor: '#7F4EE1',
      cardHeading: 'Procurement and Sourcing',
      cardDesc: 'Exercise comprehensive control on procurement and sourcing process, facilitating the smooth flow of products from suppliers to customers, enhancing operational efficiency. ',
      isArrow: false,
      cardTextColor: 'white',
      cardType: 1,
    },
    {
      id: 10,
      cardBGImageUrl: '/fnO/keyHighlights/salesMarketing.webp',
      cardBGColor: '#9F0165',
      cardHeading: 'Sales and Marketing',
      cardDesc: 'From lead generation to campaign tracking and customer engagement, this functionality is designed to optimize every stage of the sales funnel.',
      isArrow: false,
      cardTextColor: 'white',
      cardType: 2,
    },
  ]

  return (
    <>
      {/* Start--HeroBanner-Section========================================================= */}
      <EntIntro
        title="Revolutionize Business with D365 Solutions"
        desc="Boost Productivity and Profit Margins"
        cta="Let's Connect"
        width="60%"
        video="/fno/video/pageBanner.mov"
      />

      {/* End--HeroBanner-Section=========================================================== */}

      

      {/* Start--Overview-Section============================================================== */}
      <OverviewSection
        Text={
          "D365 Finance & Operations streamlines global operations, provides real-time insights, and enhances financial control for medium to large-sized businesses."
        }
      />
      {/* End--Overview-Section================================================================ */}

      {/* Start--Solution-Cards-Slider-Section============================================== */}
      <CommonCardTwoSlider
        ID={''}
        sectionImageUrl={''}
        sectionBGColor={'bg-secondary-10'}
        sectionHeading={'Key Highlights - D365 Finance & Supply Chain'}
        sectionDesc={'D365 F&O powers up your business with insights and comprehensive financial tools to streamline operations and adapt to changing business environments.'}
        sectionTextColor={'text-primary-900'}
        sectionHeaderMaxWidth={'40%'}
        cardData={SOLUTIONS_CARDS_DATA}
      >

      </CommonCardTwoSlider>

      {/* End--Solution-Cards-Slider-Section============================================== */}

     

      {/* Start--Microsoft-Solution-Section============================================================== */}
     
      {/* End--Microsoft-Solution-Section================================================================ */}

     {/* START-ADDED-SOLUTION-SECTION=================================================================== */}
        <AddedSolutionSection sectionBGColor={'bg-neutral-white'} sectionTextColor={'text-primary-900'} sectionDesc={'With our tailored D365 F&O solutions built using Power Apps, we ensure seamless integration and efficient processes for Quality and Production Orders. Our goal is to make your journey towards enhanced operational efficiency as smooth as possible.'}/>
      {/* END-ADDED-SOLUTION-SECTION=================================================================== */}

      {/* Start--Benefits-Section============================================================== */}
      <BenefitSliderSection
        ID={"BENEFIT"}
        sectionBGColor={"bg-primary-900"}
        sectionHeading={"Benefits of Dynamics 365 F&O"}
        sectionDesc={
          "Microsoft Dynamics 365 Finance & Operations (D365 F&O) stands out as a modern and adaptable solution, with a pivotal feature being its role-based design along with comprehensive support for all compliance-related necessities."
        }
        sectionTextColor={"white"}
        cardData={BENEFITS_CARDS_DATA}
        SectionHeadingMaxWidth={"100%"}
      />
      {/* End--Benefits-Section================================================================ */}

      

      {/* Start--Industry-Spotlight-Section============================================================== */}
      <IndustrySpotlight cardData={INDUSTRY_SPOTLIGHT}  sectionDesc={'We offer industry-specific solutions, addressing unique challenges for enhanced efficiency and growth'}/>
      {/* End--Industry-Spotlight-Section================================================================ */}

     

      {/* Start--Case-Study-Section============================================================== */}
      <CaseStudiesSection
        casestudy={CASE_STUDIES_DATA}
        csLayout={"1"}
        bgColor={"bg-secondary-10"}
      />
      {/* End--Case-Study-Section================================================================ */}

      {/* Start--Blogs-Section============================================================== */}
      <BlogSection
        ID={"blog"}
        blogImageUrl={blogImageUrl}
        Heading={"The Future of Financial Agility: D365 Finance and Operations Insights"}
        Desc={
          ""
        }
        Color={"text-neutral-white"}
        readMoreUrl="https://godrejinfotech.com/blogDetails.aspx?blog=12"
      ></BlogSection>
      {/* End--Blogs-Section================================================================ */}

      {/* Start--Distinctive-Section============================================================== */}
      <DistinctiveSection
        DistinctiveData={DISTINCTIVE_DATA}
        ID={"Distinctive"}
        Title={"The Distinctive Edge"}
        Desc={
          "Our highly experienced Microsoft team is dedicated to understanding your unique business needs, delivering a tailored solution, and ensuring you harness the full potential of D365 F&O for business efficiency. "
        }
      ></DistinctiveSection>
      {/* End--Distinctive-Section================================================================ */}
      {/* Start--Testimonial-Section============================================================== */}
      <ReviewSliderSection
        ID={"TESTIMONIALS"}
        Heading={"Delighted customers share their success experience"}
        Desc={""}
        Color="text-neutral-white"
        CardDataList={TESTIMONIAL_DATA}
        BGColor="bg-primary-900"
        SectionHeadingMaxWidth={"70%"}
      ></ReviewSliderSection>
      {/* End--Testimonial-Section================================================================ */}

      {/* Start--Transform-Business-Form-Section============================================================== */}
      <TransformBusinessForm
        Title={"Transform your Business with us"}
        Desc={
          "Let us discuss how D365 F&O Implementation can help you with rapid growth!"
        }
      ></TransformBusinessForm>
      {/* End--Transform-Business-Form-Section================================================================ */}
    </>
  );
};

export default FNO;
