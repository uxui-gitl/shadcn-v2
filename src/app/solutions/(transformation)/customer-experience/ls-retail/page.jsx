"use client";
import EntIntro from "@/components/EntIntro";
import SectionWrapper from '@/components/SectionWrapper';
import SectionHeading from '@/components/SectionHeading';
import OverviewSection from "@/sections/overview/OverviewSection";
import CommonCardTwoSlider from "@/sections/commonCardTwoSlider/CommonCardTwoSlider";
import IndustrySpotlight from "@/sections/industry-spotlight/industrySpotlight";
import BenefitSliderSection from '@/sections/benefitSlider/BenefitSliderSection';
import CaseStudiesSection from "@/sections/case-studies/CaseStudiesSection";
import BlogSection from "@/sections/blog/BlogSection";
import DistinctiveSection from "@/sections/distinctive/DistinctiveSection";
import TransformBusinessForm from "@/sections/transformBusinessFrom/TransformBusinessFromSection";
import ReviewSliderSection from "@/sections/reviewSlider/ReviewSliderSection";

const page = () => {
  const DISTINCTIVE_DATA = [
    {
      _id: 1,
      desc: "50+ Successful Client Engagements for LS Retail Solution across the Globe",
      icon: "",
    },
    {
      _id: 2,
      desc: "Expert Team of Highly Skilled Functional and Technical Professionals",
      icon: "",
    },
    {
      _id: 3,
      desc: "Profound Domain Expertise in Retail, E-Commerce, and Hospitality and Adept inDelivering Solutions Customized to Industry-Specific Requirements.",
      icon: "",
    },
  ];
  const TESTIMONIAL_DATA = [
    {
      id: 1,
      cardHeading: "Leading Retail Coffee Chain in KSA Controls Consumption with LS Retail NAV",
      cardDesc:
        "Having the LS NAV system in place makes it extremely easy for our organization to make real-time decisions. The in-depth experience of the consultants at Godrej Infotech Limited greatly simplified our complex processes right from our business requirements to rollout.",
    },
    {
      id: 2,
      cardHeading: "Leading Fitness service provider in Saudi Arabia Implements LS Retail",
      cardDesc:
        "On behalf of our entire organization, I would like to thank the Godrej Infotech team that implemented Dynamics NAV 2017. As a result of this implementation, our organization is moving in the paperless direction. We have completely removed manual activities in revenue booking, subscription payments, and syncing of created master between NAV and CRM. GITL add-on for KSA Attendance and Payroll has helped us streamline our HR processes considerably. With the integrated ERP & CRM, we have witnessed a significant increase in the productivity of our operations.",
    },
    {
      id: 3,
      cardHeading: "Godrej Infotech Ltd successfully rolls out LS Central Hospitality in the World's first super-premium ice cream Franchise based out of KSA",
      cardDesc:
        "We congratulate the team from Godrej Infotech for completing the rollout of LS Central Hospitality. This solution has been deployed at our ice cream retail stores and has features to manage dining, takeaway, delivery, and cart sales for events. With this solution, the manual process for HR and Payroll activities is automated. The point-of-sale is 100% operational and has resulted in a 70% reduction in the time taken for material procurement and movement and we have also seen a 60% increase in the productivity of the finance process. Expiry date-based stock tracking and replenishment has helped in maintenance of adequate material stock levels.",
    },
  ];
  const blogImageUrl = "/ai-ml/blog-bg.png";
  const CASE_STUDIES_DATA = [
    {
      imageURL: "/CloudStackServices/case-studies/bg--coffee-beans.png",
      videoURL: "/CloudStackServices/case-studies/bg--video-industry.mp4",
      title: "Case Studies",
      heading: "Elevating our customer experience with LS Retail",
      description:
        "",
      link: "/case-study-1",
      color: "#FFFFFF",
    },
    {
      imageURL: "",
      title: "",
      heading: "NAV-LS Retail Pack Enhances Cost Efficiency",
      description:
        "Global Travel Retailer Gains Cost Efficiency and Lowers Total Cost of Ownership with the All-in-One NAV LS Retail Pack ",
      link: "https://www.godrejinfotech.com/assets/pdf/case-studies/GlobalTravelRetailer_NAVLS_IndiaUAE.pdf",
      color: "#000",
      bgCardColor: "#FCE6F4",
    },

    {
      imageURL: "/path/to/image1.jpg",
      title: "",

      heading: "40% Faster Business Operations",
      description:
        "Saudi Arabia's Hypermarket Chain Accelerate the Business Process by 40% and Boost its Scalability with LS Retail - Microsoft Dynamics Platform",
      link: "https://www.godrejinfotech.com/assets/pdf/case-studies/HypermarketChain_NAVLS_KSA.pdf",
      color: "#000",
      bgCardColor: "#EFE9FB",
    },
    {
      imageURL: "/CloudStackServices/case-studies/bg--electical-devices.png",
      title: "",
      heading: "Better customer experience with end-to-end visibility",
      description:
        "Large Retailer in Mauritius Capitalizes Discount Matrix based on Operational Hierarchy with MS Dynamics & LS Retail",
      link: "https://www.godrejinfotech.com/assets/pdf/case-studies/LargeRetailerinMauritiusSuccessfullyImplementsMSNAV2017andLSRetail.pdf",
      color: "#000",
      bgCardColor: "#E1F2EF",
    },
    // Add more case studies here...
  ];

  const BENEFITS_CARDS_DATA = [

    { id: '1', icon:'', cardDesc: 'On-demand Business Performance Insights at Convenience' },
    { id: '2', icon:'', cardDesc: 'Improve Customer Experience with Integrated Loyalty Programs and Personalized Marketing Campaigns' },
    { id: '3', icon:'', cardDesc: 'Access Financial Data, Point of Sale Systems, Supply Chain Management and more—all in one place' },
    { id: '4', icon:'', cardDesc: 'Notifications and Reports at all Channels on Fingertips' },
    { id: '5', icon:'', cardDesc: 'No More Additional Integration Cost' },
    { id: '6', icon:'', cardDesc: 'Ensure Uniformity in Financial Information' },
    { id: '7', icon:'', cardDesc: 'Complete Control over Pricing, Inventory, Promotions and beyond' },
    { id: '8', icon:'', cardDesc: 'Flexible System Architecture and Modular Design to Scale Business' },
    { id: '9', icon:'', cardDesc: 'Streamline and Optimized Retail Operations' },
    
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
  const RPASolution = [
    {
      id: 1,
      cardBGImageUrl: 'https://flowbite.com/docs/images/blog/image-1.jpg',
      cardBGColor: '#7F4EE1',
      cardHeading: 'Point of Sale (POS) System',
      cardDesc: 'Intuitive interfaces, supporting various payment methods and streamlined operations for a hassle-free checkout experience.',
      isArrow: false,
      cardTextColor: 'white',
      cardType: 1,
    },
    {

      id: 2,
      cardBGImageUrl: '',
      cardBGColor: '#000',
      cardHeading: 'Inventory Management',
      cardDesc: 'Capabilities include real-time tracking of stock levels, replenishment management and inventory optimization across multiple locations.',
      isArrow: false,
      cardTextColor: 'white',
      cardType: 2,
    },
    {

      id: 3,
      cardBGImageUrl: 'https://flowbite.com/docs/images/blog/image-6.jpg',
      cardBGColor: '#7F4EE1',
      cardHeading: 'Omnichannel Retailing',
      cardDesc: 'Integrating online and offline channels seamlessly ensuring a consistent experience for shoppers across all touchpoints.',
      isArrow: false,
      cardTextColor: 'white',
      cardType: 1,
    },
    {

      id: 4,
      cardBGImageUrl: '/rpa/ArtboardBg.png',
      cardBGColor: '#EFE9FB',
      cardHeading: 'Customer Relationship Management (CRM)',
      cardDesc: 'Build and maintain customer relationships through personalized experiences and manage customer profiles, preferences, targeted marketing campaigns and loyalty programs to drive engagement.',
      isArrow: false,
      cardTextColor: 'white',
      cardType: 2,
    },
    {

      id: 5,
      cardBGImageUrl: 'https://flowbite.com/docs/images/blog/image-4.jpg',
      cardBGColor: '#EFE9FB',
      cardHeading: 'Retail Analytics',
      cardDesc: 'Powerful analytics tools for sales trends, monitoring KPIs and identifying growth opportunities to optimize performance.',
      isArrow: false,
      cardTextColor: 'white',
      cardType: 1,
    },
    {


      id: 6,
      cardBGImageUrl: '/rpa/ArtboardBg.png',
      cardBGColor: '#EFE9FB',
      cardHeading: 'Back Office Management',
      cardDesc: ' Features include financial management, purchasing, and vendor management. Streamlining processes and ensuring compliance enables retailers to work hassle free.',
      isArrow: false,
      cardTextColor: 'white',
      cardType: 2,
    },
    {


      id: 7,
      cardBGImageUrl: '/rpa/ArtboardBg.png',
      cardBGColor: '#EFE9FB',
      cardHeading: 'Flexible Customization',
      cardDesc: 'From adding features to modifying workflows and integrating with third-party systems, retailers can adapt to changing requirements and stay competitive.',
      isArrow: false,
      cardTextColor: 'white',
      cardType: 2,
    },
  ]


  return (
    <>
      <EntIntro
        title="Streamlined Retail Management"
        desc="Elevate customer experience with unified retail management solutions."
        cta="Let's Connect"
        width="60%"
        video="https://gitl-usa.s3.us-west-1.amazonaws.com/banner1.mp4"
      />
      <OverviewSection Text={`LS Central: Unified retail management solution integrating financials, POS, operations, supply chain, and e-commerce for seamless omnichannel experiences`} />
      <div className="pt-36" style={{ background: `url('/Transformation/customers/bgimage3.svg')`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
        <div className="md:container mx-auto flex justify-center">
          <div style={{ maxWidth: '600px' }}>
            <SectionHeading
              center={'true'}
              Color="white"
              headingContainerWidth="w-full"
              Heading="Our Offerings"
              Desc="Delivering experience of unified commerce with advanced retail management applications and ensuring personalized journey for every shopper."
            ></SectionHeading>
          </div>
        </div>

      <div className="md:container px-10 mx-auto pb-[40px] pt-[100px]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <div className=" p-10 bg-[#5F22D9] rounded-3xl">
                  <h5 className="mb-2 text-[42px] leading-[50px] font-bold text-white tracking-tight">LS Central for Retail</h5>
                <p className="mb-3 font-normal text-white ">Seamlessly integrated cloud-based platform designed to optimize the management of retail enterprise and enhance the performance of individual store locations.</p>
                
              </div>
            </div>
            <div>
            <div className=" p-10 bg-[#F18BCB] rounded-3xl">
                  <h5 className="mb-2 text-[42px] leading-[50px] font-bold text-white tracking-tight">LS Central for Restaurants</h5>
                <p className="mb-3 font-normal text-white ">Comprehensive platform for restaurants, pubs, cafes, food halls and other food service businesses to manage everything from tableside ordering to inventory, kitchen operations and more.</p>
                
              </div>
            </div>
          </div>
        </div>
      </div>
      <CommonCardTwoSlider
        ID={''}
        sectionImageUrl={''}
        sectionBGColor={'#E1F2EF'}
        sectionHeading={'LS Retail Features and Functionalities'}
        sectionDesc={`Transform retail into thriving success with LS Retail's innovative solutions and expert business guidance and support.`}
        sectionTextColor={'#000'}
        sectionHeaderMaxWidth={'40%'}
        cardData={RPASolution}
      >
      </CommonCardTwoSlider>
      <IndustrySpotlight cardData={INDUSTRY_SPOTLIGHT} />
      <BenefitSliderSection
        ID={'BENEFIT'}
        sectionBGColor={'#1D162B'}
        sectionHeading={'LS Central Benefits'}
        sectionDesc={'LS Central is the ultimate all-in-one solution for modern retailers. Join thousands of retailers worldwide who trust LS Central to power their success.'}
        sectionTextColor={'white'}
        cardData={BENEFITS_CARDS_DATA}
        sectionHeadingMaxWidth={'100%'}
      />
      <CaseStudiesSection
        casestudy={CASE_STUDIES_DATA}
        csLayout={"1"}
        bgColor={"#E4E4E4"}
      />

      <BlogSection
        ID={"blog"}
        blogImageUrl={blogImageUrl}
        Heading={"Secure & Scalable E-Commerce Solution from Adobe"}
        Desc={
          "With the digital culture finding its way into the lives of today’s urban & even rural population, many organizations that were previously reluctant to move to e-commerce due to their thriving brick and mortar business model have started to enhance their online ecosystems, leading to a greater demand for e-Commerce solutions. Some interesting statistics on this topic as per IBEF (India Brand Equity Foundation) are:"
        }
        Color={"white"}
      ></BlogSection>

      {/* Start--Distinctive-Section============================================================== */}
      <DistinctiveSection
        DistinctiveData={DISTINCTIVE_DATA}
        ID={"Distinctive"}
        Title={"The Distinctive Edge"}
        Desc={
          "Experience the difference our expert implementation services can make for your retail business"
        }
      ></DistinctiveSection>
      {/* End--Distinctive-Section================================================================ */}
      {/* Start--Testimonial-Section============================================================== */}
      <ReviewSliderSection
        ID={"TESTIMONIALS"}
        Heading={"Delighted customers share their success experience"}
        Desc={""}
        Color="#ffffff"
        CardDataList={TESTIMONIAL_DATA}
        BGColor="#1D162B"
        SectionHeadingMaxWidth={"70%"}
      ></ReviewSliderSection>
      {/* End--Testimonial-Section================================================================ */}

      {/* Start--Transform-Business-Form-Section============================================================== */}
      <TransformBusinessForm
        Title={"Transform Storefront and Make every Sales Count with Our LS Retail Expertise"}
        Desc={
          "Share your details and allow us to tailor the right solution for you!"
        }
      ></TransformBusinessForm>


    </>

  );
};

export default page;
