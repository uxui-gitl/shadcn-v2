"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { animate, stagger } from "framer-motion/dom";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";
import NavLinks from "@/components/Navbar/NavUtils/NavLinks";

function NewNavBar() {
  const router = useRouter();
  const [isNavbarActive, setNavbarActive] = useState(false);
  const dropdownRef = useRef(null); // Ref for dropdown container
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);
  const [navName, setNavName] = useState();
  const [activeLink, setActiveLink] = useState("");
  const [tabNumber, setTabNumber] = useState(1);
  const [link, setLink] = useState([
    {
      id: "1",
      href: "/",
      text: "Solutions",
      value: "solutions",
      isDropDown: true,
    },
    {
      id: "2",
      href: "/",
      text: "Services",
      value: "services",
      isDropDown: true,
    },
    {
      id: "3",
      href: "/",
      text: "Industry Focus",
      value: "industry",
      isDropDown: true,
    },
    {
      id: "4",
      href: "/about-us",
      text: "About us",
      value: "about",
      isDropDown: false,
    },
    {
      id: "5",
      href: "/contact-us",
      text: "Insights",
      value: "insights",
      isDropDown: true,
    },
    {
      id: "6",
      href: "/contact-us",
      text: "Careers",
      value: "careers",
      isDropDown: true,
    },
  ]);

  function tabClickHandle(val) {
    setTabNumber(val);
  }

  function handleNavClick(item) {
    if (item.value == navName) {
      setNavbarActive(!isNavbarActive);
    } else {
      setNavbarActive(true);
    }
    setNavName(item.value);
  }
  const closeNavbar = () => {
    setIsAnimatingOut(true);
    setTimeout(() => {
      setNavbarActive(false);
      setIsAnimatingOut(false);
    }, 300);
  };

  useEffect(() => {
    document.body.style.overflowY = isNavbarActive ? "hidden" : "scroll";

    // Detect click outside
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeNavbar(); // Close the navbar if clicked outside
      }
    };

    if (isNavbarActive) {
      document.addEventListener("mousedown", handleClickOutside); // Attach event listener
    } else {
      document.removeEventListener("mousedown", handleClickOutside); // Cleanup
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside); // Cleanup on unmount
    };
  }, [isNavbarActive]);

  function navLinkClick(url) {
    console.log(activeLink);
    setActiveLink(url);
    router.push(url);
    setNavbarActive(!isNavbarActive);
  }

  return (
    <>
      <div
        className={`${
          isNavbarActive ? "bg-[#fff]" : "bg-[transparent]"
        } absolute top-0 z-[100] w-full invisible xl:visible `}
      >
        <div className={`border-1 px-10 z-50`}>
          <div className="container mx-auto flex flex-col sm:flex-row sm:justify-between h-lvh sm:h-[100px] sm:items-center py-5">
            <div className="logo sm:border-b-0 border-b-4 py-3 sm:py-0">
              <Link href="/">
                <Image
                  src={`${
                    isNavbarActive ? "/logo-black.svg" : "/godrejLogoWhite.svg"
                  }`}
                  alt="godrej logo"
                  width="188"
                  height="96"
                />
              </Link>
            </div>
            <div className="links flex sm:flex-row flex-col">
              <>
                {link?.map((item, index) => (
                  <>
                    {item.isDropDown == true ? (
                      <button
                        className={`sm:mr-10 text-[16px] font-medium py-5 hover:text-[#5F22D9] ${
                          isNavbarActive ? "text-[#000]" : "text-[#fff]"
                        }`}
                        onClick={() => handleNavClick(item)}
                      >
                        {item.text}{" "}
                      </button>
                    ) : (
                      <Link
                        key={index}
                        className={`sm:mr-10 text-[16px] font-medium py-5 hover:text-[#5F22D9] last:mr-0 ${
                          isNavbarActive ? "text-[#000]" : "text-[#fff]"
                        }`}
                        href={item.href}
                      >
                        {item.text}
                      </Link>
                    )}
                  </>
                ))}
              </>
            </div>
            <button
        type="button"
        className={`${
          isNavbarActive
            ? "bg-white border border-x-neutral-light-grey text-neutral-dark-grey hover:bg-primary-400 hover:text-neutral-white"
            : "text-white bg-[#5F22D9] hover:bg-blue-800"
        } focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center transition-colors duration-300`}
        onClick={() => navLinkClick("/contact-us")}
      >
        Get In Touch
      </button>
            {/* Close Button */}
            <button
                   className={`text-neutral-white bg-primary-400 hover:bg-primary-600 focus:outline-none font-medium rounded-full text-sm p-2.5 flex items-center justify-center invisible xl:visible ${
                    isNavbarActive ? "opacity-100 visible delay-500" : "opacity-0 invisible"
                  } transition-opacity duration-300`}
                  onClick={() => setNavbarActive(false)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
          </div>
        </div>

        <div
          className={`z-[10] px-10 w-full bg-white absolute top-[0px] duration-700 rounded-b-3xl shadow-lg  shadow-gray-500/10 ${
            isNavbarActive
              ? "translate-y-0 top-[100px]"
              : "-translate-y-full top-[0px]"
          }`}
          style={{ height: `calc(80vh - 66px)` }}
        >
          <AnimatePresence>
            {isNavbarActive && (
              <motion.div
               
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                

                <div
                  className="container mx-auto solution-content grid grid-cols-4 gap-8 border-t-[0.5px] border-neutral-light-grey "
                  style={{
                    height: `calc('100vh - 116px')`,
                   
                  }}
                >
                  <div
                    className="  py-6 border-r-[0.5px] border-neutral-light-grey"
                   
                  >
                    {navName == "solutions" && (
                      <div className="grid grid-rows-3 gap-2">
                        <div
                          className={`flex leading-[28px] justify-start p-2 font-semibold`}
                        >
                          <img
                            src="/navbar-icon/cube-outline.svg"
                            alt={"asdn"}
                            className="mr-6 h-[24px] w-[24px] mt-1"
                          />
                          <div className="">
                            <span
                              className={`w-full text-[20px] font-semibold hover:text-[#5F22D9] cursor-pointer ${
                                tabNumber == 1
                                  ? "text-[#5F22D9]"
                                  : "text-[#000000]"
                              }`}
                              onClick={() => tabClickHandle(1)}
                            >
                              Automation
                            </span>
                            <p className="text-[12px] font-medium leading-[16px] text-[#808080]">
                              Delivering business value with <br></br>
                              automation
                            </p>
                          </div>
                        </div>
                        <div
                          className={`flex leading-[28px] justify-start p-2 font-semibold`}
                        >
                          <img
                            src="/navbar-icon/cloud.svg"
                            alt={"asdn"}
                            className="mr-6 h-[24px] w-[24px] mt-1"
                          />
                          <div className="">
                            <span
                              className={`w-full text-[20px] font-semibold hover:text-[#5F22D9] cursor-pointer ${
                                tabNumber == 2
                                  ? "text-[#5F22D9]"
                                  : "text-[#000000]"
                              }`}
                              onClick={() => tabClickHandle(2)}
                            >
                              Cloud
                            </span>
                            <p className="text-[12px] font-medium leading-[16px] text-[#808080]">
                              Delivering business value with<br></br>
                              automation
                            </p>
                          </div>
                        </div>

                        <div
                          className={`flex leading-[28px] justify-start p-2 font-semibold`}
                        >
                          <img
                            src="/navbar-icon/ts.svg"
                            alt={"asdn"}
                            className="mr-6 h-[24px] w-[24px] mt-1"
                          />
                          <div className="">
                            <span
                              className={`w-full text-[20px] font-semibold hover:text-[#5F22D9] cursor-pointer ${
                                tabNumber == 3
                                  ? "text-[#5F22D9]"
                                  : "text-[#000000]"
                              }`}
                              onClick={() => tabClickHandle(3)}
                            >
                              Transformation
                            </span>
                            <p className="text-[12px] font-medium leading-[16px] text-[#808080]">
                              Delivering business value with<br></br>
                              automation
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  {/* 1st column automation*/}
                  <div
                    className=" py-6 col-span-2  border-r-[0.5px] border-neutral-light-grey"
                    
                  >
                    {navName == "solutions" && (
                      <div className="">
                        <div
                          className={`automation grid grid-cols-1 gap-4 invisible xl:visible ${
                            tabNumber == 1 ? "visible" : "hidden"
                          }`}
                        >
                          <div className="">
                            <div
                              className={`flex leading-[28px] justify-start font-semibold mb-6`}
                            >
                              <div>
                                <a
                                  href="/solutions/intelligent-technologies"
                                  onClick={(e) => {
                                    e.preventDefault(); // Prevent default navigation
                                    navLinkClick(
                                      "/solutions/intelligent-technologies"
                                    );
                                  }}
                                  className={`w-full text-[20px] font-semibold cursor-pointer mb-2 hover:text-[#5F22D9] ${
                                    activeLink ===
                                    "/solutions/intelligent-technologies"
                                      ? "text-[#5F22D9]"
                                      : "text-[#1D162B]"
                                  }`}
                                >
                                  Intelligent Technologies
                                </a>

                                <p className="text-[12px] font-medium leading-[16px] text-[#808080]">
                                  Delivering business value with <br></br>
                                  automation
                                </p>
                              </div>
                            </div>
                            <div>
                              <a
                                href="/solutions/intelligent-technologies/ai-ml"
                                onClick={(e) => {
                                  e.preventDefault();
                                  navLinkClick(
                                    "/solutions/intelligent-technologies/ai-ml"
                                  );
                                }}
                                className={`text-[16px] font-semibold cursor-pointer mb-2 hover:text-[#5F22D9] ${
                                  activeLink ===
                                  "/solutions/intelligent-technologies/ai-ml"
                                    ? "text-[#5F22D9]"
                                    : "text-[#808080]"
                                }`}
                              >
                                AI/ML
                              </a>
                            </div>
                            <div>
                              <a
                                href="/solutions/intelligent-technologies/RPA"
                                onClick={(e) => {
                                  e.preventDefault();
                                  navLinkClick(
                                    "/solutions/intelligent-technologies/RPA"
                                  );
                                }}
                                className={`text-[16px] font-semibold cursor-pointer mb-2 hover:text-[#5F22D9] ${
                                  activeLink ===
                                  "/solutions/intelligent-technologies/RPA"
                                    ? "text-[#5F22D9]"
                                    : "text-[#808080]"
                                }`}
                              >
                                RPA
                              </a>
                            </div>
                            <div>
                              <a
                                href="/solutions/intelligent-technologies/IIOT"
                                onClick={(e) => {
                                  e.preventDefault();
                                  navLinkClick(
                                    "/solutions/intelligent-technologies/IIOT"
                                  );
                                }}
                                className={`text-[16px] font-semibold cursor-pointer mb-2 hover:text-[#5F22D9] ${
                                  activeLink ===
                                  "/solutions/intelligent-technologies/IIOT"
                                    ? "text-[#5F22D9]"
                                    : "text-[#808080]"
                                }`}
                              >
                                IIOT
                              </a>
                            </div>
                          </div>
                          <div className="">
                            <div
                              className={`flex leading-[28px] justify-start font-semibold mb-4`}
                            >
                              <div>
                                <a
                                  href="/solutions/data-insights"
                                  onClick={(e) => {
                                    e.preventDefault(); // Prevent default navigation
                                    navLinkClick("/solutions/data-insights");
                                  }}
                                  className={`w-full text-[20px] font-semibold cursor-pointer mb-2 hover:text-[#5F22D9] ${
                                    activeLink === "/solutions/data-insights"
                                      ? "text-[#5F22D9]"
                                      : "text-[#1D162B]"
                                  }`}
                                >
                                  Data Insights
                                </a>

                                <p className="text-[12px] font-medium leading-[16px] text-[#808080]">
                                  Delivering business value with <br></br>
                                  automation
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="">
                            <div
                              className={`flex leading-[28px] justify-start font-semibold mb-4`}
                            >
                              <div>
                                <a
                                  href="/solutions/cyber-security"
                                  onClick={(e) => {
                                    e.preventDefault(); // Prevent default navigation
                                    navLinkClick("/solutions/cyber-security");
                                  }}
                                  className={`w-full text-[20px] font-semibold cursor-pointer mb-2 hover:text-[#5F22D9] ${
                                    activeLink === "/solutions/cyber-security"
                                      ? "text-[#5F22D9]"
                                      : "text-[#1D162B]"
                                  }`}
                                >
                                  Cyber Security
                                </a>

                                <p className="text-[12px] font-medium leading-[16px] text-[#808080]">
                                  Delivering business value with <br></br>
                                  automation
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="">
                            <div
                              className={`flex leading-[28px] justify-start font-semibold mb-4`}
                            >
                              <div>
                                <a
                                  href="/solutions/technology-stack"
                                  onClick={(e) => {
                                    e.preventDefault(); // Prevent default navigation
                                    navLinkClick("/solutions/technology-stack");
                                  }}
                                  className={`w-full text-[20px] font-semibold cursor-pointer mb-2 hover:text-[#5F22D9] ${
                                    activeLink === "/solutions/technology-stack"
                                      ? "text-[#5F22D9]"
                                      : "text-[#1D162B]"
                                  }`}
                                >
                                  Technology Stack
                                </a>

                                <p className="text-[12px] font-medium leading-[16px] text-[#808080]">
                                  Delivering business value with <br></br>
                                  automation
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div
                          className={`cloud grid grid-cols-1 gap-4 ${
                            tabNumber == 2 ? "visible" : "hidden"
                          }`}
                        >
                          <div className="">
                            <div
                              className={`flex leading-[28px] justify-start font-semibold mb-4`}
                            >
                              <div>
                                <a
                                  href="/solutions/upgrade-to-cloud"
                                  onClick={(e) => {
                                    e.preventDefault(); // Prevent default navigation
                                    navLinkClick("/solutions/upgrade-to-cloud");
                                  }}
                                  className={`w-full text-[20px] font-semibold cursor-pointer mb-2 hover:text-[#5F22D9] ${
                                    activeLink === "/solutions/upgrade-to-cloud"
                                      ? "text-[#5F22D9]"
                                      : "text-[#1D162B]"
                                  }`}
                                >
                                  Upgrade To Cloud
                                </a>

                                <p className="text-[12px] font-medium leading-[16px] text-[#808080]">
                                  Delivering business value with <br></br>
                                  automation
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="">
                            <div
                              className={`flex leading-[28px] justify-start font-semibold mb-4`}
                            >
                              <div>
                                <a
                                  href="/solutions/cloud-stack-and-services"
                                  onClick={(e) => {
                                    e.preventDefault(); // Prevent default navigation
                                    navLinkClick(
                                      "/solutions/cloud-stack-and-services"
                                    );
                                  }}
                                  className={`w-full text-[20px] font-semibold cursor-pointer mb-2 hover:text-[#5F22D9] ${
                                    activeLink ===
                                    "/solutions/cloud-stack-and-services"
                                      ? "text-[#5F22D9]"
                                      : "text-[#1D162B]"
                                  }`}
                                >
                                  Cloud Stack & Services
                                </a>

                                <p className="text-[12px] font-medium leading-[16px] text-[#808080]">
                                  Delivering business value with <br></br>
                                  automation
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div
                          className={`transformation grid grid-cols-1 gap-4 ${
                            tabNumber == 3 ? "visiable" : "hidden"
                          }`}
                        >
                          <div className="">
                            <div
                              className={`flex leading-[28px] justify-start font-semibold mb-4`}
                            >
                              <div>
                                <a
                                  href="/solutions/enterprise-suite"
                                  onClick={(e) => {
                                    e.preventDefault(); // Prevent default navigation
                                    navLinkClick("/solutions/enterprise-suite");
                                  }}
                                  className={`w-full text-[20px] font-semibold cursor-pointer mb-2 hover:text-[#5F22D9] ${
                                    activeLink === "/solutions/enterprise-suite"
                                      ? "text-[#5F22D9]"
                                      : "text-[#1D162B]"
                                  }`}
                                >
                                  Enterprise Suite
                                </a>

                                <p className="text-[12px] font-medium leading-[16px] text-[#808080]">
                                  Delivering business value with <br></br>
                                  automation
                                </p>
                              </div>
                            </div>
                            <div className="grid grid-cols-3 gap-4">
                              <div className="">
                                <div>
                                  <a
                                    href="/solutions/enterprise-suite/infor"
                                    onClick={(e) => {
                                      e.preventDefault();
                                      navLinkClick(
                                        "/solutions/enterprise-suite/infor"
                                      );
                                    }}
                                    className={`text-[16px] font-semibold cursor-pointer mb-2 hover:text-[#5F22D9] ${
                                      activeLink ===
                                      "/solutions/enterprise-suite/infor"
                                        ? "text-[#5F22D9]"
                                        : "text-primary-900"
                                    }`}
                                  >
                                    Infor
                                  </a>
                                </div>
                                <div>
                                  <a
                                    href="/solutions/enterprise-suite/infor/infor-wms"
                                    onClick={(e) => {
                                      e.preventDefault();
                                      navLinkClick(
                                        "/solutions/enterprise-suite/infor/infor-wms"
                                      );
                                    }}
                                    className={`text-[16px] font-semibold cursor-pointer mb-2 hover:text-[#5F22D9] ${
                                      activeLink ===
                                      "/solutions/enterprise-suite/infor/infor-wms"
                                        ? "text-[#5F22D9]"
                                        : "text-neutral-dark-grey"
                                    }`}
                                  >
                                    Infor WMS
                                  </a>
                                </div>
                                <div>
                                  <a
                                    href="/solutions/enterprise-suite/infor/infor-ln"
                                    onClick={(e) => {
                                      e.preventDefault();
                                      navLinkClick(
                                        "/solutions/enterprise-suite/infor/infor-ln"
                                      );
                                    }}
                                    className={`text-[16px] font-semibold cursor-pointer mb-2 hover:text-[#5F22D9] ${
                                      activeLink ===
                                      "/solutions/enterprise-suite/infor/infor-ln"
                                        ? "text-[#5F22D9]"
                                        : "text-neutral-dark-grey"
                                    }`}
                                  >
                                    Infor LN
                                  </a>
                                </div>
                                <div>
                                  <a
                                    href="/solutions/enterprise-suite/infor/infor-cloudsuite"
                                    onClick={(e) => {
                                      e.preventDefault();
                                      navLinkClick(
                                        "/solutions/enterprise-suite/infor/infor-cloudsuite"
                                      );
                                    }}
                                    className={`text-[16px] font-semibold cursor-pointer mb-2 hover:text-[#5F22D9] ${
                                      activeLink ===
                                      "/solutions/enterprise-suite/infor/infor-cloudsuite"
                                        ? "text-[#5F22D9]"
                                        : "text-neutral-dark-grey"
                                    }`}
                                  >
                                    Infor Cloudsuite
                                  </a>
                                </div>
                                <div>
                                  <a
                                    href=" /solutions/enterprise-suite/infor/hxneam"
                                    onClick={(e) => {
                                      e.preventDefault();
                                      navLinkClick(
                                        " /solutions/enterprise-suite/infor/hxneam"
                                      );
                                    }}
                                    className={`text-[16px] font-semibold cursor-pointer mb-2 hover:text-[#5F22D9] ${
                                      activeLink ===
                                      " /solutions/enterprise-suite/infor/hxneam"
                                        ? "text-[#5F22D9]"
                                        : "text-neutral-dark-grey"
                                    }`}
                                  >
                                    HxnEAM
                                  </a>
                                </div>
                              </div>
                              <div className="">
                                <div>
                                  <a
                                    href="/solutions/enterprise-suite/microsoft-practises"
                                    onClick={(e) => {
                                      e.preventDefault();
                                      navLinkClick(
                                        "/solutions/enterprise-suite/microsoft-practises"
                                      );
                                    }}
                                    className={`text-[16px] font-semibold cursor-pointer mb-2 hover:text-[#5F22D9] ${
                                      activeLink ===
                                      "/solutions/enterprise-suite/microsoft-practises"
                                        ? "text-[#5F22D9]"
                                        : "text-primary-900"
                                    }`}
                                  >
                                    Microsoft Practices
                                  </a>
                                </div>
                                <div>
                                  <a
                                    href="/solutions/enterprise-suite/microsoft-practises/business-central"
                                    onClick={(e) => {
                                      e.preventDefault();
                                      navLinkClick(
                                        "/solutions/enterprise-suite/microsoft-practises/business-central"
                                      );
                                    }}
                                    className={`text-[16px] font-semibold cursor-pointer mb-2 hover:text-[#5F22D9] ${
                                      activeLink ===
                                      "/solutions/enterprise-suite/microsoft-practises/business-central"
                                        ? "text-[#5F22D9]"
                                        : "text-neutral-dark-grey"
                                    }`}
                                  >
                                    Business Central
                                  </a>
                                </div>
                                <div>
                                  <a
                                    href="/solutions/enterprise-suite/microsoft-practises/fno"
                                    onClick={(e) => {
                                      e.preventDefault();
                                      navLinkClick(
                                        "/solutions/enterprise-suite/microsoft-practises/fno"
                                      );
                                    }}
                                    className={`text-[16px] font-semibold cursor-pointer mb-2 hover:text-[#5F22D9] ${
                                      activeLink ===
                                      "/solutions/enterprise-suite/microsoft-practises/fno"
                                        ? "text-[#5F22D9]"
                                        : "text-neutral-dark-grey"
                                    }`}
                                  >
                                    F&O
                                  </a>
                                </div>
                                <div>
                                  <a
                                    href="/solutions/enterprise-suite/microsoft-practises/d365-commerce"
                                    onClick={(e) => {
                                      e.preventDefault();
                                      navLinkClick(
                                        "/solutions/enterprise-suite/microsoft-practises/d365-commerce"
                                      );
                                    }}
                                    className={`text-[16px] font-semibold cursor-pointer mb-2 hover:text-[#5F22D9] ${
                                      activeLink ===
                                      "/solutions/enterprise-suite/microsoft-practises/d365-commerce"
                                        ? "text-[#5F22D9]"
                                        : "text-neutral-dark-grey"
                                    }`}
                                  >
                                    D365 Commerce
                                  </a>
                                </div>
                              </div>

                              <div>
                                <a
                                  href="/solutions/enterprise-suite/oracle"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    navLinkClick(
                                      "/solutions/enterprise-suite/oracle"
                                    );
                                  }}
                                  className={`text-[16px] font-semibold cursor-pointer mb-2 hover:text-[#5F22D9] ${
                                    activeLink ===
                                    "/solutions/enterprise-suite/oracle"
                                      ? "text-[#5F22D9]"
                                      : "text-primary-900"
                                  }`}
                                >
                                  Oracle
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="">
                            <div
                              className={`flex leading-[28px] justify-start font-semibold mb-4`}
                            >
                              <div>
                                <a
                                  href="/solutions/customer-experience"
                                  onClick={(e) => {
                                    e.preventDefault(); // Prevent default navigation
                                    navLinkClick(
                                      "/solutions/customer-experience"
                                    );
                                  }}
                                  className={`w-full text-[20px] font-semibold cursor-pointer mb-2 hover:text-[#5F22D9] ${
                                    activeLink ===
                                    "/solutions/customer-experience"
                                      ? "text-[#5F22D9]"
                                      : "text-[#1D162B]"
                                  }`}
                                >
                                  Customer Experience
                                </a>

                                <p className="text-[12px] font-medium leading-[16px] text-[#808080]">
                                  Delivering business value with <br></br>
                                  automation
                                </p>
                              </div>
                            </div>

                            <div>
                              <a
                                href="/solutions/customer-experience/infor-crm"
                                onClick={(e) => {
                                  e.preventDefault();
                                  navLinkClick(
                                    "/solutions/customer-experience/infor-crm"
                                  );
                                }}
                                className={`text-[16px] font-semibold cursor-pointer mb-2 hover:text-[#5F22D9] ${
                                  activeLink ===
                                  "/solutions/customer-experience/infor-crm"
                                    ? "text-[#5F22D9]"
                                    : "text-neutral-dark-grey"
                                }`}
                              >
                                Infor CRM
                              </a>
                            </div>

                            <div>
                              <a
                                href="/solutions/customer-experience/microsoft-crm"
                                onClick={(e) => {
                                  e.preventDefault();
                                  navLinkClick(
                                    "/solutions/customer-experience/microsoft-crm"
                                  );
                                }}
                                className={`text-[16px] font-semibold cursor-pointer mb-2 hover:text-[#5F22D9] ${
                                  activeLink ===
                                  "/solutions/customer-experience/microsoft-crm"
                                    ? "text-[#5F22D9]"
                                    : "text-neutral-dark-grey"
                                }`}
                              >
                                Microsoft CRM
                              </a>
                            </div>
                            <div>
                              <a
                                href="/solutions/customer-experience/salesforce-crm"
                                onClick={(e) => {
                                  e.preventDefault();
                                  navLinkClick(
                                    "/solutions/customer-experience/salesforce-crm"
                                  );
                                }}
                                className={`text-[16px] font-semibold cursor-pointer mb-2 hover:text-[#5F22D9] ${
                                  activeLink ===
                                  "/solutions/customer-experience/salesforce-crm"
                                    ? "text-[#5F22D9]"
                                    : "text-neutral-dark-grey"
                                }`}
                              >
                                Salesforce CRM
                              </a>
                            </div>
                            <div>
                              <a
                                href="/solutions/customer-experience/e-commerce"
                                onClick={(e) => {
                                  e.preventDefault();
                                  navLinkClick(
                                    "/solutions/customer-experience/e-commerce"
                                  );
                                }}
                                className={`text-[16px] font-semibold cursor-pointer mb-2 hover:text-[#5F22D9] ${
                                  activeLink ===
                                  "/solutions/customer-experience/e-commerce"
                                    ? "text-[#5F22D9]"
                                    : "text-neutral-dark-grey"
                                }`}
                              >
                                E-Commerce
                              </a>
                            </div>
                            <div>
                              <a
                                href="/solutions/customer-experience/ls-retail"
                                onClick={(e) => {
                                  e.preventDefault();
                                  navLinkClick(
                                    "/solutions/customer-experience/ls-retail"
                                  );
                                }}
                                className={`text-[16px] font-semibold cursor-pointer mb-2 hover:text-[#5F22D9] ${
                                  activeLink ===
                                  "/solutions/customer-experience/ls-retail"
                                    ? "text-[#5F22D9]"
                                    : "text-neutral-dark-grey"
                                }`}
                              >
                                LS Retail
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {navName == "services" && (
                      <>
                        <div
                          className={`flex leading-[28px] justify-start p-2 font-semibold`}
                        >
                          <img
                            src="/navbar-icon/cloud.svg"
                            alt={"asdn"}
                            className="mr-6 h-[24px] w-[24px] mt-1"
                          />
                          <div>
                            <a
                              href="/our-services/business-consulting"
                              onClick={(e) => {
                                e.preventDefault(); // Prevent default navigation
                                navLinkClick(
                                  "/our-services/business-consulting"
                                );
                              }}
                              className={`w-full text-[20px] font-semibold cursor-pointer mb-2 hover:text-[#5F22D9] ${
                                activeLink ===
                                "/our-services/business-consulting"
                                  ? "text-[#5F22D9]"
                                  : "text-[#1D162B]"
                              }`}
                            >
                              Business Consulting
                            </a>

                            <p className="text-[12px] font-medium leading-[16px] text-[#808080]">
                              Delivering business value with <br></br>
                              automation
                            </p>
                          </div>
                        </div>
                        <div
                          className={`flex leading-[28px] justify-start p-2 font-semibold`}
                        >
                          <img
                            src="/navbar-icon/cloud.svg"
                            alt={"asdn"}
                            className="mr-6 h-[24px] w-[24px] mt-1"
                          />

                          <div>
                            <a
                              href="/our-services/implementation-and-global-rollout"
                              onClick={(e) => {
                                e.preventDefault(); // Prevent default navigation
                                navLinkClick(
                                  "/our-services/implementation-and-global-rollout"
                                );
                              }}
                              className={`w-full text-[20px] font-semibold cursor-pointer mb-2 hover:text-[#5F22D9] ${
                                activeLink ===
                                "/our-services/implementation-and-global-rollout"
                                  ? "text-[#5F22D9]"
                                  : "text-[#1D162B]"
                              }`}
                            >
                              Implementation and Global Rollout
                            </a>

                            <p className="text-[12px] font-medium leading-[16px] text-[#808080]">
                              Delivering business value with <br></br>
                              automation
                            </p>
                          </div>
                        </div>
                        <div
                          className={`flex leading-[28px] justify-start p-2 font-semibold`}
                        >
                          <img
                            src="/navbar-icon/cloud.svg"
                            alt={"asdn"}
                            className="mr-6 h-[24px] w-[24px] mt-1"
                          />

                          <div>
                            <a
                              href="/our-services/managed-services"
                              onClick={(e) => {
                                e.preventDefault(); // Prevent default navigation
                                navLinkClick("/our-services/managed-services");
                              }}
                              className={`w-full text-[20px] font-semibold cursor-pointer mb-2 hover:text-[#5F22D9] ${
                                activeLink === "/our-services/managed-services"
                                  ? "text-[#5F22D9]"
                                  : "text-[#1D162B]"
                              }`}
                            >
                              Managed Services
                            </a>

                            <p className="text-[12px] font-medium leading-[16px] text-[#808080]">
                              Delivering business value with <br></br>
                              automation
                            </p>
                          </div>
                        </div>
                      </>
                    )}

                    {navName == "industry" && (
                      <>
                        <div
                          className={`flex leading-[28px] justify-start p-2 font-semibold`}
                        >
                          <img
                            src="/navbar-icon/cloud.svg"
                            alt={"asdn"}
                            className="mr-6 h-[24px] w-[24px] mt-1"
                          />

                          <div>
                            <a
                              href="/industries/manufacturing"
                              onClick={(e) => {
                                e.preventDefault(); // Prevent default navigation
                                navLinkClick("/industries/manufacturing");
                              }}
                              className={`w-full text-[20px] font-semibold cursor-pointer mb-2 hover:text-[#5F22D9] ${
                                activeLink === "/industries/manufacturing"
                                  ? "text-[#5F22D9]"
                                  : "text-[#1D162B]"
                              }`}
                            >
                              Manufacturing
                            </a>

                            <p className="text-[12px] font-medium leading-[16px] text-[#808080]">
                              Delivering business value with <br></br>
                              automation
                            </p>
                          </div>
                        </div>
                        <div
                          className={`flex leading-[28px] justify-start p-2 font-semibold`}
                        >
                          <img
                            src="/navbar-icon/cloud.svg"
                            alt={"asdn"}
                            className="mr-6 h-[24px] w-[24px] mt-1"
                          />
                          <div>
                            <a
                              href="/industries/retail"
                              onClick={(e) => {
                                e.preventDefault(); // Prevent default navigation
                                navLinkClick("/industries/retail");
                              }}
                              className={`w-full text-[20px] font-semibold cursor-pointer mb-2 hover:text-[#5F22D9] ${
                                activeLink === "/industries/retail"
                                  ? "text-[#5F22D9]"
                                  : "text-[#1D162B]"
                              }`}
                            >
                              Retail
                            </a>

                            <p className="text-[12px] font-medium leading-[16px] text-[#808080]">
                              Delivering business value with <br></br>
                              automation
                            </p>
                          </div>
                        </div>
                        <div
                          className={`flex leading-[28px] justify-start p-2 font-semibold`}
                        >
                          <img
                            src="/navbar-icon/cloud.svg"
                            alt={"asdn"}
                            className="mr-6 h-[24px] w-[24px] mt-1"
                          />
                          <div>
                            <a
                              href="/industries/trading-and-distribution"
                              onClick={(e) => {
                                e.preventDefault(); // Prevent default navigation
                                navLinkClick(
                                  "/industries/trading-and-distribution"
                                );
                              }}
                              className={`w-full text-[20px] font-semibold cursor-pointer mb-2 hover:text-[#5F22D9] ${
                                activeLink ===
                                "/industries/trading-and-distribution"
                                  ? "text-[#5F22D9]"
                                  : "text-[#1D162B]"
                              }`}
                            >
                              Trading and Distribution
                            </a>

                            <p className="text-[12px] font-medium leading-[16px] text-[#808080]">
                              Delivering business value with <br></br>
                              automation
                            </p>
                          </div>
                        </div>
                        <div
                          className={`flex leading-[28px] justify-start p-2 font-semibold`}
                        >
                          <img
                            src="/navbar-icon/cloud.svg"
                            alt={"asdn"}
                            className="mr-6 h-[24px] w-[24px] mt-1"
                          />
                          <div>
                            <a
                              href="/industries/project"
                              onClick={(e) => {
                                e.preventDefault(); // Prevent default navigation
                                navLinkClick("/industries/project");
                              }}
                              className={`w-full text-[20px] font-semibold cursor-pointer mb-2 hover:text-[#5F22D9] ${
                                activeLink === "/industries/project"
                                  ? "text-[#5F22D9]"
                                  : "text-[#1D162B]"
                              }`}
                            >
                              Project
                            </a>

                            <p className="text-[12px] font-medium leading-[16px] text-[#808080]">
                              Delivering business value with <br></br>
                              automation
                            </p>
                          </div>
                        </div>
                        <div
                          className={`flex leading-[28px] justify-start p-2 font-semibold`}
                        >
                          <img
                            src="/navbar-icon/cloud.svg"
                            alt={"asdn"}
                            className="mr-6 h-[24px] w-[24px] mt-1"
                          />
                          <div>
                            <a
                              href="/industries/healthcare"
                              onClick={(e) => {
                                e.preventDefault(); // Prevent default navigation
                                navLinkClick("/industries/healthcare");
                              }}
                              className={`w-full text-[20px] font-semibold cursor-pointer mb-2 hover:text-[#5F22D9] ${
                                activeLink === "/industries/healthcare"
                                  ? "text-[#5F22D9]"
                                  : "text-[#1D162B]"
                              }`}
                            >
                              Healthcare
                            </a>

                            <p className="text-[12px] font-medium leading-[16px] text-[#808080]">
                              Delivering business value with <br></br>
                              automation
                            </p>
                          </div>
                        </div>
                      </>
                    )}

                    {navName == "insights" && (
                      <>
                        <div
                          className={`flex leading-[28px] justify-start p-2 font-semibold`}
                        >
                          <img
                            src="/navbar-icon/cloud.svg"
                            alt={"asdn"}
                            className="mr-6 h-[24px] w-[24px] mt-1"
                          />

                          <div>
                            <a
                              href="/brochures"
                              onClick={(e) => {
                                e.preventDefault(); // Prevent default navigation
                                navLinkClick("/brochures");
                              }}
                              className={`w-full text-[20px] font-semibold cursor-pointer mb-2 hover:text-[#5F22D9] ${
                                activeLink === "/brochures"
                                  ? "text-[#5F22D9]"
                                  : "text-[#1D162B]"
                              }`}
                            >
                              Brochures
                            </a>

                            <p className="text-[12px] font-medium leading-[16px] text-[#808080]">
                              Delivering business value with <br></br>
                              automation
                            </p>
                          </div>
                        </div>
                        <div
                          className={`flex leading-[28px] justify-start p-2 font-semibold`}
                        >
                          <img
                            src="/navbar-icon/cloud.svg"
                            alt={"asdn"}
                            className="mr-6 h-[24px] w-[24px] mt-1"
                          />
                          <div>
                            <a
                              href="/blog"
                              onClick={(e) => {
                                e.preventDefault(); // Prevent default navigation
                                navLinkClick("/blog");
                              }}
                              className={`w-full text-[20px] font-semibold cursor-pointer mb-2 hover:text-[#5F22D9] ${
                                activeLink === "/blog"
                                  ? "text-[#5F22D9]"
                                  : "text-[#1D162B]"
                              }`}
                            >
                              Blogs
                            </a>

                            <p className="text-[12px] font-medium leading-[16px] text-[#808080]">
                              Delivering business value with <br></br>
                              automation
                            </p>
                          </div>
                        </div>
                        <div
                          className={`flex leading-[28px] justify-start p-2 font-semibold`}
                        >
                          <img
                            src="/navbar-icon/cloud.svg"
                            alt={"asdn"}
                            className="mr-6 h-[24px] w-[24px] mt-1"
                          />
                          <div>
                            <a
                              href="/news-and-announcements"
                              onClick={(e) => {
                                e.preventDefault(); // Prevent default navigation
                                navLinkClick("/news-and-announcements");
                              }}
                              className={`w-full text-[20px] font-semibold cursor-pointer mb-2 hover:text-[#5F22D9] ${
                                activeLink === "/news-and-announcements"
                                  ? "text-[#5F22D9]"
                                  : "text-[#1D162B]"
                              }`}
                            >
                              News & Announcements
                            </a>

                            <p className="text-[12px] font-medium leading-[16px] text-[#808080]">
                              Delivering business value with <br></br>
                              automation
                            </p>
                          </div>
                        </div>

                        <div
                          className={`flex leading-[28px] justify-start p-2 font-semibold`}
                        >
                          <img
                            src="/navbar-icon/cloud.svg"
                            alt={"asdn"}
                            className="mr-6 h-[24px] w-[24px] mt-1"
                          />
                          <div>
                            <a
                              href="/case-studies"
                              onClick={(e) => {
                                e.preventDefault(); // Prevent default navigation
                                navLinkClick("/case-studies");
                              }}
                              className={`w-full text-[20px] font-semibold cursor-pointer mb-2 hover:text-[#5F22D9] ${
                                activeLink === "/case-studies"
                                  ? "text-[#5F22D9]"
                                  : "text-[#1D162B]"
                              }`}
                            >
                              Case Studies
                            </a>

                            <p className="text-[12px] font-medium leading-[16px] text-[#808080]">
                              Delivering business value with <br></br>
                              automation
                            </p>
                          </div>
                        </div>

                        <div
                          className={`flex leading-[28px] justify-start p-2 font-semibold`}
                        >
                          <img
                            src="/navbar-icon/cloud.svg"
                            alt={"asdn"}
                            className="mr-6 h-[24px] w-[24px] mt-1"
                          />
                          <div>
                            <a
                              href="/stories"
                              onClick={(e) => {
                                e.preventDefault(); // Prevent default navigation
                                navLinkClick("/stories");
                              }}
                              className={`w-full text-[20px] font-semibold cursor-pointer mb-2 hover:text-[#5F22D9] ${
                                activeLink === "/stories"
                                  ? "text-[#5F22D9]"
                                  : "text-[#1D162B]"
                              }`}
                            >
                              Success Stories
                            </a>

                            <p className="text-[12px] font-medium leading-[16px] text-[#808080]">
                              Delivering business value with <br></br>
                              automation
                            </p>
                          </div>
                        </div>
                        <div
                          className={`flex leading-[28px] justify-start p-2 font-semibold`}
                        >
                          <img
                            src="/navbar-icon/cloud.svg"
                            alt={"asdn"}
                            className="mr-6 h-[24px] w-[24px] mt-1"
                          />
                          <div>
                            <a
                              href="/videos"
                              onClick={(e) => {
                                e.preventDefault(); // Prevent default navigation
                                navLinkClick("/videos");
                              }}
                              className={`w-full text-[20px] font-semibold cursor-pointer mb-2 hover:text-[#5F22D9] ${
                                activeLink === "/videos"
                                  ? "text-[#5F22D9]"
                                  : "text-[#1D162B]"
                              }`}
                            >
                              Videos
                            </a>

                            <p className="text-[12px] font-medium leading-[16px] text-[#808080]">
                              Delivering business value with <br></br>
                              automation
                            </p>
                          </div>
                        </div>
                      </>
                    )}

                    {navName == "careers" && (
                      <>
                        <div
                          className={`flex leading-[28px] justify-start p-2 font-semibold`}
                        >
                          <img
                            src="/navbar-icon/cloud.svg"
                            alt={"asdn"}
                            className="mr-6 h-[24px] w-[24px] mt-1"
                          />
                          <div>
                            <a
                              href="/careers/we-are-hiring"
                              onClick={(e) => {
                                e.preventDefault(); // Prevent default navigation
                                navLinkClick("/careers/we-are-hiring");
                              }}
                              className={`w-full text-[20px] font-semibold cursor-pointer mb-2 hover:text-[#5F22D9] ${
                                activeLink === "/careers/we-are-hiring"
                                  ? "text-[#5F22D9]"
                                  : "text-[#1D162B]"
                              }`}
                            >
                              We are hiring
                            </a>

                            <p className="text-[12px] font-medium leading-[16px] text-[#808080]">
                              Delivering business value with <br></br>
                              automation
                            </p>
                          </div>
                        </div>
                        <div
                          className={`flex leading-[28px] justify-start p-2 font-semibold`}
                        >
                          <img
                            src="/navbar-icon/cloud.svg"
                            alt={"asdn"}
                            className="mr-6 h-[24px] w-[24px] mt-1"
                          />
                          <div>
                            <a
                              href="/careers/why-join-us"
                              onClick={(e) => {
                                e.preventDefault(); // Prevent default navigation
                                navLinkClick("/careers/why-join-us");
                              }}
                              className={`w-full text-[20px] font-semibold cursor-pointer mb-2 hover:text-[#5F22D9] ${
                                activeLink === "/careers/why-join-us"
                                  ? "text-[#5F22D9]"
                                  : "text-[#1D162B]"
                              }`}
                            >
                              Why Join us?
                            </a>

                            <p className="text-[12px] font-medium leading-[16px] text-[#808080]">
                              Delivering business value with <br></br>
                              automation
                            </p>
                          </div>
                        </div>
                      </>
                    )}

                    {/* services */}
                  </div>
                  {/* 2nd column atomation */}
                  <div className=" py-6">
                    <div className="">
                      <div className="text-[16px] font-semibold">
                        Latest News & Announcements
                      </div>
                      <div
                        className="cards py-5"
                        style={{ borderBottom: "1px solid #E4E4E4" }}
                      >
                        <div className="grid grid-cols-3 gap-4">
                          <div className="">
                            <Image
                              src={"/caseStudies/GlobalOncology.png"}
                              height={500}
                              width={500}
                              className="rounded-2xl"
                            ></Image>
                          </div>

                          <div className="col-span-2">
                            <div className="text-[14px] font-semibold leading-[18px] mb-1">
                              Europe’s leading machine manufacturer achieves
                              better
                            </div>
                            <p className="text-[12px] text-[#808080] font-medium mb-1 leading-[16px]">
                              Delivering business value with automation
                            </p>
                            <Link
                              href={""}
                              target="_blank"
                              type="button"
                              className="text-[#5F22D9] text-[12px] font-semibold flex items-center"
                            >
                              Read more{" "}
                              <svg
                                class="w-3 h-2 ms-2 rtl:rotate-180"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 14 10"
                              >
                                <path
                                  stroke="currentColor"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M1 5h12m0 0L9 1m4 4L9 9"
                                />
                              </svg>
                            </Link>
                          </div>
                        </div>
                      </div>
                      {/* case studies */}
                      <div className="text-[16px] font-semibold mt-3">
                        Featured Case Studies
                      </div>
                      <div
                        className=""
                        style={{ borderBottom: "1px solid #E4E4E4" }}
                      >
                        {[1, 2].map((item) => (
                          <>
                            <div className="cards py-5">
                              <div className="grid grid-cols-3 gap-4">
                                <div className="">
                                  <Image
                                    src={"/caseStudies/GlobalOncology.png"}
                                    height={200}
                                    width={200}
                                    className="rounded-2xl"
                                  ></Image>
                                </div>
                                <div className="col-span-2">
                                  <div className="text-[14px] font-semibold leading-[18px] mb-2">
                                    Europe’s leading machine manufacturer
                                    achieves better
                                  </div>
                                  <Link
                                    href={""}
                                    target="_blank"
                                    type="button"
                                    className="text-[#5F22D9] text-[12px] font-semibold flex items-center"
                                  >
                                    Read more{" "}
                                    <svg
                                      class="w-3 h-2 ms-2 rtl:rotate-180"
                                      aria-hidden="true"
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 14 10"
                                    >
                                      <path
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M1 5h12m0 0L9 1m4 4L9 9"
                                      />
                                    </svg>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </>
                        ))}
                      </div>

                      {/* need to contact */}
                      <div className="mt-4 mb-3 text-[16px] font-semibold text-[#1D162B]">
                        Need to connect
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="">
                          <p className="text-[#808080] text-[12px] font-medium mb-2">
                            For Enquiry
                          </p>
                          <div className="text-[#1D162B] text-[14px] font-semibold">
                            Vijay Kumar
                          </div>
                          <div className="text-[#808080] text-[12px] font-semibold">
                            vjk@godrej.com
                          </div>
                        </div>
                        <div className="">
                          <p className="text-[#808080] text-[12px] font-medium mb-2">
                            For Enquiry
                          </p>
                          <div className="text-[#1D162B] text-[14px] font-semibold">
                            Vijay Kumar
                          </div>
                          <div className="text-[#808080] text-[12px] font-semibold">
                            vjk@godrej.com
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* 3th column */}
                </div>
                <div className="">
                  <span className="font-medium text-[12px] text-[#808080] mr-2">
                    LinkedIn
                  </span>
                  <span className="font-medium text-[12px] text-[#808080] mr-2">
                    Twitter
                  </span>
                  <span className="font-medium text-[12px] text-[#808080] mr-2">
                    Instagram
                  </span>
                  <p className="text-[12px] text-[#808080] font-medium mt-2">
                    © 2024. Godrej Infotech. All rights reserved.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

 {/* Mobile Menu  */}

 <nav
      className={`${
        isMobileMenuOpen ? "bg-white" : "bg-transparent"
      } text-primary-900  w-full fixed top-0 left-0 xl:bg-transparent`}
    >
      <div className="flex justify-between items-left p-4 xl:invisible">
        {/* Company Logo */}
        <Link href="/">
          <Image
            src={isMobileMenuOpen ? "/godrej-infotech-logo-dark.svg" : "/godrej-infotech-logo-light.svg"}
            alt="godrej logo"
            width="188"
            height="96"
          />
        </Link>

        {/* Mobile Hamburger Menu */}
        <button
          className={`xl:hidden text-[32px] -mt-4 ${
            isMobileMenuOpen ? "text-black" : "text-white"
          }`}
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? "×" : "☰"} {/* Close icon when open, hamburger icon when closed */}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="flex flex-col items-left space-y-4 mt-4 bg-white w-screen h-screen  max-h-screen overflow-y-auto xl:hidden"> 
          <NavLinks/>
        </div>
      )}
    </nav>












    </>
  );
}

export default NewNavBar;
