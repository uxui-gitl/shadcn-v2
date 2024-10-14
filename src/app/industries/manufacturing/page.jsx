'use client'
import EntIntro from "@/components/EntIntro";
import OverviewSection from "@/sections/overview/OverviewSection";
import SectionWrapper from '@/components/SectionWrapper';
import SectionHeading from '@/components/SectionHeading';
import Image from "next/image";
import IndustrySpotlight from "@/sections/industry-spotlight/industrySpotlight";
import SectionWithSlider from "@/sections/sectionWithSlider/SectionWithSlider";
import { Swiper, SwiperSlide } from "swiper/react";
import CommonCardThreeSlider from "@/sections/commonCardThreeSlider/CommonCardThreeSlider";
import HubExpertise from "@/sections/hub-of-expertise/HubExpertise";
import HighlightPromo from "@/sections/highlight-promo/HighlightPromo";
import CaseStudiesSection from "@/sections/case-studies/CaseStudiesSection";
import BlogSection from "@/sections/blog/BlogSection";
import DistinctiveSection from '@/sections/distinctive/DistinctiveSection';
import ReviewSliderSection from "@/sections/reviewSlider/ReviewSliderSection";
import TransformBusinessForm from '@/sections/transformBusinessFrom/TransformBusinessFromSection';
import ServiceSlider from '@/sections/serviceSlider/ServiceSlider';
import Slider from "@/components/Slider";
import SectionWrapperNew from '@/components/SectionWrapperNew';
import { Tabs } from "@/components/ui/tabs";
import Link from "next/link";
import OutlinedButtonWithArrow from "@/components/ui/buttons/OutlinedButtonWithArrow";




