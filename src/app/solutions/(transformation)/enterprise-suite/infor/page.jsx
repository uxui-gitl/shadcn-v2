"use client";
import EntIntro from "@/components/EntIntro";
import SectionNav from "@/components/SectionNav";
import OverviewSection from "@/sections/overview/OverviewSection";
import CommonCardThreeSlider from "@/sections/commonCardThreeSlider/CommonCardThreeSlider";
import SectionWidthSlider from "@/sections/sectionWithSlider/SectionWithSlider";
import SectionWrapper from "@/components/SectionWrapper";
import SectionHeading from "@/components/SectionHeading";
import IndustrySpotlight from "@/sections/industry-spotlight/industrySpotlight";
import HubExpertise from "@/sections/hub-of-expertise/HubExpertise";
import BlogSection from "@/sections/blog/BlogSection";
import CaseStudiesSection from "@/sections/case-studies/CaseStudiesSection";
import DistinctiveSection from "@/sections/distinctive/DistinctiveSection";
import { Swiper, SwiperSlide } from "swiper/react";
import ReviewSliderSection from "@/sections/reviewSlider/ReviewSliderSection";
import TransformBusinessForm from "@/sections/transformBusinessFrom/TransformBusinessFromSection";
import { Pagination } from "swiper/modules";
import Image from "next/image";

