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
      Padding={setPadding}
      style={{
        backgroundImage: `url(${setImageBGURL})`,
        backgroundSize: "cover",
      }}
    >
      <div className="container mx-auto">
        <SectionHeading
          Heading={setHeading}
          Desc={setDesc}
          Color={setColor}
          layout={setHeadingLayout}
          containerWidthFull={setHeadingContainerWidthFull}
          paddingTop="16"
        />
        <div className="flex flex-row gap-8 py-32">
          {/* Accordion div */}
          <div className="w-full md:w-1/2 p-4">
            {ACCORDION_DATA.map((item, index) => (
              <div key={item.id} className="border-b border-gray-200">
                <button
                  className="flex justify-between items-center w-full py-3 text-left focus:outline-none min-h-[76px] text-[28px] leading-[36px]"
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
                  <div className=" pb-8">
                    <p>{item.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>


          <div
            className="w-full md:w-1/2 p-4 rounded-3xl"
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
