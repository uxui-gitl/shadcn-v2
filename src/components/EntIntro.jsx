import React from "react";
import Icon from "@mdi/react";
import { mdiArrowRight } from "@mdi/js";
import { mdiArrowTopRight } from "@mdi/js";
import { mdiPlayCircle } from "@mdi/js";
import Link from "next/link";
import Balancer from "react-wrap-balancer";

const EntIntro = ({
  title,
  desc,
  cta,
  width,
  video,
  fs,
  leading,
  alignment,
}) => {
  return (
   
    <div className="text-center">
      <div className="relative w-full h-[100vh] sm:h-[90vh] overflow-hidden md:px-20 ">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover sm:object-fill z-0"
          autoPlay
          loop
          muted
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
   
        <div className="flex justify-start items-center h-[100vh] sm:h-[90vh] md:h-[100vh]">
          <div
            className={`flex text-white flex-col justify-start gap-5 px-[2rem] md:px-[4.5rem] text-center w-full md:w-[70%] md:text-left`}
          >
            <h1
              className={'w-full z-50 sm:block text-[26px] sm:text-[52px] md:text-[54px] md:leading-[64px] leading-[44px] sm:leading-[52px] text-white font-bold sm:font-semibold'}
            >
              <Balancer>{title}</Balancer>
            </h1>

            <h4
              className={`z-50 sm:block text-white text-base sm:text-[20px]  md:leading-[28px] leading-[22px] mb-[24px]`}
            >
              <Balancer>{desc}</Balancer>
            </h4>

            <div className="z-50 flex gap-4 flex-col sm:flex-row justify-center md:justify-start items-center align-middle">
              <Link
                href={"#Contact"}
                className="text-white flex items-center bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-base px-8 py-3 me-2 mb-2 dark:bg-[#946BE6] dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
              >
                {cta}
                <Icon
                  path={mdiArrowTopRight}
                  style={{ marginLeft: "0.5em", transform: "rotate(45deg)", marginTop: '1px' }}
                  size={1}
                />
              </Link>
            </div>
        
        </div>
        </div>
      </div>
    </div>
    
  );
};

export default EntIntro;
