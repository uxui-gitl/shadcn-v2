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
                 <div className="cards py-5" style={{ borderBottom: '1px solid #E4E4E4'}}>
                            <div className="flex flex-col md:flex-row items-center">
                                <div className="mb-4 sm:mb-0 sm:mr-10">
                                    <Image src={item.imageUrl} height={200} width={200} ></Image>
                                </div>

                                <div className="text-center sm:text-left">
                                    <h6 className="date text-[#1D162B] text-heading-05 mb-4">{item.date} {item.month}, {item.year}</h6>
                                    <h2 className="title text-heading-04 font-bold mb-7 max-w-[700px]">{item.title}</h2>
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
