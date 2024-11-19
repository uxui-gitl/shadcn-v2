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
      <div className="relative w-full h-[90vh]  overflow-hidden">
        {/* Video background with a linear gradient overlay */}
        <div
          className="absolute top-0 left-0 w-full h-full  z-10"
          style={{
            background: " rgba(8, 7, 8, 0.5)",
          }}
        ></div>

        <video
          className="absolute top-0 left-0 w-full h-full object-cover sm:object-fill z-0"
          autoPlay
          loop
          muted
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Content Container */}
        <div className="container flex justify-start items-center h-[100vh] z-20">
          <div
            className={`flex text-neutral-white flex-col justify-start gap-4 mt-6  text-left`}
          >
            {/* Title */}
            <h1
              className=" w-full z-50 text-neutral-white text-display-01 2xl:w-[70%]"
              style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.2)" }}
            >
              <Balancer>{title}</Balancer>
            </h1>

            {/* Description */}
            <h4
              className="z-50 text-neutral-white text-subtitle-01  md:w-[70%] mb-8"
              style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.2)" }}
            >
              <Balancer>{desc}</Balancer>
            </h4>

            {/* Call-to-Action Button */}
            <div className="z-50 flex gap-4 flex-col items-left align-middle justify-left sm:flex-row sm:justify-start md:justify-start">
              <Link
                href={"#Contact"}
                className="text-neutral-white text-body-01 flex items-center bg-primary-400 hover:bg-primary-500 rounded-full px-8 py-4 md:py-3 xl:py-4 2xl:px-12 group"
              >
                {cta}
                <div className="transition-transform duration-300 ease-in-out transform group-hover:translate-x-2">
                  <Icon
                    path={mdiArrowTopRight}
                    style={{
                      marginLeft: "0.5em",
                      transform: "rotate(45deg)",
                      marginTop: "1px",
                    }}
                    size={1}
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EntIntro;
