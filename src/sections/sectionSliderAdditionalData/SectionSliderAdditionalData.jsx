import SectionWrapper from "@/components/SectionWrapper";
import SectionHeading from "@/components/SectionHeading";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import CommonCardAdditionalData from "@/components/CommonCardAdditionalData";
// import CardWidthBackground from "@/components/CardWithBackground";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Children } from "react";
function SectionSliderAdditionalData({
    ID,
    sectionImageUrl,
    sectionHeading,
    sectionDesc,
    sectionHeaderMaxWidth,
    slidesPerView = "3",
    autoplay = "false",
    pagination = "true",
    modules = [ Pagination, Navigation],
    cardData = [],
    sectionTextColor = "text-primary-900",
    sectionBGColor = "bg-neutral-white",
    setHeadingLayout,
}) {
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
                            MaxWidth={sectionHeaderMaxWidth}
                            layout={setHeadingLayout}
                        ></SectionHeading>
                    </div>

                    <div className="">
                        <Swiper
                            slidesPerView={1}
                            navigation={false}
                            pagination = {{ clickable: true }}
                            modules={[Pagination, Navigation]}
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
                                    <CommonCardAdditionalData Item={item}></CommonCardAdditionalData>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </SectionWrapper>
        </>
    );
}

export default SectionSliderAdditionalData;
