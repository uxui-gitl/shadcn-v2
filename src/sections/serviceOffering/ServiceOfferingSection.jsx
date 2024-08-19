'use client';
import SectionWrapper from "@/components/SectionWrapper";
import SectionHeading from "@/components/SectionHeading";
import CommonCard from "@/components/CommonCard";
import { useState, useEffect } from "react";


function ServiceOfferingSection({ ID, Heading, Desc, MaxWidth, Color = '#000', BGColor = "#fff", CardDataList = [], LinkListData = [] }) {
   const [data, SetData] = useState([CardDataList[0]]);

    function handleClick(item) {
        let datas = CardDataList.filter((Item) => Item.id == item.id)
        data.length = 0;
        SetData(datas);
    }

    // useEffect(() => {

    // }, [data])

    return (
        <>
            <SectionWrapper id={ID} BGColor={BGColor}>
                <div className="grid grid-cols-2 gap-20">
                    <div className="">
                        <SectionHeading
                            Heading={Heading}
                            Desc={Desc}
                            Color={Color}
                        >
                        </SectionHeading>
                        <div className="my-10">
                            {LinkListData.map((item) => (
                                <div key={item?.id} onClick={() => handleClick(item)} class="flex items-center justify-center p-5 text-2xl font-medium text-gray-500 bg-gray-50 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 bg-transparent dark:hover:bg-gray-700 dark:hover:text-white" style={{ borderBottom: '2px solid #43189A' }}>
                                    <span class="w-full">{item.text}</span>
                                    <svg class="w-4 h-4 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                    </svg>
                                </div>
                            ))}

                        </div>
                    </div>
                    <div className="">
                        <CommonCard Item={data[0]}></CommonCard>
                    </div>
                </div>
            </SectionWrapper >
        </>
    )
}


export default ServiceOfferingSection;