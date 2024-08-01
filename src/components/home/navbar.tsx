"use client";
import Image from "next/image";
import styles from "./style/navbar.module.css";
import { useState } from "react";

function Navbar() {
  const [isMobileNavigation , setisMobileNavigation] = useState(false)
  function desktopMenuClickHandle() {
    setisMobileNavigation(!isMobileNavigation);
  }
  return (
    <>
      <div className="navbar-wrapper bg-[#020812] mt-1 sm:mt-2 sticky top-0 z-50">
        <div className="flex justify-between items-center pl-16 pr-16">
          <div className="">
            <Image
              src={"home/godrejLogoWhite.svg"}
              alt="Godrej Infotech Logo"
              width={232}
              height={78}
              priority={true}
            />
          </div>
          <div className="flex-row justify-center items-center hidden sm:flex">
            <div className="mr-8 text-sm">Solutions</div>
            <div className="mr-8 text-sm">Services</div>
            <div className="mr-8 text-sm">Industry Focus</div>
            <div className="mr-8 text-sm">About us</div>
            <div className="mr-8 text-sm">Careers</div>
            <button className="primary-btn !px-[20px] !py-[13px]">Get In Touch</button>
          </div>
          <div className="flex sm:hidden" onClick={() => desktopMenuClickHandle()}>
            <Image
              src={"home/icon/side-menu.svg"}
              alt="Godrej Infotech Logo"
              width={50}
              height={50}
              priority={true}
            />
          </div>

        
        </div>
        {
          isMobileNavigation ? (
            <div className="bg-slate-300 min-h-lvh overflow-hidden">
            <h1>adsiyguyg</h1>
            </div>
          ) : ''
        }
        
      </div>
    </>
  );
}

export default Navbar;
