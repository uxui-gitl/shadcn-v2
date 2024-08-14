import React from "react";
import Image from "next/image";
import styles from "./HighlightPromo.module.css";
import SectionWrapper from "../../components/SectionWrapper";
import SectionHeading from "../../components/SectionHeading";

const HighlightPromo = ({ setImageURL, setHeading, setDesc, setColor }) => {
  return (
    <>
      <SectionWrapper BGColor="#BEBEBE" Padding={false}>
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row gap-2">
            <div class="flex-1 py-10 sm:py-14 md:py-24">
              <SectionHeading
                Heading={setHeading}
                Color={setColor}
                Desc={setDesc}
              ></SectionHeading>
            </div>
            <div className="flex-1 relative">
            <Image
                src={setImageURL}
                alt="test"
                layout="fill"
                objectFit="cover"
                className="w-full h-full"
            />
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
};

export default HighlightPromo;
