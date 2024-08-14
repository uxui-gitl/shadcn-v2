import React from "react";
import Image from "next/image";
import SectionWrapper from "../../components/SectionWrapper";
import SectionHeading from "../../components/SectionHeading";

const HighlightPromo = ({ setImageURL, setHeading, setDesc, setColor }) => {
  return (
    <>
      <SectionWrapper BGColor="#BEBEBE" Padding={false}>
        <div className="container mx-auto">
          <div className="flex flex-col sm:flex-col md:flex-row gap-2">
            <div className="flex-1 py-8 md:py-12 lg:py-48">
              <SectionHeading
                Heading={setHeading}
                Color={setColor}
                Desc={setDesc}
              />
            </div>
            <div className="flex-1 relative flex flex-col justify-end">
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
