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

    const CASE_STUDIES_DATA = [
        {
            imageURL: "",
            videoURL: "/CloudStackServices/case-studies/bg--video-industry.mp4",
            title: "Case Studies",
            heading: "Leading Indian Refiner of Precious Metals",
            description: "",
            link: "/case-study-1",
            color: "#FFFFFF",
            bgCardColor: "#2B1624",
        },
        {
            imageURL: "",
            title: "",
            heading: "Middle East based Leading Cooling Services Provider",
            description:
                "Experiences productivity savings and leverages data mart consolidation with Power BI implementation ",
            link: "/case-study-1",
            color: "#000",
            bgCardColor: "#FCE6F4",
        },

        {
            imageURL: "/path/to/image1.jpg",
            title: "",

            heading: "Global fast-food chain with 170+ stores in Saudi Arabia",
            description:
                "Implements Data Lake for faster processing and lower storage costs and automates Data Archiving and Power BI ready Analytics for improved governance and insights",
            link: "/case-study-1",
            color: "#000",
            bgCardColor: "#EFE9FB",
        },
        {
            imageURL: "/CloudStackServices/case-studies/bg--electical-devices.png",
            title: "",
            heading: "Middle East-based Electrical Products Manufacturer",
            description:
                "Require Development from Scratch. Customisation of manufacturing reports. Require Development from Scratch. ",
            link: "/case-study-1",
            color: "#000",
            bgCardColor: "#E1F2EF",
        },
        // Add more case studies here...
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
            cardHeading: "Easy insights into business performance",
            cardDesc: 'We sincerely appreciate GITL team for delivering Power BI solution on time and with great quality. We really like the data visualisations & dashboards provided and it makes it easier for us to get a good grip on our business performance indicators.'
        },
        {
            id: 2,
            cardHeading: "Real-Time Warehouse Data Interfacing",
            cardDesc: 'We decided to choose the LS Retail NAV solution after technical. One of the most interesting aspects of this implementation is the Automated Data Capture System (ADCS) which provides a real-time interface between the handheld devices at the warehouse and the back-end ERP system at the head-office.'
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

            <ServiceSlider
                sectionHeading="Infor CloudSuite Services"
                sectionDesc="Leveraging our understanding of business processes refined through years of experience, we deliver end to end services along with strategic business insights powered by Infor Cloud Suite expertise."
            >
                  <Slider>
                        {serviceSliderData?.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className="bg-[#EFE9FB] rounded-lg">
                                    <img className="rounded-t-lg pl-4" src="/infor/blackstar.svg" alt="" />
                                    <div className="p-5">
                                        <h5 className="mb-2 text-2xl font-bold">{item.text}</h5>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Slider>
            </ServiceSlider>

            <CommonCardThreeSlider
                ID={"AIOfferings"}
                sectionImageUrl={""}
                sectionBGColor={"#561FC5"}
                sectionHeading={"Unlock More Potential with Add on Solution Offerings"}
                sectionDesc={
                    "Enhancing the features of business applications, our easily integrating specialized solutions intend to add "
                }
                sectionTextColor={"#FFF"}
                sectionHeaderMaxWidth={"40%"}
                x
                cardData={SOLUTION_DATA}
            ></CommonCardThreeSlider>

            <SectionWrapper style={{ height: '800px' }}>
                <SectionHeading
                    center
                    Heading={'Holistic and Future Ready'}
                    Desc={'We specialize in delivering cutting-edge Internet of Things (IIOT) solutions that are tailored to meet your unique needs.'}
                ></SectionHeading>

                <div class="w-full p-16 bg-[#F3F0FA] border-gray-200 rounded-3xl" style={{ transform: "translateY(27px)" }}>
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                        <div>
                            <h5 class="mb-2 text-[42px] font-bold ">Automation</h5>
                            <p class="text-xl font-semibold py-5" style={{ borderBottom: '1px solid #808080' }}>Smart Manufacturing ERP</p>
                            <p class="text-xl font-semibold py-5" style={{ borderBottom: '1px solid #808080' }}>Smart Manufacturing ERP</p>
                            <p class="text-xl font-semibold py-5" style={{ borderBottom: '1px solid #808080' }}>Smart Manufacturing ERP</p>
                            <p class="text-xl font-semibold py-5" style={{ borderBottom: '1px solid #808080' }}>Smart Manufacturing ERP</p>
                            <p class="text-xl font-semibold py-5" style={{ borderBottom: '1px solid #808080' }}>Smart Manufacturing ERP</p>
                            <p class="text-xl font-semibold py-5" style={{ borderBottom: '1px solid #808080' }}>Smart Manufacturing ERP</p>
                        </div>
                        <div>
                        </div>
                    </div>
                </div>
            </SectionWrapper>


            <HubExpertise style={{ paddingTop: '200px' }}
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

            <CaseStudiesSection casestudy={CASE_STUDIES_DATA} csLayout={"5"} />

            <BlogSection
                ID={"blog"}
                blogImageUrl={blogImageUrl}
                Heading={"Azure Data Lake - Data Storage Solution for Big Data Analytics"}
                Desc={"Data Science today has become essential for organizations that are looking to bring about predictability in their business functions. It removes the guesswork and provides companies with accurate insights related to product features, target audiences and user behavior."}
                Color={"white"}
                readMoreUrl={"https://www.godrejinfotech.com/blogDetails.aspx?blog=13"}
            ></BlogSection>


            <DistinctiveSection DistinctiveData={distinctiveData}
                ID={'Distinctive'} Title={'The Distinctive Edge'} Desc={'Our team applies in-depth AI/ML expertise to help businesses deploy machine learning models and algorithms, perform advanced data analytics, and achieve breakthrough results.'}
            >
            </DistinctiveSection>

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