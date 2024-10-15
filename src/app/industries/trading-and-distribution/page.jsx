'use client'
import EntIntro from "@/components/EntIntro";
import OverviewSection from "@/sections/overview/OverviewSection";
import SectionWrapper from '@/components/SectionWrapper';
import SectionHeading from '@/components/SectionHeading';
import Image from "next/image";
import IndustrySpotlight from "@/sections/industry-spotlight/industrySpotlight";
import { Swiper, SwiperSlide } from "swiper/react";
import BlogSection from "@/sections/blog/BlogSection";
import ReviewSliderSection from "@/sections/reviewSlider/ReviewSliderSection";
import TransformBusinessForm from '@/sections/transformBusinessFrom/TransformBusinessFromSection';
import Slider from "@/components/Slider";
import SectionWrapperNew from '@/components/SectionWrapperNew';
import { Tabs } from "@/components/ui/tabs";
import Link from "next/link";
import OutlinedButtonWithArrow from "@/components/ui/buttons/OutlinedButtonWithArrow";




function page() {
    const blogImageUrl = "/ai-ml/blog-bg.png";

    const imgBgURL = "/CloudStackServices/background/bg--strategic-partnership.png";

    const CHALLENGES_LIST_DATA = [
        { id: 1, title: "Overcoming tight delivery deadline constraints", icon: '/upgradeCloud/icons/ico--target.svg' },
        { id: 2, title: "Addressing global sourcing strategy complexities", icon: '/upgradeCloud/icons/ico--target.svg' },
        { id: 3, title: "Mitigating supplier non-compliance risks", icon: '/upgradeCloud/icons/ico--target.svg' },
        { id: 4, title: "Resolving supply chain visibility gaps", icon: '/upgradeCloud/icons/ico--target.svg' },
        { id: 5, title: "Managing complex inventory fluctuations", icon: '/upgradeCloud/icons/ico--target.svg' },
        { id: 6, title: "Streamlining sales order and invoice tracking processes", icon: '/upgradeCloud/icons/ico--target.svg' },
        { id: 7, title: "Coping with stock management and transfer inefficiencies", icon: '/upgradeCloud/icons/ico--target.svg' },
        { id: 8, title: "Navigating diverse product line complexities", icon: '/upgradeCloud/icons/ico--target.svg' },
        { id: 9, title: "Retaining channel partner loyalty amidst competitive pressures", icon: '/upgradeCloud/icons/ico--target.svg' },
        { id: 10, title: "Enhancing sales team productivity and performance", icon: '/upgradeCloud/icons/ico--target.svg' },
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
            cardHeading: 'Sales CRM',
            cardDesc: 'Automate lead qualification, prioritization and distribution for the identification of sales opportunities and their automatic assignment to the most suitable representatives. ',
            isArrow: true,
            cardTextColor: 'black',
            cardTopImageUrl: 'https://flowbite.com/docs/images/blog/image-1.jpg',
            cardHoverData: [
                'abc',
                'abc',
                'abc',
                'abc',
                'abc',
                'abc',
            ]
        },
        {

            id: 2,
            cardBGColor: 'white',
            cardHeading: 'Marketing Automation',
            cardDesc: 'Visualize the complete 360-degree customer journey and create personalized, no-code engagement workflows for your customers across multiple channels.',
            isArrow: true,
            cardTextColor: 'black',
            cardTopImageUrl: 'https://flowbite.com/docs/images/blog/image-4.jpg',
            cardHoverData: [
                'abc',
                'abc',
                'abc',
                'abc',
                'abc',
                'abc',
            ]
        },
        {

            id: 3,
            cardBGColor: 'white',
            cardHeading: 'Customer Portal',
            cardDesc: 'Self-service applications and referral portals for your prospects, customers and partners. Enjoy live application tracking, mobile-responsive form and seamless payment integrations to provide a hassle-free customer experience.',
            isArrow: true,
            cardTextColor: 'black',
            cardTopImageUrl: 'https://flowbite.com/docs/images/blog/image-7.jpg'
        },
        {

            id: 4,
            cardBGColor: '#E4E4E4',
            cardHeading: 'Mobile CRM',
            cardDesc: `Automate, plan, track and monitor your agents' daily sales routines and ensure your representatives never miss a single customer inquiry and keep them engaged, even while on the go.`,
            isArrow: true,
            cardTextColor: 'black',
            cardTopImageUrl: 'https://flowbite.com/docs/images/blog/image-1.jpg'
        },
        {

            id: 5,
            cardBGImageUrl: '/rpa/ArtboardBg.png',
            cardBGColor: '#EFE9FB',
            cardHeading: 'Service Cloud',
            cardDesc: 'Leverage the power of case management to streamline issue resolution. Automate complex workflows to enhance agent productivity.',
            isArrow: true,
            cardTextColor: 'black',
            cardTopImageUrl: 'https://flowbite.com/docs/images/blog/image-2.jpg'
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
            CardIconUrl: "/upgradeCloud/icons/ico--target.svg",
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
            CardIconUrl: "/upgradeCloud/icons/ico--target.svg",
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
            CardIconUrl: "/upgradeCloud/icons/ico--target.svg",
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
            CardIconUrl: "/upgradeCloud/icons/ico--target.svg",
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
            CardIconUrl: "/upgradeCloud/icons/ico--target.svg",
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
            CardIconUrl: "/upgradeCloud/icons/ico--target.svg",
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
            CardIconUrl: "/upgradeCloud/icons/ico--target.svg",
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
            CardIconUrl: "/upgradeCloud/icons/ico--target.svg",
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
            CardIconUrl: "/upgradeCloud/icons/ico--target.svg",
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
            CardIconUrl: "/upgradeCloud/icons/ico--target.svg",
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


    const casestudy = [
        {
            imageURL: "",
            videoURL: "/CloudStackServices/case-studies/bg--video-industry.mp4",
            title: "Case Studies",
            heading: "",
            description: "Gain valuable insights on digital transformation journeys of trading & distribution businesses.",
            link: "/case-study-1",
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
                title="Effective Operation Management for Trading & Distribution Businesses"
                desc="Streamlining logistics, optimizing inventory and enhancing supply chain visibility"
                cta="Let's Connect"
                width="60%"
                video="https://gitl-usa.s3.us-west-1.amazonaws.com/banner1.mp4"
            />
            <OverviewSection Text={`We offer effective solutions for trading and distribution businesses, ensuring warehouse governance, maximum perfect order fulfilment and optimized distribution operations for customers.`} />

            <SectionWrapper BGColor="black">
                <div className="md:container mx-auto">
                    <SectionHeading
                        Color="white"
                        Heading="Knocking Business Challenges"
                        Desc=""
                    ></SectionHeading>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <ul className=" space-y-4 w-full text-white">
                            {CHALLENGES_LIST_DATA.map((challenge, index) => (
                                <li
                                    key={challenge.id}
                                    className={`flex items-start py-6 border-b-[0.5px] border-white w-full ${index === CHALLENGES_LIST_DATA.length - 1 ? 'border-b-0' : ''}`}
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
                                        <h3 className="text-2xl font-normal">
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
                sectionTextColor="black"
                title="OUR OFFERINGS"
                sectionHeadingLayout="center"
                style={{ background: 'white' }}
            >
                <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col mx-auto w-full  items-start justify-start my-0">
                    <Tabs activeTabClassName={`!bg-[#5F22D9]`} contentClassName={`!mt-20`} tabClassName={`!px-10 hover:bg-[#5F22D9]`} containerClassName={`!my-2`} tabs={tabs} />
                </div>
            </SectionWrapperNew>

            {/* end future section */}

            <SectionWrapperNew style={{ backgroundColor: "#5F22D9" }}
                sectionHeading="Key Capabilities"
                sectionDesc="Evolve your trading and distribution business with our expert-led digital transformation capabilities."
                sectionTextColor='#fff'
                sectionHeadingLayout="horizontal"
            >
                <Slider>
                    {DATA_MGMT_DATA?.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="p-6 bg-[transparent]" style={{ borderRight: '1px solid #d3d3d3' }}>
                                <Image src={"/about/whiteStar.svg"} width={30} height={30} alt={"hioasdo"} className="mb-4" />
                                <div className="text-[28px] text-white">{item.CardHeading}</div>
                                <p className="text-[20px] py-4 text-white">{item.CardDesc}</p>
                                <div dangerouslySetInnerHTML={{ __html: item?.additionalData }} />
                            </div>

                        </SwiperSlide>
                    ))}
                </Slider>

            </SectionWrapperNew>
            {/* capabilites section end */}

            <SectionWrapperNew style={{ backgroundColor: "#fff" }}
                sectionHeading="Services"
                sectionDesc="Experience end to end services, driven by our industry knowledge, technical acumen and a customer-centric approach."
                sectionTextColor='#000'
                sectionHeadingLayout="left"
            >
                <Slider>
                    {RPASolution2?.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div class="max-w-sm bg-white rounded-3xl group overflow-hidden relative" >
                                <div className="h-[300px] bg-slate-700" style={{ background: `url('/Transformation/sale-force-crm/m1.svg')`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}></div>
                                <div className="py-10 px-10 relative">
                                    <h5 class="mb-6 text-[28px] font-semibold text-[#000] leading-[50px] min-h-[40px]">{item?.cardHeading}</h5>
                                    <p class="mb-3 text-[16px] font-medium text-[#000] min-h-[144px]">{item?.cardDesc}</p>
                                    {item?.cardHoverData && (
                                        <div className="absolute bottom-4 right-4">
                                            <OutlinedButtonWithArrow size={48} />
                                        </div>)}

                                </div>
                                {item?.cardHoverData && (
                                    <div className="bg-white py-10 px-10 rounded-3xl h-full w-full duration-200 group-hover:-translate-y-full absolute">
                                        <div className="">
                                            <ol class="max-w-md space-y-1 text-gray-500 list-decimal list-inside dark:text-gray-400">
                                                {item?.cardHoverData.map((item2) => (
                                                    <>
                                                        <li>
                                                            <span class="font-semibold text-black">{item2}</span>
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

            <SectionWrapperNew
                style={{ backgroundColor: '#d3d3d3' }}
                sectionHeading={''}
                sectionDesc={''}
                sectionTextColor={'fff'}
                sectionHeadingLayout={'left'}>

                <div
                    className="flex flex-col lg:flex-row justify-start items-center gap-8 w-full h-auto lg:h-[362px]"
                    style={{ color: casestudy[0].color }}
                >
                    <div
                        className="w-full relative lg:w-1/3 h-full rounded-3xl p-8"
                        style={{
                            backgroundImage: `url(${casestudy[0].imageURL})`,
                            backgroundSize: "cover",
                            backgroundPosition: "bottom",
                            backgroundColor: casestudy[0].bgCardColor,
                        }}
                    >
                        <h3 className="text-base font-semibold mb-4 lg:mb-12">
                            {casestudy[0].title}
                        </h3>
                        <h1 className="text-3xl lg:text-5xl font-medium mb-4 lg:mb-6">
                            {casestudy[0].heading}
                        </h1>
                        <p className="w-full lg:w-[80%] mb-4">
                            {casestudy[0].description}
                        </p>
                        {casestudy[0].link && <div className="absolute bottom-4 right-4">
                            <Link href={casestudy[0].link} target="_blank">
                                <OutlinedButtonWithArrow arrowColor="white" size={56} />
                            </Link>
                        </div>}
                    </div>
                    <div
                        className="relative w-full lg:w-1/3 h-full rounded-3xl p-8"
                        style={{
                            color: casestudy[1].color,
                            backgroundColor: casestudy[1].bgCardColor,
                        }}
                    >
                        <h1 className="text-3xl font-medium mb-4 lg:mb-6">
                            {casestudy[1].heading}
                        </h1>
                        <p className="mb-4">{casestudy[1].description}</p>
                        {casestudy[1].link && <div className="absolute bottom-4 right-4">
                            <Link href={casestudy[1].link} target="_blank">
                                <OutlinedButtonWithArrow size={56} />
                            </Link>
                        </div>}
                    </div>
                    <div
                        className="relative w-full lg:w-1/3 h-full rounded-3xl p-8"
                        style={{
                            color: casestudy[2].color,
                            backgroundColor: casestudy[2].bgCardColor,
                        }}
                    >
                        <h1 className="text-3xl font-medium mb-4 lg:mb-6">
                            {casestudy[2].heading}
                        </h1>
                        <p className="mb-4">{casestudy[2].description}</p>
                        {casestudy[2].link && <div className="absolute bottom-4 right-4">
                            <OutlinedButtonWithArrow size={56} />
                        </div>}
                    </div>
                </div>


            </SectionWrapperNew>
            {/* end case studies */}
            <BlogSection
                ID={"blog"}
                blogImageUrl={blogImageUrl}
                Heading={"Azure Data Lake - Data Storage Solution for Big Data Analytics"}
                Desc={"Data Science today has become essential for organizations that are looking to bring about predictability in their business functions. It removes the guesswork and provides companies with accurate insights related to product features, target audiences and user behavior."}
                Color={"white"}
                readMoreUrl={"https://www.godrejinfotech.com/blogDetails.aspx?blog=13"}
            ></BlogSection>

            <ReviewSliderSection
                ID={"TESTIMONIALS"}
                Heading={"Delighted Customers share their Experiences"}
                Desc={'Discover how we have helped our customers to realize tangible outcomes aligned with their business goals.'}
                Color="#ffffff"
                CardDataList={TESTIMONIAL_DATA}
                BGColor="#1D162B"
                SectionHeadingMaxWidth={'70%'}
            ></ReviewSliderSection>

            {/* transform business with us section */}
            <TransformBusinessForm Title={'Transform your Business with us'} Desc={"Let us discuss how intelligent technologies can help you with rapid growth."}>
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
        <div className="grid grid-cols-2 gap-20 h-full">
            <div className="py-10 px-10">
                {services.map((item) => (
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


export default page