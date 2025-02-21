"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
    items,
    items2,
    items3,
} from "./data.js";
function StrategicDigital() {
    const [index, setIndex] = useState(0);


    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % items.length);
        }, 5000);
        return () => clearInterval(interval); // Cleanup interval on unmount
    }, [items.length]);


    return (
        <>
            <div
                className=" relative z-2 bg-white"
                style={{
                    borderBottomLeftRadius: "24px",
                    borderBottomRightRadius: "24px",
                }}
            >
                <div className="container mx-auto py-8">
                    <p className="text-body-01 font-medium text-neutral-dark-grey w-[214px] mb-5 md:mb-20">
                        Strategic Digital Transformation across Industries
                    </p>
                    <div className="md:text-heading-02 text-heading-03 font-semibold">
                        Transform your{" "}
                        {items[index] && (
                            <motion.div
                                key={`item-${items[index].id}`}
                                initial={{ y: 10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -10, opacity: 0 }}
                                transition={{ ease: "easeInOut", duration: 0.5, delay: 0.1 }}
                                style={{ display: "inline-block" }}
                            >
                                <span className="text-primary-400 md:ml-2">
                                    {items[index].content}
                                </span>
                            </motion.div>
                        )}
                        <br />
                        business with{" "}
                        {items2[index] && (
                            <motion.div
                                key={`item2-${items2[index].id}`}
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -20, opacity: 0 }}
                                transition={{ ease: "easeInOut", duration: 0.5, delay: 0.3 }}
                                style={{ display: "inline-block" }}
                            >
                                <span className="text-primary-400 md:ml-2">
                                    {items2[index].content}
                                </span>
                            </motion.div>
                        )}
                        <br />
                        enhancing{" "}
                        {items3[index] && (
                            <motion.div
                                key={`item3-${items3[index].id}`}
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -20, opacity: 0 }}
                                transition={{ ease: "easeInOut", duration: 0.5, delay: 0.4 }}
                                style={{ display: "inline-block" }}
                            >
                                <span className="text-primary-400">{items3[index].content}.</span>
                            </motion.div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}


export default StrategicDigital