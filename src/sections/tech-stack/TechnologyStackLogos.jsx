"use client";

import React from 'react';
import SectionWrapper from "@/components/SectionWrapper";
import SectionHeading from "@/components/SectionHeading";
import Image from 'next/image';

const logos = [
    '/technology-stack/logos/New Project.svg',
    '/technology-stack/logos/PowerApps_scalable.svg',
    '/technology-stack/logos/Microsoft_Office_SharePoint_(2019–present).svg',
    '/technology-stack/logos/java-vertical.svg',
];

const TechnologyStackLogos = () => {
    return (
        <>
        <SectionWrapper BGColor={'#F3F0FA'}>
            <div className="md:container mx-auto">
                <SectionHeading 
                    center={true} 
                    Heading={'Expertly Built <br/>200+ Custom Apps'} 
                    Desc={'We use the latest technologies to build our products.'} 
                />
                <div className="flex justify-center space-x-24 mt-8">
                    {logos.map((logo, index) => (
                        <>
                        <Image key={index} src={logo} alt={`tech-stack-${index}`} width={120} height={120} />
                        </>
                    ))}
                </div>
            </div>
        </SectionWrapper>
        </>
    );
};  

export default TechnologyStackLogos;
