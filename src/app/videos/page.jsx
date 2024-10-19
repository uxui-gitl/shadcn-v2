"use client";
import React, { useState, useEffect } from "react";
import ContactBanner from "@/sections/contactBanner/ContactBanner";
import SectionWrapperNew from '@/components/SectionWrapperNew';
import OutlinedButtonWithArrow from "@/components/ui/buttons/OutlinedButtonWithArrow";
import caseStudiesData from "@/data/caseStudiesData";
import { useRouter } from 'next/navigation';
import Dialog from "@/components/Dialog";


const page = () => {
    const router = useRouter();
    const [showModal2, setshowModal1] = useState(false);

    const [updatedCaseStudiesData, setUpdatedCaseStudiesData] = useState(caseStudiesData);
    const [mainCategory, setMainCategory] = useState('');


    const onChange = (event, type) => {
        const value = event.target.value;
        { type == 'mainCategory' && setMainCategory(value) }

    };

    useEffect(() => {
        filterData();
    }, [mainCategory])

    function handleReset(){
        setUpdatedCaseStudiesData(caseStudiesData);
        setMainCategory('');
  
    }


    function filterData() {
        if (mainCategory != '') {
            const data = caseStudiesData.filter((item) => item.mainCategory === mainCategory);
            setUpdatedCaseStudiesData(data);
        }
    }

    function handleBusinessCardClick(modal) {
        setshowModal1(modal);
      }




    return (
        <>
            <ContactBanner title={`Our Journey with our customers`} desc={``} height={'60vh'} />

            <SectionWrapperNew
                sectionHeading="Hey, Great to see you here"
                sectionDesc="The Inspiring Journey Of Godrej Infotech"
                sectionTextColor='#000'
                sectionHeadingLayout="center"
            >
                <div className="">
                    <form class="w-full grid grid-cols-4 gap-4">
                        <select id="large" value={mainCategory} onChange={(e) => onChange(e, 'mainCategory')} class="block w-full px-4 py-3 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 ">
                            <option value='' selected>Select Category</option>
                            <option value="Automation">Automation</option>
                            <option value="Cloud">Cloud</option>
                            <option value="Transformation">Transformation</option>

                        </select>
       
                        <div className="">
                            <button onClick={() => handleReset()} type="button" class="px-5 py-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-xl border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700">reset</button>
                        </div>
                    </form>
                </div>

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
                                        <OutlinedButtonWithArrow size={48} arrowColor={'#000'} onClick={() => handleBusinessCardClick(true)} />
                                    </div>
                                </div>
                            </div>
                        </>
                    ))}

                    {updatedCaseStudiesData.length==0 && (<h2 className="text-[28px] font-semibold"> No Data Found</h2>)}

                    {/* card */}
                </div>
            </SectionWrapperNew>

            
      {/* modal */}
      <Dialog
        shouldShow={showModal2}
        onRequestClose={() => {
          setshowModal1((prev) => !prev);
        }}
        title={"video"}
      >
        <div className="py-10 mx-auto text-center">
        <iframe width="560" height="415" style={{margin:'0 auto'}} src="https://www.youtube.com/embed/T-VEzb3WgJY?si=10lNjjAPIVBstnvC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </Dialog>
      {/* end modal */}

        </>
    );
};




export default page;
