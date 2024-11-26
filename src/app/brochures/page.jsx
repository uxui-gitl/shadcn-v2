"use client";
import React, { useState, useEffect } from "react";
import ContactBanner from "@/sections/contactBanner/ContactBanner";
import SectionWrapperNew from '@/components/SectionWrapperNew';
import Image from 'next/image';
import OutlinedButtonWithArrow from "@/components/ui/buttons/OutlinedButtonWithArrow";
import brochuresData from "@/data/brochures";
import Link from 'next/link';
import { useRouter } from 'next/navigation'

const Page = () => {
    const router = useRouter();
    const [updatedCaseStudiesData, setUpdatedCaseStudiesData] = useState(brochuresData);
    const [subCategory, setSubCategory] = useState('');

    const onChange = (event, type) => {
        const value = event.target.value;
        { type == 'subCategory' && setSubCategory(value) }
    };

    useEffect(() => {
        filterData();
    }, [subCategory])

    function handleReset(){
        setUpdatedCaseStudiesData(brochuresData);
        setSubCategory('');
    }

    function filterData() {
        if (subCategory != '') {
            const data = brochuresData.filter((item) => item.subCategory === subCategory);
            setUpdatedCaseStudiesData(data);
        }
    }


    return (
        <>
            <ContactBanner title={`Our Journey with our customers`} desc={``} height={'60vh'} />

            <SectionWrapperNew
                sectionHeading="Brochures"
                sectionDesc="The Inspiring Journey Of Godrej Infotech"
                sectionTextColor='#000'
                sectionHeadingLayout="center"
            >
                <div className="">
                    <form className="w-full flex flex-col sm:flex-row justify-end space-between">
                        <select id="large" value={subCategory} onChange={(e) => onChange(e, 'subCategory')} className="block mb-2 sm:mb-0 px-4 py-3 mr-3 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 ">
                            <option value='' selected>Select Category</option>
                            <option value="Microsoft Dynamics">Microsoft Dynamics</option>
                            <option value="Common">Common</option>
                            <option value="Infor">Infor</option>
                            <option value="LS Retail">LS Retail</option>
                        </select>
                            <button onClick={() => handleReset()} type="button" className="px-5 py-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-xl border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700">reset</button>
                    </form>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 my-5">
                    {updatedCaseStudiesData.map((item, index) => (
                        <>
                            <div className="max-w-md bg-white border border-[#E4E4E4] shadow rounded-3xl" key={index}>
                                <div className="h-[250px] rounded-tl-3xl rounded-tr-3xl " style={{
                                    backgroundImage: `url("/caseStudies/case-studies-bg1.svg")`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                }}>
                                </div>
                                <div className="p-4">
                                    <div className="mb-2 flex flex-wrap">
                                    {item.mainCategory && (<span className="mb-2 bg-[#E4E4E4] text-helper-02 me-2 px-4 py-2 rounded-full">{item.mainCategory}</span>)}
                                        {item.subCategory && (<span className="mb-2 bg-[#E4E4E4] text-helper-02 me-2 px-4 py-2 rounded-full">{item.subCategory}</span>)}
                                       {item.vertical && (<span className="mb-2 bg-[#E4E4E4] text-helper-02 me-2 px-4 py-2 rounded-full">{item.vertical}</span>)} 
                                    </div>
                                    <h5 className="mb-2 text-['#1D162B] paragraph-01">{item.title}</h5>
                                    <div className="flex justify-end">
                                        {/* <Image src="/caseStudies/downloadicon.svg" width={48} height={48}></Image> */}
                                        <Link type="button" href={item?.downloadCTA} className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100" target="_blank">Download</Link>
                                        {/* <OutlinedButtonWithArrow size={48} arrowColor={'#000'}onClick={() => router.push(`/case-studies/${item.id}`)} /> */}
                                    </div>
                                </div>
                            </div>
                        </>
                    ))}

                    {updatedCaseStudiesData.length==0 && (<h2 className="text-[28px] font-semibold"> No Data Found</h2>)}

                    {/* card */}
                </div>
            </SectionWrapperNew>

        </>
    );
};

export default Page;
