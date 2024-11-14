import SectionWrapper from "@/components/SectionWrapper";
import SectionHeading from "@/components/SectionHeading";
import { Autoplay, Navigation, Pagination , Mousewheel} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import CommonCard from "@/components/CommonCard";
// import CardWidthBackground from "@/components/CardWithBackground";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Children } from "react";
function SectionWidthSlider({
  pageID,
  ID,
  sectionBGImageUrl,
  sectionHeading,
  sectionDesc,
  cardData = [],
  sectionTextColor = "text-neutral-white", 
  sectionBGColor ="text-neutral-white",
  setHeadingLayout,
  moveSectionToTOP,
  setMinHeight,
  style,
  Color
}) {

  const SlidesPerView = "1"
  const Autoplay = "false";

  return (
    <>
      <SectionWrapper
        id={ID}
        BGColor={sectionBGColor}
        style={{
          backgroundImage: `url(${sectionBGImageUrl})`,
          backgroundSize: "cover",
          marginTop: moveSectionToTOP ? '-20rem' : '0', // Apply conditional margin-top
          ...style
        }}
      >
        <div className="container mx-auto py-32">
        <div className="">
          <SectionHeading
          center={false}
            Heading={sectionHeading}
            Desc={sectionDesc}
            Color={sectionTextColor}
            layout={setHeadingLayout}
          ></SectionHeading>
        </div>

        <div className="my-8">
          <Swiper
           slidesPerView={SlidesPerView}
            navigation={true}
            modules={[ Pagination, Navigation]}
            loop={false}
            spaceBetween={32}
            pagination={true}
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
        </div>
      </SectionWrapper>
    </>
  );
}

export default SectionWidthSlider;
