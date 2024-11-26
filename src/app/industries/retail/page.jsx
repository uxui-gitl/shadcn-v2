"use client";
import EntIntro from "@/components/EntIntro";
import OverviewSection from "@/sections/overview/OverviewSection";
import SectionWrapper from "@/components/SectionWrapper";
import SectionHeading from "@/components/SectionHeading";
import Image from "next/image";
import IndustrySpotlight from "@/sections/industry-spotlight/industrySpotlight";
import { Swiper, SwiperSlide } from "swiper/react";
import BlogSection from "@/sections/blog/BlogSection";
import AcceleratorSection from "@/sections/accelerator/AcceleratorSection";
import ReviewSliderSection from "@/sections/reviewSlider/ReviewSliderSection";
import TransformBusinessForm from "@/sections/transformBusinessFrom/TransformBusinessFromSection";
import Slider from "@/components/Slider";
import SectionWrapperNew from "@/components/SectionWrapperNew";
import { Tabs } from "@/components/ui/tabs";
import Link from "next/link";
import OutlinedButtonWithArrow from "@/components/ui/buttons/OutlinedButtonWithArrow";
import CaseStudiesSection from "@/sections/case-studies/CaseStudiesSection";

function page() {
  const sectionBGImageUrl =
    "/data-insights/backgrounds/bg--data-visualization.webp";
  const blogImageUrl = "/retail/blogBg.webp";

  const imgBgURL =
    "/CloudStackServices/background/bg--strategic-partnership.png";

  const CHALLENGES_LIST_DATA = [
    {
      id: 1,
      title: "Inconsistent omnichannel experiences",
      icon: "/upgradeCloud/icons/challengesIcon.svg",
    },
    {
      id: 2,
      title: "Limited personalization and targeted marketing",
      icon: "/upgradeCloud/icons/challengesIcon.svg",
    },
    {
      id: 3,
      title: "Inaccurate inventory forecasting and stockouts",
      icon: "/upgradeCloud/icons/challengesIcon.svg",
    },
    {
      id: 4,
      title: "High operational costs and limited scalability",
      icon: "/upgradeCloud/icons/challengesIcon.svg",
    },
    {
      id: 5,
      title: "Missed opportunities for cross-selling and upselling",
      icon: "/upgradeCloud/icons/challengesIcon.svg",
    },
    {
      id: 6,
      title: "High shipping costs and delayed deliveries",
      icon: "/upgradeCloud/icons/challengesIcon.svg",
    },
  ];

  const tabs = [
    {
      title: "Services",
      value: "services",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-3xl text-xl md:text-4xl font-bold text-black bg-[#FCE6F4]">
          <ServiceContent />
        </div>
      ),
    },
    {
      title: "Industry",
      value: "industry",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-3xl text-xl md:text-4xl font-bold text-black bg-[#FCE6F4]">
          <IndustryContent />
        </div>
      ),
    },
    {
      title: "Partners",
      value: "partners",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-3xl text-xl md:text-4xl font-bold text-black bg-[#FCE6F4]">
          <PartnersContent />
        </div>
      ),
    },
  ];

  const INDUSTRY_SPOTLIGHT = [
    {
      id: 1,
      cardBGImageUrl:
        "/industry-spotlight/cards-backgrounds/card-bg--manufacturing.png",
      cardBGColor: "bg-neutral-light-grey",
      cardHeading: "Retail",
      cardDesc: "",
      isArrow: false,
      cardTextColor: "text-neutral-darkest-grey",
      additionalData: `
      <ul class="space-y-4 text-neutral-darkest-grey list-disc list-inside dark:text-gray-400">
    <li>
        Retail
        <ol class="ps-5 mt-2 space-y-1 list-decimal list-inside">
            <li>Hypermarket</li>
            <li>Supermarket</li>
            <li>Eyewear Stores</li>
            <li>Fashion Retail</li>
            <li>Speciality Stores</li>
        </ol>
    </li>
</ul>`,
    },
    {
      id: 2,
      cardBGImageUrl:
        "/industry-spotlight/cards-backgrounds/card-bg--retail.png",

        cardBGColor: "bg-neutral-light-grey",
      cardHeading: "Hospitality",
      cardDesc:
        "AI-driven workflows, OCR and rule-based system enables accurate results",
      isArrow: false,
      cardTextColor: "white",
      additionalData: `
      <ul class="space-y-4 text-neutral-darkest-grey list-disc list-inside dark:text-gray-400">
    <li>
        Hospitality
        <ol class="ps-5 mt-2 space-y-1 list-decimal list-inside">
            <li>Full-Service (Fine Dining) Restaurants</li>
            <li>Quick & Fast Service Rest</li>
            <li>Food Services</li>
           
        </ol>
    </li>
</ul>`,
    },
    {
      id: 3,
      cardBGImageUrl:
        "/industry-spotlight/cards-backgrounds/card-bg--trading-and-distribution.png",

        cardBGColor: "bg-neutral-light-grey",
      cardHeading: "Travel Retail",
      cardDesc:
        "Manage contract workflows, forms and compliance with consistency and regulatory adherence",
      isArrow: false,
      cardTextColor: "white",
      additionalData: `
            <ul class="space-y-4 text-neutral-darkest-grey list-disc list-inside dark:text-gray-400">
          <li>
              Hospitality
              <ol class="ps-5 mt-2 space-y-1 list-decimal list-inside">
                  <li>Duty free & Travel Retail</li>
              </ol>
          </li>
      </ul>`,
    },

    // Add more cards as needed
  ];

  const RPASolution2 = [
    {
      id: 1,
      cardBGColor: "white",
      cardHeading: "Customer Experience",
      cardDesc: "",
      isArrow: true,
      cardTextColor: "black",
      cardTopImageUrl: "/retail/solutionOfferings/customerExperience.webp",
      cardHoverData: [
        "Salesforce",
        "Microsoft D365 CRM",
        "Infor CRM",
        "D365 Commerce",
        "LS Central - Kiosk",
        "POS",
        "Clienteling",
      ],
    },

    {
      id: 2,
      cardBGColor: "white",
      cardHeading: "Ecommerce",
      cardDesc: "",
      isArrow: true,
      cardTextColor: "black",
      cardTopImageUrl: "/retail/solutionOfferings/ecommerce.webp",
      cardHoverData: [
        "Adobe Commerce Cloud",
        "Shopify",
        "Odoo Commerce",
        "Woo Commerce",
        "Salesforce Commerce",
        "Big Commerce",
      ],
    },

    {
      id: 3,
      cardBGColor: "white",
      cardHeading: "Supply chain management",
      cardDesc: "",
      isArrow: true,
      cardTextColor: "black",
      cardTopImageUrl: "/retail/solutionOfferings/supplyChain.webp",
      cardHoverData: ["Infor WMS"],
    },

    {
      id: 4,
      cardBGColor: "white",
      cardHeading: "Data Insights",
      cardDesc: "",
      isArrow: true,
      cardTextColor: "black",
      cardTopImageUrl: "/retail/solutionOfferings/dataInsights.webp",
      cardHoverData: ["Power BI", "BIRST", "Tableau"],
    },
    {
      id: 5,
      cardBGColor: "white",
      cardHeading: "Intelligent technologies",
      cardDesc: "",
      isArrow: true,
      cardTextColor: "black",
      cardTopImageUrl: "/retail/solutionOfferings/intelligentTech.webp",
      cardHoverData: ["IoT"],
    },
    {
      id: 6,
      cardBGColor: "white",
      cardHeading: "Integration Services",
      cardDesc: "",
      isArrow: true,
      cardTextColor: "black",
      cardTopImageUrl: "/retail/solutionOfferings/integrationServ.webp",
      cardHoverData: [
        "Oracle",
        "SAP",
        "LS Retail",
        "Microsoft D365",
        "ECommerce",
        "Warehouse Management",
      ],
    },
  ];

  const keyResponsibilityData = [
    {
      title: "Retail Store Transformation",
      desc: "Enabling personalization in sales process, loyalty management programs, and enhancing customer experience with retail stores modernization.",
      icon: "/retail/keyCapabilities/Retail.svg",
    },

    {
      title: "Supply Chain Management and Tracking",
      desc: "Increasing the responsiveness of supply chain with flexibility and effective order management.",
      icon: "/retail/keyCapabilities/SupplyChain.svg",
    },
    {
      title: "Commerce Transformation",
      desc: "Modernizing the shopping journey of customers for global customer base increasing operational effectiveness.",
      icon: "/retail/keyCapabilities/Commerce.svg",
    },
    {
      title: "Integrated Digital Functionalities",
      desc: "A single intelligent platform serving multiple channels, streamlining data sharing, helping in improving operational efficiency.",
      icon: "/retail/keyCapabilities/IntegratedDigital.svg",
    },
  ];

  const DATA_MGMT_DATA = [
    {
      id: 1,
      BGImageUrl: "",
      BGColor: "#fff",
      CardBGColor: "transparent",
      CardTextColor: "white",
      CardTitle: "",
      CardIconUrl: "/upgradeCloud/icons/ico--target.svg",
      CardHeading: "Retail Store Transformation",
      CardDesc:
        "Enabling personalization in sales process, loyalty management programs, and enhancing customer experience with retail stores modernization.",
      isArrow: "true",
      link: [],
      additionalData: `
             <ul class="max-w-md space-y-1 text-white list-disc">
                                    <li>
                                        Customer experience (CX) modernization
                                    </li>
                                    <li>
                                        Digital stores development
                                    </li>
                                    <li>
                                        Point-of-Sale (POS) modernization
                                    </li>
                                    <li>
                                        Clienteling
                                    </li>
                                    <li>
                                        Personalization & loyalty management
                                    </li>
                                </ul>
            `,
    },

    {
      id: 2,
      BGImageUrl: "",
      BGColor: "#fff",
      CardBGColor: "transparent",
      CardTextColor: "white",
      CardTitle: "",
      CardIconUrl: "/upgradeCloud/icons/ico--target.svg",
      CardHeading: "Supply Chain Management and Tracking",
      CardDesc:
        "Increasing the responsiveness of supply chain with flexibility and effective ordermanagement.",
      isArrow: "true",
      link: [],
      additionalData: `
             <ul class="max-w-md space-y-1 text-white list-disc">
                                    <li>
                                        Omni channel order management
                                    </li>
                                    <li>
                                        End-to-end supply chain tracking
                                    </li>
                                    <li>
                                        Multichannel and last mile management
                                    </li>
                                    <li>
                                        Delivery re-routin
                                    </li>
                                </ul>
            `,
    },
    {
      id: 3,
      BGImageUrl: "",
      BGColor: "#fff",
      CardBGColor: "transparent",
      CardTextColor: "white",
      CardTitle: "",
      CardIconUrl: "/upgradeCloud/icons/ico--target.svg",
      CardHeading: "Commerce Transformation",
      CardDesc:
        "Modernizing the shopping journey of customers for global customer base increasing operational effectiveness.",
      isArrow: "true",
      link: [],
      additionalData: `
             <ul class="max-w-md space-y-1 text-white list-disc">
                                    <li>
                                        Omni-channel Commerce for B2B/B2C Integration
                                    </li>
                                    <li>
                                        Intelligent Order Management Systems
                                    </li>
                                    <li>
                                        Digital payments
                                    </li>
                                    <li>
                                        Scam Protection
                                    </li>
                                </ul>
            `,
    },
    {
      id: 4,
      BGImageUrl: "",
      BGColor: "#fff",
      CardBGColor: "transparent",
      CardTextColor: "white",
      CardTitle: "",
      CardIconUrl: "/upgradeCloud/icons/ico--target.svg",
      CardHeading: "Integrated Digital Functionalities",
      CardDesc:
        "A single intelligent platform serving multiple channels, streamlining data sharing, helping in improving operational efficiency.",
      isArrow: "true",
      link: [],
      additionalData: `
             <ul class="max-w-md space-y-1 text-white list-disc">
                                    <li>
                                        Automated Warehousing
                                    </li>
                                    <li>
                                        Dynamics 365 for Retail, Operations, Commerce
                                    </li>
                                    <li>
                                        Merchandising Solutions
                                    </li>
                                </ul>
            `,
    },
  ];

  const SOLUTION_DATA = [
    {
      id: 1,
      cardBGColor: "#F5B1DC",
      cardHeading: "Dealer<br/>Management",
      cardDesc:
        "Require Development from Scratch. Customisation of manufacturing reports",
      isArrow: true,
      cardTextColor: "black",
      cardTopImageUrl: "https://flowbite.com/docs/images/blog/image-1.jpg",
    },
    {
      id: 2,
      cardBGColor: "#FCE6F4",
      cardHeading: "Value Manufacturing Process Management",
      cardDesc:
        "Require Development from Scratch. Customisation of manufacturing reports",
      isArrow: true,
      cardTextColor: "black",
      cardTopImageUrl: "https://flowbite.com/docs/images/blog/image-4.jpg",
    },
    {
      id: 3,
      cardBGColor: "#CDBAF3",
      cardHeading: "Metal Recycling Operation Management",
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

  const CASE_STUDIES_DATA = [
    {
      imageURL: "",
      videoURL: "/CloudStackServices/case-studies/bg--video-industry.mp4",
      title: "Case Studies",
      heading: "Retail Projects Highlights",
      description:
        "World's top-notch businesses choose us for our industry knowledge and excellent technical acumen",
      link: "",
      color: "#FFFFFF",
      bgCardColor: "#2B1624",
    },
    {
      imageURL: "",
      title: "",
      heading:
        "Approval based Workflows and Unified Financial & Merchandising Insights",
      description:
        "Global Travel Retailer Gains Cost Efficiency and Lowers Total Cost of Ownership with the All-in-One NAV LS Retail Pack",
      link: "https://www.godrejinfotech.com/assets/pdf/case-studies/GlobalTravelRetailer_NAVLS_IndiaUAE.pdf",
      color: "#000",
      bgCardColor: "#fff",
    },

    {
      imageURL: "/path/to/image1.jpg",
      title: "",

      heading: "Comprehensive Audit Trails and Automated Matching Reports",
      description:
        "Saudi Arabia's Hypermarket Chain Accelerate the Business Process by 40% and Boost its Scalability with LS Retail - Microsoft Dynamics Platform",
      link: "https://www.godrejinfotech.com/assets/pdf/case-studies/HypermarketChain_NAVLS_KSA.pdf",
      color: "#000",
      bgCardColor: "#fff",
    },
  ];

  const TESTIMONIAL_DATA = [
    {
      id: 1,
      cardHeading: "Effective Retail Solution Implementation & Support",
      cardDesc: `Our earnest gratitude to Godrej Infotech for their exceptional service and genuine support during the implementation/ support of Microsoft Dynamics NAV, LS Retail and Payroll add-on. Our team is highly impressed with GITL team's meticulous conduct, dedication, professionalism, and profound knowledge regarding the retail domain`,
      designation: `- Manager,`,
      companyName: `Saudi Arabia based Superstore`,
    },
    {
      id: 2,
      cardHeading: "Dedicated team and Expert Consultation",
      cardDesc: `Optical retail demands complex solutions, and Godrej Infotech's expert advice in Microsoft Dynamics implementation and support has been valuable. Huge thanks to the innovative and dedicated Godrej Infotech team – keep up the awesome work!`,
      designation: `- General Manager IT,`,
      companyName: `Indian Eyewear Brand`,
    },
    {
      id: 3,
      cardHeading: "Streamlined Operations with Cost effective Solution",
      cardDesc: `We're delighted to share significant benefits from our IT partnership with Godrej Infotech Limited as our IT solutions partner. Implementing the LS Retail Solution has streamlined our processes, aligning with shared values of simplicity, cost-effectiveness and high quality`,
      designation: `- IT manager,`,
      companyName: ` Saudi Arabia's Hypermarket Retail Chain`,
    },
  ];


  const imgBGURL_Challenges =
  "/manufacturing/gear.webp";

  return (
    <>
      <EntIntro
        title="Expert Digital Solutions for Retailers"
        desc="Create seamless shopping experiences across channels and touchpoint"
        cta="Let's Connect"
        width="60%"
        video="/retail/videos/pageBanner.mp4"
      />
      <OverviewSection
        Text={`From adoption of CRM and e-commerce to the integration of data analytics, our expert team holds extensive experience of providing comprehensive advance solutions for global retail businesses.`}
      />

      <SectionWrapper BGColor="bg-secondary-900" setTop={false} style={{
          backgroundImage: `url(${imgBGURL_Challenges})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}>
        <div className="container mx-auto py-32">
          <SectionHeading
            Color="text-neutral-white"
            sectionBGImageUrl={sectionBGImageUrl}
            Heading="Knocking Business Challenges"
            Desc=""
            SectionHeadingMaxWidth="w-1/2"
          ></SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ul className=" space-y-4 w-full text-neutral-white">
              {CHALLENGES_LIST_DATA.map((challenge, index) => (
                <li
                  key={challenge.id}
                  className={`flex items-start py-2 border-b-[0.5px] border-neutral-white border-opacity-20 w-full ${
                    index === CHALLENGES_LIST_DATA.length - 1
                      ? "border-b-0"
                      : ""
                  }`}
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
                    <h3 className="text-paragraph-01 leading-paragraph-01 font-normal">
                      {challenge.title}
                    </h3>
                  </div>
                </li>
              ))}
            </ul>
            <div>{/* <img src="/about/video.png" /> */}</div>
          </div>
        </div>
      </SectionWrapper>
      {/* end challenges */}

      <SectionWrapperNew
        bgColor={"bg-neutral-white"}
        sectionHeading="Solution Offerings"
        sectionDesc="From specialty stores to large-scale retailers, we help businesses with enhanced competency, customer engagement and inclusive performance. "
        sectionTextColor="text-primary-900"
        sectionHeadingLayout="left"
      >
        <Slider>
          {RPASolution2?.map((item, index) => (
            <SwiperSlide key={index}>
              <div class="w-full min-h-[50vh] bg-white rounded-3xl group overflow-hidden relative border-[0.5px] border-primary-900 border-opacity-20">
                <div
                  className="h-[35vh] bg-slate-700"
                  style={{
                    background: `url('item.cardTopImageUrl')`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                ></div>
                <div className="h-[25vh] p-5 relative">
                  <h5 className="mb-4 text-heading-03 text-primary-900 font-semibold ">
                    {item?.cardHeading}
                  </h5>
                  <p className="mb-6 text-base text-primary-900 font-normal">
                    {item?.cardDesc}
                  </p>
                  {item?.cardHoverData && (
                    <div className="absolute bottom-4 right-4">
                      <OutlinedButtonWithArrow size={24} />
                    </div>
                  )}
                </div>
                {item?.cardHoverData && (
                  <div className="bg-secondary-10 p-5 rounded-3xl h-full w-full duration-200 group-hover:-translate-y-full absolute">
                    <div className="">
                      <ol className="max-w-md space-y-1 text-gray-500 list-decimal list-inside dark:text-gray-400">
                        {item?.cardHoverData.map((item2) => (
                          <>
                            <li>
                              <span className="font-semibold text-black">
                                {item2}
                              </span>
                            </li>
                          </>
                        ))}
                      </ol>
                      <ol className="max-w-md space-y-1 text-gray-500 list-decimal list-inside dark:text-gray-400">
                        {item?.cardHoverData.map((item2) => (
                          <>
                            <li>
                              <span className="font-semibold text-black">
                                {item2}
                              </span>
                            </li>
                          </>
                        ))}
                      </ol>
                    </div>
                  </div>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Slider>
      </SectionWrapperNew>
      {/* custome solution */}

      {/* key responsibility */}
      <SectionWrapperNew
        sectionHeading={"Key Capabilities"}
        sectionDesc={`Streamline finance, HR, supply chain and customer experience with Oracle Fusion Cloud's integrated solutions.`}
        sectionTextColor={"text-neutral-white"}
        sectionDescColor={"text-neutral-white"}
        sectionHeadingLayout="horizontal"
        bgColor={"bg-primary-500"}
      >
        <Slider slidesPerView={3}>
          {keyResponsibilityData?.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="p-6 bg-[transparent]  border-[0.5px] border-white rounded-3xl border-opacity-20 min-h-[424px] ">
                <Image
                  src={item.icon}
                  width={56}
                  height={56}
                  alt={"hioasdo"}
                  className="mb-4"
                />
                <div className="text-heading-03 font-semibold text-neutral-white">
                  {item?.title}
                </div>
                <p className="text-body-01 py-4 text-neutral-white">
                  {item?.desc}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Slider>
      </SectionWrapperNew>

      <AcceleratorSection
        style={{ backgroundColor: "#EFE9FB" }}
        ID={"Accelerator"}
        Heading={"Accelerator"}
        Desc={
          "Helping speciality stores to large –scale retailers to increase business competency."
        }
        Color={""}
        accImageURL={blogImageUrl}
      >
        <p className="text-heading-04 font-semibold mb-4 mt-8 text-center md:text-left md:mt-16">
          Order Management System (OMS)
        </p>
        <p className=" w-full md:w-1/2 text-body-01 text-center md:text-left ">
          Integrated with D365 F&O, this value-added solution provides real-time
          tracking, automated stock management, and customer onboarding.
        </p>
      </AcceleratorSection>

      <IndustrySpotlight
        cardData={INDUSTRY_SPOTLIGHT}
        sectionDesc={
          "Driving growth across various business sectors with scalable Business Central expertise."
        }
        slidePerView={"3"}
      />
      <CaseStudiesSection
        casestudy={CASE_STUDIES_DATA}
        csLayout={"5"}
        bgColor="bg-secondary-10"
      />

      {/* end case studies */}
      <BlogSection
        ID={"blog"}
        blogImageUrl={blogImageUrl}
        Heading={"Adobe Commerce Solution for Online Business"}
        Desc={
          "Formerly known as Magento Commerce, it is an e-commerce platform development tool that builds multi-channel e-commerce experiences, equipped with robust security, high performance, and intuitive interfaces for B2B and B2C merchants."
        }
        Color={"text-primary-900"}
        readMoreUrl={"https://www.godrejinfotech.com/blogDetails.aspx?blog=13"}
      ></BlogSection>

      <ReviewSliderSection
        ID={"TESTIMONIALS"}
        Heading={"Delighted Customers Share their Successful Experiences"}
        Desc={""}
        Color="text-neutral-white"
        CardDataList={TESTIMONIAL_DATA}
        BGColor="bg-primary-900"
        SectionHeadingMaxWidth={"70%"}
        setHeadingLayout={'left'}
      ></ReviewSliderSection>

      {/* transform business with us section */}
      <TransformBusinessForm
        Title={"Transform your Business with us"}
        Desc={
          "Let’s discuss how digital transformation can help you with rapid growth."
        }
      ></TransformBusinessForm>
    </>
  );
}

const ServiceContent = () => {
  const services = [
    "Business Consulting",
    "Implementation & Global Rollout",
    "Migration & Transformation",
    "Legacy Modernisation",
    "Infrastructure as a Service",
    "Managed Services",
  ];
  return (
    <div className="grid grid-cols-2 gap-20 h-full">
      <div className="py-10 px-10">
        {services.map((item) => (
          <>
            <div
              className="list text-[22px] py-4 flex justify-between"
              style={{ borderBottom: "1px solid #d3d3d3" }}
            >
              {item}
              <Image
                width={35}
                height={35}
                src="/homeNew/chevron-right.svg"
                alt="char"
              ></Image>
            </div>
          </>
        ))}
      </div>
      <div
        className="relative"
        style={{
          backgroundImage: `url(/homeNew/tab1.svg)`,
          backgroundSize: "cover",
        }}
      ></div>
    </div>
  );
};

const IndustryContent = () => {
  const data = [
    "Business Consulting",
    "Implementation & Global Rollout",
    "Migration & Transformation",
    "Legacy Modernisation",
    "Infrastructure as a Service",
    "Managed Services",
  ];
  return (
    <div className="grid grid-cols-2 gap-20 h-full">
      <div className="py-10 px-10">
        {data.map((item) => (
          <>
            <div
              className="list text-[22px] py-4 flex justify-between"
              style={{ borderBottom: "1px solid #d3d3d3" }}
            >
              {item}
              <Image
                width={35}
                height={35}
                src="/homeNew/chevron-right.svg"
                alt="char"
              ></Image>
            </div>
          </>
        ))}
      </div>
      <div
        className="relative"
        style={{
          backgroundImage: `url(/homeNew/tab1.svg)`,
          backgroundSize: "cover",
        }}
      ></div>
    </div>
  );
};

const PartnersContent = () => {
  const data = [
    "Business Consulting",
    "Implementation & Global Rollout",
    "Migration & Transformation",
    "Legacy Modernisation",
    "Infrastructure as a Service",
    "Managed Services",
  ];
  return (
    <div className="grid grid-cols-2 gap-20 h-full">
      <div className="py-10 px-10">
        {data.map((item) => (
          <>
            <div
              className="list text-[22px] py-4 flex justify-between"
              style={{ borderBottom: "1px solid #d3d3d3" }}
            >
              {item}
              <Image
                width={35}
                height={35}
                src="/homeNew/chevron-right.svg"
                alt="char"
              ></Image>
            </div>
          </>
        ))}
      </div>
      <div
        className="relative"
        style={{
          backgroundImage: `url(/homeNew/tab1.svg)`,
          backgroundSize: "cover",
        }}
      ></div>
    </div>
  );
};

export default page;
