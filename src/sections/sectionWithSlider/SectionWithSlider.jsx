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
  SectionHeadingMaxWidth,
  cardData = [],
  sectionTextColor = "#000",
  sectionBGColor = "#fff",
  setHeadingLayout,
  moveSectionToTOP,
}) {

  const SlidesPerView = "3"
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
        
          
        }}
      >
        <div className="container mx-auto">
        <div className="">
          <SectionHeading
            Heading={sectionHeading}
            Desc={sectionDesc}
            Color={sectionTextColor}
            paddingTop = '16'
            layout={setHeadingLayout}
          ></SectionHeading>
        </div>

        <div className="my-8">
          <Swiper
            slidesPerView={SlidesPerView}
            navigation={false}
            pagination={{ type: "bullets", clickable: true }}
            autoplay={Autoplay}
            loop={false}
            spaceBetween={30}
            /**
             * ! Need to pass this dynamically
             */
            // modules={[Mousewheel, Pagination]}
            // mousewheel={true}
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
