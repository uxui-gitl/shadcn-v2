"use client";

import Icon from "@mdi/react";
import { mdiArrowRight } from "@mdi/js";
import { mdiArrowTopRight } from "@mdi/js";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import SectionHeading from "./SectionHeading";

const MySwal = withReactContent(Swal);
const Subscription = ({ title, blue, title2, desc }) => {
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Query: "",
    Consent: "Y",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send the POST request to the API endpoint
      const response = await fetch(
        "https://mailer.godrej.com/godrejinfotechapi/SendEnquiry/RegistrationEnquiry",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            Name: formData.Name,
            Email: formData.Email,
            Query: formData.Query,
            Consent: formData.Consent,
          }),
        }
      );

      if (response.ok) {
        console.log("Enquiry saved successfully!");

        Swal.fire({
          icon: "success",
          title: "Enquiry saved successfully!",
          showConfirmButton: false,
          timer: 1500, // Automatically close after 1.5 seconds
        });
        setFormData({
          Name: "",
          Email: "",
          Query: "",
          Consent: "",
        });
      } else {
        console.error("Error saving enquiry:", response.statusText);
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <>
      <div className={` w-full  `} id="Contact">
        <div className="text-left">
          <div className="flex md:flex-row flex-col justify-start" style={{ alignItems: "center", justifyContent: 'center' }}>
            <SectionHeading Heading={title} Color="white" MaxWidth="50%">
            </SectionHeading>
            <div className="text-center md:text-left mb-7 md:mb-0">
            <p className="text-white text-sm sm:text-base md:text-xl font-medium">{desc}</p>
            </div>

            {/* <div>
              <h3 className="text-[42px]  leading-[54px] mb-3 font-bold sm:w-[90%]">
                {title == null ? (
                  <>
                    <span className="text-[#0745D3]">Free 30-Minutes</span>{" "}
                    Strategy Session with our Consultant
                  </>
                ) : (
                  <>
                    {title}
                    <span className="text-[#0745D3]"> {blue} </span> {title2}
                  </>
                )}
              </h3>
              <p className="font-normal leading-[22px] md:w-[90%] ">
                {desc == null ? (
                  <>
                    Let&apos;s discuss how Godrej Infotech can help your
                    business with efficiency and business continuity.
                  </>
                ) : (
                  <>{desc}</>
                )}
              </p>
            </div> */}
          </div>
          <div className="px-5 md:px-12">
            <form class="" onSubmit={handleSubmit}>
              <div class="grid md:grid-cols-2 md:gap-10">
                <div class="relative z-0 w-full mb-6 group">
                  <input
                    value={formData.Name}
                    onChange={handleChange}
                    type="text"
                    placeholder=""
                    name="Name" id="name" class="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-white dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" required />
                  <label for="Name" class="peer-focus:font-medium absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter Your Name</label>
                </div>
                <div class="relative z-0 w-full mb-6 group">
                  <input
                    value={formData.Email}
                    name="Email"
                    onChange={handleChange}
                    placeholder=""
                    type="email" id="email" class="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-white dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" required />
                  <label for="Email" class="peer-focus:font-medium absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                </div>
              </div>
              <div class="relative z-0 w-full mb-12 group ">
                <input
                  name="Query"
                  value={formData.Query}
                  onChange={handleChange}
                  type="text"
                  id="message"
                  placeholder="" class="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-white dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" />
                <label for="Query" class="peer-focus:font-medium absolute text-lg text-gray-500 dark:border-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">  Message (Optional)</label>
              </div>
              <div className="flex justify-center md:justify-end">
                <Link
                  href={"#Contact"}
                  className="text-white flex items-center bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-base px-8 py-3 me-2 mb-2 dark:bg-[#946BE6] dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                >
                  {'Send Message'}
                  <Icon
                    path={mdiArrowTopRight}
                    style={{ marginLeft: "0.5em", transform: "rotate(45deg)", marginTop: '1px' }}
                    size={1}
                  />
                </Link>
              </div>
            </form>

          </div>
          {/* <div>
            <form onSubmit={handleSubmit}>
              <div className="relative z-0 w-full mb-5 group">
                <label
                  htmlFor="name"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Full Name
                </label>
                <input
                  name="Name"
                  value={formData.Name}
                  onChange={handleChange}
                  type="text"
                  id="name"
                  placeholder=""
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="absolute px-2 py-0 ml-4 -mt-[0.55rem] hover:text-blue-500 focus:text-blue-500 active:text-blue-500 text-[12px] bg-[#fff] z-20"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.Email}
                  name="Email"
                  onChange={handleChange}
                  placeholder="you@company.com"
                  className="mt-1 block w-full px-3 py-2 text-sm shadow-sm placeholder-slate-400
                  focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                  disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                  invalid:border-pink-500 invalid:text-pink-600
                  focus:invalid:border-pink-500 focus:invalid:ring-pink-500 p-3 border-2 border-[#98A2B3] bg-[#fff] rounded-sm relative"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="absolute px-2 py-0 ml-4 -mt-[0.55rem] hover:text-blue-500 focus:text-blue-500 active:text-blue-500 text-[12px] bg-[#fff] z-20"
                >
                  Message (Optional)
                </label>
                <textarea
                  name="Query"
                  value={formData.Query}
                  onChange={handleChange}
                  type="text"
                  id="message"
                  placeholder="We would like to leverage our business potential
                  and accelerate the growth"
                  className="mt-1 block w-full px-3 py-2 text-sm shadow-sm placeholder-slate-400
                  focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                  disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                  invalid:border-pink-500 invalid:text-pink-600
                  focus:invalid:border-pink-500 focus:invalid:ring-pink-500 p-3 border-2 border-[#98A2B3] bg-[#fff] rounded-sm relative"
                ></textarea>
              </div>

              <div className="mb-6">
                <label className="flex justify-start items-start gap-3 mb-5">
                  <input
                    type="checkbox"
                    className="default:ring-2 mt-[6px]"
                    name="Consent"
                    value={formData.Consent}
                    onChange={handleChange}
                  />
                  <p>
                    I consent to the processing of my personal data by Godrej
                    Infotech in accordance with the{" "}
                    <Link href={"/"} className="text-blue-600">
                      Privacy Notice
                    </Link>
                  </p>
                </label>
              </div>

              <div className="max-w-max flex justify-start items-center my-5">
                <button
                  type="submit"
                  className="min-w-max flex bg-[#0745D3] py-2 px-10 border-2 border-[#0745D3] font-medium text-base text-[#f5f5f5] rounded-sm transition-all mb-3 hover:opacity-95 hover:scale-105"
                >
                  Send Message
                  <Icon
                    path={mdiArrowRight}
                    style={{ marginLeft: "0.5em" }}
                    size={1}
                  />
                </button>
              </div>
            </form>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Subscription;
