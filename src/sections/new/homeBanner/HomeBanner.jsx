'use client';
import Image from "next/image";
import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { sliderData, items4 } from "./data.js";
import { Swiper, SwiperSlide } from "swiper/react";
import Slider from "@/components/Slider";
import { useInView } from "react-intersection-observer";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";

function HomeBanner() {
    const { ref, inView } = useInView({
        threshold: 0.1, // Trigger when 10% of the component is in view
    });
    const [index, setIndex] = useState(0);
    const [sliderImageUrl, setSliderImageUrl] = useState("");

    function handleReadMoreHover(item, isFilled) {
        if (isFilled) {
            setSliderImageUrl(item.url);
        } else {
            setSliderImageUrl("");
        }
    }

        useEffect(() => {
            const interval = setInterval(() => {
                setIndex((prevIndex) => (prevIndex + 1) % items4.length);
            }, 5000);
            return () => clearInterval(interval); // Cleanup interval on unmount
        }, [items4.length]);

    return (
        <>
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
        </>
    )
}

export default HomeBanner;