"use client";
// system import
import Image from "next/image";
import React, { useRef, useEffect, useState } from "react";
import Slider from "@/components/Slider";
import CaseStudiesSection from "@/sections/case-studies/CaseStudiesSection";
import BlogSection from "@/sections/blog/BlogSection";
import ReviewSliderSection from "@/sections/reviewSlider/ReviewSliderSection";
import TransformBusinessForm from "@/sections/transformBusinessFrom/TransformBusinessFromSection";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";

import { motion } from "framer-motion";
import OutlinedButtonWithArrow from "@/components/ui/buttons/OutlinedButtonWithArrow";
import Dialog from "@/components/Dialog";
import Link from "next/link";
import Icon from "@mdi/react";
import NewNavBar from "@/components/NewNavBar";
import { mdiArrowTopRight } from "@mdi/js";
import {
  items,
  items2,
  items3,
  items4,
  partnerLogo,
  CASE_STUDIES_DATA,
  TESTIMONIAL_DATA,
  sliderData,

} from "./pageData.js"
import { useInView } from "react-intersection-observer";


// 
import ActSection from '@/sections/new/actSection/ActSection';
import  HubExperties from '@/sections/new/hubExperties/HubExperties';
import Capabilities from '@/Sections/new/capabilities/Capabilities';
import ParallaxVideo from '@/Sections/new/parallaxVideo/ParallaxVideo';


