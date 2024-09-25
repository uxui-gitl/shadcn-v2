import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';

    function Slider({children, slidesPerView=3}) {

    return (
        <>
            <Swiper
                slidesPerView={1.1}
                navigation={false}
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                autoplay={true}
                loop={false}
                spaceBetween={16}
                breakpoints={{
                    640: {
                        slidesPerView: 1.1,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 24,
                    },
                    1024: {
                        slidesPerView: slidesPerView,
                        spaceBetween: 32,
                    },
                }}
            >
                {children}
               
            </Swiper>
        </>
    )
}

export default Slider;