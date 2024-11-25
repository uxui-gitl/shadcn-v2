"use client";
import EntIntro from "@/components/EntIntro";
import SectionWrapperNew from "@/components/SectionWrapperNew";
import OverviewSection from "@/sections/overview/OverviewSection";
import BenefitSliderSection from "@/sections/benefitSlider/BenefitSliderSection";
import IndustrySpotlight from "@/sections/industry-spotlight/industrySpotlight";
import CaseStudiesSection from "@/sections/case-studies/CaseStudiesSection";
import BlogSection from "@/sections/blog/BlogSection";
import AcceleratorSection from "@/sections/accelerator/AcceleratorSection";
import DistinctiveSection from "@/sections/distinctive/DistinctiveSection";
import ReviewSliderSection from "@/sections/reviewSlider/ReviewSliderSection";
import TransformBusinessForm from "@/sections/transformBusinessFrom/TransformBusinessFromSection";
import Image from "next/image";
import { Tabs } from "@/components/ui/tabs";
import LeftHeading from "@/components/LeftHeading";

const page = () => {
  const tabs = [
    {
      title: "Financial Management",
      value: "Financial Management",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-3xl text-heading-04 text-black font-bold bg-[#5F22D9]">
          <FinancialManagementContent />
        </div>
      ),
    },
    {
      title: "Supply Chain",
      value: "Supply Chain",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-3xl text-heading-01 leading-heading-01 text-black font-bold bg-[#5F22D9]">
          <SupplyChainContent />
        </div>
      ),
    },
    {
      title: "Sales and Marketing",
      value: "Sales and Marketing",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-3xl text-heading-01 leading-heading-01 text-black font-bold bg-[#5F22D9]">
          <SalesMarketingContent />
        </div>
      ),
    },
    {
      title: "Project Management",
      value: "Project Management",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-3xl text-heading-01 leading-heading-01 font-bold text-black bg-[#5F22D9]">
          <ProjectManagementContent />
        </div>
      ),
    },
    {
      title: "Service Management",
      value: "Service Management",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-3xl text-heading-01 leading-heading-01 font-bold text-black bg-[#5F22D9]">
          <ServiceManagementContent />
        </div>
      ),
    },
  ];

  const benifitsCardsData = [
    {
      id: "1",
      icon: "/businessCentral/benefits/Automateworkflows.svg",
      cardDesc:
        "Automate workflows, streamline processes and enhance productivity",
    },
    {
      id: "2",
      icon: "/businessCentral/benefits/Configurecustomizable.svg",
      cardDesc: "Configure customizable dashboards, reports and workflows",
    },
    {
      id: "3",
      icon: "/businessCentral/benefits/Accessbusiness.svg",
      cardDesc: "Access business apps anywhere, anytime via cloud mobility",
    },
    {
      id: "4",
      icon: "/businessCentral/benefits/Automatefinancial.svg",
      cardDesc:
        "Automate financial processes and reconcile accounts in real-time",
    },
    {
      id: "5",
      icon: "/businessCentral/benefits/Streamlinesales.svg",
      cardDesc: "Streamline sales and customer service with integrated CRM",
    },
    {
      id: "6",
      icon: "/businessCentral/benefits/Enhancesupplychain.svg",
      cardDesc: "Enhance supply chain management with optimized inventory",
    },
    {
      id: "7",
      icon: "/businessCentral/benefits/Gaindata-driveninsights.svg",
      cardDesc: "Gain data-driven insights with advanced reporting & analytics",
    },
    {
      id: "8",
      icon: "/businessCentral/benefits/Collaborateseamlessly.svg",
      cardDesc: "Collaborate seamlessly with Microsoft Office 365 integration",
    },
    {
      id: "9",
      icon: "/businessCentral/benefits/Ensuredatasecurity.svg",
      cardDesc: "Ensure data security with multi-layered authentication",
    },
    {
      id: "10",
      icon: "/businessCentral/benefits/Scaleeffortlessly.svg",
      cardDesc: "Scale effortlessly with cloud-based deployment options",
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
      cardBGImageUrl:
        "/industry-spotlight/cards-backgrounds/card-bg--retail.png",
      cardBGColor: "#7F4EE1",
      cardHeading: "Manufacturing",
      cardDesc: "",
      isArrow: false,
      cardTextColor: "white",
    },
    {
      id: 3,
      cardBGImageUrl:
        "/industry-spotlight/cards-backgrounds/card-bg--trading-and-distribution.png",
      cardBGColor: "#7F4EE1",
      cardHeading: "Consumer Goods",
      cardDesc: "",
      isArrow: false,
      cardTextColor: "white",
    },
    {
      id: 4,
      cardBGImageUrl:
        "/industry-spotlight/cards-backgrounds/card-bg--healthcare.png",
      cardBGColor: "#EFE9FB",
      cardHeading: "Wholesale & Distribution",
      cardDesc: "",
      isArrow: false,
      cardTextColor: "white",
    },
    {
      id: 5,
      cardBGImageUrl:
        "/industry-spotlight/cards-backgrounds/card-bg--professional-services.png",
      cardBGColor: "#EFE9FB",
      cardHeading: "Retail",
      cardDesc: "",
      isArrow: false,
      cardTextColor: "white",
    },
    {
      id: 6,
      cardBGImageUrl:
        "/industry-spotlight/cards-backgrounds/card-bg--project.png",
      cardBGColor: "#EFE9FB",
      cardHeading: "Projects",
      cardDesc: "",
      isArrow: false,
      cardTextColor: "white",
    },
    {
      id: 7,
      cardBGImageUrl:
        "/industry-spotlight/cards-backgrounds/card-bg--project.png",
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
      link: "https://www.godrejinfotech.com/blogDetails.aspx?blog=20",
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

  const blogImageUrl = "/businessCentral/BlogBg.webp";

  const DISTINCTIVE_DATA = [
    {
      _id: 1,
      desc: "D365 solutions tailored to your business needs, delivered with precision",
      icon: "/businessCentral/DistinctiveEdge/D365solutionstailored.svg",
    },
    {
      _id: 2,
      desc: "Certified team ensures timely delivery, meeting deadlines with accuracy",
      icon: "/businessCentral/DistinctiveEdge/Certifiedteamensures.svg",
    },
    {
      _id: 3,
      desc: "Dedicated in-house support team for prompt assistance",
      icon: "/businessCentral/DistinctiveEdge/Dedicatedinhouse.svg",
    },
    {
      _id: 4,
      desc: "Experience in seamless integration of Business Central with CRM, E-commerce and more",
      icon: "/businessCentral/DistinctiveEdge/ExperienceInSeamless.svg",
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
        title="Achieve Better Business Results, Smartly with D365 Business Central"
        desc="Simplify financial management and automate operations with our certified experts, successful implementation and upgrade experience."
        cta="Let's Connect"
        width="60%"
        video="/businessCentral/videos/pageBanner.mp4"
      />

      <OverviewSection
        Text={
          "A modern solution for small & medium-sized business that integrates CRM and Office 365 and offers a choice between on-premises or cloud.  "
        }
      />

      <SectionWrapperNew
        sectionHeading="Key Capabilities"
        sectionDesc="Embrace a modern, efficient and cost-effective approach to managing your business right on your fingertips."
        sectionTextColor="#000"
        sectionHeadingLayout="center"
        style={{ backgroundColor: "#f2f2f2" , paddingBottom:"8rem"}}
        setTop={false}
      >
        <div className="h-[70vh] lg:h-[100vh] [perspective:1000px] relative b flex flex-col mx-auto w-full  items-start justify-start my-0">
          <Tabs
            activeTabClassName="!bg-[#cccccc] !text-[#fff]"
            contentClassName="!mt-5"
            tabClassName="!px-4 hover:bg-[#ccc] "
            containerClassName="!my-2"
            tabs={tabs}
          />
        </div>
      </SectionWrapperNew>

      {/* benifits slider */}

      <BenefitSliderSection
        ID={"AIOfferings"}
        sectionBGColor={"bg-primary-900"}
        sectionHeading={"D365 Business Central Benefits"}
        sectionDesc={
          "Experience the power of unified business management, from financials to supply chain management."
        }
        sectionTextColor={"white"}
        cardData={benifitsCardsData}
      ></BenefitSliderSection>

      <IndustrySpotlight
        cardData={INDUSTRY_SPOTLIGHT}
        sectionDesc={
          "Driving growth across various business sectors with scalable Business Central expertise."
        }
      />

      <CaseStudiesSection
        casestudy={CASE_STUDIES_DATA}
        csLayout={"1"}
        bgColor={"bg-neutral-light-grey"}
      />

      <BlogSection
        ID={"blog"}
        blogImageUrl={blogImageUrl}
        Heading={"D365 Finance & Operations or Business Central?"}
        Desc={
          "Which business would not like to experience outstanding growth within a short span of time? But is that even feasible in this fast-paced world? "
        }
        Color={"text-neutral-white"}
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
        Color="text-neutral-white"
        CardDataList={TESTIMONIAL_DATA}
        BGColor="bg-primary-900"
        SectionHeadingMaxWidth={"70%"}
        setHeadingLayout={'left'}
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

const FinancialManagementContent = () => {
  const FMC_DATA = [
    {
      title: "Financial Data Consolidation:",
      description:
        "Transfer general ledger entries from two or more companies (subsidiaries) into a consolidated company.",
    },
    {
      title: "Built-in Power BI Dashboards:",
      description:
        "Visualize real-time financial performance data to identify patterns and trends with precision.",
    },
    {
      title: "Process Streamlining:",
      description:
        "Streamline essential accounting processes, such as accounts receivable and payable, Fixed Assets, Cash & Bank Management, Taxation ensuring automatic reconciliation.",
    },
    {
      title: "Data Modeling and Analysis:",
      description:
        "Conduct multi-dimensional data analysis and improve forecasting accuracy.",
    },
    {
      title: "Customized Reporting:",
      description:
        "Easily customize and share reports, featuring seamless Excel integration.",
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
      <div className="p-5">
        <div
          className={`text-heading-03 font-semibold text-neutral-white`}
        >
          {"Financial Management"}
        </div>
        <div className="py-5">
        <ul className="text-body-01 leading-body-01 text-white font-normal">
      {FMC_DATA.map((item, index) => (
        <li key={index} className="mb-3">
          <h3 className="text-body-01 font-semibold">{item.title}</h3>
          <p className="text-base">{item.description}</p>
        </li>
      ))}
    </ul>
        </div>
      </div>
      <div
        className="relative w-full invisible md:visible"
        style={{
          backgroundImage: `url(/businessCentral/keyCapabilities/FinancialManagement.webp)`,
          backgroundSize: "cover",
        }}
      ></div>
    </div>
  );
};

const SupplyChainContent = () => {
  const SC_DATA = [
    {
      title: "Automated Stock Management:",
      description:
        "Receive automated suggestions for inventory replenishment, based on calculations of stock levels, lead times and reorder points.",
    },
    {
      title: "Approval Workflow:",
      description:
        "Prevent unnecessary purchases and avoid vendor overdue penalties with a structured approval workflow.",
    },
    {
      title: "Built-in Intelligence:",
      description:
        "Make informed inventory replenishment decisions using sales forecasts and anticipated stock-outs.",
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
      <div className="p-5">
        <div
          className={`text-heading-03 font-semibold text-neutral-white`}
        >
          {"Supply Chain"}
        </div>
        <div className="py-5">
        <ul className="text-body-01 leading-body-01 text-white font-normal">
        {SC_DATA.map((item, index) => (
          <li key={index} className="mb-3">
            <h3 className="text-body-01 font-semibold">{item.title}</h3>
            <p className="text-base">{item.description}</p>
          </li>
        ))}
       </ul>
        </div>
      </div>
      <div
        className="relative w-full invisible md:visible"
        style={{
          backgroundImage: `url(/businessCentral/keyCapabilities/supplyChain.webp)`,
          backgroundSize: "cover",
        }}
      ></div>
    </div>
  );
};




const SalesMarketingContent = () => {
  const SALES_MKT_DATA = [
    {
      title: "Client Interaction Tracking:",
      description:
        "Gain automated guidance on optimal upsell, cross-sell and renewal opportunities by tracking historical client data.",
    },
    {
      title: "Efficient Sales Process:",
      description:
        "Streamline the quote-to-cash sales process and manage service requests directly through Outlook integration.",
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
      <div className="p-5">
        <div
          className={`text-heading-03 font-semibold text-neutral-white`}
        >
          {"Sales Marketing"}
        </div>
        <div className="py-5">
        <ul className="text-body-01 leading-body-01 text-white font-normal">
        {SALES_MKT_DATA.map((item, index) => (
          <li key={index} className="mb-3">
            <h3 className="text-body-01 font-semibold">{item.title}</h3>
            <p className="text-base">{item.description}</p>
          </li>
        ))}
       </ul>
        </div>
      </div>
      <div
        className="relative w-full invisible md:visible"
        style={{
          backgroundImage: `url(/businessCentral/keyCapabilities/SalesMarketing.webp)`,
          backgroundSize: "cover",
        }}
      ></div>
    </div>
  );
};


const ProjectManagementContent = () => {

const PM_DATA = [
  {
    title: "Timesheets:",
    description:
      "Manage client projects with advanced job costing and reporting capabilities, while tracking timesheets.",
  },
  {
    title: "Invoice Tracking:",
    description:
      "Keep tabs on client invoicing in relation to planned costs on orders and quotes.",
  },
  {
    title: "Real-Time Insights:",
    description:
      "Monitor real-time project status, profitability and resource usage metrics.",
  },
];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
      <div className="p-5">
        <div
          className={`text-heading-03 font-semibold text-neutral-white`}
        >
          {"Project Management"}
        </div>
        <div className="py-5">
        <ul className="text-body-01 leading-body-01 text-white font-normal">
        {PM_DATA.map((item, index) => (
          <li key={index} className="mb-3">
            <h3 className="text-body-01 font-semibold">{item.title}</h3>
            <p className="text-base">{item.description}</p>
          </li>
        ))}
       </ul>
        </div>
      </div>
      <div
        className="relative w-full invisible md:visible"
        style={{
          backgroundImage: `url(/businessCentral/keyCapabilities/projectManagement.webp)`,
          backgroundSize: "cover",
        }}
      ></div>
    </div>
  );
};



const ServiceManagementContent = () => {
  const SERVICE_MGMT_DATA = [
    {
      title: "Planning and dispatching:",
      description:
        "Assign personnel, log work order details and manage dispatch. Gain an overview of service task prioritization, service loads, and task escalations.",
    },
    {
      title: "Service contract management:",
      description:
        "Agree on service levels, track contract history, renewal and warranties. Manage details, measure profitability and generate quotes.",
    },
    {
      title: "Service Item Management:",
      description:
        "Manage service items comprehensively, recording contracts, components, BOM, and warranty data, analysing key performance indicators efficiently.",
    },
    {
      title: "Service Order Management:",
      description:
        "Handle post-sales issues, service requests, and manage equipment loans; let customers initiate or auto-create requests based on agreements.",
    },
    {
      title: "Service Price Management:",
      description:
        "Establish, track, and adjust prices with automated assignment based on criteria for profitability insights.",
    },
    {
      title: null,
      description: "Country specific tax localization expertise",
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
      <div className="p-5 overflow-y-scroll">
        <div
          className={`text-heading-03 font-semibold text-neutral-white`}
        >
          {"Service Management"}
        </div>
        <div className="py-5">
        <ul className="text-body-01 leading-body-01 text-white font-normal">
        {SERVICE_MGMT_DATA.map((item, index) => (
          <li key={index} className="mb-3">
            <h3 className="text-body-01 font-semibold">{item.title}</h3>
            <p className="text-base">{item.description}</p>
          </li>
        ))}
       </ul>
        </div>
      </div>
      <div
        className="relative w-full invisible md:visible"
        style={{
          backgroundImage: `url(/businessCentral/keyCapabilities/serviceManagement.webp)`,
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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
   <div className="p-5">
   {data.map((item) => (
          <>
            <div
              className="list text-body-01 leading-body-01 py-4 flex justify-between"
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
        className="relative w-full invisible md:visible"
        style={{
          backgroundImage: `url(/homeNew/tab1.svg)`,
          backgroundSize: "cover",
        }}
      ></div>
    </div>
  );
};

export default page;
