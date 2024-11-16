import React, { useState } from "react";
import Link from "next/link"; // Import Link from next/link
import { links } from "@/components/Navbar/NavUtils/Links.js"; // Ensure this file exports the 'links' array.

const ChevronUp = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18 15L12 9L6 15"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

const ChevronDown = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6 9L12 15L18 9"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

const NavLinks = () => {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");

  return (
    <>
      {links.map((link) => (
        <div key={link.name}>
          <div className="px-4 py-2 text-[20px] font-semibold text-left md:cursor-pointer group border-b-[0.5px] border-neutral-darkest-grey border-opacity-40">
            <h1
              className="py-2 flex justify-between items-center group "
              onClick={() => {
                heading !== link.name ? setHeading(link.name) : setHeading("");
                setSubHeading("");
              }}
            >
              {link.name}
              <span className="text-xl xl:hidden inline">
                {/* Render ChevronUp or ChevronDown based on the heading */}
                {heading === link.name ? ChevronUp : ChevronDown}
              </span>
            </h1>
          </div>
          {/* Mobile menus */}
          <div
            className={`
              ${heading === link.name ? "xl:hidden" : "hidden"}
            `}
          >
            {/* sublinks */}

            {link.submenu
              ? // Render with Head and sublinks when submenu is true
                link.sublinks.map((slinks) => (
                  <div key={slinks.Head}>
                    <div>
                      <h1
                        onClick={() =>
                          subHeading !== slinks.Head
                            ? setSubHeading(slinks.Head)
                            : setSubHeading("")
                        }
                        className=" px-4 py-4 font-semibold flex justify-between items-center "
                      >
                        {slinks.Head}
                        <span className="text-xl md:mt-1 md:ml-2 inline">
                          {/* Render ChevronUp or ChevronDown based on subHeading */}
                          {subHeading === slinks.Head ? ChevronUp : ChevronDown}
                        </span>
                      </h1>
                      <div
                        className={`${
                          subHeading === slinks.Head ? "xl:hidden" : "hidden"
                        }`}
                      >
                        {slinks.sublink.map((slink) => (
                          <li
                            key={slink.name}
                            className={`px-5 p-4 list-none border-b-[0.5px] border-neutral-darkest-grey border-opacity-10 ${
                              slink.subheading
                                ? "font-semibold text-primary-900"
                                : "text-neutral-dark-grey ml-2"
                            }`}
                          >
                            {/* Ensure slink.link is valid */}
                            {slink.link ? (
                              <Link href={slink.link}>{slink.name}</Link>
                            ) : (
                              <span className="text-neutral-dark-grey">
                                {slink.name}
                              </span>
                            )}
                          </li>
                        ))}
                      </div>
                    </div>
                  </div>
                ))
              : // Render directly sublink items when submenu is false
                link.sublinks.map((slink) => (
                  <li
                    key={slink.name}
                    className={`px-5 p-4 list-none border-b-[0.5px] border-neutral-darkest-grey border-opacity-20 ${
                      slink.subheading
                        ? "font-semibold text-primary-900"
                        : "text-neutral-dark-grey ml-2 "
                    }`}
                  >
                    {/* Ensure slink.link is valid */}
                    {slink.link ? (
                      <Link href={slink.link}>{slink.name}</Link>
                    ) : (
                      <span className="text-neutral-dark-grey ">
                        {slink.name}
                      </span>
                    )}
                  </li>
                ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default NavLinks;
