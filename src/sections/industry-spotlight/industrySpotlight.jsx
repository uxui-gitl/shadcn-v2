"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

import SectionWrapper from "@/components/SectionWrapper";
import SectionHeading from "@/components/SectionHeading";
import IndustrySpotlightCard from "@/components/IndustrySpotlightCard";
import styles from "./industrySpotlight.module.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const IndustrySpotlight = ({ cardData = []}) => {
  
  return (
    <>
      <SectionWrapper BGColor={"#FFF"}>
        <div className="container mx-auto">
          <SectionHeading
            Heading={"Industry Spotlights"}
            Desc={
              "Delivering industry-centric solutions with a strategic ACT (Automation, Cloud and Transformation) program."
            }
          />

          <div className="my-8">
            <Swiper
              slidesPerView={4}
              navigation={false}
              pagination={{ type: "bullets", clickable: true }}
              autoplay={false}
              loop={false}
              spaceBetween={32}
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
