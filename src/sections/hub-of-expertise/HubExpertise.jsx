import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

import SectionHeading from "@/components/SectionHeading";
import SectionWrapper from "@/components/SectionWrapper";
import styles from "./hubExpertise.module.css";
import { jetBrains_mono } from "../../app/fonts";

const CounterSection = ({ start, end, description, counterOn }) => (
  <div className="flex-1 p-4 text-white">
    {counterOn && (
      <div>
        <h3
          className={`${jetBrains_mono.className} relative text-[72px] leading-[70px] text-[#fff] font-bold mb-8`}
        >
          <CountUp start={start} end={end} duration={2} />
          <span className={styles.superscript}>+</span>
        </h3>
        <p className="text-white">{description}</p>
      </div>
    )}
  </div>
);

const ScrollCounter = ({ onEnter, onExit, start, end, description, counterOn }) => (
  <ScrollTrigger onEnter={onEnter} onExit={onExit}>
    <CounterSection start={start} end={end} description={description} counterOn={counterOn} />
  </ScrollTrigger>
);

const HubExpertise = ({ setHeading, setDesc, setColor, counters,style }) => {
  const [counterOn, setCounterOn] = useState(false);

  const handleEnter = () => {
    console.log("Entered");
    setCounterOn(true);
  };

  const handleExit = () => {
    console.log("Exited");
    setCounterOn(false);
  };

  return (
    <SectionWrapper BGColor="#000" Padding={false} style={{...style}}>
      <section className="container mx-auto">
        <div className="flex flex-row gap-16 py-8 md:py-12 lg:py-48">
          <div className="flex-1">
            <SectionHeading Heading={setHeading} Color={setColor} Desc={setDesc} />
          </div>
          <div className="flex-1 py-20 min-h-[324px]">
            <div className="flex flex-col gap-8">
              {/* First Row */}
              <div className="flex flex-row gap-8">
                {counters.map((counter, index) => (
                  <div key={index} className="flex-1">
                    <ScrollCounter
                      onEnter={handleEnter}
                      onExit={handleExit}
                      start={counter.start}
                      end={counter.end}
                      description={counter.description}
                      counterOn={counterOn}
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
