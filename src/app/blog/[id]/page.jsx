"use client";
import React, { useEffect, useState } from "react";
import { useParams } from 'next/navigation';
import ContactBanner from "@/sections/contactBanner/ContactBanner";
import SectionWrapperNew from '@/components/SectionWrapperNew';
import Image from "next/image";
import axios from "axios";
import { useRouter } from 'next/navigation';
import url from "@/data/url";

const Page = () => {
    const { id } = useParams();
    const router = useRouter();

    const [blogDetail, setBlogDetail] = useState([]);
    const [topBlogList, setTopBlogList] = useState([]);

    useEffect(() => {
        getBlogDetail();
        getBlogList();
    }, [id]);

    async function getBlogDetail() {
        try {
            let response = await axios.post(`${url.blogApiUrl}/BlogDetails/GetBlogDetails`, { id: id });
            let data = response.data.model;
            setBlogDetail(data)

        } catch (error) {
            console.log(error);
            // res.status(error.response.status).json({ message: error.message });
        }
    }

    async function getBlogList() {
        try {
            let response = await axios.post(`${url.blogApiUrl}/BlogDetails/BlogList`);
            let data = response?.data?.model;
            let topdataList = data.slice(0, 3);
            setTopBlogList(topdataList);
        } catch (error) {
            console.log(error);
            // error.status(error.response.status).json({ message: error.message });
        }
    }

    return (
        <>
            <ContactBanner title={`blog detail`} desc={``} height={'60vh'} />
            <div className="bg-white py-16 rounded-3xl sm:py-32 px-10 md:-mt-[36px]">
                <div className="md:container mx-auto">
                    <h6 className="date text-[#808080] text-[20px] font-medium mb-10">{blogDetail?.postedOnVar}</h6>
                    <h2 className="title text-[42px] max-w-[70%] leading-[50px] font-semibold">{blogDetail?.name}</h2>
                </div>
            </div>

            <SectionWrapperNew
                sectionHeading=""
                sectionDesc=""
                sectionTextColor='#000'
                sectionHeadingLayout="left">
                <div>
                    <div className="grid grid-cols-4 gap-4">
                        <div className="">
                            <figcaption className="flex items-center justify-center ">
                                <img className="rounded-full w-20 h-20" src={`${url.blogImageUrl}/${blogDetail?.authorImage}`} alt="profile picture" />
                                <div className="space-y-0.5 font-medium text-black text-left rtl:text-right ms-3">
                                <div className="title text-[18px] font-semibold">{blogDetail?.author}</div>
                                <div className="title text-[14px] text-[#808080] font-semibold mb-2">{blogDetail?.authorDesignation}</div>
                                <div className="title text-[14px] text-[#808080] font-semibold">{blogDetail?.postedOnVar}</div>
                                </div>
                            </figcaption>
                        </div>
                        <div className="col-span-3">
                            <div dangerouslySetInnerHTML={{ __html: blogDetail?.description }}></div>
                        </div>
                    </div>
                </div>
            </SectionWrapperNew>

            <SectionWrapperNew
                sectionHeading=""
                sectionDesc=""
                sectionTextColor='#000'
                sectionHeadingLayout="left"
                style={{ backgroundColor: '#FAF7FF', }}>
            <div className="">
                <div className="grid grid-cols-4 gap-4">
                    <div className="">
                    </div>
                    <div className="col-span-3">
                        <figcaption className="flex">
                            <img className="rounded-full w-20 h-20 mr-4" src={`${url.blogImageUrl}/${blogDetail?.authorImage}`} alt="profile picture" />
                            <div className="space-y-0.5 font-medium text-black text-left rtl:text-right ms-3">
                              <div className="">
                                <div className="title text-[18px] font-semibold">{blogDetail?.author}</div>
                                <div className="title text-[16px] text-[#808080] font-semibold mb-6">{blogDetail?.authorDesignation}</div>
                                <div dangerouslySetInnerHTML={{ __html: blogDetail?.authorDescription }}></div>
                                </div>
                            </div>
                        </figcaption>
                    </div>
                </div>
            </div>
            </SectionWrapperNew>

            <SectionWrapperNew
                sectionHeading="Latest Blogs"
                sectionDesc=""
                sectionTextColor='#fff'
                sectionHeadingLayout="horizontal"
                style={{ backgroundColor: '#1D162B', }}
            >
                {topBlogList.map(item => (
                    <>
                        <div className="cards py-10" style={{ borderBottom: '1px solid #d3d3d3' }}>
                            <div className="grid grid-cols-3 gap-4">
                                <div className="m-h-[300px] w-[300px] rounded-3xl" style={{
                                    backgroundImage: `url(${url.blogImageUrl}/${item.bannerImage})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                }}>
                                </div>

                                <div className="col-span-2">
                                    <h6 className="date text-white text-[16px] font-medium mb-10">{item.postedOnVar}</h6>
                                    <h2 className="title text-[20px] text-white  leading-[28px] font-semibold mb-10">{item.name}</h2>
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
