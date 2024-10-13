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
import Image from "next/image";
import { Tabs } from "@/components/ui/tabs";
import LeftHeading from "@/components/LeftHeading";


const page = () => {

  const tabs = [
    {
      title: "Services",
      value: "services",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-3xl text-xl md:text-4xl font-bold text-black bg-[#5F22D9]">
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
          <IndustryContent />
        </div>
      ),
    },
  ];

  const benifitsCardsData = [
    {
      id: '1',
      icon: "benefisIntelligentTechnologies/AutomationRepetitiveTasks",
      cardDesc: 'Automate workflows, streamline processes and enhance productivity'
    },
    {
      id: '2',
      icon: "benefisIntelligentTechnologies/AutomationRepetitiveTasks",
      cardDesc: 'Configure customizable dashboards, reports and workflows'
    },
    {
      id: '3', icon: "benefisIntelligentTechnologies/AutomationRepetitiveTasks",
      cardDesc: 'Access business apps anywhere, anytime via cloud mobility'
    },
    {
      id: '4', icon: "benefisIntelligentTechnologies/AutomationRepetitiveTasks",
      cardDesc: 'Automate financial processes and reconcile accounts in real-time'
    },
    {
      id: '5', icon: "benefisIntelligentTechnologies/AutomationRepetitiveTasks",
      cardDesc: 'Streamline sales and customer service with integrated CRM'
    },
    {
      id: '6', icon: "benefisIntelligentTechnologies/AutomationRepetitiveTasks",
      cardDesc: 'Enhance supply chain management with optimized inventory'
    },
    {
      id: '7', icon: "benefisIntelligentTechnologies/AutomationRepetitiveTasks",
      cardDesc: 'Gain data-driven insights with advanced reporting & analytics'
    },
    {
      id: '8', icon: "benefisIntelligentTechnologies/AutomationRepetitiveTasks",
      cardDesc: 'Collaborate seamlessly with Microsoft Office 365 integration'
    },
    {
      id: '9', icon: "benefisIntelligentTechnologies/AutomationRepetitiveTasks",
      cardDesc: 'Ensure data security with multi-layered authentication'
    },
    {
      id: '10', icon: "benefisIntelligentTechnologies/AutomationRepetitiveTasks",
      cardDesc: 'Scale effortlessly with cloud-based deployment options'
    },
  ];

  const INDUSTRY_SPOTLIGHT = [
    {
      id: 1,
      cardBGImageUrl:
        "/industry-spotlight/cards-backgrounds/card-bg--manufacturing.png",
      cardBGColor: "#7F4EE1",
      cardHeading: "Food & Beverage",
      cardDesc: "",
      isArrow: false,
      cardTextColor: "white",
    },
    {
      id: 2,
      cardBGImageUrl: "/industry-spotlight/cards-backgrounds/card-bg--retail.png",
      cardBGColor: "#7F4EE1",
      cardHeading: "Manufacturing",
      cardDesc: "",
      isArrow: false,
      cardTextColor: "white",
    },
    {
      id: 3,
      cardBGImageUrl: "/industry-spotlight/cards-backgrounds/card-bg--trading-and-distribution.png",
      cardBGColor: "#7F4EE1",
      cardHeading: "Consumer Goods",
      cardDesc: "",
      isArrow: false,
      cardTextColor: "white",
    },
    {
      id: 4,
      cardBGImageUrl: "/industry-spotlight/cards-backgrounds/card-bg--healthcare.png",
      cardBGColor: "#EFE9FB",
      cardHeading: "Wholesale & Distribution",
      cardDesc: "",
      isArrow: false,
      cardTextColor: "white",
    },
    {
      id: 5,
      cardBGImageUrl: "/industry-spotlight/cards-backgrounds/card-bg--professional-services.png",
      cardBGColor: "#EFE9FB",
      cardHeading: "Retail",
      cardDesc: "",
      isArrow: false,
      cardTextColor: "white",
    },
    {
      id: 6,
      cardBGImageUrl: "/industry-spotlight/cards-backgrounds/card-bg--project.png",
      cardBGColor: "#EFE9FB",
      cardHeading: "Projects",
      cardDesc: "",
      isArrow: false,
      cardTextColor: "white",
    },
    {
      id: 7,
      cardBGImageUrl: "/industry-spotlight/cards-backgrounds/card-bg--project.png",
      cardBGColor: "#EFE9FB",
      cardHeading: "Professional Services",
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
      heading: "D365 Business Central Project Highlights",
      description:
        "World's top-notch businesses choose Godrej Infotech for our excellent technical acumen and industry understanding.",
      link: "",
      color: "#FFFFFF",
    },
    {
      imageURL: "path/to/image1.jpg",
      title: "",
      heading: "90% Faster Reconciliation & MIS Reporting",
      description:
        "Saudi Trading Company Successfully Implements LS Central & Upgrades NAV to Business Central",
      link: "https://www.godrejinfotech.com/assets/pdf/case-studies/SaudiCompanySuccessfullyImplementsLSCentralandBusinessCentral.pdf)",
      color: "#000",
      bgCardColor: "#FFF",
    },

    {
      imageURL: "/path/to/image1.jpg",
      title: "",

      heading: "Streamlined and Efficient Operations",
      description:
        "Tyre Trading Organization in the Middle East Successfully Deploys Microsoft D365 Business Central with Servers on Azure.",
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
      heading: "Improved User Experience and Agile Operations",
      description:
        "India’s Modern Contract Manufacturing & Testing Provider Successfully Implements D365 Business Central Online in Phillipines",
      link: "https://www.godrejinfotech.com/assets/pdf/case-studies/IndiaLeadingManufacturingOrganization-BusinessCentral.pdf",
      color: "#000",
      bgCardColor: "#FFF",
    },
    // Add more case studies here...
  ];

  const blogImageUrl = "/ai-ml/blog-bg.png";

  const DISTINCTIVE_DATA = [
    {
      _id: 1,
      desc: "D365 solutions tailored to your business needs, delivered with precision",
      icon: "",
    },
    {
      _id: 2,
      desc: "Certified team ensures timely delivery, meeting deadlines with accuracy",
      icon: "",
    },
    {
      _id: 3,
      desc: "Dedicated in-house support team for prompt assistance",
      icon: "",
    },
    {
      _id: 4,
      desc: "Experience in seamless integration of Business Central with CRM, E-commerce and more",
      icon: "",
    },

  ];

  const TESTIMONIAL_DATA = [
    {
      id: 1,
      cardHeading: "Cost Savings & Faster Transactions",
      cardDesc:
        "Godrej Infotech has successfully upgraded our software from NAV 2016 to Business Central on-SaaS, including data migration. We were impressed by the expertise of their team, who not only saved us additional subscription costs but also enabled faster transactional updates.",
      designation: "Procurement Manager",
      companyName: "Indian Highway Construction Company",
    },
    {
      id: 2,
      cardHeading: "Streamlining Restaurant Sales & COGS Processes",
      cardDesc:
        "We appreciate Godrej Infotech team for successfully completing two critical projects upgrading the old ERP system to the latest SaaS solution Dynamics Business Central and implementing a cloud-based ETL process on Azure for restaurant sales and COGS processes.",
      designation: "IT Head",
      companyName: "Middle East base Popular Fast-food Chain",
    },

  ];


  return (
    <>
      <EntIntro
        title="Work Smarter, Adapt Faster & Achieve Better Results with D365 Business Central"
        desc="Simplify financial management and automate operations with our certified experts, successful implementation and upgrade experience."
        cta="Let's Connect"
        width="60%"
        video="https://gitl-usa.s3.us-west-1.amazonaws.com/banner1.mp4"
      />

      <OverviewSection
        Text={
          "A modern solution for small & medium-sized business that integrates CRM and Office 365 and offers a choice between on-premises or cloud.  "
        }
      />

      <SectionWrapperNew
        sectionHeading="Cutting-Edge Management Solutions"
        sectionDesc="We specialize in delivering cutting-edge Internet of Things (IIOT) solutions that are tailored to meet your unique needs."
        sectionTextColor='#000'
        sectionHeadingLayout="center"
        style={{ backgroundColor: '#E4E4E4' }}
      >
        <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col mx-auto w-full  items-start justify-start my-0">
          <Tabs activeTabClassName={`!bg-[#5F22D9]`} contentClassName={`!mt-20`} tabClassName={`!px-10 hover:bg-[#5F22D9]`} containerClassName={`!my-2`} tabs={tabs} />
        </div>
      </SectionWrapperNew>

      {/* benifits slider */}

      <BenefitSliderSection
        ID={'AIOfferings'}
        sectionBGColor={'#1D162B'}
        sectionHeading={'D365 Business Central Benefits'}
        sectionDesc={'Experience the power of unified business management, from financials to supply chain management.'}
        sectionTextColor={'white'}
        cardData={benifitsCardsData}
      ></BenefitSliderSection>

      <IndustrySpotlight cardData={INDUSTRY_SPOTLIGHT} sectionDesc={'Driving growth across various business sectors with scalable Business Central expertise.'} />

      <CaseStudiesSection
        casestudy={CASE_STUDIES_DATA}
        csLayout={"1"}
        bgColor={"#E4E4E4"}
      />

      <BlogSection
        ID={"blog"}
        blogImageUrl={blogImageUrl}
        Heading={"D365 Finance and Operations or Business Central?"}
        Desc={
          "Which business would not like to experience outstanding growth within a short span of time? But is that even feasible in this fast-paced world? "
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
          "Let us discuss how Business Central can help you with rapid growth."
        }
      ></TransformBusinessForm>
    </>
  );
};

