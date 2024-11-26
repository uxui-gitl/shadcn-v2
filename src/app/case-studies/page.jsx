"use client";
import React, { useState, useEffect } from "react";
import ContactBanner from "@/sections/contactBanner/ContactBanner";
import SectionWrapperNew from '@/components/SectionWrapperNew';
import OutlinedButtonWithArrow from "@/components/ui/buttons/OutlinedButtonWithArrow";
import transformationData from "@/data/case-transformation";
import automationData from "@/data/case-Automation";

import { useRouter } from 'next/navigation';


const Page = () => {
    const caseStudiesData = [...automationData , ...transformationData];
    const router = useRouter()
    const [updatedCaseStudiesData, setUpdatedCaseStudiesData] = useState(caseStudiesData);
    const [mainCategory, setMainCategory] = useState('');
    const [subCategory, setSubCategory] = useState('');
    const [vertical, setVertical] = useState('');

    const onChange = (event, type) => {
        const value = event.target.value;
        { type == 'mainCategory' && setMainCategory(value) }
        { type == 'subCategory' && setSubCategory(value) }
        { type == 'vertical' && setVertical(value) }
    };

    useEffect(() => {
        console.log(transformationData)
        filterData();
    }, [mainCategory, subCategory, vertical]);

    function handleReset(){
        setUpdatedCaseStudiesData(caseStudiesData);
        setMainCategory('');
        setSubCategory('');
        setVertical('');
    }


    function filterData() {
        if (mainCategory != '') {
            const data = caseStudiesData.filter((item) => item.mainCategory === mainCategory);
            setUpdatedCaseStudiesData(data);
        }

        if (subCategory != '') {
            const data = caseStudiesData.filter((item) => item.mainCategory === mainCategory && item.subCategory === subCategory);
            setUpdatedCaseStudiesData(data);
        }

        if (vertical != '') {
            const data = caseStudiesData.filter((item) => item.mainCategory === mainCategory && item.subCategory === subCategory && item.vertical === vertical);
            setUpdatedCaseStudiesData(data);
        }
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
                    <form className="flex flex-col sm:flex-row justify-end">
                        <select id="large" value={mainCategory} onChange={(e) => onChange(e, 'mainCategory')} className="block mb-2 sm:mb-0 sm:mr-2 px-4 py-3 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 ">
                            <option value='' selected>Select Category</option>
                            <option value="Automation">Automation</option>
                            <option value="Cloud">Cloud</option>
                            <option value="Transformation">Transformation</option>

                        </select>
                        <select id="large" value={subCategory} onChange={(e) => onChange(e, 'subCategory')} className="block mb-2 sm:mb-0 sm:mr-2 px-4 py-3 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 ">
                            <option value='' selected>Select Category</option>
                            <option value="Infor">Infor</option>
                            <option value="IntelligentTechnologies">Intelligent Technologies</option>
                            <option value="Transformation">Transformation</option>

                        </select>
                        <select id="large" value={vertical} onChange={(e) => onChange(e, 'vertical')} className="block mb-2 sm:mb-0 sm:mr-2 px-4 py-3 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 ">
                            <option value='' selected>Select Category</option>
                            <option value="LN">LN</option>
                            <option value="AI">AI</option>
                            <option value="Transformation">Transformation</option>

                        </select>
                        <div className="text-end">
                            <button onClick={() => handleReset()} type="button" className="w-full px-5 py-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-xl border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700">reset</button>
                        </div>
                    </form>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 my-5">
                    {updatedCaseStudiesData.map((item) => (
                        <>
                            <div className="max-w-md bg-white border border-[#E4E4E4] rounded-3xl shadow">
                                <div className="h-[250px] rounded-tl-3xl rounded-tr-3xl" style={{
                                    backgroundImage: `url("/caseStudies/case-studies-bg1.svg")`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                }}>
                                </div>
                                <div className="p-2 sm:p-4">
                                    <div className="sm:mb-2 flex flex-wrap">
                                    {item.mainCategory && (<span className="mb-2 bg-[#E4E4E4]  text-helper-02  me-2 px-4 py-2 rounded-full">{item.mainCategory}</span>)}
                                       {item.subCategory && ( <span className="mb-2 bg-[#E4E4E4]  text-helper-02  me-2 px-4 py-2 rounded-full">{item.subCategory}</span>)}
                                       {item.vertical && (<span className="mb-2 bg-[#E4E4E4]  text-helper-02  me-2 px-4 py-2 rounded-full">{item.vertical}</span>)} 
                                    </div>
                                    <h5 className="mb-2 paragraph-01 text-['#1D162B]">{item.title}</h5>
                                    <div className="flex justify-end">
                                        <OutlinedButtonWithArrow size={20} arrowColor={'#000'} onClick={() => router.push(`/case-studies/${item.id}?type=${item.mainCategory}`)} />
                                    </div>
                                </div>
                            </div>
                        </>
                    ))}

                    {updatedCaseStudiesData.length==0 && (<h2 className="text-[28px] font-semibold"> No Data Found</h2>)}

                    {/* card */}
                </div>
            </SectionWrapperNew>

        </>
    );
};

export default Page;
