import Navbar from "@/components/Navbar/Navbar";
import React from "react";
import NewNavBar from "@/components/NewNavBar";



const layout = ({ children }) => {
  return (
    <>
      <div className={`relative z-[500]`}>
        <div className={`absolute w-full  `}>
          <NewNavBar />
        </div>
      </div>

      {children}
    </>
  );
};

export default layout;
