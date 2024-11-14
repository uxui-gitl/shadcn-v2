"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import SectionWrapper from "@/components/SectionWrapper";
import SectionHeading from "@/components/SectionHeading";
import IndustrySpotlightCard from "@/components/IndustrySpotlightCard";
import { Navigation, Pagination } from "swiper/modules";
import styles from "./industrySpotlight.module.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const IndustrySpotlight = ({ cardData = [], slidePerView='4', sectionHeaderWidth='', sectionHeading="Industry Spotlights", sectionDesc="Delivering industry-centric solutions with a strategic ACT (Automation, Cloud and Transformation) program."}) => {
  
  return (
    <>
      <SectionWrapper BGColor={'bg-neutral-white'} >
        <div className="container mx-auto py-32">
          <SectionHeading
            Heading={sectionHeading}
            Desc={sectionDesc}
            Color={'text-primary-900'}
            headingContainerWidth={sectionHeaderWidth}
          />

          <div className="my-8">
            <Swiper
              slidesPerView={1}
              navigation={false}
              pagination={true}
              followFinger={true}
              modules={[Navigation, Pagination]}
              autoplay={false}
              loop={false}
              spaceBetween={32}
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
                    slidesPerView: `${slidePerView}`,
                    spaceBetween: 32,
                },
            }}
            >
              {cardData?.map((item, index) => (
                <SwiperSlide key={item.id ? item?.id : index}>
                  <IndustrySpotlightCard Item={item}></IndustrySpotlightCard>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
};

export default IndustrySpotlight;
