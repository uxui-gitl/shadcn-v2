import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import SectionWrapper from "@/components/SectionWrapper";
import SectionHeading from "@/components/SectionHeading";


/**
 * ! Sandeep Rana - 26/08/2024
 * TODO: Need to add smooth animation fadeIn on image change.
 * 
 */

const OurCapabilities = ({
  ACCORDION_DATA,
  setImageBGURL,
  setHeading,
  setDesc,
  setColor,
  setPadding,
  setTextColor,
  setHeadingContainerWidthFull,
  setHeadingLayout,
}) => {
  const [activeIndex, setActiveIndex] = useState(0); // Set the first item as default open
  const [currentImage, setCurrentImage] = useState(
    ACCORDION_DATA[0]?.image || "/default-image.jpg"
  );
  const contentRefs = useRef([]);

  const handleToggle = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    setCurrentImage(
      ACCORDION_DATA[index]?.image ||
        "/data-insights/our-capabilties/img-01.png"
    );
  };

  useEffect(() => {
    contentRefs.current.forEach((el, index) => {
      if (el) {
        if (activeIndex === index) {
          gsap.fromTo(
            el,
            { height: 0 },
            { height: el.scrollHeight, duration: 0.5, ease: "power2.inOut" }
          );
        } else {
          gsap.to(el, { height: 0, duration: 0.5, ease: "power2.inOut" });
        }
      }
    });
  }, [activeIndex]);

  return (
    <SectionWrapper
     
    >
      <div className="container mx-auto py-32">
        <SectionHeading
          Heading={setHeading}
          Desc={setDesc}
          Color={setTextColor}
          layout={setHeadingLayout}
          containerWidthFull={setHeadingContainerWidthFull}
        />
        <div className="flex flex-col md:flex-row gap-8  ">
          {/* Accordion div */}
          <div className="w-full md:w-1/2">
            {ACCORDION_DATA.map((item, index) => (
              <div key={item.id} className="border-b border-neutral-light-grey">
                <button
                  className="flex justify-between items-center w-full py-4 text-left focus:outline-none min-h-[76px] text-paragraph-01 leading-paragraph-01"
                  onClick={() => handleToggle(index)}
                >
                  <span>{item.title}</span>
                  <svg
                    className={`w-5 h-5 transition-transform duration-300 ${
                      activeIndex === index ? "transform rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </button>
                <div
                  ref={(el) => (contentRefs.current[index] = el)}
                  className={`overflow-hidden ${
                    activeIndex === index ? "h-auto" : "h-0"
                  }`}
                  style={{
                    transition: "height 0.5s ease-in-out",
                  }}
                >
                  <div className="text-neutral-dark-grey pt-4 pb-8">
                    <p>{item.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>


          <div
            className="w-full h-full md:w-1/2 rounded-3xl"
            style={{ backgroundColor: "#F2F4F7" }}
          >
            <div className="w-full h-full">
              <Image
                src={currentImage}
                alt="Description of the image"
                layout="responsive"
                width={424}
                height={424}
                className="rounded-3xl object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default OurCapabilities;
