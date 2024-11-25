import SectionWrapper from "@/components/SectionWrapper";
import SectionHeading from "@/components/SectionHeading";
import { Swiper, SwiperSlide } from "swiper/react";

import CommonCardThree from "@/components/CommonCardThree";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Navigation } from "lucide-react";
import SectionWrapperNew from "@/components/SectionWrapperNew";
function CommonCardTwoSlider({
    ID,
    sectionImageUrl,
    sectionHeading,
    sectionDesc,
    sectionDescColor,
    cardData = [],
    sectionTextColor = 'text-primary-900',
    sectionBGColor = "bg-neutral-white",
    setHeadingLayout,
}) {

    const slidesPerView = "1";
    const autoplay = "false";
    return (
        <>
            <SectionWrapperNew
                id={ID}
                bgColor={sectionBGColor}
                sectionHeading={sectionHeading}
                sectionDesc={sectionDesc}
                sectionTextColor={sectionTextColor}
                sectionDescColor={sectionDescColor}
                BGColor={sectionBGColor}
                sectionHeadingLayout={setHeadingLayout}
                
   
                style={{
                    backgroundImage: `url(${sectionImageUrl})`,
                    backgroundSize: "cover",
                }}
            >
                <div className="">
           

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
            </SectionWrapperNew>
        </>
    );
}

export default CommonCardTwoSlider;
