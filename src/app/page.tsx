"use client";
// system import
import Image from "next/image";
import { useRef } from "react";
import Slider from "@/components/Slider";
import SectionWrapperNew from "@/components/SectionWrapperNew";
import CaseStudiesSection from "@/sections/case-studies/CaseStudiesSection";
import BlogSection from "@/sections/blog/BlogSection";
import ReviewSliderSection from '@/sections/reviewSlider/ReviewSliderSection';
import TransformBusinessForm from "@/sections/transformBusinessFrom/TransformBusinessFromSection";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';
import Navbar from "@/components/Navbar/Navbar";
import { Tabs } from "@/components/ui/tabs";
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from 'react-intersection-observer';
import React, { useEffect, useState } from "react";
import OutlinedButtonWithArrow from "@/components/ui/buttons/OutlinedButtonWithArrow";
import Dialog from "@/components/Dialog";
import useScrollTriggeredCountUp from "@/components/home/useScrollTriggeredCountUp";





export default function Home() {
  const ref1 = useRef<HTMLDivElement>(null);
  const ref2 = useRef<HTMLDivElement>(null);
  const ref3 = useRef<HTMLDivElement>(null);
  const ref4 = useRef<HTMLDivElement>(null);
  
  const count1 = useScrollTriggeredCountUp(ref1, 25); // Count-up from 0 to 25
  const count2 = useScrollTriggeredCountUp(ref2, 500); // Count-up from 0 to 500
  const count3 = useScrollTriggeredCountUp(ref3, 15); // Count-up from 0 to 15000 (15k)
  const count4 = useScrollTriggeredCountUp(ref4, 15); // Count-up from 0 to 15000 (15k)


  const [showModal1, setshowModal1] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.1, // Trigger when 10% of the component is in view
  });


  const items = [
    {
      id: 1,
      content: "manufacturing"
    },
    {
      id: 2,
      content: "technology"
    },
    {
      id: 3,
      content: "energy"
    }
  ];

  const items2 = [
    {
      id: 4,
      content: "reliable"
    },
    {
      id: 5,
      content: "customer-centric"
    },
    {
      id: 6,
      content: "sustainability-driven "
    }
  ]

  const items3 = [
    {
      id: 7,
      content: "confidence"
    },
    {
      id: 8,
      content: "agility"
    },
    {
      id: 9,
      content: "responsibility "
    }
  ];

  const tabs = [
    {
      title: "Services",
      value: "services",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-3xl text-xl md:text-4xl font-bold text-black bg-[#FCE6F4]">
          <ServiceContent />
        </div>
      ),
    },
    {
      title: "Industry",
      value: "industry",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-3xl text-xl md:text-4xl font-bold text-black bg-[#FCE6F4]">
          <IndustryContent />
        </div>
      ),
    },
    {
      title: "Partners",
      value: "partners",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-3xl text-xl md:text-4xl font-bold text-black bg-[#FCE6F4]">
          <IndustryContent />
        </div>
      ),
    },
  ];
  const blogImageUrl = "/homeNew/blog.svg";

  const partnerLogo = [
    "/homeNew/partner1.svg",
    "/homeNew/partner2.svg",
    "/homeNew/partner3.svg",
    "/homeNew/partner4.svg",
    "/homeNew/partner1.svg",
    "/homeNew/partner2.svg",
    "/homeNew/partner3.svg",
  ];

  const CASE_STUDIES_DATA = [
    {
      imageURL: "/CloudStackServices/case-studies/bg--coffee-beans.png",
      videoURL: "/CloudStackServices/case-studies/bg--video-industry.mp4",
      title: "Case Studies",
      heading: "Infor Project Highlights",
      description:
        "World's top-notch businesses choose us for our excellent technical acumen and proven standards as we deliver high performing multidisciplinary solutions across the spectrum of industries.",
      link: "/case-study-1",
      color: "#FFFFFF",
    },
    {
      imageURL: "",
      title: "",
      heading: "Electrical Component Manufacturer",
      description:
        "Infor LN reduces manual efforts by 30% for auto sector's leading electrical component manufacturer",
      link: "https://www.godrejinfotech.com/assets/pdf/case-studies/Manufacturer-Electrical-components-Automobile.pdf ",
      color: "#000",
      bgCardColor: "#FCE6F4",
    },

    {
      imageURL: "/path/to/image1.jpg",
      title: "",

      heading: "Hydraulic Systems Manufacturer",
      description:
        "Infor LN achieves Enhanced User Experience and Workforce Enablement for Global Hydraulic Systems Manufacturer",
      link: "https://www.godrejinfotech.com/assets/pdf/case-studies/Infor-LN-India-Localization.pdf",
      color: "#000",
      bgCardColor: "#EFE9FB",
    },
    {
      imageURL: "/CloudStackServices/case-studies/bg--electical-devices.png",
      title: "",
      heading: "Sheet metal manufacturer",
      description:
        "Infor cuts costs by 40% and boosts after-sales speed by 20% for European sheet metal manufacturer",
      link: "/case-study-1",
      color: "#000",
      bgCardColor: "#E1F2EF",
    },
    // Add more case studies here...
  ];

  const TESTIMONIAL_DATA = [
    {
      id: 1,
      cardHeading: "Infor Managed Support Services",
      cardDesc: 'In January 2009, our India operations launched ERP LN FP2. Godrej Infotech has provided consistent, effective support since April, optimizing ERP use and managing global financial reporting. We appreciate GITL team for their successful efforts.',
      designation: 'Manager',
      companyName: 'Global Leader in Ice-Cold Merchandiser & Glass Bottle Manufacturer'
    },
    {
      id: 2,
      cardHeading: "Implementation with Better Business Understanding",
      cardDesc: 'Thank you, Godrej Infotech, for excellent implementation, quick understanding of our business needs and impactful contributions. Appreciation to your leadership and dedicated team.',
      designation: 'IT Manager',
      companyName: 'Global Process Equipment Supplier'
    },
    {
      id: 3,
      cardHeading: "Swift Implementation with Proactive Approach",
      cardDesc: 'Thanks to Godrej Infotech Limited for their swift Infor LN 10.4 & Infor OS implementation. With a seamless process, they resolved our challenges and mapped all business processes within 10 weeks. Kudos to the delivery and backend technical teams for their proactive and resourceful support.',
      designation: 'Executive Director',
      companyName: 'Commercial'
    },
  ];

  const sliderData = [
    { id: 1, title: 'EnterPrise Customers', desc: "Europe's Leading Machine Manufacturer Achieves Better Control on Product Customization & Planning with Integrated Infor LN 10.4 Solutions", url: 'https://png.pngtree.com/background/20230512/original/pngtree-business-meeting-room-dark-background-picture-image_2502832.jpg' },
    { id: 2, title: 'EnterPrise Customers2', desc: "Europe's Leading Machine Manufacturer Achieves Better Control on Product Customization & Planning with Integrated Infor LN 10.4 Solutions2", url: 'https://img.freepik.com/premium-photo/artificial-intelligence-scattering-head-profile-chromeplated-robot-black-background-ai-generated_868611-1860.jpg' },
    { id: 3, title: 'EnterPrise Customers3', desc: "Europe's Leading Machine Manufacturer Achieves Better Control on Product Customization & Planning with Integrated Infor LN 10.4 Solution3", url: 'https://images.prismic.io/hubtic/3890db0a-cd65-45bb-8ac6-f08b971e68cb_Website+Go%CC%88rselleri+1080x608+%281%29.jpg?auto=compress,format&rect=135,0,811,608&w=2000&h=1500' },

  ]

  const [sliderImageUrl, setSliderImageUrl] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((state) => {
        if (state >= items.length - 1) return 0;
        return state + 1;
      });
    }, 3000);
    return () => clearInterval(id);
  }, []);

  function handleReadMoreHover(item: any, isFilled: boolean) {
    if (isFilled) {
      setSliderImageUrl(item.url)
    }
    else {
      setSliderImageUrl('')
    }
  }

  return (
    <>
      <div className={`relative z-[500]`}>
        <div className={`absolute w-full  `}>
          <Navbar theme="light" />
        </div>
      </div>
      {/* banner slider */}
      <div className="slider-wrapper bg-black" style={{ height: '100vh' }}>
        <div className="video relative" style={{ height: 'inherit' }}>
          <video src="/home/1.mp4"
            autoPlay
            loop
            muted
            className="inset-0 w-full h-full object-cover"></video>
          <div className={` w-full h-full absolute top-0 transition duration-700  ${sliderImageUrl ? 'opacity-100 ease-in-out' : 'opacity-0 ease-in-out'}`} style={{
            backgroundImage: `url(${sliderImageUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}>

          </div>
          <div className="container mx-auto text-[76px] leading-[86px] text-white absolute" style={{ top: '30%', left: '0', right: '0' }}>
            Delivering Business<br></br> value with Automation
          </div>
          <hr className="h-px my-8 bg-[#e5e7eb5c] border-0 absolute" style={{ top: '55%', left: '0', right: '0' }}></hr>
          {/* slider */}
          <div className="container mx-auto h-60" style={{ position: "absolute", width: "100%", bottom: '0', left: 0, right: 0 }}>
            <div className="flex h-60" style={{ alignItems: "baseline" }}>
              <div className=" w-[70%]">
                <Swiper
                  slidesPerView={1}
                  navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                  }}
                  autoplay={false}
                  loop={true}
                  spaceBetween={30}
                  modules={[Navigation]}
                >
                  {sliderData?.map((item, index) => (
                    <SwiperSlide key={item.id}>
                      <div className="w-full py6 bg-transparent rounded-3xl">
                        <div className="grid grid-cols-3 gap-4">
                          <motion.div
                            ref={ref}
                            whileInView={{ y: 0, opacity: 1 }}
                            initial={{ y: 100, opacity: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                          >
                            <div className="text-[#fff] text-[20px] font-semibold ">{item.title}</div>
                          </motion.div>
                          <motion.div className="col-span-2"
                            ref={ref}
                            whileInView={{ y: 0, opacity: 1 }}
                            initial={{ y: 100, opacity: 0 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                          >
                            <div className="">
                              <p className="text-base font-medium leading-[24px] text-white mb-10">{item.desc}</p>
                              <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2" onMouseOver={() => handleReadMoreHover(item, true)} onMouseOut={() => handleReadMoreHover(item, false)}>Read more</button>
                            </div>
                          </motion.div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <div className="w-[30%] relative">
                <div className={`swiper-button-next`} style={{ width: '48px', height: '48px' }}>
                  <img src="/homeNew/btn-arrows-right.svg" alt="icon" />
                </div>
                <div className={`swiper-button-prev`} style={{ width: '48px', height: '48px', transform: "translateX(268px)", }}>
                  <img src="/homeNew/btn-arrows-left.svg" alt="icon" />
                </div>
              </div>
            </div>
          </div>
          {/*end slider */}
        </div>
      </div>
      {/* [partner Section] */}

      <div className="bg-white relative z-10">
        <div className="md:container mx-auto pt-40 pb-20 relative">
          <div className="absolute"
            style={{
              left: "50%",
              transform: "translateX(-50%)",
              backgroundSize: 'cover',
              background: "url('/homeNew/Union.svg')",
              backgroundRepeat: "no-repeat",
              width: '459px',
              height: "-webkit-fill-available",
              top: "-77px",
            }}>

            <Image className="absolute rotating"
              style={{
                left: "36%",
                transform: "translateX(-50%)",
                top: "11px",
              }}
              src={"/homeNew/partner-circle.svg"}
              width={130}
              height={130}
              alt="asdjn"
            />
          </div>
          <Slider slidesPerView={6} autoplay={true}>
            {partnerLogo?.map((item, index) => (
              <SwiperSlide key={index}>
                <Image src={item} width={150} height={150} alt="khbas" />
              </SwiperSlide>
            ))}
          </Slider>
        </div>
      </div>

      {/* end partner Section */}
      <hr className="h-px bg-white border-1" />
      <div className=" relative z-2 bg-white" style={{ borderBottomLeftRadius: '24px', borderBottomRightRadius: "24px" }}>
        <div className="md:container mx-auto pt-32 pb-40">
          <p className="text-[20px] text-[#808080] font-medium w-[214px] mb-20">
            We must move beyond the usual to thrive.
          </p>
          <div className="text-[64px] leading-[74px] font-semibold">
            Transform your&nbsp;
            <motion.div
              key={items[index].id}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ ease: "easeInOut", duration: 0.5, delay: 0.1 }}
              style={{ display: 'inline-block' }}
            >
              <span className="text-[#5F22D9]">{items[index].content}</span>
            </motion.div>
            &nbsp;<br></br>
            organization into a&nbsp;
            <motion.div
              key={items2[index].id}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ ease: "easeInOut", duration: 0.5, delay: 0.3 }}
              style={{ display: 'inline-block' }}
            >
              <span className="text-[#5F22D9]">{items2[index].content}</span> </motion.div>
            <br></br>
            delivering with  <motion.div
              key={items3[index].id}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ ease: "easeInOut", duration: 0.5, delay: 0.4 }}
              style={{ display: 'inline-block' }}
            ><span className="text-[#5F22D9]">{items3[index].content}.</span></motion.div>
          </div>
        </div>
      </div>
      {/* video */}
      <div className="h-screen -mt-5" >
        <video
          src={'https://s3-figma-videos-production-sig.figma.com/video/1327514938936607439/TEAM/cf3d/2255/-0d82-42de-b3af-a9a53cdf193e?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=A~oKeONzxgirn5kceEUu7lXW87jduK69e0XZFA0KUXzdOAtpe6XBvNo5bOt9VpKwMkygF7ZenKSU5W~VdOulvLufBBHc9aIoW40wIiR254qQkrsQCxZ16xp15g6CaHqemy5gIf1nM4nP-KxFh4-Q00uy71tQYgFLRzeH7aSMvV9B27kVgzHN1sA7QfL2A46-YTgkTXa1-yWBdIFCdabXDfkAbl2uuNEXfi2ywiO3BcR-08NHN-Iv3ltpnHqodEQwfkslanjHaXujCEyudOnmD4St8MrFMB9UykKj4iYevvTkOU8jZjHu7ucTFqK6RlWlLrnHWyZmPTf6H1~OhUf6Bg__'} // Replace with your video path
          autoPlay
          loop
          muted
          className="inset-0 w-full h-full object-cover fixed -z-50"
        />
      </div >
      {/* video */}

      {/* innovative section */}
      <SectionWrapperNew
        sectionHeading={"Transforming Through Innovative Change"}
        sectionDesc={"Empowering Your Transformation Journey with Our ACT Model: Automation, Cloud, and Transformation"}
        sectionTextColor="black"
        sectionHeadingLayout="horizontal"
        title="THE ACT MODEL - AUTOMATION"
        style={{ backgroundColor: "white", position: 'relative', zIndex: '2', height: '750px' }}
      >


        <Slider slidesPerView={3}>
          {[1, 2, 3, 4, 5]?.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="p-8 bg-[#5F22D9] rounded-3xl ">
                <div className="text-xl text-white text-semibold mb-[100px]">
                  Automation
                </div>
                <div className="mb-[50px] text-[42px] font-medium text-white leading-[50px]">Streamline Your Operations</div>
                <div className="mb-3 text-xl leading-[31px] text-white h-[75px]">Harness the power of automation to optimize processes and drive efficiency.</div>
                <div className="flex justify-end px-6 py-4">
                  <OutlinedButtonWithArrow arrowColor={'white'} size={48} onClick={() => setshowModal1((prev) => !prev)} />
                </div>
              </div>

            </SwiperSlide>
          ))}
        </Slider>
      </SectionWrapperNew>
      {/* end innovative section */}

      {/* hub of experties */}
      <SectionWrapperNew
        sectionHeading={"Hub of Expertise"}
        sectionDesc={"We are here to build edge and bring technology brilliance with the finest in the industry."}
        sectionTextColor="white"
        sectionHeadingLayout="center"
        style={{ background: "linear-gradient(360deg, #5F22D9 12.04%, #0c031f 57.96%)", paddingTop: '400px' }}
      >
        <div className="grid grid-cols-4 gap-16 py-6">
          <div className="" ref={ref1}>
            <h1 className="text-[96px] font-[700] text-white">{count1}<sup className="text-normal">+</sup></h1>
            <p className="text-base font-medium text-[#EFE9FB]">A Legacy of Success in Delivering Tailored Solutions for 25+ Years</p>
          </div>
          <div className="" ref={ref2}>
            <h1 className="text-[96px] font-[700] text-white">{count2}<sup>+</sup></h1>
            <p className="text-base font-medium text-[#EFE9FB]">Trusted by 898 Customers Across multiple Industries.</p>
          </div>
          <div className=""  ref={ref3}>
            <h1 className="text-[96px] font-[700] text-white">{count3}k<sup>+</sup></h1>
            <p className="text-base font-medium text-[#EFE9FB]">Harnessing 15,000 Man-Years of Expertise for Your Benefit.</p>
          </div>
          <div className=""  ref={ref4}>
            <h1 className="text-[96px] font-[700] text-white">{count4}k<sup>+</sup></h1>
            <p className="text-base font-medium text-[#EFE9FB]">Fueled by a Diverse Workforce of 15000 Employees Globally.</p>
          </div>
        </div>

        <div className="relative h-[450px] translate-y-[92px]">
          <Image src="/homeNew/globe.svg" layout="fill" alt="globe" />
        </div>
      </SectionWrapperNew>
      {/* end hub of experties */}

      {/* offerings */}
      <SectionWrapperNew
        sectionHeading={"Unlock potential with our offerings"}
        sectionDesc={"Innovative solutions that empower businesses to thrive in today’s digital landscape"}
        sectionTextColor="black"
        title="OUR OFFERINGS"
        sectionHeadingLayout="horizontal"
        style={{ background: 'white' }}
      >
        <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col mx-auto w-full  items-start justify-start my-0">
          <Tabs activeTabClassName={`!bg-[#5F22D9]`} contentClassName={`!mt-20`} tabClassName={`!px-10 hover:bg-[#5F22D9]`} containerClassName={`!my-2`} tabs={tabs} />
        </div>
      </SectionWrapperNew>
      {/* end offerings */}

      {/* @ts-ignore */}
      <CaseStudiesSection casestudy={CASE_STUDIES_DATA} csLayout={"1"} bgColor={'#1D162B'} />

      <BlogSection
        ID={"blog"}
        blogImageUrl={'/homeNew/blog-svg.png'}
        Heading={"Elevate Your Professional Journey"}
        Desc={
          "Join a collaborative environment that fosters creativity and innovation. Take the next step in your career today!"
        }
        Color={"white"}
        readMoreUrl={"https://www.godrejinfotech.com/blogDetails.aspx?blog=7"}
      ></BlogSection>
      {/* @ts-ignore */}
      <ReviewSliderSection 
        ID={"TESTIMONIALS"}
        Heading={"What people are saying about the us."}
        Desc={''}
        Color="#ffffff"
        CardDataList={TESTIMONIAL_DATA}
        BGColor="#1D162B"
      ></ReviewSliderSection>

      <TransformBusinessForm
        Title={"Are you Ready for Infor-driven growth? "}
        Desc={
          "Let's get started!"
        }
      ></TransformBusinessForm>

      {/* <Footer /> */}

      {/* modal */}
      <Dialog
        shouldShow={showModal1}
        onRequestClose={() => {
          setshowModal1((prev) => !prev);
        }}
        title={"dummy title"}
      >
        <h1>Dummy data</h1>
      </Dialog>
      {/* end modal */}
    </>
  );
}

const ServiceContent = () => {
  const services = [
    'Business Consulting',
    'Implementation & Global Rollout',
    'Migration & Transformation',
    'Legacy Modernisation',
    'Infrastructure as a Service',
    'Managed Services',
  ];
  return (
    <div className="grid grid-cols-2 gap-20 h-full">
      <div className="py-10 px-10">
        {services.map((item) => (
          <>
            <div className="list text-[22px] py-4 flex justify-between" style={{ borderBottom: '1px solid #d3d3d3' }}>
              {item}
              <Image width={35} height={35} src="/homeNew/chevron-right.svg" alt="char"></Image>
            </div>
          </>
        ))}

      </div>
      <div className="relative" style={{ backgroundImage: `url(/homeNew/tab1.svg)`, backgroundSize: 'cover' }}>
      </div>
    </div>
  );
};

const IndustryContent = () => {
  const data = [
    'Business Consulting',
    'Implementation & Global Rollout',
    'Migration & Transformation',
    'Legacy Modernisation',
    'Infrastructure as a Service',
    'Managed Services',
  ];
  return (
    <div className="grid grid-cols-2 gap-20 h-full">
      <div className="py-10 px-10">
        {data.map((item) => (
          <>
            <div className="list text-[22px] py-4 flex justify-between" style={{ borderBottom: '1px solid #d3d3d3' }}>
              {item}
              <Image width={35} height={35} src="/homeNew/chevron-right.svg" alt="char"></Image>
            </div>
          </>
        ))}

      </div>
      <div className="relative" style={{ backgroundImage: `url(/homeNew/tab1.svg)`, backgroundSize: 'cover' }}>
      </div>
    </div>
  );
};