const ServiceContent = () => {
  return (
    <div className="grid grid-cols-2 gap-20 h-full">
      <div className="py-10 px-10">
        <LeftHeading
        heading={'Future of Projects'}
        desc={''}
        textColor={'#FFF'}
        ></LeftHeading>

        <div className="py-2">
          <h2 className="text-[18px] text-white font-mudium">Financial Data Consolidation </h2>
          <p className="text-[16px] text-white font-normal leading-[24px]">Seamlessly consolidate data from accounting, sales, purchasing, inventory to achieve a</p>
          </div>
      </div>
      <div className="relative" style={{ backgroundImage: `url(/homeNew/tab1.svg)`, backgroundSize: 'cover' }}>
      </div>
    </div>
  );
};

const IndustryContent = () => {
  const data = [
    'Business Consulting',
    'Implementation & Global Rollout',
    'Migration & Transformation',
    'Legacy Modernisation',
    'Infrastructure as a Service',
    'Managed Services',
  ];
  return (
    <div className="grid grid-cols-2 gap-20 h-full">
      <div className="py-10 px-10">
        {data.map((item) => (
          <>
            <div className="list text-[22px] py-4 flex justify-between" style={{ borderBottom: '1px solid #d3d3d3' }}>
              {item}
              <Image width={35} height={35} src="/homeNew/chevron-right.svg" alt="char"></Image>
            </div>
          </>
        ))}

      </div>
      <div className="relative" style={{ backgroundImage: `url(/homeNew/tab1.svg)`, backgroundSize: 'cover' }}>
      </div>
    </div>
  );
};

export default page;
