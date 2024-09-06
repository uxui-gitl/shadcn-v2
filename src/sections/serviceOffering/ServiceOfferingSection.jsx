'use client';
import SectionWrapper from "@/components/SectionWrapper";
import SectionHeading from "@/components/SectionHeading";
import CommonCard from "@/components/CommonCard";
import { useState, useEffect } from "react";
import ServiceOfferingCard from '@/components/ServiceOfferingCard';

function ServiceOfferingSection({
    ID,
    sectionHeading,
    sectionDesc,
    sectionMaxWidth,
    sectionTextColor = '#000',
    sectionBGColor = "#fff",
    cardData = [],
    LinkListData = []
}) {

    const [data, SetData] = useState([cardData[0]]);

    function handleClick(item) {
        let datas = cardData.filter((Item) => Item.id == item.id)
        data.length = 0;
        SetData(datas);
    }

    return (
        <>
            <SectionWrapper id={ID} BGColor={sectionBGColor}>
                <div className="container mx-auto grid grid-cols-2 gap-20">
                    <div className="">
                        <SectionHeading
                            Heading={sectionHeading}
                            Desc={sectionDesc}
                            Color={sectionTextColor}
                            headingContainerWidth = 'w-full'
                        >
                        </SectionHeading>
                        <div className="my-10">
                            {LinkListData.map((item) => (
                                <div key={item?.id} onClick={() => handleClick(item)} className="flex items-center justify-center p-5 text-[24px] font-medium text-white" style={{ borderBottom: '2px solid white', cusror: 'pointer' }}>
                                    {item?.beforeIconUrl && <svg className="w-[24px] h-[24px] ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                    </svg>}
                                    <span className="w-full text-[28px]">{item.text}</span>
                                    {item?.isArrowIconVisiable && <svg className="w-[24px] h-[24px] ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                    </svg>}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="">
                        <ServiceOfferingCard Item={data[0]} />
                        {/* <CommonCard Item={data[0]}></CommonCard> */}
                    </div>
                </div>
            </SectionWrapper >
        </>
    )
}


export default ServiceOfferingSection;