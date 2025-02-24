import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';

    function Slider({children, slidesPerView=3, autoplay=false}) {

        

    return (
        <>
            <Swiper
                slidesPerView={1}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                autoplay={autoplay}
                loop={false}
                spaceBetween={16}
                pagination={{ clickable: true }}
                followFinger={true}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 32,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 32,
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