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
            cardHeading: "Automotive/ Discrete/ Industrial",
            cardDesc: "",
            isArrow: false,
            cardTextColor: "white",
        },
        {
            id: 2,
            cardBGImageUrl:
                "/industry-spotlight/cards-backgrounds/card-bg--retail.png",

            cardBGColor: "#7F4EE1",
            cardHeading: "Engineering and construction",
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
            cardHeading: "Process Manufacturing",
            cardDesc:
                "",
            isArrow: false,
            cardTextColor: "white",
        },
        
        // Add more cards as needed
    ];

    const RPASolution2 = [
        {
            id: 1,
            cardBGColor: 'white',
            cardHeading: 'PS2.0 – Prosoft 2.0',
            cardDesc: 'Optimize project management and inventory control for businesses with multiple sites and warehouses',
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
            cardHeading: 'Industry 4.0 - Interface with MES',
            cardDesc: 'Bridge the gap between production and ERP systems, for synchronized production scheduling and inventory control',
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
            cardHeading: 'Industry 4.0 - IoT',
            cardDesc: 'Real-time machine analytics solutions help in predictive maintenance and improve productivity',
            isArrow: true,
            cardTextColor: 'black',
            cardTopImageUrl: 'https://flowbite.com/docs/images/blog/image-7.jpg',
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

            id: 4,
            cardBGColor: '#E4E4E4',
            cardHeading: 'Industry 4.0 – RPA – Robotic Process Automation',
            cardDesc: `Automate manual item coding and BOM creation using BOT, increasing master data accuracy`,
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

            id: 5,
            cardBGImageUrl: '/rpa/ArtboardBg.png',
            cardBGColor: '#EFE9FB',
            cardHeading: 'QCAT – Quality control Analysis Testing',
            cardDesc: 'Enhance quality control efficiency with online inspections and dynamic checklists ensuring end-to-end traceability',
            isArrow: true,
            cardTextColor: 'black',
            cardTopImageUrl: 'https://flowbite.com/docs/images/blog/image-2.jpg',
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

            id: 6,
            cardBGImageUrl: '/rpa/ArtboardBg.png',
            cardBGColor: '#EFE9FB',
            cardHeading: 'Mobile App – Industrial Safety & Field Quality',
            cardDesc: 'Enhance site quality control and safety, enabling prompt issue resolution and compliance',
            isArrow: true,
            cardTextColor: 'black',
            cardTopImageUrl: 'https://flowbite.com/docs/images/blog/image-2.jpg',
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

            id: 7,
            cardBGImageUrl: '/rpa/ArtboardBg.png',
            cardBGColor: '#EFE9FB',
            cardHeading: 'Quality App',
            cardDesc: 'Centralized solution for open quality order management and improved quality control and compliance',
            isArrow: true,
            cardTextColor: 'black',
            cardTopImageUrl: 'https://flowbite.com/docs/images/blog/image-2.jpg',
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

            id: 8,
            cardBGImageUrl: '/rpa/ArtboardBg.png',
            cardBGColor: '#EFE9FB',
            cardHeading: 'Production App',
            cardDesc: 'Enhanced production efficiency, enabling accurate record-keeping and improved decision-making',
            isArrow: true,
            cardTextColor: 'black',
            cardTopImageUrl: 'https://flowbite.com/docs/images/blog/image-2.jpg',
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

            id: 9,
            cardBGImageUrl: '/rpa/ArtboardBg.png',
            cardBGColor: '#EFE9FB',
            cardHeading: 'CPQ – Configure Price Quote',
            cardDesc: 'Enhance customer experience with precision product customization and efficient quote-to-order processing',
            isArrow: true,
            cardTextColor: 'black',
            cardTopImageUrl: 'https://flowbite.com/docs/images/blog/image-2.jpg',
            cardHoverData: [
                'abc',
                'abc',
                'abc',
                'abc',
                'abc',
                'abc',
            ]
        },

    ]

    const DATA_MGMT_DATA = [
        {
            id: 1,
            CardHeading: "Future of Factories",
            CardDesc:
                "",
            additionalData: `
             <ul class="max-w-md space-y-1 text-white list-disc">
                                    <li>
                                        Industry 4.0 
                                    </li>
                                    <li>
                                        Factory Track
                                    </li>
                                    <li>
                                        Intelligent Operations using AI and ML
                                    </li>
                                    <li>
                                        Industry 4.0 RPA – Robotic Process Automation
                                    </li>
                                    <li>
                                        Industry 4.0 -Interface with MES
                                    </li>
                                    <li>
                                        Industry 4.0 IoT Solution
                                    </li>
                                </ul>
            `
        },

        {
            id: 2,
            CardHeading: "IoT Enabled Products",
            CardDesc:
                "",
                additionalData: `
                <ul class="max-w-md space-y-1 text-white list-disc">
                                       <li>
                                           Industrial IoT 
                                       </li>
                                       <li>
                                           Plant Efficiency with IoT
                                       </li>
                                       <li>
                                           Asset PredictiveMaintenance
                                       </li>
                                   </ul>
               `
        },
        {
            id: 3,
            
            CardHeading: "Supply Chain Management",
            CardDesc:
                "",
                additionalData: `
                <ul class="max-w-md space-y-1 text-white list-disc">
                                       <li>
                                           Inventory Management 
                                       </li>
                                       <li>
                                           Fleet Management with IoT and AR
                                       </li>
                                       <li>
                                           Loftware 
                                       </li>
                                       <li>
                                           Production Planning and Execution Barcode & RFID
                                       </li>
                                       
                                   </ul>
               `
        },
        {
            id: 4,
            CardHeading: "Performance Management",
            CardDesc:
                "",
                additionalData: `
                <ul class="max-w-md space-y-1 text-white list-disc">
                                       <li>
                                           Product Lifecycle Management 
                                       </li>
                                       <li>
                                           Asset Management
                                       </li>
                                       <li>
                                           Vendor Management
                                       </li>
                                   </ul>
               `
        },
        {
            id: 5,
            
            CardHeading: "Advanced Manufacturing",
            CardDesc:
                "",
                additionalData: `
                <ul class="max-w-md space-y-1 text-white list-disc">
                                       <li>
                                           Stock Buffer Management 
                                       </li>
                                       <li>
                                           CCPM - Critical Chain Project Management
                                       </li>
                                       <li>
                                           Resource constraint planning andExecution
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
            link: "https://www.godrejinfotech.com/assets/pdf/case-studies/Manufacturer-Electrical-components-Automobile.pdf",
            color: "#000",
            bgCardColor: "#FCE6F4",
        },

        {
            imageURL: "/path/to/image1.jpg",
            title: "",

            heading: "Better Data Security and Customer Relationship",
            description:
                `India's Largest Manufacturer of Forklift Trucks Successfully Implements Salesforce Service Cloud Solution Integrated with Infor LN`,
            link: "https://www.godrejinfotech.com/assets/pdf/case-studies/Case-Study-Salesforce-Implementation.pdf",
            color: "#000",
            bgCardColor: "#EFE9FB",
        },
    ];

    const TESTIMONIAL_DATA = [
        {
            id: 1,
            cardHeading: "Expert Implementation & Support Service",
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


    return (
        <>
            <EntIntro
                title="Accelerate Manufacturing Operations with Integrated Cutting-Edge Solutions"
                desc="Optimize predict maintenance, enhance supply chain visibility and productivity"
                cta="Let's Connect"
                width="60%"
                video="https://gitl-usa.s3.us-west-1.amazonaws.com/banner1.mp4"
            />
            <OverviewSection Text={`Adopting automation enables our manufacturing clients to achieve transformative benefits, including enhanced quality, predictable supply chain and increased profitability.`} />

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
                sectionHeading={"Solution Offerings"}
                sectionDesc={"We deploy solutions that modernize every aspect of the manufacturing value chain from design and production to supply chain management and customer delivery."}
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
                sectionDesc="We equip manufacturing businesses with greater growth potential to drive agility and innovation across the entire production lifecycle."
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
                sectionHeading="Manufacturing Accelerators"
                sectionDesc="Our pre-configured solutions ensure seamless integration and rapid implementation."
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

            <IndustrySpotlight cardData={INDUSTRY_SPOTLIGHT} sectionDesc={'Godrej Infotech has extensive experience of working with more than 200+ customers in discrete and process manufacturing.'} />

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
                Heading={"Transformative Impact of MES on Manufacturing Operations"}
                Desc={"Manufacturing Execution System (MES) is pivotal in joining the gap between shop floor and enterprise-level operations in manufacturing. It offers real-time visibility into production activities which enables efficient control and optimization. MES incorporates an array of functionalities such as production scheduling, quality management, inventory tracking and performance analysis. As the digital pillar of smart factories, MES facilitates seamless communication and collaboration within manufacturing environment."}
                Color={"white"}
                readMoreUrl={"https://www.godrejinfotech.com/blogDetails.aspx?blog=13"}
            ></BlogSection>

            <ReviewSliderSection
                ID={"TESTIMONIALS"}
                Heading={"Delighted Customers Share their Successful Experience"}
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


const AutomationContent = () => {
    const services = [
        'IoT',
        'Data Driven Analytics-Data Lake',
        'Predictive & Preventive Maintenance',
        'Augmented Intelligence',
        'RPA',
        'Configure Price Quote',
        'Product Lifecycle Management',
        'Power BI Reporting',
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
        'Upgrade/Migrate to cloud',
        'ERP on cloud',
        'IoT Data management in Cloud',
        'Manufacturing Execution System in Cloud',
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
        'Smart Manufacturing ERP',
        'Customer Experience – CRM',
        'Supply Chain Management',
        'Process Optimization',
        'Enterprise Planning and Scheduling',
        'Shopfloor Management',
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