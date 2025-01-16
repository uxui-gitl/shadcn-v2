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
                'SRNO': id
            }
        }
        try {
            let response = await axios.get(`${url.vacancyUrl}/GetGILVacancyDetails`, config);
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
                        <div className="grid grid-cols-1 sm:grid-cols-4 gap-5">
                            <div className="">
                                <div className="" style={{ borderBottom: '1px solid #d3d3d3' }}>
                                    <h2 className="text-heading-03 font-semibold mb-6">Job Summary</h2>
                                    <div className="mb-3">
                                        <h6 className="title">Company Name :</h6>
                                        <p className="text-heading-04 font-semibold">{jobDetail[0]?.companyCode}</p>
                                    </div>
                                    {/* <div className="mb-3">
                                        <h6 className="title">Business:</h6>
                                        <p className="text-heading-04 font-semibold">{jobDetail[0]?.aboutBusiness}</p>
                                    </div> */}
                                    <div className="mb-3">
                                        <h6 className="title">Function:</h6>
                                        <p className="text-heading-04 font-semibold">{jobDetail[0]?.functionsdesc}</p>
                                    </div>
                                    <div className="mb-3">
                                        <h6 className="title">Designation:</h6>
                                        <p className="text-heading-04 font-semibold">{jobDetail[0]?.designation}</p>
                                    </div>
                                    <div className="mb-3">
                                        <h6 className="title">Location:</h6>
                                        <p className="text-heading-04 font-semibold">{jobDetail[0]?.location}</p>
                                    </div>
                                    <div class="relative group  pb-3">
                                        <a class="text-heading-05 font-bold active:font-bold hover:text-primary-400
                                                   text-primary-400 text-center w-full no-underline sm:w-auto sm:pr-4 py-2 sm:py-1" >
                                            Apply Now
                                        </a>

                                        <div class="absolute z-10 hidden bg-grey-200 group-hover:block w-[100%]">
                                            <div class="px-2 pt-2 pb-4 bg-white shadow-lg">
                                                <div class="dropdown-menu">
                                                    <ul>
                                                        <li><a href="https://esp.godrejenterprises.com/NewAuth.asp?companyCode=GIL" target="_blank" class=" dropdown-item hover:text-primary-400">Create Resume </a></li>
                                                        <li><a href="https://esp.godrejenterprises.com/Auth1.asp?companyCode=GIL" target="_blank" class=" dropdown-item hover:text-primary-400">Update Resume </a></li>
                                                        <li><a href="https://esp.godrejenterprises.com/Auth1.asp?companyCode=GIL&Link=27467&onlyPreview=onlyPreview" target="_blank" class=" dropdown-item hover:text-primary-400">Link Resume </a></li>
                                                        </ul>
                                                        </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="pb-4">
                                    <a href={`https://esp.godrejenterprises.com/contact.asp?companyCode=GIL&srNo=${id}`} class="text-heading-05 font-bold active:font-bold hover:text-primary-400
                                                   text-primary-400 text-center w-full no-underline sm:w-auto sm:pr-4 py-2 sm:py-1" >
                                            Interested but in a hurry?
                                            Drop in your details.
                                        </a>
                                        </div>
                                    </div>

                                   

                                </div>
                                <div className="col-span-3">
                                  {jobDetail[0]?.jobprof && (<div className="pb-4" style={{ borderBottom: '1px solid #d3d3d3' }}>
                                        <h2 className="title text-heading-03 font-semibold mb-6">About the Business & Position Overview</h2>
                                        <h2 className="title text-heading-04 font-semibold mb-4">Job Description</h2>
                                        <p>{jobDetail[0]?.jobprof}</p>
                                    </div>)}  
                                    {/* key Responsibilities */}
                                    {jobDetail[0]?.desiredProf && (<div className="py-4" style={{ borderBottom: '1px solid #d3d3d3' }}>
                                        <h2 className="title text-heading-04 font-semibold mb-4">Key Responsibilities</h2>
                                        <p>{jobDetail[0]?.desiredProf}</p>
                                    </div>)}

                                    {/* Qualification */}
                                    <div className="py-4" style={{ borderBottom: '1px solid #d3d3d3' }}>
                                        <h2 className="title text-heading-04 font-semibold mb-4">Qualification Details</h2>
                                        {jobDetail[0]?.qualEss && (<p>Essential Qualification : {jobDetail[0]?.qualEss}</p>)}
                                        {jobDetail[0]?.qualPref && (<p>Preferred Qualification : {jobDetail[0]?.qualPref}</p>)}
                                    </div>
                                    {/* experience  */}
                                  {jobDetail[0]?.minExp && ( <div className="py-4" style={{ borderBottom: '1px solid #d3d3d3' }}>
                                        <h2 className="title text-heading-04 font-semibold mb-4">Experience Details</h2>
                                        <div>Experience Details Qualification : <p dangerouslySetInnerHTML={{ __html: jobDetail[0]?.minExp }}></p></div>
                                    </div>)} 
                                    {/* skills  */}
                                    {jobDetail[0]?.specialSkills && (<div className="py-4" style={{ borderBottom: '1px solid #d3d3d3' }}>
                                        <h2 className="title text-heading-04 font-semibold mb-4">Special Skill</h2>
                                        <p dangerouslySetInnerHTML={{ __html: jobDetail[0]?.specialSkills }}></p>
                                    </div>)}
                                </div>

                            </div>
                        </>
                    </div>
            </SectionWrapperNew>
        </>
    )
}

export default Page;