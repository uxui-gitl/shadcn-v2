"use client";
import React, { useState } from "react";
import ContactBanner from "@/sections/contactBanner/ContactBanner";
import SectionWrapperNew from '@/components/SectionWrapperNew';
import Slider from "@/components/Slider";
import { SwiperSlide } from "swiper/react";
import { LinearGradient } from 'react-text-gradients';
import Image from "next/image";
import BlogSection from "@/sections/blog/BlogSection";
import TransformBusinessForm from "@/sections/transformBusinessFrom/TransformBusinessFromSection";



const page = () => {

  return (
    <>
      <ContactBanner />

      <SectionWrapperNew
        sectionHeading="Hey, Great to see you here"
        sectionDesc="The Inspiring Journey Of Godrej Infotech"
        sectionTextColor='#000'
        sectionHeadingLayout="center"
      >
        <div className="text-[14px] text-[#E0028E] mb-4">79 jobs in all categories in all locations</div>
        <div className="jobcard flex justify-between items-end py-6" style={{borderBottom:'1px solid #d3d3d3'}}>
            <div className="">
            <div className="text-[30px] mb-4 text-[#1D162B]">Experienced Backend Engineer</div>
            <p className="text-[16px] leading-[20px] text-[#808080] mb-6">We’re on the lookout for the curious, those who think big and want to define the world of tomorrow. At Amazon, you will grow <br></br>into the high impact, visionary</p>
            <div className="">
            <span class="bg-white text-[#808080] text-[14px] font-medium me-2 px-8 py-2 rounded-3xl border">Mumbai</span>
            </div>
            </div>
            <div className="">
            <button type="button" class="text-[#EFE9FB] bg-[#5F22D9] mb-8 font-medium rounded-full text-[16px] px-6 py-3 text-center">Apply Now</button>
            <p className="text-[14px] text-[#808080">Posted within the last 24 hours</p>
                </div>
        </div>
        <div className="jobcard flex justify-between items-end py-6" style={{borderBottom:'1px solid #d3d3d3'}}>
            <div className="">
            <div className="text-[28px] mb-4 text-[#1D162B]">Experienced Backend Engineer</div>
            <p className="text-[14px] leading-[20px] text-[#808080] mb-6">We’re on the lookout for the curious, those who think big and want to define the world of tomorrow. At Amazon, you will grow <br></br>into the high impact, visionary</p>
            <div className="">
            <span class="bg-white text-[#808080] text-[14px] font-medium me-2 px-8 py-2 rounded-3xl border">Mumbai</span>
            </div>
            </div>
            <div className="">
            <button type="button" class="text-[#EFE9FB] bg-[#5F22D9] mb-8 font-medium rounded-full text-[16px] px-6 py-3 text-center">Apply Now</button>
            <p className="text-[14px] text-[#808080">Posted within the last 24 hours</p>
                </div>
        </div>

      </SectionWrapperNew>

       {/* <Review /> */}
       <SectionWrapperNew style={{ backgroundColor: "#000" }}
        sectionHeading=""
        sectionDesc=""
        sectionTextColor='#fff'
        sectionHeadingLayout="left"
      >
        <Slider slidesPerView="2.2">
          {[1, 2, 3, 4, 5]?.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="w-full p-6 bg-white border rounded-3xl shadow ">
                <h5 className="mb-6 text-[28px] font-bold text-black max-w-sm leading-9">Over 250 reviews on
                  Ambition Box</h5>
                <p className="mb-6 font-sm text-gray-700 dark:text-gray-400">I consent to the processing of my personal data by Godrej Infotech in
                  accordance with the privacy notice.</p>
                <div className="flex mb-4">
                  <Image src="/contact/star.svg" width={20} height={20} />
                  <Image src="/contact/star.svg" width={20} height={20} />
                  <Image src="/contact/star.svg" width={20} height={20} />
                  <Image src="/contact/star.svg" width={20} height={20} />
                </div>

                <div className="flex flex-row justify-between items-end">
                  <div>
                    <h1 className="text-[72px] font-bold "> <LinearGradient gradient={['to left', '#5F22D9 ,#E0028E']}>
                      4.1
                    </LinearGradient> <span className="text-base text-slate-400 font-normal">out of 5</span></h1>
                  </div>
                  <div>
                    <button type="button" class="text-slate-500 bg-white border border-gray-300 focus:outline-none focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 ">Explore Job Listings</button>
                  </div>
                </div>

                <div>

                </div>
              </div>

            </SwiperSlide>
          ))}
        </Slider>
      </SectionWrapperNew>

      <BlogSection
        ID={"blog"}
        blogImageUrl={'/homeNew/blog-svg.png'}
        Heading={"Elevate Your Professional Journey"}
        Desc={
          "Join a collaborative environment that fosters creativity and innovation. Take the next step in your career today!"
        }
        Color={"white"}
        readMoreUrl={"https://www.godrejinfotech.com/blogDetails.aspx?blog=7"}
      ></BlogSection>

<TransformBusinessForm
        Title={"Transform your Business with us"}
        Desc={
          "Let us discuss how intelligent technologies can help you with rapid growth."
        }
      ></TransformBusinessForm>
    </>
  );
};

export default page;
