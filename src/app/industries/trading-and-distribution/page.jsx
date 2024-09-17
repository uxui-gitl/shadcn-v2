'use client'
import EntIntro from "@/components/EntIntro";
import OverviewSection from "@/sections/overview/OverviewSection";
import SectionWrapper from '@/components/SectionWrapper';
import SectionHeading from '@/components/SectionHeading';
import Image from "next/image";
import IndustrySpotlight from "@/sections/industry-spotlight/industrySpotlight";
import SectionWithSlider from "@/sections/sectionWithSlider/SectionWithSlider";
import ServicesCardSlider from '@/sections/services-cards-slider/ServicesCardSlider';

import HubExpertise from "@/sections/hub-of-expertise/HubExpertise";
import HighlightPromo from "@/sections/highlight-promo/HighlightPromo";
import CaseStudiesSection from "@/sections/case-studies/CaseStudiesSection";
import BlogSection from "@/sections/blog/BlogSection";
import ReviewSliderSection from "@/sections/reviewSlider/ReviewSliderSection";
import TransformBusinessForm from '@/sections/transformBusinessFrom/TransformBusinessFromSection';


function page() {
    const blogImageUrl = "/ai-ml/blog-bg.png";
    const imgBgURL = "/CloudStackServices/background/bg--strategic-partnership.png";
    const CHALLENGES_LIST_DATA = [
        { id: 1, title: "Inadequate Scalability and Availability", icon: '/upgradeCloud/icons/ico--target.svg' },
        { id: 2, title: "Unreliable Backup Storage", icon: '/upgradeCloud/icons/ico--target.svg' },
        { id: 3, title: "Weak Disaster Recovery and Redundancy", icon: '/upgradeCloud/icons/ico--target.svg' },
        { id: 4, title: "Inadequate Data Integrity", icon: '/upgradeCloud/icons/ico--target.svg' },
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

    const SERVICE_CARDS_DATA = [
        {
          title: "Planning and Designing",
          hoverTitle: "Planning & Designing",
          description: "Meticulous selection of frameworks, programming languages, libraries and tools followed by the development of innovative application with a clean code architecture.",
          content: "Additional content for Card 1",
          imageURL: '/techStack1.png'
        },
        {
          title: "Define and Develop",
          hoverTitle: "Define & Develop",
          description: "Meticulous selection of frameworks, programming languages, libraries and tools followed by the development of innovative application with a clean code architecture.",
          content: "Additional content for Card 2",
          imageURL: '/techStack1.png'
        },
        {
          title: "Testing",
          hoverTitle: "Testing",
          description: "Meticulous selection of frameworks, programming languages, libraries and tools followed by the development of innovative application with a clean code architecture.",
          content: "Additional content for Card 3",
          imageURL: '/techStack1.png'
        },
        {
          title: "Deployment",
          hoverTitle: "Deployment",
          description: "Meticulous selection of frameworks, programming languages, libraries and tools followed by the development of innovative application with a clean code architecture.",
          content: "Additional content for Card 4",
          imageURL: '/techStack1.png'
        },
        {
          title: "Maintainence",
          hoverTitle: "Maintainence",
          description: "Meticulous selection of frameworks, programming languages, libraries and tools followed by the development of innovative application with a clean code architecture.",
          content: "Additional content for Card 5",
          imageURL: '/techStack1.png'
        },
        // Add more cards here...
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

    const CASE_STUDIES_DATA = [
        {
          imageURL: "/CloudStackServices/case-studies/bg--coffee-beans.png",
          videoURL: "/CloudStackServices/case-studies/bg--video-industry.mp4",
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
          imageURL: "/CloudStackServices/case-studies/bg--electical-devices.png",
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

    const TESTIMONIAL_DATA = [
        {
            id: 1,
            cardHeading: "Easy insights into business performance",
            cardDesc: 'We sincerely appreciate GITL team for delivering Power BI solution on time and with great quality. We really like the data visualisations & dashboards provided and it makes it easier for us to get a good grip on our business performance indicators.'
        },
        {
            id: 2,
            cardHeading: "Real-Time Warehouse Data Interfacing",
            cardDesc: 'We decided to choose the LS Retail NAV solution after technical. One of the most interesting aspects of this implementation is the Automated Data Capture System (ADCS) which provides a real-time interface between the handheld devices at the warehouse and the back-end ERP system at the head-office.'
        },

    ];  

    return (
        <>
            <EntIntro
                title="Embrace the Digital Future of Business Efficiency with Industry Specialized Infor Application"
                desc=""
                cta="Let's Connect"
                width="60%"
                video="https://gitl-usa.s3.us-west-1.amazonaws.com/banner1.mp4"
            />
            <OverviewSection Text={`Globally recognized Infor is a robust ERP solution that delivers improved business strength and operational responsiveness. Committed to offering core industry application `} />

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

            <IndustrySpotlight cardData={INDUSTRY_SPOTLIGHT} />

            <SectionWithSlider
                ID={"DATA_MGMT_DATA"}
                sectionHeading={"Cornerstones of Managed "}
                sectionDesc={
                    "Scalable data management solutions leveraging analytics and business intelligence for informed decisions."
                }
                sectionTextColor="#ffffff"
                cardData={DATA_MGMT_DATA}
                sectionBGColor="#5F22D9"
                setHeadingLayout="horizontal"
            />

<ServicesCardSlider cardData={SERVICE_CARDS_DATA} heading={"Technology Stack"} desc={""} color={"#1D162B"} />


            <HubExpertise
                setHeading="Hub of Expertise"
                setDesc="We are here to build edge and bring technology brilliance with the finest in the industry."
                setColor="#ffffff"
                counters={HUBEXPERTISE_COUNTER_DATA}
                columnNo={3} //Define how many columns you want to display
            />

            <HighlightPromo
                setHeading="Synergetic Partnership"
                setDesc="Our expansive worldwide network of market innovators enables us to embrace breakthrough technologies and confront business roadblocks effectively."
                setColor="#1D162B"
                setImageBGURL={imgBgURL}
                setLogoImages="true"
                setPadding={false}
            />

            <CaseStudiesSection casestudy={CASE_STUDIES_DATA} csLayout={"1"} />

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
                Heading={"Delighted customers share their success experience"}
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


export default page