import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Children } from "react";

function Slider({ slidesPerView = 1, sliderAutoplay = true, sliderLoop = true, cardData = [], Children }) {
    return (
        <>
            <Swiper
                slidesPerView={slidesPerView}
                navigation={false}
                pagination={{ type: "bullets", clickable: true }}
                autoplay={sliderAutoplay}
                loop={sliderLoop}
                spaceBetween={30}
            >
                    <>
                            {Children}
                    </>

            </Swiper>
        </>
    )
}


export default Slider;