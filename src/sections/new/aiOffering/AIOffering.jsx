import SectionWrapperNew from "@/components/SectionWrapperNew";
import { SwiperSlide } from "swiper/react";
import Slider from "@/components/Slider";
const imageUrl = '/ai-ml/AI-bgimage.webp';
import BSCard from "@/components/cards/BSCard";
import {AIOfferingsData} from "./data.js";

function AIOffering(){
    return(
        <>
<SectionWrapperNew
style={{
  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${imageUrl})`,
  backgroundSize: "cover",
  backgroundAttachment: "fixed", // This is key for the parallax effect
  backgroundPosition: "center",
}}
sectionHeading={"Artificial Intelligence Offerings"}
sectionDesc={'Equipping businesses with actionable intelligence to redefine its potential and enable informed decision-making.'}
sectionTextColor="text-neutral-white"
sectionDescColor="text-neutral-white"
sectionHeadingLayout="left"
setTop={false}
>
<Slider>
  {AIOfferingsData?.map((item, index) => (
    <SwiperSlide key={index}>
      <BSCard Item={item}></BSCard>
    </SwiperSlide>
  ))}
</Slider>
</SectionWrapperNew>

        </>
    )
}


export default AIOffering;

