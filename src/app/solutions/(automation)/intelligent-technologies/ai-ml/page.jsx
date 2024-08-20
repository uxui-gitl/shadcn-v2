'use client'
import Icon from "@mdi/react";
import Link from "next/link";
// components
import EntIntro from "@/components/EntIntro";
import { mdiArrowRight } from "@mdi/js";
import SectionNav from "@/components/SectionNav";
import Benefits from "@/components/Benefits";
import OverviewSection from "@/sections/overview/OverviewSection";
import SectionHeading from '@/components/SectionHeading';
import SectionWrapper from '@/components/SectionWrapper';
import DistinctiveSection from '@/sections/distinctive/DistinctiveSection';
import BlogSection from '@/sections/blog/BlogSection';
import TransformBusinessForm from '@/sections/transformBusinessFrom/TransformBusinessFromSection';
import PlatformSection from '@/sections/platform/PlatformSection';
import SectionWidthSlider from '@/sections/sectionWithSlider/SectionWithSlider';
import BenefitSliderSection from '@/sections/benefitSlider/BenefitSliderSection';

const AIOfferingsData = [
  {
    id: 1,
    BGImageUrl: '',
    BGColor: '#fff',
    CardBGColor:'#FFF',
    CardColor:'#000',
    cardTitle: "",
    cardIconUrl: '',
    cardHeading: 'Computer <br/> Vision',
    cardDesc: 'Custom video/image analysis tools leveraging OpenCV for optimized computer vision algorithms',
    isArrow: 'true',
    arrowColor: '#000',
    link: [
      {
        title: "Data Labelling and Real-time Object Detection",
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
    CardBGColor:'#FFF',
    CardColor:'#000',
    cardTitle: "",
    cardIconUrl: '',
    cardHeading: 'Speech & Language',
    cardDesc: 'Speech & Language AI helps businesses to elevate customer experiences and stay competitive',
    isArrow: 'true',
    arrowColor: '#000',
    link: [
      {
        title: "Transcription Services",
        url: "/",
      },
      {
        title: "Speech Recognition",
        url: "/",
      },
      {
        title: "Language Translation",
        url: "/",
      },
    ],
  },
  {
    id: 3,
    BGImageUrl: '',
    BGColor: '#fff',
    CardBGColor:'#FFF',
    CardColor:'#000',
    cardTitle: "",
    cardIconUrl: '',
    cardHeading: 'Document Understanding',
    cardDesc: 'AI-driven data capture from diverse documents, enabling error-free extraction of unstructured data',
    isArrow: 'true',
    arrowColor: '#000',
    link: [
      {
        title: "Optical Character Recognition (OCR)",
        url: "/",
      },
      {
        title: "Text Extraction",
        url: "/",
      },
      {
        title: "Financial Processing",
        url: "/",
      },
    ],
  },
  {
    id: 4,
    BGImageUrl: '',
    BGColor: '#fff',
    CardBGColor:'#FFF',
    CardColor:'#000',
    cardTitle: "",
    cardIconUrl: '',
    cardHeading: 'Conversational<br/>AI',
    cardDesc: 'Ensuring a more human-centric engagement with data, we provide solutions that facilitate customer-centric decision-making. ',
    isArrow: 'true',
    arrowColor: '#000',
    link: [
      {
        title: "Document Processing",
        url: "/",
      },
      {
        title: "Sentiment Analysis",
        url: "/",
      },
      {
        title: "Chatbots and Virtual Assistants",
        url: "/",
      },
    ],
  },
]

const MLData = [
  {
    _id: 1,
    imgURL: "/assest/ai-ml/Expertise_Deep-Learning.jpg",
    title: "Deep Learning",
    subTitle:
      "Our deep learning expertise builds solutions that automate complex tasks, helping in data-driven decision-making.",
    ctaURL: "",
  },
  {
    _id: 2,
    imgURL: "/assest/ai-ml/Expertise_Supervised-Learning.jpg",
    title: "Supervised Learning",
    subTitle:
      "We deliver customer sentiment analysis, image recognition and predictive maintenance services for informed business decisions and happy customers.",
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
      "Reinforcement learning expertise functions as a guiding support for applications such as autonomous systems and resource optimisation.",
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

const benifitsCardsData = [
  { id: '1', text: 'Process and analyse vast volumes of data and offers round-the-clock assistance to customers' },
  { id: '2', text: 'Anticipate future outcomes based on historical data, making informed decisions' },
  { id: '3', text: 'Enables effortless communication and efficient information retrieval through Natural Language Processing' },
  { id: '4', text: 'Optimize supply chain management, predict maintenance need, and elevate quality control, resulting in higher productivity' },
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
        title="Innovate with AI & ML -Powered Business Solutions"
        desc="Revolutionise business operations, enhance productivity and save time with our Artificial Intelligence & Machine Learning offerings."
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
      <OverviewSection Text={'Tap into our AI & ML capabilities to fine-tune business parameters, drive proactive decisions, optimize process and accelerate growth for our clients.'} />

      {/* Our Ai Offerings */}
      <SectionWidthSlider
        ID={'AIOfferings'}
        SectionImageUrl={yourImageUrl}
        Heading={'Artificial Intelligence Offerings'}
        Desc={'Equipping businesses with actionable intelligence to redefine its potential and enable informed decision-making.'}
        Color={'white'}
        CardDataList={AIOfferingsData}
        pageID="ai-ml"
      >
      </SectionWidthSlider>

      {/* ML Expertise */}
      <>
        <SectionWrapper ID={'MLExpertise'} BGColor={'#5F22D9'} style={{ marginTop: '-240px', paddingTop: '240px' }}>
          <div className="flex flex-col md:flex-row gap-x-11">
            <div className="text-left mb-5 pb-0 md:max-w-[489px] flex-1">
              <SectionHeading
                Heading={'Machine Learning Expertise'}
                Desc={'We specialize in developing predictive models to forecast market shifts and identify untapped opportunities.'}
                Color={'white'}
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
                      className="text-[#0745D3] invisiable text-[14px] font-medium leading-[22px] w-fit  flex transition-all hover:opacity-75  "
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
        <PlatformSection ID={'Intelligent'} Heading={'Intelligent Technologies Platforms'} Desc={'Our proficiency with AI/ML platforms paves the way for business progress with innovation and efficiency.'} PlatFormImageList={PlatFormImageList}></PlatformSection>
      </>

      {/* Benefits Vertical Slider */}
      <BenefitSliderSection
        ID={'AIOfferings'}
        BGColor={'#1D162B'}
        Heading={'Benefits'}
        Desc={'AI and ML are driving transformative changes, offering multiple benefits that redefine business.'}
        Color={'white'}
        CardDataList={benifitsCardsData}
      ></BenefitSliderSection>
      {/* blog section  */}

      <BlogSection ID={'blog'} blogImageUrl={blogImageUrl} Heading={'Unveiling Hyper-automation for Supply Chain Efficiency'}
        Desc={'Hyper-automation, specifically in the context of supply chain management, marks a significant milestone in the evolution of industry practices. It represents the convergence of cutting-edge technologies, reshaping how businesses manage their supply chains. In 2024, the prominence of hyper-automation has soared, transforming supply chain dynamics. This article aims to explore the essence of hyper-automation, its benefits in supply chain management, and various examples illustrating its application. '}
        Color={'white'}
        MaxWidth="70%"
      ></BlogSection>

      {/* Distinctive section*/}
      <DistinctiveSection DistinctiveData={distinctiveData}
        ID={'Distinctive'} Title={'The Distinctive Edge'} Desc={'Our team applies in-depth AI/ML expertise to help businesses deploy machine learning models and algorithms, perform advanced data analytics, and achieve breakthrough results.'}
      >
      </DistinctiveSection>

      {/* transform business with us section */}
      <TransformBusinessForm Title={'Transform your Business with us'} Desc={"Let us discuss how intelligent technologies can help you with rapid growth."}>
      </TransformBusinessForm>

    </>
  );
};

export default page;
