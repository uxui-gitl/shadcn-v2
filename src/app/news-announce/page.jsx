"use client";
import React, { useState, useEffect } from "react";
import ContactBanner from "@/sections/contactBanner/ContactBanner";
import SectionWrapperNew from '@/components/SectionWrapperNew';
import OutlinedButtonWithArrow from "@/components/ui/buttons/OutlinedButtonWithArrow";
import caseStudiesData from "@/data/caseStudiesData";
import Image from 'next/image';
import { useRouter } from 'next/navigation'




const page = () => {
    const router = useRouter()
    const [updatedCaseStudiesData, setUpdatedCaseStudiesData] = useState(caseStudiesData);
    const [mainCategory, setMainCategory] = useState('');
    const [subCategory, setSubCategory] = useState('');


    const onChange = (event, type) => {
        const value = event.target.value;
        { type == 'mainCategory' && setMainCategory(value) }
        { type == 'subCategory' && setSubCategory(value) }


    };

    useEffect(() => {
        filterData();
    }, [mainCategory, subCategory])

    function handleReset() {
        setUpdatedCaseStudiesData(caseStudiesData);
        setMainCategory('');
        setSubCategory('');


    }


    function filterData() {
        if (mainCategory != '') {
            const data = caseStudiesData.filter((item) => item.mainCategory === mainCategory);
            setUpdatedCaseStudiesData(data);
        }

        if (subCategory != '') {
            const data = caseStudiesData.filter((item) => item.mainCategory === mainCategory && item.subCategory === subCategory);
            setUpdatedCaseStudiesData(data);
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
                    <button type="button" class="py-2.5 px-7  mb-2 text-sm font-medium text-[#808080] focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 ">Read Blog</button>
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
                    <form class="w-full grid grid-cols-4 gap-4">
                        <select id="large" value={mainCategory} onChange={(e) => onChange(e, 'mainCategory')} class="block w-full px-4 py-3 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 ">
                            <option value='' selected>Select Year</option>
                            <option value="Automation">Automation</option>
                            <option value="Cloud">Cloud</option>
                            <option value="Transformation">Transformation</option>

                        </select>
                        <select id="large" value={subCategory} onChange={(e) => onChange(e, 'subCategory')} class="block w-full px-4 py-3 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 ">
                            <option value='' selected>Select Month</option>
                            <option value="Infor">Infor</option>
                            <option value="IntelligentTechnologies">Intelligent Technologies</option>
                            <option value="Transformation">Transformation</option>

                        </select>
                        <div className="">
                            <button onClick={() => handleReset()} type="button" class="px-5 py-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-xl border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700">reset</button>
                        </div>
                    </form>
                </div>
                {[1, 2, 3, 4, 5].map(item => (
                    <>
                        <div className="cards py-10" style={{ borderBottom: '1px solid #d3d3d3' }}>
                            <div class="grid grid-cols-3 gap-4">
                                <div className="">
                                    <Image src="/caseStudies/blog.svg" height={300} width={300}></Image>
                                </div>

                                <div className="col-span-2">
                                    <h6 className="date text-[#808080] text-[16px] font-medium mb-10">18 October, 2024</h6>
                                    <h2 className="title text-[20px]  leading-[28px] font-semibold mb-10">Leading global lifestyle distribution company successfully implements .net based dealer management system</h2>
                                    <button type="button" class="py-2.5 px-7  mb-2 text-sm font-medium text-[#808080] focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100" onClick={() => router.push(`/blog/${item}`)}>Read Blog</button>
                                </div>
                            </div>
                        </div>
                    </>
                ))}

            </SectionWrapperNew>

        </>
    );
};

export default page;
