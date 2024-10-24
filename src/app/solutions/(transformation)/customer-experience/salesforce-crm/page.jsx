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
    { id: '1', icon: '', cardHead: 'Integration', cardDesc: 'We provide a range of APIs, built-in connectors and a robust developer platform for seamless integrations.S' },
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
      cardHoverData:[
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
        sectionTextColor={'#fff'}
        sectionHeadingLayout="left"
        style={{ background: `url('/Transformation/customers/bgimage1.png')`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}
      >
        <Slider slidesPerView={3.2}>
          {RPASolution2?.map((item, index) => (
            <SwiperSlide key={index}>
              <div class="max-w-sm bg-white rounded-3xl group overflow-hidden relative" >
                <div className="h-[300px] bg-slate-700" style={{background: `url('/Transformation/sale-force-crm/m1.svg')`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}></div>
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


      <BenefitSliderSection
        ID={'BENEFIT'}
        sectionBGColor={'#1D162B'}
        sectionHeading={'Key Capabilities'}
        sectionDesc={''}
        sectionTextColor={'white'}
        cardData={BENEFITS_CARDS_DATA}
        sectionHeadingMaxWidth={'100%'}
      />
      <CaseStudiesSection
        casestudy={CASE_STUDIES_DATA}
        csLayout={"1"}
        bgColor="#FFFFFF"
      />


      <BlogSection
        ID={"blog"}
        blogImageUrl={blogImageUrl}
        Heading={"Elevating Customer Service with Salesforce Service Cloud"}
        Desc={
          "Salesforce Service Cloud revolutionizes customer service with social media CRM and managed services, enhancing experiences through cutting-edge integrations."
        }
        maxWidth={'50%'}
        Color={"white"}
      ></BlogSection>
      <DistinctiveSection DistinctiveData={distinctiveData}
        ID={'Distinctive'} Title={'The Distinctive Edge'} Desc={'Salesforce CRM is a thrust of innovation and efficiency designed to transform the way you do business with prospects and customers.'}
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
