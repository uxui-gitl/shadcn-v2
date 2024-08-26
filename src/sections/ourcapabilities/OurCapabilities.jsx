import React from "react";
import Image from "next/image";
import styles from "./OurCapabilities.module.css";
import SectionWrapper from "@/components/SectionWrapper";
import SectionHeading from "@/components/SectionHeading";
import Link from "next/link";

const OurCapabilities = ({
    setImageBGURL,
    setHeading,
    setDesc,
    setColor,
    setPadding,
    setHeadingContainerWidthFull
}) => {
  return (
    <>
      <SectionWrapper
        BGColor="#BEBEBE"
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
            headingContainerWidth = {setHeadingContainerWidthFull}
          ></SectionHeading>
        </div>

      </SectionWrapper>
    </>
  );
};

export default OurCapabilities;
