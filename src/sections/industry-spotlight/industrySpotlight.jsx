"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import SectionWrapper from "@/components/SectionWrapper";
import SectionHeading from "@/components/SectionHeading";
import IndustrySpotlightCard from "@/components/IndustrySpotlightCard";
import styles from "./industrySpotlight.module.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const IndustrySpotlight = ({ cardData = [], slidePerView='4', sectionHeading="Industry Spotlights", sectionDesc="Delivering industry-centric solutions with a strategic ACT (Automation, Cloud and Transformation) program."}) => {
  
  return (
    <>
      <SectionWrapper BGColor={"#FFF"} >
        <div className="md:container mx-auto">
          <SectionHeading
            Heading={sectionHeading}
            Desc={sectionDesc}
          />

          <div className="my-8">
            <Swiper
              slidesPerView={1}
              navigation={false}
              pagination={{ type: "bullets", clickable: true }}
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
