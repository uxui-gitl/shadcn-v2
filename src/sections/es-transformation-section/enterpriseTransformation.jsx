"use client";
import React from "react";
import ContainerScroll from "@/components/ui/scroll-container/containerScroll";
import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";

const EnterpriseTransformation = () => {
  return (
    <>
      <div
        className="flex flex-col overflow-hidden"
        style={{ backgroundColor: "white" }}
      >

        <ContainerScroll
          titleComponent={
            <SectionHeading Heading="Your Trusted Partner for<br/> Enterprise Transformation Success" Desc={'With long standing experience of diverse industries and a strong technology partner<br/> ecosystem, we deliver 360-degree transformation solutions'} headingContainerWidth = 'w-1/2' center />
          }
          imageSrc="/enterprise-suite/backgrounds/bg--enterprise-transformation.png"
        >
        
        </ContainerScroll>
      </div>
    </>
  );
};

export default EnterpriseTransformation;