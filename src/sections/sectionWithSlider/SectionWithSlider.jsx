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
  SectionImageUrl,
  Heading,
  Desc,
  SectionHeadingMaxWidth,
  SlidesPerView = "3",
  Autoplay = "false",
  CardDataList = [],
  Color = "#000",
  BGColor = "#fff",
  setHeadingLayout,
  setHeadingContainerWidth,
  moveSectionToTOP,
}) {
  return (
    <>
      <SectionWrapper
        id={ID}
        BGColor={BGColor}
        style={{
          backgroundImage: `url(${SectionImageUrl})`,
          backgroundSize: "cover",
          marginTop: moveSectionToTOP ? '-20rem' : '0', // Apply conditional margin-top
        
          
        }}
      >
        <div className="container mx-auto">
        <div className="">
          <SectionHeading
            Heading={Heading}
            Desc={Desc}
            Color={Color}
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
            {CardDataList?.map((item, index) => (
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
