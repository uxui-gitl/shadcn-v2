"use client";
import Image from "next/image";
import { useState } from "react";
function Announcement(props: any) {
  const { text } = props;
  const [isAnnouncementVisiable, setisAnnouncementVisiable] = useState(true);

  const closeAnnouncement = () => {
    setisAnnouncementVisiable(false);
  };

  return (
    <>
      {isAnnouncementVisiable ? (
        <div className="bg-[#0056BC] flex justify-center text-sm p-[19px] text-center">
          <p>
            {text
              ? text
              : "Godrej Infotech secures a contract for Oracle implementation services with India's premier fertility healthcare centre"}
          </p>
          <div
            className="absolute right-4 text-red-400"
            onClick={closeAnnouncement}
          >
            <Image
              src={"icon/close-icon.svg"}
              width={20}
              height={20}
              alt="close icon"
              title="close"
              className="hover:text-red-700"
              style={{ filter: "invert(1)", cursor: "pointer" }}
            ></Image>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default Announcement;
