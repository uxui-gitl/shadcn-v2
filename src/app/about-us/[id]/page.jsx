"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useParams } from 'next/navigation';
import {CSUITE_DATA} from '../data'

const Page = () => {
    const { id } = useParams();
    const [profileData, setProfileData] =  useState([]);
    
    
    const filterData = () => {
        const data = CSUITE_DATA.filter((item) => item.id == id);
        console.log(data,"data");
        setProfileData(data);
    }

    useEffect(() => {
        filterData();
    }, [id]);

    return (
        <>
         <div className="">
                <div className="container flex flex-col md:flex-row items-center md:items-start p-2">
                    {/* Left Side: Image */}
                    <div className=" w-full md:w-1/3 mb-6 rounded-3xl md:mb-0 flex justify-left">
                        <Image
                            src={profileData[0]?.bgImageUrl} // Using dynamic image URL
                            alt="CEO"
                            width={400}  // Set width for Image
                            height={200}  // Set height for Image
                            className="object-cover  "
                        />
                    </div>

                    {/* Right Side: Profile Info */}
                    <div className="ceo-info w-full md:w-2/3 pl-0 md:pl-8">
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                            {profileData[0]?.name}
                        </h1>

                        {/* CEO Designation */}
                        <h2 className="text-xl font-semibold text-primary-600 mb-4">
                            {profileData[0]?.designation}
                        </h2>

                        {/* Short Description */}
                        <p className="text-body-01 text-gray-700 mb-6">
                            {profileData[0]?.shortDesc}
                        </p>

                        {/* Long Paragraph */}
                        <p className="text-body-01 text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{
                            __html: profileData[0]?.longDesc || "",
                        }}>
                        </p>
                    </div>
                </div>
            </div>


    
        </>
    )
}

export default Page;