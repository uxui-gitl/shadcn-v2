"use client";

import React from "react";
import SectionWrapper from "@/components/SectionWrapper";
import SectionHeading from "@/components/SectionHeading";
import Image from "next/image";

const logos = [
  "/technology-stack/logos/New Project.svg",
  "/technology-stack/logos/PowerApps_scalable.svg",
  "/technology-stack/logos/Microsoft_Office_SharePoint_(2019–present).svg",
  "/technology-stack/logos/java-vertical.svg",
];

const TechnologyStackLogos = () => {
  return (
    <>
      <SectionWrapper BGColor={"bg-primary-10"}>
        <div className="container mx-auto py-32">
          <SectionHeading
            center={true}
            Heading={"Expertly Built <br/>200+ Custom Apps"}
            Desc={"We use the latest technologies to build our products."}
            Color={"text-primary-900"}
            headingContainerWidth={"w-full"}
          />
 <div className="w-full mx-auto md:w-1/2 mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 justify-items-center">
  {logos.map((logo, index) => (
    <div key={index} className="flex justify-center">
      <Image
        src={logo}
        alt={`tech-stack-${index}`}
        width={60}
        height={60}
      />
    </div>
  ))}
</div>

        </div>
      </SectionWrapper>
    </>
  );
};

export default TechnologyStackLogos;
