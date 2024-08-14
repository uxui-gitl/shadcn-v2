"use client";
import EntIntro from "@/components/EntIntro";

import Image from "next/image";
import Icon from "@mdi/react";
import Link from "next/link";
import { mdiArrowRight } from "@mdi/js";
import SectionNav from "@/components/SectionNav";
/**
 * Sandeep Rana
 * Imported logos
 */
import Benefits from "@/components/Benefits";
// components
import OverviewSection from "@/sections/overview/OverviewSection";
import SectionHeading from '@/components/SectionHeading';
import SectionWrapper from '@/components/SectionWrapper';
import DistinctiveSection from '@/sections/Distinctive/DistinctiveSection';
import BlogSection from '@/sections/blog/BlogSection';
import TransformBusinessForm from '@/sections/transformBusinessFrom/TransformBusinessFromSection';
import PlatformSection from '@/sections/platform/PlatformSection';
import SectionWidthSlider from '@/sections/sectionWithSlider/SectionWithSlider';


const AIOfferingsData = [
  {
    id: 1,
    BGImageUrl: '',
    BGColor: '#fff',
    cardTitle: "",
    cardIconUrl: '',
    cardHeading: 'Computer Vision',
    cardDesc: 'We specialize in custom video and image analysis tool leveraging advanced',
    isArrow: 'true',
    links: [
      {
        title: "Data Labelling and Real-time",
        url: "/",
      },
      {
        title: "Security Solution",
        url: "/",
      },
      {
        title: "Equipment Monitoring",
        url: "/",
      },
    ],
  },

  {
    id: 2,
    BGImageUrl: '',
    BGColor: '#fff',
    cardTitle: "",
    cardIconUrl: '',
    cardHeading: 'Seech & Language',
    cardDesc: 'We specialize in custom video and image analysis tool leveraging advanced',
    isArrow: 'true'
  },
  {
    id: 3,
    BGImageUrl: '',
    BGColor: '#fff',
    cardTitle: "",
    cardIconUrl: '',
    cardHeading: 'Document Understanding',
    cardDesc: 'We specialize in custom video and image analysis tool leveraging advanced',
    isArrow: 'true',
  },
  {
    id: 4,
    BGImageUrl: '',
    BGColor: '#fff',
    cardTitle: "",
    cardIconUrl: '',
    cardHeading: 'Computer Vision',
    cardDesc: 'We specialize in custom video and image analysis tool leveraging advanced',
    isArrow: 'true'
  }
]

const BenefitsData = [
  {
    _id: 1,
    icon: "benefits-ai-ml/process-analyse",
    cardDesc:
      "A high degree of accuracy and consistency in business operations.",
  },
  {
    _id: 2,
    icon: "benefits-ai-ml/anticipate-future",
    cardDesc:
      "Informed decision-making by extracting valuable insights and identifying patterns, correlation, and trends. ",
  },
  {
    _id: 3,
    icon: "benefits-ai-ml/effortless-communicate",
    cardDesc:
      "Real-time problem-solving capabilities enable minimizing disruptions and ensuring uninterrupted business operations. ",
  },
  {
    _id: 4,
    icon: "benefits-ai-ml/optimise-supply-chain",
    cardDesc:
      "Optimize supply chain management, predict maintenance need, and elevate quality control, resulting in higher productivity ",
  },
];

const MLData = [
  {
    _id: 1,
    imgURL: "/assest/ai-ml/Expertise_Deep-Learning.jpg",
    title: "Deep Learning",
    subTitle:
      "Our deep learning expertise builds solutions that automate complex tasks helping in data-driven decision-making, especially when it comes to forecasting your business's future.",
    ctaURL: "",
  },
  {
    _id: 2,
    imgURL: "/assest/ai-ml/Expertise_Supervised-Learning.jpg",
    title: "Supervised Learning",
    subTitle:
      "We deliver customer sentiment analysis, image recognition and predictive maintenance services that help you make informed decisions and create happier customers.",
    ctaURL: "",
  },
  {
    _id: 3,
    imgURL: "/assest/ai-ml/Expertise_Unsupervised-Learning.jpg",
    title: "Unsupervised Learning",
    subTitle:
      "Our unsupervised learning services reveal hidden patterns for business sustainability through data exploration without constraints, helping in customer segmentation, anomaly detection and more.",
    ctaURL: "",
  },
  {
    _id: 4,
    imgURL: "/assest/ai-ml/Expertise_Reinforcement-Learning.jpg",
    title: "Reinforcement Learning",
    subTitle:
      "Our reinforcement learning expertise is like a guiding hand for applications such as autonomous systems and resource optimisation.",
    ctaURL: "",
  },
];

