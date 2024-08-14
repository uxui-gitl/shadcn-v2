import React from "react";
import "./solutionSliderCloud.module.css";
import SectionWrapper from "../../components/SectionWrapper";
import SectionHeading from "../../components/SectionHeading";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import CardWidthBackground from "@/components/CardWithBackground";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const SolutionSliderCloud = ({ setHeading, setDesc, setColor }) => {
  const advanceSolutionCardData = [
    {
      id: "1",
      CardTitle: "Machine Learning",
      icon: "",
      Heading: "Core Infrastructure and Virtualization",
      Desc: "",
      BGColor: "#EFE9FB",
    },
    {
      id: "2",
      CardTitle: "Machine Learning",
      icon: "",
      Heading: "Advanced Cloud Infrastructure",
      Desc: "",
      BGColor: "#EFE9FB",
    },
    {
      id: "3",
      CardTitle: "Machine Learning",
      icon: "",
      Heading: "Advanced M365",
      Desc: "",
      BGColor: "#EFE9FB",
    },
    {
      id: "4",
      CardTitle: "Business Application",
      icon: "",
      Heading: "Automating Tasks & Boost Efficiency",
      Desc: "",
      BGColor: "#EFE9FB",
    },
  ];

  return (
    <>
      <SectionWrapper BGColor="#FFF">
        <section className="container mx-auto">
          <SectionHeading
            Heading={setHeading}
            Color={setColor}
            Desc={setDesc}
          ></SectionHeading>
          <div className="mt-24">
            <Swiper
              slidesPerView={3}
              navigation={false}
              pagination={{ type: "bullets", clickable: true }}
              autoplay={false}
              loop={true}
              modules={[Autoplay, Navigation]}
            >
              {advanceSolutionCardData.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="h-full w-full absolute left-0 top-0"></div>
                  <CardWidthBackground Item={item} BGColor="#EFE9FB"></CardWidthBackground>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
      </SectionWrapper>
    </>
  );
};

export default SolutionSliderCloud;
