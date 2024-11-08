"use client";
import React, { useState, useEffect } from "react";
import ContactBanner from "@/sections/contactBanner/ContactBanner";
import SectionWrapperNew from '@/components/SectionWrapperNew';
import OutlinedButtonWithArrow from "@/components/ui/buttons/OutlinedButtonWithArrow";
import storiesData from "@/data/storiesData";
import Image from 'next/image';
import Link from "next/link";





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
                {storiesData?.map(item => (
                    <>
                 <div className="cards py-10" style={{borderBottom:'1px solid #d3d3d3'}}>
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
               
            </SectionWrapperNew>

        </>
    );
};

export default page;
