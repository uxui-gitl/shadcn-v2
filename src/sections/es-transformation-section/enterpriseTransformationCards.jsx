'use client';

import SectionWrapper from '@/components/SectionWrapper';
import React from 'react';
import Image from 'next/image';
import Link from "next/link";
import Icon from "@mdi/react";
import { mdiArrowRight } from "@mdi/js";


const CARDS_DATA = [
    {
        logoSrc: "/enterprise-suite/logos/logo--infor.png",
        altText: "Infor Logo",
        width: 120,
        height: 48,
        listItems: [
            "Infor Cloud Suite",
            "Infor LN",
            "Infor WMS",
            "More Infor Products"
        ]
    },
    {
        logoSrc: "/enterprise-suite/logos/logo--microsoft.png",
        altText: "Infor Logo",
        width: 196,
        height: 48,
        listItems: [
            "Dynamics 365 CRM",
            "Dynamics 365 Finance and Operations",
            "Dynamics 365 Commerce",
            "Dynamics 365 Business Central",
        ]
    },
    {
        logoSrc: "/enterprise-suite/logos/logo--oracle.png",
        altText: "Infor Logo",
        width: 120,
        height: 48,
        listItems: [
            "Oracle Fusion Cloud",
            "Oracle EBS",

        ]
    }
];

const EnterpriseTransformationCards = () => {
    return (
        <>
            <SectionWrapper>
                <div className='md:container mx-auto'>
                    <div className='flex flex-col md:flex-row gap-8 min-h-[324px]'>
                        {CARDS_DATA.map((card, index) => (
                            <div key={index} className='flex-1 rounded-3xl border-[1px] border-[#E4E4E4] p-8' style={{ backgroundColor: "white" }}>
                                <Image
                                    src={card.logoSrc}
                                    alt={card.altText}
                                    width={card.width}
                                    height={card.height}
                                    className="mb-8"
                                />
                                <ul>
                                    {card.listItems.map((item, itemIndex) => (
                                        <li key={itemIndex} className="py-4 border-b border-gray-300">
                                            {item}
                                        </li>
                                    ))}
                                </ul>

                                <Link
                                    href={``}
                                    target="_blank"
                                    className="text-white mr-5 mt-10 inline-flex items-center transition-all bg-[#5F22D9] hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-base px-8 py-3 me-2 dark:bg-[#5F22D9] dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                                >
                                    {'Know More'}
                                    <Icon
                                        path={mdiArrowRight}
                                        style={{ marginLeft: "0.5em", marginTop: '1px' }}
                                        size={1}
                                    />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </SectionWrapper>
        </>
    );
}

export default EnterpriseTransformationCards;
