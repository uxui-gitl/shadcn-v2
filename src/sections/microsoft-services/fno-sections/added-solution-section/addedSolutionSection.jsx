'use client';

import React, { useState } from 'react';
import SectionWrapper from "@/components/SectionWrapper";
import SectionHeading from "@/components/SectionHeading";
import Image from 'next/image';

// Styles
const containerStyle = 'bg-[#FFF] py-8 rounded-md flex flex-col items-start';
const iconStyle = 'mb-4';
const headingStyle = 'text-[28px] leading-[36px] font-semibold my-2';
const listItemStyle = 'flex items-start border-b text-[18px] leading-[24px] py-4 cursor-pointer transition-transform duration-300'; // Added cursor pointer

// Container Data
const CONTAINER_DATA_1 = {
    icon: (
        ''
    ),
    heading: 'Quality Order Mobile App',
    listItems: [
        { text: 'Simplified Quality Order Generation', image: '/industry-spotlight/cards-backgrounds/card-bg--healthcare.png' },
        { text: 'Real-Time Data Integration', image: '/industry-spotlight/cards-backgrounds/card-bg--healthcare.png' },
        { text: 'Effortless QR Code Search to locate Quality Orders', image: '/industry-spotlight/cards-backgrounds/card-bg--professional-services.png' },
        { text: 'Mobile Inspection Updates', image: '/industry-spotlight/cards-backgrounds/card-bg--project.png' },
        { text: 'Detailed Test Insights', image: '/industry-spotlight/cards-backgrounds/card-bg--professional-services.png' },
        { text: 'Order-level validation, approval, and closure', image: '/industry-spotlight/cards-backgrounds/card-bg--project.png' },
    ],
};

const CONTAINER_DATA_2 = {
    icon: (
        ''
    ),
    heading: 'Production Order App',
    listItems: [
        { text: 'Simplified Quality Order Generation', image: '/industry-spotlight/cards-backgrounds/card-bg--healthcare.png' },
        { text: 'Real-Time Data Integration', image: '/industry-spotlight/cards-backgrounds/card-bg--healthcare.png' },
        { text: 'Effortless QR Code Search to locate Quality Orders', image: '/industry-spotlight/cards-backgrounds/card-bg--professional-services.png' },
        { text: 'Mobile Inspection Updates', image: '/industry-spotlight/cards-backgrounds/card-bg--project.png' },
        { text: 'Detailed Test Insights', image: '/industry-spotlight/cards-backgrounds/card-bg--professional-services.png' },
        { text: 'Order-level validation, approval, and closure', image: '/industry-spotlight/cards-backgrounds/card-bg--project.png' },
    ],
};

// (default image)
const DEFAULT_IMAGE = '/CloudStackServices/Capabilities-CloudCostOptimization.jpg';

const AddedSolutionSection = ({ sectionBGColor }) => {
    const [hoveredImage, setHoveredImage] = useState(DEFAULT_IMAGE);

    const handleMouseOver = (image) => {
        setHoveredImage(image); // Change image on hover
    };

    return (
        <SectionWrapper BGColor={sectionBGColor}>
            <div className='container mx-auto'>
                <SectionHeading
                    Heading={'Godrej Infotech Value Added Solutions'}
                    Desc={'With our tailored D365 F&O solutions built using Power Apps, we ensure seamless integration and efficient processes for Quality and Production Orders.'}
                    layout='horizontal'
                />

                <div className="flex gap-8 mt-24">
                    {/* First Container */}
                    <div className={`w-1/3 ${containerStyle}`}>
                        {/* Icon and Heading */}
                        <div className="flex items-center mb-8">
                            <div className={iconStyle}>
                                {CONTAINER_DATA_1.icon}
                            </div>
                            <h3 className={headingStyle}>{CONTAINER_DATA_1.heading}</h3>
                        </div>
                        {/* List Items */}
                        <ul className="flex flex-col">
                            {CONTAINER_DATA_1.listItems.map((item, index) => (
                                <li
                                    key={index}
                                    className={listItemStyle}
                                    onMouseOver={() => handleMouseOver(item.image)} // Change image on hover
                                >
                                    {item.text}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Second Container */}
                    <div className={`w-1/3 ${containerStyle}`}>
                        {/* Icon and Heading */}
                        <div className="flex items-center mb-8">
                            <div className={iconStyle}>
                                {CONTAINER_DATA_2.icon}
                            </div>
                            <h3 className={headingStyle}>{CONTAINER_DATA_2.heading}</h3>
                        </div>
                        {/* List Items */}
                        <ul className="flex flex-col">
                            {CONTAINER_DATA_2.listItems.map((item, index) => (
                                <li
                                    key={index}
                                    className={listItemStyle}
                                    onMouseOver={() => handleMouseOver(item.image)} // Change image on hover
                                >
                                    {item.text}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Third Container with Image */}
                    <div className={`w-1/3 ${containerStyle}`}>
                        <div className="relative w-full h-full overflow-hidden">
                            <div className="absolute inset-0 transition-opacity duration-300 opacity-100">
                                <Image
                                    src={hoveredImage}
                                    alt="Container Image"
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-[24px] transition-opacity duration-300"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default AddedSolutionSection;
