"use client";
import SectionWrapper from "@/components/SectionWrapper";
import SectionHeading from "@/components/SectionHeading";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import style from './reviewSliderSection.module.css';
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
        border:'1px solid #d3d3d3',
        borderRadius:'50%',
        padding:'36px',
    }

    const swiperPreBtn = {
        position: 'absolute',
        left: '50%',
        top: '40%',
        color:'#fff',
        border:'1px solid #d3d3d3',
        borderRadius:'50%',
        padding:'36px',
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
                    <div className="md:container mx-auto">
                <SectionHeading
                    Heading={Heading}
                    Desc={Desc}
                    Color={Color}
                    MaxWidth={SectionHeadingMaxWidth}
                    layout={setHeadingLayout}>

                </SectionHeading>

                <div className="flex mt-10 md:mt-20">
                    <div className="relative hidden md:inline w-[30%]">
                        <div className={`swiper-button-next`} style={{position:'absolute', left:'50%',top:'12%', width:'80px', height:'80px'}}>
                            <img src="/icons/btn-arrows.svg" alt="icon" />
                        </div>
                        <div className={`swiper-button-prev`} style={{position:'absolute', left:'50%',top:'33%', width:'80px', height:'80px', transform: "rotate(180deg)",}}>
                        <img src="/icons/btn-arrows.svg" alt="icon" />
                        </div>
                    </div>

                    <div className="w-full md:w-[70%]">
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
                                <div className="w-full p-6 bg-transparent rounded-3xl">
                                    <div
                                        className=""
                                        style={{
                                            fontSize: "54px",
                                            fontWeight: 300,
                                            lineHeight: "64px",
                                            color: "#fff",
                                            maxWidth:'600px'
                                        }}
                                    >
                                       {item.cardHeading}
                                    </div>
                                    <div
                                        className="my-10"
                                        style={{
                                            color: "#fff",
                                            fontWeight:'300',
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
                                       {item.designation}<br/>
                                       {item.companyName}
                                    </div>
                                </div>

                                {/* <CommonCard Item={item} setpageID={pageID}></CommonCard> */}
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    </div>

                </div>
                </div>
            </SectionWrapper>

        </>
    )
}

export default ReviewSliderSection