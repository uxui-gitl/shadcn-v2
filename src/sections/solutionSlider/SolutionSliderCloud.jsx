import React from "react";
import "./solutionSliderCloud.module.css";
import SectionWrapper from "../../components/SectionWrapper";
import SectionHeading from "../../components/SectionHeading";
import SolutionSliderCloudCards from "../../components/SolutionSliderCloudCards";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const SolutionSliderCloud = ({ setHeading, setDesc, setColor }) => {
  

  const SOLUTION_CARD_DATA = [
    
    {
      id: "1",
      label: "Machine Learning",
      heading: "Core Infrastructure and Virtualization",
      subheading: "Core Infrastructure and Virtualization",
      body: "",
      List: [],
      frontIconURL:"/CloudStackServices/icons/Solution/Icon.svg",
      ctaIconURL: "",
      cardBGColor:'#EFE9FB',
      cardHoverColor:'#F3F0FA',
      cardBGImageURL: '/CloudStackServices/background/background-card.jpg',
    },
    {
      id: "2",
      label: "Machine Learning",
      heading: "Advanced Cloud Infrastructure",
      subheading: "Core Infrastructure and VirtualizatioCoreCoreCore Infrastructure and VirtualizatioCoreCoreCore Infrastructure and VirtualizatioCoreCore",
      body: "",
      List: [],
      frontIconURL:"/CloudStackServices/icons/Solution/Icon.svg",
      ctaIconURL: "",
      cardBGColor:'#EFE9FB',
      cardHoverColor:'#F3F0FA',
      cardBGImageURL: '/CloudStackServices/background/background-card.jpg',
    },
    {
      id: "3",
      label: "Machine Learning",
      heading: "Advanced <br> M365",
      subheading: "Core Infrastructure and Virtualization",
      body: "",
      List: [],
      frontIconURL:"/CloudStackServices/icons/Solution/Icon.svg",
      ctaIconURL: "",
      cardBGColor:'#EFE9FB',
      cardHoverColor:'#F3F0FA',
      cardBGImageURL: '/CloudStackServices/background/background-card.jpg',
    },
    {
      id: "4",
      label: "Machine Learning",
      heading: "Business Application",
      subheading: "Core Infrastructure and Virtualization",
      body: "",
      List: [],
      frontIconURL:"/CloudStackServices/icons/Solution/Icon.svg",
      ctaIconURL: "",
      cardBGColor:'#EFE9FB',
      cardHoverColor:'#F3F0FA',
      cardBGImageURL: '',
    },
  ];

  return (
    <>
      <SectionWrapper>
        <section className="container mx-auto">
          <SectionHeading
            Heading={setHeading}
            Color={setColor}
            Desc={setDesc}
          ></SectionHeading>
          <div className="mt-24">
            <Swiper
              slidesPerView={1}
              navigation={false}
              pagination={{ type: "bullets", clickable: true }}
              autoplay={false}
              loop={true}
              modules={[Autoplay, Navigation]}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 16,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 24,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 32,
                },
              }}
              
            >
              {advanceSolutionCardData.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="h-full w-full absolute left-0 top-0"></div>
                  {/* <CardWidthBackground Item={item} BGColor="#EFE9FB"></CardWidthBackground> */}
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
