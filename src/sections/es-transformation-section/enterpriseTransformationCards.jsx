"use client";

import SectionWrapper from "@/components/SectionWrapper";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Icon from "@mdi/react";

import { mdiArrowTopRight } from "@mdi/js";

const CARDS_DATA = [
  {
    logoSrc: "/enterprise-suite/logos/logo--infor.png",
    altText: "Infor Logo",
    width: 120,
    height: 48,
    listItems: [
      "Infor Cloud Suite",
      "Infor LN",
      "Infor WMS",
      "More Infor Products",
    ],
  },
  {
    logoSrc: "/enterprise-suite/logos/logo--microsoft.png",
    altText: "Infor Logo",
    width: 196,
    height: 48,
    listItems: [
      "Dynamics 365 CRM",
      "Dynamics 365 Finance and Operations",
      "Dynamics 365 Commerce",
      "Dynamics 365 Business Central",
    ],
  },
  {
    logoSrc: "/enterprise-suite/logos/logo--oracle.png",
    altText: "Infor Logo",
    width: 120,
    height: 48,
    listItems: ["Oracle Fusion Cloud", "Oracle EBS"],
  },
];

const EnterpriseTransformationCards = () => {
  return (
    <>
      <SectionWrapper setTop={false}>
        <div className="container mx-auto py-4">
          <div className="flex flex-col md:flex-row gap-8 min-h-[324px]">
            {CARDS_DATA.map((card, index) => (
              <div
              key={index}
              className="flex-1 flex flex-col justify-between rounded-3xl border-[1px] border-neutral-light-grey p-5"
              style={{ backgroundColor: "white" }}
            >
              <Image
                src={card.logoSrc}
                alt={card.altText}
                width={card.width}
                height={card.height}
                className="mb-2"
              />
              <ul>
                {card.listItems.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="py-2 border-b border-neutral-light-grey last:border-b-0"
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href={"#Contact"}
                className="text-neutral-white text-label-01 leading-label-01 flex items-center bg-primary-400 hover:bg-primary-500 font-medium rounded-full px-8 py-2 mt-auto group"
              >
                Know more
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
            
            ))}
          </div>
        </div>
      </SectionWrapper>
    </>
  );
};

export default EnterpriseTransformationCards;
