import SectionWrapper from "@/components/SectionWrapper";
import SectionHeading from "@/components/SectionHeading";
import { Swiper, SwiperSlide } from "swiper/react";

import CommonCardThree from "@/components/CommonCardThree";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Navigation } from "lucide-react";
function CommonCardTwoSlider({
    ID,
    sectionImageUrl,
    sectionHeading,
    sectionDesc,
    sectionHeaderMaxWidth,
    cardData = [],
    sectionTextColor = 'text-primary-900',
    sectionBGColor = "bg-neutral-white",
    setHeadingLayout,
}) {

    const slidesPerView = "1";
    const autoplay = "false";
    return (
        <>
            <SectionWrapper
                id={ID}
                BGColor={sectionBGColor}
                style={{
                    backgroundImage: `url(${sectionImageUrl})`,
                    backgroundSize: "cover",
                }}
            >
                <div className="container mx-auto py-32">
                    <div className="">
                        <SectionHeading
                            Heading={sectionHeading}
                            Desc={sectionDesc}
                            Color={sectionTextColor}
                            layout={setHeadingLayout}
                            headingContainerWidth={sectionHeaderMaxWidth}
                        ></SectionHeading>
                    </div>

                    <div className="">
                        <Swiper
                            slidesPerView={slidesPerView}
                            navigation={false}
                            pagination={{ clickable: true }}
                            followFinger={true}
                            modules={[ Pagination]}
                            autoplay={autoplay}
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
                                <SwiperSlide key={item.id ? item?.id : index}>
                                    <CommonCardThree Item={item}></CommonCardThree>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </SectionWrapper>
        </>
    );
}

export default CommonCardTwoSlider;
