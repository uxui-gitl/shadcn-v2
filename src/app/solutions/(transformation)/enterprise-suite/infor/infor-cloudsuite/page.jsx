"use client";
import EntIntro from "@/components/EntIntro";
import OverviewSection from "@/sections/overview/OverviewSection";
// import CommonCardTwoSlider from "@/sections/commonCardTwoSlider/CommonCardTwoSlider";
import CommonCardThreeSlider from '@/sections/commonCardThreeSlider/CommonCardThreeSlider';

import BenefitSliderSection from '@/sections/benefitSlider/BenefitSliderSection';
import BlogSection from "@/sections/blog/BlogSection";
import TransformBusinessForm from "@/sections/transformBusinessFrom/TransformBusinessFromSection";
import ReviewSliderSection from '@/sections/reviewSlider/ReviewSliderSection';
import SectionHeading from "@/components/SectionHeading";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Image from "next/image";
const page = () => {
  const blogImageUrl = "/ai-ml/blog-bg.png";

  const TESTIMONIAL_DATA = [
    {
      id: 1,
      cardHeading: "Successful Infor Implementation",
      cardDesc: 'We would like to put on record the successful completion of our INFOR ERP LN implementation project by Godrej Infotech at our plant in Ahmedabad. We are glad to inform that the project has been completed as per our requirement.',
       designation: 'Managing Director',
      companyName:'Leading Manufacturer of Power & Control Panels'
    },
    {
      id: 2,
      cardHeading: "Delivering Timely Support Services",
      cardDesc: 'We highly appreciate the service and support provided by your team for our Infor ERP LN Annual Maintenance. Over the last 2 years we have received timely inputs and guidance across the modules that have been implemented on the system. We look forward to a mutually beneficial relationship in the future as well.',
       designation: 'Manager Sales and Support',
      companyName:'Leading Manufacturer of Antenna System Technology'
    },
    
  ];

  const serviceOfferingData = [
    {
      id: 1,
      cardBGColor: '#fff',
      cardHeading: 'Infor CloudSuite Industrial Enterprise ',
      cardDesc: `<p>Enables manufacturing and distribution businesses with modern, scalable and agile ERP functionalities<p>
      
<ul class=" my-7 space-y-4 text-gray-500 list-disc list-inside text-black">
    <li>Financials</li> 
    <li> Supply Chain Management </li>
    <li>Manufacturing </li>
    <li>Human Capital Management (HCM)  </li>
    <li>Customer Relationship Management (CRM)  </li>
    <li>Enterprise Asset Management (EAM)  </li>
    <li>Quality Management </li>
</ul> ` ,
      isArrow: true,
      cardTextColor: 'black',
      cardTopImageUrl: 'https://flowbite.com/docs/images/blog/image-1.jpg'
    },
    {

      id: 2,
      cardBGColor: '#fff',
      cardHeading: 'Infor CloudSuite Automotive (Infor LN)',
      cardDesc: `<div>Offers comprehensive features for automotive manufacturers, supporting everything from supply chain management to production control</div>
      <ul class=" my-7 space-y-4 text-gray-500 list-disc list-inside text-black">
    <li>Quality and production</li> 
    <li> Supply chain visibility</li>
    <li>Planning and inventory </li>
    <li>Customer relationship management</li>
    <li>Customer Relationship Management (CRM)  </li>
    <li>Enterprise Asset Management (EAM)  </li>
    <li>Quality Management </li>
</ul> `,
      isArrow: true,
      cardTextColor: 'black',
      cardTopImageUrl: 'https://flowbite.com/docs/images/blog/image-4.jpg'
    },
    {

      id: 3,
      cardBGColor: '#fff',
      cardHeading: 'Infor CloudSuite Aerospace & Defense (Infor LN)',
      cardDesc: `<div>Solution tailored to unique demands of highly regulated aerospace and defense industry</div>
       <ul class=" my-7 space-y-4 text-gray-500 list-disc list-inside text-black">
    <li>Planning and production</li> 
    <li> Contract Management</li>
    <li>Regulations & Compliance</li>
    <li>Supply chain visibility</li>
</ul> `
      
      ,
      isArrow: true,
      cardTextColor: 'black',
      cardTopImageUrl: 'https://flowbite.com/docs/images/blog/image-7.jpg'
    },
    {

      id: 4,
      cardBGColor: '#E4E4E4',
      cardHeading: 'Infor CS Engineering and Construction ',
      cardDesc: `Fulfils the exclusive needs of engineering and construction industry 
      <ul class=" my-7 space-y-4 text-gray-500 list-disc list-inside text-black">
    <li>Project Management </li> 
    <li> Document Management </li>
    <li>Financial Management </li>
    <li>Procurement and Supply Chain </li>
    <li>Human Capital Management (HCM) </li>
    <li>Contract Management </li>
    <li>Estimating and Bidding </li>
    <li>Quality and Safety Management </li>
    <li>Equipment Management </li>
</ul>
      `,
      isArrow: true,
      cardTextColor: 'black',
      cardTopImageUrl: 'https://flowbite.com/docs/images/blog/image-1.jpg'
    },
  ]

  const BENEFITS_CARDS_DATA = [
    { id: '1',icon:'', cardDesc: 'Extensible and integrable Cloud Suites through Infor OS.' },
    { id: '2',icon:'', cardDesc: 'Accommodates multiple, intricate manufacturing scenarios.' },
    { id: '3',icon:'', cardDesc: 'Industry-tailored features with cloud environment.' },
    { id: '4',icon:'', cardDesc: 'Cloud-based applications less susceptible to downtime, ensuring business continuity.' },
    { id: '5',icon:'', cardDesc: 'Tailored solutions for various industries, addressing specific needs and challenges.' },
    { id: '6',icon:'', cardDesc: 'Accessibility from anywhere with an internet connection, making it convenient for remote work and global collaboration.' },
  ];

  return (
    <>
      <EntIntro
        title="Accelerate Business Growth with Infor CloudSuite Expertise"
        desc="Cloud-based, pre-configured industry solution for faster adoption and maximum impact."
        cta="Let's Connect"
        width="60%"
        video="https://gitl-usa.s3.us-west-1.amazonaws.com/banner1.mp4"
      />

      <OverviewSection Text={`Discover smarter way to manage business with Infor CloudSuite. Industry-specific cloud ERP solutions help enterprises to scale with confidence and agility.`} />
      {/* optimising rpa solution */}
      {/* <CommonCardTwoSlider
        ID={'AIOfferings'}
        sectionImageUrl={''}
        sectionBGColor={'#E1F2EF'}
        sectionHeading={'Our Infor CloudSuite offerings'}
        sectionDesc={''}
        sectionTextColor={'#000'}
        sectionHeaderMaxWidth={'40%'}
        cardData={RPASolution}
      >
      </CommonCardTwoSlider> */}

      <CommonCardThreeSlider
        ID={''}
        sectionImageUrl={''}
        sectionBGColor={'#E1F2EF'}
        sectionHeading={'Our Infor CloudSuite offerings'}
        sectionDesc={""}
        sectionTextColor={'#000'}
        cardData={serviceOfferingData}
      >

      </CommonCardThreeSlider>

      <div className="" style={{ backgroundColor: '#1D162B'}}>
        <div className="md:container mx-auto px-10 pt-20 flex h-[500px]" style={{ alignItems: 'center', overflow: 'hidden' }}>
          <div className="w-full md:w-1/2">
            <SectionHeading
              Heading={`Infor CloudSuite Services`}
              Color={'white'}
              Desc={`Leverage our understanding of industry specific business processes refined through years of experience and benefit from end-to-end Infor CloudSuite services`}
              headingContainerWidth={'w-full'}
            />
          </div>
          <div className="hidden md:w-1/2">
            <img src="/infor/man.svg" style={{ width: '100%' }} />
          </div>
        </div>
        <div className="md:container mx-auto bg-white py-20" style={{ zindex: '2', position:'relative', borderTopLeftRadius: "24px", borderTopRightRadius: "24px" }}>
          <Swiper
            slidesPerView={1}
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
                  slidesPerView: 4,
                  spaceBetween: 32,
              },
          }}
          >
            {['Consulting', 'Implementation', 'Managed Services', 'Migration and Upgrade ',]?.map((item, index) => (
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

      <BenefitSliderSection
        ID={'BENEFIT'}
        sectionBGColor={'#1D162B'}
        sectionHeading={'Infor CloudSuite Benefits'}
        sectionDesc={'With deep industry-specific functionalities, Infor CloudSuite offers responsive business environment, driving competitive differentiation.'}
        sectionTextColor={'white'}
        cardData={BENEFITS_CARDS_DATA}
        sectionHeadingMaxWidth={'100%'}
      />

      <BlogSection
        ID={"blog"}
        blogImageUrl={blogImageUrl}
        Heading={"Role of Infor OS in Powering Infor CloudSuite User Experiences"}
        Desc={
          "This blog discusses the crucial role of Infor OS in enhancing user experiences within Infor CloudSuite. It also explores the significance of Infor OS and its various applications."
        }
        maxWidth={'50%'}
        Color={"white"}
      ></BlogSection>

      <ReviewSliderSection
        ID={"TESTIMONIALS"}
        Heading={"Delighted Customers share their Successful Experience"}
        Desc={''}
        Color="#ffffff"
        CardDataList={TESTIMONIAL_DATA}
        BGColor="#1D162B"
        SectionHeadingMaxWidth={'70%'}
      ></ReviewSliderSection>

      <TransformBusinessForm
        Title={"Transform your Business with us"}
        Desc={
          "Let us discuss how Infor CloudSuite can help you with rapid growth"
        }
      ></TransformBusinessForm>
    </>
  );
};

export default page;
