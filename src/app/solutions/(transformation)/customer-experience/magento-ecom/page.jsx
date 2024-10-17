"use client";
import EntIntro from "@/components/EntIntro";
import SectionWrapper from '@/components/SectionWrapper';
import SectionHeading from '@/components/SectionHeading';
import OverviewSection from "@/sections/overview/OverviewSection";
import Image from "next/image";
import CommonCardTwoSlider from "@/sections/commonCardTwoSlider/CommonCardTwoSlider";
import CommonCardThreeSlider from '@/sections/commonCardThreeSlider/CommonCardThreeSlider';
import SectionWidthSlider from "@/sections/sectionWithSlider/SectionWithSlider";

import BlogSection from "@/sections/blog/BlogSection";
import TransformBusinessForm from "@/sections/transformBusinessFrom/TransformBusinessFromSection";
import DistinctiveSection from "@/sections/distinctive/DistinctiveSection";
import BenefitSliderSection from '@/sections/benefitSlider/BenefitSliderSection';
import IndustrySpotlight from "@/sections/industry-spotlight/industrySpotlight";
import SectionWrapperNew from '@/components/SectionWrapperNew';
import Slider from "@/components/Slider";
const page = () => {
 
  const INDUSTRY_SPOTLIGHT = [
    {
      id: 1,
      cardBGImageUrl:
        "/industry-spotlight/cards-backgrounds/card-bg--manufacturing.png",
      cardBGColor: "#7F4EE1",
      cardHeading: "Entertainment & Media",
      cardDesc: "",
      isArrow: false,
      cardTextColor: "white",
    },
    {
      id: 2,
      cardBGImageUrl:
        "/industry-spotlight/cards-backgrounds/card-bg--retail.png",

      cardBGColor: "#7F4EE1",
      cardHeading: "Automotive",
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
      cardHeading: "Fashion & Accessories",
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
      cardHeading: "Business & Office Solutions",
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
      cardHeading: "Home & Lifestyle",
      cardDesc: "",
      isArrow: false,
      cardTextColor: "white",
    },
    {
      id: 6,
      cardBGImageUrl:
        "/industry-spotlight/cards-backgrounds/card-bg--project.png",

      cardBGColor: "#EFE9FB",
      cardHeading: "B2B Wholesale & Distribution",
      cardDesc: "",
      isArrow: false,
      cardTextColor: "white",
    },
    // Add more cards as needed
  ];
  const BENEFITS_CARDS_DATA = [

    { id: '1', icon:'', cardDesc: 'Enhanced Visibility: Increase brand visibility through online channels, reaching potential customers across various platforms.' },
    { id: '2', icon:'', cardDesc: 'Improved Customer Experience: Convenient shopping experience with easy navigation, transactions and personalized recommendations.' },
    { id: '3', icon:'', cardDesc: 'Data-driven Insights: Gain valuable insights into customer behaviour, preferences and purchasing patterns through analytics tools.' },
    { id: '4', icon:'', cardDesc: 'Scalability: Easily scale online store to accommodate growing business demands without significant infrastructure investments.' },
    { id: '5', icon:'', cardDesc: '24/7 Accessibility: Shop anytime, anywhere, leading to increased sales opportunities and revenue generation.' },

  ];
  const distinctiveData = [
    {
      _id: 1,
      desc: "Strong experience in C-Commerce (Customer & Channel Commerce) domain using Magento CE & Enterprise enabling retailers and manufacturers to digitize the end-to-end customer experience journey across all touch points.",
      icon: "",
    },
    {
      _id: 2,
      desc: "In-depth understanding of unique business requirements to deliver customized ecommerce solution.",
      icon: "",
    },
    {
      _id: 3,
      desc: "Strategic consultation on future product roadmaps to drive business growth and ecommerce success.",
      icon: "",
    },
    {
      _id: 4,
      desc: "Comprehensive troubleshooting, evaluation, and optimization of Commerce solutions to ensure seamless performance.",
      icon: "",
    },
    {
      _id: 5,
      desc: "Harnessing the full potential of ecommerce platforms for maximum growth and ROI.",
      icon: "",
    },
    {
      _id: 6,
      desc: "Delivery of bespoke ecommerce solutions aligned with specific business objectives.",
      icon: "",
    },
  ]

  const blogImageUrl = "/ai-ml/blog-bg.png";
  const ultimateChoiceData = [
    {
      id: 1,
      BGImageUrl: "",
      BGColor: "#fff",
      CardBGColor: "transparent",
      CardTextColor: '#fff',
      CardTitle: "",
      CardIconUrl: "/upgradeCloud/icons/ico--target.svg",
      CardHeading: "Sample Heading",
      CardDesc:
        "Scalability according to evolving business needs.Scalability according to evolving business needs.",
      isArrow: "",
      link: [],
    },

    {
      id: 2,
      BGImageUrl: "",
      BGColor: "#fff",
      CardBGColor: "transparent",
      CardTextColor: '#fff',
      CardTitle: "",
      CardIconUrl: "/upgradeCloud/icons/ico--target.svg",
      CardHeading: "Sample Heading",
      CardDesc:
        "Faster development cycles with pay-as-you-go model offering cost effectiveness and business agility",
      isArrow: "",
      link: [],
    },
    {
      id: 3,
      BGImageUrl: "",
      BGColor: "#fff",
      CardBGColor: "transparent",
      CardTextColor: '#fff',
      CardTitle: "",
      CardIconUrl: "/upgradeCloud/icons/ico--target.svg",
      CardHeading: "Sample Heading",
      CardDesc:
        "Drive business agility and improved ROI with automation",
      isArrow: "",
      link: [],
    },
    {
      id: 4,
      BGImageUrl: "",
      BGColor: "#fff",
      CardBGColor: "transparent",
      CardTextColor: '#fff',
      CardTitle: "",
      CardIconUrl: "/upgradeCloud/icons/ico--target.svg",
      CardHeading: "Sample Heading",
      CardDesc:
        "Highest levels of security and privacy, ensuring data is safeguarded",
      isArrow: "",
      link: [],
    },
  ];
  const serviceOfferingData = [
    {
      id: 1,
      cardBGColor: '#fff',
      cardHeading: 'E-commerce Web Design Services',
      cardDesc: `Improve user experience with data-driven design that aligns with the brand's goals'`,
      isArrow: true,
      cardTextColor: 'black',
      cardTopImageUrl: 'https://flowbite.com/docs/images/blog/image-1.jpg'
    },
    {

      id: 2,
      cardBGColor: '#fff',
      cardHeading: 'E-commerce Development',
      cardDesc: 'Optimize the e-commerce platform with our technical expertise',
      isArrow: true,
      cardTextColor: 'black',
      cardTopImageUrl: 'https://flowbite.com/docs/images/blog/image-4.jpg'
    },
    {

      id: 3,
      cardBGColor: '#fff',
      cardHeading: 'Seamless Integrations',
      cardDesc: ' Effortlessly integrate tools and extensions, ensuring smooth operations and feature-rich e-stores',
      isArrow: true,
      cardTextColor: 'black',
      cardTopImageUrl: 'https://flowbite.com/docs/images/blog/image-7.jpg'
    },
    {

      id: 4,
      cardBGColor: '#E4E4E4',
      cardHeading: 'Cloud Infrastructure',
      cardDesc: 'Gain secure and reliable cloud infrastructure to enable business growth',
      isArrow: true,
      cardTextColor: 'black',
      cardTopImageUrl: 'https://flowbite.com/docs/images/blog/image-1.jpg'
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
        CardHeading: "Whatsapp Conversational Commerce",
        CardDesc:
            "Seamlessly integrate WhatsApp into your ecommerce strategy, enabling personalized customer interactions, automated support, and streamlined ordering.",
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
      CardHeading: "ERP Integration",
      CardDesc:
          " Unify ecommerce operations with ERP integration, synchronizing inventory, orders and customer data.",
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
        CardHeading: "Click and Collect",
        CardDesc:
            "Offer customers flexibility and convenience with Click and Collect, enabling online ordering and in-store pickup.",
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
      CardHeading: "Order Management Solution",
      CardDesc:
          "Streamline ecommerce operations with a comprehensive Order Management Solution, optimizing fulfillment, inventory management, and customer satisfaction.",
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
      CardHeading: "Mobile-Centric Design",
      CardDesc:
          "Elevate mobile commerce with responsive, intuitive ecommerce designs.",
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
      CardHeading: "SEO-Friendly",
      CardDesc:
          "Develop search engine-friendly store designs to attract customers.",
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
      CardHeading: "Multi-currency Capabilities",
      CardDesc:
          "Multilingual and multi-currency support for global audience.",
      isArrow: "true",
      link: [],
    },
    {
      id: 8,
      BGImageUrl: "",
      BGColor: "#fff",
      CardBGColor: "transparent",
      CardTextColor: "white",
      CardTitle: "",
      CardIconUrl: "/upgradeCloud/icons/ico--target.svg",
      CardHeading: "Efficient Single-Page Checkouts",
      CardDesc:
          "Checkout process with customised single-page designs, eliminating lengthy forms and enhancing efficiency.",
      isArrow: "true",
      link: [],
    },
    {
      id: 9,
      BGImageUrl: "",
      BGColor: "#fff",
      CardBGColor: "transparent",
      CardTextColor: "white",
      CardTitle: "",
      CardIconUrl: "/upgradeCloud/icons/ico--target.svg",
      CardHeading: "Seamless App Integration",
      CardDesc:
          "Integrate applications securely, lower costs, and maintain PCI compliance.",
      isArrow: "true",
      link: [],
    },
  ]
  const setChallengesList = [
    { id: 1, title: "Understanding user behavior and successfully converting users into buyers", icon: '/upgradeCloud/icons/ico--target.svg' },
    { id: 2, title: "Integrating third-party services without compromising performance", icon: '/upgradeCloud/icons/ico--target.svg' },
    { id: 3, title: "Scaling ecommerce platforms to handle sudden traffic surges", icon: '/upgradeCloud/icons/ico--target.svg' },
    { id: 4, title: "Customer retention through effective communication strategies", icon: '/upgradeCloud/icons/ico--target.svg' },
    { id: 5, title: "Ensuring secure payment gateways to protect customer data", icon: '/upgradeCloud/icons/ico--target.svg' },
    { id: 6, title: "Managing complex products with multiple variants", icon: '/upgradeCloud/icons/ico--target.svg' },
    { id: 7, title: "Delivering personalized customer experiences across channels", icon: '/upgradeCloud/icons/ico--target.svg' },
    { id: 8, title: "Streamlining order management to reduce fulfillment times", icon: '/upgradeCloud/icons/ico--target.svg' },
    { id: 9, title: "Implementing efficient inventory management to minimize stockouts", icon: '/upgradeCloud/icons/ico--target.svg' },
    { id: 10, title: "Simplifying returns and refund processes for customer satisfaction", icon: '/upgradeCloud/icons/ico--target.svg' },
  ];

  const RPASolution = [
    {
      id: 1,
      cardBGImageUrl: 'https://flowbite.com/docs/images/blog/image-1.jpg',
      cardBGColor: '#7F4EE1',
      cardHeading: 'Shopify',
      cardDesc: 'A comprehensive platform integrating ecommerce and point-of-sale features for streamlining operations and business expansion',
      isArrow: false,
      cardTextColor: 'white',
      cardType: 1,
    },
    {
  
      id: 2,
      cardBGImageUrl: '',
      cardBGColor: '#000',
      cardHeading: 'Odoo Commerce',
      cardDesc: 'Elevate online presence with visually appealing online shops and easy checkout',
      isArrow: false,
      cardTextColor: 'white',
      cardType: 2,
    },
    {
  
      id: 3,
      cardBGImageUrl: 'https://flowbite.com/docs/images/blog/image-6.jpg',
      cardBGColor: '#7F4EE1',
      cardHeading: 'Adobe Commerce',
      cardDesc: 'Attract and engage customers and deliver better shopping experience with advanced ecommerce capabilities',
      isArrow: false,
      cardTextColor: 'white',
      cardType: 1,
    },
    {
  
      id: 4,
      cardBGImageUrl: '/rpa/ArtboardBg.png',
      cardBGColor: '#EFE9FB',
      cardHeading: 'WooCommerce',
      cardDesc: 'Experience in enterprise-grade ecommerce with secure payments, shipping, and inventory management',
      isArrow: false,
      cardTextColor: 'white',
      cardType: 2,
    },
    {
  
      id: 5,
      cardBGImageUrl: 'https://flowbite.com/docs/images/blog/image-4.jpg',
      cardBGColor: '#EFE9FB',
      cardHeading: 'Salesforce Commerce',
      cardDesc: 'Deliver seamless experiences that appeal to and convert modern shoppers into customers effectively',
      isArrow: false,
      cardTextColor: 'white',
      cardType: 1,
    },
    {
  
  
      id: 6,
      cardBGImageUrl: '/rpa/ArtboardBg.png',
      cardBGColor: '#EFE9FB',
      cardHeading: 'BigCommerce',
      cardDesc: 'Go-to ecommerce solution for established & growing businesses, with online store, SEO, hosting & marketing',
      isArrow: false,
      cardTextColor: 'white',
      cardType: 2,
    },
  ]

  return (
    <>
      <EntIntro
        title="Ensure Ecommerce Success with Strategic Solutions and Customer Insights"
        desc="Scalable and Secure Ecommerce Platform for Ambitious Businesses"
        cta="Let's Connect"
        width="60%"
        video="https://gitl-usa.s3.us-west-1.amazonaws.com/banner1.mp4"
      />
      <OverviewSection Text={`Our ecommerce expertise enhances brand image, streamlines ordering & drives business growth with visually stunning, technically advanced solutions.`} />

      <SectionWrapper style={{
        background: `url('/Transformation/customers/bgimage2.svg')`, backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}>
        <div className="md:container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div></div>
            <div>
              <SectionHeading
                Heading={' E-commerce Development Challenges  '}
                Color={'white'}
                Desc={''}
              />

              <ul className="mt-2 space-y-4 w-full text-white">
                {setChallengesList.map((challenge, index) => (
                  <li
                    key={challenge.id}
                    className={`flex items-start py-6 border-b-[0.5px] border-white w-full ${index === setChallengesList.length - 1 ? 'border-b-0' : ''}`}
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
            </div>
          </div>
        </div>

      </SectionWrapper>

      <CommonCardTwoSlider
        ID={''}
        sectionImageUrl={''}
        sectionBGColor={'#E1F2EF'}
        sectionHeading={'Ecommerce Solutions'}
        sectionDesc={'Discover customizable ecommerce solutions for global reach and increased revenue'}
        sectionTextColor={'#000'}
        sectionHeaderMaxWidth={'40%'}
        cardData={RPASolution}
      >
      </CommonCardTwoSlider>

      <CommonCardThreeSlider
        ID={''}
        sectionImageUrl={''}
        sectionBGColor={'#1D162B'}
        sectionHeading={'Ecommerce Services'}
        sectionDesc={"Launch, grow and optimize online store with our comprehensive ecommerce services"}
        sectionTextColor={'#fff'}
        cardData={serviceOfferingData}
      >

      </CommonCardThreeSlider>

      {/* <SectionWidthSlider
        ID={"ultimateChoiceData"}
        sectionHeading={"Infor CRM Offerings"}
        sectionDesc={
          "Count on us for an impactful deployment that finely tunes Infor CRM to elevate your sales operations."
        }
        sectionTextColor="white"
        cardData={ultimateChoiceData}
        sectionBGColor="#5F22D9"
        setHeadingLayout="horizontal"

      /> */}
      {/* <SectionWrapperNew style={{ backgroundColor: "#5F22D9" }}
                sectionHeading="Ecommerce Capabilities"
                sectionDesc="At Godrej Infotech, we invest in your future. With a wide range of learning and development programs, we help you grow professionally and personally."
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

            </SectionWrapperNew> */}
            {/* capabilites section end */}

       <IndustrySpotlight cardData={INDUSTRY_SPOTLIGHT} sectionHeading={'Industry Spotlight'} sectionDesc={'Ecommerce solutions tailored to the unique needs of industry aimed to maximize conversions with optimized checkout, streamlined shipping, and personalized marketing.'} />
      
      <BenefitSliderSection
        ID={'BENEFIT'}
        sectionBGColor={'#1D162B'}
        sectionHeading={'Ecommerce Solution Benefits'}
        sectionDesc={'Explore how a seamless ecommerce experience can benefit your business.'}
        sectionTextColor={'white'}
        cardData={BENEFITS_CARDS_DATA}
        sectionHeadingMaxWidth={'100%'}
      />
  <BlogSection
        ID={"blog"}
        blogImageUrl={blogImageUrl}
        Heading={"Secure & Scalable E-Commerce Solution from Adobe"}
        Desc={
          "With the digital culture finding its way into the lives of today’s urban & even rural population, many organizations that were previously reluctant to move to e-commerce due to their thriving brick and mortar business model have started to enhance their online ecosystems, leading to a greater demand for e-Commerce solutions. Some interesting statistics on this topic as per IBEF (India Brand Equity Foundation) are: "
        }
        maxWidth={'50%'}
        Color={"white"}
      >

  </BlogSection>

    <DistinctiveSection DistinctiveData={distinctiveData}
        ID={'Distinctive'} Title={'Why Godrej Infotech'} Desc={''}
      >
      </DistinctiveSection>
      
      <TransformBusinessForm
        Title={"Let Our Experts Guide Your Ecommerce Journey!"}
        Desc={
          "Trust our experienced team to navigate the complexities of online selling. Fill in your detailsand start your ecommerce journey with us now!"
        }
      ></TransformBusinessForm>
      
      
    </>
  );
};

export default page;
