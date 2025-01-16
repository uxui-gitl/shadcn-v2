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
    const [videoUrl, setVideoUrl] = useState();


    function handleBusinessCardClick(modal, url) {
        setshowModal1(modal);
        setVideoUrl((pre)=> url);
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
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 my-5">
                    {videoData.map((item) => (
                        <>
                            <div className="max-w-md bg-white border border-[#E4E4E4] rounded-3xl shadow">
                                <div className="h-[250px] rounded-tl-3xl rounded-tr-3xl" style={{
                                    backgroundImage: `url("/caseStudies/case-studies-bg1.svg")`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                }}>
                                </div>
                                <div className="p-4">
                                    <h5 className="mb-2 paragraph-01 text-['#1D162B]">{item.title}</h5>
                                    <div className="flex justify-end">
                                        <OutlinedButtonWithArrow size={20} arrowColor={'#000'} onClick={() => handleBusinessCardClick(true, item?.videoUrl)} />
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
                <div className="py-2 mx-auto text-center">
                    <iframe width="100%" height="415" style={{ margin: '0 auto' }} src={videoUrl} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allow='autoplay' allowfullscreen></iframe>
                </div>
            </Dialog>
            {/* end modal */}

        </>
    );
};

export default Page;
