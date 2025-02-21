import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import {partnerLogo} from "./data.js";
import Slider from "@/components/Slider";


function PartnerLogo(){
    return(
        <>
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
                <div className="flex justify-center items-center">
                <Image
                  src={item}
                  width={130}
                  height={130}
                  alt="Logos"
                  className="brightness-0 hover:brightness-100 mb-4 cursor-pointer"/>
                    </div>
              
              </SwiperSlide>
            ))}
          </Slider>
        </div>
    </div>
        </>
    )
}



export default PartnerLogo;