'use client';
import EntIntro from "@/components/EntIntro";
import SectionNav from "@/components/SectionNav";
import OverviewSection from "@/sections/overview/OverviewSection";
import ServiceOfferingSection from "@/sections/serviceOffering/ServiceOfferingSection";
import CommonCardThreeSlider from '@/sections/commonCardThreeSlider/CommonCardThreeSlider';
import SectionWidthSlider from "@/sections/sectionWithSlider/SectionWithSlider";
import SectionWrapper from '@/components/SectionWrapper';
import SectionHeading from '@/components/SectionHeading';
import Slider from '@/components/Slider';
import { Swiper, SwiperSlide } from "swiper/react";
const Page = () => {

  const offeringCardData = [
    { id: '1', cardTitle: "Consultation Services", cardDesc: 'We conduct process and platform estimations, capture automation requirements, create business cases, process validations and make clear Standard Operating Procedures (SoPs), ensuring your RPA journey aligns perfectly with your business goals.', cardImageUrl: '/rpa/Offering01.png' },
    { id: '2', cardTitle: "Feasibility Check Services", cardDesc: 'Our expert team design RPA pilot and build Proof of Concepts (PoCs) taking your RPA vision into consideration.', cardImageUrl: '/rpa/Offering01.png' },
    { id: '3', cardTitle: "RPA Deployment", cardDesc: 'We install / configure automation scripts with precision followed by continuous enhancements, run end-to-end testing, manage QA(Quality assurance) processes and carefully document the code.', cardImageUrl: '/rpa/Offering01.png' },
    { id: '4', cardTitle: "RPA Managed Services", cardDesc: 'We maintain and monitor your RPA application and Bot for their excellent performance, offering ongoing support and driving continuous improvement.', cardImageUrl: '/rpa/Offering01.png' },
  ];

  const offeringLinkListData = [
    { id: 1, text: 'Inadequate Scalability and Availability', beforeIconUrl: 'true', isArrowIconVisiable: false },
    { id: 2, text: 'Unreliable Backup Storage', beforeIconUrl: 'true', isArrowIconVisiable: false },
    { id: 3, text: 'RPA Deployment', beforeIconUrl: 'true', isArrowIconVisiable: false },
    { id: 4, text: 'Weak Disaster Recovery and Redundancy', beforeIconUrl: 'true', isArrowIconVisiable: false },
  ]

  const serviceOfferingData = [
    {
      id: 1,
      cardBGColor: '#fff',
      cardHeading: 'End-to-End Implementation',
      cardDesc: 'Streamlining every phase of the implementation with the capability of successful and on-time delivery of Infor solution.',
      isArrow: true,
      cardTextColor: 'black',
      cardTopImageUrl: 'https://flowbite.com/docs/images/blog/image-1.jpg'
    },
    {

      id: 2,
      cardBGColor: '#fff',
      cardHeading: 'Managed Services',
      cardDesc: 'Managing every complex, time-consuming and resource-rigorous process and on -demand maintenance of Infor application.',
      isArrow: true,
      cardTextColor: 'black',
      cardTopImageUrl: 'https://flowbite.com/docs/images/blog/image-4.jpg'
    },
    {

      id: 3,
      cardBGColor: '#fff',
      cardHeading: 'Migrate to the Cloud',
      cardDesc: 'Ensuring a smooth and efficient migration process with minimum business disruptions',
      isArrow: true,
      cardTextColor: 'black',
      cardTopImageUrl: 'https://flowbite.com/docs/images/blog/image-7.jpg'
    },
    {

      id: 4,
      cardBGColor: '#E4E4E4',
      cardHeading: 'Strengthen Potential',
      cardDesc: 'Empower employees to focus on strategic tasks to deliver attentive experience to customers',
      isArrow: true,
      cardTextColor: 'black',
      cardTopImageUrl: 'https://flowbite.com/docs/images/blog/image-1.jpg'
    },
    {

      id: 5,
      cardBGImageUrl: '/rpa/ArtboardBg.png',
      cardBGColor: '#EFE9FB',
      cardHeading: 'Enhance Flexibility',
      cardDesc: 'Adapt to changing business needs without hiring and training new staff, saving time and expense',
      isArrow: true,
      cardTextColor: 'black',
      cardTopImageUrl: 'https://flowbite.com/docs/images/blog/image-2.jpg'
    },
    {


      id: 5,
      cardBGImageUrl: '/rpa/ArtboardBg.png',
      cardBGColor: '#EFE9FB',
      cardHeading: 'Reduce AHT (Average Handling Time)',
      cardDesc: 'Enhance customer service quality, minimize response time and improve operational efficiency',
      isArrow: false,
      cardTextColor: 'black',
      cardTopImageUrl: 'https://flowbite.com/docs/images/blog/image-3.jpg'
    },
  ]

  const ultimateChoiceData = [
    {
      id: 1,
      BGImageUrl: "",
      BGColor: "#fff",
      CardBGColor: "transparent",
      CardTextColor: '#000',
      CardTitle: "",
      CardIconUrl: "/upgradeCloud/icons/ico--target.svg",
      CardHeading: "Sample Heading",
      CardDesc:
        "Scalability according to evolving business needs.Scalability according to evolving business needs.",
      isArrow: "",
      link: [],
    },

    {
      id: 2,
      BGImageUrl: "",
      BGColor: "#fff",
      CardBGColor: "transparent",
      CardTextColor: '#000',
      CardTitle: "",
      CardIconUrl: "/upgradeCloud/icons/ico--target.svg",
      CardHeading: "Sample Heading",
      CardDesc:
        "Faster development cycles with pay-as-you-go model offering cost effectiveness and business agility",
      isArrow: "",
      link: [],
    },
    {
      id: 3,
      BGImageUrl: "",
      BGColor: "#fff",
      CardBGColor: "transparent",
      CardTextColor: '#000',
      CardTitle: "",
      CardIconUrl: "/upgradeCloud/icons/ico--target.svg",
      CardHeading: "Sample Heading",
      CardDesc:
        "Drive business agility and improved ROI with automation",
      isArrow: "",
      link: [],
    },
    {
      id: 4,
      BGImageUrl: "",
      BGColor: "#fff",
      CardBGColor: "transparent",
      CardTextColor: '#000',
      CardTitle: "",
      CardIconUrl: "/upgradeCloud/icons/ico--target.svg",
      CardHeading: "Sample Heading",
      CardDesc:
        "Highest levels of security and privacy, ensuring data is safeguarded",
      isArrow: "",
      link: [],
    },
  ];

  return (
    <>
      <EntIntro
        title="Embrace the Digital Future of Business Efficiency with Industry Specialized Infor Application"
        desc=""
        cta="Let's Connect"
        width="60%"
        video="https://gitl-usa.s3.us-west-1.amazonaws.com/banner1.mp4"
      />
      {/* Section Nav */}
      <>
        <SectionNav
          arr={[
            {
              _id: 1,
              title: "Infor Expertise",
              link: "#InforExpertise",
            },
            {
              _id: 2,
              title: "Services",
              link: "#Services",
            },
            {
              _id: 3,
              title: "Add-Ons",
              link: "#AddOns",
            },
            {
              _id: 4,
              title: "Industry Spotlight",
              link: "#IndustrySpotlight",
            },

            {
              _id: 5,
              title: "Why Us",
              link: "#WhyUs",
            },
          ]}
        />
      </>

      {/* Overview  */}
      <OverviewSection Text={`Globally recognized Infor is a robust ERP solution that delivers improved business strength and operational responsiveness. Committed to offering core industry application `} />

      <SectionWrapper
        BGColor="#5F22D9"
      >
        <div className="container mx-auto">
          <div className="grid grid-cols-2 gap-20">
            <div className="">
              <SectionHeading
                Heading={'Globally Trusted Core Infor Expertise'}
                Desc={`Equipping your organization to thrive in the digital era, we deliver high-end solutions, Regardless of whether you're starting your transformation journey or .`}
                Color={'white'}
              ></SectionHeading>

              <div>
                <div className="text-[28px] font-semibold text-white">
                  Infor CloudSuite
                </div>

                <div className="my-5">
                  {offeringLinkListData.map((item) => (
                    <div key={item?.id} class="flex items-center justify-center py-6 text-[24px] font-medium text-white" style={{ borderBottom: '2px solid white', cusror: 'pointer' }}>
                      {item?.beforeIconUrl && <svg xmlns="http://www.w3.org/2000/svg" style={{ marginRight: '20px' }} width="33" height="33" viewBox="0 0 32 33" fill="none">
                        <path d="M21.3331 11.1563V7.15625L25.3331 3.15625L26.6664 5.82292L29.3331 7.15625L25.3331 11.1563H21.3331ZM21.3331 11.1563L15.9998 16.4895M29.3332 16.4896C29.3332 23.8534 23.3636 29.8229 15.9998 29.8229C8.63604 29.8229 2.6665 23.8534 2.6665 16.4896C2.6665 9.12579 8.63604 3.15625 15.9998 3.15625M22.6665 16.4896C22.6665 20.1715 19.6817 23.1563 15.9998 23.1563C12.3179 23.1563 9.33317 20.1715 9.33317 16.4896C9.33317 12.8077 12.3179 9.82292 15.9998 9.82292" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>}
                      <span class="w-full text-[20px] font-normal">{item.text}</span>
                      {item?.isArrowIconVisiable && <svg class="w-[24px] h-[24px] ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                      </svg>}
                    </div>
                  ))}
                </div>

              </div>
            </div>
            <div className="flex items-center" style={{ justifyContent: 'center' }}>
              <div className="" style={{ maxHeight: '600px', overflow: 'hidden' }}>
                <img src="https://fastly.picsum.photos/id/1/5000/3333.jpg?hmac=Asv2DU3rA_5D1xSe22xZK47WEAN0wjWeFOhzd13ujW4"></img>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
      <div className="InforSliderWrapper">
        <div className="flex mx-auto md:py-36 px-10">
          <div className="">
            <img src="/icons/inforlogo.svg"></img>
          </div>
          <div className="">
            <Slider
              slidesPerView={4}
              sliderAutoplay={true}
              sliderLoop={true}
              cardData={[
                {id:1,text:'aksdhg'},
                {id:2,text:'aksdhg'},
                {id:3,text:'aksdhg'}

              ]}
            >
           
<a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
<p class="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
</a>


            </Slider>
          </div>
        </div>
      </div>


      <CommonCardThreeSlider
        ID={''}
        sectionImageUrl={''}
        sectionBGColor={'#1D162B'}
        sectionHeading={'Infor Service Offerings'}
        sectionDesc={"Our commitment to your project's success drives our ownership and determination to go above and beyond."}
        sectionTextColor={'#fff'}
        sectionHeaderMaxWidth={'40%'}
        cardData={serviceOfferingData}
      >

      </CommonCardThreeSlider>


      <SectionWidthSlider
        ID={"ultimateChoiceData"}
        sectionHeading={"Why Cloud is your Ultimate Choice?"}
        sectionDesc={
          "With a fault-tolerant architecture and a global network of data centers, cloud empowers you to expand your infrastructure and leverage advanced analytics."
        }
        sectionTextColor=""
        cardData={ultimateChoiceData}
        sectionBGColor="#EFE9FB"
        setHeadingLayout="horizontal"

      />

    </>
  );
};

export default Page;
