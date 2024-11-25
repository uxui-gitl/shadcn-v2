
import { SwiperSlide } from "swiper/react";
import Slider from "@/components/Slider";
import SectionHeading from '@/components/SectionHeading';
function ServiceSlider({sectionHeading , sectionDesc, children}) {
    return (
        <>
           <div className="bg-primary-900 rounded-3xl -mt-8">
        <div
          className="container mx-auto flex "
          style={{ alignItems: "center", overflow: "hidden" }}
        >
          {/* Left Column */}
          <div className="w-full md:w-1/2 min-h-[420px] py-8">
            <SectionHeading
              Heading={sectionHeading}
              Color={"white"}
              Desc={sectionDesc}
              headingContainerWidth={"w-full"}
            />
          </div>

          {/* Right Column */}
          <div
            className="hidden md:w-1/2 lg:block"
            style={{
              backgroundImage: "url(/infor/Infor-Cloudsuite-Services.png)",
              backgroundSize: "cover",
              backgroundPosition: "left",
              height: "520px", // Added explicit height
            }}
          ></div>
        </div>

        {/* Swiper Section */}
        <div
          className="container mx-auto bg-white py-5 rounded-t-3xl"
          style={{
            zIndex: 2,
            position: "relative",
          }}
        >
          {children}
        </div>
      </div>
        </>
    )
}

export default ServiceSlider;