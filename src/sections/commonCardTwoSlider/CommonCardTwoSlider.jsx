import React from "react";
import SectionWrapper from "@/components/SectionWrapper";
import SectionHeading from "@/components/SectionHeading";
import { Swiper, SwiperSlide } from "swiper/react";
import CommonCardTwo from "@/components/CommonCardTwo";
import { Pagination } from "swiper/modules"; // Use the specific import for modules
import "swiper/css";
import "swiper/css/pagination";

function CommonCardTwoSlider({
    ID,
    sectionImageUrl,
    sectionHeading,
    sectionDesc,
    sectionHeaderMaxWidth,
    cardData = [],
    sectionTextColor = "text-primary-900",
    sectionBGColor = "bg-neutral-white",
    setHeadingLayout,
}) {
    return (
        <SectionWrapper
            id={ID}
            BGColor={sectionBGColor}
            style={{
                backgroundImage: `url(${sectionImageUrl})`,
                backgroundSize: "cover",
            }}
        >
            <div className="container mx-auto py-32">
                <SectionHeading
                    Heading={sectionHeading}
                    Desc={sectionDesc}
                    Color={sectionTextColor}
                    layout={setHeadingLayout}
                    headingContainerWidth={sectionHeaderMaxWidth}
                />
                <div className="my-8">
                    <Swiper
                        slidesPerView={1} // Using number directly for clarity
                        pagination={{ clickable: true }} // Explicit pagination setup
                        modules={[Pagination]} // Ensure Pagination module is listed
                        loop={false}
                        spaceBetween={30}
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 16,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 24,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 32,
                            },
                        }}
                    >
                        {cardData?.map((item, index) => (
                            <SwiperSlide key={item.id || index}>
                                <CommonCardTwo Item={item} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </SectionWrapper>
    );
}

export default CommonCardTwoSlider;
