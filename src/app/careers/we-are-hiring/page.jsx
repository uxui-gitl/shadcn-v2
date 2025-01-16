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
import {Pagination} from "@nextui-org/react";
import JobCard from '@/components/JobCard';
import url from "@/data/url";


const Page = () => {
  const router = useRouter();
  const [jobList, SetJobList] = useState([])
  const [copyJobList, SetCopyJobList] = useState(jobList);
  console.log(copyJobList, "copyJobList");
  const [functionDropDownData, setFunctionDropDownData] = useState([]);
  const [businessDropDownData, setBusinessDropDownData] = useState([]);
  const [locationDropDownData, setLocationDropDownData] = useState([]);


  const [functionData, setFunctionData] = useState('');
  const [loactionData, setLoactionData] = useState('');
  const [businessData, setBusinessData] = useState('');



  const onChange = (event, type) => {
    const value = event.target.value;
    { type == 'function' && setFunctionData(value) }
    { type == 'location' && setLoactionData(value) }
    { type == 'business' && setBusinessData(value) }

};

useEffect(() => {
  filterData();
}, [functionData, loactionData, businessData])

function handleReset() {
  SetCopyJobList(jobList);
  setFunctionData('');
  setLoactionData('');
  setBusinessData('');
}

function filterData() {
  if (functionData != '') {
      const data = copyJobList.filter((item) => item.functionCode == functionData);
      SetCopyJobList(data);
  }

  if (loactionData != '') {
      const data = copyJobList.filter((item) => item.location == loactionData);
      SetCopyJobList(data);
  }
  
  if (businessData != '') {
    const data = copyJobList.filter((item) => item.div == businessData);
    SetCopyJobList(data);
}
}

  useEffect(() => {
    getJobList();
    getFilterList();
  }, []);

  async function getFilterList() {
    try {
      const [d1, d2, d3] = await Promise.all([
        axios.get(`${url.vacancyUrl}/GetGILFunctionDetails`),
        axios.get(`${url.vacancyUrl}/GetGILBusinessDetails`),
        axios.get(`${url.vacancyUrl}/GetGILLocationDetails`),
      ]);
      console.log(d2, "d2")
      setFunctionDropDownData(d1?.data?.model);
      setBusinessDropDownData(d2?.data?.model);
      setLocationDropDownData(d3?.data.model);
    } catch (error) {
      console.log(error);
    }
  }

  async function getJobList() {
    try {
      let response = await axios.post('http://gnbnetdevapp1.gnb.com/Careerapi/api/SearchVacancy/OpenVacancyGIL');
      let data = response.data.model;
      SetJobList(data);
      SetCopyJobList(data)
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
          <form className="w-full mx-auto mb-6 hidden">
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

          <div className="flex flex-col sm:flex-row justify-end mb-2 sm:mb-4">
              <select id="functionDropdown" value={functionData}  onChange={(e) => onChange(e, 'function')} className="sm:mr-2 mb-2 sm:mb-0 px-4 py-3 xs-w-full bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block ">
                <option selected>Function</option>
                {functionDropDownData?.map((item, index) => (
                  <>
                <option key={index} value={item?.functionsCode}>{item?.functionsDesc}</option>
                  </>
                ))}
              </select>
              <select id="default" value={businessData}  onChange={(e) => onChange(e, 'business')} className="sm:mr-2 mb-2 sm:mb-0 px-4 py-3 xs-w-full bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block ">
                <option selected>Business</option>
                {businessDropDownData?.map((item,index) => (
                <option key={index} value={item?.divDeptCode}>{item?.divDeptDesc}</option>
                ))}

              </select>
              <select id="default" value={loactionData}  onChange={(e) => onChange(e, 'location')} className="sm:mr-2 mb-2 sm:mb-0 px-4 py-3 xs-w-full bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block ">
                <option selected>Loaction</option>
                {locationDropDownData?.map((item, index) => (
                <option key={index} value={item?.locWebPageDesc}>{item?.locWebPageDesc}</option>
                ))}

              </select>
            <button onClick={() => handleReset()} type="button" className="px-5 py-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-xl border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700">clear</button>
          </div>
        </div>
        <div className="text-[14px] text-[#E0028E] mb-4">{copyJobList.length} jobs in all categories in all locations</div>
        {copyJobList?.map((item, index) => (
          <>
          <JobCard key={index} props={item}></JobCard>
          </>
        ))}
          {copyJobList.length==0 && (<h2 className="text-[28px] font-semibold"> No Data Found</h2>)}
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
