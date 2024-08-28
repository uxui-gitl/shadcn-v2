import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import Image from "next/image";

const ServicesCard = ({
  title,
  hoverTitle,
  description,
  imageUrl,
  isActive,
  isHovered,
  onHover,
  index,
}) => {
  const cardRef = useRef(null);
  const imageRef = useRef(null);
  const titleRef = useRef(null);
  const hoverTitleRef = useRef(null);
  const descRef = useRef(null);

  useEffect(() => {
    const duration = 0.4;

    // GSAP animation for card width
    gsap.to(cardRef.current, {
      width: isActive ? "648px" : "156",
      duration: duration,
      ease: "power2.inOut",
    });

    // Common properties for active and hovered states
    const commonProps = {
      duration: duration,
      ease: "power2.inOut",
    };

    // Check if the card is active or hovered
    if (isActive || isHovered) {
      // Animate image in and hide title
      gsap.to(imageRef.current, { x: 0, opacity: 1, ...commonProps });
      gsap.to(titleRef.current, { y: "-20px", opacity: 0, ...commonProps });

      // Animate hover title and description in after image animation
      gsap.to(hoverTitleRef.current, { y: "0", opacity: 1, delay: duration, ...commonProps });
      gsap.to(descRef.current, { y: "0", opacity: 1, delay: duration, ...commonProps });
    } else {
      // Reset animations when not active or hovered
      gsap.to(imageRef.current, { x: "100%", opacity: 0, ...commonProps }); // Start from right side
      gsap.to(titleRef.current, { y: "0px", opacity: 1, ...commonProps });

      // Hide hover title and description
      gsap.to(hoverTitleRef.current, { y: "20px", opacity: 0, duration: duration, ...commonProps });
      gsap.to(descRef.current, { y: "20px", opacity: 0, duration: duration, ...commonProps });
    }
  }, [isActive, isHovered]);

  return (
    <div
      ref={cardRef}
      className={`relative h-[424px] rounded-3xl shadow-lg overflow-hidden flex transition-colors duration-400 ease-in-out ${
        isActive ? "bg-[#2B1624]" : "bg-[#FCE6F4]"
      }`}
      onMouseEnter={() => onHover(true)}
      onMouseLeave={() => onHover(false)}
    >
      {/* Numbered Circle */}
      <div className="absolute top-4 left-4 flex items-center justify-center w-8 h-8 bg-gray-300 rounded-full text-black text-base">
        {String(index + 1).padStart(2, "0")}
      </div>

      {!isActive && (
        <div className="flex-1 flex flex-col justify-end p-8 h-full">
          <h2 ref={titleRef} className="text-[20px] font-medium">
            {title}
          </h2>
        </div>
      )}

      {isActive && (
        <div className="w-1/2 flex-1 flex flex-col justify-end p-8 h-full text-white">
          <h2
            ref={hoverTitleRef}
            className="text-[20px] font-medium py-8 translate-y-5 opacity-0"
          >
            {hoverTitle}
          </h2>
          <p
            ref={descRef}
            className="text-[16px] translate-y-5 opacity-0"
          >
            {description}
          </p>
        </div>
      )}

      {/* Image */}
      <div
        ref={imageRef}
        className="w-1/2 h-full overflow-hidden opacity-0 transform translate-x-[100%]" // Start from 100%
      >
        <Image
          src={imageUrl}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-l-3xl"
        />
      </div>
    </div>
  );
};

export default ServicesCard;
