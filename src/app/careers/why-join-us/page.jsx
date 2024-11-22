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
  {id:2, title:'', desc:'', bgImageUrl:'/careers/CoCreativeWorkEnvironment.webp', bgColor:'#7B014E'},
  {id:3, title:'Growth Opportunities', desc:'Fuel your aspirations with continuous learning, mentorship and opportunities to shape the future.', bgImageUrl:'', bgColor:'#7b014e'},
  {id:4, title:'', desc:'', bgImageUrl:'/careers/GrowthOpportunities.webp', bgColor:'#7B014E'},
  {id:5, title:'Work - life Alignment', desc:'Create a balance of passion and priorities with a culture that honors well-being, flexibility and the beauty of life beyond work.', bgImageUrl:'', bgColor:'#5F22D9'},
  {id:6, title:'', desc:'', bgImageUrl:'/careers/WorkLife.webp', bgColor:'#7B014E'},
  {id:7, title:'Rewards and Recognition', desc:'Recognize exceptional employee achievements and honoring dedication with VAS, WAU-G and GITL Annual Awards.', bgImageUrl:'', bgColor:'#7b014e'},
  {id:8, title:'', desc:'', bgImageUrl:'/careers/RewardsRecognition.webp', bgColor:'#7B014E'},
  
];


const benefits=[
  {id:1,title:'Live Better', desc:'Serene living facility at Pirojshanagar Colony – Vikhroli in Mumbai, saving commutation time for 5000+ Godrej employees.',bgImageUrl:'/careers/LiveBetter.webp', bgColor:'#5F22D9'},
  {id:2,title:'Compassionate Care', desc:'Along with comprehensive medical insurance benefit, we ensure employee’s best health with NABH accredited multi-specialty hospital in colony.',bgImageUrl:'/careers/CompCare.webp', bgColor:'#7B014E'},
  
]

const GuidingPrinciples=[
  {id:1,title:'Purpose', desc:'Create Sustainable Value for our Stakeholders by connecting People and Technology.', icon:'/careers/Purpose.svg'},
  {id:2,title:'Vision', desc:'Be a world class provider of high-quality Information & Technology solutions.', icon:'/careers/Vision.svg'},
  {id:3,title:'Value', desc:'Integrity,Responsiveness,Commitment, Teamwork', icon:'/careers/Value.svg'},
 
]

const BuildingCapability=[
  {id:1,title:'GITL Learning Academy ', desc:'An online knowledge hub offering interactive learning modules to upskill and reskill employees.'},
  {id:2,title:'Leap', desc:'Targeted and transformative training programs for future-ready leadership'},
  {id:3,title:'Khoj ', desc:`A dynamic platform for celebrating and showcasing employees' talents beyond work.`},
 {id:4,title:'Dimensions', desc:'Accelerating career for Entry-Level Trainee Programmers with comprehensive training and swift deployment'},
 {id:5,title:'Speed', desc:'Internal certification program including Train-The-Trainer, Agile-SCRUM and specialized technical training.'},
 {id:6,title:'Ignite', desc:'Stay updated, learn and grow with Annual Learning & Development Theme GITL Learning - Transform learning experience with advanced custom learning management system. '},
 {id:7,title:'LEAP', desc:' (Listen, Evoke, Accelerate &Perform) Identify and nurture critical talent across all levels, empowering accelerated career progression. '},
 
  
]

const CSR_DATA=[
  {id:1,title:'CSR Photo line ', desc:'We execute digital literacy training and job readiness programs for disadvantaged youth.'},
  {id:2,title:'Wellness Photo line ', desc:'Holistic health and overall wellbeing of employees with different fitness initiatives and health screening'},
  
]

