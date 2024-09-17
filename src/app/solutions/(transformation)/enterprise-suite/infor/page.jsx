'use client';
import EntIntro from "@/components/EntIntro";
import SectionNav from "@/components/SectionNav";
import OverviewSection from "@/sections/overview/OverviewSection";
import CommonCardThreeSlider from '@/sections/commonCardThreeSlider/CommonCardThreeSlider';
import SectionWidthSlider from "@/sections/sectionWithSlider/SectionWithSlider";
import SectionWrapper from '@/components/SectionWrapper';
import SectionHeading from '@/components/SectionHeading';
import IndustrySpotlight from "@/sections/industry-spotlight/industrySpotlight";
import HubExpertise from "@/sections/hub-of-expertise/HubExpertise";
import BlogSection from "@/sections/blog/BlogSection";
import CaseStudiesSection from "@/sections/case-studies/CaseStudiesSection";
import DistinctiveSection from "@/sections/distinctive/DistinctiveSection";
import { Swiper, SwiperSlide } from "swiper/react";
import ReviewSliderSection from '@/sections/reviewSlider/ReviewSliderSection';
import TransformBusinessForm from "@/sections/transformBusinessFrom/TransformBusinessFromSection";
import Image from 'next/image'



const Page = () => {
  const blogImageUrl = "/ai-ml/blog-bg.png";
  const TESTIMONIAL_DATA = [
    {
      id: 1,
      cardHeading: "Infor Managed Support Services",
      cardDesc: 'In January 2009, our India operations launched ERP LN FP2. Godrej Infotech has provided consistent, effective support since April, optimizing ERP use and managing global financial reporting. We appreciate GITL team for their successful efforts.',
      designation: 'Manager',
      companyName:'Global Leader in Ice-Cold Merchandiser & Glass Bottle Manufacturer'
    },
    {
      id: 2,
      cardHeading: "Implementation with Better Business Understanding",
      cardDesc: 'Thank you, Godrej Infotech, for excellent implementation, quick understanding of our business needs and impactful contributions. Appreciation to your leadership and dedicated team.',
      designation: 'IT Manager',
      companyName:'Global Process Equipment Supplier'
    },
    {
      id: 3,
      cardHeading: "Swift Implementation with Proactive Approach",
      cardDesc: 'Thanks to Godrej Infotech Limited for their swift Infor LN 10.4 & Infor OS implementation. With a seamless process, they resolved our challenges and mapped all business processes within 10 weeks. Kudos to the delivery and backend technical teams for their proactive and resourceful support.',
      designation: 'Executive Director',
      companyName:'Commercial'
    },
  ];

  const distinctiveData = [
    {
      _id: 1,
      desc: "Strong legacy of our parent group - Godrej Enterprise which has succeeded for more than 125 years.",
      icon: "",
    },
    {
      _id: 2,
      desc: "Shared DNA of engineering expertise, domain knowledge and key business challenges from our parent group.",
      icon: "",
    },
    {
      _id: 3,
      desc: "Proven Infor excellence of 20 + years and 300+ successful implementations",
      icon: "",
    },
    {
      _id: 4,
      desc: "Comprehensive in-house Infor ecosystem delivering operational effectiveness",
      icon: "",
    },
    {
      _id: 5,
      desc: "Infor's Centre of Excellence and Co-development Partnership program help us to deliver innovative and industry-specific solutions ",
      icon: "",
    },
    {
      _id: 6,
      desc: "Repository of ready-to-use use cases guarantees swift implementation and seamless integration",
      icon: "",
    },

  ]

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
      imageURL: "/CloudStackServices/case-studies/bg--coffee-beans.png",
      videoURL: "/CloudStackServices/case-studies/bg--video-industry.mp4",
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
      imageURL: "/path/to/image1.jpg",
      title: "",

      heading: "Hydraulic Systems Manufacturer",
      description:
        "Infor LN achieves Enhanced User Experience and Workforce Enablement for Global Hydraulic Systems Manufacturer",
      link: "https://www.godrejinfotech.com/assets/pdf/case-studies/Infor-LN-India-Localization.pdf",
      color: "#000",
      bgCardColor: "#EFE9FB",
    },
    {
      imageURL: "/CloudStackServices/case-studies/bg--electical-devices.png",
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
    { start: 0, end: 0, description: "Largest Infor Implementation Experience in Asia" },

    // Add more counters as needed
  ];

  const offeringLinkListData = [
    { id: 1, text: 'CloudSuite™ Industrial Enterprise', beforeIconUrl: 'true', isArrowIconVisiable: false },
    { id: 2, text: 'CloudSuite™ Automotive', beforeIconUrl: 'true', isArrowIconVisiable: false },
    { id: 3, text: 'CloudSuite™ Aerospace & Defense', beforeIconUrl: 'true', isArrowIconVisiable: false },
  ]

  const serviceOfferingData = [
    {
      id: 1,
      cardBGColor: '#fff',
      cardHeading: 'Implementation',
      cardDesc: 'Streamline every phase of Infor implementation precisely and on-time',
      isArrow: true,
      cardTextColor: 'black',
      cardTopImageUrl: 'https://flowbite.com/docs/images/blog/image-1.jpg'
    },
    {

      id: 2,
      cardBGColor: '#fff',
      cardHeading: 'Managed Services',
      cardDesc: 'Manage every complex, time-consuming and resource-rigorous process and on -demand maintenance of Infor application',
      isArrow: true,
      cardTextColor: 'black',
      cardTopImageUrl: 'https://flowbite.com/docs/images/blog/image-4.jpg'
    },
    {

      id: 3,
      cardBGColor: '#fff',
      cardHeading: 'Migrate to Cloud',
      cardDesc: 'Ensure smooth and efficient migration process with minimum business disruptions',
      isArrow: true,
      cardTextColor: 'black',
      cardTopImageUrl: 'https://flowbite.com/docs/images/blog/image-7.jpg'
    },
    {

      id: 4,
      cardBGColor: '#E4E4E4',
      cardHeading: 'Migrate to Infor',
      cardDesc: 'Experience seamless and transformative migration of different ERP to Infor LN with data integrity. ',
      isArrow: true,
      cardTextColor: 'black',
      cardTopImageUrl: 'https://flowbite.com/docs/images/blog/image-1.jpg'
    },
    {

      id: 5,
      cardBGImageUrl: '/rpa/ArtboardBg.png',
      cardBGColor: '#EFE9FB',
      cardHeading: 'Upgrade with Infor',
      cardDesc: 'Get access to the latest Infor platform, ensuring improved overall performance',
      isArrow: true,
      cardTextColor: 'black',
      cardTopImageUrl: 'https://flowbite.com/docs/images/blog/image-2.jpg'
    },
    {


      id: 5,
      cardBGImageUrl: '/rpa/ArtboardBg.png',
      cardBGColor: '#EFE9FB',
      cardHeading: 'Customization & Integrations',
      cardDesc: 'Value-adding custom developments and integrations that deliver better business outcomes',
      isArrow: false,
      cardTextColor: 'black',
      cardTopImageUrl: 'https://flowbite.com/docs/images/blog/image-3.jpg'
    },
  ]

  const ultimateChoiceData = [
    {
      id: 1,
      BGImageUrl: "",
      BGColor: "#fff",
      CardBGColor: "transparent",
      CardTextColor: '#000',
      CardTitle: "",
      CardIconUrl: "/upgradeCloud/icons/ico--target.svg",
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
      CardTextColor: '#000',
      CardTitle: "",
      CardIconUrl: "/upgradeCloud/icons/ico--target.svg",
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
      CardTextColor: '#000',
      CardTitle: "",
      CardIconUrl: "/upgradeCloud/icons/ico--target.svg",
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
      CardTextColor: '#000',
      CardTitle: "",
      CardIconUrl: "/upgradeCloud/icons/ico--target.svg",
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
      CardTextColor: '#000',
      CardTitle: "",
      CardIconUrl: "/upgradeCloud/icons/ico--target.svg",
      CardHeading: "Prosoft 2.0",
      CardDesc:
        "Customized Infor LN solution for on-site project management & inventory control to streamline operations",
      isArrow: "",
      link: [],
    },
  ];

  return (
    <>
      <EntIntro
        title="Maximize business efficiency with Infor Solution"
        desc="Solve Unique Industry Challenges with our Expertise"
        cta="Let's Connect"
        width="60%"
        video="https://gitl-usa.s3.us-west-1.amazonaws.com/banner1.mp4"
      />
      {/* Section Nav */}
      <>
        <SectionNav
          arr={[
            {
              _id: 1,
              title: "Infor Expertise",
              link: "#InforExpertise",
            },
            {
              _id: 2,
              title: "Services",
              link: "#Services",
            },
            {
              _id: 3,
              title: "Add-Ons",
              link: "#AddOns",
            },
            {
              _id: 4,
              title: "Industry Spotlight",
              link: "#IndustrySpotlight",
            },

            {
              _id: 5,
              title: "Why Us",
              link: "#WhyUs",
            },
          ]}
        />
      </>

      {/* Overview  */}
      <OverviewSection Text={`20+ years of Infor partnership and APAC's largest Infor implementation experience, empowers us to drive growth-focused operations globally.`} />

      <SectionWrapper
        BGColor="#5F22D9"
      >
        <div className="md:container mx-auto">
          <div className="grid grid-cols-2 gap-20">
            <div className="">
              <SectionHeading
                Heading={'Our Infor Capabilities'}
                Desc={`Delivering tailored business-fit Infor solutions and support for optimal business performance.`}
                Color={'white'}
                headingContainerWidth={'w-full'}
              ></SectionHeading>

              <div>
                <div className="text-[28px] font-semibold text-white">
                  Infor CloudSuite
                </div>

                <div className="my-5">
                  {offeringLinkListData.map((item) => (
                    <div key={item?.id} className="flex items-center justify-center py-6 text-[24px] font-medium text-white" style={{ borderBottom: '2px solid white', cusror: 'pointer' }}>
                      {item?.beforeIconUrl && <svg xmlns="http://www.w3.org/2000/svg" style={{ marginRight: '20px' }} width="33" height="33" viewBox="0 0 32 33" fill="none">
                        <path d="M21.3331 11.1563V7.15625L25.3331 3.15625L26.6664 5.82292L29.3331 7.15625L25.3331 11.1563H21.3331ZM21.3331 11.1563L15.9998 16.4895M29.3332 16.4896C29.3332 23.8534 23.3636 29.8229 15.9998 29.8229C8.63604 29.8229 2.6665 23.8534 2.6665 16.4896C2.6665 9.12579 8.63604 3.15625 15.9998 3.15625M22.6665 16.4896C22.6665 20.1715 19.6817 23.1563 15.9998 23.1563C12.3179 23.1563 9.33317 20.1715 9.33317 16.4896C9.33317 12.8077 12.3179 9.82292 15.9998 9.82292" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>}
                      <span className="w-full text-[20px] font-normal">{item.text}</span>
                      {item?.isArrowIconVisiable && <svg className="w-[24px] h-[24px] ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                      </svg>}
                    </div>
                  ))}
                </div>

              </div>
            </div>
            <div className="flex items-center" style={{ justifyContent: 'center' }}>
              <div className="" style={{ maxHeight: '600px', overflow: 'hidden' }}>
                <img src="https://fastly.picsum.photos/id/1/5000/3333.jpg?hmac=Asv2DU3rA_5D1xSe22xZK47WEAN0wjWeFOhzd13ujW4"></img>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <div className="InforSliderWrapper rounded-3xl" style={{backgroundColor:'white', zindex: "2",position:'relative'}}>
        <div className="flex md:py-10 px-10 container" style={{justifyContent:'center', alignItems:'center'}}>
          <div className="w-2/12">
          <Image className="rounded-t-lg" width={130} height={130} src="/icons/inforlogo.svg" alt="inforlogo" />
          </div>
          <div className="w-10/12">
            <Swiper
              slidesPerView={6}
              navigation={false}
              pagination={{ type: "bullets", clickable: true }}
              autoplay={true}
              loop={false}
              spaceBetween={30}
            >
              {[1,2,3,4,5,6,7,8,9]?.map((item, index) => (
                <SwiperSlide key={item}>
                  <div className="w-fullbg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                      <Image className="rounded-t-lg" width={100} height={50} src="" alt="" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>


      <CommonCardThreeSlider
        ID={''}
        sectionImageUrl={''}
        sectionBGColor={'#1D162B'}
        sectionHeading={'Service Offerings'}
        sectionDesc={"With extensive experience of domains and Infor solutions, we offer services to meet the growth requirements of business."}
        sectionTextColor={'#fff'}
        cardData={serviceOfferingData}
      >

      </CommonCardThreeSlider>


      <SectionWidthSlider
        ID={"ultimateChoiceData"}
        sectionHeading={"Infor Accelerators"}
        sectionDesc={
          "Enhancing the features of business applications, our easily integrating specialized solutions intend to add value to business with handy support."
        }
        sectionTextColor=""
        cardData={ultimateChoiceData}
        sectionBGColor="#EFE9FB"
        setHeadingLayout="horizontal"

      />

      <IndustrySpotlight cardData={INDUSTRY_SPOTLIGHT} />

      <HubExpertise
        setHeading="Hub of Expertise"
        setDesc="We are here to build a competitive edge with technological brilliance for businesses across the world."
        setColor="#ffffff"
        counters={HUBEXPERTISE_COUNTER_DATA}
        columnNo={3}
      />

      <CaseStudiesSection casestudy={CASE_STUDIES_DATA} csLayout={"1"} bgColor={'#D3D3D3'} />


       {/* Start-Section--Blog======================================================================= */}
      <BlogSection
        ID={"blog"}
        blogImageUrl={blogImageUrl}
        Heading={"How Infor CloudSuite Streamlines Industry-Specific Processes"}
        Desc={
          "Many organizations struggle with inefficient processes, siloed data, and outdated technology, hindering their ability to innovate and grow. That's where Infor CloudSuite comes in – a powerful, industry-specific cloud ERP solution designed to streamline processes, enhance productivity, and drive business success."
        }
        Color={"white"}
        readMoreUrl={"https://www.godrejinfotech.com/blogDetails.aspx?blog=7"}
      ></BlogSection>
      {/* End-Section--Blog======================================================================= */}


      <DistinctiveSection DistinctiveData={distinctiveData}
        ID={'Distinctive'} Title={'The Distinctive Edge'} Desc={'Delivering complex global transformations through solution-focused approach, domain expertise & value-added services.'}
      >
      </DistinctiveSection>
      <ReviewSliderSection
      ID={"TESTIMONIALS"}
      Heading={"Delighted customers share their successful experience"}
      Desc={''}
      Color="#ffffff"
      CardDataList={TESTIMONIAL_DATA}
      BGColor="#1D162B"
      SectionHeadingMaxWidth={'70%'}
    ></ReviewSliderSection>
<TransformBusinessForm
        Title={"Are you Ready for Infor-driven growth? "}
        Desc={
          "Let's get started!"
        }
      ></TransformBusinessForm>

    </>
  );
};

export default Page;
