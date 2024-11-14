'use client'
import Icon from "@mdi/react";
import Link from "next/link";
// components
import EntIntro from "@/components/EntIntro";
import { mdiArrowRight } from "@mdi/js";
import SectionNav from "@/components/SectionNav";
import OverviewSection from "@/sections/overview/OverviewSection";
import SectionHeading from '@/components/SectionHeading';
import SectionWrapper from '@/components/SectionWrapper';
import DistinctiveSection from '@/sections/distinctive/DistinctiveSection';
import BlogSection from '@/sections/blog/BlogSection';
import TransformBusinessForm from '@/sections/transformBusinessFrom/TransformBusinessFromSection';
import PlatformSection from '@/sections/platform/PlatformSection';
import BenefitSliderSection from '@/sections/benefitSlider/BenefitSliderSection';
import SectionWrapperNew from "@/components/SectionWrapperNew";
import { SwiperSlide } from "swiper/react";
import Slider from "@/components/Slider";
import CommonCard from "@/components/CommonCard";
import Image from "next/image";




const AIOfferingsData = [
  {
    id: 1,
    CardBGImageUrl: '',
    CardBGColor:'#FFF',
    CardTextColor:'#000',
    CardBGImageUrlSize:"",
    CardTitle: "",
    CardIconUrl: '',
    CardHeading: 'Computer <br/> Vision',
    CardDesc: 'Custom video/image analysis tools leveraging OpenCV for optimized computer vision algorithms',
    isArrow: false,
    DownImageUrl : "",
    CardDownImageMinHeight:"",
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
        title: "Real time Anomaly / Distortion Detection ",
        url: "/",
      },
    ],
  },

  {
    id: 2,
    CardBGImageUrl: '',
    CardBGColor:'#FFF',
    CardTextColor:'#000',
    CardTitle: "",
    CardIconUrl: '',
    CardHeading: 'Speech & Language',
    CardDesc: 'Speech & Language AI helps businesses to elevate customer experiences and stay competitive',
    isArrow: false,
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
    CardBGImageUrl: '',
    CardBGColor:'#FFF',
    CardTextColor:'#000',
    CardTitle: "",
    CardIconUrl: '',
    CardHeading: 'Intelligent Scanning',
    CardDesc: 'AI-driven data capture from diverse documents, enabling error-free extraction of unstructured data',
    isArrow: false,
    arrowColor: '#000',
    link: [
      {
        title: "Intelligent Optical Character Recognition (OCR)",
        url: "/",
      },
      {
        title: "Document data Processing",
        url: "/",
      },
      
    ],
  },
  {
    id: 4,
    CardBGImageUrl: '',
    CardBGColor:'#FFF',
    CardTextColor:'#000',
    CardTitle: "",
    CardIconUrl: '',
    CardHeading: 'Conversational<br/>AI',
    CardDesc: 'Human-centric data solutions for customer-centric decision-making and enhanced engagement',
    isArrow: false,
    arrowColor: '#000',
    link: [
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
    desc: "Fully signed Non-Disclosure Agreement (NDA) to protect sensitive information of customer.",
    icon: "",
  },
  {
    _id: 4,
    desc: "Exceed customer expectations and deliver AI and ML solutions in most effective way.",
    icon: "",
  },

]

const benifitsCardsData = [
  { id: '1',
    icon: "benefisIntelligentTechnologies/AutomationRepetitiveTasks",
    cardDesc: 'Process and analyse vast volumes of data and offers round-the-clock assistance to customers' },
  { id: '2',
    icon: "benefisIntelligentTechnologies/AutomationRepetitiveTasks",
     cardDesc: 'Anticipate future outcomes based on historical data, making informed decisions' },
  { id: '3', icon: "benefisIntelligentTechnologies/AutomationRepetitiveTasks",
     cardDesc: 'Enables effortless communication and efficient information retrieval through Natural Language Processing' },
  { id: '4', icon: "benefisIntelligentTechnologies/AutomationRepetitiveTasks",
     cardDesc: 'Optimize supply chain management, predict maintenance need, and elevate quality control, resulting in higher productivity' },
]

