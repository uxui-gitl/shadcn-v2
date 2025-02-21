"use client";
import EntIntro from "@/components/EntIntro";
import SectionWrapper from "@/components/SectionWrapper";
import SectionHeading from "@/components/SectionHeading";
import OverviewSection from "@/sections/overview/OverviewSection";
import CommonCardTwoSlider from "@/sections/commonCardTwoSlider/CommonCardTwoSlider";
import IndustrySpotlight from "@/sections/industry-spotlight/industrySpotlight";
import BenefitSliderSection from "@/sections/benefitSlider/BenefitSliderSection";
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
      icon: "/lsRetail/distinctiveEdge/successfulClient.svg",
    },
    {
      _id: 2,
      desc: "Expert Team of Highly Skilled Functional and Technical Professionals",
      icon: "/lsRetail/distinctiveEdge/expertTeam.svg",
    },
    {
      _id: 3,
      desc: "Profound Domain Expertise in Retail, E-Commerce, and Hospitality and Adept inDelivering Solutions Customized to Industry-Specific Requirements.",
      icon: "/lsRetail/distinctiveEdge/profoundDomain.svg",
    },
  ];
  const TESTIMONIAL_DATA = [
    {
      id: 1,
      cardHeading:
        "Leading Retail Coffee Chain in KSA Controls Consumption with LS Retail NAV",
      cardDesc:
        "Having the LS NAV system in place makes it extremely easy for our organization to make real-time decisions. The in-depth experience of the consultants at Godrej Infotech Limited greatly simplified our complex processes right from our business requirements to rollout.",
    },
    {
      id: 2,
      cardHeading:
        "Leading Fitness service provider in Saudi Arabia Implements LS Retail",
      cardDesc:
        "On behalf of our entire organization, I would like to thank the Godrej Infotech team that implemented Dynamics NAV 2017. As a result of this implementation, our organization is moving in the paperless direction. We have completely removed manual activities in revenue booking, subscription payments, and syncing of created master between NAV and CRM. GITL add-on for KSA Attendance and Payroll has helped us streamline our HR processes considerably. With the integrated ERP & CRM, we have witnessed a significant increase in the productivity of our operations.",
    },
    {
      id: 3,
      cardHeading:
        "Godrej Infotech Ltd successfully rolls out LS Central Hospitality in the World's first super-premium ice cream Franchise based out of KSA",
      cardDesc:
        "We congratulate the team from Godrej Infotech for completing the rollout of LS Central Hospitality. This solution has been deployed at our ice cream retail stores and has features to manage dining, takeaway, delivery, and cart sales for events. With this solution, the manual process for HR and Payroll activities is automated. The point-of-sale is 100% operational and has resulted in a 70% reduction in the time taken for material procurement and movement and we have also seen a 60% increase in the productivity of the finance process. Expiry date-based stock tracking and replenishment has helped in maintenance of adequate material stock levels.",
    },
  ];
  const blogImageUrl = "/lsRetail/blog-bg.webp";
  const CASE_STUDIES_DATA = [
    {
      imageURL: "/lsRetail/caseStudies.webp",
      title: "Case Studies",
      heading: "Elevating our customer experience with LS Retail",
      description: "",
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
      videoURL: "/lsRetail/videos/CaseStudy.mp4",
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
    {
      id: "1",
      icon: "/lsRetail/benefits/onDemandBusiness.svg",
      cardDesc: "On-demand Business Performance Insights at Convenience",
    },
    {
      id: "2",
      icon: "/lsRetail/benefits/improveCustomer.svg",
      cardDesc:
        "Improve Customer Experience with Integrated Loyalty Programs and Personalized Marketing Campaigns",
    },
    {
      id: "3",
      icon: "/lsRetail/benefits/accessFinancial.svg",
      cardDesc:
        "Access Financial Data, Point of Sale Systems, Supply Chain Management and more—all in one place",
    },
    {
      id: "4",
      icon: "/lsRetail/benefits/notifications.svg",
      cardDesc: "Notifications and Reports at all Channels on Fingertips",
    },
    {
      id: "5",
      icon: "/lsRetail/benefits/additionalIntegration.svg",
      cardDesc: "No More Additional Integration Cost",
    },
    {
      id: "6",
      icon: "/lsRetail/benefits/ensureUniformity.svg",
      cardDesc: "Ensure Uniformity in Financial Information",
    },
    {
      id: "7",
      icon: "/lsRetail/benefits/completeControl.svg",
      cardDesc:
        "Complete Control over Pricing, Inventory, Promotions and beyond",
    },
    {
      id: "8",
      icon: "/lsRetail/benefits/flexibleSystem.svg",
      cardDesc:
        "Flexible System Architecture and Modular Design to Scale Business",
    },
    {
      id: "9",
      icon: "/lsRetail/benefits/streamline.svg",
      cardDesc: "Streamline and Optimized Retail Operations",
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
      cardTextColor: "text-primary-white",
      additionalData: `
      
      <ul class="space-y-4 text-neutral-darkest-grey list-disc list-inside">
    
    <li>
    Retail
        <ul class="ps-5 mt-2 space-y-1 list-disc list-inside">
            <li>Point of Sale</li>
            <li>Loyalty Management</li>
            <li>Replenishment</li>
            <li>eCommerce Integration</li>
            <li>Store Operations</li>
            <li>Store Operations</li>
        </ul>
    </li>
</ul>`,
    },
    {
      id: 2,
      cardBGImageUrl:
        "/industry-spotlight/cards-backgrounds/card-bg--retail.png",

      cardBGColor: "#7F4EE1",
      cardHeading: "Duty-Free and Travel Retail",
      cardDesc:
        "AI-driven workflows, OCR and rule-based system enables accurate results",
      isArrow: false,
      cardTextColor: "white",
      additionalData: `
       <ul class="space-y-4 text-neutral-darkest-grey list-disc list-inside">
       
    <li>
    Duty-Free and Travel Retail
        <ul class="ps-5 mt-2 space-y-1 list-disc list-inside">
            <li>Multi-Currency Cash Back</li>
            <li>Transit Bank Guarantee Management</li>
            <li>Customer Quota-Based Offers</li>
            <li>Unified Platform for Retail Sales, Ingredients and Food Production, Bookings, and Reservations</li>
            <li>Automated Application of Tax-Free Rules</li>
            <li>Track Travelers' Preferences and Past Purchases for stores and eCommerce</li>
            <li>Manage Product Allowance Rules Easily according to local legislation</li>
        </ul>
    </li>
</ul>`,
    },
    {
      id: 3,
      cardBGImageUrl:
        "/industry-spotlight/cards-backgrounds/card-bg--trading-and-distribution.png",

      cardBGColor: "#7F4EE1",
      cardHeading: "Hospitality",
      cardDesc:
        "Manage contract workflows, forms and compliance with consistency and regulatory adherence",
      isArrow: false,
      cardTextColor: "white",
      additionalData: `
      <ul class="space-y-4 text-neutral-darkest-grey list-disc list-inside">
       
    <li>
    Hospitality
        <ul class="ps-5 mt-2 space-y-1 list-disc list-inside">
            <li>Restaurant POS (Fine dining, Take away, QSR &More)</li>
            <li>Kitchen Display System (KDS)</li>
            <li>Guest Loyalty</li>
            <li>Recipe Management</li>
            <li>Split Bill & Table Transfer</li>
          </ul>
    </li>
</ul>`,
    },

    // Add more cards as needed
  ];
  const RPASolution = [
    {
      id: 1,
      cardBGImageUrl: "/lsRetail/featuresFunctionalities/pos.webp",
      cardBGColor: "#7F4EE1",
      cardHeading: "Point of Sale (POS) System",
      cardDesc:
        "Intuitive interfaces, supporting various payment methods and streamlined operations for a hassle-free checkout experience.",
      isArrow: false,
      cardTextColor: "white",
      cardType: 1,
    },
    {
      id: 2,
      cardBGImageUrl:
        "/lsRetail/featuresFunctionalities/inventoryManagement.webp",
      cardBGColor: "#000",
      cardHeading: "Inventory Management",
      cardDesc:
        "Capabilities include real-time tracking of stock levels, replenishment management and inventory optimization across multiple locations.",
      isArrow: false,
      cardTextColor: "white",
      cardType: 2,
    },
    {
      id: 3,
      cardBGImageUrl: "/lsRetail/featuresFunctionalities/omnichannel.webp",
      cardBGColor: "#7F4EE1",
      cardHeading: "Omnichannel Retailing",
      cardDesc:
        "Integrating online and offline channels seamlessly ensuring a consistent experience for shoppers across all touchpoints.",
      isArrow: false,
      cardTextColor: "white",
      cardType: 1,
    },
    {
      id: 4,
      cardBGImageUrl:
        "/lsRetail/featuresFunctionalities/customerRelationship.webp",
      cardBGColor: "#EFE9FB",
      cardHeading: "Customer Relationship Management (CRM)",
      cardDesc:
        "Build and maintain customer relationships through personalized experiences and manage customer profiles, preferences, targeted marketing campaigns and loyalty programs to drive engagement.",
      isArrow: false,
      cardTextColor: "white",
      cardType: 2,
    },
    {
      id: 5,
      cardBGImageUrl: "/lsRetail/featuresFunctionalities/retailAnalytics.webp",
      cardBGColor: "#EFE9FB",
      cardHeading: "Retail Analytics",
      cardDesc:
        "Powerful analytics tools for sales trends, monitoring KPIs and identifying growth opportunities to optimize performance.",
      isArrow: false,
      cardTextColor: "white",
      cardType: 1,
    },
    {
      id: 6,
      cardBGImageUrl: "/lsRetail/featuresFunctionalities/backOffice.webp",
      cardBGColor: "#EFE9FB",
      cardHeading: "Back Office Management",
      cardDesc:
        " Features include financial management, purchasing, and vendor management. Streamlining processes and ensuring compliance enables retailers to work hassle free.",
      isArrow: false,
      cardTextColor: "white",
      cardType: 2,
    },
    {
      id: 7,
      cardBGImageUrl:
        "/lsRetail/featuresFunctionalities/flexibleCustomization.webp",
      cardBGColor: "#EFE9FB",
      cardHeading: "Flexible Customization",
      cardDesc:
        "From adding features to modifying workflows and integrating with third-party systems, retailers can adapt to changing requirements and stay competitive.",
      isArrow: false,
      cardTextColor: "white",
      cardType: 1,
    },
  ];

  return (
    <>
      <EntIntro
        title="Streamlined Retail Management"
        desc="Elevate customer experience with unified retail management solutions."
        cta="Let's Connect"
        width="60%"
        video="/lsRetail/videos/pageBanner.mp4"
      />
      <OverviewSection
        Text={`LS Central: Unified retail management solution integrating financials, POS, operations, supply chain, and e-commerce for seamless omnichannel experiences`}
      />
      <div
        className="py-32 rounded-3xl "
        style={{
          background: `url('/lsRetail/customerExperience.webp')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        <div className="container mx-auto flex justify-center">
          <div style={{ maxWidth: "600px" }}>
            <SectionHeading
              center={"true"}
              Color="text-neutral-white"
              headingContainerWidth="w-full"
              Heading="Our Offerings"
              Desc="Delivering experience of unified commerce with advanced retail management applications and ensuring personalized journey for every shopper."
            ></SectionHeading>
          </div>
        </div>

        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <div className=" p-5 bg-primary-400 rounded-3xl min-h-[324px]">
                <h5 className="mb-2 text-heading-01 leading-heading-02 font-bold text-neutral-white">
                  LS Central for Retail
                </h5>
                <p className="mb-3 text-body-01 leading-body-01 font-normal text-neutral-white ">
                  Seamlessly integrated cloud-based platform designed to
                  optimize the management of retail enterprise and enhance the
                  performance of individual store locations.
                </p>
              </div>
            </div>
            <div>
              <div className=" p-5 bg-secondary-200 rounded-3xl min-h-[324px]">
                <h5 className="mb-2 text-heading-01 leading-heading-02 font-bold text-neutral-white">
                  LS Central for Restaurants
                </h5>
                <p className="mb-3 text-body-01 leading-body-01 font-norma text-neutral-white ">
                  Comprehensive platform for restaurants, pubs, cafes, food
                  halls and other food service businesses to manage everything
                  from tableside ordering to inventory, kitchen operations and
                  more.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CommonCardTwoSlider
        ID={""}
        sectionImageUrl={""}
        sectionBGColor={"bg-secondary-10"}
        sectionHeading={"LS Retail Features and Functionalities"}
        sectionDesc={`Transform retail into thriving success with LS Retail's innovative solutions and expert business guidance and support.`}
        sectionTextColor={"text-primary-900"}
        sectionHeaderMaxWidth={"w-1/2"}
        setHeadingLayout={'horizontal'}
        cardData={RPASolution}
      ></CommonCardTwoSlider>
      <IndustrySpotlight
        sectionHeaderWidth="w-1/2"
        slidePerView={"3"}
        cardData={INDUSTRY_SPOTLIGHT}
        sectionHeading={"Retail Accelerators"}
        sectionDesc={
          "Understanding unique demands of segment and by leveraging tech capabilities, we equip businesses to thrive in competitive market."
        }
      />
      <BenefitSliderSection
        ID={"BENEFIT"}
        sectionBGColor={"bg-primary-900"}
        sectionHeading={"LS Central Benefits"}
        sectionDesc={
          "LS Central is the ultimate all-in-one solution for modern retailers. Join thousands of retailers worldwide who trust LS Central to power their success."
        }
        sectionTextColor={"text-white"}
        cardData={BENEFITS_CARDS_DATA}
        sectionHeaderWidth=""
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
          "With the digital culture finding its way into the lives of today’s urban & even rural population, many organizations that were previously reluctant to move to e-commerce due to their thriving brick and mortar business model ..."
        }
        Color={"text-white"}
        readMoreUrl={[{id:'1', text:'Why Godrej Infotech', url:'https://www.godrejinfotech.com/blogDetails.aspx?blog=17'}]}
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
        Color="text-neutral-white"
        CardDataList={TESTIMONIAL_DATA}
        BGColor="bg-primary-900"
        SectionHeadingMaxWidth={"70%"}
        setHeadingLayout={"left"}
      ></ReviewSliderSection>
      {/* End--Testimonial-Section================================================================ */}

      {/* Start--Transform-Business-Form-Section============================================================== */}
      <TransformBusinessForm
        Title={
          "Transform Storefront and Make every Sales Count with Our LS Retail Expertise"
        }
        Desc={
          "Share your details and allow us to tailor the right solution for you!"
        }
      ></TransformBusinessForm>
    </>
  );
};

export default page;
