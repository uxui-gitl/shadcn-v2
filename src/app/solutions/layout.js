import Navbar from "@/components/Navbar/Navbar";
import React from "react";
import Announcement from "@/sections/announcement/Announcement";
import NewNavBar from "@/components/NewNavBar";

const layout = ({ children }) => {
  return (
    <>
      {/* <Announcement /> */}
      <div className={`relative z-[500]`}>
        <div className={`absolute w-full  `}>
        <NewNavBar></NewNavBar>
        </div>
      </div>
      {children}
    </>
  );
};

export default layout;
