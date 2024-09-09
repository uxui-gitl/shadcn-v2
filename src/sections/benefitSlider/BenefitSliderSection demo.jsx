import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "tailwindcss/tailwind.css"; // Assuming you use Tailwind CSS for styling
import SectionWrapper from "@/components/SectionWrapper";
import checkout from "/public/icon/whygitl/WhyGITL2.svg";
import SectionHeading from "@/components/SectionHeading";
import Image from "next/image";
import Style from "./benefit.module.css";

gsap.registerPlugin(ScrollTrigger);

const PinnedScrollComponent = () => {
  const leftContainerRef = useRef(null);
  const rightContainerRef = useRef(null);
  const mainContainerRef = useRef(null);
  const cardData = [
    {
      _id: 1,
      icon: "benefisIntelligentTechnologies/AutomationRepetitiveTasks",
      title: "",
      CardDesc:
        "Automation of repetitive tasks, resulting in increased operational efficiency and productivity.",
    },
    {
      _id: 2,
      icon: "benefisIntelligentTechnologies/RealTimeProblemSolvingCapabilities",
      title: "",
      CardDesc:
        "Real-time problem-solving capabilities enable rapid identification and resolution of issues, minimizing disruptions and ensuring uninterrupted business operations.",
    },
    {
      _id: 3,
      icon: "benefisIntelligentTechnologies/InformedDecisionmaking",
      title: "",
      CardDesc:
        "Informed decision-making by extracting valuable insights and identifying patterns, correlations, and trends.",
    },
    {
      _id: 4,
      icon: "benefisIntelligentTechnologies/highDegreeAccuracyConsistency",
      title: "",
      CardDesc:
        "A high degree of accuracy and consistency in business operations.",
    },
    // Repeated data for demonstration
    {
      _id: 5,
      icon: "benefisIntelligentTechnologies/AutomationRepetitiveTasks",
      title: "",
      CardDesc:
        "Automation of repetitive tasks, resulting in increased operational efficiency and productivity.",
    },
    {
      _id: 6,
      icon: "benefisIntelligentTechnologies/RealTimeProblemSolvingCapabilities",
      title: "",
      CardDesc:
        "Real-time problem-solving capabilities enable rapid identification and resolution of issues, minimizing disruptions and ensuring uninterrupted business operations.",
    },
    {
      _id: 7,
      icon: "benefisIntelligentTechnologies/InformedDecisionmaking",
      title: "",
      CardDesc:
        "Informed decision-making by extracting valuable insights and identifying patterns, correlations, and trends.",
    },
    {
      _id: 8,
      icon: "benefisIntelligentTechnologies/highDegreeAccuracyConsistency",
      title: "",
      CardDesc:
        "A high degree of accuracy and consistency in business operations.",
    },
  ];

  useEffect(() => {
    const rightContainer = rightContainerRef.current;
    const pinTrigger = ScrollTrigger.create({
        trigger: mainContainerRef.current,
        start: "top top", // Start pinning when the main container hits the top of the viewport
        end: "bottom bottom",
        pin: leftContainerRef.current,
        scrub: 0.5, // Adjust scrub value for smoother scrolling
        markers: true, // Enable markers to visualize start and end points
      });
       return () => {
      pinTrigger.kill(); // Cleanup on unmount
    };
  
     



  }, []);

  return (
       <SectionWrapper>
      <div ref={mainContainerRef} className="flex">
        <div className="container mx-auto flex h-full">
        
        <div ref={leftContainerRef} className="w-1/2 h-full flex flex-col align-top">
        <SectionHeading Heading={'Pinned Left Section'} />
  
        </div>

        <div  className="w-1/2">
        <div >
        {cardData.map((item) => (
              <a
                key={item._id}
                href="#"
                className="flex p-8 w-full h-[240px] items-center bg-white border border-gray-200 rounded-[32px] mb-4 shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                <Image className="mr-8" src={checkout} alt="" width={72} height={72} />
                <div className="flex flex-col justify-between leading-normal">
                  <p className="mb-3 text-2xl text-gray-700 dark:text-gray-400">{item.CardDesc}</p>
                </div>
              </a>
            ))}

    </div>
        </div>
      </div>

      {/* <div className={Style.spacer}></div> */}
      </div>
    </SectionWrapper>
  );
};

export default PinnedScrollComponent;
