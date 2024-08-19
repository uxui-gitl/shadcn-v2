import SectionWrapper from '@/components/SectionWrapper';
import SectionHeading from '@/components/SectionHeading';
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import CommonCard from '@/components/CommonCard';
// import CardWidthBackground from "@/components/CardWithBackground";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Children } from 'react';
function SectionWidthSlider({ ID, SectionImageUrl, Heading, Desc, MaxWidth, SlidesPerView='3', Autoplay='false', CardDataList=[], Color='#000', BGColor="#fff" }) {
    return (
        <>
            <SectionWrapper id={ID} BGColor={BGColor} style={{
                backgroundImage: `url(${SectionImageUrl})`, backgroundSize: 'cover',
            }}>
              

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
                        spaceBetween={30}
                    >
                        {CardDataList?.map((item, index) => (
                            <SwiperSlide key={item.id ? item?.id : index}>
                                <CommonCard Item={item}></CommonCard>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </SectionWrapper>
        </>
    )

}


export default SectionWidthSlider;