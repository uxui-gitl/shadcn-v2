"use client";
import EntIntro from "@/components/EntIntro";
import OverviewSection from "@/sections/overview/OverviewSection";
import SectionWrapper from '@/components/SectionWrapper';
import SectionHeading from '@/components/SectionHeading';
import SectionWidthSlider from "@/sections/sectionWithSlider/SectionWithSlider";
import CommonCardThreeSlider from '@/sections/commonCardThreeSlider/CommonCardThreeSlider';
import CaseStudiesSection from "@/sections/case-studies/CaseStudiesSection";
import BlogSection from "@/sections/blog/BlogSection";
import TransformBusinessForm from "@/sections/transformBusinessFrom/TransformBusinessFromSection";
import DistinctiveSection from "@/sections/distinctive/DistinctiveSection";

const page = () => {


  const distinctiveData = [
    {
      _id: 1,
      desc: "Experienced team of certified Infor CRM professionals",
      icon: "",
    },
    {
      _id: 2,
      desc: "In-depth knowledge of Infor CRM's capabilities and best practices",
      icon: "",
    },
    {
      _id: 3,
      desc: "Dedicated customer support, assisting businesses in implementation phase and beyond",
      icon: "",
    },
    {
      _id: 4,
      desc: "Proven track record of successful Infor CRM implementations",
      icon: "",
    },

  ]

  const blogImageUrl = "/ai-ml/blog-bg.png";

  const CASE_STUDIES_DATA = [
    {
      imageURL: "/CloudStackServices/case-studies/bg--coffee-beans.png",
      videoURL: "/CloudStackServices/case-studies/bg--video-industry.mp4",
      title: "Case Studies",
      heading: "Elevating Customer Experience",
      description:
        "World's top-notch businesses choose us for our technical acumen as we deliver high performing solutions across different industries.",
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

  const serviceOfferingData = [
    {
      id: 1,
      cardBGColor: '#fff',
      cardHeading: 'Customizable CRM Experience',
      cardDesc: 'Tailored to explicit demands, workflows, and processes, delivering personalized CRM.',
      isArrow: true,
      cardTextColor: 'black',
      cardTopImageUrl: 'https://flowbite.com/docs/images/blog/image-1.jpg'
    },
    {

      id: 2,
      cardBGColor: '#fff',
      cardHeading: 'Seamless Integration',
      cardDesc: 'Integrates with Microsoft Outlook and Infor CloudSuite ERP, minimizing data silos.',
      isArrow: true,
      cardTextColor: 'black',
      cardTopImageUrl: 'https://flowbite.com/docs/images/blog/image-4.jpg'
    },
    {

      id: 3,
      cardBGColor: '#fff',
      cardHeading: 'Mobile-Centric',
      cardDesc: 'Dedicated mobile accessibility for real-time customer engagement and responsiveness.',
      isArrow: true,
      cardTextColor: 'black',
      cardTopImageUrl: 'https://flowbite.com/docs/images/blog/image-7.jpg'
    },
    {

      id: 4,
      cardBGColor: '#E4E4E4',
      cardHeading: 'Automation & Analytics',
      cardDesc: 'Streamlines lead management, forecasting and opportunity tracking, with 70+ reports.',
      isArrow: true,
      cardTextColor: 'black',
      cardTopImageUrl: 'https://flowbite.com/docs/images/blog/image-1.jpg'
    },
    {

      id: 5,
      cardBGImageUrl: '/rpa/ArtboardBg.png',
      cardBGColor: '#EFE9FB',
      cardHeading: 'Scalable & Reliable Support',
      cardDesc: 'Prompt issue resolution, scalable with business expansion, adapting to changing markets.',
      isArrow: true,
      cardTextColor: 'black',
      cardTopImageUrl: 'https://flowbite.com/docs/images/blog/image-2.jpg'
    },
    {


      id: 6,
      cardBGImageUrl: '/rpa/ArtboardBg.png',
      cardBGColor: '#EFE9FB',
      cardHeading: 'New Multi-Attendee Support for Activities',
      cardDesc: 'Seamless support for multiple contacts, leads & users in activities & records, for smoother stakeholder communication.',
      isArrow: false,
      cardTextColor: 'black',
      cardTopImageUrl: 'https://flowbite.com/docs/images/blog/image-3.jpg'
    },
  ]
  const ultimateChoiceData = [
    {
      id: 1,
      BGImageUrl: "",
      BGColor: "#fff",
      CardBGColor: "transparent",
      CardTextColor: '#fff',
      CardTitle: "",
      CardIconUrl: "/upgradeCloud/icons/ico--target.svg",
      CardHeading: "Sales Automation",
      CardDesc:
        "",
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
      CardHeading: "Marketing Automation",
      CardDesc:
        "",
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


  return (
    <>
      <EntIntro
        title="Unlock Customer Insights with Intelligent and Industry-Specific Infor CRM"
        desc="Deliver exceptional customer experiences through analytics and automated workflows"
        cta="Let's Connect"
        width="60%"
        video="https://gitl-usa.s3.us-west-1.amazonaws.com/banner1.mp4"
      />
      <OverviewSection Text={'Built on a scalable, cloud-based platform, Infor CRM integrates seamlessly with Infor ERP, providing real-time visibility into customer interactions, sales and service. Tailored solutions for manufacturing, distribution, healthcare and more.'} />
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

      <CommonCardThreeSlider
        ID={''}
        sectionImageUrl={''}
        sectionBGColor={'#1D162B'}
        sectionHeading={'Infor CRM Key Capabilities'}
        sectionDesc={"We design, develop and implement hundreds of custom solutions and software applications using Microsoft technologies across Azure, Microsoft 365, Dynamics 365 and Power Platform."}
        sectionTextColor={'#fff'}
        cardData={serviceOfferingData}
      >

      </CommonCardThreeSlider>

      <CaseStudiesSection casestudy={CASE_STUDIES_DATA} csLayout={"2"} bgColor={'#D3D3D3'} />
      <BlogSection
        ID={"blog"}
        blogImageUrl={blogImageUrl}
        Heading={"Infor CRM Implementation Best Practices"}
        Desc={
          "A successful Infor CRM implementation requires careful planning, execution, and ongoing optimization. By following these best practices and hacks, organizations can unlock the full potential of Infor CRM, driving business growth, customer satisfaction, and user adoption."
        }
        maxWidth={'50%'}
        Color={"white"}
      ></BlogSection>
         <DistinctiveSection DistinctiveData={distinctiveData}
        ID={'Distinctive'} Title={'The Distinctive Edge'} Desc={'Partner with Godrej Infotech for exceptional customer experiences and streamlined sales & marketing operations'}
      >
      </DistinctiveSection>
      
      <TransformBusinessForm
        Title={"Transform your Business with us"}
        Desc={
          "Let us discuss how Infor CRM can help you with rapid growth"
        }
      ></TransformBusinessForm>
    </>
  );
};

export default page;
