import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionWrapper from "@/components/SectionWrapper";
import checkout from "/public/icon/whygitl/WhyGITL2.svg";
import SectionHeading from "@/components/SectionHeading";
import Image from "next/image";



gsap.registerPlugin(ScrollTrigger);

function BenefitSliderSection({
  ID,
  sectionImageUrl = "",
  sectionHeading,
  sectionDesc,
  sectionHeadingMaxWidth,
  sectionHeaderWidth = ["w-full"],
  cardData = [],
  sectionTextColor = "#000",
  sectionBGColor = "#000",
  style
}) {
  const leftContainerRef = useRef(null);
  const rightContainerRef = useRef(null);
  const mainContainerRef = useRef(null);

  useEffect(() => {
    const rightContainer = rightContainerRef.current;
    const pinTrigger = ScrollTrigger.create({
      trigger: mainContainerRef.current,
      start: "top top", // Start pinning when the main container hits the top of the viewport
      end: "bottom bottom",
      pin: leftContainerRef.current,
      scrub: 0.5, // Adjust scrub value for smoother scrolling
      markers: false, // Enable markers to visualize start and end points
    });
    return () => {
      pinTrigger.kill(); // Cleanup on unmount
    };
  }, []);

  return (
    <SectionWrapper id={ID} BGColor={sectionBGColor} style={{
        ...style,
        backgroundImage: `url(${sectionImageUrl})`, backgroundSize: 'cover',
    }}>
      <div ref={mainContainerRef} className="flex pt-8 gap-8">
        <div className="container mx-auto flex h-full">
          <div
            ref={leftContainerRef}
            className="w-[40%] h-full flex flex-col align-top"
          >
            <SectionHeading Heading={sectionHeading}
                            Desc={sectionDesc}
                            Color={sectionTextColor}
                            MaxWidth={sectionHeadingMaxWidth}
                            headingContainerWidth={sectionHeaderWidth} />
          </div>

          <div className="w-[60%]">
            <div>
              {cardData.map((item) => (
                <>
                <div
                  key={item._id}
                  className="flex p-8 w-full h-[196px] items-center bg-white border border-gray-200 rounded-[32px] mb-4 shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                >
                  <Image
                    className="mr-8"
                    src={checkout}
                    alt=""
                    width={72}
                    height={72}
                  />
                  <div className="flex flex-col justify-between leading-normal">
                    <p className="mb-3 text-2xl text-gray-700 dark:text-gray-400">
                      {item.cardDesc}
                    </p>
                  </div>
                </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

export default BenefitSliderSection;
