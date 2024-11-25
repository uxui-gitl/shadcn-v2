import SectionWrapper from "@/components/SectionWrapper";
import SectionHeading from "@/components/SectionHeading";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Icon from "@mdi/react";
import CommonCard from "@/components/CommonCard";
import { mdiArrowTopRight } from "@mdi/js";
// import CardWidthBackground from "@/components/CardWithBackground";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Children } from "react";
import SectionWrapperNew from "@/components/SectionWrapperNew";

// {
//     id: 1,
//     cardBGImageUrl: '/ai-ml/blog-bg.png',
//     cardBGColor:'red',
//     cardHeading: "Machine Learning",
//     cardDesc: 'sjvfjhgasdkjbaksjgdkjbsadkljb',
//     cardTextColor:'white',
//   }

// refer object data for card

function BlogSliderSection({
  cardData = [],
  SlidesPerView = "1",
  Autoplay = "false",
}) {
  return (
    <>
      <div className="rounded-3xl h-full">
        <Swiper
          slidesPerView={SlidesPerView}
          navigation={false}
          pagination={{ clickable: true }}
          followFinger={true}
          modules={[Navigation, Pagination]}
          autoplay={Autoplay}
          loop={false}
          spaceBetween={30}
        >
          {cardData?.map((item, index) => (
            <SwiperSlide key={item.id ? item?.id : index}>
              {/* <div class="w-full p-6 border rounded-lg shadow h-[100vh]" style={{ background: `url(${item.cardBGImageUrl}), ${item.cardBGColor}`, backgroundSize: 'cover' }}> */}
              <SectionWrapperNew
                id={"ni"}
                style={{
                  background: `url(${item?.cardBGImageUrl}) ${item.cardBGColor}`,
                  backgroundSize: "cover",
                
                }}
              >
                <div className="container mx-auto py-32 rounded-3xl">
                  <SectionHeading
                    Heading={item.cardHeading}
                    Desc={item.cardDesc}
                    Color={item.cardTextColor}
                    center={false}
                    headingContainerWidth={'w-1/2'}
                  ></SectionHeading>
                  <Link
                    href={item.readMoreUrl}
                    className="w-full md:w-[20vw] text-neutral-white text-label-01 leading-label-01 flex items-center bg-primary-400 hover:bg-primary-500 font-medium rounded-full px-8 py-4 mb-2 group"
                  >
                    Read More
                    <div className="transition-transform duration-300 ease-in-out transform group-hover:translate-x-2">
                      <Icon
                        path={mdiArrowTopRight}
                        style={{
                          marginLeft: "0.5em",
                          transform: "rotate(45deg)",
                          marginTop: "1px",
                        }}
                        size={1}
                      />
                    </div>
                  </Link>
                </div>
              </SectionWrapperNew>
              {/* </div> */}

              {/* <CommonCard Item={item}></CommonCard> */}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

export default BlogSliderSection;
