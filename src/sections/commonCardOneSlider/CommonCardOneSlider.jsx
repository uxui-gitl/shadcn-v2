import SectionWrapper from "@/components/SectionWrapper";
import SectionHeading from "@/components/SectionHeading";
import { Swiper, SwiperSlide } from "swiper/react";
import ASCard from "@/components/cards/ASCard";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function CommonCardOneSlider({
    ID,
    sectionImageUrl,
    sectionHeading,
    sectionDesc,
    sectionHeaderWidth,
    slidesPerView = "3.3",
    autoplay = "false",
    cardData = [],
    sectionTextColor = "#000",
    sectionBGColor = "#fff",
    setHeadingLayout,
}) {
    return (
        <>
            <SectionWrapper
                id={ID}
                BGColor={sectionBGColor}
                className="parallax-background"
                style={{
                    backgroundImage: `url(${sectionImageUrl})`,
                    backgroundSize: "cover",
                    backgroundAttachment: "fixed", // This is key for the parallax effect
                    backgroundPosition: "center", // Center the background image
                }}
            >
                <div className="md:container mx-auto">
                    <div className="">
                        <SectionHeading
                            Heading={sectionHeading}
                            Desc={sectionDesc}
                            Color={sectionTextColor}
                            layout={setHeadingLayout}
                            headingContainerWidth={sectionHeaderWidth}
                        />
                    </div>

                    <div className="my-8">
                        <Swiper
                            slidesPerView={1}
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
                                    <ASCard Item={item} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </SectionWrapper>
        </>
    );
}

export default CommonCardOneSlider;
