"use client";

import React, { useState } from "react";
import SectionWrapper from "@/components/SectionWrapper";
import OutlinedButtonWithArrow from "@/components/ui/buttons/OutlinedButtonWithArrow";
import OutlinedCloseButton from "@/components/ui/buttons/OutlinedCloseButton";

const CyberSecurityInfographic = () => {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  const handleButtonClick = () => {
    setIsFullScreen(true);
    setIsExiting(false);
  };

  const handleCloseClick = () => {
    setIsExiting(true);
    setTimeout(() => {
      setIsFullScreen(false);
    }, 500); // Duration of the slide-down animation
  };

  return (
    <>
      <SectionWrapper BGColor={"#FFF"}>
        <div className="md:container mx-auto">
          <div className="flex gap-16">
            <div
              className="w-full md:w-1/2 bg-cover bg-center min-h-[424px] p-16 flex flex-col justify-between rounded-3xl"
              style={{
                backgroundImage:
                  "url('/cyberSecurity/backgrounds/bg--dynamic-cybersecurity.png')",
              }}
            >
              <div>
                <h2 className="text-[42px] leading-[50px] font-bold mb-4">
                  Dynamic Security
                </h2>
                <p className="mb-8">
                  Description for the first div goes here.
                </p>
              </div>
              <div className="flex justify-end">
                <OutlinedButtonWithArrow
                  size={64}
                  arrowColor="black"
                  onClick={handleButtonClick}
                />
              </div>
            </div>

            <div
              className="w-1/2 bg-cover bg-center min-h-[424px] p-16 flex flex-col justify-between rounded-3xl"
              style={{ backgroundColor: "#5F22D9", color: "#fff" }}
            >
              <div>
                <h2 className="text-[42px] leading-[50px] font-medium mb-4">
                  End to End Business Security with Our Cybersecurity Suite
                </h2>
                <p className="mb-8">
                  Description for the second div goes here.
                </p>
              </div>
              <div className="flex justify-end">
                <OutlinedButtonWithArrow
                  size={64}
                  arrowColor="white"
                  onClick={handleButtonClick}
                />
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {isFullScreen && (
        <div
          className={`fixed inset-0 bg-white z-50 flex items-center justify-center ${
            isExiting ? "slide-down-exit" : "slide-up"
          }`}
        >
          <div className="relative w-full h-full p-8">
            <OutlinedCloseButton
              onClick={handleCloseClick}
              size={64}
              color="black"
              className="absolute top-4 right-4"
            />
            <p>Infographic image will go here..</p>
          </div>
        </div>
      )}

      <style jsx>{`
        .slide-up {
          animation: slide-up 0.5s ease forwards;
        }

        @keyframes slide-up {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .slide-down-exit {
          animation: slide-down 0.5s ease forwards;
        }

        @keyframes slide-down {
          from {
            transform: translateY(0);
            opacity: 1;
          }
          to {
            transform: translateY(100%);
            opacity: 0;
          }
        }
      `}</style>
    </>
  );
};

export default CyberSecurityInfographic;
