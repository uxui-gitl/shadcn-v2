import React, { useRef, useEffect, useState, Children } from "react";
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

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const duration = 0.4;

    // GSAP animation for card width
    gsap.to(cardRef.current, {
      width: isMobile
        ? isActive
          ? "50%" // On mobile, full width when active
          : "100%" // On mobile, reduced width when not active
        : isActive
        ? "648px" // On desktop, 648px when active
        : "156px", // On desktop, 156px when not active
      duration: duration,
      ease: "power2.inOut",
    });

    const commonProps = {
      duration: duration,
      ease: "power2.inOut",
    };

    if (isActive || isHovered) {
      gsap.to(imageRef.current, { x: 0, opacity: 1, ...commonProps });
      gsap.to(titleRef.current, { y: "-20px", opacity: 0, ...commonProps });
      gsap.to(hoverTitleRef.current, {
        y: "0",
        opacity: 1,
        delay: duration,
        ...commonProps,
      });
      gsap.to(descRef.current, {
        y: "0",
        opacity: 1,
        delay: duration,
        ...commonProps,
      });
    } else {
      gsap.to(imageRef.current, { x: "100%", opacity: 0, ...commonProps });
      gsap.to(titleRef.current, { y: "0px", opacity: 1, ...commonProps });
      gsap.to(hoverTitleRef.current, {
        y: "20px",
        opacity: 0,
        duration: duration,
        ...commonProps,
      });
      gsap.to(descRef.current, {
        y: "20px",
        opacity: 0,
        duration: duration,
        ...commonProps,
      });
    }
  }, [isActive, isHovered]);

  return (
    <div>
      {isMobile ? (
        <div
          ref={cardRef}
          className={`relative h-[424px] rounded-3xl overflow-hidden flex transition-colors duration-400 ease-in-out ${
            isActive ? "bg-primary-900" : "bg-secondary-10"
          }`}
          onMouseEnter={() => onHover(true)}
          onMouseLeave={() => onHover(false)}
        >
          <div className="absolute top-4 left-4 flex items-center justify-center w-6 h-6 bg-neutral-mid-grey rounded-full text-primary-900 text-body-01 leading-sm-body-01">
            {String(index + 1).padStart(2, "0")}
          </div>

          {!isActive && (
            <div className="flex-1 flex flex-col justify-end p-4 h-full">
              <h2
                ref={titleRef}
                className="text-paragraph-02 leading-paragraph-02 font-medium"
              >
                {title}
              </h2>
            </div>
          )}

          {isActive && (
            <div className="w-1/2 flex-1 flex flex-col justify-end p-5 h-full text-neutral-white">
              <h2
                ref={hoverTitleRef}
                className="text-heading-03 font-medium py-5 translate-y-5 opacity-0"
              >
                {hoverTitle}
              </h2>
              <p
                ref={descRef}
                className="text-base translate-y-5 opacity-0"
                dangerouslySetInnerHTML={{ __html: description }}
              ></p>
            </div>
          )}

          <div
            ref={imageRef}
            className="w-1/2 h-full overflow-hidden opacity-0 transform translate-x-[100%]"
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
      
      ) : (
        <div
          ref={cardRef}
          className={`relative h-[424px] rounded-3xl overflow-hidden flex transition-colors duration-400 ease-in-out ${
            isActive ? "bg-primary-900" : "bg-secondary-10"
          }`}
          onMouseEnter={() => onHover(true)}
          onMouseLeave={() => onHover(false)}
        >
          <div className="absolute top-4 left-4 flex items-center justify-center w-6 h-6 bg-neutral-mid-grey rounded-full text-primary-900 text-body-01 leading-sm-body-01">
            {String(index + 1).padStart(2, "0")}
          </div>

          {!isActive && (
            <div className="flex-1 flex flex-col justify-end p-4 h-full">
              <h2
                ref={titleRef}
                className="text-paragraph-02 leading-paragraph-02 font-medium"
              >
                {title}
              </h2>
            </div>
          )}

          {isActive && (
            <div className="w-1/2 flex-1 flex flex-col justify-end p-5 h-full text-neutral-white">
              <h2
                ref={hoverTitleRef}
                className="text-heading-03 font-medium py-5 translate-y-5 opacity-0"
              >
                {hoverTitle}
              </h2>
              <p
                ref={descRef}
                className="text-base translate-y-5 opacity-0"
                dangerouslySetInnerHTML={{ __html: description }}
              ></p>
            </div>
          )}

          <div
            ref={imageRef}
            className="w-1/2 h-full overflow-hidden opacity-0 transform translate-x-[100%]"
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
      )}
    </div>
  );
};

export default ServicesCard;
