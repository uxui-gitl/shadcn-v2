"use client";
import React, { useState } from "react";
import ContactBanner from "@/sections/contactBanner/ContactBanner";
import SectionWrapperNew from '@/components/SectionWrapperNew';
import Slider from "@/components/Slider";
import { SwiperSlide } from "swiper/react";
import { LinearGradient } from 'react-text-gradients';
import Image from "next/image";
import OverviewSection from "@/sections/overview/OverviewSection";


const culture = [
  {id:1, title:'Co-creative Work Environment', desc:'Leverage collective excellence in an ecosystem where different perspectives converge to drive innovation', bgImageUrl:'', bgColor:'#5F22D9'},
  {id:2, title:'', desc:'', bgImageUrl:'/careers/over1.svg', bgColor:'#7B014E'},
  {id:3, title:'Growth Opportunities', desc:'Fuel your aspirations with continuous learning, mentorship and opportunities to shape the future.', bgImageUrl:'', bgColor:'#7B014E'},
  {id:4, title:'Work –life Alignment ', desc:'Create a balance of passion and priorities with a culture that honors well-being, flexibility and the beauty of life beyond work', bgImageUrl:'/careers/over1.svg', bgColor:'#7B014E'},
];


const benefits=[
  {id:1,title:'Live Better', desc:'Serene living facility at Pirojshanagar Colony – Vikhroli in Mumbai, saving commutation time for 5000+ Godrej employees.',bgImageUrl:'', bgColor:'#5F22D9'},
  {id:2,title:'Compassionate Care', desc:'Along with comprehensive medical insurance benefit, we ensure employee’s best health with NABH accredited multi-specialty hospital in colony.',bgImageUrl:'/careers/over1.svg', bgColor:'#7B014E'},
  
]

const GuidingPrinciples=[
  {id:1,title:'Purpose', desc:'Create Sustainable Value for our Stakeholders by connecting People and Technology.'},
  {id:2,title:'Vision', desc:'Be a world class provider of high-quality Information & Technology solutions.'},
  {id:3,title:'Value', desc:'Integrity,Responsiveness,Commitment, Teamwork'},
 
]

const BuildingCapability=[
  {id:1,title:'GITL Learning Academy ', desc:'An online knowledge hub offering interactive learning modules to upskill and reskill employees.'},
  {id:2,title:'Leap', desc:'Targeted and transformative training programs for future-ready leadership'},
  {id:3,title:'Khoj ', desc:`A dynamic platform for celebrating and showcasing employees' talents beyond work.`},
 
]

const CSR_DATA=[
  {id:1,title:'CSR Photo line ', desc:'We execute digital literacy training and job readiness programs for disadvantaged youth.'},
  {id:2,title:'Wellness Photo line ', desc:'Holistic health and overall wellbeing of employees with different fitness initiatives and health screening'},
  
]


