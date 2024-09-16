'use client';

import SectionWrapper from '@/components/SectionWrapper';
import React from 'react';
import Image from 'next/image';

const CARDS_DATA = [
    {
        logoSrc: "/enterprise-suite/logos/logo--infor.png",
        altText: "Infor Logo",
        width:120,
        height:48,
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
        width:196,
        height:48,
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
        width:120,
        height:48,
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
                            </div>
                        ))}
                    </div>
                </div>
            </SectionWrapper>
        </>
    );
}

export default EnterpriseTransformationCards;
