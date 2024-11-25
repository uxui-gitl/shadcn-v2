'use client';

import React, { useState } from 'react';
import SectionWrapper from "@/components/SectionWrapper";
import SectionHeading from "@/components/SectionHeading";
import Image from 'next/image';

// Styles
const containerStyle = 'bg-[#FFF] py-5 rounded-md flex flex-col items-start';
const iconStyle = 'mb-4';
const headingStyle = 'text-[28px] leading-[36px] font-semibold my-2';
const listItemStyle = 'flex items-start border-b text-[18px] leading-[24px] py-3 cursor-pointer transition-transform duration-300'; // Added cursor pointer

// Container Data
const CONTAINER_DATA_1 = {
    icon: (
        ''
    ),
    heading: 'Quality Order Mobile App',
    listItems: [
        { text: 'Simplified Quality Order Generation', image: '/fnO/qualityOrderMobileApp/SimplifiedQualityOrderGeneration.webp' },
        { text: 'Real-Time Data Integration', image: '/fnO/qualityOrderMobileApp/RealTimeDataIntegration.webp' },
        { text: 'Effortless QR Code Search to locate Quality Orders', image: '/fnO/qualityOrderMobileApp/EffortlessQRcodeSearch.webp' },
        { text: 'Mobile Inspection Updates', image: '/fnO/qualityOrderMobileApp/MobileInspection.webp' },
        { text: 'Detailed Test Insights', image: '/fnO/qualityOrderMobileApp/DetailedTestInsights.webp' },
        { text: 'Order-level validation, approval, and closure', image: '/fnO/qualityOrderMobileApp/OrderLevelValidation.webp' },
    ],
};

const CONTAINER_DATA_2 = {
    icon: (
        ''
    ),
    heading: 'Production Order App',
    listItems: [
        { text: 'Seamless Production Order Creation', image: '/fnO/productionOrderApp/SeamlessProductionOrderCreation.webp' },
        { text: 'Real-Time Data Integration', image: '/fnO/productionOrderApp/RealTimeDataIntegration.webp' },
        { text: 'Open Order Management', image: '/fnO/productionOrderApp/OpenOrderManagement.webp' },
        { text: 'Quick QR Code Searches for Production Orders', image: '/fnO/productionOrderApp/QuickQRCodeSearches.webp' },
        { text: 'Mobile Inspection Updates', image: '/fnO/productionOrderApp/MobileInspectionUpdates.webp' },
        { text: 'Individual Test Results', image: '/fnO/productionOrderApp/IndividualTestResults.webp' },
        { text: 'Efficient Validation', image: '/fnO/productionOrderApp/EfficientValidation.webp' },
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
            <div className='container mx-auto py-32'>
                <SectionHeading
                    Heading={'Value Added Solutions'}
                    Desc={'With our tailored D365 F&O solutions built using Power Apps, we ensure seamless integration and efficient processes for Quality and Production Orders. Our goal is to make your journey towards enhanced operational efficiency as smooth as possible.'}
                    layout='horizontal'
                    Color={'text-primary-900'}
                    headingContainerWidth={'w-full'}
                />

                <div className="flex flex-col md:flex-row md:gap-8 ">
                    {/* First Container */}
                    <div className={`w-full md:w-1/3 ${containerStyle}`}>
                        {/* Icon and Heading */}
                        <div className="flex items-center mb-1">
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
                    <div className={`w-full md:w-1/3 ${containerStyle}`}>
                        {/* Icon and Heading */}
                        <div className="flex items-center mb-1">
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
                    <div className={`w-full md:w-1/3 ${containerStyle} invisible md:visible`}>
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
