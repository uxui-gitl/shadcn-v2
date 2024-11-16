"use client";
import React, { useState, useEffect } from "react";
import ContactBanner from "@/sections/contactBanner/ContactBanner";
import SectionWrapperNew from '@/components/SectionWrapperNew';
import OutlinedButtonWithArrow from "@/components/ui/buttons/OutlinedButtonWithArrow";
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import axios from "axios";
import url from "@/data/url";

// const url = "https://mailer.godrejenterprises.com/GodrejinfotechAPI";

const Page = () => {
    const router = useRouter();
    const [topBlogList, setTopBlogList] = useState([]);
    const [moreBlogList, setMoreBlogList] = useState([])
    const [blogList, setblogList] = useState([]);

    useEffect(() => {
         getBlogList();
    }, []);

    
    function navigateToBlog(id){
        router.push(`/blog/${id}`);
    }

    async function getBlogList() {
        try {
            let response = await axios.post(`${url.blogApiUrl}/BlogDetails/BlogList`);
            let data = response?.data?.model;
            setblogList(data);
            let topdataList = data.slice(0, 3);
            setTopBlogList(topdataList);
            setMoreBlogList(data.slice(3, data.length-3));
        } catch (error) {
            console.log(error);
            // error.status(error.response.status).json({ message: error.message });
        }
    }


    return (
        <>
            <ContactBanner title={`Our Journey with our customers`} desc={``} height={'60vh'} />

            <div className="bg-white py-16 rounded-3xl sm:py-32 px-10 md:-mt-[36px]">
                <div className="md:container mx-auto">
                    <h6 className="date text-[#808080] text-[20px] font-medium mb-10">18 October, 2024</h6>
                    <h2 className="title text-[42px] max-w-[70%] leading-[50px] font-semibold mb-10">Leading global lifestyle distribution company successfully implements .net based dealer management system</h2>
                    <button type="button" className="py-2.5 px-7  mb-2 text-sm font-medium text-[#808080] focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 ">Read Blog</button>
                </div>
            </div>

            <SectionWrapperNew
                sectionHeading=""
                sectionDesc=""
                sectionTextColor='#000'
                sectionHeadingLayout="center"
                style={{ backgroundColor: 'black', position: 'relative' }}
            >

                <div className="grid grid-cols-3 gap-4 my-10">
                    {topBlogList.map((item) => (
                        <>
                            <div className="max-w-sm bg-white border border-[#E4E4E4] rounded-3xl shadow overflow-hidden">
                                <div className="h-[250px]" style={{
                                    backgroundImage: `url(${url.blogImageUrl}/${item.bannerImage})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                }}>
                                </div>
                                <div className="p-6">
                                    <div className="mb-6 flex flex-wrap">
                                        <span className="mb-2 bg-[#E4E4E4] text-gray-800 text-sm font-medium me-2 px-4 py-2 rounded-full">{item.categoryCode}</span>

                                    </div>
                                    <h5 className="mb-2 font-bold tracking-tight text-['#1D162B] text-[18px] leading-[28px]">{item.name}</h5>
                                    <div className="flex justify-end">
                                        <OutlinedButtonWithArrow size={48} arrowColor={'#000'} onClick={() => navigateToBlog(item.blogId)} />
                                    </div>
                                </div>
                            </div>
                        </>
                    ))}

                    {blogList?.length == 0 && (<h2 className="text-[28px] font-semibold"> No Data Found</h2>)}
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
                {moreBlogList.map(item => (
                    <>
                        <div className="cards py-10" style={{ borderBottom: '1px solid #d3d3d3' }}>
                            <div className="grid grid-cols-3 gap-4">
                                {item.bannerImage ? (<div className="m-h-[300px] w-[300px] rounded-3xl" style={{
                                    backgroundImage: `url(${url.blogImageUrl}/${item.bannerImage})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                }}>
                                </div>) : (
                                    <div className="m-h-[300px] w-[300px] rounded-3xl" style={{
                                        backgroundImage: `url(/caseStudies/defaultBlogImage.jpg)`,
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                    }}>
                                    </div>
                                )}

                                <div className="col-span-2">
                                    <h6 className="date text-[#808080] text-[16px] font-medium mb-10">{item.postedOnVar}</h6>
                                    <h2 className="title text-[20px]  leading-[28px] font-semibold mb-10">{item.name}</h2>
                                    <button type="button" className="py-2.5 px-7  mb-2 text-sm font-medium text-[#808080] focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100" onClick={() => router.push(`/blog/${item.blogId}`)}>Read Blog</button>
                                </div>
                            </div>
                        </div>
                    </>
                ))}

            </SectionWrapperNew>

        </>
    );
};

export default Page;
