"use client";
import SectionWrapper from "@/components/SectionWrapper";
import SectionHeading from "@/components/SectionHeading";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import style from "./reviewSliderSection.module.css";
import SectionWrapperNew from "@/components/SectionWrapperNew";
function ReviewSliderSection({
  pageID,
  ID,
  SectionImageUrl,
  Heading,
  Desc,
  SectionHeadingMaxWidth,
  SlidesPerView = "1",
  Autoplay = "false",
  CardDataList = [],
  Color = "#000",
  BGColor = "",
  setHeadingLayout,
}) {
  const swiperNextBtn = {
    position: "absolute",
    left: "50%",
    top: "15%",
    color: "#fff",
    border: "1px solid #d3d3d3",
    borderRadius: "50%",
    padding: "36px",
  };

  const swiperPreBtn = {
    position: "absolute",
    left: "50%",
    top: "40%",
    color: "#fff",
    border: "1px solid #d3d3d3",
    borderRadius: "50%",
    padding: "36px",
  };

  return (
    <>
      <SectionWrapperNew
        id={ID}
        sectionHeading={Heading}
        bgColor={BGColor}
        sectionHeadingLayout={setHeadingLayout}
        style={{
          backgroundImage: `url(${SectionImageUrl})`,
          backgroundSize: "cover",
          borderBottomLeftRadius: "0px",
          borderBottomRightRadius: "0px",
        }}
      >
        <div className="">
          <div className="flex mt-10 md:mt-20 min-h-[40vh]">
            <div className="relative hidden md:inline w-[30%]">
              <div
                className={`swiper-button-next`}
                style={{
                  position: "absolute",
                  left: "50%",
                  top: "12%",
                  width: "80px",
                  height: "80px",
                }}
              >
                <img src="/icons/btn-arrows.svg" alt="icon" />
              </div>
              <div
                className={`swiper-button-prev`}
                style={{
                  position: "absolute",
                  left: "50%",
                  top: "30%",
                  width: "80px",
                  height: "80px",
                  transform: "rotate(180deg)",
                }}
              >
                <img src="/icons/btn-arrows.svg" alt="icon" />
              </div>
            </div>

            <div className="w-full md:w-[70%]">
              <Swiper
                slidesPerView={SlidesPerView}
                navigation={{
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                }}
                pagination={true}
                autoplay={Autoplay}
                loop={true}
                spaceBetween={30}
                modules={[Navigation, Pagination]}
              >
                {CardDataList?.map((item, index) => (
                  <SwiperSlide key={item.id ? item?.id : index}>
                    <div className="w-full bg-transparent rounded-3xl">
                      <div className="text-neutral-white text-heading-02 font-light  md:w-2/3">
                        {item.cardHeading}
                      </div>
                      <div
                        className="text-neutral-white text-paragraph-01 mt-4"
                        dangerouslySetInnerHTML={{ __html: item.cardDesc }}
                      />

                      <div className="text-neutral-white text-body-01 mt-4">
                        <div className="text-body-01 pb-2">
                          {item.designation}
                        </div>
                        <div>{item.companyName}</div>
                      </div>
                    </div>

                    {/* <CommonCard Item={item} setpageID={pageID}></CommonCard> */}
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </SectionWrapperNew>
    </>
  );
}

export default ReviewSliderSection;
