"use client";
import EntIntro from "@/components/EntIntro";
import SectionWrapper from '@/components/SectionWrapper';
import SectionHeading from '@/components/SectionHeading';
import OverviewSection from "@/sections/overview/OverviewSection";
import BenefitSliderSection from '@/sections/benefitSlider/BenefitSliderSection';
import CaseStudiesSection from "@/sections/case-studies/CaseStudiesSection";
import BlogSection from "@/sections/blog/BlogSection";
import TransformBusinessForm from "@/sections/transformBusinessFrom/TransformBusinessFromSection";
import DistinctiveSection from "@/sections/distinctive/DistinctiveSection";
import ReviewSliderSection from '@/sections/reviewSlider/ReviewSliderSection';
import { Swiper, SwiperSlide } from "swiper/react";
import CommonCardTwo from "@/components/CommonCardThree";
import SectionWrapperNew from '@/components/SectionWrapperNew';
import Slider from "@/components/Slider";
import OutlinedButtonWithArrow from "@/components/ui/buttons/OutlinedButtonWithArrow";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const page = () => {
  const blogImageUrl = "/ai-ml/blog-bg.png";

  const distinctiveData = [
    {
      _id: 1,
      desc: "Access to relevant information saves time, boosts customer satisfaction and streamlines issue resolution. ",
      icon: "",
    },
    {
      _id: 2,
      desc: "Enhance lead nurturing, consistency in interactions and lead scoring.",
      icon: "",
    },
    {
      _id: 3,
      desc: "Design effective campaigns and personalize buying experiences.",
      icon: "",
    },
    {
      _id: 4,
      desc: "Centralized record of customer interactions, making it accessible to all team members.",
      icon: "",
    },
    {
      _id: 5,
      desc: "Improve teamwork, allowing simultaneous work on documents and faster customer responses.",
      icon: "",
    },

  ]
  const BENEFITS_CARDS_DATA = [
    { id: '1', icon: '', cardHead: 'Integration', cardDesc: 'We provide a range of APIs, built-in connectors and a robust developer platform for seamless integrations.' },
    { id: '2', icon: '', cardHead: 'User Training and Ease of Use', cardDesc: 'Godrej Infotech offers easy-to-use solution with a minimal learning curve with no extensive training.' },
    { id: '3', icon: '', cardHead: 'Sales Team Management', cardDesc: 'Manage multiple sales teams from a single dashboard with one of the best CRMs globally.' },
    { id: '1', icon: '', cardHead: `Quality Support', cardDesc: 'Benefit from speedy 24/7 support and a dedicated account manager, regardless of your business's size.` },
    { id: '5', icon: '', cardHead: 'Quote & Contract Management', cardDesc: 'Generate and share custom quotes with integrated forms at no additional costs.' },
    { id: '6', icon: '', cardHead: 'Task & Activity Management', cardDesc: 'Create, assign and automate tasks for your sales representatives using industry-leading automation tools.' },

  ];

  const CASE_STUDIES_DATA = [
    {
      imageURL: "/CloudStackServices/case-studies/bg--coffee-beans.png",
      videoURL: "/CloudStackServices/case-studies/bg--video-industry.mp4",
      title: "Case Studies",
      heading: "Elevating Customer Experience",
      description:
        "World's top-notch businesses choose us for our excellent technical acumen and proven standards as we deliver high performing multidisciplinary solutions across the spectrum of industries.",
      link: "/case-study-1",
      color: "#FFFFFF",
    },
    {
      imageURL: "",
      title: "",
      heading: "Forklift Leader Increases Conversions by 10% with Salesforce",
      description:
        "India's Top Forklift Truck Manufacturer Increases Opportunity-to-Order Conversions by 10% and Elevates Customer Experience with Salesforce Integration",
      link: "/case-study-1",
      color: "#000",
      bgCardColor: "#FCE6F4",
    },

    {
      imageURL: "/path/to/image1.jpg",
      title: "",

      heading: "Furniture Brand Achieves 360-Degree Customer Insight",
      description:
        "India's premium furniture brand in both home and institutional segments achieves 360-degree customer visibility by integrating Salesforce with its ERP.",
      link: "/case-study-1",
      color: "#000",
      bgCardColor: "#EFE9FB",
    },
    {
      imageURL: "/CloudStackServices/case-studies/bg--electical-devices.png",
      title: "",
      heading: "Top notch Indian security solutions company implements Salesforce CRM",
      description:
        "Access to relevant information saves time, boosts customer satisfaction and streamlines issue resolution.",
      link: "/case-study-1",
      color: "#000",
      bgCardColor: "#E1F2EF",
    },
    // Add more case studies here...
  ];

  const TESTIMONIAL_DATA = [
    {
      id: 1,
      cardHeading: "Appreciate GITL's contribution to our ONE-CRM goal",
      cardDesc: `With Salesforce Sales Cloud smooth implementation, Godrej Infotech's team allied our lead-to-order cycle. With deep Infor LN integration and fine-tuned project management, the team met aggressive go-live targets, providing us with streamlined data. Thank you GITL team for contributing to our visionary goal of a singular CRM system.`
    },

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
      cardHoverData:[
        'Sales Cloud: Enables you to manage Lead to order contacts from any device and location.',
        'Salesforce CPQ (Configure, Price, Quote): Allows executives to understand customer requirements, configure quotes, accordingly, apply discounts and generate accurate billing, streamlining revenue recognition.',
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
      cardHoverData:[
        'Marketing Cloud: Automate various email campaign activities, enhancing product/ service marketing for your organization. The tool also builds attractive landing pages for solutions and service information delivery.',
        'Pardot: B2B marketing tool equipped with automation capabilities that drives increased sales and more efficient marketing planning. ',
        
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
      cardTopImageUrl: 'https://flowbite.com/docs/images/blog/image-2.jpg',
      cardHoverData:[
        'Service - 360-degree view of customers, ensuring personalized and efficient service interactions.',
        'Field Service - Seamlessly schedule and dispatch resources using intelligent algorithms. Equip your field service teams with real-time information with a mobile-friendly interface.',
        
      ]
    },

  ]


  return (
    <>
      <EntIntro
        title="Boost Sales, Enhance Customer Experience"
        desc="Salesforce CRM: The Future of Customer Relationships"
        cta="Let's Connect"
        width="60%"
        video="https://gitl-usa.s3.us-west-1.amazonaws.com/banner1.mp4"
      />
      <OverviewSection Text={'Salesforce, a top cloud-based CRM, streamlines customer interactions with automation, AI, and 360-degree customer views for enhanced business operations'} />

      <SectionWrapperNew
        sectionHeading={'Modules'}
        sectionDesc={''}
        sectionTextColor={'text-neutral-white'}
        sectionHeadingLayout="left"
        style={{ background: `url('/Transformation/customers/bgimage1.png')`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}
      >
        <Slider slidesPerView={3}
          spaceBetween={16}
          autoplay={false}
          pagination={true}
          followFinger={true}
          grabCursor={true}
          modules={[Pagination, Navigation]}
          navigation={true}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 32,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 32,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 32,
            },
          }}
        >
          {RPASolution2?.map((item, index) => (
           <SwiperSlide key={index}>
  <div className="w-full bg-neutral-white rounded-3xl group overflow-hidden relative min-h-[624px]">
    <div
      className="h-[300px] bg-slate-700"
      style={{
        background: `url('/Transformation/sale-force-crm/m1.svg')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    ></div>
    <div className="p-5 relative">
      <h5 className="mb-4 text-heading-02 leading-heading-02 font-semibold">{item?.cardHeading}</h5>
      <p className="mb-2 text-body-01 leading-body-01 font-medium">{item?.cardDesc}</p>
  
    </div>
    {item?.isArrow && <div className="absolute bottom-4 right-4 z-auto">
          <OutlinedButtonWithArrow size={32} />
        </div>}
    {item?.cardHoverData && (
      <div className="bg-neutral-white p-5 rounded-3xl h-full w-full absolute bottom-0 left-0 transform translate-y-full transition-transform duration-500 ease-in-out group-hover:translate-y-0">
        <div>
          <ul className="space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
            {item?.cardHoverData.map((item2, i) => (
              <li key={i} className="py-3">
                <span className="font-semibold text-black">{item2}</span>
              </li>
            ))}
          </ul>
        </div>
        
      </div>
    )}
  </div>
</SwiperSlide>

          ))}
        </Slider>
      </SectionWrapperNew>


      <BenefitSliderSection
        ID={'BENEFIT'}
        sectionBGColor={'bg-primary-900'}
        sectionHeading={'Key Capabilities'}
        sectionDesc={''}
        sectionTextColor={'text-neutral-white'}
        cardData={BENEFITS_CARDS_DATA}
        sectionHeadingMaxWidth={'100%'}
      />
      <CaseStudiesSection
        casestudy={CASE_STUDIES_DATA}
        csLayout={"1"}
        bgColor="bg-neutral-white"
      />


      <BlogSection
        ID={"blog"}
        blogImageUrl={blogImageUrl}
        Heading={"Elevating Customer Service with Salesforce Service Cloud"}
        Desc={
          "Salesforce Service Cloud revolutionizes customer service with social media CRM and managed services, enhancing experiences through cutting-edge integrations."
        }
        maxWidth={'50%'}
        Color={"text-neutral-white"}
      ></BlogSection>
      <DistinctiveSection DistinctiveData={distinctiveData}
        ID={'Distinctive'} Title={'The Distinctive Edge'} Desc={'Salesforce CRM is a thrust of innovation and efficiency designed to transform the way you do business with prospects and customers.'}
      >
      </DistinctiveSection>
      <ReviewSliderSection
        ID={"TESTIMONIALS"}
        Heading={"Delighted customers share their success experience"}
        Desc={''}
        Color="text-neutral-white"
        CardDataList={TESTIMONIAL_DATA}
        BGColor="bg-primary-900"
        SectionHeadingMaxWidth={'70%'}
      ></ReviewSliderSection>
      <TransformBusinessForm
        Title={"Transform your Business with us"}
        Desc={
          "Let's discuss how CRM Services can help you to enhance your business's growth potential."
        }
      ></TransformBusinessForm>
    </>
  );
};

export default page;
