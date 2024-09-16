import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import checkout from "../../public/icon/whygitl/WhyGITL2.svg";
import SectionHeading from "./SectionHeading";
import curiousPerson from "../../public/curiousPerson.png";
import cloud from "../../public/cloud.png";
import cloudArrows from "../../public/cloudArrows.png";
const fadeInAnimationVariant = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5 * index,
    },
  }),
};
const WhySection = ({
  Title,
  Desc,
  arr = [],
}) => {
  return (
    <>
      <div className='md:container mx-auto'>
        {/* left */}
        <div className="md:mb-5 mb-5">
          <SectionHeading
            Heading={Title}
            Desc={Desc}
          ></SectionHeading>
        </div>
        {/* right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 md:gap-x-12">
        {arr.map((item, index) => (
            <>
              <div className="card py-4 md:py-12" key={index} style={{ borderBottom: '2px solid #d3d3d3'}}>
                <div className="card-body flex items-center">
                    <Image src={checkout} alt={checkout} className="max-w-14 md:max-w-full" width={70}/>
                    <div className="md:text-xl font-medium text-sm ml-9">
                      {item.desc}
                    </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default WhySection;
