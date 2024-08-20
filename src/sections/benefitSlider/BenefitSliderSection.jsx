import SectionWrapper from '@/components/SectionWrapper';
import SectionHeading from '@/components/SectionHeading';
import checkout from "/public/icon/whygitl/WhyGITL2.svg";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import CommonCard from '@/components/CommonCard';
import Image from 'next/image';
// import CardWidthBackground from "@/components/CardWithBackground";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
function BenefitSliderSection({ ID, SectionImageUrl = '', Heading, Desc, MaxWidth, SlidesPerView = '3', Autoplay = 'true', CardDataList = [], Color = '#000', BGColor = "#000", style }) {
    return (
        <>
            <SectionWrapper id={ID} BGColor={BGColor} style={{
                ...style,
                backgroundImage: `url(${SectionImageUrl})`, backgroundSize: 'cover',
            }}>
                <div className="grid grid-cols-2 gap-32">
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
                        <div className="flex flex-col gap-3 overflow-y-auto max-h-96 overflow-hidden">
                            {CardDataList?.map((item, index) => (
                                <>
                                    <a href="#" class="flex p-5 flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                                        <Image class="" src={checkout} alt="" width={50} height={50}/>
                                        <div class="flex flex-col justify-between px-4 leading-normal">
                                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.text}</p>
                                        </div>
                                    </a>
                                </>
                            ))}
                        </div>
                    </div>
                </div>

            </SectionWrapper>
        </>
    )

}


export default BenefitSliderSection;