const page = () => {

  return (
    <>
      <ContactBanner bannerImage={'/careers/banner-bg.png'} title="Dive into Brilliant Career Experience to Manifest the Excellence in You" desc={"We foster culture of growth, collaboration with passion for cutting-edge technology, enabling you to shape the future with us."} />

      <OverviewSection Text={`We foster a holistic culture, empowering individuals through cross-functional collaboration, recognition and continuous learning to drive an inclusive environment, ensuring equality.`} />
      <SectionWrapperNew style={{ backgroundColor: "#fff" }}
        sectionHeading=""
        sectionDesc=""
        sectionTextColor='#fff'
        sectionHeadingLayout="left"
      >
        <Slider slidesPerView={3.2}>
          {culture?.map((item, index) => (
            <SwiperSlide key={index}>
              <div className={`max-w-sm h-[512px] py-10 px-6 rounded-3xl shadow`} style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'end',
                background: `url(${item.bgImageUrl}), ${item?.bgColor}`,
              }}>
                {item?.title && (
                  <>
                  <h5 className="mb-3 text-[42px] leading-[50px] font-medium text-white">{item?.title}</h5>
                  </>
                )}
                {item?.desc && (<p className="mb-3 font-[14px] leading-[22px] text-white">{item?.desc}</p>)}
              </div>
            </SwiperSlide>
          ))}
        </Slider>

      </SectionWrapperNew>
      
      {/* slider guiding */}
      <SectionWrapperNew style={{ backgroundColor: "#000", marginTop:'-250px', paddingTop:'300px' }}
        sectionHeading="The Guiding Principles We Live By"
        sectionDesc="Driven by our principles, we strive to make a difference in every we do, building value and enhancing growth."
        sectionTextColor='#fff'
        sectionHeadingLayout="center"
      >
        <Slider>
          {GuidingPrinciples?.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="p-6 bg-[transparent]">
                <div className="flex py-4" style={{ borderBottom: '1px solid #CDBAF3' }}>
                  <Image src={"/about/whiteStar.svg"} width={30} height={30} alt={"hioasdo"} className="mr-4" />
                  <div className="text-[28px] text-white">{item.title}</div>
                </div>
                <p className="text-[20px] py-4 text-white">{item.desc}</p>
              </div>

            </SwiperSlide>
          ))}
        </Slider>
      </SectionWrapperNew>
      {/* end guiding slider */}
      {/* pimp  */}
      <SectionWrapperNew style={{ backgroundColor: "#fff", position: 'relative' }}
        sectionHeading=""
        sectionDesc=""
        sectionTextColor='#000'
        sectionHeadingLayout="left"
      >
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3 className="text-[54px] leading-[64px] font-semibold mb-3">From the CEO’s Desk</h3>
            <p className="text-[#808080] text-[32px] mb-6">-	Mr. Ajay Pimparkar </p>

            <div className="text-[20px] text-[#1D162B] font-medium mb-10">
            At Godrej Infotech, we're driven by a shared passion for delivering value to our customers. Our team is dedicated to making a meaningful impact. We believe in purpose-driven work that fosters growth, innovation and fulfillment. Godrej Infotech strives to create an environment where individuals can thrive and contribute to something larger than themselves.
            </div>

            <div className="text-[20px] text-[#1D162B] font-medium mb-10">
            Our culture is built on collaboration, open communication and mutual respect. We empower our teams to take ownership, experiment with new ideas and drive positive change. Professional development and well-being are integral to our values, ensuring our people flourish.
            </div>

            <div className="text-[20px] text-[#1D162B] font-medium mb-10">
            We invest in our people, providing opportunities for development, recognition and rewards.  Join us on this journey and contribute your unique talents and perspectives.
            </div>
            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Read more</button>
          </div>
          <div>
            <Image src="/about/pimp.svg" width={500} height={500} alt={'pimp'} className="absolute right-[8%] bottom-0" />
          </div>
        </div>
      </SectionWrapperNew>
      {/* pimp end */}

      {/* growth section */}
      <SectionWrapperNew style={{ backgroundColor: "#5F22D9" }}
        sectionHeading="Nourishing Talent and Building Capability"
        sectionDesc="Our talent development initiatives are focused to foster professional growth, interests beyond work, technical and leadership skills."
        sectionTextColor='#fff'
        sectionHeadingLayout="horizontal"
      >
        <Slider>
          {BuildingCapability.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="p-6 bg-[transparent]" style={{ borderRight: '1px solid #d3d3d3' }}>
                <Image src={"/about/whiteStar.svg"} width={30} height={30} alt={"hioasdo"} className="mb-4" />
                <div className="text-[28px] text-white">{item.title}</div>
                <p className="text-[20px] py-4 text-white">{item.desc}</p>
              </div>

            </SwiperSlide>
          ))}
        </Slider>

      </SectionWrapperNew>
      {/* end growth section */}

      {/* benfits section */}
      <SectionWrapperNew style={{ backgroundColor: "#fff" }}
        sectionHeading="Thriving in Harmony"
        sectionDesc="Experience a vibrant and progressive lifestyle, where collaboration, learning and growth come together. Designed to inspire creativity, diversity and well-being."
        sectionTextColor='#000'
        sectionHeadingLayout="left"
      >
        <Slider slidesPerView={4}>
          {benefits?.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="max-w-sm py-10 px-6 h-[424px] bg-[#9F0165] border border-gray-200 rounded-3xl shadow" style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'end',
                background: `url(${item.bgImageUrl}), ${item?.bgColor}`,
              }}>
                <h5 className="mb-3 text-[28px] leading-[36px] max-w-[200px] font-semibold text-white">{item.title}</h5>
                <p className="mb-3 font-[14px] leading-[22px] text-white">{item.desc}</p>
              </div>
            </SwiperSlide>
          ))}
        </Slider>

      </SectionWrapperNew>
      {/* end benfits section */}
      {/* balance section */}
      <SectionWrapperNew style={{ backgroundColor: "#000" }}
        sectionHeading="Employee Care and Social Responsibility"
        sectionDesc="We focus on employee's well-being and social responsibility through our wellness program and CSR initiatives."
        sectionTextColor='#fff'
        sectionHeadingLayout="center"
      >

        <Slider slidesPerView={1.5}>
          {CSR_DATA.map((item, index) => (
            <SwiperSlide key={index}>
                <div className="h-[564px]  p-6 border border-gray-200 rounded-3xl shadow" style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'end',
                backgroundImage: `url('/careers/balance1.png')`,
                backgroundSize: "cover",
                backgroundAttachment: "fixed", // This is key for the parallax effect
                backgroundPosition: "center",
              }}>
                <h5 className="mb-3 text-[28px] leading-[36px] font-semibold text-white">{item.title}</h5>
                <p className="mb-3 font-[14px] leading-[22px] text-white">{item.desc}</p>

              </div>

            </SwiperSlide>
          ))}
        </Slider>

      </SectionWrapperNew>
      {/* end balance  */}

           {/* joy at work section */}
      <SectionWrapperNew style={{ backgroundColor: "#000" }}
        sectionHeading="Employee Experience - The People Behind Our Purpose"
        sectionDesc="Explore glimpses of inspiring career journeys, highlighting dynamic work environment, collaborative experiences and opportunities for development and professional growth."
        sectionTextColor='#fff'
        sectionHeadingLayout="center"
      >
        <Slider>
          {[1, 2, 3, 4]?.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="p-8 rounded-3xl shadow" style={{ border: '1px solid #B599EE' }}>
                <div className="text-[16px] font-[700] text-[#EFE9FB] leading-[24px] mb-5">“Supportive senior management, excellent work culture, exposure to next-generation “</div>
                <h5 className="mb-5 text-[16px] font-[400] text-[#EFE9FB]">I am proud to work with this dynamic organization for a decade. I always have had the opportunity to work with remarkable clients, recommending and implementing innovative technology solutions.</h5>

                <div className="flex">
                  <div className="mr-4">
                    <Image src={'/about/reviewImage.svg'} width={50} height={50} alt="img" />
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
      {/* find role  */}
      <SectionWrapperNew
        sectionHeading="Discover Exciting Opportunities "
        sectionDesc="Chart your career growth with Godrej Infotech edge. Explore our current openings and take the first step towards a fulfilling and successful career."
        sectionTextColor='#000'
        sectionHeadingLayout="horizontal"
      >
        <div className="jobcard flex justify-between items-end py-6" style={{borderBottom:'1px solid #d3d3d3'}}>
            <div className="">
            <div className="text-[30px] mb-4 text-[#1D162B]">Experienced Backend Engineer</div>
            <p className="text-[16px] leading-[20px] text-[#808080] mb-6">We’re on the lookout for the curious, those who think big and want to define the world of tomorrow. At Amazon, you will grow <br></br>into the high impact, visionary</p>
            <div className="">
            <span className="bg-white text-[#808080] text-[14px] font-medium me-2 px-8 py-2 rounded-3xl border">Mumbai</span>
            </div>
            </div>
            <div className="">
            <button type="button" className="text-[#EFE9FB] bg-[#5F22D9] mb-8 font-medium rounded-full text-[16px] px-6 py-3 text-center">Apply Now</button>
            <p className="text-[14px] text-[#808080">Posted within the last 24 hours</p>
                </div>
        </div>
        <div className="jobcard flex justify-between items-end py-6" style={{borderBottom:'1px solid #d3d3d3'}}>
            <div className="">
            <div className="text-[28px] mb-4 text-[#1D162B]">Experienced Backend Engineer</div>
            <p className="text-[14px] leading-[20px] text-[#808080] mb-6">We’re on the lookout for the curious, those who think big and want to define the world of tomorrow. At Amazon, you will grow <br></br>into the high impact, visionary</p>
            <div className="">
            <span className="bg-white text-[#808080] text-[14px] font-medium me-2 px-8 py-2 rounded-3xl border">Mumbai</span>
            </div>
            </div>
            <div className="">
            <button type="button" className="text-[#EFE9FB] bg-[#5F22D9] mb-8 font-medium rounded-full text-[16px] px-6 py-3 text-center">Apply Now</button>
            <p className="text-[14px] text-[#808080">Posted within the last 24 hours</p>
                </div>
        </div>

      </SectionWrapperNew>
      {/* end find role */}

    </>
  );
};

export default page;
