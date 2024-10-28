import React, { useState } from "react";
import Image from "next/image";
import OutlinedButtonWithArrow from "./ui/buttons/OutlinedButtonWithArrow";
import style from "@/components/style/commonCardTwo.module.css";
import { useRouter } from 'next/navigation'

function CommonCardTwo({ Item }) {
  const router = useRouter();

  const {
    cardBGImageUrl = "",
    cardBGColor = "",
    cardTextColor = "#000",
    cardTitle = "",
    cardHeading = "",
    isArrow = true,
    arrowColor = "#FFF",
    additionalData="",
    pageURL='',
  } = Item;

  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="overflow-hidden max-h-[424px] rounded-3xl" 
    onMouseEnter={() => setIsHovered(true)} // Set hovered state on mouse enter
      onMouseLeave={() => setIsHovered(false)} // Reset hovered state on mouse leave
      >
    <div
      className="relative shadow flex flex-col justify-between overflow-hidden" 
      style={{
        backgroundColor: cardBGColor,
        color: cardTextColor,
        minHeight: "424px",
        width: "100%",
      }}
      
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
      <div className="p-10 flex-grow relative z-1"> {/* Relative positioning for stacking context */}
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
         {pageURL && (<OutlinedButtonWithArrow arrowColor={arrowColor} size={48}  onClick={() => router.push(pageURL)} target='_blank' />)} 
        </div>
      )}
   </div>

   {additionalData && <div className={`min-h-[424px] px-5 py-10 duration-300 rounded-3xl bg-[#FCE6F4] z-20 ${isHovered ? '-translate-y-full' : 'translate-y-full'}`}>
        <p dangerouslySetInnerHTML={{ __html: additionalData }} />
        </div>}
    </div>
  );
}

export default CommonCardTwo;
