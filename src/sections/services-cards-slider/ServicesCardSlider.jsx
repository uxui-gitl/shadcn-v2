import React, { useState } from "react";
import ServicesCard from "./ServicesCard";
import { Swiper, SwiperSlide } from "swiper/react";
import SectionWrapper from "@/components/SectionWrapper";
import SectionHeading from "@/components/SectionHeading";
import { Pagination } from "swiper/modules";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const CardSlider = ({cardData, heading, desc, color}) => {
  const [activeIndex, setActiveIndex] = useState(0); // Set the second card (index 1) to be open by default
  const [hoveredIndex, setHoveredIndex] = useState(null); // New state for hovered card

  return (
    <SectionWrapper BGColor="bg-neutral-white">
      <div className="container mx-auto py-32">
        <SectionHeading Heading={heading} Desc={desc} Color={color} headingContainerWidth="w-1/2"/>
        <Swiper
          spaceBetween={16}
          slidesPerView={"auto"}
          centeredSlides={false}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className="w-full"
        >
          {cardData.map((card, index) => (
            <SwiperSlide key={index} className="!w-auto">
              <ServicesCard
                title={card.title}
                hoverTitle={card.hoverTitle}
                description={card.description}
                content={card.content}
                imageUrl={card.imageURL}
                index={index} // Pass the index here
                cardDataLength = {cardData.length}
                isActive={activeIndex === index} // Set active state based on index
                isHovered={hoveredIndex === index} // Check if the card is currently hovered
                onHover={(isHovered) => {
                  if (isHovered) {
                    setHoveredIndex(index); // Set hovered index on hover
                    setActiveIndex(index); // Optionally update active index
                  } else {
                    setHoveredIndex(null); // Reset hovered index when leaving
                  }
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </SectionWrapper>
  );
};

export default CardSlider;
