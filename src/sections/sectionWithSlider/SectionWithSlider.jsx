import SectionWrapper from "@/components/SectionWrapper";
import SectionHeading from "@/components/SectionHeading";
import { Autoplay, Navigation, Pagination, Mousewheel } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import CommonCard from "@/components/CommonCard";
// import CardWidthBackground from "@/components/CardWithBackground";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Children } from "react";
import SectionWrapperNew from "@/components/SectionWrapperNew";
function SectionWidthSlider({
  pageID,
  ID,
  sectionBGImageUrl,
  sectionHeading,
  sectionDesc,
  cardData = [],
  sectionTextColor = "text-neutral-white",
  sectionBGColor = "text-neutral-white",
  setHeadingLayout,
  setTop,
  moveSectionToTOP,
  setMinHeight,
  style,
  Color,
  setPad = "true",
}) {
  const SlidesPerView = "1";
  const Autoplay = "false";

  return (
    <>
      <SectionWrapperNew
        id={ID}
        sectionHeading={sectionHeading}
        sectionDesc={sectionDesc}
        sectionDescColor="text-neutral-white"
        sectionTextColor={sectionTextColor}
        sectionHeadingLayout={setHeadingLayout}
        bgColor={sectionBGColor}
        setTop={setTop}
        style={{
          backgroundImage: `url(${sectionBGImageUrl})`,
          backgroundSize: "cover",
          ...style,
        }}
      >
    
      

          <div className="">
            <Swiper
              slidesPerView={SlidesPerView}
              navigation={true}
              modules={[Pagination, Navigation]}
              loop={false}
              spaceBetween={32}
              pagination={{ clickable: true }}
              followFinger={true}
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
                  slidesPerView: 3,
                  spaceBetween: 32,
                },
              }}
            >
              {cardData?.map((item, index) => (
                <SwiperSlide key={item.id ? item?.id : index}>
                  <CommonCard Item={item} setpageID={pageID}></CommonCard>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        
      </SectionWrapperNew>
    </>
  );
}

export default SectionWidthSlider;
