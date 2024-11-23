'use client'
import EntIntro from "@/components/EntIntro";
import OverviewSection from "@/sections/overview/OverviewSection";
import SectionWrapper from '@/components/SectionWrapper';
import SectionHeading from '@/components/SectionHeading';
import Image from "next/image";
import IndustrySpotlight from "@/sections/industry-spotlight/industrySpotlight";
import { Swiper, SwiperSlide } from "swiper/react";
import BlogSection from "@/sections/blog/BlogSection";
import AcceleratorSection from "@/sections/accelerator/AcceleratorSection";
import ReviewSliderSection from "@/sections/reviewSlider/ReviewSliderSection";
import TransformBusinessForm from '@/sections/transformBusinessFrom/TransformBusinessFromSection';
import Slider from "@/components/Slider";
import SectionWrapperNew from '@/components/SectionWrapperNew';
import { Tabs } from "@/components/ui/tabs";
import Link from "next/link";
import OutlinedButtonWithArrow from "@/components/ui/buttons/OutlinedButtonWithArrow";
import CaseStudiesSection from "@/sections/case-studies/CaseStudiesSection";





function page() {
    const blogImageUrl = "/tradingDistribution/blogBg.webp";

    const imgBgURL = "/CloudStackServices/background/bg--strategic-partnership.png";

    const CHALLENGES_LIST_DATA = [
        { id: 1, title: "Overcoming tight delivery deadline constraints", icon: '/upgradeCloud/icons/challengesIcon.svg' },
        { id: 2, title: "Mitigating supplier non-compliance risks", icon: '/upgradeCloud/icons/challengesIcon.svg' },
        { id: 3, title: "Resolving supply chain visibility gaps", icon: '/upgradeCloud/icons/challengesIcon.svg' },
        { id: 4, title: "Coping with stock management and transfer inefficiencies", icon: '/upgradeCloud/icons/challengesIcon.svg' },
        { id: 5, title: "Navigating diverse product line complexities", icon: '/upgradeCloud/icons/challengesIcon.svg' },
        
    ];

    const tabs = [
        {
            title: "Automation",
            value: "automation",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-3xl text-xl md:text-4xl font-bold text-black bg-[#FCE6F4]">
                    <AutomationContent />
                </div>
            ),
        },
        {
            title: "Cloud",
            value: "cloud",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-3xl text-xl md:text-4xl font-bold text-black bg-[#FCE6F4]">
                    <CloudContent />
                </div>
            ),
        },
        {
            title: "Transformation",
            value: "transformation",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-3xl text-xl md:text-4xl font-bold text-black bg-[#FCE6F4]">
                    <TransformationContent />
                </div>
            ),
        },
    ];

    const INDUSTRY_SPOTLIGHT = [
        {
            id: 1,
            cardBGImageUrl:
                "/industry-spotlight/cards-backgrounds/card-bg--manufacturing.png",
            cardBGColor: "#7F4EE1",
            cardHeading: "Transportation & Logistics",
            cardDesc: "",
            isArrow: false,
            cardTextColor: "white",
        },
        {
            id: 2,
            cardBGImageUrl:
                "/industry-spotlight/cards-backgrounds/card-bg--retail.png",

            cardBGColor: "#7F4EE1",
            cardHeading: "3PL Logistics",
            cardDesc:
                "",
            isArrow: false,
            cardTextColor: "white",
        },
        {
            id: 3,
            cardBGImageUrl:
                "/industry-spotlight/cards-backgrounds/card-bg--trading-and-distribution.png",

            cardBGColor: "#7F4EE1",
            cardHeading: "Warehouse",
            cardDesc:
                "",
            isArrow: false,
            cardTextColor: "white",
        },
        {
            id: 4,
            cardBGImageUrl:
                "/industry-spotlight/cards-backgrounds/card-bg--healthcare.png",

            cardBGColor: "#EFE9FB",
            cardHeading: "Wholesale & Distribution",
            cardDesc:
                "",
            isArrow: false,
            cardTextColor: "white",
        },
        {
            id: 5,
            cardBGImageUrl:
                "/industry-spotlight/cards-backgrounds/card-bg--professional-services.png",

            cardBGColor: "#EFE9FB",
            cardHeading: "Trade & Services",
            cardDesc: "",
            isArrow: false,
            cardTextColor: "white",
        },
        {
            id: 5,
            cardBGImageUrl:
                "/industry-spotlight/cards-backgrounds/card-bg--project.png",

            cardBGColor: "#EFE9FB",
            cardHeading: "Manufacturing Industry",
            cardDesc: "",
            isArrow: false,
            cardTextColor: "white",
        },
        // Add more cards as needed
    ];

    const RPASolution2 = [
        {
            id: 1,
            cardBGColor: 'white',
            cardHeading: 'Business Consulting',
            cardDesc: 'Meticulous analysis of current business operations, IT framework and accordingly develop tailored strategy for optimal business growth.',
            isArrow: false,
            cardTextColor: 'black',
            cardTopImageUrl: 'tradingDistribution/services/businessConsulting.webp',
            // cardHoverData: [
            //     'abc',
            //     'abc',
            //     'abc',
            //     'abc',
            //     'abc',
            //     'abc',
            // ]
        },
        {

            id: 2,
            cardBGColor: 'white',
            cardHeading: 'Implementation & Global Rollout',
            cardDesc: 'We ensure seamless solution execution and worldwide deployment leveraging our expertise.',
            isArrow: false,
            cardTextColor: 'black',
            cardTopImageUrl: 'tradingDistribution/services/implementation.webp',
            
        },
        {

            id: 3,
            cardBGColor: 'white',
            cardHeading: 'Managed Services',
            cardDesc: 'Helping organisations to unburden their IT operations with expert-managed services, ensuring higher efficiency.',
            isArrow: true,
            cardTextColor: 'black',
            cardTopImageUrl: 'tradingDistribution/services/managedServices.webp'
        },
        {

            id: 4,
            cardBGColor: '#E4E4E4',
            cardHeading: 'Migration & Transformation',
            cardDesc: `Effortless upgrade to advance solution and data migration for transforming business operations.`,
            isArrow: true,
            cardTextColor: 'black',
            cardTopImageUrl: 'tradingDistribution/services/migration.webp'
        },
        {

            id: 5,
            cardBGImageUrl: '/rpa/ArtboardBg.png',
            cardBGColor: '#EFE9FB',
            cardHeading: 'Legacy Modernization',
            cardDesc: 'Future-proof business by modernizing legacy systems and optimizing overall performance.',
            isArrow: true,
            cardTextColor: 'black',
            cardTopImageUrl: 'tradingDistribution/services/legacyModernization.webp'
        },

        {

            id: 6,
            cardBGImageUrl: '/rpa/ArtboardBg.png',
            cardBGColor: '#EFE9FB',
            cardHeading: 'Infrastructure as a Service',
            cardDesc: 'Stay agile and scalable with infrastructure as a service, without the obligation of managing infrastructure and hardware maintenance.',
            isArrow: true,
            cardTextColor: 'black',
            cardTopImageUrl: 'tradingDistribution/services/Infrastructure.webp'
        },

    ]

    const DATA_MGMT_DATA = [
        {
            id: 1,
            BGImageUrl: "",
            BGColor: "#fff",
            CardBGColor: "transparent",
            CardTextColor: "white",
            CardTitle: "",
            icon: "/tradingDistribution/keyCapabilities/supplyChain.svg",
            CardHeading: "Supply Chain Visibility",
            CardDesc:
                "Attain accountability and gain valuable insights into inventory, warehousing and profitability for informed decision-making.",
            isArrow: "true",
            link: [],           
        },

        {
            id: 2,
            BGImageUrl: "",
            BGColor: "#fff",
            CardBGColor: "transparent",
            CardTextColor: "white",
            CardTitle: "",
            icon: "/tradingDistribution/keyCapabilities/inventory.svg",
            CardHeading: "Inventory Optimization",
            CardDesc:
                "Maintain optimal stock levels, decrease excess inventory and optimize cash flow with ease, ensuring healthy bottom line.",
            isArrow: "true",
            link: [],
        },
        {
            id: 3,
            BGImageUrl: "",
            BGColor: "#fff",
            CardBGColor: "transparent",
            CardTextColor: "white",
            CardTitle: "",
            icon: "/tradingDistribution/keyCapabilities/streamlineSupplychain.svg",
            CardHeading: "Streamlined Supply Chain",
            CardDesc:
                "Improve coordination and automate processes for effective supply chain management and enhanced visibility.",
            isArrow: "true",
            link: [],
        },
        {
            id: 4,
            BGImageUrl: "",
            BGColor: "#fff",
            CardBGColor: "transparent",
            CardTextColor: "white",
            CardTitle: "",
            icon: "/tradingDistribution/keyCapabilities/increasedOperational.svg",
            CardHeading: "Increased Operational Efficiency",
            CardDesc:
                "Streamline processes to improve accuracy, cut down costs and drive business growth, enabling scalability.",
            isArrow: "true",
            link: [],
        },
        {
            id: 5,
            BGImageUrl: "",
            BGColor: "#fff",
            CardBGColor: "transparent",
            CardTextColor: "white",
            CardTitle: "",
            icon: "/tradingDistribution/keyCapabilities/stratergicPlanning.svg",
            CardHeading: "Strategic Planning Support ",
            CardDesc:
                "Leverage predictive analytics for effective planning and inventory management, making data-driven decisions a reality.",
            isArrow: "true",
            link: [],
        },
        {
            id: 6,
            BGImageUrl: "",
            BGColor: "#fff",
            CardBGColor: "transparent",
            CardTextColor: "white",
            CardTitle: "",
            icon: "/tradingDistribution/keyCapabilities/workforce.svg",
            CardHeading: "Workforce Productivity",
            CardDesc:
                "Provide employees with business intelligence and real-time responses to support strategic goals, enhancing collaboration.",
            isArrow: "true",
            link: [],
        },
        {
            id: 7,
            BGImageUrl: "",
            BGColor: "#fff",
            CardBGColor: "transparent",
            CardTextColor: "white",
            CardTitle: "",
            icon: "/tradingDistribution/keyCapabilities/warhouse.svg",
            CardHeading: "Warehouse Automation",
            CardDesc:
                "Implement automation solutions to improve warehouse operations and overall productivity and reducing labor costs.",
            isArrow: "true",
            link: [],
        },
        {
            id: 8,
            BGImageUrl: "",
            BGColor: "#fff",
            CardBGColor: "transparent",
            CardTextColor: "white",
            CardTitle: "",
            icon: "/tradingDistribution/keyCapabilities/financialReporting.svg",
            CardHeading: "Financial Reporting",
            CardDesc:
                "Centralize financial control and inventory management with detailed reporting for improved profitability, enabling better financial decision-making.",
            isArrow: "true",
            link: [],
        },
        {
            id: 9,
            BGImageUrl: "",
            BGColor: "#fff",
            CardBGColor: "transparent",
            CardTextColor: "white",
            CardTitle: "",
            icon: "/tradingDistribution/keyCapabilities/international.svg",
            CardHeading: "International Compliance",
            CardDesc:
                "Ensure record management, adheres to GDPR standards for global compliance, mitigating risks and protecting reputation.",
            isArrow: "true",
            link: [],
        },
        {
            id: 10,
            BGImageUrl: "",
            BGColor: "#fff",
            CardBGColor: "transparent",
            CardTextColor: "white",
            CardTitle: "",
            icon: "/tradingDistribution/keyCapabilities/vendor&customer.svg",
            CardHeading: "Vendor & Customer Management",
            CardDesc:
                "Enhance relationship, improve supplier performance and customer service with real-time insights through mobile.",
            isArrow: "true",
            link: [],
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
            imageURL: "/tradingDistribution/caseStudies.webp",
            videoURL: "",
            title: "Case Studies",
            heading: "",
            description: "Gain valuable insights on digital transformation journeys of trading & distribution businesses.",
            link: "",
            color: "#FFFFFF",
            bgCardColor: "#2B1624",
        },
        {
            imageURL: "",
            title: "",
            heading: "Significant Cost Savings & Increase in Inter-departmental Synergy",
            description:
                "Leading Distributor of Fruits & Vegetables in the Philippines Goes Live with D365 F&O Cloud Solution",
            link: "/case-study-1",
            color: "#000",
            bgCardColor: "#FCE6F4",
        },

        {
            imageURL: "/path/to/image1.jpg",
            title: "",

            heading: "Streamlined Operations and Increased Efficiency",
            description:
                "Wholesale Distribution Made Easy with Infor LN for Saudi Arabia's Largest Trading Organization.",
            link: "/case-study-1",
            color: "#000",
            bgCardColor: "#EFE9FB",
        },
    ];

    const TESTIMONIAL_DATA = [
        {
            id: 1,
            cardHeading: "Successful Implementation with Business Understanding",
            cardDesc: `Grateful for Godrej Infotech's exceptional work in implementing LN ERP. Despite itscomplexity, the process was smooth and efficient. Godrej quickly grasped ourbusiness needs, making a valuable and quality contribution to the successfulimplementation.`,
            designation: '-	Procurement Manager,',
            companyName: 'Global Supplier of Process Equipment'
        },
        {
            id: 2,
            cardHeading: "Outstanding Implementation and Support Service Delivery",
            cardDesc: `Thank you, Godrej Infotech, for outstanding service and genuine support in implementing/supporting Microsoft Dynamics NAV, LS Retail, and Payroll addon. Our Management and Project team applauds GITL's meticulous conduct, dedication, professionalism, and profound retail domain knowledge.`,
            designation: '-	Project Manager',
            companyName: 'Saudi Arabia based Superstore'
        },

    ];


    return (
        <>
            <EntIntro
                title="Efficient Operations for Trading & Distribution Businesses"
                desc="Streamlining logistics, optimizing inventory and enhancing supply chain visibility"
                cta="Let's Connect"
                width="60%"
                video="/tradingDistribution/videos/pageBanner.mp4"
            />
            <OverviewSection Text={`We offer effective solutions for trading and distribution businesses, ensuring warehouse governance, maximum perfect order fulfilment and optimized distribution operations for customers.`} />
            <SectionWrapper BGColor="bg-primary-900">
            <div className="container mx-auto py-32">
                    <SectionHeading
                        Color="text-neutral-white"
                        Heading="Knocking Business Challenges"
                        Desc=""
                     headingContainerWidth="w-1/2"
                    ></SectionHeading>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 <ul className=" space-y-4 w-full text-neutral-white">
                            {CHALLENGES_LIST_DATA.map((challenge, index) => (
                                <li
                                    key={challenge.id}
                                    className={`flex items-start py-2 border-b-[0.5px] border-neutral-white border-opacity-20 w-full ${index === CHALLENGES_LIST_DATA.length - 1 ? 'border-b-0' : ''}`}
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
                        <div>
                            {/* <img src="/about/video.png" /> */}
                        </div>
                    </div>
                </div>

            </SectionWrapper>
            {/* end challenges */}

            <SectionWrapperNew
                sectionHeading={"ACT Solution Offerings"}
                sectionDesc={"Trading and distribution businesses must adopt innovative solutions for scalable infrastructure and increased revenue growth"}
                sectionTextColor="text-primary-900"
                title="OUR OFFERINGS"
                sectionHeadingLayout="center"
                style={{ background: '#f2f2f2' }}
            >
                <div className="h-[70vh] [perspective:1000px] relative b flex flex-col mx-auto w-full  items-start justify-start my-0">
          <Tabs
            activeTabClassName="!bg-[#cccccc] !text-[#fff]"
            contentClassName="!mt-5"
            tabClassName="!px-4 hover:bg-[#ccc] "
            containerClassName="!my-2"
            tabs={tabs}
          />
        </div>
            </SectionWrapperNew>

            {/* end future section */}

            <SectionWrapperNew
                bgColor={'bg-primary-500'}
                sectionHeading="Key Capabilities"
                sectionDesc="Evolve your trading and distribution business with our expert-led digital transformation capabilities."
                sectionTextColor='text-neutral-white'
                sectionHeadingLayout="horizontal"
            >
                <Slider>
                    {DATA_MGMT_DATA?.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="p-6 bg-[transparent] border-[0.5px] border-white rounded-3xl border-opacity-20 min-h-[424px]">
                                <Image src={item.icon} width={30} height={30} alt={"hioasdo"} className="mb-4" />
                                <div className="text-heading-02 leading-heading-02 font-semibold text-neutral-white">{item.CardHeading}</div>
                                <p className="text-body-01 leading-body-01 py-4 text-neutral-white">{item.CardDesc}</p>
                                <div dangerouslySetInnerHTML={{ __html: item?.additionalData }} />
                            </div>

                        </SwiperSlide>
                    ))}
                </Slider>

            </SectionWrapperNew>
            {/* capabilites section end */}

            <AcceleratorSection
                style={{ backgroundColor: '#EFE9FB' }}
                ID={"Accelerator"}
                Heading={"Accelerator"}
                Desc={
                    "Prebuilt customizable solutions for seamless integration, faster implementation and quicker ROI."
                }
                Color={""}
            >
                <p className="text-heading-02 leading-heading-02 font-semibold mb-4">Dealer Management Desk</p>
                <p className="text-body-01 leading-body-01">.NET portal integrated with Dynamics Navision streamlines dealer management through online registration, contract management. Leveraging Azure cloud infrastructure, the portal enables secure remote onboarding, efficient order processing and payment management.</p>

            </AcceleratorSection>

            <SectionWrapperNew
            bgColor={'bg-primary-900'}
                sectionHeading="Services"
                sectionDesc="Experience end to end services, driven by our industry knowledge, technical acumen and a customer-centric approach."
                sectionTextColor='text-neutral-white'
                sectionHeadingLayout="left"
            >
                <Slider>
                {RPASolution2?.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div class="w-full min-h-[50vh] bg-white rounded-3xl group overflow-hidden relative border-[0.5px] border-primary-900 border-opacity-20" >
                            <div className="h-[35vh] bg-slate-700" style={{ background: `url{item.cardTopImageUrl}`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}></div>
                                <div className="h-[25vh] p-5 relative">
                                    <h5 className="mb-4 text-heading-02 leading-heading-02 text-primary-900 font-semibold ">{item?.cardHeading}</h5>
                                    <p className="mb-6 text-body-01 leading-body-01 text-primary-900 font-normal">{item?.cardDesc}</p>
                                    {item?.cardHoverData && (
                                        <div className="absolute bottom-4 right-4">
                                            <OutlinedButtonWithArrow size={24} />
                                        </div>)}

                                </div>
                                {item?.cardHoverData && (
                                    <div className="bg-secondary-10 p-5 rounded-3xl h-full w-full duration-200 group-hover:-translate-y-full absolute">
                                        <div className="">
                                            <ol className="max-w-md space-y-1 text-gray-500 list-decimal list-inside dark:text-gray-400">
                                                {item?.cardHoverData.map((item2) => (
                                                    <>
                                                        <li>
                                                            <span className="font-semibold text-black">{item2}</span>
                                                        </li>
                                                    </>
                                                ))}
                                            </ol>
                                            <ol className="max-w-md space-y-1 text-gray-500 list-decimal list-inside dark:text-gray-400">
                                                {item?.cardHoverData.map((item2) => (
                                                    <>
                                                        <li>
                                                            <span className="font-semibold text-black">{item2}</span>
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

            <IndustrySpotlight cardData={INDUSTRY_SPOTLIGHT} sectionHeading={'Industry Spotlight'} sectionDesc={'We leverage domain knowledge and digital transformation expertise to tackle specific challenges in multiple trading and distribution sectors.'} />
            <CaseStudiesSection casestudy={CASE_STUDIES_DATA} csLayout={"5"} bgColor='bg-neutral-white' />

           
            {/* end case studies */}
            <BlogSection
                ID={"blog"}
                blogImageUrl={blogImageUrl}
                Heading={"Mobile Commerce: The Next Frontier for B2B Trading"}
                Desc={"The world of B2B trading is undergoing a significant transformation, driven by the rapid adoption of mobile technology. Mobile commerce, or m-commerce, has revolutionized the way businesses interact, transact, and operate. As mobile devices become increasingly ubiquitous, B2B traders can no longer afford to ignore the potential of mobile commerce."}
                Color={"text-neutral-white"}
                readMoreUrl={"https://www.godrejinfotech.com/blogDetails.aspx?blog=13"}
            ></BlogSection>

            <ReviewSliderSection
                ID={"TESTIMONIALS"}
                Heading={"Delighted Customers share their Experiences"}
                Desc={'Discover how we have helped our customers to realize tangible outcomes aligned with their business goals.'}
                Color="text-neutral-white"
                CardDataList={TESTIMONIAL_DATA}
                BGColor="bg-primary-900"
                SectionHeadingMaxWidth={'70%'}
            ></ReviewSliderSection>

            {/* transform business with us section */}
            <TransformBusinessForm Title={'Transform your Business with us'} Desc={"Let us discuss how Trading and Distribution can help you with rapid growth."}>
            </TransformBusinessForm>

        </>
    )
}


const AutomationContent = () => {
    const services = [
        'Warehouse Automation Systems (WAS)',
        'Automated Storage and Retrieval Systems (AS/RS)',
        'Electronic Data Interchange (EDI) Automation',
        'Barcode Scanning and RFID Solutions',
        'Infor Birst Analytics',
        'Microsoft Power BI',
        'Machine Learning-basedInventory Optimization',
        'Natural Language Processing (NLP) for Customer Service',
        'Predictive Analytics for Demand Forecasting',
    ];
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 h-full">
            <div className="p-5">
                {services.map((item) => (
                    <>
                           <div className="list text-body-01 leading-body-01 py-3 flex justify-between" style={{ borderBottom: '1px solid #d3d3d3' }}>
                            {item}
                            <Image width={35} height={35} src="/homeNew/chevron-right.svg" alt="char"></Image>
                        </div>
                    </>
                ))}

            </div>
            <div className="relative invisible md:visible" style={{ backgroundImage: `url(/tradingDistribution/solutionOfferings/automation.webp)`, backgroundSize: 'cover' }}>
            </div>
        </div>
    );
};

const CloudContent = () => {
    const data = [
        'Oracle Cloud SCM',
        'Infor CloudSuite Distribution',
        'Magento Commerce Cloud',
        'Salesforce Commerce Cloud',
        'Shopify Plus',
        'Tableau Cloud',
        'Microsoft Power BI Cloud',
    ];
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 h-full">
            <div className="p-5">
                {data.map((item) => (
                    <>
                            <div className="list text-body-01 leading-body-01 py-3 flex justify-between" style={{ borderBottom: '1px solid #d3d3d3' }}>
                            {item}
                            <Image width={35} height={35} src="/homeNew/chevron-right.svg" alt="char"></Image>
                        </div>
                    </>
                ))}

            </div>
            <div className="relative invisible md:visible" style={{ backgroundImage: `url(/tradingDistribution/solutionOfferings/cloud.webp)`, backgroundSize: 'cover' }}>
            </div>
        </div>
    );
};

const TransformationContent = () => {
    const data = [
        'Salesforce Commerce Cloud',
        'Microsoft Dynamics 365 Sales',
        'Microsoft Dynamics 365 Finance and Operations',
        'Infor CloudSuite Distribution',
        'Infrastructure as a Service',
        'Managed Services',
    ];
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 h-full">
            <div className="p-5">
                {data.map((item) => (
                    <>
                           <div className="list text-body-01 leading-body-01 py-3 flex justify-between" style={{ borderBottom: '1px solid #d3d3d3' }}>
                            {item}
                            <Image width={35} height={35} src="/homeNew/chevron-right.svg" alt="char"></Image>
                        </div>
                    </>
                ))}

            </div>
            <div className="relative invisible md:visible" style={{ backgroundImage: `url(/tradingDistribution/solutionOfferings/transformation.webp)`, backgroundSize: 'cover' }}>
            </div>
        </div>
    );
};


export default page