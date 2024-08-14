import SectionWrapper from '@/components/SectionWrapper';
import SectionHeading from '@/components/SectionHeading';
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import CommonCard from '@/components/CommonCard';
// import CardWidthBackground from "@/components/CardWithBackground";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
function BenefitSliderSection({ ID, SectionImageUrl = '', Heading, Desc, MaxWidth, SlidesPerView = '3', Autoplay = 'true', CardDataList = [], Color = '#000', BGColor = "#000", style }) {
    return (
        <>
            <SectionWrapper id={ID} style={{
                ...style,
                background: `${BGColor}`
            }}>
                <div className="grid grid-cols-2 gap-4">
                    <div className="">
                        <SectionHeading
                            Heading={Heading}
                            Desc={Desc}
                            Color={Color}
                            MaxWidth={MaxWidth}
                        >
                        </SectionHeading>
                    </div>

                    <div className="my-8">
                        <Swiper
                            slidesPerView={SlidesPerView}
                            navigation={false}
                            pagination={{ type: "bullets", clickable: true }}
                            autoplay={Autoplay}
                            loop={true}
                            direction= {"vertical"}
                        >
                            {CardDataList?.map((item, index) => (
                                <SwiperSlide key={item.id ? item?.id : index}>
                                    <CommonCard Item={item}></CommonCard>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>

            </SectionWrapper>
        </>
    )

}


export default BenefitSliderSection;