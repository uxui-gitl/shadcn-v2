"use client";
import EntIntro from "@/components/EntIntro";
import OverviewSection from "@/sections/overview/OverviewSection";
import SectionWrapper from '@/components/SectionWrapper';
import SectionHeading from '@/components/SectionHeading';
import SectionWidthSlider from "@/sections/sectionWithSlider/SectionWithSlider";
import CommonCardThreeSlider from '@/sections/commonCardThreeSlider/CommonCardThreeSlider';
import CaseStudiesSection from "@/sections/case-studies/CaseStudiesSection";
import BlogSection from "@/sections/blog/BlogSection";
import Link from "next/link";
import TransformBusinessForm from "@/sections/transformBusinessFrom/TransformBusinessFromSection";
import DistinctiveSection from "@/sections/distinctive/DistinctiveSection";
import SectionWrapperNew from "@/components/SectionWrapperNew";
import OutlinedButtonWithArrow from "@/components/ui/buttons/OutlinedButtonWithArrow";
import { SwiperSlide } from "swiper/react";
import Slider from "@/components/Slider";
import CommonCardThree from "@/components/CommonCardThree";

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

  const casestudy = [
    {
      imageURL: "/CloudStackServices/case-studies/bg--coffee-beans.png",
      videoURL: "/CloudStackServices/case-studies/bg--video-industry.mp4",
      title: "Case Studies",
      heading: "Delivering Results that Matter",
      description:
        "The world's top-notch businesses choose us for our technical acumen as we deliver high performing solutions across different industries.",
      link: "/case-study-1",
      color: "#FFFFFF",
    },
    {
      imageURL: "",
      title: "",
      heading: "360° view of Customer and Integrated Business Processes",
      description:
        "Indian Offices of Leading Metal Plate Cutting Machine Manufacturer Gains 360 degree of Customer and transactional data   with Infor CRM Solution",
      link: "https://www.godrejinfotech.com/assets/pdf/case-studies/Metal-Plate-Machine-Manufacturer.pdf",
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

      <SectionWrapperNew
        style={{ backgroundColor: '#1D162B' }}
        sectionHeading={'Infor CRM Key Capabilities'}
        sectionDesc={'We design, develop and implement hundreds of custom solutions and software applications using Microsoft technologies across Azure, Microsoft 365, Dynamics 365 and Power Platform.'}
        sectionTextColor={'white'}
        sectionHeadingLayout={'left'}>
          <Slider>
          {serviceOfferingData?.map((item, index) => (
            <SwiperSlide key={index}>
              <CommonCardThree Item={item}></CommonCardThree>
            </SwiperSlide>
          ))}
           </Slider>
      </SectionWrapperNew>

      {/* case studies */}
      <SectionWrapperNew
        style={{ backgroundColor: '#D3D3D3' }}
        sectionHeading={''}
        sectionDesc={''}
        sectionTextColor={'white'}
        sectionHeadingLayout={'left'}>
        <div className="flex flex-col md:flex-row justify-start items-center gap-8 w-full h-full md:h-[724px]">
          {/* video */}
          <div
            className="relative md:w-full  h-full rounded-3xl p-8 flex flex-col justify-end"
            style={{
              color: casestudy[0].color,
              overflow: "hidden", // Ensures no overflow from the video
            }}
          >
            <video
              src={casestudy[0].videoURL} // Replace with your video path
              autoPlay
              loop
              muted
              className="absolute inset-0 w-full h-full object-cover z-0"
            />
            <div className="absolute inset-0 z-10">
              {/* Gradient overlay covering the bottom 50% */}
              <div
                className="absolute bottom-0 left-0 w-full h-[80%] bg-gradient-to-t from-black to-transparent"
                style={{ opacity: 1 }}
              />
            </div>
            <div className="relative z-20  w-[70%] flex flex-col justify-end">
              {" "}
              {/* Ensure content is aligned at the bottom */}
              <h3 className="text-base font-semibold mb-12">
                {casestudy[0].title}
              </h3>
              <h1 className="text-5xl font-medium mb-6">
                {casestudy[0].heading}
              </h1>
              <p className=" mb-4">{casestudy[0].description}</p>
            </div>
          </div>
          {/* one  */}
          <div
            className="flex flex-col w-full md:w-1/3 h-full rounded-3xl gap-8"
            style={{ backgroundColor: "transparent" }}
          >
            <div
              className="relative w-full h-full rounded-3xl p-8"
              style={{
                color: casestudy[1].color,
                backgroundColor: casestudy[1].bgCardColor,
              }}
            >
              <h1 className="w-[80%] text-2xl font-medium mb-6">
                {casestudy[1].heading}
              </h1>
              <p className="mb-4">{casestudy[1].description}</p>

              <div className="absolute bottom-4 right-4">
              <Link href={casestudy[1].link} target="_blank">
                <OutlinedButtonWithArrow size={56} />
              </Link>
              </div>
            </div>

          </div>
        </div>
      </SectionWrapperNew>
      {/* end case studies */}
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
