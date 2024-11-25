"use client";

import React from "react";
import EntIntro from "@/components/EntIntro";
import SectionNav from "@/components/SectionNav";
import OverviewSection from "@/sections/overview/OverviewSection";
import HubExpertise from "@/sections/hub-of-expertise/HubExpertise";
import BlogSection from "@/sections/blog/BlogSection";
import DistinctiveSection from "@/sections/distinctive/DistinctiveSection";
import TransformBusinessForm from "@/sections/transformBusinessFrom/TransformBusinessFromSection";
import HighlightPromo from "@/sections/highlight-promo/HighlightPromo";
import CaseStudiesSection from "@/sections/case-studies/CaseStudiesSection";
import ChallengeSection from "@/sections/challenge/challengeSection";
import SectionWithSlider from "@/sections/sectionWithSlider/SectionWithSlider";
import ServicesCardSlider from "@/sections/services-cards-slider/ServicesCardSlider";
import BenefitSliderSection from '@/sections/benefitSlider/BenefitSliderSection';
import ReviewSliderSection from '@/sections/reviewSlider/ReviewSliderSection';

import SectionWrapperNew from '@/components/SectionWrapperNew';
import { useEffect, useState } from "react";
import OutlinedButtonWithArrow from "@/components/ui/buttons/OutlinedButtonWithArrow";
import Dialog from "@/components/Dialog";
import Image from "next/image";
const UpgradeToCloud = () => {
  const imgBgURL = "/CloudStackServices/background/bg--cloud-services.png";
  const imgBGURL_Challenges =
    "/upgradeCloud/backgrounds/bg--onprem-challenges-left.png";
  const msLogoURL =
    "/CloudStackServices/logos/logo--microsoft-solution-partner.png";
  const msAzureLogoURL =
    "/CloudStackServices/logos/logo-microsoft-azure.png";
  const yourImageUrl = "/ai-ml/AI-bgimage.jpg";

  const challengeData = [
    { id: 1, title: 'Inadequate Scalability and Availability', icon: '/icons/doubleRoundArrow.png' },
    { id: 2, title: 'Unreliable Backup Storage', icon: '/icons/doubleRoundArrow.png' },
    { id: 3, title: 'Unreliable Backup Storage', icon: '/icons/doubleRoundArrow.png' },
    { id: 4, title: 'Inadequate Data Integrity and Automation Capabilities', icon: '/icons/doubleRoundArrow.png' },
    { id: 5, title: 'Limited IT Universality and Centralized Monitoring', icon: '/icons/doubleRoundArrow.png' },
    { id: 6, title: 'High Management Costs of IT Infrastructure', icon: '/icons/doubleRoundArrow.png' },

  ]

  const TESTIMONIAL_DATA = [
    {
      id: 1,
      cardHeading: "Cloud ETL for restaurant sales and COGS process",
      cardDesc: `“Appreciation to Godrej Infotech's team for successfully completing two critical projects - upgrading the old ERP system to Dynamics Business Central on SAAS and implementing a cloud-based ETL process on Azure for restaurant sales and COGS processes. We’re experiencing significant improvements in operational efficiency.” `,
      designation: 'ERP and Business Intelligence Head',
      companyName: 'Fast food service chain',
    },
    {
      id: 2,
      cardHeading: "Cost Saving & Speedy Transactional Updates",
      cardDesc: `“Godrej Infotech has proficiently upgraded our software from NAV 2016 to Business Central on SaaS, including seamless data migration. This helped us save on subscription costs & facilitated quicker transactional updates.”`,
      designation: 'Manager IT',
      companyName:`India's leading Energy Management System and Solutions provider`,
    },
  ];

  const UPGRADE_NOW_DATA = [
    {
      id: 1,
      BGImageUrl: "",
      BGColor: "#fff",
      CardBGColor: "transparent",
      CardTextColor: 'white',
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
      CardTextColor: 'white',
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
      CardTextColor: 'white',
      CardTitle: "",
      CardIconUrl: "/upgradeCloud/icons/ico--target.svg",
      CardHeading: "Application Migration <br/>to the Cloud",
      CardDesc:
        "Scaling resources on-demand, we specialize in effective migration of applications to the cloud.",
      isArrow: "true",
      link: [],
    },

  ];

  const BENEFITS_DATA = [
    {
      _id: 1,
      icon: "benefits-ai-ml/process-analyse",
      cardDesc:
        "A high degree of accuracy and consistency in business operations.",
    },
    {
      _id: 2,
      icon: "benefits-ai-ml/anticipate-future",
      cardDesc:
        "Informed decision-making by extracting valuable insights and identifying patterns, correlation, and trends. ",
    },
    {
      _id: 3,
      icon: "benefits-ai-ml/effortless-communicate",
      cardDesc:
        "Real-time problem-solving capabilities enable minimizing disruptions and ensuring uninterrupted business operations. ",
    },
    {
      _id: 4,
      icon: "benefits-ai-ml/optimise-supply-chain",
      cardDesc:
        "Optimize supply chain management, predict maintenance need, and elevate quality control, resulting in higher productivity ",
    },
  ];

  const CASE_STUDIES_DATA = [
    {
      imageURL: "/upgradeCloud/backgrounds/CaseStudy.webp",
      title: "Case Studies",
      heading: "Elevating Customer Experience",
      description:
        "World's top-notch businesses choose us for our technical acumen as we deliver high performing solutions across different industries.",
      link: "/case-study-1",
      color: "#FFFFFF",
    },
    {
      imageURL: "",
      title: "",
      heading: "Non-government Association of Indian Industries",
      description:
        "99% uptime in saving man-days performance and 22% of capex saving after migrating to the Azure cloud environment",
      link: "/case-study-1",
      color: "#000",
      bgCardColor: "#FCE6F4",
    },

    {
      imageURL: "/path/to/image1.jpg",
      title: "",

      heading: "Coffee Brand Distributor in Egypt and Middle East",
      description:
        "Decreasing downtime and optimising system cost along with 100% data transparency through Single Cloud System",
      link: "/case-study-1",
      color: "#000",
      bgCardColor: "#EFE9FB",
    },
    {
      videoURL:"/upgradeCloud/videos/caseStudy.mp4",
      imageURL: "",
      title: "",
      heading: "Middle East-based Electrical Products Manufacturer",
      description:
        "60% cut down in development cost and business performance boost of 5 sister companies with D365 F&O Cloud implementation",
      link: "/case-study-1",
      color: "#000",
      bgCardColor: "#E1F2EF",
    },
    // Add more case studies here...
  ];
  const HUBEXPERTISE_COUNTER_DATA = [
    { start: 10, end: 50, description: "Cloud Deployments" },
    { start: 10, end: 15, description: "Cloud Certified Professionals" },
    // Add more counters as needed
  ];
  const DISTINCTIVE_DATA = [
    {
      _id: 1,
      desc: "Dedicated partner for Azure Migration Services and Managed Services across Europe, APAC, ME and USA ",
      icon: "/upgradeCloud/distinctiveEdge/dedicatedPartner.svg",
    },
    {
      _id: 2,
      desc: "Business Continuity 99.95%, on - demand scalability and best uptime performance in Industry",
      icon: "/upgradeCloud/distinctiveEdge/businessContinuity.svg",

    },
    {
      _id: 3,
      desc: "Seamless upgradation to cloud platforms such as Microsoft Azure and Amazon Web Services (AWS)",
      icon: "/upgradeCloud/distinctiveEdge/seamlessUgradation.svg",
    },
    {
      _id: 4,
      desc: "Frictionless cloud upgradation delivery",
      icon: "/upgradeCloud/distinctiveEdge/frictionlessCloud.svg",
    },
    {
      _id: 5,
      desc: "Cost-efficient and consumption-based model under single SLA",
      icon: "/upgradeCloud/distinctiveEdge/Cost-efficient.svg",
    },
  ];
  const reviewCardData = [
    {
      id: 1,
      cardHeading: "Cloud ETL for restaurant sales and COGS process",
      cardDesc: 'Appreciation to Godrej&apos;s Infotech team for successfully completing two critical projects - upgrading the old ERP system to Dynamics Business Central on SAAS and implementing a cloud-based ETL process on Azure for restaurant sales and COGS processes. We Are_You_Serious experiencing significant improvements in operational efficiency.'
    },
    {
      id: 2,
      cardHeading: "Cost Saving & Speedy Transactional Updates",
      cardDesc: 'Godrej Infotech has proficiently upgraded our software from NAV 2016 to Business Central on SaaS, including seamless data migration. This helped us save on subscription costs & facilitated quicker transactional updates.'
    },

  ];
  const SERVICE_CARDS_DATA = [
    {
      title: "Infrastructure & Data Evaluation",
      hoverTitle: "Infrastructure & Data Evaluation",
      description: "Assess migration readiness, identify risks and create solid plan. A clear path to a successful transition",
      content: "Additional content for Card 1",
      imageURL: '/upgradeCloud/Infra.webp'
    },
    {
      title: "Strategy Designing",
      hoverTitle: "Strategy Designing",
      description: "Align business needs & goals, set KPIs and build a tailored strategy for successful cloud adoption",
      content: "Additional content for Card 2",
      imageURL: '/upgradeCloud/Stratergy.webp'
    },
    {
      title: "Blueprint Development",
      hoverTitle: "Blueprint Development",
      description: "Define and prioritize tasks, align assets, establish milestones, iterations and timelines for upgradation journey.",
      content: "Additional content for Card 3",
      imageURL: '/upgradeCloud/Blueprint.webp'
    },
    {
      title: "Establishing Readiness",
      hoverTitle: "Establishing Readiness",
      description: "Expanding the landing zone blueprint and adequately preparing well-designed cloud environment.  ",
      content: "Additional content for Card 4",
      imageURL: '/upgradeCloud/Establishing.webp'
    },
    {
      title: "Upgrade and Execute",
      hoverTitle: "Upgrade and Execute",
      description: "Assess readiness, refactor IT architecture, rehost, and implement changes to achieve desired outcomes.",
      content: "Additional content for Card 5",
      imageURL: '/upgradeCloud/Upgrade.webp'
    },
    {
      title: "Management and Control",
      hoverTitle: "Management and Control",
      description: "Optimize costs, mitigate risks, define policies, standardize processes & ensure governance, resources & security. ",
      content: "Additional content for Card 5",
      imageURL: '/upgradeCloud/managementControl.webp'
    },
    // Add more cards here...
  ];
  const CHALLENGES_LIST_DATA = [
    { id: 1, title: "Inadequate Scalability and Availability", icon: '/upgradeCloud/icons/challengesIcon.svg' },
    { id: 2, title: "Unreliable Backup Storage", icon: '/upgradeCloud/icons/challengesIcon.svg' },
    { id: 3, title: "Weak Disaster Recovery and Redundancy", icon: '/upgradeCloud/icons/challengesIcon.svg' },
    { id: 4, title: "Inadequate Data Integrity", icon: '/upgradeCloud/icons/challengesIcon.svg' },
    { id: 5, title: "Lack of Automation Capabilities", icon: '/upgradeCloud/icons/challengesIcon.svg' },
    { id: 6, title: "Subpar IT Performance", icon: '/upgradeCloud/icons/challengesIcon.svg' },
    { id: 7, title: "Limited Centralized Monitoring", icon: '/upgradeCloud/icons/challengesIcon.svg' },
    { id: 8, title: "High IT Infrastructure Management Cost", icon: '/upgradeCloud/icons/challengesIcon.svg' },
  ];
  const benifitsCardsData = [
    { id: '1', cardDesc: 'Minimize operational expenses of IT portfolio', icon:'/upgradeCloud/benefits/minimizeOperational.svg' },
    { id: '2', cardDesc: 'Enable user concurrency to support large-scale workloads', icon:'/upgradeCloud/benefits/enableUser.svg'},
    { id: '3', cardDesc: 'Enhanced collaboration through cross-device accessibility to information', icon:'/upgradeCloud/benefits/enhanced.svg'},
    { id: '4', cardDesc: 'Advanced data management solutions, modernized process and cloud services', icon:'/upgradeCloud/benefits/advancedData.svg'},
    { id: '5', cardDesc: 'Aptitude to respond to shifting business requirements', icon:'/upgradeCloud/benefits/aptitude.svg' },
    { id: '6', cardDesc: 'Integrate Big Data Analytics into business processes for data-driven decision-making', icon:'/upgradeCloud/benefits/integrateBig.svg' },
    { id: '7', cardDesc: 'Securely stores confidential business information', icon:'/upgradeCloud/benefits/securelyStores.svg' },
    { id: '8', cardDesc: 'Enhance system performance and user experience by scaling up the system', icon:'/upgradeCloud/benefits/enhanceSystem.svg' },
    { id: '9', cardDesc: 'Accelerate transformation, integrate open innovation and smart workflows', icon:'/upgradeCloud/benefits/accelerate.svg' },
  ]
  const blogImageUrl = "/upgradeCloud/backgrounds/Blog.webp";

  const [showModal1, setshowModal1] = useState(false);
  const [showModal2, setshowModal2] = useState(false);
  const [showModal3, setshowModal3] = useState(false);


  const [tabSection1, setTabSection1] = useState(true);
  const [tabSection2, setTabSection2] = useState(false);
  const [tabSection3, setTabSection3] = useState(false);

  const [tab1Active, setTab1Active] = useState(true);
  const [tab2Active, setTab2Active] = useState(false);
  const [tab3Active, setTab3Active] = useState(false);

  function tabsClickHandle(id) {
    if (id == 1) {
      setTab1Active(true);
      setTab2Active(false);
      setTab3Active(false);
      setTabSection1(true);
      setTabSection2(false);
      setTabSection3(false);


    } else if(id == 2) {
      setTab1Active(false);
      setTab2Active(true);
      setTab3Active(false);
      setTabSection1(false);
      setTabSection2(true);
      setTabSection3(false);
    }

    else{
      setTab1Active(false);
      setTab2Active(false);
      setTab3Active(true);
      setTabSection1(false);
      setTabSection2(false);
      setTabSection3(true);
    }
  }

  // mmodal 1


  return (
    <>

      <Dialog
        shouldShow={showModal1}
        onRequestClose={() => {
          setshowModal1((prev) => !prev);
        }}
        title="Lift and Shift to Cloud"
      >
        <div className="">
          <div className="mb-4 border-b border-gray-200">
            <ul className="flex flex-wrap -mb-px text-sm font-medium text-center">
              <>
                <li className="me-2">
                  <button
                    onClick={() => tabsClickHandle(1)}
                    className={`inline-block p-4 border-gray-200 border-b-2 rounded-t-lg ${tab1Active == true
                      ? "text-indigo-500 border-b-indigo-500"
                      : "text-slate-950"
                      }`}
                  >
                    {`Migrate email to cloud`}
                  </button>
                </li>
                <li className="me-2">
                  <button
                    onClick={() => tabsClickHandle(2)}
                    className={`inline-block p-4 border-gray-200 border-b-2 rounded-t-lg ${tab2Active == true
                      ? "text-indigo-500 border-b-indigo-500"
                      : "text-slate-950"
                      }`}
                  >
                    {`Migrate and or Upgrade Infrastructure to Cloud`}
                  </button>
                </li>
              </>
            </ul>
          </div>
          <div>
            {/* tab1 */}
            {tabSection1 && (
              <div className="p-4 rounded-lg bg-gray-50">

                <div className="grid grid-cols-2 gap-4">
                  <ul className="py-6 space-y-4 text-gray-500 list-disc list-inside ">
                    <li>
                    Migrate from GSuite to M 365
                      <ol className="ps-5 mt-2 space-y-1 list-decimal list-inside">
                        <li>Gobal collaboration capabilities  </li>
                        <li>Realize cost savings   </li>
                        <li>Hassle-free transition for the entire organization </li>
                      </ol>
                    </li>
                    <li>
                    On-premises emails to O 365 Cloud 
                      <ul className="ps-5 mt-2 space-y-1 list-decimal list-inside">
                        <li>Communication infrastructure modernization  </li>
                        <li>Reinforcement of email system security   </li>
                        <li>Scalability in communication resources management   </li>

                      </ul>
                    </li>
                  </ul>

                  <ul className="py-6 space-y-4 text-gray-500 list-disc list-inside ">
                    <li>
                    Migrate M365 / O365 
                      <ol className="ps-5 mt-2 space-y-1 list-decimal list-inside">
                        <li>Transition of O365 emails hosted by GoDaddy on Federation tenant  </li>
                        <li>Migration to a customer-owned tenant    </li>
                        <li>Easy expansion and scalability </li>
                        <li>Support throughout migration journey </li>
                      </ol>
                    </li>
                  </ul>
                </div>
              </div>
            )}
            {/* tab2 */}
            {tabSection2 && (
              <div className="p-4 rounded-lg bg-gray-50">
                <div className="grid grid-cols-2 gap-4">
                  <ul className="py-6 space-y-4 text-gray-500 list-disc list-inside ">
                  <li>Minimize downtime for seamless business operations </li>
                   <li>Enable digital transformation of processes </li>
                   <li>Improve customer and employee experiences </li>
                   <li>Optimize overall performance </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </Dialog>

      {/* modal 2 */}
      <Dialog
        shouldShow={showModal2}
        onRequestClose={() => {
          setshowModal2((prev) => !prev);
        }}
        title="ERP on Cloud"
      >
        <div className="">
          <div className="mb-4 border-b border-gray-200">
            <ul className="flex flex-wrap -mb-px text-sm font-medium text-center">
              <>
                <li className="me-2">
                  <button
                    onClick={() => tabsClickHandle(1)}
                    className={`inline-block p-4 border-gray-200 border-b-2 rounded-t-lg ${tab1Active == true
                      ? "text-indigo-500 border-b-indigo-500"
                      : "text-slate-950"
                      }`}
                  >
                    {`AX Upgrade`}
                  </button>
                </li>
                <li className="me-2">
                  <button
                    onClick={() => tabsClickHandle(2)}
                    className={`inline-block p-4 border-gray-200 border-b-2 rounded-t-lg ${tab2Active == true
                      ? "text-indigo-500 border-b-indigo-500"
                      : "text-slate-950"
                      }`}
                  >
                    {`Nav Upgrade `}
                  </button>
                </li>
                <li className="me-2">
                  <button
                    onClick={() => tabsClickHandle(3)}
                    className={`inline-block p-4 border-gray-200 border-b-2 rounded-t-lg ${tab3Active == true
                      ? "text-indigo-500 border-b-indigo-500"
                      : "text-slate-950"
                      }`}
                  >
                    {`Upgrade to Infor Cloud`}
                  </button>
                </li>
              </>
            </ul>
          </div>
          <div>
            {/* tab1 */}
            {tabSection1 && (
              <div className="p-4 rounded-lg bg-gray-50">

                <div className="grid grid-cols-2 gap-4">
                  <ul className="py-6 space-y-4 text-gray-500 list-disc list-inside ">
                    <li>
                    Why Upgrade Dynamics AX?
                      <ol className="ps-5 mt-2 space-y-1 list-decimal list-inside">
                        <li>Mainstream support for Dynamics AX versions such as 2009, 2012 and 2012 R2 concluded in October 2018, while AX 2012 R3 mainstream support ended in October 2021.   </li>
                        <li>Dynamics AX is highly dependent on ISV and partner channels, which significantly impacts business return on investment (ROI).  </li>
                        <li>Dynamics AX on-premises has limited access to Cloud ERP and SaaS options. </li>
                        <li>Dynamics AX is solely accessible on desktop systems, restricting flexibility and mobility. </li>
                        <li>Risk of non-compliance for any regulatory / Tax updates for existing AX 2012 customers.</li>
                      </ol>
                    </li>
                  </ul>

                  <ul className="py-6 space-y-4 text-gray-500 list-disc list-inside ">
                    <li>
                    Competitive Benefits of AX Upgrade to Cloud
                      <ol className="ps-5 mt-2 space-y-1 list-decimal list-inside">
                        <li>Adaptive Scalability   </li>
                        <li>Elevated Customer Experience  </li>
                        <li>Cost Effective Platform   </li>
                        <li>Minimised IT Maintenance  </li>
                        <li>Advanced Security </li>
                        <li>Modern Functionalities </li>
                        <li>Live Business Performance Monitoring </li>
                        <li>Multiple Integration Ability  </li>
                        <li>Browser based ERP  </li>
                        <li>Auto update option for cloud environments</li>
                      </ol>
                    </li>
                    
                  </ul>
                </div>
              </div>
            )}
            {/* tab2 */}
            {tabSection2 && (
              <div className="p-4 rounded-lg bg-gray-50">
                <div className="grid grid-cols-2 gap-4">
                  <ul className="py-6 space-y-4 text-gray-500 list-disc list-inside ">
                  <li>
                  Why Upgrade Dynamics Nav?
                      <ol className="ps-5 mt-2 space-y-1 list-decimal list-inside">
                        <li>Microsoft has discontinued updates and customizations for Dynamics NAV versions. </li>
                        <li>NAV solution experiences significant lag for basic tasks as well.  </li>
                        <li>NAV versions lack relevant features that meet the demands of modern and evolving business requirements.  </li>
                        <li>Navision doesn’t offer remote accessibility and support for resolving errors within Navision is unavailable.  </li>
                      </ol>
                    </li>
                  </ul>
                  <ul className="py-6 space-y-4 text-gray-500 list-disc list-inside ">
                  <li>
                  Competitive Benefits of Upgrading Nav to Cloud 
                      <ol className="ps-5 mt-2 space-y-1 list-decimal list-inside">
                        <li>Built-in capabilities of AI and machine learning </li>
                        <li>Enhanced reporting and analytics functionalities   </li>
                        <li>Mobile and web access, anywhere, anytime   </li>
                        <li>Higher security features   </li>
                        <li>Optimised operation </li>
                        <li>User management cost effectively   </li>

                      </ol>
                    </li>
                  </ul>
                </div>
              </div>
            )}
            {/* tab3 */}
            {tabSection3 && (
              <div className="p-4 rounded-lg bg-gray-50">
                <div className="grid grid-cols-2 gap-4">
                  <ul className="py-6 space-y-4 text-gray-500 list-disc list-inside ">
                  <li>
                  Infor On- premises Challenges
 
                      <ol className="ps-5 mt-2 space-y-1 list-decimal list-inside">
                        <li>Constant challenge of keeping up with the latest security and version updates. </li>
                        <li>Manual efforts required to configure dynamic workloads.   </li>
                        <li>Lack of elasticity in applications and not-so – efficient performance. </li>
                        <li>Operational activities involve manual processes, leading to increased total cost of ownership.</li>
                      </ol>
                    </li>
                  </ul>
                  <ul className="py-6 space-y-4 text-gray-500 list-disc list-inside ">
                  <li>
                  Competitive Benefits of Infor Cloud 
                      <ol className="ps-5 mt-2 space-y-1 list-decimal list-inside">
                        <li>Benefit from Infor Data Lake, leveraging the power of artificial intelligence (AI) and machine learning to harness predictive data insights.  </li>
                        <li>Prepackaged industry analytics equipped with deployable data models, dashboards and key performance indicators.   </li>
                        <li>Clear production visualization through industry-specific dashboards and content.   </li>
                        <li>Enriched finance functionalities encompassing IFRS 15 compliance, seamless XML support, currency variation based on payment schedule.  </li>
                        <li>Field and depot service process through extended warranty contracts and tight integration with Project Control (PCS) projects.  </li>
                       </ol>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </Dialog>

      {/* modal3 */}
      <Dialog
        shouldShow={showModal3}
        onRequestClose={() => {
          setshowModal3((prev) => !prev);
        }}
        title="Application Migration to the Cloud "
      >
        <div className="">
          <div className="mb-4 border-b border-gray-200">
            <ul className="flex flex-wrap -mb-px text-sm font-medium text-center">
              <>
                <li className="me-2">
                  <button
                    onClick={() => tabsClickHandle(1)}
                    className={`inline-block p-4 border-gray-200 border-b-2 rounded-t-lg ${tab1Active == true
                      ? "text-indigo-500 border-b-indigo-500"
                      : "text-slate-950"
                      }`}
                  >
                    {`Reasons to Migrate from On Premises 
 `}
                  </button>
                </li>
                <li className="me-2">
                  <button
                    onClick={() => tabsClickHandle(2)}
                    className={`inline-block p-4 border-gray-200 border-b-2 rounded-t-lg ${tab2Active == true
                      ? "text-indigo-500 border-b-indigo-500"
                      : "text-slate-950"
                      }`}
                  >
                    {`Move Applications to the Cloud`}
                  </button>
                </li>
              </>
            </ul>
          </div>
          <div>
            {/* tab1 */}
            {tabSection1 && (
              <div className="p-4 rounded-lg bg-gray-50">

                <div className="grid grid-cols-1 gap-4">
                  <ul className="py-6 space-y-4 text-gray-500 list-disc list-inside ">
                        <li>Higher cost of maintaining on-premises hardware. </li>
                        <li>Non scalability in sudden events of increased user demand or lower demand. </li>
                        <li>Need of ongoing maintenance and updates, which can be time-consuming and resource intensive. </li>
                        <li>Access confined to a specific physical location or data centre.  </li>
                        <li>High risks in terms of data loss and downtime during disasters or system failures. </li>
                        <li>Challenging to manage security measures and Rigidity in making changes or updates to application.  </li>
                        <li>Limited access to the modern technologies and services. </li>
                  </ul>
                </div>
              </div>
            )}
            {/* tab2 */}
            {tabSection2 && (
              <div className="p-4 rounded-lg bg-gray-50">
                <div className="grid grid-cols-1 gap-4">
                  <ul className="py-6 space-y-4 text-gray-500 list-disc list-inside ">
                  <li>Rehosting Application   </li>
                        <li>Rebuild Application    </li>
                        <li>Replace your application  </li>
                        <li>Refactor Application using containerization </li>
                        <li>Rearchitect Application  </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </Dialog>


      {/* Section--HeroBanner======================================================================= */}
      <EntIntro
        title="Cloud Upgrade Made Easy"
        desc="Enabling businesses to scale with ease, enhance productivity and protect data with security measures. "
        cta="Schedule a call with our Cloud Expert"
        width="60%"
        video="/upgradeCloud/videos/pageBanner.mp4"
      />
      {/* Section--Overview=======================================================================  */}
      <OverviewSection
        Text={
          "Minimize costs and maximize agility and security with our cloud upgrade offerings. We help enterprises to build resilience through tailored, all-inclusive cloud transformation that drives business success."
        }
      />
      {/* End-Section--Overview */}
      {/* Start--Section--Challenges======================================================================== */}
      <ChallengeSection
        setHeading="On-premises Infrastructure Challenges"
        setColor="text-neutral-white"
        setImageBGURL={imgBGURL_Challenges}
        setChallengesList={CHALLENGES_LIST_DATA}
        bgColor="#3a7398"
      />
      {/* End--Section--Challenges======================================================================== */}
      <SectionWrapperNew
        sectionHeading={"Upgrade Now"}
        sectionDesc={
          "We revamp your core business application with cloud-native development so that you can win a competitive threshold in the marketplace.."
        }
        sectionTextColor="text-neutral-white"
        sectionDescColor="text-neutral-white"
        sectionHeadingLayout="horizontal"
        bgColor={"bg-secondary-900"}
       style={{paddingTop:'rem',paddingBottom:'4rem'}}
      >
        <div className="grid grid-cols-1 md:grid-cols-3  gap-4">
          <div className="relative p-5" style={{ border: '1px solid #444444', borderRadius: '24px' }}>
            <Image className="pb-8" src={'/upgradeCloud/icons/liftAndShift.svg'} alt="" width={56} height={56} />
            <h5 className="mb-2 text-heading-02 font-semibold tracking-tight text-white">Lift and Shift
              to Cloud</h5>
            <p className="mb-8 text-body-01  text-white">Go to this step by step guideline process on how to certify for your weekly benefits:</p>


            <div className="absolute bottom-2 right-2" onClick={() => { setshowModal1((prev) => !prev); }}>
              <OutlinedButtonWithArrow arrowColor={'white'} size={24} />
            </div>
          </div>
          {/*  */}
          <div className="relative p-5" style={{ border: '1px solid #444444', borderRadius: '24px' }}>
            <Image className="pb-8" src={'/upgradeCloud/icons/ERPonCloud.svg'} alt="" width={50} height={50} />
            <h5 className="mb-2 text-heading-02 font-semibold tracking-tight text-white">ERP on Cloud</h5>
            <p className="mb-8 text-body-01 leading-body-01  text-white">Deliver enhanced business agility, operation automation and better decision-making capability with analytics.</p>
            <div className="absolute bottom-2 right-2" onClick={() => { setshowModal2((prev) => !prev); }}>
              <OutlinedButtonWithArrow arrowColor={'white'} size={24} />
            </div>
          </div>

          {/*  */}

          <div className="relative p-5" style={{ border: '1px solid #444444', borderRadius: '24px' }}>
            <Image className="pb-8" src={'/upgradeCloud/icons/applicationMigration.svg'} alt="" width={50} height={50} />
            <h5 className="mb-2 text-heading-02 font-semibold tracking-tight text-white">Application Migration to the Cloud  </h5>
            <p className="mb-8 text-body-01 leading-body-01  text-white">Scaling resources on-demand, we specialize in effective migration of applications to the cloud.
            </p>
            <div className="absolute bottom-2 right-2"  onClick={() => { setshowModal3((prev) => !prev); }}>
              <OutlinedButtonWithArrow arrowColor={'white'} size={24} />
            </div>
          </div>
        </div>

      </SectionWrapperNew>
      {/* Start--Section--UpgradeNow======================================================================== */}
      {/* <SectionWithSlider
        ID={"UPGRADE_NOW_DATA"}
        sectionHeading={"Upgrade Now"}
        sectionDesc={
          "We revamp your core business application with cloud-native development so that you can win a competitive threshold in the marketplace. "
        }
        sectionTextColor="#ffffff"
        cardData={UPGRADE_NOW_DATA}
        sectionBGColor="#2B1624"
        setHeadingLayout="horizontal"
      /> */}
      {/* End--Section--UpgradeNow======================================================================== */}
      {/* Start--Service--Section======================================================== */}
      <ServicesCardSlider cardData={SERVICE_CARDS_DATA} heading={"Cloud Upgrade<br/>Process Map"} desc={"A step-by-step guide featuring actionable workflows to ensure 99.9% uptime and no data loss."} color={"text-primary-900"} />

      {/* End--Service--Section======================================================== */}

      {/* Advantages Vertical Slider */}
      <BenefitSliderSection
        ID={'AIOfferings'}
        sectionBGColor={'bg-primary-900'}
        sectionHeading={'Upgrade to Cloud Benefits'}
        sectionDesc={'Experience business performance surge with cloud'}
        sectionTextColor={'white'}
        cardData={benifitsCardsData}
        SectionHeadingMaxWidth={'100%'}
        sectionHeaderWidth={'w-full'}
      ></BenefitSliderSection>

      {/* Section--Trained in Cloud Services= */}
      <HighlightPromo
        blurEffect="blurON"
        setHeading="We are Trained and Accredited in Cloud Services"
        setDesc="We ensure that our expertise and practices fulfil highest standards of excellence."
        setColor="text-primary-900"
        setImageBGURL={imgBgURL}
        setLogoImages=""
        setPadding={true}
        setMSLogoURL={msLogoURL}
        setMsAzureLogoURL={msAzureLogoURL}
        sectionHeaderWidth={'w-full'}
      />
      {/* End-Section--Trained in Cloud-Services */}
      {/* Section--Hub-of-Expertise=======================================================================  */}
      <HubExpertise
        setHeading="Hub of Expertise"
        setDesc="We are here to build an edge and bring technology brilliance with the finest in industry. Driving the innovation path, we develop better results for business across the globe."
        setColor="text-neutral-white"
        counters={HUBEXPERTISE_COUNTER_DATA}
        columnNo={2}
        BGColor="bg-secondary-900"
      />
      {/* End-Section--Hub-of-Expertise */}
      {/* Section--Case-Studies======================================================================= */}
      <CaseStudiesSection casestudy={CASE_STUDIES_DATA} csLayout={"1"} />
      {/* End-Section--Case-Studies */}
      {/* Section--Blog======================================================================= */}
      <BlogSection
        ID={"blog"}
        blogImageUrl={blogImageUrl}
        Heading={"Migrate your IT Infrastructure to the Cloud"}
        Desc={
          "In the current situation of cashflow challenges and low budgets to invest in IT CAPEX, companies can move to a better IT Infrastructure, which is OPEX based, scalable, secure, cost effective and above all accessible anytime from anywhere on any device. Whether you want to entirely migrate to the cloud or want to have a hybrid cloud infrastructure, Microsoft Azure is the best cloud computing service you can decide to choose. Here are the top reasons for rapid Microsoft Azure migration: "
        }
        Color={"text-primary-900"}
        
      ></BlogSection>
      {/* End-Section--Blog */}
      {/* Section--Distinctive Edge======================================================================= */}
      <DistinctiveSection
        DistinctiveData={DISTINCTIVE_DATA}
        ID={"Distinctive"}
        Title={"The Distinctive Edge"}
        Desc={"With our assessment process, delivery framework, strategic resources and data migration practice we ensure efficient performance."}
      ></DistinctiveSection>
      {/* End-Section--Distinctive Edge */}
      <ReviewSliderSection
        ID={"TESTIMONIALS"}
        Heading={"Delighted customers share their success experience"}
        Desc={''}
        Color="#ffffff"
        CardDataList={TESTIMONIAL_DATA}
        BGColor="bg-primary-900"
        SectionHeadingMaxWidth={'70%'}
        setHeadingLayout={'left'}

      ></ReviewSliderSection>

      {/* Section--TransformBusinessForm======================================================================= */}
      <TransformBusinessForm
        Title={"Transform your Business with us"}
        Desc={"Let's discuss how upgrade to cloud can help you to enhance your business's growth potential"}
      ></TransformBusinessForm>
      {/* End-Section--TransformBusinessForm */}
    </>
  );
};

export default UpgradeToCloud;