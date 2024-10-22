"use client";
import React, { useEffect, useState } from "react";
import { useParams } from 'next/navigation'
import ContactBanner from "@/sections/contactBanner/ContactBanner";
import SectionWrapperNew from '@/components/SectionWrapperNew';
import Image from "next/image";
import caseStudiesData from "@/data/caseStudiesData";


const page = () => {
    const { id } = useParams();
    console.log("id", id)
    const [caseData, setCaseData] = useState([]);
    useEffect(() => {
        const data = caseStudiesData.filter((item) => item.id == id);
        setCaseData(data);
        console.log(data, "databjh")
    }, []);


    console.log(caseData, 'outer');

    return (
        <>
            <ContactBanner title={`blog detail`} desc={``} height={'60vh'} />
            <SectionWrapperNew
                sectionHeading=""
                sectionDesc=""
                sectionTextColor='#000'
                sectionHeadingLayout="left">

                <div className="next">
                    {caseData?.map((item) => (
                        <>
                            <p className="text-[20px] font-medium text-[#808080] mb-6">18 October, 2024</p>
                            {item.title && <h2 className="max-w-[80%] mb-16 text-[42px] leading-[50px] font-semibold text-[#1D162B]">{item.title}</h2>}
                            <div className="grid grid-cols-4 gap-5">
                                <div className="">
                                    <h2 className="text-[28px] font-semibold mb-6">Highlights</h2>
                                    <div className="mb-3">
                                        <h6 className="title">Industry</h6>
                                        <p className="text-[18px] font-semibold">{item.highlights.industry}</p>
                                    </div>
                                    <div className="mb-3">
                                        <h6 className="title">Project Location</h6>
                                        <p className="text-[18px] font-semibold">{item.highlights.projectLocation}</p>
                                    </div>
                                    <div className="mb-3">
                                        <h6 className="title">Engagement Since</h6>
                                        <p className="text-[18px] font-semibold">{item.highlights.engagementSince}</p>
                                    </div>
                                </div>
                                <div className="col-span-3">
                                    <div className=""style={{borderBottom:'1px solid #d3d3d3'}}>
                                        <h2 className="title text-[28px] font-semibold mb-6">Client Brief</h2>
                                       {item?.customerBrief?.description && (<p className="text-[32px] leading-[40px] font-medium mb-6">{item?.customerBrief?.description}</p>)} 
                                        {item?.customerBrief?.BriefList&& (
                                            <ul class="space-y-1 text-black list-disc list-outside mb-6">
                                            {item?.customerBrief?.BriefList.map((item) => (<li>{item}</li>))}
                                        </ul>
                                        )}
                                    </div>
                                    {/* business case */}

                                    <div className="py-4" style={{borderBottom:'1px solid #d3d3d3'}}>
                                        <h2 className="title text-[28px] font-semibold mb-4">Business Case</h2>
                                       {item?.businessCase?.description && (<p className="text-[16px] leading-[40px] font-medium mb-3">{item?.businessCase?.description}</p>)} 
                                        {item?.businessCase?.businesscaseList&& (
                                            <ul class="space-y-1 text-black list-disc list-outside mb-3">
                                            {item?.businessCase?.businesscaseList?.map((item) => (<li>{item}</li>))}
                                        </ul>
                                        )}
                                    </div>
                                    {/* business solution */}
                                    <div className="py-4" style={{borderBottom:'1px solid #d3d3d3'}}>
                                        <h2 className="title text-[28px] font-semibold mb-4">Challenges</h2>
                                       {item?.challenges?.description && (<p className="text-[16px] leading-[40px] font-medium mb-3">{item?.challenges?.description}</p>)} 
                                        {item?.challenges?.keyChallenges && (
                                            <ul class="space-y-1 text-black list-disc list-outside mb-3">
                                            {item?.challenges?.keyChallenges?.map((item) => (<li>{item}</li>))}
                                        </ul>
                                        )}
                                    </div>
                                    {/* business Challenges */}

                                    <div className="py-4" style={{borderBottom:'1px solid #d3d3d3'}}>
                                        <h2 className="title text-[28px] font-semibold mb-4">Business Solution</h2>
                                       {item?.solution?.description && (<p className="text-[16px] leading-[40px] font-medium mb-3">{item?.solution?.description}</p>)} 
                                        {item?.solution?.features&& (
                                            <ul class="space-y-1 text-black list-disc list-outside mb-3">
                                            {item?.solution?.features?.map((item) => (<li>{item}</li>))}
                                        </ul>
                                        )}
                                    </div>

                                    {/*  benefits*/}
                                    <div className="py-4" style={{borderBottom:'1px solid #d3d3d3'}}>
                                        <h2 className="title text-[28px] font-semibold mb-4">Benefits</h2>
                                       {item?.benefits?.description && (<p className="text-[16px] leading-[40px] font-medium mb-3">{item?.benefits?.description}</p>)} 
                                        {item?.benefits?.list&& (
                                            <ul class=" space-y-1 text-black list-disc list-outside mb-3">
                                            {item?.benefits?.list?.map((item) => (<li>{item}</li>))}
                                        </ul>
                                        )}
                                    </div>
                                </div>

                            </div>
                        </>
                    ))}
                </div>
            </SectionWrapperNew>

            <SectionWrapperNew
                sectionHeading="Latest Blogs"
                sectionDesc=""
                sectionTextColor='#fff'
                sectionHeadingLayout="horizontal"
                style={{ backgroundColor: '#1D162B', }}
            >
                {[1,2,3].map(item => (
                    <>
                 <div className="cards py-10" style={{borderBottom:'1px solid #d3d3d3'}}>
                    <div class="grid grid-cols-3 gap-4">
                        <div className="">
                            <Image src="/caseStudies/blog.svg" height={300} width={300}></Image>
                        </div>
                        
                        <div className="col-span-2">
                            <h6 className="date text-white text-[16px] font-medium mb-10">18 October, 2024</h6>
                            <h2 className="title text-[20px] text-white leading-[28px] font-semibold mb-10">Leading global lifestyle distribution company successfully implements .net based dealer management system</h2>
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
