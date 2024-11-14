"use client";
import React, { useState, useEffect } from "react";
import ContactBanner from "@/sections/contactBanner/ContactBanner";
import SectionWrapperNew from '@/components/SectionWrapperNew';
import Slider from "@/components/Slider";
import { SwiperSlide } from "swiper/react";
import { LinearGradient } from 'react-text-gradients';
import Image from "next/image";
import BlogSection from "@/sections/blog/BlogSection";
import TransformBusinessForm from "@/sections/transformBusinessFrom/TransformBusinessFromSection";
import axios from 'axios';
import { useRouter } from 'next/navigation';  

const Page = () => {
  const router = useRouter();
  const [jobList, SetJobList] = useState([])


  useEffect(() => {
    getJobList();
  }, []);

  async function getJobList() {
    try {
      let response = await axios.post('http://gnbnettestapp2.gnb.com/Careerapi/api/SearchVacancy/OpenVacancyGIL');
      let data = response.data.model;
      SetJobList(data);
      console.log(data)
    } catch (error) {
      console.log(error);
      res.status(error.response.status).json({ message: error.message });
    }
  }

  return (
    <>
      <ContactBanner bannerImage={'/contact/contact-banner.svg'} title={`Join Our Team`} desc={`Lead your future with Godrej Infotech. We value innovation and teamwork.`} />

      <SectionWrapperNew
        sectionHeading="Enrich Your Future with Us"
        sectionDesc="We're hiring passionate professionals to drive meaningful impact."
        sectionTextColor='#000'
        sectionHeadingLayout="center"
      >
        <div className="">
          <form className="w-full mx-auto">
            <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
              </div>
              <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white " placeholder="Search Mockups, Logos..." required />
              <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-[#5F22D9] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-10 py-2 ">Search</button>
            </div>
          </form>

          <div className="flex w-[50%] my-6">
            <select id="default" className="bg-[white] mr-6 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5">
              <option selected>Function</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
            <select id="default" className="bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 ">
              <option selected>Location</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
          </div>
        </div>
        <div className="text-[14px] text-[#E0028E] mb-4">{jobList.length} jobs in all categories in all locations</div>
        {jobList?.map(item => (
          <>
            <div className="jobcard flex justify-between items-end py-6" style={{ borderBottom: '1px solid #d3d3d3' }}>
              <div className="">
                <div className="text-[30px] mb-4 text-[#1D162B]">{item?.designation}</div>
                <p className="text-[16px] leading-[20px] text-[#808080] mb-6">{item?.functionsDesc}</p>
                <div className="">
                  <span className="bg-white text-[#808080] text-[14px] font-medium me-2 px-8 py-2 rounded-3xl border">{item?.location}</span>
                </div>
              </div>
              <div className="">
                <button type="button" className="text-[#EFE9FB] bg-[#5F22D9] mb-8 font-medium rounded-full text-[16px] px-6 py-3 text-center" onClick={() => router.push(`/job-detail/${item.srNo}`)}>Apply Now</button>
                <p className="text-[14px] text-[#808080">Posted {item?.insertDate}</p>
              </div>
            </div>
          </>
        ))}
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
                  <Image src="/contact/star.svg" width={20} height={20} alt={'star'} />
                  <Image src="/contact/star.svg" width={20} height={20} alt={'star'} />
                  <Image src="/contact/star.svg" width={20} height={20} alt={'star'} />
                  <Image src="/contact/star.svg" width={20} height={20} alt={'star'} />
                </div>

                <div className="flex flex-row justify-between items-end">
                  <div>
                    <h1 className="text-[72px] font-bold "> <LinearGradient gradient={['to left', '#5F22D9 ,#E0028E']}>
                      4.1
                    </LinearGradient> <span className="text-base text-slate-400 font-normal">out of 5</span></h1>
                  </div>
                  <div>
                    <button type="button" className="text-slate-500 bg-white border border-gray-300 focus:outline-none focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 ">Explore Job Listings</button>
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
        Heading={"Empowering Professional Journeys / Grow with Us"}
        Desc={
          "As a leading digital transformation company, we offer exciting opportunities for growth and development."
        }
        Color={"white"}
        readMoreUrl={"https://www.godrejinfotech.com/blogDetails.aspx?blog=7"}
      ></BlogSection>

      <TransformBusinessForm
        Title={"Why Join Us"}
        Desc={
          "Transform Your Business with Us"
        }
      ></TransformBusinessForm>
    </>
  );
};

export default Page;
