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
  ribbon,
  title,
  desc,
  arr = [],
  renderInlineSpans = false,
}) => {
  return (
    <>
      <div className={` w-full`}>
        {/* left */}
        <div className="mb-20">
          <SectionHeading
            Heading={title}
            Desc={desc}
            MaxWidth={'50%'}
          ></SectionHeading>
        </div>
        {/* right */}
        {/* <div className="relative">{children}</div> */}
        {/* <div className="">
            <AnimatePresence>
              {Array.isArray(arr) &&
                arr.map((item) => (
                  <motion.div
                    key={item._id}
                    initial="initial"
                    whileInView="animate"
                    custom={item._id}
                    viewport={{
                      once: true,
                    }}
                    className={`flex flex-row justify-start items-center gap-x-5 bg-white rounded-md p-5 shadow-lg mb-5 ${
                      item._id > 0 ? "sm:ml-" + 2.5 * item._id + "rem" : "" // Apply margin only for desktop
                    }`}
                    variants={fadeInAnimationVariant}
                  >
                    <Image src={checkout} alt="checkout" />
                    <p className="text-base font-medium leading-[22px]">
                      {renderInlineSpans ? (
                        <span dangerouslySetInnerHTML={{ __html: item.desc }} />
                      ) : (
                        item.desc
                      )}
                    </p>
                  </motion.div>
                ))}
            </AnimatePresence>
          </div> */}

        <div class="grid grid-cols-2 gap-10">
        {arr.map((item) => (
            <>
              <div className="card py-8" style={{ borderBottom: '2px solid #d3d3d3' }}>
                <div className="card-body flex">
                    <Image src={checkout} alt={checkout} width={100}/>
                    <div className="text-xl font-medium ml-9">
                      {item.desc}
                    </div>
                </div>
              </div>
            </>
          ))}
        </div>


        <div className="flex flex-wrap">
          

        </div>
      </div>
    </>
  );
};

export default WhySection;
