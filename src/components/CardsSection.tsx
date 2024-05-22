import React from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import Animated3dCards from "./Animated3dCards";
import Container from "./Container";

const CardsSection: React.FC = () => {
  return (
    <div className="">
      <Container className=" mt-4 flex-col px-10 " tag="section">
        <div className="flex flex-col pt-4 sm:items-start sm:justify-start sm:px-20">
          <h2 className=" font-semibold text-[60px] leading-[70px] text-[#fff] text-left text-2xl mb-2 ">
            Embrace tomorrow <br /> with Automation
          </h2>
          <p className="text-left text-[#fff] hidden max-w-[50%]  text-xl font-[500] leading-8 ">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>{" "}
        </div>
      </Container>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-x-16 py-20 h-auto sm:h-screen md:h-auto relative w-full">
        <Animated3dCards
          titleText="Embrace Tomorrow with Automation"
          desc="Enabling organizations to optimize cost & enhance business processes with next-gen digital technologies like Robotic Process Automation (RPA), IoT & Analytics."
        />
        <Animated3dCards
          titleText="Experience New Business Dimensions with Cloud"
          desc="We are committed to provide, secure, cost-effective & scalable cloud implementation, cloud migration & cloud support services to our customers."
        />
        <Animated3dCards
          titleText="Leverage Key Driver of Growth with Transformation"
          desc="We implement digital solutions that modernize and enhance user experience, ultimately leading to a digitally-sound businesses."
        />
      </div>
    </div>
  );
};

export default CardsSection;
