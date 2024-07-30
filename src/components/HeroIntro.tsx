import Link from "next/link";
import React from "react";

const HeroIntro = () => {
  return (
    <div className="relative newvideoclass">
      <video
        className="w-full h-[calc(100vh_-_77px)] object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source
          src="./1.mp4"
          type="video/mp4"
        />
      </video>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <h1 className="text-[44px] sm:text-[92px] text-center font-semibold leading-tight">
          Automation<br></br>
          Cloud & Transformation
        </h1>
        {/* <h1 className="text-white text-center sm:text-8xl leading-none select-none tracking-tightest font-semibold">
          <span
            data-content="Automation."
            className="relative block before:content-[attr(data-content)] before:w-full before:z-0 before:block before:absolute before:top-0 before:px-2 before:bottom-0 before:left-0 before:text-center dark:before:text-white before:text-black before:animate-gradient-background-1"
          >
            <span className="px-2 text-transparent bg-clip-text bg-gradient-to-r from-gradient-1-start to-gradient-1-end animate-gradient-foreground-1">
              {" "}
              Automation.
            </span>
          </span>
          <span
            data-content="Cloudification."
            className="relative block before:content-[attr(data-content)] before:w-full before:z-0 before:block before:absolute before:top-0 before:px-2 before:bottom-0 before:left-0 before:text-center dark:before:text-white before:text-black before:animate-gradient-background-2"
          >
            <span className="px-2 text-transparent bg-clip-text bg-gradient-to-r from-gradient-2-start to-gradient-2-end animate-gradient-foreground-2">
              {" "}
              Cloudification.
            </span>
          </span>
          <span
            data-content="Transformation."
            className="relative block before:content-[attr(data-content)] before:w-full before:z-0 before:block before:absolute before:top-0 before:px-2 before:bottom-0 before:left-0 before:text-center dark:before:text-white before:text-black before:animate-gradient-background-3"
          >
            <span className="px-2 text-transparent bg-clip-text bg-gradient-to-r from-gradient-3-start to-gradient-3-end animate-gradient-foreground-3">
              {" "}
              Transformation.
            </span>
          </span>
        </h1> */}

        <div className="flex flex-col text-center gap-y-10 justify-center items-center">
          <p className="mt-6 mx-auto text-[20px] font-[500] max-w-[80%] text-center text-white leading-7">
            Revolutionize your business operations, save time and boost
            productivity with our cutting-edge offerings.
          </p>

          <Link
            className="primary-btn"
            href="#"
          >
            <span className=" text-sm font-medium transition-all">
              Let&apos;s Connect and Transform
            </span>
          </Link>
        </div>
      </div>
    </div>

    
  );
};

export default HeroIntro;
