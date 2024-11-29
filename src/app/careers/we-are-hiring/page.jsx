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

const Page = () => {
  const router = useRouter();
  const [jobList, SetJobList] = useState([])
  const [copyJobList, SetCopyJobList] = useState(jobList)


  const [functionData, setFunctionData] = useState('');
  const [loactionData, setLoactionData] = useState('');


  const onChange = (event, type) => {
    const value = event.target.value;
    { type == 'function' && setFunctionData(value) }
    { type == 'location' && setLoactionData(value) }
};

useEffect(() => {
  filterData();
}, [functionData, loactionData])

function handleReset() {
  SetCopyJobList(jobList);
  setFunctionData('');
  setLoactionData('');
}

function filterData() {
  if (functionData != '') {
      const data = copyJobList.filter((item) => item.functionCode == functionData);
      console.log(data,"function data")
      SetCopyJobList(data);
  }

  if (loactionData != '') {
      const data = copyJobList.filter((item) => item.location == loactionData);
      SetCopyJobList(data);
  }
}

  useEffect(() => {
    getJobList();
  }, []);

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
                <option value="A/CS">Accounts</option>
                <option value="ADMN">Administration</option>
                <option value="APBI">ANALYTICS - POWER BI</option>
                <option value="AGCI">Asst. General Manager - Cloud Infrastructure</option>
                <option value="AGDB">Asst. General Manager - Database</option>
                <option value="AGMD">Asst. General Manager - Digital</option>
                <option value="AGET">Asst. General Manager - Endpoint Technology</option>
                <option value="AT">Automated Testing</option>
                <option value="AWS">AWS</option>
                <option value="AXAP">AXAPTA ERP</option>
                <option value="OTG1">Backup Administrator</option>
                <option value="BSFC">Bespoke Functional</option>
                <option value="BSTC">BESPOKE TECHNICAL</option>
                <option value="BSG">BUSINESS SOLUTION GROUP</option>
                <option value="PLM">CADPLM</option>
                <option value="COE">CENTRE OF EXCELLENCE</option>
                <option value="CICD">CICD</option>
                <option value="CLPT">CLIENT PARTNER</option>
                <option value="CLD">Cloud</option>
                <option value="CLDD">Cloud Development</option>
                <option value="CRM">CRM</option>
                <option value="D365">D365 Consultant</option>
                <option value="DACW">Data COE &amp; Data Warehousing</option>
                <option value="DSGN">Design Track</option>
                <option value="DNET">DOT NET</option>
                <option value="ECOM">ECOM</option>
                <option value="Ext">External Business</option>
                <option value="FINC">Finance</option>
                <option value="FUSU">FUNCTIONAL SUPPORT</option>
                <option value="OTG2">Hardware Asset Manager</option>
                <option value="OHD">Head - Operations</option>
                <option value="HRIS">HRIS</option>
                <option value="BU1">Infor</option>
                <option value="IM">INFOR &amp; Microsoft</option>
                <option value="INFF">Infor - Functional</option>
                <option value="INFT">Infor - Technical</option>
                <option value="INFO">Infor LN</option>
                <option value="ILCM">Infor LN Consultant - MFG</option>
                <option value="ILCP">Infor LN Consultant - PLM</option>
                <option value="INFS">Infor SCE</option>
                <option value="INDA">Infor Technical (Development &amp; Administration)</option>
                <option value="INXI">Infor Xi</option>
                <option value="ITSE">IT SECURITY</option>
                <option value="JAVA">JAVA</option>
                <option value="JVTC">Java Technology</option>
                <option value="LXAD">Linux Administrator</option>
                <option value="MBSF">Manager - Bespoke Functional</option>
                <option value="DCOE">Manager - Data CoE</option>
                <option value="MFG">Manufacturing</option>
                <option value="MKTG">Marketing</option>
                <option value="MDS">Microsoft Dynamics</option>
                <option value="MOTC">MOTC</option>
                <option value="MSDB">MSSQL DBA</option>
                <option value="NAV">NAVISION ERP</option>
                <option value="NETA">NETWORK ADMINISTRATOR</option>
                <option value="OTG">OPERATION &amp; TECHNOLOGY GROUP</option>
                <option value="OB">OTHER BUSINESS</option>
                <option value="OTHR">OTHERS</option>
                <option value="PERS">Personnel</option>
                <option value="PBID">Power BI - Digital Group</option>
                <option value="RTL">Practice Lead - Retail</option>
                <option value="WMS">Practice Lead - WMS &amp; SCE</option>
                <option value="PRSL">PRESALES</option>
                <option value="PURC">Purchase</option>
                <option value="QUAL">Quality</option>
                <option value="RMG">Resource Management Group</option>
                <option value="RPA">RPA - Digital Group</option>
                <option value="RPAC">RPA CoE</option>
                <option value="SALS">Sales</option>
                <option value="SFC">Salesforce</option>
                <option value="SAP1">SAPA1</option>
                <option value="STDN">Satellite Team Lead - .NET</option>
                <option value="STLC">Satellite Team Lead - Cloud</option>
                <option value="STLJ">Satellite Team Lead - Java</option>
                <option value="STIU">Satellite Team Lead - UIUX</option>
                <option value="SHRP">Share Point</option>
                <option value="SMRT">Smartnet &amp; Allied Systems</option>
                <option value="SWDL">SOFTWARE DEVELOPMENT</option>
                <option value="SS">SOFTWARE SOLUTION</option>
                <option value="SA">Solution Architect</option>
                <option value="TECH">TECHNICAL</option>
                <option value="Test">Testing</option>
                <option value="TU1">TU1</option>
                <option value="TU2">TU2</option>
                <option value="WCS">WCS Developer</option>
                <option value="WPD">Web Page Development</option>
              </select>
              <select id="default" value={loactionData}  onChange={(e) => onChange(e, 'location')} className="sm:mr-2 mb-2 sm:mb-0 px-4 py-3 xs-w-full bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block ">
                <option selected>Loaction</option>
                <option value="All Branches">All Branches</option>
                <option value="GIA US">GIA US</option>
                <option value="LVD - GI - EU">LVD - GI - EU</option>
                <option value="OVERSEAS">OVERSEAS</option>
                <option value="PLANT-10">PLANT-10</option>
                <option value="Singapore">Singapore</option>
              </select>
            <button onClick={() => handleReset()} type="button" className="px-5 py-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-xl border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700">clear</button>
          </div>
        </div>
        <div className="text-[14px] text-[#E0028E] mb-4">{copyJobList.length} jobs in all categories in all locations</div>
        {copyJobList?.map(item => (
          <>
          <JobCard props={item}></JobCard>
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
