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
  {id:1,title:'Health Insurance', desc:'Comprehensive health insurance plans covering employees and their families',bgImageUrl:'', bgColor:'#5F22D9'},
  {id:2,title:'Wellness Programs', desc:'wellness initiatives, and mental health support',bgImageUrl:'/careers/over1.svg', bgColor:'#7B014E'},
  {id:3,title:'Retirement Plans', desc:'Company-matched retirement savings plans to help you secure your future.',bgImageUrl:'', bgColor:'#000'},
  {id:4,title:'Flexible Work Arrangements', desc:'Work remotely or adjust your hours to maintain a healthy work-life balance',bgImageUrl:'/careers/over1.svg', bgColor:'#5F22D9'},

]

const GuidingPrinciples=[
  {id:1,title:'Purpose', desc:'Create Sustainable Value for our Stakeholders by connecting People and Technology.'},
  {id:2,title:'Vision', desc:'Be a world class provider of high-quality Information & Technology solutions.'},
  {id:3,title:'Value', desc:'Integrity,Responsiveness,Commitment, Teamwork'},
 
]


const page = () => {

  return (
    <>
      <ContactBanner bannerImage={'/careers/banner-bg.png'} title="Dive into Brilliant Career Experience to Manifest the Excellence in You" desc={"We foster culture of growth, collaboration with passion for cutting-edge technology, enabling you to shape the future with us."} />

      <OverviewSection Text={`At Godrej Infotech, we believe in creating a space where creativity meets collaboration. Our culture revolves around fostering innovation, diversity, and inclusivity, where every individual can thrive. We emphasize continuous learning and are dedicated to pushing the boundaries of technology.`} />
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
            <h3 className="text-[54px] leading-[64px] font-semibold mb-3">Ajay Pimparkar</h3>
            <p className="text-[#808080] text-[32px] mb-6">Chief Executive Officer</p>

            <div className="text-[20px] text-[#1D162B] font-medium mb-10">
              Read about our team’s commitment to provide
              everyone on our global platform with the technology
              that can help them move ahead.

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
        sectionHeading="Your Growth, Our Priority"
        sectionDesc="At Godrej Infotech, we invest in your future. With a wide range of learning and development programs, we help you grow professionally and personally."
        sectionTextColor='#fff'
        sectionHeadingLayout="horizontal"
      >
        <Slider>
          {[1, 2, 3, 4]?.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="p-6 bg-[transparent]" style={{ borderRight: '1px solid #d3d3d3' }}>
                <Image src={"/about/whiteStar.svg"} width={30} height={30} alt={"hioasdo"} className="mb-4" />
                <div className="text-[28px] text-white">Purpose</div>
                <p className="text-[20px] py-4 text-white">Be a world class provider of high-quality Information & Technology solutions.</p>
              </div>

            </SwiperSlide>
          ))}
        </Slider>

      </SectionWrapperNew>
      {/* end growth section */}

      {/* benfits section */}
      <SectionWrapperNew style={{ backgroundColor: "#fff" }}
        sectionHeading="Benefits that support you"
        sectionDesc="We care for our employees and offer a comprehensive benefits package designed to support their health, well-being, and financial security."
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
        sectionHeading="Balance and Well-Being"
        sectionDesc="At Godrej Infotech, we believe in a holistic approach to life. That’s why we encourage our employees to engage in activities beyond work, through social events, CSR activities, and wellness programs."
        sectionTextColor='#fff'
        sectionHeadingLayout="center"
      >

        <Slider slidesPerView={1.5}>
          {[1, 2, 3, 4]?.map((item, index) => (
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
                <h5 className="mb-3 text-[28px] leading-[36px] font-semibold text-white">CSR</h5>
                <p className="mb-3 font-[14px] leading-[22px] text-white">At Godrej Infotech, we believe in a holistic approach to life.<br></br> That’s why we encourage our employees to engage</p>

              </div>

            </SwiperSlide>
          ))}
        </Slider>

      </SectionWrapperNew>
      {/* end balance  */}

           {/* joy at work section */}
      <SectionWrapperNew style={{ backgroundColor: "#000" }}
        sectionHeading="Unleashing Joy at Work"
        sectionDesc="Discover the heartwarming stories of our employees as they reveal their joyful experiences at work. From moments of triumph to instances of camaraderie, their testimonials showcase a workplace"
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
        sectionHeading="Find your Next Role"
        sectionDesc="We care for our employees and offer a comprehensive benefits package designed to support their health, well-being, and financial security."
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
