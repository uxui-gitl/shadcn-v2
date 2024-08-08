import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import curiousPerson from "../../public/upgradeCloud/curiousPerson.png";
import cloud from "../../public/upgradeCloud/cloud.png";
import cloudArrows from "../../public/upgradeCloud/cloudArrows.png";
import Link from "next/link";
import Icon from "@mdi/react";
import { mdiArrowRight } from "@mdi/js";
import { mdiArrowTopRight } from "@mdi/js";
import { mdiDomain } from "@mdi/js";
import { Swiper, SwiperSlide } from "swiper/react";

import SectionHeading from "./SectionHeading";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

const Benefits = ({ ribbon, title, desc, arr, ribbonTxtWhite, children }) => {
  return (
    <>
      <div
        id="Benefits"
        className={`w-full`}
      >
        <div className="text-left  max-w-screen-xl mx-auto grid grid-cols-1 gap-5 sm:grid-cols-2">
          {/* left */}
          <div className=" flex flex-row items-start justify-center relative">
            <div className="">
              <SectionHeading Heading={ribbon} Desc={desc} Color="white"></SectionHeading>
            </div>
            <div className="max-w-max justify-start hidden items-center my-5">
              <Link
                href={"/"}
                className="min-w-max flex bg-[#F5F5F5] py-2 px-10 border-2 border-[#F5F5F5] font-medium text-base text-[#101828] rounded-sm transition-all mb-3 hover:opacity-95 hover:scale-105"
              >
                Let&apos;s Connect
                <Icon
                  path={mdiArrowRight}
                  style={{ marginLeft: "0.5em" }}
                  size={1}
                />
              </Link>
            </div>
          </div>
          {/* right */}
          <div
            className=" min-h-screen max-h-[100vh] overflow-hidden mt-44"
            id="benefits-slide"
          >
            <Swiper
              spaceBetween={30}
              centeredSlides={false}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Autoplay, Pagination]}
              direction={"vertical"}
              mousewheel={{
                invert: true,
              }}
              breakpoints={{
                // when window width is >= 320px
                320: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                // when window width is >= 480px
                480: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
                // when window width is >= 640px
                640: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
              }}
              slidesPerView={'auto'}
              freeMode = {true}
              loop={true}
            >
              {arr.map((item, index) => (
                <SwiperSlide
                  key={index}
                  className="bg-[#ff000000] rounded-3xl text-[#ffffff] max-h-[183px]"
                >

                    <div className="flex px-8 py-8" style={{ border: '1px solid #fff', borderRadius:'24px', minHeight:'193px', maxHeight:'193px'}}>
                      <div className="mr-6">
                        {item.icon !== "" ? (
                          <Image
                            src={`/icon/${item.icon}.svg`}
                            width={100}
                            height={100}
                            alt={item.icon}
                          />
                        ) : (
                          <Icon path={mdiDomain} size={120} />
                        )}
                      </div>
                      <div className="">
                        <p className="text-[26px] font-bold leading-[36px]">
                          {item.title}
                        </p>
                        <p className="text-[24px] font-normal leading-[30px]">
                          {item.cardDesc}
                        </p>
                      </div>

                    </div>

                  {/* /* <div>
                    <div className=" -mr-4 py-4">
                      {item.icon !== "" ? (
                        <Image
                          src={`/icon/${item.icon}.svg`}
                          width="48"
                          height="48"
                          alt={item.icon}
                        />
                      ) : (
                        <Icon path={mdiDomain} size={3} />
                      )}
                    </div>
                    <p className="text-[26px] font-bold leading-[36px]">
                      {item.title}
                    </p>
                    <p className="text-[18px] font-semibold leading-[22px]">
                      {item.cardDesc}
                    </p>
                  </div> */}
                 </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default Benefits;
