"use client";
import React, { useEffect, useState } from "react";
import ReactFlagsSelect from "react-flags-select";
import styles from "@/sections/announcement/announcement.module.css";

function CountryDroupDown({scrolled}){
      const [selected, setSelected] = useState('US');


      const handleCountrySelect = (code) => {
        setSelected(code);
        let url = "";
        switch (code || country) {
          case "NL":
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
        window.open(url, "_self");
      };

      
    return (
        <ReactFlagsSelect
        className={styles[`${scrolled ? 'tb-flags-black' : 'tb-flags'}`]}
        selected={selected}
        fullWidth={true}
        countries={["NL", "SG", "US", "IN"]}
        customLabels={{
          NL: "NL",
          SG: "SG",
          US: "US",
          IN: "IN",
        }}
        onSelect={handleCountrySelect}
      />
    )
    
}


export default CountryDroupDown;