"use client";
import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import Image from "next/image";

const ContainerScroll = ({ titleComponent, children, imageSrc }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"], // Start the animation when entering the card
  });

  // Define the animation values with faster transitions
  const rotateX = useTransform(scrollYProgress, [0, 0.6], [25, 0]); // Start straightening earlier
  const scale = useTransform(scrollYProgress, [0, 0.6], [1.05, 1]); // Scale effect on scroll
  const translateY = useTransform(scrollYProgress, [0, 0.6], [50, -120]); // Move the text upward quickly
  const opacity = useTransform(scrollYProgress, [0, 0.4, 0.6], [0, 0.7, 1]); // Fade in the text faster

  return (
    <SectionWrapper BGColor="bg-primary-white">
      <div ref={containerRef} className="flex justify-center items-center pt-8">
        <div
          className="container mx-auto w-full relative "
          style={{
            perspective: "1000px", // Keeps the perspective intact
          }}
        >
          <Card rotateX={rotateX} scale={scale} imageSrc={imageSrc}>
            <Header translateY={translateY} opacity={opacity}>
              {titleComponent}
            </Header>
            {children}
          </Card>
        </div>
      </div>
    </SectionWrapper>
  );
};

export const Header = ({ translateY, opacity, children }) => {
  return (
    <motion.div
      style={{
        translateY,
        opacity,
      }}
      className="relative text-center z-10 flex flex-col justify-center items-center" // Centered above the image
    >
      {children}
    </motion.div>
  );
};

export const Card = ({ rotateX, scale, children, imageSrc }) => {
  return (
    <motion.div
      style={{
        rotateX, // Perspective on scroll
        scale, // Scale effect on scroll
      }}
      className="relative flex justify-center items-center h-[1000px] md:h-[920px] w-full rounded-3xl overflow-hidden p-8"
    >
      <Image
        src={imageSrc}
        alt="Background"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        className="absolute inset-0 z-0" // Full cover image
      />
      <div className="relative z-10 flex flex-col justify-center items-center text-neutral-black">
        {children}
      </div>
    </motion.div>
  );
};

export default ContainerScroll;
