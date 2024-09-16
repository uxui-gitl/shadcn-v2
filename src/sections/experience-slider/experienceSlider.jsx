import React from "react";
import Styles from "./experienceSlider.module.css";
import SectionWrapper from "@/components/SectionWrapper";
import OutlinedButtonWithArrow from "@/components/ui/buttons/OutlinedButtonWithArrow";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { jetBrains_mono } from "../../app/fonts";

const ExperienceSlider = () => {
  const casestudy = [
    {
      imageURL: "",
      title: "Our Experience",
      heading: "Multiyear Cybersecurity Program",
      description: "",
      link: "",
      color: "#FFFFFF",
      bgCardColor: "#2B1624",
    },
    {
      imageURL: "",
      title: "",
      heading: "",
      description:
        "Years of Managing Global customer for Data Security",
      link: "",
      color: "#000",
      bgCardColor: "#FCE6F4",
      CounterValue: "90",
    },
    {
        imageURL: "",
        title: "",
        heading: "",
        description:
          "Years of Managing Global customer for Data Security",
        link: "",
        color: "#000",
        bgCardColor: "#FCE6F4",
        CounterValue: "10k",
      },

      {
        imageURL: "",
        title: "",
        heading: "SQL, DB2, Informix, MySQL",
        description:
          "",
        link: "",
        color: "#FFF",
        bgCardColor: "#9F0165",
        CounterValue: "",
      },
      {
        imageURL: "",
        title: "",
        heading: "",
        description:
          "99% uptime in saving man-days performance and 22% of capex saving after migrating on-premises ERP servers to the Azure cloud environment",
        link: "",
        color: "#000",
        bgCardColor: "#FCE6F4",
        CounterValue: "100k",
      },
      {
        imageURL: "",
        title: "",
        heading: "",
        description:
          "99% uptime in saving man-days performance and 22% of capex saving after migrating on-premises ERP servers to the Azure cloud environment",
        link: "",
        color: "#000",
        bgCardColor: "#FCE6F4",
        CounterValue: "1000k",
      },
  
  
  

   
  ];

  return (
    <SectionWrapper BGColor={"#fff"}>
      <div className="md:container mx-auto">
        <Swiper
          slidesPerView={3}
          navigation={false}
          pagination={{ type: "bullets", clickable: true }}
          autoplay={false}
          loop={false}
          spaceBetween={30}
        >
          {casestudy.map((caseItem, index) => (
            <SwiperSlide key={index}>
              <div
                className="relative w-full h-full rounded-3xl px-16 py-8"
                style={{
                  backgroundImage: caseItem.imageURL
                    ? `url(${caseItem.imageURL})`
                    : "none",
                  backgroundColor: caseItem.bgCardColor,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  color: caseItem.color,
                  minHeight: "324px", // Set the minimum height for uniformity
                }}
              >
                {caseItem.title && (
                  <h3 className="text-base font-semibold mb-4 lg:mb-12">
                    {caseItem.title}
                  </h3>
                )}
               
               {caseItem.CounterValue&&<h3
                  className={`${jetBrains_mono.className} relative  text-[72px]  text-[#000] font-bold mb-8 leading-none`}
                >
                  {caseItem.CounterValue}
                  <span className={Styles.superscript}>+</span>
                </h3>
} 
                <h1 className="text-3xl lg:text-5xl font-medium mb-4 lg:mb-6">
                  {caseItem.heading}
                </h1>
                <p className="mb-4">{caseItem.description}</p>
                <div
                  className={`absolute bottom-4 right-4 ${
                    caseItem.link ? "" : "invisible"
                  }`}
                >
                  <OutlinedButtonWithArrow size={56} />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </SectionWrapper>
  );
};

export default ExperienceSlider;
