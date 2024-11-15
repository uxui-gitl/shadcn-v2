'use client';
"use client";
import React, { useState } from "react";
import EntIntro from "@/components/EntIntro";
import SectionNav from "@/components/SectionNav";
import OverviewSection from "@/sections/overview/OverviewSection";
import BlogSection from "@/sections/blog/BlogSection";
import DistinctiveSection from "@/sections/distinctive/DistinctiveSection";
import TransformBusinessForm from "@/sections/transformBusinessFrom/TransformBusinessFromSection";
import BenefitSliderSection from "@/sections/benefitSlider/BenefitSliderSection";
import IndustrySpotlight from "@/sections/industry-spotlight/industrySpotlight";
import ChallengeSection from "@/sections/challenge/challengeSection";
import SectionWidthSlider from "@/sections/sectionWithSlider/SectionWithSlider";
import SectionWrapperNew from '@/components/SectionWrapperNew';
import Image from "next/image";
import Slider from "@/components/Slider";
import { SwiperSlide } from "swiper/react";
import OutlinedButtonWithArrow from "@/components/ui/buttons/OutlinedButtonWithArrow";
import HorizontalHeading from '@/components/HorizontalHeading';


const D365Commerce = () => {
  const [iskeyModalActive, setIskeyModalActive] = useState(false);
  const [keyModalData, setkeyModalData] = useState();



  const blogImageUrl = "/d365Commerce/blog-bg.webp";
  const imgBGURL_Challenges =
    "/upgradeCloud/backgrounds/bg--onprem-challenges-left.png";
  const defaultChallengesIcon = '/upgradeCloud/icons/ico--target.svg';


  const BENEFITS_CARDS_DATA = [
    {
      id: "1",
      icon: '/d365Commerce/benefits/reduceComplexity.svg',
      cardDesc: "Reduce complexity and total cost of ownership with a unified commerce platform.",
    },
    {
      id: "2",
      icon: '/d365Commerce/benefits/AI-based.svg',
      cardDesc: "AI-based suggestions for cross-selling and up-selling that improves customer buying propositions.",
    },
    {
      id: "3",
      icon: '/d365Commerce/benefits/commerceOperations.svg',
      cardDesc: "Strengthened commerce operations and customer experiences with omnichannel selling and real-time inventory visibility.",
    },
    {
      id: "4",
      icon: '/d365Commerce/benefits/openAccess.svg',
      cardDesc: "Open access to full product catalogues and advanced in-built tools for proactive actions and decision-making.",
    },
    {
      id: "5",
      icon: '/d365Commerce/benefits/Connected.svg',
      cardDesc: "Connected view of marketing and commerce operations for improved coordination.",
    },
    {
      id: "6",
      icon: '/d365Commerce/benefits/engagingDigital.svg',
      cardDesc: "Engaging digital storefronts with user-friendly web authoring and development tools.",
    },
  ];
  const INDUSTRY_SPOTLIGHT = [
    {
      id: 1,
      cardBGImageUrl:
        "/industry-spotlight/cards-backgrounds/card-bg--manufacturing.png",
      cardBGColor: "#7F4EE1",
      cardHeading: "Retail",
      cardDesc: "",
      isArrow: false,
      cardTextColor: "white",
      additionalData: `
      <ul class="space-y-4 text-gray-500 list-disc list-inside dark:text-gray-400">
    <li>
        Manufacturing
        <ol class="ps-5 mt-2 space-y-1 list-decimal list-inside">
            <li>industrial Manufacturing   </li>
            <li>Automotive OEM/ Suppliers </li>
            <li>High-Tech Electronics  </li>
            <li>Refinery, Petro-Chemical and Process Equipment   </li>
            <li>Aerospace & Defense Equipment   </li>
            <li>Ship Design, Building and Repairs   </li>
            <li>Infrastructure / EPC with Turnkey and BOOT BOLT </li>
        </ol>
    </li>
     <li>
        Industrial Manufacturing 
        <ol class="ps-5 mt-2 space-y-1 list-decimal list-inside">
            <li>Automotive OEM/ Suppliers</li>
            <li>High-Tech Electronics  </li>
        </ol>
    </li>
</ul>`
    },
    {
      id: 2,
      cardBGImageUrl:
        "/industry-spotlight/cards-backgrounds/card-bg--retail.png",

      cardBGColor: "#7F4EE1",
      cardHeading: "Duty-Free and Travel Retail",
      cardDesc:
        "",
      isArrow: false,
      cardTextColor: "white",
    },
    {
      id: 3,
      cardBGImageUrl:
        "/industry-spotlight/cards-backgrounds/card-bg--trading-and-distribution.png",

      cardBGColor: "#7F4EE1",
      cardHeading: "Food and Beverage",
      cardDesc:
        "",
      isArrow: false,
      cardTextColor: "white",
    },
    {
      id: 4,
      cardBGImageUrl:
        "/industry-spotlight/cards-backgrounds/card-bg--healthcare.png",

      cardBGColor: "#EFE9FB",
      cardHeading: "Hospitality",
      cardDesc:
        "",
      isArrow: false,
      cardTextColor: "white",
    },

    // Add more cards as needed
  ];

  const DISTINCTIVE_DATA = [
    {
      _id: 1,
      desc: "Strong track record in Customer and Channel Commerce (C-Commerce) domain.",
      icon: "/d365Commerce/distinctiveEdge/strongTrack.svg",
    },
    {
      _id: 2,
      desc: "Proficiency in Magento CE & Enterprise for a seamless end-to-end customer experience journey.",
      icon: "/d365Commerce/distinctiveEdge/proficiency.svg",
    },
    {
      _id: 3,
      desc: "Expertise in developing native iOS and Android apps for end-users, dealers, and sales personnel.",
      icon: "/d365Commerce/distinctiveEdge/expertise.svg",
    },
    {
      _id: 4,
      desc: "Gold Partnership with Microsoft and specialized expertise in retail vertical, SMEs, and Channel Commerce.",
      icon: "/d365Commerce/distinctiveEdge/goldPartnership.svg",
    },
    {
      _id: 5,
      desc: "Troubleshoot, evaluates and optimizes D365 Commerce solution with expertise.",
      icon: "/d365Commerce/distinctiveEdge/troubleshoot.svg",
    },
    {
      _id: 6,
      desc: "Global delivery model and pool of certified D365 experts.",
      icon: "/d365Commerce/distinctiveEdge/globalDelivery.svg",
    },
    {
      _id: 7,
      desc: "Microsoft cloud partner and proven history of working with small, medium and large size enterprises.",
      icon: "/d365Commerce/distinctiveEdge/microsoftCloud.svg",
    },
  ];

  const CHALLENGES_LIST_DATA = [
    { id: 1, title: "Managing timely order delivery & return", icon: defaultChallengesIcon },
    { id: 2, title: "Adapting to changing consumer behaviors", icon: defaultChallengesIcon },
    { id: 3, title: "Providing digital self-service options for seamless CX", icon: defaultChallengesIcon },
    { id: 4, title: "Optimising inventory management", icon: defaultChallengesIcon },
    { id: 5, title: "Breaking data silos for better collaboration", icon: defaultChallengesIcon },
  ];
  const KEY_CAPABILITIES = [
    {
      id: 1,
      BGImageUrl: "",
      BGColor: "#fff",
      CardBGColor: "transparent",
      CardTextColor: 'white',
      CardTitle: "",
      CardIconUrl: "/upgradeCloud/icons/ico--target.svg",
      CardHeading: "Consistent Customer Engagement",
      CardDesc:
        "Hassle-free engagement, allowing customers to choose when, how and where they purchase.",
      isArrow: "false",
      link: [],
      
    },

    {
      id: 2,
      BGImageUrl: "",
      BGColor: "#fff",
      CardBGColor: "transparent",
      CardTextColor: 'white',
      CardTitle: "",
      CardIconUrl: "/upgradeCloud/icons/ico--target.svg",
      CardHeading: "Enhanced B2B Engagement",
      CardDesc:
        "Tailored functionality for B2B organizations and self-service purchasing experiences.",
      isArrow: "true",
      link: [],
    },
    {
      id: 3,
      BGImageUrl: "",
      BGColor: "#fff",
      CardBGColor: "transparent",
      CardTextColor: 'white',
      CardTitle: "",
      CardIconUrl: "/upgradeCloud/icons/ico--target.svg",
      CardHeading: "Dynamic Website Creation",
      CardDesc:
        "Launch dynamic websites effortlessly with a user-friendly visual page builder.",
      isArrow: "",
      link: [],
    },
    {
      id: 4,
      BGImageUrl: "",
      BGColor: "#fff",
      CardBGColor: "transparent",
      CardTextColor: 'white',
      CardTitle: "",
      CardIconUrl: "/upgradeCloud/icons/ico--target.svg",
      CardHeading: "Personalized Multichannel Journeys",
      CardDesc:
        "Craft personalized journeys with Commerce and Dynamics 365 Marketing.",
      isArrow: "",
      link: [],
    },
    {
      id: 5,
      BGImageUrl: "",
      BGColor: "#fff",
      CardBGColor: "transparent",
      CardTextColor: 'white',
      CardTitle: "",
      CardIconUrl: "/upgradeCloud/icons/ico--target.svg",
      CardHeading: "24/7 AI-Powered Support",
      CardDesc:
        "Provide round-the-clock AI-powered chatbot support with Dynamics 365 Customer Service.",
      isArrow: "",
      link: [],
    },
    {
      id: 6,
      BGImageUrl: "",
      BGColor: "#fff",
      CardBGColor: "transparent",
      CardTextColor: 'white',
      CardTitle: "",
      CardIconUrl: "/upgradeCloud/icons/ico--target.svg",
      CardHeading: "Data-Driven Targeting",
      CardDesc:
        "Target customers effectively through data-driven segmentation for relevant campaigns.",
      isArrow: "",
      link: [],
    },
    {
      id: 7,
      BGImageUrl: "",
      BGColor: "#fff",
      CardBGColor: "transparent",
      CardTextColor: 'white',
      CardTitle: "",
      CardIconUrl: "/upgradeCloud/icons/ico--target.svg",
      CardHeading: "Adaptable Commerce",
      CardDesc:
        "Deploy adaptable, API-first commerce for various channels.",
      isArrow: "",
      link: [],
    },
    {
      id: 8,
      BGImageUrl: "",
      BGColor: "#fff",
      CardBGColor: "transparent",
      CardTextColor: 'white',
      CardTitle: "",
      CardIconUrl: "/upgradeCloud/icons/ico--target.svg",
      CardHeading: "Data Security",
      CardDesc:
        "Go global with flexible deployment options and secure data management.",
      isArrow: "",
      link: [],
    },
  ];


  function handleKeyModal(val, item) {
    setkeyModalData('');
    setIskeyModalActive(val);
    setkeyModalData(item)
  }


  return (
    <>
      {/* Start--HeroBanner-Section========================================================= */}
      <EntIntro
        title="Experience unified commerce & customer insights with D365 Commerce"
        desc="Delivering tailored solutions for eCommerce, point-of-sale and customer relationship management "
        cta="Let's Connect"
        width="60%"
        video="/d365Commerce/video/pageBanner.mov"
      />

      <OverviewSection
        Text={
          "Dynamics 365 Commerce enables seamless omnichannel experiences, integrating back-office, in-store, call center, and digital, driven by consumer insights."
        }
      />

      {/* Start--Section--Challenges======================================================================== */}
      <SectionWrapperNew
        sectionHeading={'Retail Business Challenges'}
        sectionDesc={'Retailers face a pressing need to evolve with tech-savvy customers, prioritizing personalized connections and seamless interactions. '}
        sectionTextColor={'text-primary-900'}
        sectionHeadingLayout="left"
        style={{ background: `url('/Transformation/d365/chbg1.svg')`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ul className=" space-y-4 w-full text-primary-900">
            {CHALLENGES_LIST_DATA.map((challenge, index) => (
              <li
                key={challenge.id}
                className={`text-body-01 leading-body-01 flex items-start py-2 border-b-[0.5px] border-neutral-black border-opacity-20 w-full ${index === CHALLENGES_LIST_DATA.length - 1 ? 'border-b-0' : ''}`}
              >
                <div className="flex-shrink-0 mr-4">
                  <Image
                    src={challenge.icon}
                    alt={`${challenge.title} icon`}
                    width={32}
                    height={32}
                    style={{ filter: "brightness(0)" }}
                  />
                </div>
                <div className="text-left">
                  <h3 className="text-paragraph-01 leading-paragraph-01 font-normal">
                    {challenge.title}
                  </h3>
                </div>
              </li>
            ))}
          </ul>
          <div>
            {/* <img src="/about/video.png" /> */}
          </div>
        </div>
      </SectionWrapperNew>
      {/* End--Section--Challenges======================================================================== */}
      {/* Start--Section--UltimateChoice======================================================================== */}
      {/* key section */}
      <div className="rounded-3xl" style={{overflow:'hidden', position:'relative'}}>
        <div className="" style={{ backgroundColor: '#2B1624', position: 'relative' }}>
          <div className="container mx-auto py-32">
            <HorizontalHeading heading={'D365 Commerce Key Capabilities'} desc={'Optimise retail business with personalized experiences & enhanced employee productivity'} textColor={'text-neutral-white'} ></HorizontalHeading>
            <Slider slidesPerView={3.2}>
            {KEY_CAPABILITIES?.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="p-6 bg-[transparent] relative " style={{ border: '1px solid #3e3e3e', borderRadius: '24px', borderOpacity: '0.3'}}>
                  <Image src={"/about/whiteStar.svg"} width={30} height={30} alt={"hioasdo"} className="mb-4" />
                  <div className="text-[28px] text-white h-[84px]">{item?.CardHeading}</div>
                  <p className="text-[16px] py-4 text-white h-[104px]">{item?.CardDesc}</p>
            
                </div>
              </SwiperSlide>
            ))}
          </Slider>
          </div>
        </div>

        {/* additional data flip card */}
        <div className={`bg-[white] z-10 py-10 px-10 rounded-3xl h-full w-full duration-200 left-0  absolute  ${iskeyModalActive ? '-translate-y-[95%]' : 'translate-y-full'}`} style={{backgroundImage: "linear-gradient(white 50%, #DCCFF6 100%)"}}>
          <div className="flex justify-between pb-20">
          <Image src={"/about/whiteStar.svg"} width={50} height={50} alt={""} style={{filter:'brightness(0)'}} className="" />
            <h1 onClick={() => handleKeyModal(false)}>close</h1>
            </div>
            {/* heading */}
            <div className="">
            <HorizontalHeading heading={keyModalData?.CardHeading} desc={keyModalData?.CardDesc} textColor={'text-neutral-white'} ></HorizontalHeading>
              </div>
              <div className="">
              <p dangerouslySetInnerHTML={{ __html: keyModalData?.additionalData }} />
                </div>
        </div>
      </div>
      {/* end key section */}

      {/* End--Section--UltimateChoice======================================================================== */}

      {/* Start--Industry-Spotlight-Section============================================================== */}
      <IndustrySpotlight cardData={INDUSTRY_SPOTLIGHT}  />
      {/* End--Industry-Spotlight-Section================================================================ */}

      {/* Start--Benefits-Section============================================================== */}
      <BenefitSliderSection
        ID={"BENEFIT"}
        sectionBGColor={"bg-secondary-900"}
        sectionHeading={"D365 Commerce Benefits"}
        sectionDesc={
          "Discover a scalable and secure commerce platform that empowers retailers to thrive in fast-paced digital landscape."
        }
        sectionTextColor={"text-neutral-white"}
        cardData={BENEFITS_CARDS_DATA}
        SectionHeadingMaxWidth={"100%"}
      />
      {/* End--Benefits-Section================================================================ */}








      {/* Start--Blogs-Section============================================================== */}
      <BlogSection
        ID={"blog"}
        blogImageUrl={blogImageUrl}
        Heading={"The Significance of Dynamics 365 Commerce in B2B Sales Evolution"}
        Desc={
          "In the realm of B2B digital sales, Dynamics 365 Commerce stands as a beacon of innovation. This platform plays a pivotal role in reshaping B2B sales strategies, enabling businesses to navigate the digital landscape effectively. "
        }
        Color={"text-neutral-white"}
      ></BlogSection>
      {/* End--Blogs-Section================================================================ */}

      {/* Start--Distinctive-Section============================================================== */}
      <DistinctiveSection
        DistinctiveData={DISTINCTIVE_DATA}
        ID={"Distinctive"}
        Title={"The Distinctive Edge"}
        Desc={
          "Maximize ROI and transform your commerce experience with our D365 Commerce expertise"
        }
      ></DistinctiveSection>
      {/* End--Distinctive-Section================================================================ */}


      {/* Start--Transform-Business-Form-Section============================================================== */}
      <TransformBusinessForm
        Title={"Transform your Business with us"}
        Desc={
          "Let us discuss how D365 Commerce can help you with rapid growth."
        }
      ></TransformBusinessForm>
      {/* End--Transform-Business-Form-Section================================================================ */}
    </>
  );
};

export default D365Commerce;
