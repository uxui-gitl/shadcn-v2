"use client";
import React, { useState } from "react";
import Image from "next/image";
import ContactBanner from "@/sections/contactBanner/ContactBanner";
import SectionWrapperNew from "@/components/SectionWrapperNew";
import Slider from "@/components/Slider";
import { SwiperSlide } from "swiper/react";
import TransformBusinessForm from "@/sections/transformBusinessFrom/TransformBusinessFromSection";
import Dialog from "@/components/Dialog";
import { Timeline } from "@/components/ui/timeline";
import NewNavBar from "@/components/NewNavBar";
import {
  CSUITE_DATA ,
  GuidingPrinciples,
  AWARD_DATA,
  KeyPolicies_DATA,
  DATA_2021_Present,
  DATA_2016_2020,
  DATA_2011_2015,
  DATA_2005_2010,
  DATA_1999_2004,
  data,
} from './data';
import { useRouter } from 'next/navigation';


const ContactUs = () => {
  const router = useRouter();
  const [showModal1, setshowModal1] = useState(false);
  const [businessItem, setBusinessItem] = useState([]);

  const [showModal2, setshowModal2] = useState(false);
  const [readMoreItem, setReadMoreItem] = useState([]);
 

  // handle click businesstranform card click
  function handleBusinessCardClick(modal, item) {
    setshowModal1(modal);
    setBusinessItem(item);
  }

  function readMore(modal, item) {
    router.push(`/about-us/${item?.id}`);
    // setshowModal2(modal);
    // setReadMoreItem(item);
  }

  return (
    <>
      <Dialog
        shouldShow={showModal1}
        onRequestClose={() => {
          setshowModal1((prev) => !prev);
        }}
        title={businessItem?.title}
      >
        <div>
          <div className="">
            <div dangerouslySetInnerHTML={{ __html: businessItem?.rawData }} />
          </div>
        </div>
      </Dialog>

      {/* dialog end */}

      <Dialog
        shouldShow={showModal2}
        onRequestClose={() => {
          setshowModal2((prev) => !prev);
        }}
        title={readMoreItem?.title}
      >
        <div className="">
          <div className="container flex flex-col md:flex-row items-center md:items-start p-2">
            {/* Left Side: Image */}
            <div className=" w-full md:w-1/3 mb-6 rounded-3xl md:mb-0 flex justify-left">
            <Image
      src={readMoreItem?.bgImageUrl} // Using dynamic image URL
      alt="CEO"
      width={400}  // Set width for Image
      height={200}  // Set height for Image
      className="object-cover  "
    />
            </div>

            {/* Right Side: Profile Info */}
            <div className="ceo-info w-full md:w-2/3 pl-0 md:pl-8">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                {readMoreItem?.name}
              </h1>

              {/* CEO Designation */}
              <h2 className="text-xl font-semibold text-primary-600 mb-4">
                {readMoreItem?.designation}
              </h2>

              {/* Short Description */}
              <p className="text-body-01 text-gray-700 mb-6">
                {readMoreItem?.shortDesc}
              </p>

              {/* Long Paragraph */}
              <p className="text-body-01 text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{
__html: readMoreItem?.longDesc || "",
  }}>
             </p>
            </div>
          </div>
        </div>
      </Dialog>
      {/* readmore dialog */}

      {/* Nav */}

      <div className={`relative z-[500]`}>
        <div className={`absolute w-full`}>
          <NewNavBar></NewNavBar>
        </div>
      </div>

      <ContactBanner
        bannerImage={"/about/banner-bg.svg"}
        title={`Trusted Digital Transformation Partner for Global Enterprises`}
        desc={`Future-focused solutions and services for Digital Edge`}
      />

      {/* grow section  */}

      <SectionWrapperNew
        bgColor={"bg-neutral-white"}
        sectionHeading="From Humble Beginnings to Leading Tech Hub"
        sectionDesc="Inspiring Journey of Godrej Infotech"
        sectionTextColor="text-primary-900"
        sectionHeadingLayout="center"
        txtLinearGradient={true}
      >
        <div className="">
          <Timeline data={data} />
        </div>
      </SectionWrapperNew>

      {/* end grow section */}

      {/* guiding section */}
      <SectionWrapperNew
        bgColor={"bg-primary-900"}
        sectionHeading="The Guiding Principles We Live By"
        sectionDesc={`Driven by our principles, we strive to make a difference in every we do, building value and enhancing growth.`}
        sectionTextColor="text-neutral-white"
        sectionDescColor="text-neutral-white"
        sectionHeadingLayout="center"
      >
        <Slider>
          {GuidingPrinciples.map((item, index) => (
            <SwiperSlide key={index}>
              <div class="p-6 bg-[transparent]">
                <div
                  className="flex py-4"
                  style={{ borderBottom: "1px solid #CDBAF3" }}
                >
                  <Image
                    src={item.icon}
                    width={64}
                    height={64}
                    alt={"icon"}
                    className="mr-4 -mt-2"
                  />
                  <div className="text-heading-02 text-white">{item.title}</div>
                </div>
                <p class="text-paragraph-01 py-4 text-white">{item.desc}</p>
              </div>
            </SwiperSlide>
          ))}
        </Slider>
      </SectionWrapperNew>
      {/*end guiding section */}

      {/* hub of expertise */}
      <SectionWrapperNew
        bgColor={"bg-primary-500"}
        sectionHeading="Hub of Expertise"
        sectionDesc={`We are here to build an edge and bring technology brilliance with the finest in industry`}
        sectionTextColor="text-neutral-white"
        sectionDescColor="text-neutral-white"
        sectionHeadingLayout="horizontal"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-16 py-6">
          <div className="">
            <h1 className="text-display-01 text-neutral-white font-bold">
              25<sup className="text-normal"></sup>
            </h1>
            <p className="text-body-01 text-neutral-white">Years in Business</p>
          </div>
          <div className="">
            <h1 className="text-display-01 text-neutral-white font-bold">
              500<sup>+</sup>
            </h1>
            <p className="text-body-01 text-neutral-white">
              Customers Worldwide
            </p>
          </div>
          <div className="">
            <h1 className="text-display-01 text-neutral-white font-bold">
              15k<sup>+</sup>
            </h1>
            <p className="text-body-01 text-neutral-white">
              Man years of Experience
            </p>
          </div>
          <div className="">
            <h1 className="text-display-01 text-neutral-white font-bold">
              1000<sup>+</sup>
            </h1>
            <p className="text-body-01 text-neutral-white">
              Implementation Sites
            </p>
          </div>
        </div>
      </SectionWrapperNew>
      {/* end hub of expertise */}

      {/* visionary minds  */}
      <SectionWrapperNew
        bgColor={"bg-neutral-white"}
        sectionHeading="Introducing Idealistic Minds of Godrej Infotech "
        sectionDesc={`Guided by a strategic vision and a commitment to placing people at the forefront, our leadership team places paramount importance on the well-being and professional growth of every team member, steering the company towards a trajectory of sustained success.`}
        sectionTextColor="text-primary-900"
        sectionDescColor="text-neutral-darkest-grey"
        sectionHeadingLayout="center"
      >
        <Slider slidesPerView={5}>
          {CSUITE_DATA?.map((item, index) => (
            <SwiperSlide key={index} className="lg:!mr-2 2xl:!mr-5">
              <div
                className={`max-w-sm h-[420px] lg:h-[300px] 2xl:h-[420px]  p-3 mb-8 rounded-3xl border-[0.5px] border-neutral-light-grey`}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "end",
                  background: `url(${item.bgImageUrl}), ${item?.bgColor}`,
                  //background: `linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0)), url(${item.bgImageUrl}), ${item?.bgColor}`,
                  backgroundSize:'cover',
                  backgroundPosition:'bottom center'
                }}
              >
                {item?.name && (
                  <>
                    <h5 className="mb-1 text-base font-bold text-white">
                      {item?.name}
                    </h5>
                  </>
                )}
                {item?.designation && (
                  <p className="mb-4 text-[12px] text-white">
                    {item?.designation}
                  </p>
                )}
                <div
                  className="text-white text-[12px] flex justify-start items-center cursor-pointer"
                  onClick={() => readMore(true, item)}
                >
                  Read their stories{" "}
                  <svg
                    className="w-2 h-2 ms-2 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Slider>
      </SectionWrapperNew>
      {/* end visionary minds  */}

      {/* <SectionWrapperNew style={{ backgroundColor: "#FCE6F4", position: 'relative' }}
        sectionHeading=""
        sectionDesc=""
        sectionTextColor='#000'
        sectionHeadingLayout="left"
      >
        <div class="grid grid-cols-2 gap-4">
          <div>
            <h3 className="text-[54px] leading-[64px] font-semibold mb-3">Ajay Pimparkar</h3>
            <p className="text-neutral-darkest-grey text-[32px] mb-6">Chief Executive Officer</p>

            <div className="text-base text-[#1D162B] font-medium mb-10">
              {`Mr. Ajay Pimparkar is the IT veteran and strategic visionary of our company, who has transformed Godrej Group's technology landscape for over 30 Years. His role has reinforced our IT infrastructure and enabled us to perform at the forefront of digital innovation, driving operational efficiency and enriching customer experience.`}
            </div>
            <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Read more</button>
          </div>
          <div>
            <Image src="about/pimp.svg" width={500} height={500} alt={'pimp'} className="absolute right-[8%] bottom-0" />
          </div>
        </div>
      </SectionWrapperNew> */}

      {/* joy at work section 
      <SectionWrapperNew style={{ backgroundColor: "#000" }}
        sectionHeading="Unleashing Joy at Work"
        sectionDesc={`Discover the heartwarming stories of our employees as they reveal their joyful experiences at work. From moments of triumph to instances of camaraderie, their testimonials showcase a workplace`}
        sectionTextColor='#fff'
        sectionHeadingLayout="center"
      >*/}
      {/* <Slider>
          {empTestimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div class="p-8 rounded-3xl shadow" style={{ border: '1px solid #B599EE' }}>
                <div className="text-[16px] font-[700] text-[#EFE9FB] leading-[24px] mb-5">{item.title}</div>
                <h5 class="mb-5 text-[16px] font-[400] text-[#EFE9FB]">{item.desc}</h5>

                <div className="flex">
                  <div className="mr-4">
                    <Image src={item.empImage} width={50} height={50} alt={"img"} />
                    
                  </div>

                  <div>
                    <h6 className="text-[16px] font-[700] mb-1 text-white">{item.empName}</h6>
                    <p className="text-[16px] text-white">{item.empDesignation}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Slider> */}

      {/*</SectionWrapperNew>
      end joy work section */}

      {/* awards section */}
      <SectionWrapperNew
        bgColor={"bg-secondary-10"}
        sectionHeading={`Awards & Recognition `}
        sectionDesc={`Our work culture and commitment has helped us to earn credible achievements. It is the Kaizen attitude that we infuse at every level which consistently strengthens our organisation performance.`}
        sectionTextColor="text-primary-900"
        sectionDescColor="text-neutral-darkest-grey"
        sectionHeadingLayout="horizontal"
      >
        <div class="relative overflow-x-auto">
          <div className="w-full text-sm text-left rtl:text-right">
            {/* Header Section */}
            <div className="hidden md:flex text-xs font-semibold text-neutral-dark-grey uppercase py-2">
              <div className="w-[10%]">Year</div>
              <div className="w-[20%]">Name</div>
              <div className="w-[70%]">Description</div>
            </div>

            {/* Data Rows */}
            <div >
              {AWARD_DATA.map((item, index) => (
                <div
                  className="flex flex-wrap md:flex-nowrap border-b border-neutral-darkest-grey border-opacity-20 py-4"
                  key={index}
                >
                  {/* Year */}
                  <div className="text-body-01 font-semibold text-primary-900 w-full md:w-[10%] whitespace-nowrap mb-2 md:mb-0">
                    {item.Year}
                  </div>

                  {/* Name */}
                  <div className="text-body-01 font-semibold w-full md:w-[20%] mb-2 md:mb-0">
                    {item.Name}
                  </div>

                  {/* Description */}
                  <div className="text-base w-full md:w-[70%]">
                    {item.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapperNew>
      {/* end awards section */}
      <hr />
      {/* key policy section */}
      <SectionWrapperNew
        sectionHeading="Key Policies and Updates"
        sectionDesc=""
        sectionTextColor="text-primary-900"
        sectionDescColor="text-neutral-darkest-grey"
        sectionHeadingLayout="left"
        setTop={false}
      >
        <Slider slidesPerView={"4"}>
          {KeyPolicies_DATA.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="p-5 mt-5 min-h-[300px] rounded-3xl shadow border-[0.5px] border-neutral-light-grey transition-all duration-300 ease-in-out group hover:bg-neutral-light-grey">
                {/* Title */}
                <h6 className="text-heading-04 font-semibold mb-4">
                  {item.title}
                </h6>

                {/* Description */}
                <p className="text-[14px] text-neutral-dark-grey mb-[4rem]">
                  {item.Desc}
                </p>

                {/* Chevron Icon */}
                <div className="flex justify-end absolute right-0 bottom-0 p-3">
                  <Image
                    src="/about/chevron-right.png"
                    width={25}
                    height={25}
                    alt="che"
                    onClick={() => handleBusinessCardClick(true, item)}
                    className="curson-pointer transition-transform duration-300 ease-in-out transform group-hover:translate-x-2 cursor-pointer"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Slider>
      </SectionWrapperNew>
      {/* end key policy section */}

      <TransformBusinessForm
        Title={"Transform your Business with Us"}
        Desc={"Let us discuss how can we help you with rapid growth."}
      ></TransformBusinessForm>
    </>
  );
};

export default ContactUs;
