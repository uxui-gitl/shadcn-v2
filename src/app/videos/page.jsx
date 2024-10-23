"use client";
import React, { useState, useEffect } from "react";
import ContactBanner from "@/sections/contactBanner/ContactBanner";
import SectionWrapperNew from '@/components/SectionWrapperNew';
import OutlinedButtonWithArrow from "@/components/ui/buttons/OutlinedButtonWithArrow";
import videoData from "@/data/videoData";
import { useRouter } from 'next/navigation';
import Dialog from "@/components/Dialog";


const Page = () => {
    const router = useRouter();
    const [showModal2, setshowModal1] = useState(false);

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
                <div className="grid grid-cols-3 gap-4 my-10">
                    {videoData.map((item) => (
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
                                        {/* <span class="mb-2 bg-[#E4E4E4] text-gray-800 text-sm font-medium me-2 px-4 py-2 rounded-full">{item.vertical}</span> */}
                                    </div>
                                    <h5 class="mb-2 font-bold tracking-tight text-['#1D162B] text-[18px] leading-[28px]">{item.title}</h5>
                                    <div className="flex justify-end">
                                        <OutlinedButtonWithArrow size={48} arrowColor={'#000'} onClick={() => handleBusinessCardClick(true)} />
                                    </div>
                                </div>
                            </div>
                        </>
                    ))}


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
                    <iframe width="560" height="415" style={{ margin: '0 auto' }} src="https://www.youtube.com/embed/T-VEzb3WgJY?si=10lNjjAPIVBstnvC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </Dialog>
            {/* end modal */}

        </>
    );
};

export default Page;
