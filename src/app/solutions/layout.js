import Navbar from "@/components/Navbar/Navbar";
import React from "react";
import Announcement from "@/sections/announcement/Announcement";
import NewNavBar from "@/components/NewNavBar";

const layout = ({ children }) => {
  return (
    <>
      {/* <Announcement /> */}
      <div className={`fixed w-full z-[500] top-0`}>
        <NewNavBar />
      </div>
      {children}
    </>
  );
};

export default layout;
