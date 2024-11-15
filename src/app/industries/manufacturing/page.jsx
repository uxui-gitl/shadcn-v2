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
import BlogSliderSection from '@/sections/blogSlider/BlogSliderSection';
import CaseStudiesSection from "@/sections/case-studies/CaseStudiesSection";




function page() {
    const blogImageUrl = "/ai-ml/blog-bg.png";

    const imgBgURL = "/CloudStackServices/background/bg--strategic-partnership.png";

    const CHALLENGES_LIST_DATA = [
        { id: 1, title: "Inaccurate order-based material requirement planning and budget control", icon: '/upgradeCloud/icons/ico--target.svg' },
        { id: 2, title: "Ensuring consistent product quality and effective defect tracking ", icon: '/upgradeCloud/icons/ico--target.svg' },
        { id: 3, title: "Difficulty in optimizing production sequences, balancing workloads and handling disruptions ", icon: '/upgradeCloud/icons/ico--target.svg' },
        { id: 4, title: "Hassle with equipment maintenance due to lack of tracking and schedules", icon: '/upgradeCloud/icons/ico--target.svg' },
        { id: 5, title: "Limited access to real-time information hinders office and shop floor productivity ", icon: '/upgradeCloud/icons/ico--target.svg' },
        
    ];

    const blogSliderData = [
    {
      id: 1,
      cardBGImageUrl: '/ai-ml/blog-bg.png',
      cardBGColor: 'red',
      cardHeading: "MES Impact on Manufacturing Operations ",
      cardDesc: `'Manufacturing Execution System (MES) is pivotal in joining the gap between shop floor and enterprise-level operations in manufacturing.'`,
      cardTextColor: 'white',
      readMoreUrl: "#"
    },
    {
      id: 2,
      cardBGImageUrl: '/ai-ml/blog-bg.png',
      cardBGColor: 'red',
      cardHeading: "Legacy Modernization in Manufacturing Industry",
      cardDesc: 'The Manufacturing Industry is in midst of transformation with some organizations accelerating to Industry 4.0+ platforms while other organizations struggle with infrastructure which has been built for the past. ',
      cardTextColor: 'white',
      readMoreUrl: "#"
    },

  ]

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
            additionalData: `
      <ul class="space-y-4 text-gray-500 list-disc list-inside dark:text-gray-400">
          
          <li>
          Automotive/Discrete/Industrial 
              <ol class="ps-5 mt-2 space-y-1 list-decimal list-inside">
                  <li>Automotive OEM / Suppliers </li>
                  <li>Industrial Manufacturing </li>
                  <li>High-Tech & Electronics </li>
                  <li>Machinery & Equipment</li>
                  <li>Automotive Components</li>
                  <li>Electricals & Electronics</li>
                  <li>Valve</li>
                  <li>Cables</li>
                  <li>Optical Glass</li>
              </ol>
          </li>
      </ul>`
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
            additionalData: `
      <ul class="space-y-4 text-gray-500 list-disc list-inside dark:text-gray-400">
          
          <li>
          Engineering and construction
              <ol class="ps-5 mt-2 space-y-1 list-decimal list-inside">
                  <li>Refinery, Petrochemical & Process Equipment </li>
                  <li>Aerospace & Defense Equipment </li>
                  <li>Infrastructure / EPC with Turnkey & BOOT BOLT </li>
                  <li>Ship Design, Building & Repairs</li>
              </ol>
          </li>
      </ul>`
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
            additionalData: `
      <ul class="space-y-4 text-gray-500 list-disc list-inside dark:text-gray-400">
          
          <li>
          Process Manufacturing 
              <ol class="ps-5 mt-2 space-y-1 list-decimal list-inside">
                  <li>Chemicals</li>
                  <li>Paints</li>
                  <li>Pharmaceutical</li>
                  <li>Lubricants</li>
                  <li>Fragrance</li>
                  <li>Polymers</li>
                  <li>Glass</li>
                  <li>Cement</li>
                  <li>Bottling Plant</li>
              </ol>
          </li>
      </ul>`
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
            cardHeading: 'QCAT - Quality control Analysis Testing',
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
                                        Industry 4.0 with MES 
                                    </li>
                                    <li>
                                        Factory Track
                                    </li>
                                    <li>
                                        Intelligent Operations using AI and ML 
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


    const CASE_STUDIES_DATA = [
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
                title="Manufacturing Digitalization Starts Here"
                desc="Transforming Factory to Shop Floor Operations with Future-Proof Solutions"
                cta="Let's Connect"
                width="60%"
                video="https://gitl-usa.s3.us-west-1.amazonaws.com/banner1.mp4"
            />
            <OverviewSection Text={`Adopting automation enables our manufacturing clients to achieve transformative benefits, including enhanced quality, predictable supply chain and increased profitability.`} />

            <SectionWrapper BGColor="bg-primary-900">
                <div className="container mx-auto py-32">
                    <SectionHeading
                        Color="text-neutral-white"
                        Heading="Challenges Faced by Manufacturing Businesses"
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
                sectionHeading={"Solution Offerings"}
                sectionDesc={"We deploy solutions that modernize every aspect of the manufacturing value chain from design and production to supply chain management and customer delivery."}
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
                sectionHeading="Key Capabilities"
                sectionDesc="We equip manufacturing businesses with greater growth potential to drive agility and innovation across the entire production lifecycle."
                sectionTextColor='text-neutral-white'
                sectionHeadingLayout="horizontal"
                bgColor={"bg-primary-500"}
            >
                <Slider>
                    {DATA_MGMT_DATA?.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="p-6 bg-[transparent] border-[0.5px] border-white rounded-3xl border-opacity-20 min-h-[424px]">
                                <Image src={"/about/whiteStar.svg"} width={30} height={30} alt={"hioasdo"} className="mb-4" />
                                <div className="text-heading-02 leading-heading-02 font-semibold text-neutral-white">{item.CardHeading}</div>
                                <p className="text-body-01 leading-body-01 py-4 text-neutral-white">{item.CardDesc}</p>
                                <div dangerouslySetInnerHTML={{ __html: item?.additionalData }} />
                            </div>

                        </SwiperSlide>
                    ))}
                </Slider>

            </SectionWrapperNew>
            {/* capabilites section end */}

            <SectionWrapperNew
                bgColor={"bg-neutral-white"}
                sectionHeading="Manufacturing Accelerators"
                sectionDesc="Our pre-configured solutions ensure seamless integration and rapid implementation."
                sectionTextColor='text-primary-900'
                sectionHeadingLayout="left"
            >
                <Slider>
                    {RPASolution2?.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="w-full min-h-[50vh] bg-white rounded-3xl group overflow-hidden relative border-[0.5px] border-primary-900 border-opacity-20" >
                                <div className="h-[25vh] bg-slate-700" style={{ background: `url('/Transformation/sale-force-crm/m1.svg')`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}></div>
                                <div className="h-[35vh] p-5 relative">
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

            <IndustrySpotlight cardData={INDUSTRY_SPOTLIGHT} sectionDesc={'Godrej Infotech has extensive experience of working with more than 200+ customers in discrete and process manufacturing.'} />
            <CaseStudiesSection casestudy={CASE_STUDIES_DATA} csLayout={"5"} bgColor='bg-neutral-white' />




            <BlogSliderSection
        cardData={blogSliderData}
      ></BlogSliderSection>

            <ReviewSliderSection
                ID={"TESTIMONIALS"}
                Heading={"Delighted Customers Share their Successful Experience"}
                Desc={''}
                Color="text-neutral-white"
                CardDataList={TESTIMONIAL_DATA}
                BGColor="bg-primary-900"
                SectionHeadingMaxWidth={'70%'}
            ></ReviewSliderSection>

            {/* transform business with us section */}
            <TransformBusinessForm Title={'Transform your Business with us'} Desc={"Let us discuss how digital transformation solutions can help you with rapid growth. "}>
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
            <div className="relative invisible md:visible" style={{ backgroundImage: `url(/homeNew/tab1.svg)`, backgroundSize: 'cover' }}>
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
            <div className="relative invisible md:visible" style={{ backgroundImage: `url(/homeNew/tab1.svg)`, backgroundSize: 'cover' }}>
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
            <div className="relative invisible md:visible" style={{ backgroundImage: `url(/homeNew/tab1.svg)`, backgroundSize: 'cover' }}>
            </div>
        </div>
    );
};


export default page