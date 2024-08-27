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
import CommonCard from './../../components/CommonCard';

const SolutionSliderCloud = ({ setHeading, setDesc, setColor }) => {
  

  const advanceSolutionCardData = [
    {
      id: 1,
      BGImageUrl: '',
      CardBGColor: '#EFE9FB',
      CardTitle: "Machine Learning",
      CardIconUrl: '',
      CardHeading: 'Automated Pattern Recognition',
      CardDesc: '',
      isArrow: false,
      additionalData:[
        {id:'1', data:'manoj',},
        {id:'2', data:'anish',},
        {id:'3', data:'kalu',},

      ]
    },
    {
      id: 2,
      BGImageUrl: '',
      CardBGColor: '#EFE9FB',
      CardTitle: "Artificial Intelligence",
      CardIconUrl: '',
      CardHeading: 'Cognitive Computing Solutions',
      CardDesc: 'Ensure improvement in customer experiences, facilitating acceleration and optimized business operations.',
      isArrow: false,
    },
    {
      id: 3,
      BGImageUrl: '',
      CardBGColor: '#EFE9FB',
      CardTitle: "Robotic Process Automation",
      CardIconUrl: '',
      CardHeading: 'Efficient Task Automation',
      CardDesc: 'Minimize time-consuming repetitive tasks and dedicate more time to strategic initiatives',
      isArrow: false,
    },
    {
      id: 4,
      BGImageUrl: '',
      CardBGColor: '#EFE9FB',
      CardTitle: "IIoT",
      CardIconUrl: '',
      CardHeading: 'Asset Optimization and Uptime',
      CardDesc: 'Optimize industrial operations with real-time machine performance data and predictive maintenance insights from our IoT services.',
      isArrow: false,
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
                  <CommonCard Item={item}></CommonCard>
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
