import SectionWrapper from "@/components/SectionWrapper";
import SectionHeading from "@/components/SectionHeading";
import { Swiper, SwiperSlide } from "swiper/react";
import CommonCardThree from "@/components/CommonCardThree";
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
                <div className="md:container mx-auto">
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
