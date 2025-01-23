"use client";
import EntIntro from "@/components/EntIntro";
import OverviewSection from "@/sections/overview/OverviewSection";
import AdvanceSolutionSection from '@/sections/new/advanceSolution/AdvanceSolutionSection';
import CommonCardOneSlider from '@/sections/commonCardOneSlider/CommonCardOneSlider';
import BenefitSliderSection from '@/sections/benefitSlider/BenefitSliderSection';
import BlogSection from "@/sections/blog/BlogSection";
import DistinctiveSection from "@/sections/distinctive/DistinctiveSection";
import TransformBusinessForm from "@/sections/transformBusinessFrom/TransformBusinessFromSection";



const page = () => {
  const blogImageUrl = '/intelligent-tech/Digitalized.webp';

  const distinctiveData = [
    {
      _id: 1,
      desc: "Enables automation across diverse use cases",
      icon: "/intelligent-tech/distinctiveEdge/enablesAutomation.svg",
    },
    {
      _id: 2,
      desc: "Help businesses achieve high productivity",
      icon: "/intelligent-tech/distinctiveEdge/helpBusinesses.svg",
    },
    {
      _id: 3,
      desc: "Substantial improvements in return on investment (ROI)",
      icon: "/intelligent-tech/distinctiveEdge/substantialImprovements.svg",
    },
    {
      _id: 4,
      desc: "Extensive experience in understanding industry-specific challenges and opportunities",
      icon: "/intelligent-tech/distinctiveEdge/extensiveExperience.svg",
    },

  ]

  const BenefitsData = [
    {
      _id: 1,
      icon: "/intelligent-tech/benefits/accuracyConsistency.svg",
      title: "",
      cardDesc:
        "A high degree of accuracy and consistency in business operations",
    },
    {
      _id: 2,
      icon: "/intelligent-tech/benefits/problemSolving.svg",
      title: "",
      cardDesc:
        "Real-time problem-solving enable minimum disruptions and ensures uninterrupted business operations",
    },
    {
      _id: 3,
      icon: "/intelligent-tech/benefits/Automation.svg",
      title: "",
      cardDesc:
        "Automation of repetitive tasks, resulting in increased operational efficiency and productivity.",
    },
    {
      _id: 4,
      icon: "/intelligent-tech/benefits/reduceEquipment.svg",
      title: "",
      cardDesc:
        "Reduce equipment downtime and increase operational efficiency with real-time monitoring and predictive maintenance",
    },
  ];
  return (
    <>
      <EntIntro
        title="Intelligent Solutions for Future-Proof Business"
        desc="Delivering business - fit intelligent solutions to automate tedious tasks and augment business strength."
        cta="Let's Connect"
        width="60%"
        video="/intelligent-tech/videos/pageBanner.mp4"
      />

      {/* Overview  */}
      <OverviewSection Text={'Discover how AI, ML, RPA and IIoT help businesses with customer behavior prediction, process automation and generate new revenue streams with real time insights. As a strategic tech partner, Godrej Infotech ensures a future-ready foundation for clients.'} />
      {/* solutions */}

      <AdvanceSolutionSection />

      {/* Advantages Vertical Slider */}
      <BenefitSliderSection
        ID={'AIOfferings'}
        sectionBGColor={'bg-primary-900'}
        sectionHeading={'Advantage of Intelligent Technologies'}
        sectionDesc={'Implementing intelligent technologies is crucial for businesses to fuel growth & stay relevant in digital era.'}
        sectionTextColor={'text-neutral-white'}
        cardData={BenefitsData}
        sectionHeaderWidth={'w-full'}
      ></BenefitSliderSection>

      {/* blog */}
      <BlogSection ID={'blog'} blogImageUrl={blogImageUrl} Heading={'Digitalization with Infor Coleman AI & ML'}
        Desc={'Many of the organizations we work with today are looking for ways to optimize business processes, reduce manual work, and enhance customer service by using best-of-breed digital technologies that promise a speedy ROI.'}
        Color={'text-neutral-white'}
      ></BlogSection>

      {/* Distinctive section*/}
      <DistinctiveSection DistinctiveData={distinctiveData}
        ID={'Distinctive'} Title={'The Distinctive Edge'} Desc={'Reliable Expertise in Intelligent Tech Solutions'}
      >
      </DistinctiveSection>

      {/* transform business with us section */}
      <TransformBusinessForm Title={'Transform your Business with us'} Desc={"Let us discuss how our expertise can help you with rapid growth."} max>
      </TransformBusinessForm>
    </>
  );
};

export default page;
