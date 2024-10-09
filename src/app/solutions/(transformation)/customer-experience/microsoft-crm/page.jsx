"use client";
import EntIntro from "@/components/EntIntro";
import OverviewSection from "@/sections/overview/OverviewSection";
import SectionWrapper from '@/components/SectionWrapper';
import SectionHeading from '@/components/SectionHeading';
import CommonCardTwoSlider from "@/sections/commonCardTwoSlider/CommonCardTwoSlider";
import { Swiper, SwiperSlide } from "swiper/react";
import SectionWidthSlider from "@/sections/sectionWithSlider/SectionWithSlider";
import BenefitSliderSection from '@/sections/benefitSlider/BenefitSliderSection';
import CaseStudiesSection from "@/sections/case-studies/CaseStudiesSection";
import BlogSection from "@/sections/blog/BlogSection";
import TransformBusinessForm from "@/sections/transformBusinessFrom/TransformBusinessFromSection";
import DistinctiveSection from "@/sections/distinctive/DistinctiveSection";
import ReviewSliderSection from '@/sections/reviewSlider/ReviewSliderSection';
const page = () => {
  const blogImageUrl = "/ai-ml/blog-bg.png";

  const distinctiveData = [
    {
      _id: 1,
      desc: "Proven Microsoft Expertise: Microsoft Gold partner with global deployment and upgrade expertise.",
      icon: "",
    },
    {
      _id: 2,
      desc: "Expert Guidance: Team of Microsoft-certified professionals providing expert support.",
      icon: "",
    },
    {
      _id: 3,
      desc: "Streamlined Solutions: Simplifying Dynamics CRM complexity for optimal results.",
      icon: "",
    },
    {
      _id: 4,
      desc: "Effective Onboarding: Comprehensive training in seamless user adoption.",
      icon: "",
    },

  ]
  
  const CASE_STUDIES_DATA = [
    {
      imageURL: "/CloudStackServices/case-studies/bg--coffee-beans.png",
      videoURL: "/CloudStackServices/case-studies/bg--video-industry.mp4",
      title: "Case Studies",
      heading: "Elevating Customer Experience",
      description:
        "World's top-notch businesses choose us for our industry experience and excellent technical acumen, as we deliver high performing solutions across diverse industries",
      link: "/case-study-1",
      color: "#FFFFFF",
    },
    {
      imageURL: "",
      title: "",
      heading: "Non-government Association of Indian Industries",
      description:
        "99% uptime in saving man-days performance and 22% of capex saving after migrating to the Azure cloud environment",
      link: "/case-study-1",
      color: "#000",
      bgCardColor: "#FCE6F4",
    },

    {
      imageURL: "/path/to/image1.jpg",
      title: "",

      heading: "Coffee Brand Distributor in Egypt and Middle East",
      description:
        "Decreasing downtime and optimising system cost along with 100% data transparency through Single Cloud System",
      link: "/case-study-1",
      color: "#000",
      bgCardColor: "#EFE9FB",
    },
    {
      imageURL: "/CloudStackServices/case-studies/bg--electical-devices.png",
      title: "",
      heading: "Middle East-based Electrical Products Manufacturer",
      description:
        "60% cut down in development cost and business performance boost of 5 sister companies with D365 F&O Cloud implementation",
      link: "/case-study-1",
      color: "#000",
      bgCardColor: "#E1F2EF",
    },
    // Add more case studies here...
  ];
  
  const BENEFITS_CARDS_DATA = [
    { id: '1', icon:'', cardDesc: 'Scalability to adapt distinct business requirements' },
    { id: '2', icon:'', cardDesc: 'Omni-channel capabilities for customer engagement' },
    { id: '3', icon:'', cardDesc: 'Advanced decision-making potential through Artificial Intelligence' },
    { id: '4', icon:'', cardDesc: 'Scope to leverage data-driven strategies with real time insights' },
    { id: '5', icon:'', cardDesc: 'Comprehensive repository of contacts, leads and client information' },
    { id: '6', icon:'', cardDesc: 'Data analytics helps to prioritize leads and identify opportunities' },
    { id: '7', icon:'', cardDesc: 'Cloud-based infrastructure enables connectivity from any device and location' },
    { id: '8', icon:'', cardDesc: 'Seamless integration with Microsoft products such as Microsoft 365 and Power BI' },
  ];
  const RPASolution = [
    {
      id: 1,
      cardBGImageUrl: 'https://flowbite.com/docs/images/blog/image-1.jpg',
      cardBGColor: '#7F4EE1',
      cardHeading: 'Marketing',
      cardDesc: 'Understand customer preferences, behavior, and interactions to create targeted and personalized campaigns.',
      isArrow: false,
      cardTextColor: 'white',
      cardType: 1,
    },
    {
      id: 2,
      cardBGImageUrl: '',
      cardBGColor: '#000',
      cardHeading: 'Sales',
      cardDesc: 'Prioritize, track and close deals with ease so that  sales team focuses on high-value opportunities for maximum impact.',
      isArrow: false,
      cardTextColor: 'white',
      cardType: 2,
    },
    {
      id: 3,
      cardBGImageUrl: 'https://flowbite.com/docs/images/blog/image-6.jpg',
      cardBGColor: '#7F4EE1',
      cardHeading: 'Customer Service',
      cardDesc: 'Effortlessly manage customer inquiries, requests and feedback for a seamless and efficient support experience.',
      isArrow: false,
      cardTextColor: 'white',
      cardType: 1,
    },
    {
      id: 4,
      cardBGImageUrl: '/rpa/ArtboardBg.png',
      cardBGColor: '#EFE9FB',
      cardHeading: 'Field Service',
      cardDesc: 'Create, assign and track work orders ensuring that your field service team operates with precision and efficiency.',
      isArrow: false,
      cardTextColor: 'white',
      cardType: 2,
    },
    {
      id: 5,
      cardBGImageUrl: 'https://flowbite.com/docs/images/blog/image-4.jpg',
      cardBGColor: '#EFE9FB',
      cardHeading: 'Project Operations',
      cardDesc: 'Optimize efficiency and encourage collaboration with this advanced project management tool, affirming smooth project success.',
      isArrow: false,
      cardTextColor: 'white',
      cardType: 1,
    },
    
  ]

  const TESTIMONIAL_DATA = [
    {
      id: 1,
      cardHeading: "90% Increase in Workforce Productivity",
      cardDesc: `“Thank you to Godrej Infotech for seamlessly migrating our CRM 2016 to D365 for Sales. Completed on time and with top-notch quality, the entire execution from offshore showcases commendable achievement. The CRM & Outlook integration significantly boosts sales efficiency, leading to a remarkable 90% increase in workforce productivity.” `,
      designation: '',
      companyName: 'Manufacturer of Optical Fibers in USA',
    },  
    {
      id: 2,
      cardHeading: "Expert Microsoft CRM Consulting Services",
      cardDesc: `“Appreciation to Godrej Infotech team for Microsoft Dynamics CRM consulting services. It has been a pleasure working with their team and we highly recommend Godrej Infotech’s services to other organizations.”`,
      designation: 'Business Head',
      companyName:'Leading Indian Business Group',
    },
    {
      id: 3,
      cardHeading: "Sales and Marketing Process Automation",
      cardDesc: `Choosing Microsoft Dynamics CRM, we automated sales and marketing, gaining a 360-degree customer view. Godrej Infotech's project management team ensured transparency, kept us informed on project status and risks, and collaboratively devised mitigation plans. The result: on-time, on-budget project completion. We highly recommend Godrej Infotech for Microsoft Dynamics CRM services.`,
      designation: 'Vice President',
      companyName:'Indian Offshore Training Provider',
    },
  ];

  const ultimateChoiceData = [
    {
      id: 1,
      BGImageUrl: "",
      BGColor: "#fff",
      CardBGColor: "transparent",
      CardTextColor: '#fff',
      CardTitle: "",
      CardIconUrl: "/upgradeCloud/icons/ico--target.svg",
      CardHeading: "Assess",
      CardDesc:
        "We evaluate processes to seamlessly implement Dynamics 365 CRM without workflow disruption.",
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
      CardHeading: "Strategize & Implement",
      CardDesc:
        "Clear roles, data migration and integration ensure smooth implementation.",
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
      CardHeading: "Train & Adopt",
      CardDesc:
        "Comprehensive training enhances user adoption, usability and confidence across sales, marketing and customer service. ",
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
      CardHeading: "Ongoing Support",
      CardDesc:
        "Expert maintenance and management ensure CRM runs smoothly, and team stays productive.",
      isArrow: "",
      link: [],
    },
  ];
  return (
  <>  
  <EntIntro
        title="Automate sales forecasting and pipeline management with D365 CRM"
        desc="Personalized solutions for Sales Automation, Customer Insights, Marketing Automation and Service Excellence"
        cta="Let's Connect"
        width="60%"
        video="https://gitl-usa.s3.us-west-1.amazonaws.com/banner1.mp4"
      />
      <OverviewSection Text={'Get a single customer view with Microsoft CRM. Gain 360-degree customer insights, seamless team collaboration, personalized customer experiences and data-driven decision-making.'} />
      {/* <SectionWrapper BGColor="black">
        <div className="md:container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="hidden md:block">
              <img src="/about/video.png" />
            </div>
            <div>
              <SectionHeading
                Color="white"
                headingContainerWidth="w-full"
                Heading="Infor Intelligent Supply System"
                Desc="Infor proudly presents the most extensive suite of global supply chain solutions, including the world's largest single-instance, multi-enterprise business network and comprehensive CloudSuite capabilities. These capabilities optimize supply chains from end to end, covering planning, procurement, orchestration and fulfillment. "
              ></SectionHeading>
            </div>
          </div>
        </div>

      </SectionWrapper> */}

      <CommonCardTwoSlider
        ID={'AIOfferings'}
        sectionImageUrl={''}
        sectionBGColor={'#E1F2EF'}
        sectionHeading={'Microsoft CRM offerings'}
        sectionDesc={''}
        sectionTextColor={'#000'}
        sectionHeaderMaxWidth={'40%'}
        cardData={RPASolution}
      >
      </CommonCardTwoSlider>

      <div className="" style={{ backgroundColor: '#1D162B'}}>
        <div className="md:container mx-auto pt-20 px-10 flex h-[500px]" style={{ alignItems: 'center', overflow: 'hidden' }}>
          <div className="w-full md:w-1/2">
            <SectionHeading
              Heading={'Microsoft CRM Services'}
              Color={'white'}
              Desc={'Discover how our expert services can transform customer relationships by anticipating business needs, personalizing experiences and strengthening customer connections.'}
              headingContainerWidth={'w-full'}
            />
          </div>
          <div className="hidden md:w-1/2">
            <img src="/infor/man.svg" style={{ width: '100%' }} />
          </div>
        </div>
        <div className="md:container mx-auto bg-white py-20" style={{ zindex: '2', position:'relative', borderTopLeftRadius: "24px", borderTopRightRadius: "24px" }}>
          <Swiper
            slidesPerView={4}
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
            {['Consultation', 'Implementation', 'ManagedServices']?.map((item, index) => (
              <SwiperSlide key={item}>
                <div className="bg-white rounded-lg">
                    <img className="rounded-t-lg pl-4" src="/infor/blackstar.svg" alt="" />
                  <div className="p-5">
                      <h5 className="mb-2 text-2xl font-bold">{item}</h5>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>


      
      <SectionWidthSlider style={{marginTop:'-30px'}}
        ID={"ultimateChoiceData"}
        sectionHeading={"D365 CRM Implementation Process"}
        sectionDesc={
          "Our structured implementation process involves collaboration with stakeholders to understand business goals, challenges and existing processes. "
        }
        sectionTextColor="white"
        cardData={ultimateChoiceData}
        sectionBGColor="#5F22D9"
        setHeadingLayout="horizontal"

      />

<BenefitSliderSection
        ID={'BENEFIT'}
        sectionBGColor={'#1D162B'}
        sectionHeading={'Advantages of D365 CRM'}
        sectionDesc={'Discover substantial benefits that Infor LN brings to the table, helping in competitive business landscape.'}
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
        Heading={"Future Trends in Microsoft CRM: What to Expect in the Next 5 Years"}
        Desc={
          "AI in CRM and AI-powered CRM tools, particularly within Dynamics 365, are revolutionizing how businesses function. These advancements mark the trajectory of Microsoft CRM market while ensuring a more intuitive and personalized user experience."
        }
        maxWidth={'50%'}
        Color={"white"}
      ></BlogSection>
      <DistinctiveSection DistinctiveData={distinctiveData}
        ID={'Distinctive'} Title={'The Distinctive Edge'} Desc={'We help businesses to streamline customer relationships, enhance productivity and drive growth.'}
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
          "Let us discuss how Microsoft CRM can help you with rapid growth."
        }
      ></TransformBusinessForm>
  </>
  );
};

export default page;