const imageUrl = '/ai-ml/AI-bgimage.jpg';
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

      {/* Overview  */}
      <OverviewSection Text={'Tap into our AI & ML capabilities to fine-tune business parameters, drive proactive decisions, optimize process and accelerate growth for our clients.'} />
      {/* Our Ai Offerings */}

      <SectionWrapperNew
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${imageUrl})`,
          backgroundSize: "cover",
          backgroundAttachment: "fixed", // This is key for the parallax effect
          backgroundPosition: "center",       
        }}
        sectionHeading={"Artificial Intelligence Offerings"}
        sectionDesc={'Equipping businesses with actionable intelligence to redefine its potential and enable informed decision-making.'}
        sectionTextColor="text-neutral-white"
        sectionHeadingLayout="left"
      >
        <Slider>
          {AIOfferingsData?.map((item, index) => (
            <SwiperSlide key={index}>
              <CommonCard Item={item}></CommonCard>
            </SwiperSlide>
          ))}
        </Slider>
      </SectionWrapperNew>

      {/* ML Expertise */}
      <>
        <SectionWrapper ID={'MLExpertise'} BGColor={'bg-primary-400'}>
          <div className="container py-32 max-auto flex flex-col md:flex-row gap-x-11">
            <div className="text-left  flex-1">
              <SectionHeading
                Heading={'Machine Learning Expertise'}
                Desc={'We specialize in developing predictive models to forecast market shifts and identify untapped opportunities.'}
                Color={'white'}
                headingContainerWidth={'w-full'}
              >
              </SectionHeading>
            </div>

            <div className="text-left max-w-screen-xl md:max-w-screen-xl mb-5 mt-5 md:mt-20 flex flex-col md:flex-row flex-1 flex-wrap gap-y-7">
              {MLData.map((item, index) => (
                <div className="flex-1 min-w-[50%]" key={index}>
                  <div className="p-4 pb-0">
                    <div className="w-[4rem] h-[0.5rem] mb-2 bg-primary-200"></div>
                    <p className="text-neutral-white font-semibold text-heading-02 text-leading-02 mb-3">
                      {item.title}
                    </p>
                    <p className=" text-neutral-white text-body-01 leading-body-01 font-normal ">
                      {item.subTitle}
                    </p>
                    <Link
                      href={item.ctaURL}
                      className="text-primary-400 invisible text-label-01 font-medium leading-label-01 w-fit  flex transition-all hover:opacity-75  "
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
      <SectionWrapperNew
        sectionHeading={"Intelligent Technologies Platforms"}
        sectionDesc={'Our proficiency with AI/ML platforms paves the way for business progress with innovation and efficiency.'}
        sectionTextColor="text-primary-900"
        sectionHeadingLayout="horizontal"
      >
        <Slider>
          {PlatFormImageList?.map((item, index) => (
            <SwiperSlide key={index} className="p-8">
                <Image src={item.url} width={350} height={150}  alt="card-image"/>
            </SwiperSlide>
          ))}
        </Slider>
      </SectionWrapperNew> 

      {/* Benefits Vertical Slider */}
      <BenefitSliderSection
        ID={'AIOfferings'}
        sectionBGColor={'bg-primary-900'}
        sectionHeading={'Benefits'}
        sectionDesc={'AI and ML are driving transformative changes, offering multiple benefits that redefine business.'}
        sectionTextColor="text-neutral-white"
        cardData={benifitsCardsData}
      ></BenefitSliderSection>
      {/* blog section  */}

      <BlogSection ID={'blog'} blogImageUrl={blogImageUrl} Heading={'Hyper-Automation for Supply Chain Efficiency'}
        Desc={'Hyper-automation, specifically in the context of supply chain management, marks a significant milestone in the evolution of industry practices.'}
        Color={'text-neutral-white'}
        readMoreUrl=""
      ></BlogSection>

      {/* Distinctive section*/}
      <DistinctiveSection DistinctiveData={distinctiveData}
        ID={'Distinctive'} Title={'The Distinctive Edge'} Desc={'Our team applies in-depth AI/ML expertise to help businesses deploy machine learning models and algorithms, perform advanced data analytics, and achieve breakthrough results.'}
      >
      </DistinctiveSection>

      {/* transform business with us section */}
      <TransformBusinessForm Title={'Transform with Us'} Desc={"Let’s discuss how our expertise can help you with rapid growth."}>
      </TransformBusinessForm>

    </>
  );
};

export default page;