const empTestimonials=[
{id:1,
  title:'Professional and personal development', 
  desc:`Godrej Infotech's work culture is all about collaboration and open communication, an environment that encourages growth. Our team reflects a vibrant mix of perspectives. What I admire most about Godrej Infotech is that it prioritizes employees development, both professionally and this has tremendously enriched my journey here.`,
  empName:'Mausami Samanta',
  empDesignation:'Deputy Manager, HR',
  empImage:'/careers/testimonials/mausami.png',
},
{id:2,
  title:'Continuous learning and growth', 
  desc:'It has been more than 6 years with Godrej.  My role revolves around harnessing the power of data and leveraging advanced analytics to drive insights and innovation. Working with Godrej Infotech has been a journey of continuous learning and growth, where I have had the opportunity to contribute to the evolution of analytics within the organization. The dynamic environment and emphasis on leveraging cutting-edge technologies make each day both challenging and fulfilling. I am proud to be a part of a team that values expertise and is committed to pushing the boundaries of what analytics can achieve in the industry.',
  empName:'Milind Shigam',
  empDesignation:'Data Solution Architect',
  empImage:'/careers/testimonials/milind.png',
},
{id:3,
  title:'Valuable learning experiences & opportunities', 
  desc:`Godrej Infotech's work culture is characterized by passion, supportive colleagues, jolly, friendly atmosphere and hunger for continuous learning. My journey here has been incredibly rewarding, with each day presenting valuable learning experiences and opportunities for advancement.`,
  empName:'Rahul Gorivale',
  empDesignation:'Assitant Manager Marketing',
  empImage:'/careers/testimonials/rahul.png',
},
{id:4,
  title:'Innovation focus & collaborative culture', 
  desc:`Collaborating with the G&B Business and Digital team on cutting-edge cloud projects has been rewarding experience for me. Godrej Infotech's commitment to employee development has allowed me to sharpen my skills and evolve as a leader. Grateful for the continuous support and opportunities for growth. Proud to be part of this dynamic organization thriving in innovation and collaboration.`,
  empName:'Rengarajan',
  empDesignation:'Associate Director, Cloud',
  empImage:'/careers/testimonials/renga.png',
},
{id:5,
  title:'Supportive community with passion & purpose', 
  desc:`Godrej Infotech is a tight-knit community, cheering every team member on every step of the way. My typical day kicks off with a cup of coffee and lively brainstorming sessions. We execute our plans with passion, fueling each other's drive to succeed. And amidst the hustle, there's always time for laughter and camaraderie.  From skill-building workshops to mentorship programs, the opportunities for development are endless. Here, we're not just employees; we're dreamers, innovators, and trailblazers shaping our futures together.`,
  empName:'Salil Gawade',
  empDesignation:'Finance Consultant',
  empImage:'/careers/testimonials/salil.png',
},
{id:6,
  title:'Rewarding GITL journey', 
  desc:`My journey here has been truly rewarding, contributing significantly to the growth and success of the company. Godrej Infotech provides an environment that encourages continuous learning and professional development, making every day a fulfilling experience. I take pride in being part of a team that values excellence and consistently strives for financial prowess in the industry.`,
  empName:'Tejas Bhanushali',
  empDesignation:'Chief Manager Finance and Accounts at Godrej Infotech',
  empImage:'/careers/testimonials/tejas.png',
},
{id:7,
  title:'Immense work satisfaction and overall development', 
  desc:`At Godrej Infotech I take pride in not only being a functional and technical expert but also a problem solver, diplomat, and occasional miracle worker. This engaging and never monotonous working environment has not only honed my professional skills but also enhanced my personal development—improving time management, discipline, solution approach, and communication skills. There's immense satisfaction in resolving critical business issues and receiving well-deserved appreciation. Cheers to continuous growth and success!`,
  empName:'Ujwal Bhandari',
  empDesignation:'Solution Architect and Principal Consultant',
  empImage:'/careers/testimonials/ujwal.png',
},
{id:8,
  title:'Thriving in pogressive work culture', 
  desc:`My favorite aspect of Godrej Infotech is its progressive and flexible work culture. My journey with Godrej Infotech has been amazing so far, filled with valuable learning experiences every day. I believe the company stands out among others because of its emphasis on overall employee development.`,
  empName:'Vartika Kumar',
  empDesignation:'Finance Consultant',
  empImage:'/careers/testimonials/vartika.png',
},
]
const Page = () => {

  return (
    <>
      <ContactBanner bannerImage={'/careers/banner-bg.png'} title="Dive into Inspiring Career Experience" desc={"Experience culture committed to growth, collaboration and technological innovation, driving holistic growth." } />

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
                background: `url(${item.bgImageUrl}), ${item?.bgColor}`, backgroundPosition:'center center', backgroundSize:'cover',
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
        sectionHeading={`The Guiding Principles We Live By`}
        sectionDesc={`Driven by our principles, we strive to make a difference in every we do, building value and enhancing growth.`}
        sectionTextColor='#fff'
        sectionHeadingLayout="center"
      >
        <Slider>
          {GuidingPrinciples?.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="p-6 bg-[transparent]">
                <div className="flex py-4" style={{ borderBottom: '1px solid #CDBAF3' }}>
                  <Image src={item.icon} width={64} height={64} alt={"Icon"} className="mr-4" />
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
            <h3 className="text-[54px] leading-[64px] font-semibold mb-3">{`From the CEO’s Desk`}</h3>
            <p className="text-[#808080] text-[32px] mb-6">{`-	Mr. Ajay Pimparkar`} </p>

            <div className="text-[20px] text-[#1D162B] font-medium mb-5">
            {`At Godrej Infotech, we're driven by a shared passion for delivering value to our customers. Our team is dedicated to making a meaningful impact. We believe in purpose-driven work that fosters growth, innovation and fulfillment. Godrej Infotech strives to create an environment where individuals can thrive and contribute to something larger than themselves.`}
            </div>

            <div className="text-[20px] text-[#1D162B] font-medium mb-5">
            {`Our culture is built on collaboration, open communication and mutual respect. We empower our teams to take ownership, experiment with new ideas and drive positive change. Professional development and well-being are integral to our values, ensuring our people flourish.`}
            </div>

            <div className="text-[20px] text-[#1D162B] font-medium mb-5">
            {`We invest in our people, providing opportunities for development, recognition and rewards.  Join us on this journey and contribute your unique talents and perspectives.`}
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
        sectionHeading={`Nourishing Talent and Building Capability`}
        sectionDesc={`Our talent development initiatives are focused to foster professional growth, interests beyond work, technical and leadership skills.`}
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
        sectionHeading={`Thriving in Harmony`}
        sectionDesc={`Experience a vibrant and progressive lifestyle, where collaboration, learning and growth come together. Designed to inspire creativity, diversity and well-being.`}
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
                background: `url(${item.bgImageUrl}), ${item?.bgColor}`, backgroundPosition:'center center', backgroundSize:'cover',
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
        sectionHeading={`Employee Care and Social Responsibility`}
        sectionDesc={`We focus on employee's well-being and social responsibility through our wellness program and CSR initiatives.`}
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
        sectionDesc={`Explore glimpses of inspiring career journeys, highlighting dynamic work environment, collaborative experiences and opportunities for development and professional growth.  `}
        sectionTextColor='#fff'
        sectionHeadingLayout="center"
      >
        <Slider>
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
            <p className="text-[16px] leading-[20px] text-[#808080] mb-6">{`We’re on the lookout for the curious, those who think big and want to define the world of tomorrow. At Amazon, you will grow <br></br>into the high impact, visionary`}</p>
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
            <p className="text-[14px] leading-[20px] text-[#808080] mb-6">{`We’re on the lookout for the curious, those who think big and want to define the world of tomorrow. At Amazon, you will grow <br></br>into the high impact, visionary`}</p>
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

export default Page;
