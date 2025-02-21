'use client';
import EntIntro from "@/components/EntIntro";
import OverviewSection from "@/sections/overview/OverviewSection";
import SectionWrapper from '@/components/SectionWrapper';
import SectionHeading from '@/components/SectionHeading';
import Image from 'next/image';
import IndustrySpotlight from "@/sections/industry-spotlight/industrySpotlight";
import SectionWithSlider from "@/sections/sectionWithSlider/SectionWithSlider";
import { Swiper, SwiperSlide } from "swiper/react";
import CaseStudiesSection from "@/sections/case-studies/CaseStudiesSection";
import BlogSection from "@/sections/blog/BlogSection";
import ReviewSliderSection from "@/sections/reviewSlider/ReviewSliderSection";
import TransformBusinessForm from '@/sections/transformBusinessFrom/TransformBusinessFromSection';
import CommonCardThreeSlider from "@/sections/commonCardThreeSlider/CommonCardThreeSlider";
import { Tabs } from "@/components/ui/tabs";
import SectionWrapperNew from '@/components/SectionWrapperNew';



function page() {
    const blogImageUrl = "/healthcare/blog-bg.webp";

    const tabs = [
        {
            title: "Automation ",
            value: "automation ",
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

    const OFFERING_DATA = [
        {
            id: 1,
            cardHeading: "Consulting Services",
            cardDesc:
                "Healthcare aligned digital strategy development for sustainable growth, enhancing operational efficiency.",
            icon:"/healthcare/offeringData/consultingServices.svg"    
            
        },
        {
            id: 2,
            cardHeading: "Implementation",
            cardDesc:
                "Deploy healthcare solutions, integrating analytics for enhanced operational efficiency.",
            icon:"/healthcare/offeringData/implementation.svg" 
        },
        {
            id: 3,
            cardHeading: "Upgrade & Migration Services",
            cardDesc:
                "Migrate legacy systems to cloud-based solutions, ensuring seamless data transition and optimized performance.",
            icon:"/healthcare/offeringData/upgrade.svg" 
        },
        {
            id: 4,
            cardHeading: "Support & Maintenance Services",
            cardDesc:
                "24/7 monitoring and prompt issue resolution, ensuring IT infrastructure uptime and performance.",
            icon:"/healthcare/offeringData/support.svg"
        },
        {
            id: 5,
            cardHeading: "Customization Services",
            cardDesc:
                "Tailored healthcare IT solutions to meet unique organizational needs, enhancing patient care and operational workflows.",
            icon:"/healthcare/offeringData/customization.svg"
            
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
    const CHALLENGES_LIST_DATA = [
        { id: 1, title: "Complex billing delays payments", icon: '/upgradeCloud/icons/ico--target.svg' },
        { id: 2, title: "Inadequate tech investment impacts healthcare quality", icon: '/upgradeCloud/icons/ico--target.svg' },
        { id: 3, title: "Fragmented data leads to suboptimal outcomes", icon: '/upgradeCloud/icons/ico--target.svg' },
        { id: 4, title: "Inefficient communication strains resource allocation", icon: '/upgradeCloud/icons/ico--target.svg' },
        { id: 5, title: "Ineffective resource management increases costs", icon: '/upgradeCloud/icons/ico--target.svg' },
        
    ];

    const INDUSTRY_SPOTLIGHT = [
        {
            id: 1,
            cardBGImageUrl:
                "/industry-spotlight/cards-backgrounds/card-bg--manufacturing.png",
            cardBGColor: "#7F4EE1",
            cardHeading: "Pharma Manufacturing",
            cardDesc: "",
            isArrow: false,
            cardTextColor: "white",
            additionalData: 
            `
            <p>Tailored solutions that enhance pharmaceutical business operations and streamlining equipment management  </p>
            `
        },
        {
            id: 2,
            cardBGImageUrl:
                "/industry-spotlight/cards-backgrounds/card-bg--retail.png",

            cardBGColor: "#7F4EE1",
            cardHeading: "Health Facilities",
            cardDesc:
                "",
            isArrow: false,
            cardTextColor: "white",
            additionalData: 
            `
            <p>Offering comprehensive Revenue Cycle Management (RCM) solutions that improve financial performance, optimizing revenue capture and financial operations.</p>
            `
        },
        {
            id: 3,
            cardBGImageUrl:
                "/industry-spotlight/cards-backgrounds/card-bg--trading-and-distribution.png",

            cardBGColor: "#7F4EE1",
            cardHeading: "Medical Equipment & Supplies",
            cardDesc:
                "",
            isArrow: false,
            cardTextColor: "white",
            additionalData: 
            `
            <p>We aim to elevate operations, covering product configuration and asset management for efficiency.</p>
            `
        },
        {
            id: 4,
            cardBGImageUrl:
                "/industry-spotlight/cards-backgrounds/card-bg--healthcare.png",

            cardBGColor: "#EFE9FB",
            cardHeading: "Pharma Distributors",
            cardDesc:
                "",
            isArrow: false,
            cardTextColor: "white",
            additionalData: 
            `
            <p>Advanced tech solutions optimize inventory control and distribution efficiency.</p>
            `
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

    const CASE_STUDIES_DATA = [
        {
            imageURL: "/CloudStackServices/case-studies/bg--coffee-beans.png",
            videoURL: "/CloudStackServices/case-studies/bg--video-industry.mp4",
            title: "Case Studies",
            heading: "Delivering Results that Matter",
            description:
                "",
            link: "/case-study-1",
            color: "#FFFFFF",
        },
        {
            imageURL: "",
            title: "",
            heading: "Faster Application Response Times & Better Resource Utilization",
            description:
                "Global Healthcare Solutions Organization Successfully Migrates IT Environment from .NET 2.0 to .NET 4.5",
            link: "https://www.godrejinfotech.com/knowledge-center/case-studies.aspx",
            color: "#000",
            bgCardColor: "#FCE6F4",
        },

        {
            imageURL: "/path/to/image1.jpg",
            title: "",

            heading: "Enhanced Efficiency & User Experience",
            description:
                "Indian Prominent Healthcare Organization Offering Emergency Medical Response Services Upgrades to Hexagon EAM 11.6",
            link: "https://www.godrejinfotech.com/knowledge-center/case-studies.aspx",
            color: "#000",
            bgCardColor: "#EFE9FB",
        },

        {
            imageURL: "/path/to/image1.jpg",
            title: "",

            heading: "Enhanced Efficiency & User Experience",
            description:
                "Indian Prominent Healthcare Organization Offering Emergency Medical Response Services Upgrades to Hexagon EAM 11.6",
            link: "https://www.godrejinfotech.com/knowledge-center/case-studies.aspx",
            color: "#000",
            bgCardColor: "#EFE9FB",
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
                title="Streamline healthcare operations with digital solutions"
                desc="Enhancing patient engagement, workflows and clinical outcomes"
                cta="Let's Connect"
                width="60%"
                video="/healthcare/video/pageBanner.mp4"
            />
            <OverviewSection Text={`Our digital solutions and services help healthcare organisations in developing a cohesive ecosystem, fostering collaboration and ensuring data accuracy.`} />

            <SectionWrapper BGColor="black">
                <div className="md:container mx-auto">
                    <SectionHeading
                        Color="white"
                        Heading="Challenges Confronting Healthcare Organisations"
                        Desc="Healthcare organisations face several challenges that impact their ability to deliver quality care and maintain operational efficiency. Key issues include:"
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
            {/* challenge end */}
            
                <SectionWrapperNew
                sectionHeading={"Our ACT Solution Offerings"}
                sectionDesc={"Healthcare providers must adopt innovative solutions for scalable infrastructure and increased revenue growth"}
                sectionTextColor="black"
                title="OUR OFFERINGS"
                sectionHeadingLayout="center"
                style={{ background: 'white' }}
            >
                <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col mx-auto w-full  items-start justify-start my-0">
                    <Tabs activeTabClassName={`!bg-[#5F22D9]`} contentClassName={`!mt-20`} tabClassName={`!px-10 hover:bg-[#5F22D9]`} containerClassName={`!my-2`} tabs={tabs} />
                </div>
            </SectionWrapperNew>
 
            {/* act solution */}

            <div className="rounded-3xl" style={{ backgroundColor: '#1D162B', marginTop: '-35px' }}>
                <div className="md:container mx-auto pt-20 flex h-[500px]" style={{ alignItems: 'center', overflow: 'hidden' }}>
                    <div className="w-full md:w-1/2">
                        <SectionHeading
                            Heading={`Service Offerings`}
                            Color={'white'}
                            Desc={`Expert IT strategy, implementation and optimization for streamlining clinical workflows and enhancing patient data management.`}
                            headingContainerWidth={'w-full'}
                        />
                    </div>
                    <div className="hidden md:w-1/2 md:block">
                        <img src="/infor/man.svg" style={{ width: '100%' }} />
                    </div>
                </div>
                <div className="md:container mx-auto bg-[#EFE9FB] py-20" style={{ zindex: '2', position: 'relative', borderTopLeftRadius: "24px", borderTopRightRadius: "24px", transform: "translateY(-28px)" }}>
                    <Swiper
                        slidesPerView={1}
                        navigation={false}
                        pagination={{ type: "bullets", clickable: true }}
                        autoplay={true}
                        loop={false}
                        spaceBetween={30}
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 16,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 24,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 32,
                            },
                        }}
                    >
                        {OFFERING_DATA.map((item, index) => (
                            <SwiperSlide key={item}>
                                <div className="bg-[#EFE9FB] rounded-lg">
                                    <img className="rounded-t-lg pl-4" src={item.icon} alt="" />
                                    <div className="p-5">
                                        <h5 className="mb-2 text-2xl font-bold">{item.cardHeading}</h5>
                                    </div>
                                    <p className="text-[20px] font-medium">{item.cardDesc}</p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>

            {/* end services */}

            <IndustrySpotlight cardData={INDUSTRY_SPOTLIGHT} sectionHeading={'Industry Spotlight'} sectionDesc={'Leveraging domain knowledge and digital transformation expertise, we tackle specific challenges across diverse healthcare verticals.'}/>

            <CaseStudiesSection casestudy={CASE_STUDIES_DATA} csLayout={"5"}  bgColor={'#d3d3d3'}/>
            
            <BlogSection
                ID={"blog"}
                blogImageUrl={blogImageUrl}
                Heading={"Asset Management for Healthcare Organizations"}
                Desc={"Healthcare asset maintenance encompasses the strategies and practices implemented to manage and preserve medical equipment and facilities. This process is vital in ensuring the smooth functioning of healthcare services, optimizing resource utilization, and delivering quality patient care."}
                Color={"white"}
                readMoreUrl={ [{id:'1', text:'Why Godrej Infotech', url:'https://www.godrejinfotech.com/blogDetails.aspx?blog=13'}]}
            ></BlogSection>

            {/* <ReviewSliderSection
                ID={"TESTIMONIALS"}
                Heading={"Delighted customers share their success experience"}
                Desc={''}
                Color="#ffffff"
                CardDataList={TESTIMONIAL_DATA}
                BGColor="#1D162B"
                SectionHeadingMaxWidth={'70%'}
            ></ReviewSliderSection> */}

            {/* transform business with us section */}
            <TransformBusinessForm Title={'Transform your business with us.'} Desc={"Let us discuss how our ACT model can help you with rapid growth."}>
            </TransformBusinessForm>
        </>
    )
}

const AutomationContent = () => {
    const services = [
        'Data Driven Analytics',
        'Predictive Maintenance for Assets',
        'Robotics and Automation ',
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
        'Cloud Consulting',
        'Upgrade/Migrate to cloud',
        'ERP on cloud',
        'Data Management',
        'DevOps',
        'Cloud Security Solutions',
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
        'ERP Implementation',
        'Supply Chain Management',
        'Finance Management',
        'Process Optimization',
        'Customer Experience – CRM',
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