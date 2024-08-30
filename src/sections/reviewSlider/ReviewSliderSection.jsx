"use client";
import SectionWrapper from "@/components/SectionWrapper";
import SectionHeading from "@/components/SectionHeading";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function ReviewSliderSection(
    { pageID,
        ID,
        SectionImageUrl,
        Heading,
        Desc,
        SectionHeadingMaxWidth,
        SlidesPerView = "1",
        Autoplay = "false",
        CardDataList = [],
        Color = "#000",
        BGColor = "#fff",
        setHeadingLayout, }
) {

    const swiperNextBtn = {
        position: 'absolute',
        left: '50%',
        top: '15%',
        color:'#fff',
    }

    const swiperPreBtn = {
        position: 'absolute',
        left: '50%',
        top: '30%',
        color:'#fff',
    }

    return (
        <>
            <SectionWrapper
                id={ID}
                BGColor={BGColor}
                style={{
                    backgroundImage: `url(${SectionImageUrl})`,
                    backgroundSize: "cover",
                    borderBottomLeftRadius:'0px',
                    borderBottomRightRadius:'0px',

                }}>
                    <div className="container mx-auto">
                <SectionHeading
                    Heading={Heading}
                    Desc={Desc}
                    Color={Color}
                    MaxWidth={SectionHeadingMaxWidth}
                    layout={setHeadingLayout}>

                </SectionHeading>

                <div className="flex">
                    <div className="relative" style={{ minWidth: '280px', flex: 1 }}>
                        <div className={`swiper-button-next`} style={swiperNextBtn}></div>
                        <div className={`swiper-button-prev`} style={swiperPreBtn}></div>
                    </div>
                    <Swiper
                        slidesPerView={SlidesPerView}
                        navigation={{
                            nextEl: ".swiper-button-next",
                            prevEl: ".swiper-button-prev",
                        }}
                        autoplay={Autoplay}
                        loop={true}
                        spaceBetween={30}
                        modules={[Navigation]}
                    >
                        {CardDataList?.map((item, index) => (
                            <SwiperSlide key={item.id ? item?.id : index}>
                                <div class="w-full p-6 bg-transparent rounded-3xl shadow">
                                    <div
                                        className=""
                                        style={{
                                            fontSize: "54px",
                                            fontWeight: 300,
                                            lineHeight: "64px",
                                            color: "#fff",
                                        }}
                                    >
                                       {item.cardHeading}
                                    </div>
                                    <div
                                        className="my-10"
                                        style={{
                                            color: "#fff",
                                            fontSize: "24px",
                                            lineHeight: "36px",
                                            // marginTop: "32px",
                                        }}
                                        dangerouslySetInnerHTML={{__html:item.cardDesc}}
                                    />
                                    
                                    
                                    <div
                                        className=""
                                        style={{
                                            color: "#fff",
                                            fontSize: "16px",
                                            marginTop: "30px",
                                        }}
                                    >
                                        IT Director, Cooling Facility Management<br></br> Company
                                    </div>
                                </div>

                                {/* <CommonCard Item={item} setpageID={pageID}></CommonCard> */}
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                <div className="my-8">

                </div>
                </div>
            </SectionWrapper>

        </>
    )
}

export default ReviewSliderSection