"use client";
import React, { useState } from "react";
import Navlist from "./NavUtils/Navlist.jsx";
import Navlist2 from "./NavUtils/Navlist2.jsx";
import Link from "next/link.js";
import clsx from "clsx";

const SubNavList = ({ links }) => (
  <div className="flex flex-row gap-x-8 lg:px-8 lg:pr-10 py-2 max-lg:pl-6">
    {links.map((section, index) => (
      <div
        key={index}
        className={clsx({ "lg:border-r-[1px] pr-8": index < links.length - 1 })}
      >
        <ul>
          <li className="text-[#101828]  hover:text-blue-500 pt-2">
            <Link href={section.sectionHref}>
              <span className="text-neutral-800 font-semibold hover:text-blue-500">
                {section.sectionLabel}
              </span>
            </Link>
          </li>
        </ul>

        {(section.subLinks || section.level3Links) && (
          <ul className="text-sm ml-5 text-[#101828] font-semibold mt-1 w-full">
            {section.subLinks &&
              section.subLinks.map((subLink, subIndex) => (
                <li
                  key={subIndex}
                  className="text-[#101828] hover:text-blue-500 py-2"
                >
                  <Link href={subLink.href}>{subLink.label}</Link>

                  {/* Check for level3Links and render them if available */}
                  {subLink.level3Links && (
                    <ul className="text-sm ml-5 text-[#101828] font-semibold mt-1 w-full">
                      {subLink.level3Links.map((level3Link, level3Index) => (
                        <li
                          key={level3Index}
                          className="text-[#101828] hover:text-blue-500 py-2"
                        >
                          <Link href={level3Link.href}>{level3Link.label}</Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
          </ul>
        )}
      </div>
    ))}
  </div>
);

const SolutionsNav = () => {
  const [show, setShow] = useState(false);
  const [currentCategory, setCurrentCategory] = useState("Automation");

  const handleMouseEnter = (category) => {
    if (window.innerWidth > 1024) {
      setCurrentCategory(category);
      setShow(true);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth > 1024) {
      setCurrentCategory("Automation");
      setShow(false);
    }
  };

  return (
    <li
      onMouseEnter={() => {
        handleMouseEnter("solutions");
        setCurrentCategory("Automation");
      }}
      onMouseLeave={handleMouseLeave}
    >
      <button
        type="button"
        className={`flex items-center p-1 md:ml-5 text-base transition ease-in duration-150 max-lg:justify-between max-lg:w-full ${
          show ? "lg:text-neutral-300 " : ""
        }`}
      >
        Solutions
        <svg
          opacity="0.5"
          aria-hidden="true"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
          version="1.1"
          width="16"
          data-view-component="true"
          className={` ml-1 transition-all ease-in duration-200  max-lg:scale-x-125 ${
            show ? "lg:mt-2 opacity-40 max-lg:0" : "mt-0 max-lg:-rotate-90"
          }`}
        >
          <path d="M12.78 5.22a.749.749 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.06 0L3.22 6.28a.749.749 0 1 1 1.06-1.06L8 8.939l3.72-3.719a.749.749 0 0 1 1.06 0Z"></path>
        </svg>
      </button>
      <div
        className={`relative lg:absolute lg:flex lg:-ml-40 bg-white rounded-md lg:py-4 py-2 transition ease-in duration-150 ${
          show ? "opacity-100 " : "opacity-0 invisible max-lg:hidden"
        }`}
        onMouseEnter={() => handleMouseEnter("solutions")} // Ensure to handle mouse enter on the dropdown as well
        onMouseLeave={handleMouseLeave}
      >
        <div className="lg:px-4 lg:border-r-[1px] mb-4 lg:mb-0">
          <ul className="max-lg:pl-6">
            <li
              className="border-b-[1px]"
              onMouseEnter={() => setCurrentCategory("Automation")}
            >
              <Navlist
                main="Automation"
                submain=""
                path2=""
                path="M1 3a2 2 0 0 1 2-2h6.5a2 2 0 0 1 2 2v6.5a2 2 0 0 1-2 2H7v4.063C7 16.355 7.644 17 8.438 17H12.5v-2.5a2 2 0 0 1 2-2H21a2 2 0 0 1 2 2V21a2 2 0 0 1-2 2h-6.5a2 2 0 0 1-2-2v-2.5H8.437A2.939 2.939 0 0 1 5.5 15.562V11.5H3a2 2 0 0 1-2-2Zm2-.5a.5.5 0 0 0-.5.5v6.5a.5.5 0 0 0 .5.5h6.5a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5ZM14.5 14a.5.5 0 0 0-.5.5V21a.5.5 0 0 0 .5.5H21a.5.5 0 0 0 .5-.5v-6.5a.5.5 0 0 0-.5-.5Z"
              />
            </li>
            <li
              className="border-b-[1px]"
              onMouseEnter={() => setCurrentCategory("Cloud")}
            >
              <Navlist
                main="Cloud"
                submain=""
                path2=""
                path="M12.876.64V.639l8.25 4.763c.541.313.875.89.875 1.515v9.525a1.75 1.75 0 0 1-.875 1.516l-8.25 4.762a1.748 1.748 0 0 1-1.75 0l-8.25-4.763a1.75 1.75 0 0 1-.875-1.515V6.917c0-.625.334-1.202.875-1.515L11.126.64a1.748 1.748 0 0 1 1.75 0Zm-1 1.298L4.251 6.34l7.75 4.474 7.75-4.474-7.625-4.402a.248.248 0 0 0-.25 0Zm.875 19.123 7.625-4.402a.25.25 0 0 0 .125-.216V7.639l-7.75 4.474ZM3.501 7.64v8.803c0 .09.048.172.125.216l7.625 4.402v-8.947Z"
              />
            </li>
            <li
              className=""
              onMouseEnter={() => setCurrentCategory("Transformation")}
            >
              <Navlist
                main="Transformation"
                submain=""
                path2="M16.53 9.78a.75.75 0 0 0-1.06-1.06L11 13.19l-1.97-1.97a.75.75 0 0 0-1.06 1.06l2.5 2.5a.75.75 0 0 0 1.06 0l5-5Z"
                path="m12.54.637 8.25 2.675A1.75 1.75 0 0 1 22 4.976V10c0 6.19-3.771 10.704-9.401 12.83a1.704 1.704 0 0 1-1.198 0C5.77 20.705 2 16.19 2 10V4.976c0-.758.489-1.43 1.21-1.664L11.46.637a1.748 1.748 0 0 1 1.08 0Zm-.617 1.426-8.25 2.676a.249.249 0 0 0-.173.237V10c0 5.46 3.28 9.483 8.43 11.426a.199.199 0 0 0 .14 0C17.22 19.483 20.5 15.461 20.5 10V4.976a.25.25 0 0 0-.173-.237l-8.25-2.676a.253.253 0 0 0-.154 0Z"
              />
            </li>
          </ul>
        </div>
        {/* Second level dropdowns */}
        <div
          // className="lg:px-8 lg:border-r-[1px] lg:pr-10 py-2 max-lg:pl-6 z-50"
          className=" py-2 max-lg:pl-6 z-50"
        >
          {currentCategory === "Automation" && (
            <SubNavList
              links={[
                {
                  sectionLabel: "Intelligent Technologies",
                  sectionHref: "/Solutions/Intelligent-Technologies",
                  subLinks: [
                    {
                      label: "AI & ML",
                      href: "/Solutions/Intelligent-Technologies/AI-ML",
                    },
                    {
                      label: "RPA",
                      href: "/Solutions/Intelligent-Technologies/RPA",
                    },
                    {
                      label: "IIoT",
                      href: "/Solutions/Intelligent-Technologies/IIOT",
                    },
                  ],
                },
                {
                  sectionLabel: "Data Insights",
                  sectionHref: "/Solutions/Data-Insights",
                  subLinks: [
                    {
                      label: "Cyber Security",
                      href: "/Solutions/Cyber-Security",
                    },
                    // Add more sub-links as needed
                  ],
                },
                {
                  sectionLabel: "Technology Stack",
                  sectionHref: "/Solutions/Technology-Stack",
                  subLinks: [],
                },
              ]}
            />
          )}

          {currentCategory === "Cloud" && (
            <SubNavList
              links={[
                {
                  sectionLabel: "",
                  sectionHref: "",
                  subLinks: [
                    {
                      label: "Upgrade to Cloud",
                      href: "/Solutions/Upgrade-to-Cloud",
                    },
                    {
                      label: "Cloud Stack & Services",
                      href: "/Solutions/Cloud-Stack-and-Services",
                    },
                  ],
                },
              ]}
            />
          )}

          {currentCategory === "Transformation" && (
            <SubNavList
              links={[
                {
                  sectionLabel: "Enterprise Suite		",
                  sectionHref: "/Solutions/Enterprise-Suite",
                  subLinks: [
                    {
                      label: "Infor",
                      href: "/Solutions/Enterprise-Suite/Infor",
                      level3Links: [
                        {
                          label: "Infor WMS",
                          href: "/Solutions/Enterprise-Suite/Infor/Infor-WMS",
                        },
                        {
                          label: "Infor LN",
                          href: "/Solutions/Enterprise-Suite/Infor/Infor-LN",
                        },
                        {
                          label: "Infor CloudSuite",
                          href: "/Solutions/Enterprise-Suite/Infor/Infor-Cloudsuite",
                        },
                        {
                          label: "HxnEAM",
                          href: "/Solutions/Enterprise-Suite/Infor/HxnEAM",
                        },
                      ],
                    },
                    {
                      label: "Microsoft Practises",
                      href: "/Solutions/Enterprise-Suite/Microsoft-Practises",
                      level3Links: [
                        {
                          label: "Business Central",
                          href: "/Solutions/Enterprise-Suite/Microsoft-Practises/Business-Central",
                        },
                        {
                          label: "F&O",
                          href: "/Solutions/Enterprise-Suite/Microsoft-Practises/FnO",
                        },
                        {
                          label: "D365 Commerce",
                          href: "/Solutions/Enterprise-Suite/Microsoft-Practises/D365-Commerce",
                        },
                      ],
                    },
                    {
                      label: "Oracle",
                      href: "/Solutions/Enterprise-Suite/Oracle",
                    },
                  ],
                },
                {
                  sectionLabel: "Customer Experience",
                  sectionHref: "/Solutions/Customer-Experience",
                  subLinks: [
                    {
                      label: "Infor CRM",
                      href: "/Solutions/Customer-Experience/Infor-CRM",
                    },
                    {
                      label: "Microsoft CRM",
                      href: "/Solutions/Customer-Experience/Microsoft-CRM",
                    },
                    {
                      label: "Salesforce CRM",
                      href: "/Solutions/Customer-Experience/Salesforce-CRM",
                    },
                    {
                      label: "Ecommerce",
                      href: "/Solutions/Customer-Experience/E-commerce",
                    },
                    {
                      label: "LS Retail",
                      href: "/Solutions/Customer-Experience/LS-retail",
                    },
                  ],
                },
              ]}
            />
          )}
        </div>
        {/* <div className="lg:px-8 lg:border-r-[1px] lg:pr-10 py-2 max-lg:pl-6">
          <ul>
            <li className="text-[#101828] hover:text-blue-500 pt-2">
              <Link href="/Solutions/Intelligent-Technologies">
                <span className="  text-neutral-800 font-semibold hover:text-blue-500">
                  Intelligent Technologies
                </span>
              </Link>
            </li>
          </ul>

          <ul className="text-sm ml-5 text-[#101828] font-semibold mt-1 w-full">
            <li className="text-[#101828] hover:text-blue-500 py-2">
              <Link href="/Solutions/Intelligent-Technologies/AI-ML">
                AI & ML
              </Link>
            </li>
            <li className="text-[#101828] hover:text-blue-500 py-2">
              <Link href="/Solutions/Intelligent-Technologies/RPA">RPA</Link>
            </li>
            <li className="text-[#101828] hover:text-blue-500 py-2">
              <Link href="/Solutions/Intelligent-Technologies/IIOT">IIOT</Link>
            </li>
          </ul>
        </div>
        <div className="lg:px-8 lg:border-r-[1px] lg:pr-10 py-2 max-lg:pl-6">
          <ul>
            <li className="text-[#101828] hover:text-blue-500 pt-2">
              <Link href="/Solutions/Data-Insights">
                <span className="  text-neutral-800 font-semibold hover:text-blue-500">
                  Data Insights
                </span>
              </Link>
            </li>
          </ul>

          <ul className="text-sm ml-5">
            <li className="text-[#101828] font-semibold hover:text-blue-500 py-2">
              <Link href="/Solutions/Cyber-Security">Cyber Security</Link>
            </li>
          </ul>
        </div>
        <div className="lg:px-8 lg:border-r-[1px] lg:pr-10 py-2 max-lg:pl-6">
          <ul>
            <li className="text-[#101828] hover:text-blue-500 pt-2">
              <Link href="#">
                <span className="  text-[#101828] font-semibold hover:text-blue-500">
                  Technology Stack
                </span>
              </Link>
            </li>
          </ul>

          <ul className="text-sm hidden ml-3">
            <li className="text-[#101828] hover:text-blue-500 py-2">
              <Link href="/Solutions/Intelligent-Technologies/AI-ML">
                AI & ML
              </Link>
            </li>
            <li className="text-[#101828] hover:text-blue-500 py-2">
              <Link href="/Solutions/Intelligent-Technologies/RPA">RPA</Link>
            </li>
            <li className="text-[#101828] hover:text-blue-500 py-2">
              <Link href="/Solutions/Intelligent-Technologies/IIOT">IIOT</Link>
            </li>
          </ul>
        </div> */}
      </div>
    </li>
  );
};

export default SolutionsNav;