function page() {
    const blogImageUrl = "/ai-ml/blog-bg.png";

    const imgBgURL = "/CloudStackServices/background/bg--strategic-partnership.png";

    const CHALLENGES_LIST_DATA = [
        { id: 1, title: "Limited access to real-time information hinders office and shop floor productivity", icon: '/upgradeCloud/icons/ico--target.svg' },
        { id: 2, title: "Struggle to optimize inventory and logistics operations", icon: '/upgradeCloud/icons/ico--target.svg' },
        { id: 3, title: "Hassle with equipment maintenance due to lack of tracking and schedules", icon: '/upgradeCloud/icons/ico--target.svg' },
        { id: 4, title: "Difficulty in optimizing production sequences, balancing workloads and handling disruptions", icon: '/upgradeCloud/icons/ico--target.svg' },
        { id: 5, title: "Inaccurate order-based material requirement planning and budget control", icon: '/upgradeCloud/icons/ico--target.svg' },
        { id: 6, title: "Limited visibility into manufacturing activities and operations", icon: '/upgradeCloud/icons/ico--target.svg' },
        { id: 7, title: "Ensuring consistent product quality and effective defect tracking", icon: '/upgradeCloud/icons/ico--target.svg' },
        { id: 8, title: "Maintaining adherence to industry regulations and mitigating potential legal issues", icon: '/upgradeCloud/icons/ico--target.svg' },
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

    const DATA_MGMT_DATA = [
        {
            id: 1,
            BGImageUrl: "",
            BGColor: "#fff",
            CardBGColor: "transparent",
            CardTextColor: "white",
            CardTitle: "",
            CardIconUrl: "/upgradeCloud/icons/ico--target.svg",
            CardHeading: "Azure SQL Data Ware Housing",
            CardDesc:
                "Accelerate analytics with petabyte scale storage and high-performance querying",
            isArrow: "true",
            link: [],
            additionalData:`
             <ul class="max-w-md space-y-1 text-white list-disc list-inside">
                                    <li>
                                        At least 10 characters (and up to 100 characters)
                                    </li>
                                    <li>
                                        At least one lowercase character
                                    </li>
                                    <li>
                                        Inclusion of at least one special character, e.g., ! @ # ?
                                    </li>
                                </ul>
            `
        },

        {
            id: 2,
            BGImageUrl: "",
            BGColor: "#fff",
            CardBGColor: "transparent",
            CardTextColor: "white",
            CardTitle: "",
            CardIconUrl: "/upgradeCloud/icons/ico--target.svg",
            CardHeading: "AWS Redshift",
            CardDesc:
                "Optimize data storage and queries while we provide the experience to enhance data efficiency.",
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
            CardHeading: "Azure Synapse",
            CardDesc:
                "Unify analytics and data management, and integrate data warehousing and big data capabilities",
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
            CardHeading: "Azure Data Factory",
            CardDesc:
                "Move, transform and orchestrate data across cloud and on-premises sources with automated workflows.",
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
            CardHeading: "Databricks",
            CardDesc:
                "Harness unified data analytics gaining deeper insights with our data-driven strategies.",
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
            CardHeading: "Amazon S3",
            CardDesc:
                "Securely store and serve data with highly scalable and cost-effective object storage.",
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
            CardHeading: "Azure Data Lake",
            CardDesc:
                "Experience high-performance and secure data management with Azure Data Lake.",
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
            CardHeading: "Microsoft Fabric",
            CardDesc:
                "Integrated Lakehouse, Datawarehouse & AI-powered platform driving business effectiveness.",
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

    const HUBEXPERTISE_COUNTER_DATA = [
        {
            start: 10000,
            end: 15000,
            description: "Man Years  of Experience",
        },
        {
            start: 1200,
            end: 1000,
            description: "Implementation Sites",
        },
        {
            start: 1200,
            end: 500,
            description: "Employees Worldwide",
        },

        {
            start: 1200,
            end: 500,
            description: "Customer Worldwide",
        },
        {
            start: 10,
            end: 25,
            description: "Years of Experience",
        },

        {
            staticTitle: "24*7",
            description: "Implementation Sites",
        },

        // Add more counters as needed
    ];

    const casestudy = [
        {
            imageURL: "",
            videoURL: "/CloudStackServices/case-studies/bg--video-industry.mp4",
            title: "Case Studies",
            heading: "Manufacturing Projects Highlights",
            description: "",
            link: "",
            color: "#FFFFFF",
            bgCardColor: "#2B1624",
        },
        {
            imageURL: "",
            title: "",
            heading: "30% Reduction in Manual Efforts for Material & Production Planning",
            description:
                "Leading manufacturer of Electrical components for the Automobile sector modernize its business application with successful implementation of Infor LN",
            link: "/case-study-1",
            color: "#000",
            bgCardColor: "#FCE6F4",
        },

        {
            imageURL: "/path/to/image1.jpg",
            title: "",

            heading: "Better Data Security and Customer Relationship",
            description:
                `India's Largest Manufacturer of Forklift Trucks Successfully Implements Salesforce Service Cloud Solution Integrated with Infor LN`,
            link: "/case-study-1",
            color: "#000",
            bgCardColor: "#EFE9FB",
        },
    ];

    const distinctiveData = [
        {
            _id: 1,
            desc: "Deep understanding of specific business domains for developing AI and ML solutions that truly meet your needs.",
            icon: "",
        },
        {
            _id: 2,
            desc: "Agile approach that keeps projects on cutting edge.",
            icon: "",
        },
        {
            _id: 3,
            desc: "Fully signed Non-Disclosure Agreement (NDA) to protect sensitive information of customer.",
            icon: "",
        },
        {
            _id: 4,
            desc: "Exceed customer expectations and deliver AI and ML solutions in most effective way.",
            icon: "",
        },

    ];

    const TESTIMONIAL_DATA = [
        {
            id: 1,
            cardHeading: "Expert Implementation & Support Services",
            cardDesc: `Appreciation to Godrej Infotech Limited's effective solutions and support, we acknowledge their expertise for optimizing ERP LN FP2 since April 2009.`,
            designation:`Global Leader,`,
            companyName:`Ice-Cold Merchandiser & Glass Bottle Manufacturer`,

        },
        {
            id: 2,
            cardHeading: "Cost Effective Cloud Solution Implementation",
            cardDesc: 'Thank you, Godrej Infotech team, for cloud-enabling our Navision system, enhancing system availability, offering cost-effective OPEX pricing, and providing anytime, anywhere accessibility.',
            designation:`IT Manager,`,
            companyName:` Indian Petrochemical Manufacturer of Resins & Plastics`,
        },

    ];

    const serviceSliderData = [
        { id: '1', text: 'dummy text' },
        { id: '2', text: 'dummy text' },
        { id: '3', text: 'dummy text' },
        { id: '4', text: 'dummy text' },
        { id: '5', text: 'dummy text' },
    ]

    return (
        <>
            <EntIntro
                title="Accelerate Manufacturing Operations with Integrated Cutting-Edge Solutions"
                desc="Optimize predict maintenance, enhance supply chain visibility and productivity"
                cta="Let's Connect"
                width="60%"
                video="https://gitl-usa.s3.us-west-1.amazonaws.com/banner1.mp4"
            />
            <OverviewSection Text={`Adopting automation enables our manufacturing clients to achieve transformative benefits, includingenhanced quality, predictable supply chain and increased profitability.`} />

            <SectionWrapper BGColor="black">
                <div className="md:container mx-auto">
                    <SectionHeading
                        Color="white"
                        Heading="Challenges Faced by Manufacturing Businesses"
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
                sectionHeading={"Holistic and Future Ready"}
                sectionDesc={"We specialize in delivering cutting-edge Internet of Things (IIOT) solutions that are tailored to meet your unique needs."}
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
                sectionHeading="Our Capabilities"
                sectionDesc="At Godrej Infotech, we invest in your future. With a wide range of learning and development programs, we help you grow professionally and personally."
                sectionTextColor='#fff'
                sectionHeadingLayout="horizontal"
            >
                <Slider>
                    {DATA_MGMT_DATA?.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="p-6 bg-[transparent]" style={{ borderRight: '1px solid #d3d3d3' }}>
                                <Image src={"/about/whiteStar.svg"} width={30} height={30} alt={"hioasdo"} className="mb-4" />
                                <div className="text-[28px] text-white">Purpose</div>
                                <p className="text-[20px] py-4 text-white">Be a world class provider of high-quality Information & Technology solutions.</p>
                             <div dangerouslySetInnerHTML={{ __html: item?.additionalData }} />
                            </div>

                        </SwiperSlide>
                    ))}
                </Slider>

            </SectionWrapperNew>
            {/* capabilites section end */}

            <CommonCardThreeSlider
                ID={"AIOfferings"}
                sectionImageUrl={""}
                sectionBGColor={"#fff"}
                sectionHeading={"Unlock potential with our Custom Solutionss"}
                sectionDesc={
                    "Enhancing the features of business applications, our easily integrating specialized solutions intend to add "
                }
                sectionTextColor={"#000"}
                sectionHeaderMaxWidth={"40%"}
                x
                cardData={SOLUTION_DATA}
            ></CommonCardThreeSlider>
            {/* custome solution */}

            <IndustrySpotlight cardData={INDUSTRY_SPOTLIGHT} />

            {/* <CaseStudiesSection casestudy={CASE_STUDIES_DATA} csLayout={"5"} bgColor={'#d3d3d3'} /> */}

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
                Heading={"Delighted Customers Share their Successful Experiences"}
                Desc={''}
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


const ServiceContent = () => {
    const services = [
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

const PartnersContent = () => {
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


export default page