"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import Container from "../Container";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <>
      <Container className=" mt-8 flex-col px-10 " tag="section">
        <div className="flex flex-col pt-10 items-start justify-start">
          <h2 className=" font-semibold text-[60px] leading-[70px] text-[#fff] text-left text-2xl mb-2 ">
            What Experts Think <br /> About Us
          </h2>
          <p className="text-left text-[#fff] max-w-[50%]  text-xl font-[500] leading-8 ">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>{" "}
        </div>
      </Container>

      <div
        ref={containerRef}
        className={cn(
          "scroller relative z-20  max-w-7xl overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)] ",
          className
        )}
      >
        <ul
          ref={scrollerRef}
          className={cn(
            " flex min-w-full shrink-0 gap-x-12 gap-y-4 py-16 w-max flex-nowrap ",
            start && "animate-scroll ",
            pauseOnHover && "hover:[animation-play-state:paused]"
          )}
        >
          {items.map((item, idx) => (
            <li
              className="w-[350px] border-transparent border-[2.5px] shadow-sm max-w-full relative rounded-2xl flex-shrink-0   md:w-[700px] bg-transparent bg-[linear-gradient(90deg,_rgba(195,21,169,0.4)_0%,_rgba(137,40,200,0.1)_50%,_rgba(83,57,229,0.4)_100%)]"
              key={item.name}
            >
              <blockquote className="  rounded-[14px] py-14 px-24  text-gray-100 ">
                <div
                  aria-hidden="true"
                  className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
                ></div>
                <span className=" relative z-20 text-sm leading-[24px] text-gray-100 font-normal">
                  {item.quote}
                </span>
                <div className="relative z-20 mt-6 flex flex-row items-center">
                  <span className="flex flex-col gap-1">
                    <span className=" text-sm  leading-[24px] text-gray-400 font-normal">
                      {item.name}
                    </span>
                    <span className=" text-sm  leading-[24px] text-gray-400 font-normal">
                      {item.title}
                    </span>
                  </span>
                </div>
              </blockquote>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
