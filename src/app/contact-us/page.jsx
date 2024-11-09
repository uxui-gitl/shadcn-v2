"use client";
// import Review from "@/sections/review/Review";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import gmap from "../../../public/contact/map.png";
import styles from "./page.module.css";
import { mdiArrowRight } from "@mdi/js";
import Icon from "@mdi/react";
import ReactFlagsSelect from "react-flags-select";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Navbar from "@/components/Navbar/Navbar";
import NewNavBar from "@/components/NewNavBar";

import Announcement from "@/sections/announcement/Announcement";
import ContactBanner from "@/sections/contactBanner/ContactBanner";
import SectionWrapperNew from '@/components/SectionWrapperNew';
import Slider from "@/components/Slider";
import { SwiperSlide } from "swiper/react";
import { LinearGradient } from 'react-text-gradients';
import TransformBusinessForm from "@/sections/transformBusinessFrom/TransformBusinessFromSection";




const MySwal = withReactContent(Swal);
const ContactUs = () => {
  const [selected, setSelected] = useState("IN");

  const handleCountrySelect = (code) => {
    setSelected(code);
    handleChange();
  };

  const locations = [
    {
      id: 1,
      loc: "Mumbai",
      loc2: "India",
      desc: "Godrej Infotech Ltd. Plant 10, Pirojshanagar, Vikhroli (West), Mumbai- 400 079, India.",
      phone: "+91 226 796 4086",
      phone2: "+91 226 796 4084",
      extension: "4087",
      extension2: "",
      email: "infotech@godrej.com",
    },
    {
      id: 2,
      loc: "Delhi",
      loc2: "India",
      desc: "Godrej Infotech Ltd. C/O Awfis, Plot No. A-24/9, Mohan Co-operative Industrial Area, New Delhi - 110044, India.",
      phone: "",
      phone2: "",
      extension: "",
      extension2: "",
      email: "infotech@godrej.com",
    },
    {
      id: 3,
      loc: "Kolkata",
      loc2: "India",
      desc: "Godrej Infotech Ltd. Block GN, Plot No. 30, Sector-V, Salt Lake City, Kolkata - 700 091, India.",
      phone: "+91 336 601 3500",
      phone2: "",
      extension: "",
      extension2: "",
      email: "infotech@godrej.com",
    },
    {
      id: 4,
      loc: "Mumbai",
      loc2: "India",
      desc: "Godrej Infotech Ltd. Workenstein Collaborative Spaces Pvt Ltd, Workafella, 150, 1, Infantry Rd, Opp. Commissioner Office, Shivaji Nagar, Bengaluru, Karnataka 560001",
      phone: "",
      phone2: "",
      extension: "",
      extension2: "",
      email: "infotech@godrej.com",
    },
    {
      id: 5,
      loc: "UAE",
      loc2: "",
      desc: "Godrej Infotech Ltd. Executive Suite Z-61, PO Box 121806, Sharjah, UAE.",
      phone: "+971 655 798 39",
      phone2: "+971 655 708 66",
      extension: "",
      extension2: "",
      email: "infotech@godrej.com",
    },
    {
      id: 6,
      loc: "Belgium",
      loc2: "",
      desc: "LVD Godrej Infotech nv. Hondschotestraat 112, B-8560, Wevelgem (Gullegem)",
      phone: "",
      phone2: "",
      extension: "",
      extension2: "",
      email: "infotech@lvdgi.be",
    },
    {
      id: 7,
      loc: "Singapore",
      loc2: "",
      desc: "Godrej Infotech Singapore Pte Ltd. 105 Cecil Street, The Octagon, Singapore-069534",
      phone: "+65 846 816 94",
      phone2: "",
      extension: "",
      extension2: "",
      email: "infotech@godrej.com",
    },
    {
      id: 8,
      loc: "Singapore",
      loc2: "",
      desc: "Godrej Infotech Singapore Pte Ltd. 11 Lok yang way, Singapore-628632",
      phone: "",
      phone2: "",
      extension: "",
      extension2: "",
      email: "infotech@godrej.com",
    },
    {
      id: 9,
      loc: "Saudi Arabia",
      loc2: "",
      desc: "",
      phone: "+966 546 416 385",
      phone2: "",
      extension: "",
      extension2: "",
      email: "infotech@godrej.com",
    },
  ];

  const [formData, setFormData] = useState({
    Name: "",
    Phoneno: "",
    Email: "",
    Country: "IN",
    Query: "",
    Consent: "Y",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send the POST request to the API endpoint
      const response = await fetch(
        "https://mailer.godrej.com/godrejinfotechapi/SendEnquiry/SaveEnquiry",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            Name: formData.Name,
            Phoneno: formData.Phoneno,
            Email: formData.Email,
            Country: formData.Country,
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
          Phoneno: "",
          Email: "",
          Country: "IN",
          Query: "",
          Consent: "Y",
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
      {/* Nav */}

      <div className={`relative z-[500]`}>
        <div className={`absolute w-full  `}>
          <NewNavBar />
        </div>
      </div>

      <ContactBanner />
      <SectionWrapperNew
        style={{
          backgroundPosition: "center",
          borderRadius: "0px",
          backgroundRepeat: "no-repeat",
          alignItems: "center",
          display: "flex",
          backgroundColor: '#000',
          backgroundSize: "cover",
          maxHeight: '800px',
        }}
        sectionHeading=""
        sectionDesc=""
        sectionTextColor='#fff'
        sectionHeadingLayout="left"
      >

        <SectionWrapperNew
          style={{
            backgroundColor: 'white',
            padding: '50px 20px',
            transform: "translateY(-152px)"

          }}
          sectionHeading="OUR LOCATIONS"
          sectionDesc="The Inspiring Journey Of Godrej Infotech"
          sectionTextColor='#000'
          sectionHeadingLayout="center"
        >

          <div className="grid grid-cols-2 gap-10">
            <div className="">
              <div>
                <form
                  onSubmit={handleSubmit}
                  className={`w-full pe-8 my-3 bg-white`}
                >
                  <input
                    id="name"
                    type="text"
                    name="Name"
                    value={formData.Name}
                    onChange={handleChange}
                    className="mb-5 p-3 border border-gray-300 text-gray-700 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full"
                    placeholder="Full Name"
                  />

                  <input
                    id="email"
                    type="text"
                    name="Email"
                    value={formData.Email}
                    onChange={handleChange}
                    className="mb-5 p-3 border border-gray-300 text-gray-700 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full"
                    placeholder="Email Address"
                  />

                  <div className="flex justify-between gap-5 mb-5">
                    <ReactFlagsSelect
                      className={`${styles["tb-flags"]}`}
                      fullWidth={false}
                      searchable
                      selected={selected}
                      onSelect={handleCountrySelect}
                      type="text"
                      name="Country"
                      value={formData.Country}
                      onChange={handleChange}
                    />
                    <input
                      id="tel"
                      type="text"
                      name="Phoneno"
                      value={formData.Phoneno}
                      onChange={handleChange}
                      customLabels={{
                        BE: "BEL",
                        SG: "SGP",
                        US: "USA",
                        IN: "+91",
                      }}
                      className={`mb-5 p-3 border border-gray-300 text-gray-700 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full`}
                      placeholder="999999999"
                    />
                  </div>

                  <textarea
                    className="mb-5 p-3 border border-gray-300 text-gray-700 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full"
                    type="text"
                    name="Query"
                    value={formData.Query}
                    onChange={handleChange}
                    placeholder="We would like to leverage our business potential and accelerate the growth"
                  ></textarea>

                  <label className="flex justify-start items-start gap-3 mb-5">
                    <input
                      type="checkbox"
                      name="Consent"
                      value={formData.Consent}
                      onChange={handleChange}
                      className="default:ring-2"
                    />
                    <p className="text-['#E4E4E4'] text-[14px] mb-6">
                      I consent to the processing of my personal data by Godrej
                      Infotech in accordance with the{" "}
                      <Link href={"/"} className="text-blue-600">
                        Privacy Notice
                      </Link>
                    </p>
                  </label>

                  <button type="submit" className="w-full text-white bg-['#5F22D9'] hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800  ">
                    Send Message{" "}

                  </button>
                </form>
              </div>
            </div>

            <div className="">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3583.4689659505307!2d72.92370057497814!3d19.107405582103706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c7bece5da925%3A0x5cd84975535e50a1!2sGodrej%20Infotech%20Ltd%2C%20Plant%2019A!5e1!3m2!1sen!2sin!4v1727175333468!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </SectionWrapperNew >
      </SectionWrapperNew >

      {/* Global Locations */}
      <SectionWrapperNew
        sectionHeading="Our Global Footprint"
        sectionDesc="Our Global Footprint"
        sectionTextColor='#000'
        sectionHeadingLayout="left"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grid-rows-3 mb-[5em] gap-0 sm:gap-10">
          {locations.map((add) => {
            return (
              <>
                <div className="">
                  <div className="text-xl font-medium text-['#1D162B'] mb-4">{add.loc}, {add.loc2}</div>
                  <p className="text-base font-normal text-slate-500 mb-4">{add.desc}</p>
                  {add.phone && (
                    <p className="text-slate-500">
                      Phone:{" "}
                      <Link href={`tel:${add.phone}`}>{add.phone}</Link>
                      {add.extension && <span> / {add.extension}</span>}
                    </p>
                  )}
                  {add.phone2 && (
                    <p>
                      Phone:{" "}
                      <Link href={`tel:${add.phone2}`}>{add.phone2}</Link>
                      {add.extension2 && <span> / {add.extension2}</span>}
                    </p>
                  )}
                  <button type="button" className=" mt-4 text-sm text-slate-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full px-5 py-2.5 me-2 mb-2">
                    <Link href={`mailto:${add.email}`} target="_blank">{'Send Email'}</Link>
                  </button>
                </div>
              </>
            );
          })}
        </div>
      </SectionWrapperNew>

      {/* <Review /> */}
      <SectionWrapperNew style={{ backgroundColor: "#000" }}
        sectionHeading=""
        sectionDesc=""
        sectionTextColor='#fff'
        sectionHeadingLayout="left"
      >
        <Slider slidesPerView="2.2">
          {[1, 2, 3, 4, 5]?.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="w-full p-6 bg-white border rounded-3xl shadow ">
                <h5 className="mb-6 text-[28px] font-bold text-black max-w-sm leading-9">Over 250 reviews on
                  Ambition Box</h5>
                <p className="mb-6 font-sm text-gray-700 dark:text-gray-400">I consent to the processing of my personal data by Godrej Infotech in
                  accordance with the privacy notice.</p>
                <div className="flex mb-4">
                  <Image src="/contact/star.svg" width={20} height={20} alt={'contact star'} />
                  <Image src="/contact/star.svg" width={20} height={20} alt={'contact star'} />
                  <Image src="/contact/star.svg" width={20} height={20} alt={'contact star'} />
                  <Image src="/contact/star.svg" width={20} height={20} alt={'contact star'} />
                </div>

                <div className="flex flex-row justify-between items-end">
                  <div>
                    <h1 className="text-[72px] font-bold "> <LinearGradient gradient={['to left', '#5F22D9 ,#E0028E']}>
                      4.1
                    </LinearGradient> <span className="text-base text-slate-400 font-normal">out of 5</span></h1>
                  </div>
                  <div>
                    <button type="button" className="text-slate-500 bg-white border border-gray-300 focus:outline-none focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 ">Explore Job Listings</button>
                  </div>
                </div>

                <div>

                </div>
              </div>

            </SwiperSlide>
          ))}
        </Slider>
      </SectionWrapperNew>


      <SectionWrapperNew style={{
        background: "url('/contact/bgimage_joinus.svg')",
        backgroundPosition: "center",
        boxShadow: "inset 0px 0px 50px 324px rgba(0,0,0,0.4)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
        sectionHeading="Want to join the tech revolution?"
        sectionDesc="Discover exciting opportunities here and become an
integral part of our Tech Movement"
        sectionTextColor='#fff'
        sectionHeadingLayout="center"
      >
<div className="flex justify-center">
<button type="submit" className="w-96 text-white bg-['#5F22D9'] hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800  ">
Explore Your Opputunity
                  </button>
  </div>

 
      </SectionWrapperNew>
      <TransformBusinessForm
        Title={"Transform your Business with us"}
        Desc={
          "Let us discuss how intelligent technologies can help you with rapid growth."
        }
      ></TransformBusinessForm>
    </>
  );
};

export default ContactUs;
