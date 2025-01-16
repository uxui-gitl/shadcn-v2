import React, { useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import SectionWrapperNew from "@/components/SectionWrapperNew";
import Slider from "@/components/Slider";
import ActCard from '@/components/cards/ActCard'
import Dialog from "@/components/Dialog";
import { actCardData } from "./data.js"

function ActSection() {
  const [showModal1, setshowModal1] = useState(false);
  const [businessItem, setBusinessItem] = useState(actCardData[0]);

  function handleBusinessCardClick(modal, item) {
    setshowModal1(modal);
    setBusinessItem(item);
  }
  return (
    <>
      <SectionWrapperNew
        sectionHeading={"ACT based Approach for Leading Future Ready Business"}
        sectionDesc={"Value - Driven Solutions for Tomorrow's Opportunities"}
        sectionTextColor="text-primary-900"
        sectionDescColor="text-neutral-darkest-grey"
        sectionHeadingLayout="horizontal"
        title="Business Transformation Drive"
        bgColor={"bg-primary-600"}
        setTop={false}
        style={{
          backgroundColor: "white",
          position: "relative",
          zIndex: "2",
        }}
      >
        <Slider slidesPerView={3}>
          {actCardData.map((item, index) => (
            <SwiperSlide key={index}>
              <ActCard item={item} onclick={handleBusinessCardClick}/>
            </SwiperSlide>
          ))}
        </Slider>
      </SectionWrapperNew>

      {/* modal */}
      <Dialog
        shouldShow={showModal1}
        onRequestClose={() => {
          setshowModal1((prev) => !prev);
        }}
        title={businessItem?.cardHeading}
      >
        <div className="py-2">
          <div dangerouslySetInnerHTML={{ __html: businessItem?.rawData }} />
        </div>
      </Dialog>
    </>
  )
}


export default ActSection;