"use client";

import React from "react";
import Image from "next/image";
import SectionWrapper from "@/components/SectionWrapper";
import SectionHeading from "@/components/SectionHeading";

const HolisticApproach = () => {
    const infographicsURL = '/enterprise-suite/infographics/infographics--holistic-approach.svg';

    return (
        <>
            <SectionWrapper BGColor="bg-secondary-900">
                <div className="container mx-auto py-32">
                    <SectionHeading 
                        Heading="Our Holistic Approach" 
                        Desc={"Building business impact with optimized enterprise performance through coordinated technology, processes and talent."} 
                        Color="text-neutral-white" 
                        center = {true}
                     
                    />
                    <div className="flex justify-center mt-8"> {/* Center the SVG below the heading */}
                        <Image 
                            src={infographicsURL} 
                            alt="Holistic Approach Infographic" 
                            width={600} // Set the width based on your design
                            height={600} // Set the height based on your design
                            className="max-w-full h-auto" // Responsive styles
                        />
                    </div>
                </div>
            </SectionWrapper>
        </>
    );
};

export default HolisticApproach;
