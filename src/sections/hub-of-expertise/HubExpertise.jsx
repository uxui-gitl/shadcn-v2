import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

import SectionHeading from "@/components/SectionHeading";
import SectionWrapper from "@/components/SectionWrapper";
import styles from "./hubExpertise.module.css";
import { jetBrains_mono } from "../../app/fonts";

const CounterSection = ({ start, end, description, counterOn, staticTitle }) => (
  <div className="p-4 text-white">
    {counterOn && (
      <div>
        <h3 className={`${jetBrains_mono.className} relative text-6xl leading-[70px] text-[#fff] font-bold mb-8 flex items-baseline`}>
          {start !== undefined && end !== undefined ? (
            <>
              <CountUp start={start} end={end} duration={2} />
              <sup className="text-4xl align-super">+</sup> {/* Adjust font size for superscript */}
            </>
          ) : (
            <span>{staticTitle}</span> // Display static title if start or end is undefined
          )}
        </h3>
        <p className="text-white">{description}</p>
      </div>
    )}
  </div>
);


const ScrollCounter = ({
  onEnter,
  onExit,
  start,
  end,
  description,
  counterOn,
  staticTitle,
}) => (
  <ScrollTrigger onEnter={onEnter} onExit={onExit}>
    <CounterSection
      start={start}
      end={end}
      description={description}
      counterOn={counterOn}
      staticTitle={staticTitle} // Pass static title to CounterSection
    />
  </ScrollTrigger>
);

const HubExpertise = ({ setHeading, setDesc, setColor, counters, style, columnNo, BGColor='#000' }) => {
  const [counterOn, setCounterOn] = useState(false);

  const handleEnter = () => {
    setCounterOn(true);
  };

  const handleExit = () => {
    setCounterOn(false);
  };

  // Determine classes based on columnNo
  const leftColumnClass = columnNo === 2 ? "w-full md:w-1/2" : "w-full md:w-[30%]";
  const rightColumnClass = columnNo === 2 ? "w-full md:w-1/2 mt-[5%]" : "w-full md:w-[70%] mt-[10%]";
  
  // Adjust the width class based on columnNo
  const counterWidthClass = columnNo === 3 ? "w-full sm:w-[calc(33.33%-1rem)]" : "w-full sm:w-[calc(50%-1rem)]";

  return (
    <SectionWrapper BGColor={BGColor} Padding={false} style={{ ...style }}>
      <section className="md:container mx-auto">
        <div className="flex flex-col gap-16 py-8 md:py-12 lg:py-48 px-10">
          <div className="flex flex-col md:flex-row gap-16">
            {/* Left Side: Heading and Description */}
            <div className={leftColumnClass}>
              <SectionHeading
                Heading={setHeading}
                Color={setColor}
                Desc={setDesc}
                headingContainerWidth={'w-full'}
              />
            </div>
            {/* Right Side: Counters */}
            <div className={rightColumnClass + "flex flex-col justify-start"}>
              <div className="flex flex-wrap gap-4">
                {counters.map((counter, index) => (
                  <div key={index} className={counterWidthClass}>
                    <ScrollCounter
                      onEnter={handleEnter}
                      onExit={handleExit}
                      start={counter.start}
                      end={counter.end}
                      description={counter.description}
                      counterOn={counterOn}
                      staticTitle={counter.staticTitle} // Add static title to the counter object
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
