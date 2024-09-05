"use client";

import { useState } from "react";
import { useScroll } from "framer-motion";
import { projects } from "../../assets/data";
import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
export default function Home() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });
  return (
    <>
      <>
        {/* Intro Section */}


        <>
          <div className=" max-w-screen-xl  mb-5 mx-auto p-5   px-[2rem]">
            <main ref={container} className={`relative mt-[20vh]`}>
              {projects.map((project, i) => {
                const targetScale = 1 - (projects.length - i) * 0.05;
                return (
                  // console.log(targetScale),
                 
                );
              })}
            </main>
          </div>
        </>

       
      </>
    </>
  );
}
