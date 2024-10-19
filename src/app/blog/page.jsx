"use client";
import React, { useState, useEffect } from "react";
import ContactBanner from "@/sections/contactBanner/ContactBanner";
import SectionWrapperNew from '@/components/SectionWrapperNew';
import OutlinedButtonWithArrow from "@/components/ui/buttons/OutlinedButtonWithArrow";
import caseStudiesData from "@/data/caseStudiesData";
import { useRouter } from 'next/navigation'
import Image from 'next/image';




const page = () => {
    const router = useRouter()
    const [updatedCaseStudiesData, setUpdatedCaseStudiesData] = useState(caseStudiesData);

    return (
        <>
            <ContactBanner title={`Our Journey with our customers`} desc={``} height={'60vh'} />

            <div className="bg-white py-16 rounded-3xl sm:py-32 px-10 md:-mt-[36px]">
                <div className="md:container mx-auto">
                    <h6 className="date text-[#808080] text-[20px] font-medium mb-10">18 October, 2024</h6>
                    <h2 className="title text-[42px] max-w-[70%] leading-[50px] font-semibold mb-10">Leading global lifestyle distribution company successfully implements .net based dealer management system</h2>
                    <button type="button" class="py-2.5 px-7  mb-2 text-sm font-medium text-[#808080] focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 ">Read Blog</button>
                </div>
            </div>
            <SectionWrapperNew
                sectionHeading=""
                sectionDesc=""
                sectionTextColor='#000'
                sectionHeadingLayout="center"
                style={{ backgroundColor: 'black', zIndex: '-10', position: 'relative' }}
            >

                <div className="grid grid-cols-3 gap-4 my-10">
                    {updatedCaseStudiesData.map((item) => (
                        <>
                            <div class="max-w-sm bg-white border border-[#E4E4E4] rounded-3xl shadow">
                                <div className="h-[250px]" style={{
                                    backgroundImage: `url("/caseStudies/case-studies-bg1.svg")`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                }}>
                                </div>
                                <div className="p-6">
                                    <div className="mb-6 flex flex-wrap">
                                        <span class="mb-2 bg-[#E4E4E4] text-gray-800 text-sm font-medium me-2 px-4 py-2 rounded-full">{item.mainCategory}</span>
                                        <span class="mb-2 bg-[#E4E4E4] text-gray-800 text-sm font-medium me-2 px-4 py-2 rounded-full">{item.subCategory}</span>
                                        <span class="mb-2 bg-[#E4E4E4] text-gray-800 text-sm font-medium me-2 px-4 py-2 rounded-full">{item.vertical}</span>
                                    </div>
                                    <h5 class="mb-2 font-bold tracking-tight text-['#1D162B] text-[18px] leading-[28px]">{item.title}</h5>
                                    <div className="flex justify-end">
                                        <OutlinedButtonWithArrow size={48} arrowColor={'#000'} onClick={() => router.push(`/case-studies/${item.id}`)} />
                                    </div>
                                </div>
                            </div>
                        </>
                    ))}

                    {updatedCaseStudiesData.length == 0 && (<h2 className="text-[28px] font-semibold"> No Data Found</h2>)}
                    {/* card */}
                </div>
            </SectionWrapperNew>

            {/* more update */}

            <SectionWrapperNew
                sectionHeading="More Updates"
                sectionDesc=""
                sectionTextColor='#000'
                sectionHeadingLayout="left"
                style={{ backgroundColor: 'white', }}
            >
                {[1,2,3,4,5].map(item => (
                    <>
                 <div className="cards py-10" style={{borderBottom:'1px solid #d3d3d3'}}>
                    <div class="grid grid-cols-3 gap-4">
                        <div className="">
                            <Image src="/caseStudies/blog.svg" height={300} width={300}></Image>
                        </div>

                        <div className="col-span-2">
                            <h6 className="date text-[#808080] text-[16px] font-medium mb-10">18 October, 2024</h6>
                            <h2 className="title text-[20px]  leading-[28px] font-semibold mb-10">Leading global lifestyle distribution company successfully implements .net based dealer management system</h2>
                            <button type="button" class="py-2.5 px-7  mb-2 text-sm font-medium text-[#808080] focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100"  onClick={() => router.push(`/blog/${item}`)}>Read Blog</button>
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
