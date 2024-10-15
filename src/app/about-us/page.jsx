"use client";
// import Review from "@/sections/review/Review";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import ReactFlagsSelect from "react-flags-select";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Navbar from "@/components/Navbar/Navbar";
import Announcement from "@/sections/announcement/Announcement";
import ContactBanner from "@/sections/contactBanner/ContactBanner";
import SectionWrapperNew from '@/components/SectionWrapperNew';
import Slider from "@/components/Slider";
import { SwiperSlide } from "swiper/react";
import { LinearGradient } from 'react-text-gradients';
import TransformBusinessForm from "@/sections/transformBusinessFrom/TransformBusinessFromSection";
import Dialog from "@/components/Dialog";
import { Timeline } from "@/components/ui/timeline";

const ContactUs = () => {
  const [showModal1, setshowModal1] = useState(false);

  const data = [
    {
      title: "1971",
      content: (
      <>
      <div className="">
        <h2 className="text-[28px] font-semibold leading-[36px]">Inception of a Technology Powerhouse, Strategic Partnership and Award Garnering</h2>
        <div className="my-10">
          {[1,2,3,4].map((item) => (
            <>
             <div className="flex py-4" style={{borderBottom:'1px solid #E4E4E4'}}>
            <span className="text-[20px] text-[#808080] mr-4">1971</span><p className="text-[20px] text-[#808080] mr-4 font-medium">Godrej Infotech Established</p>
          </div>
            </>
          ))}
         
        </div>
      </div>
      </>
      ),
    },
    {
      title: "2005",
      content: (
        <>
      <div className="">
        <h2 className="text-[28px] font-semibold leading-[36px]">Inception of a Technology Powerhouse, Strategic Partnership and Award Garnering</h2>
        <div className="my-10">
          {[1,2,3,4].map((item) => (
            <>
             <div className="flex py-4" style={{borderBottom:'1px solid #E4E4E4'}}>
            <span className="text-[20px] text-[#808080] mr-4">1971</span><p className="text-[20px] text-[#808080] mr-4 font-medium">Godrej Infotech Established</p>
          </div>
            </>
          ))}
        </div>
      </div>
      </>
      ),
    },
    {
      title: "2009",
      content: (
        <>
         <div className="">
        <h2 className="text-[28px] font-semibold leading-[36px]">Inception of a Technology Powerhouse, Strategic Partnership and Award Garnering</h2>
        <div className="my-10">
          {[1,2,3,4].map((item) => (
            <>
             <div className="flex py-4" style={{borderBottom:'1px solid #E4E4E4'}}>
            <span className="text-[20px] text-[#808080] mr-4">1971</span><p className="text-[20px] text-[#808080] mr-4 font-medium">Godrej Infotech Established</p>
          </div>
            </>
          ))}
        </div>
      </div>
        </>
      ),
    },
    {
      title: "2018",
      content: (
        <>
         <div className="">
        <h2 className="text-[28px] font-semibold leading-[36px]">Inception of a Technology Powerhouse, Strategic Partnership and Award Garnering</h2>
        <div className="my-10">
          {[1,2,3,4].map((item) => (
            <>
             <div className="flex py-4" style={{borderBottom:'1px solid #E4E4E4'}}>
            <span className="text-[20px] text-[#808080] mr-4">1971</span><p className="text-[20px] text-[#808080] mr-4 font-medium">Godrej Infotech Established</p>
          </div>
            </>
          ))}
        </div>
      </div>
        </>
      ),
    },
  ];

  return (
    <>
     <Dialog
        shouldShow={showModal1}
        onRequestClose={() => {
          setshowModal1((prev) => !prev);
        }}
        title={"dummy title"}
      >
        <h1>Dummy data</h1>
      </Dialog>
      {/* dialog end */}
      {/* Nav */}
      <Announcement />

      <div className={`relative z-[500]`}>
        <div className={`absolute w-full  `}>
          <Navbar theme="light" />
        </div>
      </div>

      <ContactBanner bannerImage={'/about/banner-bg.svg'} title={`Crafting Tomorrow’s Success Today`} desc={`Digitizing Healthcare with All-Inclusive Avant-Garde IT Solutions and Services`} />

      {/* grow section  */}

      <SectionWrapperNew style={{ backgroundColor: "#fff" }}
        sectionHeading=""
        sectionDesc=""
        sectionTextColor='#000'
        sectionHeadingLayout="center"
      >
        <div className="flex flex-col justify-center items-center mb-16">
          <div className="w-full sm:w-1/2 text-center">
            <div className={`text-3xl sm:text-2xl md:text-[54px] font-semibold leading-tight md:leading-[64px] mb-6`}> <LinearGradient
              gradient={["to left", "#5F22D9 ,#E0028E"]}
              fallbackColor="black"
            >{'Humble Beginnings To Growing Tech Hub'}</LinearGradient></div>
            <div className={`text-lg font-semibold `} >{'The Inspiring Journey Of Godrej Infotech'}</div>
          </div>
        </div>

        <div className="my-10">
        <Timeline data={data} />
        </div>

      </SectionWrapperNew>

      {/* end grow section */}

      {/* guiding section */}
      <SectionWrapperNew style={{ backgroundColor: "#000" }}
        sectionHeading="The Guiding Principles We Live By"
        sectionDesc={`Every day, we endeavour to create a meaningful impact, driven by our core principles and essence, reaching beyond our industry to positively touch every association we encounter.`}
        sectionTextColor='#fff'
        sectionHeadingLayout="center"
      >

        <Slider>
          {[1, 2, 3, 4]?.map((item, index) => (
            <SwiperSlide key={index}>
              <div class="p-6 bg-[transparent]">
                <div className="flex py-4" style={{ borderBottom: '1px solid #CDBAF3' }}>
                  <Image src={"about/whiteStar.svg"} width={30} height={30} alt={"hioasdo"} className="mr-4" />
                  <div className="text-[28px] text-white">Purpose</div>
                </div>
                <p class="text-[20px] py-4 text-white">Be a world class provider of high-quality Information & Technology solutions.</p>
              </div>

            </SwiperSlide>
          ))}
        </Slider>

      </SectionWrapperNew>
      {/*end guiding section */}

      {/* hub of expertise */}
      <SectionWrapperNew style={{ backgroundColor: "#5F22D9" }}
        sectionHeading="Hub of Expertise"
        sectionDesc={`Guided by a strategic vision and a commitment to placing people at the forefront, our leadership team places paramount importance on the well-being and professional growth`}
        sectionTextColor='#fff'
        sectionHeadingLayout="horizontal"
      >

        <div className="grid grid-cols-4 gap-16 py-6">
          <div className="">
            <h1 className="text-[64px] font-[700] text-white">25<sup className="text-normal">+</sup></h1>
            <p className="text-base font-medium text-[#EFE9FB]">Years of Excellence</p>
          </div>
          <div className="">
            <h1 className="text-[64px] font-[700] text-white">600<sup>+</sup></h1>
            <p className="text-base font-medium text-[#EFE9FB]">Global Reach with Satisfied Customer</p>
          </div>
          <div className="">
            <h1 className="text-[64px] font-[700] text-white">15k<sup>+</sup></h1>
            <p className="text-base font-medium text-[#EFE9FB]">Man years of Expertise</p>
          </div>
          <div className="">
            <h1 className="text-[64px] font-[700] text-white">600<sup>+</sup></h1>
            <p className="text-base font-medium text-[#EFE9FB]">Man years of Expertise</p>
          </div>
        </div>

      </SectionWrapperNew>
      {/* end hub of expertise */}

      {/* visionary minds  */}
      <SectionWrapperNew style={{ backgroundColor: "#fff" }}
        sectionHeading="Shaping the Future with Visionary Minds"
        sectionDesc={`Guided by a strategic vision and a commitment to placing people at the forefront, our leadership team places paramount importance on the well-being and professional growth`}
        sectionTextColor='#000'
        sectionHeadingLayout="center"
      >
      </SectionWrapperNew>
      {/* end visionary minds  */}

      <SectionWrapperNew style={{ backgroundColor: "#FCE6F4", position: 'relative' }}
        sectionHeading=""
        sectionDesc=""
        sectionTextColor='#000'
        sectionHeadingLayout="left"
      >
        <div class="grid grid-cols-2 gap-4">
          <div>
            <h3 className="text-[54px] leading-[64px] font-semibold mb-3">Ajay Pimparkar</h3>
            <p className="text-[#808080] text-[32px] mb-6">Chief Executive Officer</p>

            <div className="text-[20px] text-[#1D162B] font-medium mb-10">
              {`Mr. Ajay Pimparkar's association with the Godrej Group started way back in the 1980's. He has been responsible for preparing and implementing the complete Information Technology roadmap for the various businesses in tune with the Strategic Business Plan of the organization`}
            </div>
            <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Read more</button>
          </div>
          <div>
            <Image src="about/pimp.svg" width={500} height={500} alt={'pimp'} className="absolute right-[8%] bottom-0" />
          </div>
        </div>
      </SectionWrapperNew>

      {/* joy at work section */}
      <SectionWrapperNew style={{ backgroundColor: "#000" }}
        sectionHeading="Unleashing Joy at Work"
        sectionDesc={`Discover the heartwarming stories of our employees as they reveal their joyful experiences at work. From moments of triumph to instances of camaraderie, their testimonials showcase a workplace`}
        sectionTextColor='#fff'
        sectionHeadingLayout="center"
      >
        <Slider>
          {[1, 2, 3, 4]?.map((item, index) => (
            <SwiperSlide key={index}>
              <div class="p-8 rounded-3xl shadow" style={{ border: '1px solid #B599EE' }}>
                <div className="text-[16px] font-[700] text-[#EFE9FB] leading-[24px] mb-5">{`“Supportive senior management, excellent work culture, exposure to next-generation “`}</div>
                <h5 class="mb-5 text-[16px] font-[400] text-[#EFE9FB]">{`I am proud to work with this dynamic organization for a decade. I always have had the opportunity to work with remarkable clients, recommending and implementing innovative technology solutions.`}</h5>

                <div className="flex">
                  <div className="mr-4">
                    <Image src={'about/reviewImage.svg'} width={50} height={50} alt="img" />
                  </div>

                  <div>
                    <h6 className="text-[16px] font-[700] mb-1 text-white">Tejas Bhanushali</h6>
                    <p className="text-[16px] text-white">Chief Manager Finance and Accounts</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Slider>

      </SectionWrapperNew>
      {/*end joy work section */}

      {/* awards section */}
      <SectionWrapperNew style={{ backgroundColor: "#fff" }}
        sectionHeading={`Awards & Recoginitions`}
        sectionDesc={`Discover the heartwarming stories of our employees as they reveal their joyful experiences at work. From moments of triumph to instances of camaraderie, their testimonials showcase a workplace`}
        sectionTextColor='#000'
        sectionHeadingLayout="horizontal"
      >



        <div class="relative overflow-x-auto">
          <table class="w-full text-sm text-left rtl:text-right">
            <thead class="text-xs text-gray-700 uppercase bg-white">
            </thead>
            <tbody>
              {[1, 2, 3, 4, 5].map((item) => (
                <tr class="bg-white border-b ">
                  <th scope="row" class="px-6 py-4 font-semibold text-[#000] text-[20px] whitespace-nowrap">
                    2024
                  </th>
                  <td class="px-6 py-4 text-[20px] font-semibold">
                    Design Award
                  </td>
                  <td class="px-6 py-4 text-[20px]">
                    Lorem ipsum dolor sit amet consectetur.
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>



      </SectionWrapperNew>
      {/* end awards section */}

      {/* key policy section */}
      <SectionWrapperNew
        sectionHeading="Key Policies and Updates"
        sectionDesc=""
        sectionTextColor='#000'
        sectionHeadingLayout="left"
      >

        <Slider slidesPerView={'4'}>
          {[1, 2, 3, 4]?.map((item, index) => (
            <SwiperSlide key={index}>
              <div class="p-8 rounded-3xl shadow " style={{ border: '1px solid #d3d3d3' }}>
                  <h6 className="text-[20px] font-semibold mb-6">Coporate Policies</h6>
                  <p className="text-[16px] mb-[92px]">Require Development from Scratch. Customisation of</p>
                  <div className="flex justify-end">
                    <Image src="/about/chevron-right.png" width={25} height={25} alt="che" onClick={() => setshowModal1((prev) => !prev)} style={{cursor:'pointer'}}/>
                  </div>
              </div>
            </SwiperSlide>
          ))}
        </Slider>


      </SectionWrapperNew>
      {/* end key policy section */}

      <TransformBusinessForm
        Title={"Transform your Business with us"}
        Desc={
          "Let us discuss how intelligent technologies can help you with rapid growth."
        }
      ></TransformBusinessForm>
    </>
  );
};

export default ContactUs;