const Page = () => {
  const blogImageUrl = "/infor/blogBg.webp";
  const TESTIMONIAL_DATA = [
    {
      id: 1,
      cardHeading: "Infor Managed Support Services",
      cardDesc:
        "In January 2009, our India operations launched ERP LN FP2. Godrej Infotech has provided consistent, effective support since April, optimizing ERP use and managing global financial reporting. We appreciate GITL team for their successful efforts.",
      designation: "Manager",
      companyName:
        "Global Leader in Ice-Cold Merchandiser & Glass Bottle Manufacturer",
    },
    {
      id: 2,
      cardHeading: "Implementation with Better Business Understanding",
      cardDesc:
        "Thank you, Godrej Infotech, for excellent implementation, quick understanding of our business needs and impactful contributions. Appreciation to your leadership and dedicated team.",
      designation: "IT Manager",
      companyName: "Global Process Equipment Supplier",
    },
    {
      id: 3,
      cardHeading: "Swift Implementation with Proactive Approach",
      cardDesc:
        "Thanks to Godrej Infotech Limited for their swift Infor LN 10.4 & Infor OS implementation. With a seamless process, they resolved our challenges and mapped all business processes within 10 weeks. Kudos to the delivery and backend technical teams for their proactive and resourceful support.",
      designation: "Executive Director",
      companyName: "Commercial",
    },
  ];

  const distinctiveData = [
    {
      _id: 1,
      desc: "Strong legacy of our parent group - Godrej Enterprise which has succeeded for more than 125 years.",
      icon: "/infor/disinctiveEdge/StrongLegacy.svg",
    },
    {
      _id: 2,
      desc: "Shared DNA of engineering expertise, domain knowledge and key business challenges from our parent group.",
      icon: "/infor/disinctiveEdge/SharedDNA.svg",
    },
    {
      _id: 3,
      desc: "Proven Infor excellence of 20 + years and 300+ successful implementations",
      icon: "/infor/disinctiveEdge/InforExcellence.svg",
    },
    {
      _id: 4,
      desc: "Comprehensive in-house Infor ecosystem delivering operational effectiveness",
      icon: "/infor/disinctiveEdge/comprehensive.svg",
    },
    {
      _id: 5,
      desc: "Infor's Centre of Excellence and Co-development Partnership program help us to deliver innovative and industry-specific solutions ",
      icon: "/infor/disinctiveEdge/inforCentre.svg",
    },
    {
      _id: 6,
      desc: "Repository of ready-to-use use cases guarantees swift implementation and seamless integration",
      icon: "/infor/disinctiveEdge/repository.svg",
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
      isArrow: true,
      cardTextColor: "white",
      additionalData: `
      <ul class="space-y-4 text-gray-500 list-disc list-inside dark:text-gray-400">
    <li>
        Manufacturing
        <ol class="ps-5 mt-2 space-y-1 list-decimal list-inside">
            <li>industrial Manufacturing   </li>
            <li>Automotive OEM/ Suppliers </li>
            <li>High-Tech Electronics  </li>
            <li>Refinery, Petro-Chemical and Process Equipment   </li>
            <li>Aerospace & Defense Equipment   </li>
            <li>Ship Design, Building and Repairs   </li>
            <li>Infrastructure / EPC with Turnkey and BOOT BOLT </li>
        </ol>
    </li>
     <li>
        Industrial Manufacturing 
        <ol class="ps-5 mt-2 space-y-1 list-decimal list-inside">
            <li>Automotive OEM/ Suppliers</li>
            <li>High-Tech Electronics  </li>
        </ol>
    </li>
</ul>`,
    },
    {
      id: 2,
      cardBGImageUrl:
        "/industry-spotlight/cards-backgrounds/card-bg--retail.png",

      cardBGColor: "#7F4EE1",
      cardHeading: "Automotive",
      cardDesc:
        "AI-driven workflows, OCR and rule-based system enables accurate results",
      isArrow: true,
      cardTextColor: "white",
      additionalData: `
      <ul class="space-y-4 text-gray-500 list-disc list-inside dark:text-gray-400">
     <li>
        Automotive
        <ol class="ps-5 mt-2 space-y-1 list-decimal list-inside">
            <li>OEM</li>
            <li>Tire Suppliers </li>
            <li>After Market Spare part & Services </li>
            <li>Trading</li>
        </ol>
    </li>
</ul>`,
    },
    {
      id: 3,
      cardBGImageUrl:
        "/industry-spotlight/cards-backgrounds/card-bg--trading-and-distribution.png",

      cardBGColor: "#7F4EE1",
      cardHeading: "Project & Contracting ",
      cardDesc:
        "Manage contract workflows, forms and compliance with consistency and regulatory adherence",
      isArrow: true,
      cardTextColor: "white",
      additionalData: `
      <ul class="space-y-4 text-gray-500 list-disc list-inside dark:text-gray-400">
     <li>
        Project & Contracting 
        <ol class="ps-5 mt-2 space-y-1 list-decimal list-inside">
            <li>EPC</li>
            <li>Turnkey Project</li>
        </ol>
    </li>
</ul>`,
    },
    {
      id: 4,
      cardBGImageUrl:
        "/industry-spotlight/cards-backgrounds/card-bg--healthcare.png",

      cardBGColor: "#EFE9FB",
      cardHeading: "Warehouse Management",
      cardDesc:
        "Empower employees to focus on strategic tasks to deliver attentive experience to customers",
      isArrow: true,
      cardTextColor: "white",
      additionalData: `
      <ul class="space-y-4 text-gray-500 list-disc list-inside dark:text-gray-400">
     <li>
        Project & Contracting 
        <ol class="ps-5 mt-2 space-y-1 list-decimal list-inside">
            <li>3PL</li>
            <li>Logistics Services</li>
        </ol>
    </li>
</ul>`,
    },
  ];

  const CASE_STUDIES_DATA = [
    {
      imageURL: "/infor/caseStudy.webp",
      videoURL: "",
      title: "Case Studies",
      heading: "Infor Project Highlights",
      description:
        "World's top-notch businesses choose us for our excellent technical acumen and proven standards as we deliver high performing multidisciplinary solutions across the spectrum of industries.",
      link: "/case-study-1",
      color: "#FFFFFF",
    },
    {
      imageURL: "",
      title: "",
      heading: "Electrical Component Manufacturer",
      description:
        "Infor LN reduces manual efforts by 30% for auto sector's leading electrical component manufacturer",
      link: "https://www.godrejinfotech.com/assets/pdf/case-studies/Manufacturer-Electrical-components-Automobile.pdf ",
      color: "#000",
      bgCardColor: "#FCE6F4",
    },

    {
      imageURL: "",
      title: "",

      heading: "Hydraulic Systems Manufacturer",
      description:
        "Infor LN achieves Enhanced User Experience and Workforce Enablement for Global Hydraulic Systems Manufacturer",
      link: "https://www.godrejinfotech.com/assets/pdf/case-studies/Infor-LN-India-Localization.pdf",
      color: "#000",
      bgCardColor: "#EFE9FB",
    },
    {
      videoURL: "/infor/videos/caseStudy.mp4",
      title: "",
      heading: "Sheet metal manufacturer",
      description:
        "Infor cuts costs by 40% and boosts after-sales speed by 20% for European sheet metal manufacturer",
      link: "/case-study-1",
      color: "#000",
      bgCardColor: "#E1F2EF",
    },

    // Add more case studies here...
  ];

  const HUBEXPERTISE_COUNTER_DATA = [
    { start: 290, end: 300, description: "Cloud Deployments" },
    { start: 10, end: 15, description: "Cloud Certified Professionals" },
    {
      start: 0,
      end: 0,
      description: "Largest Infor Implementation Experience in Asia",
    },

    // Add more counters as needed
  ];

  const offeringLinkListData = [
    {
      id: 1,
      text: "CloudSuite™ Industrial Enterprise",
      beforeIconUrl: "true",
      isArrowIconVisiable: false,
    },
    {
      id: 2,
      text: "CloudSuite™ Automotive",
      beforeIconUrl: "true",
      isArrowIconVisiable: false,
    },
    {
      id: 3,
      text: "CloudSuite™ Aerospace & Defense",
      beforeIconUrl: "true",
      isArrowIconVisiable: false,
    },
  ];

  const serviceOfferingData = [
    {
      id: 1,
      cardBGColor: "#fff",
      cardHeading: "Implementation",
      cardDesc:
        "Streamline every phase of Infor implementation precisely and on-time",
      isArrow: true,
      cardTextColor: "black",
      cardTopImageUrl: "/infor/serviceOfferings/implementation.webp",
    },
    {
      id: 2,
      cardBGColor: "#fff",
      cardHeading: "Managed Services",
      cardDesc:
        "Manage every complex, time-consuming and resource-rigorous process and on -demand maintenance of Infor application",
      isArrow: true,
      cardTextColor: "black",
      cardTopImageUrl: "/infor/serviceOfferings/managedServices.webp",
    },
    {
      id: 3,
      cardBGColor: "#fff",
      cardHeading: "Migrate to Cloud",
      cardDesc:
        "Ensure smooth and efficient migration process with minimum business disruptions",
      isArrow: true,
      cardTextColor: "black",
      cardTopImageUrl: "/infor/serviceOfferings/migrateCloud.webp",
    },
    {
      id: 4,
      cardBGColor: "#E4E4E4",
      cardHeading: "Migrate to Infor",
      cardDesc:
        "Experience seamless and transformative migration of different ERP to Infor LN with data integrity. ",
      isArrow: true,
      cardTextColor: "black",
      cardTopImageUrl: "/infor/serviceOfferings/migrateInfor.webp",
    },
    {
      id: 5,
      cardBGImageUrl: "",
      cardBGColor: "#EFE9FB",
      cardHeading: "Upgrade with Infor",
      cardDesc:
        "Get access to the latest Infor platform, ensuring improved overall performance",
      isArrow: true,
      cardTextColor: "black",
      cardTopImageUrl: "/infor/serviceOfferings/upgradeInfor.webp",
    },
    {
      id: 6,
      cardBGImageUrl: "/rpa/ArtboardBg.png",
      cardBGColor: "#EFE9FB",
      cardHeading: "Customization & Integrations",
      cardDesc:
        "Value-adding custom developments and integrations that deliver better business outcomes",
      isArrow: false,
      cardTextColor: "black",
      cardTopImageUrl: "/infor/serviceOfferings/customization.webp",
    },
  ];

  const ultimateChoiceData = [
    {
      id: 1,
      BGImageUrl: "",
      BGColor: "#fff",
      CardBGColor: "transparent",
      CardTextColor: "#000",
      CardTitle: "",
      CardIconUrl: "/infor/icons/GITL-InsightEdge.svg",
      CardHeading: "GITL InsightEdge",
      CardDesc:
        "Industry-specific pre-built business reporting readily available on Infor Birst for MIS requirements",
      isArrow: "",
      link: [],
    },

    {
      id: 2,
      BGImageUrl: "",
      BGColor: "#fff",
      CardBGColor: "transparent",
      CardTextColor: "#000",
      CardTitle: "",
      CardIconUrl: "/infor/icons/DataConversion.svg",
      CardHeading: "Data Conversion Utility Tool",
      CardDesc:
        "Data migration with fast & structured upload, source/target systems management, table structures, field mapping & data scripts.",
      isArrow: "",
      link: [],
    },
    {
      id: 3,
      BGImageUrl: "",
      BGColor: "#fff",
      CardBGColor: "transparent",
      CardTextColor: "#000",
      CardTitle: "",
      CardIconUrl: "/infor/icons/CustomFit.svg",
      CardHeading: "GITL Custom Fit",
      CardDesc:
        "Industry vertical focused solution Pre-Configured Business Process Mapping and Pre-Built Industry required Customization.",
      isArrow: "",
      link: [],
    },
    {
      id: 4,
      BGImageUrl: "",
      BGColor: "#fff",
      CardBGColor: "transparent",
      CardTextColor: "#000",
      CardTitle: "",
      CardIconUrl: "/infor/icons/cloudscapeAlign.svg",
      CardHeading: "GITL Cloudscape Align",
      CardDesc:
        "Infor cloud transition with data migration strategies, app compatibility, network architecture & security protocols",
      isArrow: "",
      link: [],
    },
    {
      id: 5,
      BGImageUrl: "",
      BGColor: "#fff",
      CardBGColor: "transparent",
      CardTextColor: "#000",
      CardTitle: "",
      CardIconUrl: "/infor/icons/prosoft.svg",
      CardHeading: "Prosoft 2.0",
      CardDesc:
        "Customized Infor LN solution for on-site project management & inventory control to streamline operations",
      isArrow: "",
      link: [],
    },
  ];

  const inforText = [
    "Infor LN",
    "Infor WMS",
    "Factory Track",
    "Infor OS",
    "Expense Management",
    "Infor CPQ",
    "Infor CRM",
    "Infor HCM",
    "Infor d/EPM",
    "Infor Birst",
  ];

  return (
    <>
      <EntIntro
        title="Maximize business efficiency with Infor Solution"
        desc="Solve Unique Industry Challenges with our Expertise"
        cta="Let's Connect"
        width="60%"
        video="/infor/videos/pageBanner.mp4"
      />

      {/* Overview  */}
      <OverviewSection
        Text={`20+ years of Infor partnership and APAC's largest Infor implementation experience, empowers us to drive growth-focused operations globally.`}
      />

      <SectionWrapper BGColor="bg-primary-500" setTop={false}>
        <div className="container mx-auto py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mb-4">
            <div>
              <SectionHeading
                Heading={"Our Infor Capabilities"}
                Desc={`Delivering tailored business-fit Infor solutions and support for optimal business performance.`}
                Color={"white"}
                headingContainerWidth={"w-full"}
              ></SectionHeading>

              <div>
                <div className="text-[28px] font-semibold text-white">
                  Infor CloudSuite
                </div>

                <div className="my-5">
                  {offeringLinkListData.map((item) => (
                    <div
                      key={item?.id}
                      className="flex items-center justify-center py-2 text-heading-02 leading-heading-02 font-medium text-white border-b border-neutral-white border-opacity-35"
                      style={{ cursor: "pointer" }}
                    >
                      {item?.beforeIconUrl && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          style={{ marginRight: "20px" }}
                          width="33"
                          height="33"
                          viewBox="0 0 32 33"
                          fill="none"
                        >
                          <path
                            d="M21.3331 11.1563V7.15625L25.3331 3.15625L26.6664 5.82292L29.3331 7.15625L25.3331 11.1563H21.3331ZM21.3331 11.1563L15.9998 16.4895M29.3332 16.4896C29.3332 23.8534 23.3636 29.8229 15.9998 29.8229C8.63604 29.8229 2.6665 23.8534 2.6665 16.4896C2.6665 9.12579 8.63604 3.15625 15.9998 3.15625M22.6665 16.4896C22.6665 20.1715 19.6817 23.1563 15.9998 23.1563C12.3179 23.1563 9.33317 20.1715 9.33317 16.4896C9.33317 12.8077 12.3179 9.82292 15.9998 9.82292"
                            stroke="white"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      )}
                      <span className="w-full text-paragraph-01 leading-paragraph-01 font-normal">
                        {item.text}
                      </span>
                      {item?.isArrowIconVisiable && (
                        <svg
                          className="w-[24px] h-[24px] ms-2 rtl:rotate-180"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 14 10"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M1 5h12m0 0L9 1m4 4L9 9"
                          />
                        </svg>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div
              className="flex flex-col justify-between rounded-3xl hidden md:flex"
              style={{ maxHeight: "600px", height: "100%" }}
            >
              <div className="flex-grow"></div> {/* Pushes content above */}
              <div
                className="rounded-3xl"
                style={{
                  overflow: "hidden",
                }}
              >
                <Image
                  layout="responsive"
                  src="/infor/ourCapabilities.webp"
                  alt="Infor Capabilities"
                  width={600}
                  height={600}
                />
              </div>
            </div>
          </div>

          <div
            className="InforSliderWrapper "
            style={{ zindex: "2", position: "relative" }}
          >
            <div
              className="flex py-5 "
              style={{ justifyContent: "center", alignItems: "center" }}
            >
              <div className="w-full">
                <Swiper
                  slidesPerView={2}
                  navigation={false}
                  pagination={{ clickable: true }}
                  modules={[Pagination]}
                  autoplay={true}
                  loop={true}
                  spaceBetween={30}
                  breakpoints={{
                    640: {
                      slidesPerView: 2,
                      spaceBetween: 16,
                    },
                    768: {
                      slidesPerView: 2,
                      spaceBetween: 24,
                    },
                    1024: {
                      slidesPerView: 6,
                      spaceBetween: 32,
                    },
                    1900: {
                      slidesPerView: 6,
                      spaceBetween: 32,
                    },
                  }}
                >
                  {inforText?.map((item, index) => (
                    <SwiperSlide key={item} >
                      <div className="w-full text-heading-04 font-semibold text-left text-white py-4">
                        {item}
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <CommonCardThreeSlider
        ID={""}
        sectionImageUrl={""}
        sectionBGColor={"bg-primary-900"}
        sectionHeading={"Service Offerings"}
        sectionDesc={
          "With extensive experience of domains and Infor solutions, we offer services to meet the growth requirements of business."
        }
        sectionTextColor={"text-neutral-white"}
        sectionDescColor={"text-neutral-white"}
        cardData={serviceOfferingData}
      ></CommonCardThreeSlider>

      <SectionWidthSlider
        ID={"ultimateChoiceData"}
        sectionHeading={"Infor Accelerators"}
        sectionDesc={
          "Enhancing the features of business applications, our easily integrating specialized solutions intend to add value to business with handy support."
        }
        sectionTextColor="text-primary-900"
        sectionDescColor="text-neutral-darkest-grey"
        cardData={ultimateChoiceData}
        sectionBGColor="bg-primary-10"
        setHeadingLayout="horizontal"
      />

      <IndustrySpotlight
        cardData={INDUSTRY_SPOTLIGHT}
        sectionHeading={"Industry Spotlight"}
        sectionDesc={
          "Understanding unique challenges of different industries, we equip businesses to thrive in competitive markets"
        }
      />

      <HubExpertise
        setHeading="Hub of Expertise"
        setDesc="We are here to build a competitive edge with technological brilliance for businesses across the world."
        setColor="bg-seconday-900"
        BGColor="bg-secondary-900"
        counters={HUBEXPERTISE_COUNTER_DATA}
        columnNo={3}
      />

      <CaseStudiesSection
        casestudy={CASE_STUDIES_DATA}
        csLayout={"1"}
        bgColor={"#D3D3D3"}
      />

      {/* Start-Section--Blog======================================================================= */}
      <BlogSection
        ID={"blog"}
        blogImageUrl={blogImageUrl}
        Heading={"How Infor CloudSuite Streamlines Industry-Specific Processes"}
        Desc={
          "Many organizations struggle with inefficient processes, siloed data, and outdated technology, hindering their ability to innovate and grow. That's where Infor CloudSuite comes in – a powerful, industry-specific cloud ERP solution designed to streamline processes, enhance productivity, and drive business success."
        }
        Color={"text-neutral-white"}
        readMoreUrl={[{id:'1', text:'Why Godrej Infotech', url:'https://www.godrejinfotech.com/blogDetails.aspx?blog=7'}]}
      ></BlogSection>
      {/* End-Section--Blog======================================================================= */}

      <DistinctiveSection
        DistinctiveData={distinctiveData}
        ID={"Distinctive"}
        Title={"The Distinctive Edge"}
        Desc={
          "Delivering complex global transformations through solution-focused approach, domain expertise & value-added services."
        }
      ></DistinctiveSection>
      <ReviewSliderSection
        ID={"TESTIMONIALS"}
        Heading={"Delighted customers share their successful experience"}
        Desc={""}
        Color="text-neutral-white"
        CardDataList={TESTIMONIAL_DATA}
        BGColor="bg-primary-900"
        SectionHeadingMaxWidth={"70%"}
        setHeadingLayout={'left'}
      ></ReviewSliderSection>
      <TransformBusinessForm
        Title={"Are you Ready for Infor-driven growth? "}
        Desc={"Let's get started!"}
      ></TransformBusinessForm>
    </>
  );
};

export default Page;
