"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import Container from "../Container";
import Image from "next/image";
import ReactSimplyCarousel from "react-simply-carousel";

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
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
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
    <div style={{margin:'200px 0px'}}>
      <Container className=" mt-8 flex-col px-10 " tag="section">
        <div className="flex flex-col pt-10 items-start justify-start">
          <h2
            className=" font-semibold leading-[70px] text-[#fff] text-left mb-2 "
            style={{ fontSize: "54px", color: "#EFE9FB" }}
          >
            What people are saying <br></br>about the us.
          </h2>
          {/* <p className="text-left text-[#fff] max-w-[50%]  text-xl font-[500] leading-8 ">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>{" "} */}
        </div>
      </Container>

      {/* <div
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
      </div> */}
  {/* commeted card */}
      <div
        className="sayingWrapper container mt-24 "
        style={{
          display: "flex",
          flexDirection: "row",
          padding: "50px 170px",
          position: "relative",
        }}
      >
        <div className="" style={{ flex: 1 }}>
        </div>
        <div className="" style={{ flex: 3 }}>
          <div>
            <ReactSimplyCarousel
              activeSlideIndex={activeSlideIndex}
              onRequestChange={setActiveSlideIndex}
              itemsToShow={1}
              itemsToScroll={1}
              forwardBtnProps={{
                //here you can also pass className, or any other button element attributes
                style: {
                  cursor: "pointer",
                  width: "70px",
                  position: "absolute",
                  left: "10%",
                  top: "140px",
                  // transform: rotatey(180deg);
                  transform: "rotateY(180deg)"
                },
                children: (
                  <Image
                    src="/btn-arrows.png"
                    width={70}
                    height={70}
                    alt="icon"
                    style={{ marginBottom: "15px" }}
                  ></Image>
                ),
              }}
              backwardBtnProps={{
                //here you can also pass className, or any other button element attributes
                style: {
                  cursor: "pointer",
                  width: "70px",
                  position: "absolute",
                  left: "10%",
                  top: "54px",
                },
                children: (
                  <Image
                    src="/btn-arrows.png"
                    width={70}
                    height={70}
                    alt="icon"
                  ></Image>
                ),
              }}
              responsiveProps={[
                {
                  itemsToShow: 1,
                  itemsToScroll: 1,
                  minWidth: 1250,
                },
              ]}
              speed={400}
              easing="linear"
            >
              {/* here you can also pass any other element attributes. Also, you can use your custom components as slides */}
              <div style={{minWidth:'800px' ,maxWidth:'800px'}}>
                <div
                  className=""
                  style={{
                    fontSize: "54px",
                    fontWeight: 300,
                    lineHeight: "64px",
                    color: "#EFE9FB",
                  }}
                >
                  Digital Transformation<br></br> Journey
                </div>
                <div
                  className=""
                  style={{
                    color: "#CDBAF3",
                    fontSize: "24px",
                    lineHeight: "36px",
                    // marginTop: "32px",
                  }}
                >
                  Godrej Infotech helped us in accelerating digital
                  transformation journey with Business Central on Azure cloud
                  and Power BI solution. As a result, our material requisition
                  efficiency has increased by 66%, time taken in processing
                  purchase orders is reduced by 79% and invoice processing
                  efficiency has improved by 60%.
                </div>
                <div
                  className=""
                  style={{
                    color: "#9C9C9C",
                    fontSize: "16px",
                    marginTop: "30px",
                  }}
                >
                  IT Director, Cooling Facility Management<br></br> Company
                </div>
              </div>
              {/*  */}

              <div style={{minWidth:'800px', maxWidth:'800px'}}>
                <div
                  className=""
                  style={{
                    fontSize: "54px",
                    fontWeight: 300,
                    lineHeight: "64px",
                    color: "#EFE9FB",
                  }}
                >
                  Digital Transformation<br></br> Journey
                </div>
                <div
                  className=""
                  style={{
                    color: "#CDBAF3",
                    fontSize: "24px",
                    lineHeight: "36px",
                    // marginTop: "32px",
                  }}
                >
                  Godrej Infotech helped us in accelerating digital
                  transformation journey with Business Central on Azure cloud
                  and Power BI solution. As a result, our material requisition
                  efficiency has increased by 66%, time taken in processing
                  purchase orders is reduced by 79% and invoice processing
                  efficiency has improved by 60%.
                </div>
                <div
                  className=""
                  style={{
                    color: "#9C9C9C",
                    fontSize: "16px",
                    marginTop: "30px",
                  }}
                >
                  IT Director, Cooling Facility Management<br></br> Company
                </div>
              </div>
            </ReactSimplyCarousel>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};
