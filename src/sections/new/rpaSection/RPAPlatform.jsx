import Image from "next/image";
import SectionWrapperNew from "@/components/SectionWrapperNew";
import Slider from "@/components/Slider";
import { SwiperSlide } from "swiper/react";

const uiPath = '/logos/rpa/uiPath.svg';
const automationAnywhere = '/logos/rpa/automation-anywhere.svg';
const powerAutomate = '/logos/rpa/power-automate.svg';

function RPAPlatform(){
    return(
        <>
        <SectionWrapperNew
        bgColor={"bg-white"}
        sectionHeading={"RPA Platform Expertise"}
        sectionDesc={
          "Our in-depth expertise in RPA platforms helps in maximizing functionality, ensuring optimal business performance.  "
        }
        sectionTextColor={"text-primary-900"}
        sectionHeadingLayout="horizontal"
        setTop={true}

        style={{
            position: "relative",
            zIndex: "1",
        }}

      >
        <Slider>
          {[uiPath, powerAutomate, automationAnywhere]?.map((item, index) => (
            <SwiperSlide key={index} className="px-8">
              <Image src={item} width={320} height={100} alt='' />
            </SwiperSlide>
          ))}
        </Slider>
      </SectionWrapperNew>
        </>
    )
}


export default RPAPlatform