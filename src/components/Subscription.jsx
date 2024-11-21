"use client";

import Icon from "@mdi/react";
import { mdiArrowTopRight } from "@mdi/js";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import HorizontalHeading from "@/components/HorizontalHeading";
import axios from "axios";
import url from "@/data/url";



const MySwal = withReactContent(Swal);
const Subscription = ({ title, blue, title2, desc }) => {
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Query: "",
    Consent: "Y",
  });


  const [token, setToken] = useState();
  const [btnLoader, setBtnLoader] = useState(false);

  useEffect(() => {
    handleToken();
  }, []);

  async function handleToken() {
    if (localStorage.getItem("token") != null) {
      setToken(localStorage.getItem("token"));
    }
    else {
      const response = await axios.post(`${url.formUrl}/Token/CreateToken`);
      localStorage.setItem("token", response.data.model.token);
      setToken(localStorage.getItem("token"));
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setBtnLoader(true);
    try {
      debugger;
      let res = await axios.post(`https://mailer.godrejenterprises.com/GodrejinfotechAPI/SendEnquiry/RegistrationEnquiry`, formData, { headers: { Authorization: `Bearer ${token}` } });
      console.log(res);
      debugger;

      if (res.ok) {
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
        setBtnLoader(false);
      } else {
        console.error("Error saving enquiry:", res.statusText);
      }
    }
    catch (error) {
      setBtnLoader(false);
      if (error.response.status === 401) {
        localStorage.removeItem("token");
       await handleToken();
       document.getElementById("subscriptionBtn")?.click(); 
      }

      Swal.fire({
        icon: "error",
        title: "error!",
        showConfirmButton: false,
        timer: 1500, // Automatically close after 1.5 seconds
      });
      console.error("An error occurred:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <>
      <div className={` w-full`} id="Contact">
        <div className="text-left px-4 md:px-8">
          <HorizontalHeading
            heading={title}
            desc={desc}
            textColor="text-neutral-white"
            descColor="text-primary-10"
          >
          </HorizontalHeading>
          <div className=" md:px-5 ">
            <form className="" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 md:gap-10">
                <div className="relative z-0 w-full mb-6 group">
                  <input
                    value={formData.Name}
                    onChange={handleChange}
                    type="text"
                    placeholder=""
                    name="Name" id="name" className="block py-2.5 px-0 w-full text-label-01 text-neutral-white bg-transparent border-0 border-b-2 border-primary-100 appearance-none focus:outline-none focus:ring-0 focus:border-blue-100 peer" required />
                  <label htmlFor="Name" className="peer-focus:font-medium absolute text-label-01 text-neutral-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-primary-100 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter Your Name</label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                  <input
                    value={formData.Email}
                    name="Email"
                    onChange={handleChange}
                    placeholder=""
                    type="email" id="email" className="block py-2.5 px-0 w-full text-label-01 text-neutral-white bg-transparent border-0 border-b-2 border-primary-100 appearance-none focus:outline-none focus:ring-0 focus:border-blue-100 peer" required />
                  <label htmlFor="Email" className="peer-focus:font-medium absolute text-label-01 text-neutral-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-primary-100 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                </div>
              </div>
              <div className="relative z-0 w-full mb-12 group ">
                <input
                  name="Query"
                  value={formData.Query}
                  onChange={handleChange}
                  type="text"
                  id="message"
                  placeholder="" className="block py-2.5 px-0 w-full text-label-01 text-neutral-white bg-transparent border-0 border-b-2 border-primary-100 appearance-none focus:outline-none focus:ring-0 focus:border-blue-100 peer" />
                <label htmlFor="Query" className="peer-focus:font-medium absolute text-label-01 text-neutral-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-primary-100 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">  Message (Optional)</label>
              </div>
              <div className="flex justify-center md:justify-end">
              
                  <button
                  type="submit"
                  id='subscriptionBtn'
                  className="text-neutral-white text-body-01 flex items-center bg-primary-400 hover:bg-primary-500 rounded-full px-8 py-3 mb-2 group"
                >
                  {'Send Message'}
                  {btnLoader && ( <svg aria-hidden="true" role="status" className="inline w-4 h-4 me-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB" />
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor" />
                  </svg>)}
                  {btnLoader == false && (<Icon
                    path={mdiArrowTopRight}
                    style={{ marginLeft: "1em", transform: "rotate(45deg)", marginTop: '1px' }}
                    size={1}
                  />)}

                  
                </button>
              </div>
            </form>

          </div>
        </div>
      </div>
    </>
  );
};

export default Subscription;
