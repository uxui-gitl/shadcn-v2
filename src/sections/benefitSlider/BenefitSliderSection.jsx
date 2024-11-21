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
  sectionHeaderWidth = '',
  cardData = [],
  sectionTextColor = "text-neutral-white",
  sectionBGColor = "bg-primary-900",
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
      <div ref={mainContainerRef} className="flex py-32 lg:py-8 2xl:py-32 -mt-8">
        <div className="container mx-auto flex flex-col md:flex-row h-full ">
          <div
            ref={leftContainerRef}
            className="w-full md:w-[40%] h-full flex flex-col align-top pr-5"
          >
            <SectionHeading Heading={sectionHeading}
                            Desc={sectionDesc}
                            Color={sectionTextColor}
                            MaxWidth={sectionHeadingMaxWidth}
                            headingContainerWidth={sectionHeaderWidth} />
          </div>

          <div className="w-full md:w-[60%] bg-primary-900 z-10">
            <div>
              {cardData.map((item) => (
                <>
                <div
                  key={item._id}
                  className="flex p-5 lg:min-h-[120px] w-full items-center bg-neutral-white border border-neutral-light-grey rounded-3xl mb-4 shadow hover:bg-neutral-ghost-white"
                >
                  <Image
                    className="mr-4 md:block"
                    src={item.icon}
                    alt=""
                    width={56}
                    height={56}
                  />
                  <div className="flex flex-col justify-between leading-normal">
                    <h2 className="mb-3 text-body-01 text-neutral-darkest-grey">{item.cardHead}</h2>
                    <p className="mb-3 text-body-01 text-neutral-darkest-grey">
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
