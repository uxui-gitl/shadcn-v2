"use client";

import React from "react";
import Image from "next/image";
import SectionWrapper from "@/components/SectionWrapper";
import SectionHeading from "@/components/SectionHeading";

const HolisticApproach = () => {
    const infographicsURL = '/enterprise-suite/infographics/infographics--holistic-approach.svg';

    return (
        <>
            <SectionWrapper BGColor="#000">
                <div className="md:container mx-auto">
                    <SectionHeading 
                        Heading="Our Holistic Approach" 
                        Desc={"Building business impact with optimized enterprise performance through coordinated technology, processes and talent."} 
                        Color="#fff" 
                        center 
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
