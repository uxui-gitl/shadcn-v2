'use client'
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { animate, stagger } from "framer-motion/dom";
import { motion, AnimatePresence } from "framer-motion";
import Image from 'next/image';


function NewNavBar() {
    const [isNavbarActive, setNavbarActive] = useState(false);

    const [tabNumber, setTabNumber] = useState(1);
    const [link, setLink] = useState([
        { id: '1', href: '/', text: 'Solutions', isDropDown:true },
        { id: '2', href: '/', text: 'Services', isDropDown:true },
        { id: '3', href: '/', text: 'Industry Focus', isDropDown:true},
        { id: '4', href: '/about-us', text: 'About us', isDropDown:false},
        { id: '5', href: '/contact-us', text: 'Careers', isDropDown:true},
    ]);

    function tabClickHandle(val) {
        setTabNumber(val);
    }

    useEffect(() => {
      if(isNavbarActive == true){
       document.body.style.overflowY = 'hidden';
      }
      else{
        document.body.style.overflowY = 'scroll';
      }

    }, [isNavbarActive])
    

    return (
        <>
            <div className={`${isNavbarActive ? 'bg-[#fff]' : 'bg-[#000]'} absolute top-0 z-[100] w-full`}>
                <div className={`border-1 px-10 z-50`}>
                    <div className="container mx-auto flex flex-col sm:flex-row sm:justify-between h-lvh sm:h-[100px] sm:items-center py-5">
                        <div className="logo sm:border-b-0 border-b-4 py-3 sm:py-0">
                            <Link href="/">
                                <Image
                                    src={`${isNavbarActive ? '/logo-black.svg' : '/godrejLogoWhite.svg'}`}
                                    alt="godrej logo"
                                    width="188"
                                    height="96"
                                />
                            </Link>
                        </div>
                        <div className="links flex sm:flex-row flex-col">
                            <>
                                {link?.map((item, index) => (
                                    <>
                                    {item.isDropDown == true ? (
                                        <button className={`sm:mr-10 text-[16px] font-medium py-5 hover:text-[#5F22D9] ${isNavbarActive ? 'text-[#000]' : 'text-[#fff]'}`} onClick={() => setNavbarActive(!isNavbarActive)}>{item.text} </button>
                                    ) : (
                                        <Link key={index} className={`sm:mr-10 text-[16px] font-medium py-5 hover:text-[#5F22D9] last:mr-0 ${isNavbarActive ? 'text-[#000]' : 'text-[#fff]'}`} href={item.href}>{item.text}</Link>
                                    )}
                                        
                                    </>
                                ))}
                            </>
                        </div>
                        <button type="button" class="text-white bg-[#5F22D9] hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center">Get In Touch</button>
                    </div>
                </div>

                <div className={`z-[10] px-10 w-full bg-white absolute top-[0px] duration-700 ${isNavbarActive ? 'translate-y-0 top-[100px]' : '-translate-y-full top-[0px]'}`} style={{ height: `calc(100vh - 66px)` }}>
                    <AnimatePresence>
                        {isNavbarActive && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                            >
                                <div className="container mx-auto solution-content grid grid-cols-4 gap-8 py-6" style={{ height: `calc('100vh - 116px')`, borderTop:'1px solid #d3d3d3' }}>
                                    <div className="" style={{ borderRight: '1px solid #E4E4E4' }}>
                                        <div className="grid grid-rows-3 gap-2">
                                            <div className={`flex leading-[28px] justify-start p-2 font-semibold`}>
                                                <img src="/navbar-icon/cube-outline.svg" alt={'asdn'} className='mr-6 h-[24px] w-[24px] mt-1' />
                                                <div className="">
                                                    <span className={`w-full text-[20px] font-semibold hover:text-[#5F22D9] cursor-pointer ${tabNumber == 1 ? 'text-[#5F22D9]' : 'text-[#000000]'}`} onClick={() => tabClickHandle(1)}>Automation</span>
                                                    <p className="text-[12px] font-medium leading-[16px] text-[#808080]">Delivering business value with <br></br>
                                                        automation</p>
                                                </div>
                                            </div>
                                            <div className={`flex leading-[28px] justify-start p-2 font-semibold`}>
                                                <img src="/navbar-icon/cloud.svg" alt={'asdn'} className='mr-6 h-[24px] w-[24px] mt-1' />
                                                <div className="">
                                                    <span className={`w-full text-[20px] font-semibold hover:text-[#5F22D9] cursor-pointer ${tabNumber == 2 ? 'text-[#5F22D9]' : 'text-[#000000]'}`} onClick={() => tabClickHandle(2)}>Cloud</span>
                                                    <p className="text-[12px] font-medium leading-[16px] text-[#808080]">Delivering business value with<br></br>
                                                        automation</p>
                                                </div>
                                            </div>

                                            <div className={`flex leading-[28px] justify-start p-2 font-semibold`}>
                                                <img src="/navbar-icon/ts.svg" alt={'asdn'} className='mr-6 h-[24px] w-[24px] mt-1' />
                                                <div className="">
                                                    <span className={`w-full text-[20px] font-semibold hover:text-[#5F22D9] cursor-pointer ${tabNumber == 3 ? 'text-[#5F22D9]' : 'text-[#000000]'}`} onClick={() => tabClickHandle(3)}>Transformation</span>
                                                    <p className="text-[12px] font-medium leading-[16px] text-[#808080]">Delivering business value with<br></br>
                                                        automation</p>
                                                </div>
                                            </div>
                                            {/*  */}
                                        </div>

                                    </div>
                                    {/* 1st column automation*/}
                                    <div className="col-span-2" style={{ borderRight: '1px solid #E4E4E4' }}>
                                        <div className="">
                                            <div className={`automation grid grid-cols-1 gap-4 ${tabNumber == 1 ? 'visiable' : 'hidden'}`}>
                                                <div className="">
                                                    <div className={`flex leading-[28px] justify-start font-semibold mb-6`}>
                                                        <div className="">
                                                            <span className={`w-full text-[20px] font-semibold hover:text-[#5F22D9] cursor-pointer mb-2 ${tabNumber == 1 ? 'text-[#5F22D9]' : 'text-gray-500'}`} onClick={() => tabClickHandle(1)}>Intelligent Technologies</span>
                                                            <p className="text-[12px] font-medium leading-[16px] text-[#808080]">Delivering business value with <br></br>
                                                                automation</p>
                                                        </div>
                                                    </div>
                                                    <div className="text-[16px] text-[#808080] font-semibold mb-1 hover:text-[#5F22D9]">AI/ML</div>
                                                    <div className="text-[16px] text-[#808080] font-semibold mb-1 hover:text-[#5F22D9]">RPA</div>
                                                    <div className="text-[16px] text-[#808080] font-semibold mb-1 hover:text-[#5F22D9]">IIOT</div>
                                                </div>
                                                <div className="">
                                                    <div className={`flex leading-[28px] justify-start font-semibold mb-4`}>
                                                        <div className="">
                                                            <span className={`w-full text-[20px] font-semibold hover:text-[#5F22D9] cursor-pointer ${tabNumber == 1 ? 'text-[#000]' : 'text-[#000]'}`} onClick={() => tabClickHandle(1)}> Data Insights</span>
                                                            <p className="text-[12px] font-medium leading-[16px] text-[#808080]">Delivering business value with <br></br>
                                                                automation</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="">
                                                    <div className={`flex leading-[28px] justify-start font-semibold mb-4`}>
                                                        <div className="">
                                                            <span className={`w-full text-[20px] font-semibold hover:text-[#5F22D9] cursor-pointer ${tabNumber == 1 ? 'text-[#000]' : 'text-gray-500'}`} onClick={() => tabClickHandle(1)}>Cyber Security</span>
                                                            <p className="text-[12px] font-medium leading-[16px] text-[#808080]">Delivering business value with <br></br>
                                                                automation</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="">
                                                    <div className={`flex leading-[28px] justify-start font-semibold mb-4`}>
                                                        <div className="">
                                                            <span className={`w-full text-[20px] font-semibold hover:text-[#5F22D9] cursor-pointer ${tabNumber == 1 ? 'text-[#000]' : 'text-gray-500'}`} onClick={() => tabClickHandle(1)}>Technology Stack</span>
                                                            <p className="text-[12px] font-medium leading-[16px] text-[#808080]">Delivering business value with <br></br>
                                                                automation</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className={`cloud grid grid-cols-1 gap-4 ${tabNumber == 2 ? 'visiable' : 'hidden'}`}>
                                                <div className="">
                                                    <div className={`flex leading-[28px] justify-start font-semibold mb-4`}>
                                                        <div className="">
                                                            <span className={`w-full text-[20px] font-semibold hover:text-[#5F22D9] cursor-pointer ${tabNumber == 2 ? 'text-[#5F22D9]' : 'text-gray-500'}`} onClick={() => tabClickHandle(1)}>Upgrade to Cloud</span>
                                                            <p className="text-[12px] font-medium leading-[16px] text-[#808080]">Delivering business value with <br></br>
                                                                automation</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="">
                                                    <div className={`flex leading-[28px] justify-start font-semibold mb-4`}>
                                                        <div className="">
                                                            <span className={`w-full text-[20px] font-semibold hover:text-[#5F22D9] cursor-pointer ${tabNumber == 2 ? 'text-[#000]' : 'text-[#000]'}`} onClick={() => tabClickHandle(1)}>Cloud Stack & Services</span>
                                                            <p className="text-[12px] font-medium leading-[16px] text-[#808080]">Delivering business value with <br></br>
                                                                automation</p>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>

                                            <div className={`transformation grid grid-cols-1 gap-4 ${tabNumber == 3 ? 'visiable' : 'hidden'}`}>
                                                <div className="">
                                                    <div className={`flex leading-[28px] justify-start font-semibold mb-4`}>
                                                        <div className="">
                                                            <span className={`w-full text-[20px] font-semibold hover:text-[#5F22D9] cursor-pointer ${tabNumber == 3 ? 'text-[#5F22D9]' : 'text-gray-500'}`} onClick={() => tabClickHandle(3)}>Enterprise Suite</span>
                                                            <p className="text-[12px] font-medium leading-[16px] text-[#808080]">Delivering business value with <br></br>
                                                                automation</p>
                                                        </div>
                                                    </div>
                                                    <div className="grid grid-cols-4 gap-10">
                                                        <div className="">
                                                            <div className="text-[16px] text-[#1D162B] font-semibold hover:text-[#5F22D9]">Infor</div>
                                                            <p className="text-[16px] text-[#808080] font-semibold hover:text-[#5F22D9]">Infor WMS</p>
                                                            <p className="text-[16px] text-[#808080] font-semibold hover:text-[#5F22D9]">Infor LN</p>
                                                            <p className="text-[16px] text-[#808080] font-semibold hover:text-[#5F22D9]">Infor Cloudsuite</p>
                                                            <p className="text-[16px] text-[#808080] font-semibold hover:text-[#5F22D9]">HxnEAM</p>
                                                        </div>
                                                        <div className="">
                                                            <div className="text-[16px] text-[#1D162B] font-semibold hover:text-[#5F22D9]">Microsoft Practices</div>
                                                            <p className="text-[16px] text-[#808080] font-semibold hover:text-[#5F22D9]">Business Central</p>
                                                            <p className="text-[16px] text-[#808080] font-semibold hover:text-[#5F22D9]">F&O</p>
                                                            <p className="text-[16px] text-[#808080] font-semibold hover:text-[#5F22D9]">D365 Commerce</p>
                                                        </div>
                                                        <div className="">
                                                            <div className="text-[16px] text-[#1D162B] font-semibold hover:text-[#5F22D9]">Oracle</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="">
                                                    <div className={`flex leading-[28px] justify-start font-semibold mb-4`}>
                                                        <div className="">
                                                            <span className={`w-full text-[20px] font-semibold hover:text-[#5F22D9] cursor-pointer ${tabNumber == 1 ? 'text-[#5F22D9]' : 'text-[#000]'}`} onClick={() => tabClickHandle(1)}>Customer Experience</span>
                                                            <p className="text-[12px] font-medium leading-[16px] text-[#808080]">Delivering business value with <br></br>
                                                                automation</p>
                                                        </div>
                                                    </div>
                                                    <p className="text-[16px] text-[#808080] font-semibold hover:text-[#5F22D9]">Infor WMS</p>
                                                    <p className="text-[16px] text-[#808080] font-semibold hover:text-[#5F22D9]">Infor LN</p>
                                                    <p className="text-[16px] text-[#808080] font-semibold hover:text-[#5F22D9]">Infor Cloudsuite</p>
                                                    <p className="text-[16px] text-[#808080] font-semibold hover:text-[#5F22D9]">HxnEAM</p>


                                                </div>

                                                {/* <div className="">
                                                    <div className="text-[22px] text-gray-500 hover:text-white">Customer Experience</div>
                                                    <div className="text-[22px] text-gray-500 hover:text-white">Infor CRM</div>
                                                    <div className="text-[22px] text-gray-500 hover:text-white">Microsoft CRM</div>
                                                    <div className="text-[22px] text-gray-500 hover:text-white"> Salesforce CRM</div>
                                                    <div className="text-[22px] text-gray-500 hover:text-white"> Ecommerce</div>
                                                    <div className="text-[22px] text-gray-500 hover:text-white"> LS Retail</div>
                                                </div> */}

                                            </div>
                                        </div>
                                        {/* services */}
                                    </div>
                                    {/* 2nd column atomation */}
                                    <div className="">
                                        <div className="">
                                            <div className="text-[16px] font-semibold">Latest News & Announcements</div>
                                            <div className="cards py-5" style={{ borderBottom: '1px solid #E4E4E4' }}>
                                                <div className="grid grid-cols-3 gap-4">
                                                    <div className="">
                                                        <Image src={'/caseStudies/GlobalOncology.png'} height={500} width={500} className="rounded-2xl"></Image>
                                                    </div>

                                                    <div className="col-span-2">
                                                        <div className="text-[14px] font-semibold leading-[18px] mb-1">Europe’s leading machine manufacturer achieves better</div>
                                                        <p className="text-[12px] text-[#808080] font-medium mb-1 leading-[16px]">Delivering business value with
                                                            automation</p>
                                                        <Link href={''} target='_blank' type="button" className="text-[#5F22D9] text-[12px] font-semibold flex items-center">Read more <svg class="w-3 h-2 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                                        </svg></Link>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* case studies */}
                                            <div className="text-[16px] font-semibold mt-3">Featured Case Studies</div>
                                            <div className="" style={{ borderBottom: '1px solid #E4E4E4' }}>
                                                {[1, 2].map((item) => (
                                                    <>
                                                        <div className="cards py-5" >
                                                            <div className="grid grid-cols-3 gap-4">
                                                                <div className="">
                                                                    <Image src={'/caseStudies/GlobalOncology.png'} height={200} width={200} className="rounded-2xl"></Image>
                                                                </div>
                                                                <div className="col-span-2">
                                                                    <div className="text-[14px] font-semibold leading-[18px] mb-2">Europe’s leading machine manufacturer achieves better</div>
                                                                    <Link href={''} target='_blank' type="button" className="text-[#5F22D9] text-[12px] font-semibold flex items-center">Read more <svg class="w-3 h-2 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                                        </svg></Link>
                                                         </div>
                                                            </div>
                                                        </div>
                                                    </>
                                                ))}
                                            </div>

                                            {/* need to contact */}
                                            <div className="mt-4 mb-3 text-[16px] font-semibold text-[#1D162B]">Need to connect</div>
                                            <div className="grid grid-cols-2 gap-4">
                                                <div className="">
                                                    <p className="text-[#808080] text-[12px] font-medium mb-2">For Enquiry</p>
                                                    <div className="text-[#1D162B] text-[14px] font-semibold">Vijay Kumar</div>
                                                    <div className="text-[#808080] text-[12px] font-semibold">vjk@godrej.com</div>
                                                </div>
                                                <div className="">
                                                    <p className="text-[#808080] text-[12px] font-medium mb-2">For Enquiry</p>
                                                    <div className="text-[#1D162B] text-[14px] font-semibold">Vijay Kumar</div>
                                                    <div className="text-[#808080] text-[12px] font-semibold">vjk@godrej.com</div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    {/* 3th column */}
                                </div>
                                <div className="">
                                    <span className="font-medium text-[12px] text-[#808080] mr-2">LinkedIn</span>
                                    <span className="font-medium text-[12px] text-[#808080] mr-2">Twitter</span>
                                    <span className="font-medium text-[12px] text-[#808080] mr-2">Instagram</span>
                                    <p className="text-[12px] text-[#808080] font-medium mt-2">© 2024. Godrej Infotech. All rights reserved.</p>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                </div>
            </div>
        </>
    )
}


export default NewNavBar;