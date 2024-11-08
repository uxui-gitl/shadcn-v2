"use client";
import React, { Fragment, useEffect, useState } from "react";

import styles from "./announcement.module.css";
import Link from "next/link";

import ReactFlagsSelect from "react-flags-select";
const Announcement = ({ content, country }) => {
  const defaultData = [
    {
      _id: 1,
      title:
        "Once Again, Godrej Infotech is recognized as a Great Place to Work!",
      cta: "",
      targetBlank: true,
      link: "/",
    },
    {
      _id: 2,
      title:
        "Economic Times Honors Godrej Infotech as Future Ready Organization – Adjudged by Ernst & Young.",
      cta: "",
      targetBlank: true,
      link: "/",
    },
    {
      _id: 3,
      title:
        "India’s Leading Fertility Healthcare Centre Finalizes Oracle Fusion Implementation Services contract.",
      cta: "",
      targetBlank: true,
      link: "/",
    },
    {
      _id: 4,
      title:
        "Renowned Dutch marine leader, Boskalis, signs 5-year Infor support renewal with LVD Godrej Infotech after successful 3-year relationship",
      cta: "",
      targetBlank: true,
      link: "/",
    },
  ];

  const announcements = content || defaultData;
  const [currentAnnouncementIndex, setCurrentAnnouncementIndex] = useState(0);

  const [selected, setSelected] = useState(country);

  const handleCountrySelect = (code) => {
    setSelected(code);
    let url = "";
    switch (code || country) {
      case "BE":
        url = "/netherland";
        break;
      case "SG":
        url = "/singapore";
        break;
      case "US":
        url = "/americas";
        break;
      case "IN":
        url = "/";
        break;
      default:
        url = "/";
    }
    // window.open(url, "_blank");
    window.open(url, "_self");
  };

  useEffect(() => {
    // Set up an interval to switch to the next announcement every 5 seconds (5000 milliseconds)
    const intervalId = setInterval(() => {
      setCurrentAnnouncementIndex(
        (prevIndex) => (prevIndex + 1) % announcements.length
      );
    }, 5000);

    // Clear the interval when the component is unmounted or if you navigate away
    return () => clearInterval(intervalId);
  }, [announcements.length]);

  const currentAnnouncement = announcements[currentAnnouncementIndex];

  return (
    <div className={styles["top-banner"]}>
      <div className={styles["container"]}>
        <div className={styles["content"]} key={currentAnnouncement._id}>
          {currentAnnouncement.cta !== "" ? (
            <>
              <span className={styles["tb-text"]}>
                {currentAnnouncement.title}
              </span>
              <Link
                className={styles["tb-link"]}
                href={currentAnnouncement.link}
              >
                {currentAnnouncement.cta}
              </Link>
            </>
          ) : (
            <>
              <Link
                className={styles["tb-text"]}
                href={currentAnnouncement.link}
              >
                {" "}
                <span className={styles["tb-text"]}>
                  {currentAnnouncement.title}
                </span>
              </Link>
            </>
          )}
        </div>
        <div id={styles["tb-close"]}>
          <div className={styles["tb-flag-wrap"]}>
            <ReactFlagsSelect
              className={styles["tb-flags"]}
              selected={selected}
              fullWidth={false}
              countries={["BE", "SG", "US", "IN"]}
              customLabels={{
                BE: "BEL",
                SG: "SGP",
                US: "USA",
                IN: "IND",
              }}
              onSelect={handleCountrySelect}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Announcement;
