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




function page() {
    const blogImageUrl = "/professionalServices/blog-bg.webp";

    const imgBgURL = "/CloudStackServices/background/bg--strategic-partnership.png";

    const CHALLENGES_LIST_DATA = [
        { id: 1, title: "Contract lifecycle management inefficiencies", icon: '/upgradeCloud/icons/ico--target.svg' },
        { id: 2, title: "Inconsistent costing methodologies and accounting standards", icon: '/upgradeCloud/icons/ico--target.svg' },
        { id: 3, title: "Complex multi-entity governance and consolidation", icon: '/upgradeCloud/icons/ico--target.svg' },
        { id: 4, title: "Complex revenue recognition and financial reporting", icon: '/upgradeCloud/icons/ico--target.svg' },
        { id: 5, title: "Inefficient labor time tracking and cost allocation", icon: '/upgradeCloud/icons/ico--target.svg' },
        { id: 6, title: "Operational scalability and growth constraints", icon: '/upgradeCloud/icons/ico--target.svg' },
       
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
            cardHeading: "Education",
            cardDesc: "",
            isArrow: false,
            cardTextColor: "white",
        },
        {
            id: 2,
            cardBGImageUrl:
                "/industry-spotlight/cards-backgrounds/card-bg--retail.png",

            cardBGColor: "#7F4EE1",
            cardHeading: "IT Consultancy",
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
            cardHeading: "Real Estate",
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
            cardHeading: "Non-Government Association",
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
            cardHeading: "Automotive",
            cardDesc: "",
            isArrow: false,
            cardTextColor: "white",
        },
        {
            id: 6,
            cardBGImageUrl:
                "/industry-spotlight/cards-backgrounds/card-bg--project.png",

            cardBGColor: "#EFE9FB",
            cardHeading: "Plant Maintenance",
            cardDesc: "",
            isArrow: false,
            cardTextColor: "white",
        },
        {
            id: 7,
            cardBGImageUrl:
                "/industry-spotlight/cards-backgrounds/card-bg--project.png",

            cardBGColor: "#EFE9FB",
            cardHeading: "Hospitality",
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
            CardHeading: "Functions",
            CardDesc:
                "",
            isArrow: "true",
            link: [],
            additionalData: `
             <ul class="max-w-md space-y-1 text-white list-disc ">
                                    <li>
                                        Customer management
                                    </li>
                                    <li>
                                        Real time activity tracking by mobile apps
                                    </li>
                                    <li>
                                        AMC contract management
                                    </li>
                                    <li>
                                        Supplier & customer claims
                                    </li>
                                    <li>
                                        Preventive & schedule maintenance
                                    </li>
                                    <li>
                                        Digital documentation
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
            CardHeading: "IoT Enabled Products",
            CardDesc:
                "",
            isArrow: "true",
            link: [],
            additionalData: `
             <ul class="max-w-md space-y-1 text-white list-disc list-inside">
                                    <li>
                                        Industrial IoT
                                    </li>
                                    <li>
                                        Plant efficiency with IoT
                                    </li>
                                    <li>
                                        Asset predictive maintenance
                                    </li>
                                    <li>
                                        Architecture designing through IoT
                                    </li>                                    
                                </ul>
            `
        },
        {
            id: 3,
            BGImageUrl: "",
            BGColor: "#fff",
            CardBGColor: "transparent",
            CardTextColor: "white",
            CardTitle: "",
            CardIconUrl: "/upgradeCloud/icons/ico--target.svg",
            CardHeading: "Supply Chain Management",
            CardDesc:
                "",
            isArrow: "true",
            link: [],
            additionalData: `
             <ul class="max-w-md space-y-1 text-white list-disc list-inside">
                                    <li>
                                        Spare parts management
                                    </li>
                                    <li>
                                        Fleet management with IoT and AR
                                    </li>
                                    <li>
                                        System logistics management
                                    </li>
                                    <li>
                                        Equipment rental management
                                    </li>
                                    <li>
                                        Multi-site management
                                    </li>                                    
                                </ul>
            `
        },
        {
            id: 4,
            BGImageUrl: "",
            BGColor: "#fff",
            CardBGColor: "transparent",
            CardTextColor: "white",
            CardTitle: "",
            CardIconUrl: "/upgradeCloud/icons/ico--target.svg",
            CardHeading: "Performance Management",
            CardDesc:
                "",
            isArrow: "true",
            link: [],
            additionalData: `
             <ul class="max-w-md space-y-1 text-white list-disc list-inside">
                                    <li>
                                        Product lifecycle management

                                    </li>
                                    <li>
                                        Asset management
                                    </li>
                                    <li>
                                        Hierarchy workflow management
                                    </li>
                                    <li>
                                        Financial tracking
                                    </li>                                   
                                </ul>
            `
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
            heading: "Optimizing Operational Costs by 25%",
            description: "Infor LN Managed Support Services for Europe's Leading Marine Services Provider",
            link: "/case-study-1",
            color: "#FFFFFF",
            bgCardColor: "#2B1624",
        },
        {
            imageURL: "",
            title: "",
            heading: "Streamlined Operations",
            description:
                "Indian Prominent Healthcare Organization Offering Emergency Medical Response Services Upgrades to Hexagon EAM 11.6",
            link: "/case-study-1",
            color: "#000",
            bgCardColor: "#FCE6F4",
        },

        {
            imageURL: "/path/to/image1.jpg",
            title: "",

            heading: "Reduced Manual Effort and Enhancing Scalability",
            description:
                "Prominent logistics service provider implements Infor CloudSuite WMS – Adwar",
            link: "/case-study-1",
            color: "#000",
            bgCardColor: "#EFE9FB",
        },
    ];

    const TESTIMONIAL_DATA = [
        {
            id: 1,
            cardHeading: "Efficient Infor LN Implementation",
            cardDesc: 'On behalf of our entire organization, please accept our sincere appreciation for the excellent job Godrej Infotech Limited has done over the past several months in implementation of LN ERP. It was an enormous undertaking but went smoothly and efficiently! Godrej was able to quickly understand our business needs, priorities and was able to make positive and quality contribution during LN ERP implementation, which was appreciated by all team members of our organization.',
            designation: '-	Procurement & Project Manager,',
            companyName: 'Global Supplier of Process Equipments'
        },
        
    ];


    return (
        <>
            <EntIntro
                title="Helping Professional Services Firms to Thrive Digitally"
                desc="Navigate complexities of digital change, streamline operations and enhance customer experience"
                cta="Let's Connect"
                width="60%"
                video="/professionalServices/video/pageBanner.mp4"
            />
            <OverviewSection Text={`We help firms like yours to focus on improving customer-centricity and increasing business performance. Our solutions optimize timesheets, expense management & entity consolidation for improved responsiveness.`} />

            <SectionWrapper BGColor="black">
                <div className="md:container mx-auto">
                    <SectionHeading
                        Color="white"
                        Heading="Knocking Business Challenges"
                        Desc="From managing multiple entities to navigating complex projects, professional service organisations face several obstacles such as"
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
                sectionDesc={"Results-focused and agile solutions for professional services firms."}
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
                sectionDesc="We help firms to adapt to evolving market demands and capitalize on new opportunities."
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

            {/* <SectionWrapperNew style={{ backgroundColor: "#fff" }}
                sectionHeading="Unlock potential with our Custom Solutionss"
                sectionDesc="At Godrej Infotech, we invest in your future. With a wide range of learning and development programs, we help you grow professionally and personally."
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

            </SectionWrapperNew> */}
            {/* custome solution */}

            <AcceleratorSection
                style={{ backgroundColor: '#EFE9FB' }}
                ID={"Accelerator"}
                Heading={"Accelerator"}
                Desc={
                    "Prebuilt customizable solutions for seamless integration, faster implementation and quicker ROI."
                }
                Color={""}
            >
                <p className="font-semibold">Intellectual Property (IP) Management</p>
                <p>Integrated with Microsoft Navision, this value-added solution helps from creating patent to copyright data saved to government data registration.  </p>

            </AcceleratorSection>

            <IndustrySpotlight cardData={INDUSTRY_SPOTLIGHT} sectionHeading={'Industry Spotlight'} sectionDesc={'We serve a diverse range of professional services firms, delivering tailored solutions to address unique industry challenges.'}/>

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
                        {/* <h1 className="text-3xl lg:text-5xl font-medium mb-4 lg:mb-6"> */}
                        <h1 className="text-5xl font-medium mb-4 lg:mb-6">
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
                Heading={"Selecting the Right IT Partner"}
                Desc={"It's imperative for professional services businesses to conduct a thorough assessment of their unique requirements and objectives."}
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
            <TransformBusinessForm Title={'Transform your business with us'} Desc={"Let us discuss how digital transformation solutions can help you with rapid growth.n"}>
            </TransformBusinessForm>

        </>
    )
}


const AutomationContent = () => {
    const services = [
        'Incident handling with customer portals',
        'Augmented Intelligence',
        'Asset/ equipment tracking solution ',
        'RFID based GPS tracking',
        'Quality control analysis system',
        'Revenue recognition platform',
        'Data driven analytics solutions',
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
            <div className="relative" style={{ backgroundImage: `url(/professionalServices/tab1.svg)`, backgroundSize: 'cover' }}>
            </div>
        </div>
    );
};

const CloudContent = () => {
    const data = [
        'Cloud Consulting and Computing',
        'Upgrade/Migrate to cloud',
        'ERP on cloud',
        'Data management on Cloud',
        'M365',
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
            <div className="relative" style={{ backgroundImage: `url(/professionalServices/tab2.svg)`, backgroundSize: 'cover' }}>
            </div>
        </div>
    );
};

const TransformationContent = () => {
    const data = [
        'Stakeholder role assignment',
        'Accounting and invoicing system',
        'Customer experience solutions',
        'Integrated sales, project, finance and workforce management',
        'Client and contractor management',
        'Project management',
        'Finance and Accounting Digital Integration',
        'IT architecture design',
        'Organizational hierarchy',
        'Field activity planning and management',
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
            <div className="relative" style={{ backgroundImage: `url(/professionalServices/tab3.svg)`, backgroundSize: 'cover' }}>
            </div>
        </div>
    );
};


export default page