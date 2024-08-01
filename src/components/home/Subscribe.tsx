import { ArrowRight } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";

const Subscribe = () => {
  return (
    // <div className="container text-center py-24 px-10 rounded-3xl bg-[linear-gradient(to_top,_rgba(0,_73,_223,_0)_67%,_#fe0f83)]">
    <div className="container text-center py-24 px-10 rounded-3xl  bg-[linear-gradient(180deg,_rgba(0,98,255,0.61)_2%,_rgba(83,57,229,0)_100%)]">
      {/* <div className="container py-24 rounded-3xl bg-[rgb(0,73,223)] bg-[linear-gradient(0deg,_rgba(0,73,223,0)_0%,_rgba(254,15,131,1)_100%)]"> */}
      <h1 className="  text-[60px] leading-[70px] mb-10 font-semibold ">
        Let&apos;s keep the conversation going
      </h1>
      <p className="text-[#D4BEFF] font-medium text-xl ">
        Subscribe to our newsletter and get updates on what we do
      </p>
      <div className="my-10 max-w-3xl text-center mx-auto  bg-[rgb(195,21,169)] bg-[linear-gradient(90deg,_rgba(195,21,169,1)_0%,_rgba(137,40,200,1)_50%,_rgba(83,57,229,1)_100%)] p-[0.15rem] rounded-full">
        <div className="relative">
          <label htmlFor="Search" className="sr-only">
            {" "}
            Search{" "}
          </label>

          <input
            type="text"
            id="Search"
            placeholder="Enter your email address"
            className="w-full rounded-full border-gray-200 py-7 px-10 shadow-sm sm:text-sm bg-[#000614] "
          />

          <span className="absolute inset-y-0 end-5 grid w-10 place-content-center">
            <button
              type="button"
              className="bg-[#0062ff]  bg-[rgb(195,21,169)] bg-[linear-gradient(90deg,_rgba(195,21,169,1)_0%,_rgba(137,40,200,1)_50%,_rgba(83,57,229,1)_100%)] rounded-full  text-white"
            >
              <ArrowRight className=" h-16 w-16" />
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
