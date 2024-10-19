"use client";
import React, { useState, useEffect } from "react";
import ContactBanner from "@/sections/contactBanner/ContactBanner";
import SectionWrapperNew from '@/components/SectionWrapperNew';
import OutlinedButtonWithArrow from "@/components/ui/buttons/OutlinedButtonWithArrow";
import Image from 'next/image';




const page = () => {

    return (
        <>
            <ContactBanner title={`Sucess Stories`} desc={`We enable global businesses to Automate
                Cloud & Transform for a sustainable and
                inclusive future.
                `} height={'60vh'} />

            <SectionWrapperNew
                sectionHeading=""
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
