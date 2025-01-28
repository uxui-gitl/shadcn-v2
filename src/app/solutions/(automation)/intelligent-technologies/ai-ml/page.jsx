'use client'
// components
import EntIntro from "@/components/EntIntro";
import OverviewSection from "@/sections/overview/OverviewSection";
import SectionHeading from '@/components/SectionHeading';
import DistinctiveSection from '@/sections/distinctive/DistinctiveSection';
import BlogSection from '@/sections/blog/BlogSection';
import TransformBusinessForm from '@/sections/transformBusinessFrom/TransformBusinessFromSection';
import PlatformSection from '@/sections/platform/PlatformSection';
import BenefitSliderSection from '@/sections/benefitSlider/BenefitSliderSection';
import SectionWrapperNew from "@/components/SectionWrapperNew";
import { SwiperSlide } from "swiper/react";
import Slider from "@/components/Slider";
import Image from "next/image";
import AIOffering from "@/sections/new/aiOffering/AIOffering";
import MLExperties from "@/sections/new/mlExperties/MLExperties";

const distinctiveData = [
  {
    _id: 1,
    desc: "Deep understanding of specific business domains for developing AI and ML solutions that truly meet your needs.",
    icon: "/ai-ml/distinctiveEdge/deepUnderstanding.svg",
  },
  {
    _id: 2,
    desc: "Agile approach that keeps projects on cutting edge.",
    icon: "/ai-ml/distinctiveEdge/agileApproach.svg",
  },
  {
    _id: 3,
    desc: "Fully signed Non-Disclosure Agreement (NDA) to protect sensitive information of customer.",
    icon: "/ai-ml/distinctiveEdge/fullySigned.svg",
  },
  {
    _id: 4,
    desc: "Exceed customer expectations and deliver AI and ML solutions in most effective way.",
    icon: "/ai-ml/distinctiveEdge/exceedCustomer.svg",
  },

]

const benifitsCardsData = [
  {
    id: '1',
    icon: "/ai-ml/benefits/processAnalyse.svg",
    cardDesc: 'Process and analyse vast volumes of data and offers round-the-clock assistance to customers'
  },
  {
    id: '2',
    icon: "/ai-ml/benefits/anticipateFuture.svg",
    cardDesc: 'Anticipate future outcomes based on historical data, making informed decisions'
  },
  {
    id: '3',
    icon: "/ai-ml/benefits/enablesEffortless.svg",
    cardDesc: 'Enables effortless communication and efficient information retrieval through Natural Language Processing'
  },
  {
    id: '4',
    icon: "/ai-ml/benefits/optimizeSupply.svg",
    cardDesc: 'Optimize supply chain management, predict maintenance need, and elevate quality control, resulting in higher productivity'
  },
]

const blogImageUrl = '/ai-ml/blogBg.webp';


const PlatFormImageList = [
  { id: 1, url: '/ai-ml/itPlatforms/MicrosoftAzureML.svg' },
  { id: 2, url: '/ai-ml/itPlatforms/OpenAiChatGPT.svg' },
  { id: 3, url: '/ai-ml/itPlatforms/GoogleGemini.svg' },
  { id: 4, url: '/ai-ml/itPlatforms/MetaLlama.svg' },
  { id: 5, url: '/ai-ml/itPlatforms/Replicate.svg' },
  { id: 6, url: '/ai-ml/itPlatforms/TensorFlow.svg' },

]

const page = () => {
  return (
    <>
      <EntIntro
        title="Innovate with AI & ML -Powered Business Solutions"
        desc="Revolutionise business operations, enhance productivity and save time with our Artificial Intelligence & Machine Learning offerings."
        cta="Let's Connect"
        video="/ai-ml/videos/pageBanner.mp4"
      />

      <OverviewSection Text={'Tap into our AI & ML capabilities to fine-tune business parameters, drive proactive decisions, optimize process and accelerate growth for our clients.'} />

     <AIOffering />

      <MLExperties />

      {/* Intelligent Technologies */}
      <SectionWrapperNew
        sectionHeading={"Intelligent Technologies Platforms"}
        sectionDesc={'Our proficiency with AI/ML platforms paves the way for business progress with innovation and efficiency.'}
        sectionTextColor="text-primary-900"
        sectionHeadingLayout="horizontal"
        setTop={false}
      >
        <Slider>
          {PlatFormImageList?.map((item, index) => (
            <SwiperSlide key={index} className="p-8">
              <Image src={item.url} width={320} height={150} alt="card-image" />
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
