import SectionWrapper from "@/components/SectionWrapper";
import SectionHeading from "@/components/SectionHeading";
import { Swiper, SwiperSlide } from "swiper/react";
import CommonCardTwo from "@/components/CommonCardTwo";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
function CommonCardTwoSlider({
    ID,
    sectionImageUrl,
    sectionHeading,
    sectionDesc,
    sectionHeaderMaxWidth,
    cardData = [],
    sectionTextColor = "#000",
    sectionBGColor = "#fff",
    setHeadingLayout,
}) {

    const slidesPerView = "3";
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
                <div className="container mx-auto">
                    <div className="">
                        <SectionHeading
                            Heading={sectionHeading}
                            Desc={sectionDesc}
                            Color={sectionTextColor}
                            layout={setHeadingLayout}
                        ></SectionHeading>
                    </div>

                    <div className="my-8">
                        <Swiper
                            slidesPerView={slidesPerView}
                            navigation={false}
                            pagination={{ type: "bullets", clickable: true }}
                            autoplay={autoplay}
                            loop={false}
                            spaceBetween={30}
                        >
                            {cardData?.map((item, index) => (
                                <SwiperSlide key={item.id ? item?.id : index}>
                                    <CommonCardTwo Item={item}></CommonCardTwo>
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
