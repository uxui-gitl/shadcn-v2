import SectionWrapper from "@/components/SectionWrapper";
import SectionHeading from "@/components/SectionHeading";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Icon from "@mdi/react";
import CommonCard from "@/components/CommonCard";
import { mdiArrowRight } from "@mdi/js";
// import CardWidthBackground from "@/components/CardWithBackground";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Children } from "react";

// {
//     id: 1,
//     cardBGImageUrl: '/ai-ml/blog-bg.png',
//     cardBGColor:'red',
//     cardHeading: "Machine Learning",
//     cardDesc: 'sjvfjhgasdkjbaksjgdkjbsadkljb',
//     cardTextColor:'white',
//   }

// refer object data for card

function BlogSliderSection(
    {
        cardData = [],
        SlidesPerView = "1",
        Autoplay = "false",
    }
) {
    return (
        <>
            <div className="">
                <Swiper
                    slidesPerView={SlidesPerView}
                    navigation={false}
                    pagination={{ type: "bullets", clickable: true }}
                    autoplay={Autoplay}
                    loop={false}
                    spaceBetween={30}
                >
                    {cardData?.map((item, index) => (
                        <SwiperSlide key={item.id ? item?.id : index}>
                            {/* <div class="w-full p-6 border rounded-lg shadow h-[100vh]" style={{ background: `url(${item.cardBGImageUrl}), ${item.cardBGColor}`, backgroundSize: 'cover' }}> */}
                                <SectionWrapper id={"ni"} style={{
                                  background: `url(${item?.cardBGImageUrl}) ${item.cardBGColor}`, backgroundSize: 'cover', marginTop: "-2.5rem"
                                }}>

                                    <div className="md:container mx-auto">
                                        <SectionHeading
                                            Heading={item.cardHeading}
                                            Desc={item.cardDesc}
                                            Color={item.cardTextColor}
                                        >
                                        </SectionHeading>
                                        <Link
                                            href={item.readMoreUrl}
                                            target="_blank"
                                            className="text-white mt-20 mb-16 inline-flex items-center transition-all bg-[#5F22D9] hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-base px-8 py-3 me-2 dark:bg-[#5F22D9] dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                                        >
                                            {'Read More'}
                                            <Icon
                                                path={mdiArrowRight}
                                                style={{ marginLeft: "0.5em", marginTop: '1px' }}
                                                size={1}
                                            />
                                        </Link>
                                    </div>
                                </SectionWrapper>
                            {/* </div> */}

                            {/* <CommonCard Item={item}></CommonCard> */}
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    )
}


export default BlogSliderSection;