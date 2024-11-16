"use client";
import React, { useState, useEffect } from "react";
import ContactBanner from "@/sections/contactBanner/ContactBanner";
import SectionWrapperNew from '@/components/SectionWrapperNew';
import OutlinedButtonWithArrow from "@/components/ui/buttons/OutlinedButtonWithArrow";
import newsData from "@/data/newsData";
import Link from "next/link";
import Image from 'next/image';
import { useRouter } from 'next/navigation'




const Page = () => {
    const router = useRouter()
    const [updatedNews, setUpdatedNews] = useState(newsData);
    const [year, setYear] = useState('');
    const [month, setMonth] = useState('');


    const onChange = (event, type) => {
        const value = event.target.value;
        { type == 'year' && setYear(value) }
        { type == 'month' && setMonth(value) }


    };

    useEffect(() => {
        filterData();
    }, [year, month])

    function handleReset() {
        setUpdatedNews(newsData);
        setYear('');
        setMonth('');
    }


    function filterData() {
        if (year != '') {
            const data = newsData.filter((item) => item.year == year);
            console.log(data,"datadatadata")
            setUpdatedNews(data);
        }

        if (month != '') {
            const data = newsData.filter((item) => item.year == year && item.month == month);
            setUpdatedNews(data);
        }
    }

    return (
        <>
            <ContactBanner title={`Newsroom`} desc={`We enable global businesses to Automate
                Cloud & Transform for a sustainable and
                inclusive future.
                `} height={'60vh'} />

            <div className="bg-white py-16 rounded-3xl sm:py-32 px-10 md:-mt-[36px]" style={{ borderBottom: '1px solid #d3d3d3', borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }}>
                <div className="md:container mx-auto">
                    <h6 className="date text-[#808080] text-[20px] font-medium mb-10">18 October, 2024</h6>
                    <h2 className="title text-[42px] max-w-[70%] leading-[50px] font-semibold mb-10">Leading global lifestyle distribution company successfully implements .net based dealer management system</h2>
                    <button type="button" className="py-2.5 px-7  mb-2 text-sm font-medium text-[#808080] focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 ">Read Blog</button>
                </div>
            </div>

            <SectionWrapperNew
                sectionHeading="More News & Announcements"
                sectionDesc=""
                sectionTextColor='#000'
                sectionHeadingLayout="left"
                style={{ marginTop: 0 }}
            >
                <div className="mb-6">
                    <form className="w-full grid grid-cols-4 gap-4">
                        <select id="large" value={year} onChange={(e) => onChange(e, 'year')} className="block w-full px-4 py-3 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 ">
                            <option value='' selected>Select Year</option>
                            <option value="2022">2022</option>
                            <option value="2023">2023</option>
                            <option value="2024">2024</option>

                        </select>
                        <select id="large" value={month} onChange={(e) => onChange(e, 'month')} className="block w-full px-4 py-3 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 ">
                            <option value='' selected>Select Month</option>
                            <option value="JAN">JAN</option>
                            <option value="FEB">FEB</option>
                            <option value="MAR">MAR</option>

                        </select>
                        <div className="">
                            <button onClick={() => handleReset()} type="button" className="px-5 py-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-xl border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700">reset</button>
                        </div>
                    </form>
                </div>
                {updatedNews?.map(item => (
                    <>
                        <div className="cards py-10" style={{ borderBottom: '1px solid #d3d3d3' }}>
                            <div className="grid grid-cols-3 gap-4">
                                <div className="">
                                    <Image src={item.imageUrl} height={300} width={300}></Image>
                                </div>

                                <div className="col-span-2">
                                    <h6 className="date text-[#808080] text-[16px] font-medium mb-10">{item.date} {item.month}, {item.year}</h6>
                                    <h2 className="title text-[20px]  leading-[28px] font-semibold mb-10">{item.title}</h2>
                                    <Link href={item.readMoreUrl} target='_blank' type="button" className="py-2.5 px-7  mb-2 text-sm font-medium text-[#808080] focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100">Read Blog</Link>
                                </div>
                            </div>
                        </div>
                    </>
                ))}
                  {updatedNews.length==0 && (<h2 className="text-[28px] font-semibold"> No Data Found</h2>)}
            </SectionWrapperNew>

        </>
    );
};

export default Page;
