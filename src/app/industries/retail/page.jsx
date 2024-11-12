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
    const blogImageUrl = "/retail/blog-bg.webp";

    const imgBgURL = "/CloudStackServices/background/bg--strategic-partnership.png";

    const CHALLENGES_LIST_DATA = [
        { id: 1, title: "Inconsistent omnichannel experiences", icon: '/upgradeCloud/icons/ico--target.svg' },
        { id: 2, title: "Limited personalization and targeted marketing", icon: '/upgradeCloud/icons/ico--target.svg' },
        { id: 3, title: "Inaccurate inventory forecasting and stockouts", icon: '/upgradeCloud/icons/ico--target.svg' },
        { id: 4, title: "High operational costs and limited scalability", icon: '/upgradeCloud/icons/ico--target.svg' },
        { id: 5, title: "Missed opportunities for cross-selling and upselling", icon: '/upgradeCloud/icons/ico--target.svg' },
        { id: 6, title: "High shipping costs and delayed deliveries", icon: '/upgradeCloud/icons/ico--target.svg' },

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
            cardHeading: "Retail",
            cardDesc: "",
            isArrow: false,
            cardTextColor: "white",
            additionalData: `
      <ul class="space-y-4 text-gray-500 list-disc list-inside dark:text-gray-400">
    <li>
        Retail
        <ol class="ps-5 mt-2 space-y-1 list-decimal list-inside">
            <li>Hypermarket</li>
            <li>Supermarket</li>
            <li>Eyewear Stores</li>
            <li>Fashion Retail</li>
            <li>Speciality Stores</li>
        </ol>
    </li>
</ul>`
        },
        {
            id: 2,
            cardBGImageUrl:
                "/industry-spotlight/cards-backgrounds/card-bg--retail.png",

            cardBGColor: "#7F4EE1",
            cardHeading: "Hospitality",
            cardDesc:
                "AI-driven workflows, OCR and rule-based system enables accurate results",
            isArrow: false,
            cardTextColor: "white",
            additionalData: `
      <ul class="space-y-4 text-gray-500 list-disc list-inside dark:text-gray-400">
    <li>
        Hospitality
        <ol class="ps-5 mt-2 space-y-1 list-decimal list-inside">
            <li>Full-Service (Fine Dining) Restaurants</li>
            <li>Quick & Fast Service Rest</li>
            <li>Food Services</li>
           
        </ol>
    </li>
</ul>`
        },
        {
            id: 3,
            cardBGImageUrl:
                "/industry-spotlight/cards-backgrounds/card-bg--trading-and-distribution.png",

            cardBGColor: "#7F4EE1",
            cardHeading: "Travel Retail",
            cardDesc:
                "Manage contract workflows, forms and compliance with consistency and regulatory adherence",
            isArrow: false,
            cardTextColor: "white",
            additionalData: `
            <ul class="space-y-4 text-gray-500 list-disc list-inside dark:text-gray-400">
          <li>
              Hospitality
              <ol class="ps-5 mt-2 space-y-1 list-decimal list-inside">
                  <li>Duty free & Travel Retail</li>
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
            cardHeading: 'Customer Experience',
            cardDesc: '',
            isArrow: true,
            cardTextColor: 'black',
            cardTopImageUrl: '/retail/solutionOfferings/customerExperience.svg',
            cardHoverData: [
                'Salesforce',
                'Microsoft D365 CRM',
                'Infor CRM',
                'D365 Commerce',
                'LS Central - Kiosk',
                'POS',
                'Clienteling',
            ]
        },
        
        {
            id: 2,
            cardBGColor: 'white',
            cardHeading: 'Ecommerce',
            cardDesc: '',
            isArrow: true,
            cardTextColor: 'black',
            cardTopImageUrl: '/retail/solutionOfferings/ecommerce.svg',
            cardHoverData: [
                'Adobe Commerce Cloud',
                'Shopify',
                'Odoo Commerce',
                'Woo Commerce',
                'Salesforce Commerce',
                'Big Commerce',
            ]
        },
        
        {
            id: 3,
            cardBGColor: 'white',
            cardHeading: 'Supply chain management',
            cardDesc: '',
            isArrow: true,
            cardTextColor: 'black',
            cardTopImageUrl: '/retail/solutionOfferings/supplyChain.svg',
            cardHoverData: [
                'Infor WMS',
                ]
        },

        {
            id: 4,
            cardBGColor: 'white',
            cardHeading: 'Data Insights',
            cardDesc: '',
            isArrow: true,
            cardTextColor: 'black',
            cardTopImageUrl: '/retail/solutionOfferings/dataInsights.svg',
            cardHoverData: [
                'Power BI',
                'BIRST',
                'Tableau',
                ]
        },
        {
            id: 5,
            cardBGColor: 'white',
            cardHeading: 'Intelligent technologies',
            cardDesc: '',
            isArrow: true,
            cardTextColor: 'black',
            cardTopImageUrl: '/retail/solutionOfferings/intelligentTech.svg',
            cardHoverData: [
                'IoT',
                
                ]
        },
        {
            id: 6,
            cardBGColor: 'white',
            cardHeading: 'Integration Services',
            cardDesc: '',
            isArrow: true,
            cardTextColor: 'black',
            cardTopImageUrl: '/retail/solutionOfferings/integrationServ.svg',
            cardHoverData: [
                'Oracle',
                'SAP',
                'LS Retail',
                'Microsoft D365',
                'ECommerce',
                'Warehouse Management',
                ]
        },


    ]

    const keyResponsibilityData = [
        {
          title: "Retail Store Transformation",
          desc:
            "Enabling personalization in sales process, loyalty management programs, and enhancing customer experience with retail stores modernization.",
            
        },
    
        {
          title: "Supply Chain Management and Tracking",
          desc:
            "Increasing the responsiveness of supply chain with flexibility and effective order management.",
        },
        {
          title: "Commerce Transformation",
          desc:
            "Modernizing the shopping journey of customers for global customer base increasing operational effectiveness.",
         
        },
        {
          title: "Integrated Digital Functionalities",
          desc:
            "A single intelligent platform serving multiple channels, streamlining data sharing, helping in improving operational efficiency.",
        },
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
            CardHeading: "Retail Store Transformation",
            CardDesc:
                "Enabling personalization in sales process, loyalty management programs, and enhancing customer experience with retail stores modernization.",
            isArrow: "true",
            link: [],
            additionalData: `
             <ul class="max-w-md space-y-1 text-white list-disc">
                                    <li>
                                        Customer experience (CX) modernization
                                    </li>
                                    <li>
                                        Digital stores development
                                    </li>
                                    <li>
                                        Point-of-Sale (POS) modernization
                                    </li>
                                    <li>
                                        Clienteling
                                    </li>
                                    <li>
                                        Personalization & loyalty management
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
            CardHeading: "Supply Chain Management and Tracking",
            CardDesc:
                "Increasing the responsiveness of supply chain with flexibility and effective ordermanagement.",
            isArrow: "true",
            link: [],
            additionalData: `
             <ul class="max-w-md space-y-1 text-white list-disc">
                                    <li>
                                        Omni channel order management
                                    </li>
                                    <li>
                                        End-to-end supply chain tracking
                                    </li>
                                    <li>
                                        Multichannel and last mile management
                                    </li>
                                    <li>
                                        Delivery re-routin
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
            CardHeading: "Commerce Transformation",
            CardDesc:
                "Modernizing the shopping journey of customers for global customer base increasing operational effectiveness.",
            isArrow: "true",
            link: [],
            additionalData: `
             <ul class="max-w-md space-y-1 text-white list-disc">
                                    <li>
                                        Omni-channel Commerce for B2B/B2C Integration
                                    </li>
                                    <li>
                                        Intelligent Order Management Systems
                                    </li>
                                    <li>
                                        Digital payments
                                    </li>
                                    <li>
                                        Scam Protection
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
            CardHeading: "Integrated Digital Functionalities",
            CardDesc:
                "A single intelligent platform serving multiple channels, streamlining data sharing, helping in improving operational efficiency.",
            isArrow: "true",
            link: [],
            additionalData: `
             <ul class="max-w-md space-y-1 text-white list-disc">
                                    <li>
                                        Automated Warehousing
                                    </li>
                                    <li>
                                        Dynamics 365 for Retail, Operations, Commerce
                                    </li>
                                    <li>
                                        Merchandising Solutions
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
            heading: "Retail Projects Highlights",
            description: "World's top-notch businesses choose us for our industry knowledge and excellent technical acumen",
            link: "/case-study-1",
            color: "#FFFFFF",
            bgCardColor: "#2B1624",
        },
        {
            imageURL: "",
            title: "",
            heading: "Approval based Workflows and Unified Financial & Merchandising Insights",
            description:
                "Global Travel Retailer Gains Cost Efficiency and Lowers Total Cost of Ownership with the All-in-One NAV LS Retail Pack",
            link: "https://www.godrejinfotech.com/assets/pdf/case-studies/GlobalTravelRetailer_NAVLS_IndiaUAE.pdf",
            color: "#000",
            bgCardColor: "#FCE6F4",
        },

        {
            imageURL: "/path/to/image1.jpg",
            title: "",

            heading: "Comprehensive Audit Trails and Automated Matching Reports",
            description:
                "Saudi Arabia's Hypermarket Chain Accelerate the Business Process by 40% and Boost its Scalability with LS Retail - Microsoft Dynamics Platform",
            link: "https://www.godrejinfotech.com/assets/pdf/case-studies/HypermarketChain_NAVLS_KSA.pdf",
            color: "#000",
            bgCardColor: "#EFE9FB",
        },
    ];

    const TESTIMONIAL_DATA = [
        {
            id: 1,
            cardHeading: "Effective Retail Solution Implementation & Support",
            cardDesc: `Our earnest gratitude to Godrej Infotech for their exceptional service and genuine support during the implementation/ support of Microsoft Dynamics NAV, LS Retail and Payroll add-on. Our team is highly impressed with GITL team's meticulous conduct, dedication, professionalism, and profound knowledge regarding the retail domain`,
            designation:`- Manager,`,
            companyName:`Saudi Arabia based Superstore`
        },
        {
            id: 2,
            cardHeading: "Dedicated team and Expert Consultation",
            cardDesc: `Optical retail demands complex solutions, and Godrej Infotech's expert advice in Microsoft Dynamics implementation and support has been valuable. Huge thanks to the innovative and dedicated Godrej Infotech team – keep up the awesome work!`,
            designation:`- General Manager IT,`,
            companyName:`Indian Eyewear Brand`
        },
        {
            id: 3,
            cardHeading: "Streamlined Operations with Cost effective Solution",
            cardDesc: `We're delighted to share significant benefits from our IT partnership with Godrej Infotech Limited as our IT solutions partner. Implementing the LS Retail Solution has streamlined our processes, aligning with shared values of simplicity, cost-effectiveness and high quality`,
            designation:`- IT manager,`,
            companyName:` Saudi Arabia's Hypermarket Retail Chain`
        },

    ];


    return (
        <>
            <EntIntro
                title="Expert Digital Solutions for Retailers"
                desc="Create seamless shopping experiences across channels and touchpoint"
                cta="Let's Connect"
                width="60%"
                video="/retail/video/pageBanner.mp4"
            />
            <OverviewSection Text={`From adoption of CRM and e-commerce to the integration of data analytics, our expert team holds extensive experience of providing comprehensive advance solutions for global retail businesses.`} />

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

           

            <SectionWrapperNew style={{ backgroundColor: "#fff" }}
                sectionHeading="Solution Offerings"
                sectionDesc="From specialty stores to large-scale retailers, we help businesses with enhanced competency, customer engagement and inclusive performance. "
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
                                    {/* <p class="mb-3 text-[16px] font-medium text-[#000] min-h-[144px]">{item?.cardDesc}</p> */}
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

            {/* key responsibility */}
        <SectionWrapperNew
        sectionHeading={'Key Capabilities'}
        sectionDesc={`Streamline finance, HR, supply chain and customer experience with Oracle Fusion Cloud's integrated solutions.`}
        sectionTextColor={'#fff'}
        sectionHeadingLayout="horizontal"
        style={{ backgroundColor: '#5F22D9' }}
      >

        <Slider slidesPerView={3.2}>
          {keyResponsibilityData?.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="p-6 bg-[transparent]" style={{ borderRight: '1px solid #d3d3d3' }}>
                <Image src={"/about/whiteStar.svg"} width={30} height={30} alt={"hioasdo"} className="mb-4" />
                <div className="text-[28px] text-white">{item?.title}</div>
                <p className="text-[20px] py-4 text-white">{item?.desc}</p>
              </div>
            </SwiperSlide>
          ))}
        </Slider>
      </SectionWrapperNew>

      <AcceleratorSection
                style={{ backgroundColor: '#EFE9FB' }}
                ID={"Accelerator"}
                Heading={"Accelerator"}
                Desc={
                    "Helping speciality stores to large –scale retailers to increase business competency."
                }
                Color={""}
            >
                <p className="font-semibold">Order Management System (OMS)</p>
                <p>Integrated with D365 F&O, this value-added solution provides real-time tracking, automated stock management, and customer onboarding.</p>

            </AcceleratorSection>

      <IndustrySpotlight cardData={INDUSTRY_SPOTLIGHT} sectionDesc={'Driving growth across various business sectors with scalable Business Central expertise.'} />

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
                        <h1 className="text-3xl font-medium mb-4 lg:mb-6">
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
                            <Link href={casestudy[2].link} target="_blank">
                            <OutlinedButtonWithArrow size={56} />
                            </Link>
                        </div>}
                    </div>
                </div>


            </SectionWrapperNew>
            {/* end case studies */}
            <BlogSection
                ID={"blog"}
                blogImageUrl={blogImageUrl}
                Heading={"Adobe Commerce Solution for Online Business"}
                Desc={"Formerly known as Magento Commerce, it is an e-commerce platform development tool that builds multi-channel e-commerce experiences, equipped with robust security, high performance, and intuitive interfaces for B2B and B2C merchants."}
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
            <TransformBusinessForm Title={'Transform your Business with us'} Desc={"Let’s discuss how digital transformation can help you with rapid growth."}>
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