export default function Home() {
  const { ref, inView } = useInView({
    threshold: 0.1, // Trigger when 10% of the component is in view
  });

  const blogImageUrl = "/home/images/blogBg.webp";

  const [sliderImageUrl, setSliderImageUrl] = useState("");
  const [index, setIndex] = useState(0);
  const [index2, setIndex2] = useState(0);
  

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 5000);
    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [items.length]);

  // banner Hover ReadMore
  function handleReadMoreHover(item: any, isFilled: boolean) {
    if (isFilled) {
      setSliderImageUrl(item.url);
    } else {
      setSliderImageUrl("");
    }
  }
  // end banner Hover ReadMore

  return (
    <>
      {/* navbar */}
      <NewNavBar />
      {/* banner slider */}
      <div className="slider-wrapper bg-black h-[100vh]">
        <div className="video relative h-full">
          {/* Background Video */}
          <video
            src="/home/1.mp4"
            autoPlay
            loop
            muted
            className="absolute inset-0 w-full h-full object-cover"
          ></video>

          {/* Overlay Image */}
          <div
            className={`absolute inset-0 transition duration-700 ${sliderImageUrl
              ? "opacity-100 ease-in-out"
              : "opacity-0 ease-in-out"
              }`}
            style={{
              backgroundImage: `url(${sliderImageUrl})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>

          {/* Headline */}
          <div className="container headline-position mx-auto text-display-02 text-white absolute top-[20%] left-0 right-0 text-left ">
            Delivering Business
            <br /> value with
            {items4[index] && (
              <motion.div
                key={`item4-${items4[index].id}`}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ ease: "easeInOut", duration: 0.5, delay: 0.2 }}
                className="inline-block"
              >
                <span className="text-neutral-white md:ml-2">
                  {items4[index].content}.
                </span>
              </motion.div>
            )}
          </div>

          {/* Horizontal Line */}
          <hr className="absolute top-[50vh] md:top-[55vh] left-0 right-0 h-px bg-white bg-opacity-20 border-0"></hr>

          {/* Slider Section */}
          <div className="container mx-auto absolute w-full left-0 right-0 bottom-[10vh] ">
            <div className="flex flex-wrap justify-between items-center">
              {/* Slider Content */}
              <div className="w-full md:w-[80%]">
                <Swiper
                  slidesPerView={1}
                  navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                  }}
                  autoplay={false}
                  loop={true}
                  spaceBetween={30}
                  modules={[Navigation]}
                >
                  {sliderData?.map((item, index) => (
                    <SwiperSlide key={item.id}>
                      <div className="w-full py-6 md:py-2 xl:py-2 bg-transparent rounded-3xl">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <motion.div
                            ref={ref}
                            whileInView={{ y: 0, opacity: 1 }}
                            initial={{ y: 100, opacity: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                          >
                            <div className="text-heading-04 font-bold text-neutral-white">
                              {item.title}
                            </div>
                          </motion.div>
                          <motion.div
                            className="col-span-2"
                            ref={ref}
                            whileInView={{ y: 0, opacity: 1 }}
                            initial={{ y: 100, opacity: 0 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                          >
                            <p className="text-body-01 text-white mb-6 md:mb-4">
                              {item.desc}
                            </p>
                            <button
                              type="button"
                              className="text-body-01 text-neutral-white border border-white  hover:bg-neutral-white hover:text-primary-900 rounded-full px-4 py-2"
                              onMouseOver={() =>
                                handleReadMoreHover(item, true)
                              }
                              onMouseOut={() =>
                                handleReadMoreHover(item, false)
                              }
                            >
                              Read more
                            </button>
                          </motion.div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              {/* Slider Navigation Buttons */}
              <div className="w-full absolute left-[-1rem] top-[1rem] md:w-[20%] md:relative md:left-0 md:right-0 flex justify-end space-x-4 md:p-6">
                <button className="swiper-button-prev flex items-center justify-center !left-0 w-14 h-14">
                  <Image
                    src="/homeNew/btn-arrows-left.svg"
                    alt="Prev"
                    width={56}
                    height={56}
                  />
                </button>
                <button className="swiper-button-next flex items-center justify-center w-14 h-14">
                  <Image
                    src="/homeNew/btn-arrows-right.svg"
                    alt="Next"
                    width={56}
                    height={56}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* [partner Section] */}

      <div className="bg-white relative z-10">
        <div className="container mx-auto pt-40 relative">
          <div
            className="absolute"
            style={{
              left: "50%",
              transform: "translateX(-50%)",
              backgroundSize: "cover",
              background: "url('/homeNew/Union.svg')",
              backgroundRepeat: "no-repeat",
              width: "320px",
              height: "-webkit-fill-available",
              top: "-77px",
              overflow: "hidden",
            }}
          >
            <Image
              className="absolute rotating"
              style={{
                left: "30%",
                transform: "translateX(-50%)",
                top: "11px",
              }}
              src={"/homeNew/partner-circle.svg"}
              width={130}
              height={130}
              alt="asdjn"
            />
          </div>
          <Slider slidesPerView={6} autoplay={true}>
            {partnerLogo?.map((item, index) => (
              <SwiperSlide key={index}>
                <Image
                  src={item}
                  width={130}
                  height={130}
                  alt="Logos"
                  className="brightness-0 hover:brightness-100 mb-6 cursor-pointer"
                />
              </SwiperSlide>
            ))}
          </Slider>
        </div>
      </div>

      {/* end partner Section */}
      <hr className="h-px bg-[#d3d3d3] border-1" />
      <div
        className=" relative z-2 bg-white"
        style={{
          borderBottomLeftRadius: "24px",
          borderBottomRightRadius: "24px",
        }}
      >
        <div className="container mx-auto py-8">
          <p className="text-body-01 text-neutral-dark-grey w-[214px] mb-5 md:mb-20">
            Strategic Digital Transformation across Industries
          </p>
          <div className="text-heading-02">
            Transform your{" "}
            {items[index] && (
              <motion.div
                key={`item-${items[index].id}`}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ ease: "easeInOut", duration: 0.5, delay: 0.1 }}
                style={{ display: "inline-block" }}
              >
                <span className="text-[#5F22D9] md:ml-2">
                  {items[index].content}
                </span>
              </motion.div>
            )}
            <br />
            business with{" "}
            {items2[index] && (
              <motion.div
                key={`item2-${items2[index].id}`}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ ease: "easeInOut", duration: 0.5, delay: 0.3 }}
                style={{ display: "inline-block" }}
              >
                <span className="text-[#5F22D9] md:ml-2">
                  {items2[index].content}
                </span>
              </motion.div>
            )}
            <br />
            enhancing{" "}
            {items3[index] && (
              <motion.div
                key={`item3-${items3[index].id}`}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ ease: "easeInOut", duration: 0.5, delay: 0.4 }}
                style={{ display: "inline-block" }}
              >
                <span className="text-[#5F22D9]">{items3[index].content}.</span>
              </motion.div>
            )}
          </div>
        </div>
      </div>
      <ParallaxVideo />
      <ActSection />
      <HubExperties />
      <Capabilities />
      

      {/* @ts-ignore */}
      {/* <CaseStudiesSection
        casestudy={CASE_STUDIES_DATA}
        csLayout={"5"}
        bgColor={"bg-primary-900"}
      /> */}

      <BlogSection
        ID={"blog"}
        blogImageUrl={"/home/images/blogBg.webp"}
        Heading={"Step Up in Your Professional Journey"}
        Desc={
          "Work with talented professionals who inspire and support each other. Join our dynamic team and embark on a rewarding career journey that shapes your future. "
        }
        Color={"text-neutral-white"}
      >
        <div className="z-50 flex gap-4 flex-col items-left align-middle justify-left sm:flex-row sm:justify-start md:justify-start mt-6">
          <Link
            href={`/careers/why-join-us`}
            className="text-neutral-white text-body-01 flex items-center bg-primary-400 hover:bg-primary-500 rounded-full px-8 py-3 mb-2 group"
          >
            {"Why Godrej Infotech"}
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
          <Link
            href={"careers/we-are-hiring"}
            className="text-neutral-white text-body-01 flex items-center bg-primary-400 hover:bg-primary-500 rounded-full px-8 py-3 mb-2 group"
          >
            {"Join Our Team"}
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
      </BlogSection>
      {/* @ts-ignore */}
      <ReviewSliderSection
        ID={"TESTIMONIALS"}
        Heading={"Delighted Customers Share Their Successful Experiences"}
        Desc={""}
        Color="text-neutral-white"
        CardDataList={TESTIMONIAL_DATA}
        BGColor="bg-primary-900"
        SectionHeadingMaxWidth={"w-1/2"}
        setHeadingLayout={'left'}
      ></ReviewSliderSection>

      <TransformBusinessForm
        Title={"Transform your Business with Us"}
        Desc={
          "Let's discuss how our ACT (Automation, Cloud and Digital Transformation) solutions can help you with rapid growth."
        }
      ></TransformBusinessForm>

      {/* <Footer /> */}

    </>
  );
}

