import SectionWrapperNew from "@/components/SectionWrapperNew";
import { SwiperSlide } from "swiper/react";
import Slider from "@/components/Slider";
import RPACard from "@/components/cards/RPACard";
import {RPASolution} from './data.js'


function RPABusiness(){
    return(
        <>
        <SectionWrapperNew
        bgColor={"bg-primary-10"}
        sectionHeading={
          "Why Consider RPA for Your Business?"
        }
        sectionDesc={""}
        sectionTextColor="text-primary-900"
        sectionHeadingLayout="left"
        setTop={false}
      >
        <Slider>
          {RPASolution?.map((item, index) => (
            <SwiperSlide key={index}>
              <RPACard Item={item}></RPACard>
            </SwiperSlide>
          ))}
        </Slider>
      </SectionWrapperNew>
        </>
    )
}


export default RPABusiness;