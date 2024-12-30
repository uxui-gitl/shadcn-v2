'use client';
import React, { useState, useEffect } from "react";
import Image from 'next/image';
import SectionWrapperNew from '@/components/SectionWrapperNew';
import { useRouter } from 'next/navigation';
import url from "@/data/url";
import { useParams } from 'next/navigation';
import axios from 'axios';


function Page() {
    const { id } = useParams();
    const params = JSON.stringify({
        "SRNO": id,
        });
    const router = useRouter();
    const [jobDetail, setJobDetail] = useState([]);
    
    useEffect(() => {
        getJobDetail();
    }, [id]);

    async function getJobDetail() {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            params: {
                'SRNO':id
            }
        }
        try {
            let response = await axios.get(`${url.vacancyUrl}/GetGILVacancyDetails`,config);
            let data = response.data.model;
            console.log(data, "data")
            setJobDetail(data)

        } catch (error) {
            console.log(error);
            // res.status(error.response.status).json({ message: error.message });
        }
    }

    return (
        
        <>
            <div className="navbar2 " style={{ borderBottom: '1px solid #E4E4E4' }}>
                <div className="mx-auto container flex justify-between my-3">
                    <Image src="/godrejLogoNew.svg" width={90} height={70} alt="logo" />
                    <button className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-10 py-1 text-center  mb-2" onClick={() => router.back()}>Back to Vacancies</button>
                </div>
            </div>

            <SectionWrapperNew
                sectionHeading=""
                sectionDesc=""
                sectionTextColor='#000'
                sectionHeadingLayout="left">
                <div className="next">
                        <>
                            <div className="grid grid-cols-4 gap-5">
                                <div className="">
                                    <div className="" style={{borderBottom:'1px solid #d3d3d3'}}>
                                    <h2 className="text-heading-03 font-semibold mb-6">Job Summary</h2>
                                    <div className="mb-3">
                                        <h6 className="title">Company Name :</h6>
                                        <p className="text-[18px] font-semibold">{jobDetail[0]?.companyCode}</p>
                                    </div>
                                    <div className="mb-3">
                                        <h6 className="title">Business:</h6>
                                        <p className="text-[18px] font-semibold">{jobDetail[0]?.aboutBusiness}</p>
                                    </div>
                                    <div className="mb-3">
                                        <h6 className="title">Function:</h6>
                                        <p className="text-[18px] font-semibold">{jobDetail[0]?.functionsdesc}</p>
                                    </div>
                                    <div className="mb-3">
                                        <h6 className="title">Designation:</h6>
                                        <p className="text-[18px] font-semibold">{jobDetail[0]?.designation}</p>
                                    </div>
                                    <div className="mb-3">
                                        <h6 className="title">Location:</h6>
                                        <p className="text-[18px] font-semibold">{jobDetail[0]?.location}</p>
                                    </div>
                                    </div>
                                </div>
                                <div className="col-span-3">
                                    <div className=""style={{borderBottom:'1px solid #d3d3d3'}}>
                                        <h2 className="title text-heading-03 font-semibold mb-6">About the Business & Position Overview</h2>
                                       <p className="text-heading-04 leading-[40px] font-medium mb-6">{'Job Profile'}</p>
                                            <ul className="space-y-1 text-black list-disc list-outside mb-6">
                                            <li>{jobDetail[0]?.jobprof}</li>
                                        </ul>
                                    </div>
                                    {/* business case */}
                                    <div className="py-4" style={{borderBottom:'1px solid #d3d3d3'}}>
                                        <h2 className="title text-[28px] font-semibold mb-4">Business Case</h2>
                                       <p className="text-[16px] leading-[40px] font-medium mb-3">{'cription'}</p>
                                            <ul className="space-y-1 text-black list-disc list-outside mb-3">
                                           <li>{'alns'}</li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                        </>
                </div>
            </SectionWrapperNew>
        </>
    )
}

export default Page;