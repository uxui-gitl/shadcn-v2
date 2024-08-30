import React, { useState } from "react";
import Image from "next/image";
import OutlinedButtonWithArrow from "./ui/buttons/OutlinedButtonWithArrow";
import style from "@/components/style/commonCardTwo.module.css";

function CommonCardTwo({ Item }) {
  const {
    cardBGImageUrl = "",
    cardBGColor = "",
    cardTextColor = "#000",
    cardTitle = "",
    cardHeading = "",
    isArrow = true,
    arrowColor = "#FFF",
  } = Item;

  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative rounded-3xl shadow min-h-[424px] flex flex-col justify-between overflow-hidden" 
      style={{
        backgroundColor: cardBGColor,
        color: cardTextColor,
        minHeight: "550px",
        width: "100%",
      }}
      onMouseEnter={() => setIsHovered(true)} // Set hovered state on mouse enter
      onMouseLeave={() => setIsHovered(false)} // Reset hovered state on mouse leave
    >
      {/* Image Container */}
      <div
        className={`absolute inset-0 transition-transform duration-300 ease-in-out ${isHovered ? 'scale-110' : 'scale-100'}`}
      >
        <Image
          src={cardBGImageUrl}
          alt={cardTitle}
          layout="fill" 
          className="object-cover rounded-3xl" 
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent" style={{ height: "33%" }} /> {/* Dark overlay */}

      {/* Content Container */}
      <div className="p-10 flex-grow relative z-10"> {/* Relative positioning for stacking context */}
        {cardTitle && (
          <div className="text-[#E0028E] text-[20px] mb-12">
            {cardTitle}
          </div>
        )}
        {cardHeading && (
          <h5
            className={`text-[28px] leading-[36px] font-semibold ${style.cardHeading}`}
            dangerouslySetInnerHTML={{ __html: cardHeading }}
          />
        )}
      </div>

      {/* Arrow Button */}
      {isArrow && (
        <div className="flex justify-end px-6 py-4">
          <OutlinedButtonWithArrow arrowColor={arrowColor} size={48} />
        </div>
      )}
    </div>
  );
}

export default CommonCardTwo;
