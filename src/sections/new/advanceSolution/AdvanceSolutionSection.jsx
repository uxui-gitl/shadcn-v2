"use client";
import SectionWrapperNew from "@/components/SectionWrapperNew";
import { SwiperSlide } from "swiper/react";
import Slider from "@/components/Slider";
import ASCard from "@/components/cards/ASCard";
import {advanceSolutionData} from "./data.js";
const imageUrl = '/intelligent-tech/advanceSolutions.webp';

function AdvanceSolutionSection(){
return(
    <>
      <SectionWrapperNew
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${imageUrl})`,
          backgroundSize: "cover",
          backgroundAttachment: "fixed", // This is key for the parallax effect
          backgroundPosition: "center",
        }}
        sectionHeading={"Advance Solutions for Business Future Readiness"}
        sectionDesc={''}
        sectionTextColor="text-neutral-white"
        sectionHeadingLayout="left"
        setTop={false}
      >
        <Slider>
          {advanceSolutionData?.map((item, index) => (
            <SwiperSlide key={index}>
              <ASCard Item={item} />
            </SwiperSlide>
          ))}
        </Slider>
      </SectionWrapperNew>
    </>
)
}


export default AdvanceSolutionSection;
