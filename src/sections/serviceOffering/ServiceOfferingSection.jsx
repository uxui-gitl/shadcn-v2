"use client";
import SectionWrapper from "@/components/SectionWrapper";
import SectionHeading from "@/components/SectionHeading";
import { useState, useEffect } from "react";
import ServiceOfferingCard from "@/components/ServiceOfferingCard";
import {cardData, listData} from "./data.js";

function ServiceOfferingSection({
  ID,
  sectionHeading,
  sectionDesc,
  sectionMaxWidth,
  sectionTextColor = "text-neutral-white",
  sectionBGColor = "bg-primary-900",
  setTop='',
}) {
  const [data, setData] = useState([cardData[0]]);
  const [isMobile, setIsMobile] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function handleClick(item) {
    const selectedData = cardData.find(
      (Item) => String(Item.id) === String(item.id)
    );

    if (selectedData) {
      setData([selectedData]);

      if (isMobile) {
        setShowModal(true);
      }
    } else {
      console.warn("No matching item found in cardData with ID:", item.id);
    }
  }

  return (
    <>
      <SectionWrapper id={ID} BGColor={'bg-primary-900'} setTop={setTop} style={{ 
        position: "relative",
          zIndex: "1",}}>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-0 sm:gap-20">
          <div className= "pt-32 pb-40">
            <SectionHeading
              Heading={'Service Offerings'}
              Desc={'"We offer AI-driven process automation, process re-engineering and seamless implementation support for transformative business results.'}
              Color={'text-neutral-white'}
              headingContainerWidth="w-full"
            />
            <div className="mt-2">
              {listData.map((item) => (
                <div
                  key={item?.id}
                  onClick={() => handleClick(item)}
                  className="flex items-center justify-between py-4 text-body-01 text-white cursor-pointer border-b-2 border-white"
                >
                  {item?.beforeIconUrl && (
                    <svg
                      className="w-[24px] h-[24px] ms-2 rtl:rotate-180"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  )}
                  <span className="w-full text-body-01">
                    {item.text}
                  </span>
                  {item?.isArrowIconVisiable && (
                    <svg
                      className="w-[24px] h-[24px] ms-2 rtl:rotate-180"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div>
            {!isMobile
              ? data[0] && <ServiceOfferingCard Item={data[0]} />
              : showModal &&
                data[0] && (
                  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="relative bg-transparent  rounded-3xl w-full mx-4">
                      <button
                        onClick={() => setShowModal(false)}
                        className="flex items-center justify-center w-8 h-8 bg-gray-200 hover:bg-gray-300 rounded-full text-gray-600 hover:text-gray-900 absolute top-2 right-2"
                        aria-label="Close"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-4 h-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>

                      <ServiceOfferingCard Item={data[0]} />
                    </div>
                  </div>
                )}
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}

export default ServiceOfferingSection;
