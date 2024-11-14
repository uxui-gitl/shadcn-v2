import React, { useState, useEffect } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import SectionHeading from "@/components/SectionHeading";
import SectionWrapper from "@/components/SectionWrapper";
import styles from "./hubExpertise.module.css";
import { jetBrains_mono } from "../../app/fonts";

// Helper function to detect if the screen is mobile
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Adjust breakpoint as needed
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
};

const CounterSection = ({ start, end, description, counterOn, staticTitle, columnNo }) => {
  // Determine text size based on columnNo
  const textSizeClass =
  columnNo === 2 ? "text-[128px]" :
  columnNo === 3 ? "text-[64px]" :
  columnNo === 4 ? "text-[96px]" : 
  "text-[48px]";

const supTextSizeClass =
  columnNo === 2 ? "text-[64px]" :
  columnNo === 3 ? "text-[32px]" :
  columnNo === 4 ? "text-[64px]" : 
  "text-[24px]";


  return (
    <div className="text-white">
      {counterOn && (
        <div className="mb-4">
          <h3 className={`${jetBrains_mono.className} ${textSizeClass} relative font-bold flex items-baseline text-center`}>
            {start !== undefined && end !== undefined ? (
              <>
                <CountUp start={start} end={end} duration={2} />
                <sup className={`${supTextSizeClass} align-super`}>+</sup>
              </>
            ) : (
              <span>{staticTitle}</span>
            )}
          </h3>
          <p className="text-white">{description}</p>
        </div>
      )}
    </div>
  );
};

const ScrollCounter = ({
  onEnter,
  onExit,
  start,
  end,
  description,
  counterOn,
  staticTitle,
  columnNo,
  isMobile
}) => (
  isMobile ? (
    <CounterSection
      start={start}
      end={end}
      description={description}
      counterOn={true} // Always on for mobile
      staticTitle={staticTitle}
      columnNo={columnNo}
    />
  ) : (
    <ScrollTrigger onEnter={onEnter} onExit={onExit}>
      <CounterSection
        start={start}
        end={end}
        description={description}
        counterOn={counterOn}
        staticTitle={staticTitle}
        columnNo={columnNo}
      />
    </ScrollTrigger>
  )
);

const HubExpertise = ({ setHeading, setDesc, setColor, counters, style, columnNo, BGColor = 'text-neutral-black' }) => {
  const [counterOn, setCounterOn] = useState(false);
  const isMobile = useIsMobile(); // Determine if view is mobile

  const handleEnter = () => {
    if (!counterOn) setCounterOn(true); // Only trigger once
  };

  return (
    <SectionWrapper BGColor={BGColor} Padding={false} style={{ ...style }}>
      <section className="container mx-auto py-32">
        <div className="flex flex-col ">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Left Side: Heading and Description */}
            <div className={columnNo === 2 ? "w-full md:w-1/2" : "w-full md:w-[30%]"}>
              <SectionHeading
                Heading={setHeading}
                Color={setColor}
                Desc={setDesc}
                headingContainerWidth={'w-full'}
              />
            </div>
            {/* Right Side: Counters */}
            <div className={(columnNo === 2 ? "w-full md:w-1/2 mt-[5%]" : "w-full md:w-[70%]") + " flex flex-col justify-start"}>
              <div className="flex flex-wrap gap-4">
                {counters.map((counter, index) => (
                  <div key={index} className={columnNo === 3 ? "w-full sm:w-[calc(33.33%-1rem)]" : "w-full sm:w-[calc(50%-1rem)]"}>
                    <ScrollCounter
                      onEnter={handleEnter}
                      onExit={() => {}}
                      start={counter.start}
                      end={counter.end}
                      description={counter.description}
                      counterOn={counterOn}
                      staticTitle={counter.staticTitle}
                      columnNo={columnNo}
                      isMobile={isMobile}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </SectionWrapper>
  );
};

export default HubExpertise;