const distinctiveData = [
  {
    _id: 1,
    desc: "Deep understanding of specific business domains for developing AI and ML solutions that truly meet your needs.",
    icon: "",
  },
  {
    _id: 2,
    desc: "Agile approach that keeps projects on cutting edge.",
    icon: "",
  },
  {
    _id: 3,
    desc: "Fully signed Non-Disclosure Agreement (NDA) to protect your sensitive information.",
    icon: "",
  },
  {
    _id: 4,
    desc: "Exceed customer expectations and deliver AI and ML solutions in most effective way.",
    icon: "",
  },
  {
    _id: 5,
    desc: "Extensive experience in understanding industry-specific challenges and opportunities. ",
    icon: "",
  }
]

const yourImageUrl = '/ai-ml/AI-bgimage.jpg';
const blogImageUrl = '/ai-ml/blog-bg.png';


const PlatFormImageList = [
  { id: 1, url: '/ai-ml/ms-azure.png' },
  { id: 2, url: '/ai-ml/google-ai-logo.png' },
  { id: 3, url: '/ai-ml/tensorflow-logo.png' },

]

const page = () => {
  return (
    <>
      <EntIntro
        title="Leverage Optimised BI with AI & ML"
        desc="Revolutionize your business operations, save time and boost productivity
        with our cutting-edge offerings."
        cta="Let's Connect"
        width="60%"
        video="https://gitl-usa.s3.us-west-1.amazonaws.com/banner1.mp4"
      />
      <>
        <SectionNav
          arr={[
            // AI Offerings
            // ML Expertise
            // Platforms
            // Benefits
            // Why Us

            {
              _id: 1,
              title: "AI Offerings",
              link: "#AIOfferings",
            },
            {
              _id: 2,
              title: "ML Expertise",
              link: "#MLExpertise",
            },
            {
              _id: 3,
              title: "Platforms",
              link: "#Platforms",
            },
            {
              _id: 4,
              title: "Benefits",
              link: "#Benefits",
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

      <OverviewSection Text={'By employing a pragmatic approach and tapping into the capabilities of AI and ML, we meticulously fine-tune business parameters, ensuring a notable enhancement in your overall business proficiency.'} />

      <SectionWidthSlider
        ID={'AIOfferings'}
        SectionImageUrl={yourImageUrl}
        Heading={'Our AI Offerings'}
        Desc={'We specialize in developing algorithms to make your operations smarter, faster and more reliable.'}
        Color={'white'}
        MaxWidth={'40%'}
        CardDataList={AIOfferingsData}
      >

        <ul className="my-6 md:my-8">
            <li
              className=" border-b-2 border-[#dbdbdb3d] py-2 md:py-4 "
            >
              <Link
                // href={list.url}
                className="text-[#101828] text-[16px] md:text-[20px] font-normal leading-[28px] w-fit  flex transition-all hover:opacity-75  "
              >
                {/* {list.title} */}skdjgfkj
              </Link>
            </li>
        </ul>
      </SectionWidthSlider>

      {/* <SectionWrapper ID="AIOfferings" style={{
        backgroundImage: `url(${yourImageUrl})`, backgroundSize: 'cover', backgroundColor: 'rgba(0, 0, 0, 0.4)',
        backgroundBlendMode: "multiply"
      }}>

        <SectionHeading
          Heading={'Our AI Offerings'}
          Desc={'We specialize in developing algorithms to make your operations smarter, faster and more reliable.'}
          Color={'white'}
          MaxWidth={'40%'}
        >
        </SectionHeading>

        <div className="text-left max-w-screen-xl md:max-w-screen-2xl pb-10 mt-10 md:mt-20">
          <Swiper
            slidesPerView={'auto'}
            spaceBetween={30}
            pagination={false}
            modules={[Pagination]}
            className="mySwiper"
          >
            {AIOfferings.map((item, index) => (

              <>
                <SwiperSlide
                  key={item._id}
                  className="w-[380px] max-w-[380px] relative group"
                >
                  <div className="bg-[#fff] p-5 rounded-3xl" key={item._id}>
                    <div className="p-4 h-full flex flex-col justify-between">
                      <div>
                        <p className="text-[#101828] font-medium text-[22px] sm:text-[32px] md:text-[42px] leading-7 md:leading-[50px]">
                          {item.title}
                        </p>
                        <p className="text-[#101828] text-[16px] md:text-[14px] font-normal my-2 md:my-4 leading-[24px]">
                          {item.desc}
                        </p>
                      </div>
                      <div>
                        <ul className="my-6 md:my-8">
                          {item.links.map((list, index) => (
                            <li
                              key={index}
                              className=" border-b-2 border-[#dbdbdb3d] py-2 md:py-4 "
                            >
                              <Link
                                href={list.url}
                                className="text-[#101828] text-[16px] md:text-[20px] font-normal leading-[28px] w-fit  flex transition-all hover:opacity-75  "
                              >
                                {list.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                        <Link
                          href={item.ctaUrl}
                          className="text-[#0745D3] hidden text-[14px] font-medium leading-[28px] w-fit flex transition-all hover:opacity-75  "
                        >
                          {item.cta}{" "}
                          <Icon
                            path={mdiArrowRight}
                            style={{ marginLeft: "0.5em" }}
                            size={1}
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </>
            ))}
          </Swiper>
        </div>

      </SectionWrapper> */}
      {/* Our Ai Offerings */}

      {/* ML Expertise */}
      <>
        {/* marginTop: '-240px' */}
        <SectionWrapper ID={'MLExpertise'} BGColor={'#5F22D9'} style={{ paddingTop: '240px' }}>
          <div className="flex flex-col md:flex-row gap-x-11">
            <div className="text-left mb-5 pb-0 md:max-w-[489px] flex-1">
              <SectionHeading
                Heading={'Expertise Machine Learning'}
                Desc={'We specialize in developing algorithms to make your operations smarter, faster and more reliable.'}
                Color={'white'}
                MaxWidth="80%"
              >
              </SectionHeading>
            </div>

            <div className="text-left max-w-screen-xl md:max-w-screen-xl mb-5 mt-5 md:mt-20 flex flex-col md:flex-row flex-1 flex-wrap gap-y-7">
              {MLData.map((item, index) => (
                <div className="flex-1 min-w-[50%]" key={index}>
                  <div className="p-4 pb-0">
                    <div className="mb-6" style={{ width: '75px', height: '6px', backgroundColor: '#CDBAF3' }}></div>
                    <p className="text-[#fff] font-semibold text-[28px] leading-[36px] mb-8">
                      {item.title}
                    </p>
                    <p className="text-[#fff] text-[16px] font-normal my-4 leading-[24px]">
                      {item.subTitle}
                    </p>
                    <Link
                      href={item.ctaURL}
                      className="text-[#0745D3] hidden text-[14px] font-medium leading-[22px] w-fit  flex transition-all hover:opacity-75  "
                    >
                      Know More{" "}
                      <Icon
                        path={mdiArrowRight}
                        style={{ marginLeft: "0.5em" }}
                        size={1}
                      />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </SectionWrapper>
      </>

      {/* Intelligent Technologies */}
      <>
        <PlatformSection ID={'Intelligent'} Heading={'Intelligent Technologies Platforms'} Desc={' Our proficiency with AI/ML platforms paves the way for progressive business results with the intersection of innovation and efficiency.'} PlatFormImageList={PlatFormImageList}></PlatformSection>
      </>

      {/* Benefits Vertical Slider */}
      <SectionWrapper id="Benefits" BGColor="#1D162B">
        <Benefits
          ribbon="Benefits of AI / ML"
          ribbonTxtWhite="true"
          title=""
          desc="Artificial Intelligence (AI) and Machine Learning (ML) are driving transformative changes, offering multiple benefits that redefine the way you do business."
          arr={BenefitsData}
        ></Benefits>
      </SectionWrapper>
      {/* blog section  */}

      <BlogSection ID={'blog'} blogImageUrl={blogImageUrl} Heading={'Unveilling Hyper automation  for supply chain efficiency'}
        Desc={'IIoT offers a multitude of benefits that enable businesses to gain competitive edge through innovation and succeed in digital era.'}
        Color={'white'}
        MaxWidth="70%"
      ></BlogSection>

      {/* Distinctive section*/}
      <DistinctiveSection DistinctiveData={distinctiveData}
        ID={'Distinctive'} Title={'The Distinctive Edge'} Desc={'Trust Godrej Infotech to leverage Intelligent technologies and lead business into competitive digital landscape.'}
      >
      </DistinctiveSection>

      {/* transform business with us section */}
      <TransformBusinessForm Title={'Transform your Business with us'} Desc={"Let us discuss how intelligent technologies can help you with rapid growth."}>
      </TransformBusinessForm>

    </>
  );
};

export default page;
