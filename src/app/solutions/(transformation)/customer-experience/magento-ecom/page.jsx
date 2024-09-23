"use client";
import EntIntro from "@/components/EntIntro";
import SectionWrapper from '@/components/SectionWrapper';
import SectionHeading from '@/components/SectionHeading';
import OverviewSection from "@/sections/overview/OverviewSection";
import Image from "next/image";
import CommonCardTwoSlider from "@/sections/commonCardTwoSlider/CommonCardTwoSlider";
import CommonCardThreeSlider from '@/sections/commonCardThreeSlider/CommonCardThreeSlider';
import SectionWidthSlider from "@/sections/sectionWithSlider/SectionWithSlider";

import BlogSection from "@/sections/blog/BlogSection";
import TransformBusinessForm from "@/sections/transformBusinessFrom/TransformBusinessFromSection";
import DistinctiveSection from "@/sections/distinctive/DistinctiveSection";
import BenefitSliderSection from '@/sections/benefitSlider/BenefitSliderSection';
import IndustrySpotlight from "@/sections/industry-spotlight/industrySpotlight";

const page = () => {
 
  const INDUSTRY_SPOTLIGHT = [
    {
      id: 1,
      cardBGImageUrl:
        "/industry-spotlight/cards-backgrounds/card-bg--manufacturing.png",
      cardBGColor: "#7F4EE1",
      cardHeading: "Manufacturing",
      cardDesc: "",
      isArrow: false,
      cardTextColor: "white",
    },
    {
      id: 2,
      cardBGImageUrl:
        "/industry-spotlight/cards-backgrounds/card-bg--retail.png",

      cardBGColor: "#7F4EE1",
      cardHeading: "Retail",
      cardDesc:
        "AI-driven workflows, OCR and rule-based system enables accurate results",
      isArrow: false,
      cardTextColor: "white",
    },
    {
      id: 3,
      cardBGImageUrl:
        "/industry-spotlight/cards-backgrounds/card-bg--trading-and-distribution.png",

      cardBGColor: "#7F4EE1",
      cardHeading: "Trading & Distribution",
      cardDesc:
        "Manage contract workflows, forms and compliance with consistency and regulatory adherence",
      isArrow: false,
      cardTextColor: "white",
    },
    {
      id: 4,
      cardBGImageUrl:
        "/industry-spotlight/cards-backgrounds/card-bg--healthcare.png",

      cardBGColor: "#EFE9FB",
      cardHeading: "Healthcare",
      cardDesc:
        "Empower employees to focus on strategic tasks to deliver attentive experience to customers",
      isArrow: false,
      cardTextColor: "white",
    },
    {
      id: 5,
      cardBGImageUrl:
        "/industry-spotlight/cards-backgrounds/card-bg--professional-services.png",

      cardBGColor: "#EFE9FB",
      cardHeading: "Professional Services",
      cardDesc: "",
      isArrow: false,
      cardTextColor: "white",
    },
    {
      id: 5,
      cardBGImageUrl:
        "/industry-spotlight/cards-backgrounds/card-bg--project.png",

      cardBGColor: "#EFE9FB",
      cardHeading: "Project",
      cardDesc: "",
      isArrow: false,
      cardTextColor: "white",
    },
    // Add more cards as needed
  ];
  const BENEFITS_CARDS_DATA = [

    { id: '1', icon:'', cardDesc: 'A high degree of accuracy and consistency in business operations' },
    { id: '2', icon:'', cardDesc: 'Informed decision-making to extract valuable insights and identify patterns, correlation, and trends' },
    { id: '3', icon:'', cardDesc: 'Real-time problem-solving enable minimum disruptions and ensures uninterrupted business operations' },
    { id: '4', icon:'', cardDesc: 'Automation of repetitive tasks, resulting in increased operational efficiency and productivity.' },
    { id: '5', icon:'', cardDesc: 'Reduce equipment downtime and increase operational efficiency with real-time monitoring and predictive maintenance' },

  ];
  const distinctiveData = [
    {
      _id: 1,
      desc: "Enables automation across diverse use cases",
      icon: "",
    },
    {
      _id: 2,
      desc: "Help businesses achieve high productivity",
      icon: "",
    },
    {
      _id: 3,
      desc: "Substantial improvements in return on investment (ROI)",
      icon: "",
    },
    {
      _id: 4,
      desc: "Extensive experience in understanding industry-specific challenges and opportunities",
      icon: "",
    },

  ]

  const blogImageUrl = "/ai-ml/blog-bg.png";
  const ultimateChoiceData = [
    {
      id: 1,
      BGImageUrl: "",
      BGColor: "#fff",
      CardBGColor: "transparent",
      CardTextColor: '#fff',
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
      CardTextColor: '#fff',
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
      CardTextColor: '#fff',
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
      CardTextColor: '#fff',
      CardTitle: "",
      CardIconUrl: "/upgradeCloud/icons/ico--target.svg",
      CardHeading: "Sample Heading",
      CardDesc:
        "Highest levels of security and privacy, ensuring data is safeguarded",
      isArrow: "",
      link: [],
    },
  ];
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
  const setChallengesList = [
    { id: 1, title: "Inadequate Scalability and Availability", icon: '/upgradeCloud/icons/ico--target.svg' },
    { id: 2, title: "Unreliable Backup Storage", icon: '/upgradeCloud/icons/ico--target.svg' },
    { id: 3, title: "Weak Disaster Recovery and Redundancy", icon: '/upgradeCloud/icons/ico--target.svg' },
    { id: 4, title: "Inadequate Data Integrity", icon: '/upgradeCloud/icons/ico--target.svg' },
  ];

  const RPASolution = [
    {
      id: 1,
      cardBGImageUrl: 'https://flowbite.com/docs/images/blog/image-1.jpg',
      cardBGColor: '#7F4EE1',
      cardHeading: 'Increase Productivity',
      cardDesc: 'Automate repetitive tasks to enhance productivity with AI-driven workflow automation and analytics',
      isArrow: false,
      cardTextColor: 'white',
      cardType: 1,
    },
    {
  
      id: 2,
      cardBGImageUrl: '',
      cardBGColor: '#000',
      cardHeading: 'Accurate Outcomes',
      cardDesc: 'AI-driven workflows, OCR and rule-based system enables accurate results',
      isArrow: false,
      cardTextColor: 'white',
      cardType: 2,
    },
    {
  
      id: 3,
      cardBGImageUrl: 'https://flowbite.com/docs/images/blog/image-6.jpg',
      cardBGColor: '#7F4EE1',
      cardHeading: 'Compliance and Consistency',
      cardDesc: 'Manage contract workflows, forms and compliance with consistency and regulatory adherence',
      isArrow: false,
      cardTextColor: 'white',
      cardType: 1,
    },
    {
  
      id: 4,
      cardBGImageUrl: '/rpa/ArtboardBg.png',
      cardBGColor: '#EFE9FB',
      cardHeading: 'Strengthen Potential',
      cardDesc: 'Empower employees to focus on strategic tasks to deliver attentive experience to customers',
      isArrow: false,
      cardTextColor: 'white',
      cardType: 2,
    },
    {
  
      id: 5,
      cardBGImageUrl: 'https://flowbite.com/docs/images/blog/image-4.jpg',
      cardBGColor: '#EFE9FB',
      cardHeading: 'Enhance Flexibility',
      cardDesc: 'Adapt to changing business needs without hiring and training new staff, saving time and expense',
      isArrow: false,
      cardTextColor: 'white',
      cardType: 1,
    },
    {
  
  
      id: 5,
      cardBGImageUrl: '/rpa/ArtboardBg.png',
      cardBGColor: '#EFE9FB',
      cardHeading: 'Reduce AHT (Average Handling Time)',
      cardDesc: 'Enhance customer service quality, minimize response time and improve operational efficiency',
      isArrow: false,
      cardTextColor: 'white',
      cardType: 2,
    },
  ]

  return (
    <>
      <EntIntro
        title="Embrace the Digital Future of Business Efficiency with Industry Specialized Infor Application"
        desc=""
        cta="Let's Connect"
        width="60%"
        video="https://gitl-usa.s3.us-west-1.amazonaws.com/banner1.mp4"
      />
      <OverviewSection Text={`Globally recognized Infor is a robust ERP solution that delivers improved business strength and operational responsiveness. Committed to offering core industry application `} />

      <SectionWrapper style={{
        background: `url('/Transformation/customers/bgimage2.svg')`, backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}>
        <div className="md:container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div></div>
            <div>
              <SectionHeading
                Heading={' E-commerce Development Challenges  '}
                Color={'white'}
                Desc={''}
              />

              <ul className="mt-2 space-y-4 w-full text-white">
                {setChallengesList.map((challenge, index) => (
                  <li
                    key={challenge.id}
                    className={`flex items-start py-6 border-b-[0.5px] border-white w-full ${index === setChallengesList.length - 1 ? 'border-b-0' : ''}`}
                  >
                    <div className="flex-shrink-0 mr-4">
                      <Image
                        src={challenge.icon}
                        alt={`${challenge.title} icon`}
                        width={32}
                        height={32}
                      />
                    </div>
                    <div className="text-left">
                      <h3 className="text-2xl font-normal">
                        {challenge.title}
                      </h3>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

      </SectionWrapper>

      <CommonCardTwoSlider
        ID={''}
        sectionImageUrl={''}
        sectionBGColor={'#E1F2EF'}
        sectionHeading={'Our Microsoft CRM offerings'}
        sectionDesc={''}
        sectionTextColor={'#000'}
        sectionHeaderMaxWidth={'40%'}
        cardData={RPASolution}
      >
      </CommonCardTwoSlider>

      <CommonCardThreeSlider
        ID={''}
        sectionImageUrl={''}
        sectionBGColor={'#1D162B'}
        sectionHeading={'Key Feature and Benefits of Infor CRM'}
        sectionDesc={"We design, develop and implement hundreds of custom solutions and software applications using Microsoft technologies across Azure, Microsoft 365, Dynamics 365 and Power Platform."}
        sectionTextColor={'#fff'}
        cardData={serviceOfferingData}
      >

      </CommonCardThreeSlider>

      <SectionWidthSlider
        ID={"ultimateChoiceData"}
        sectionHeading={"Infor CRM Offerings"}
        sectionDesc={
          "Count on us for an impactful deployment that finely tunes Infor CRM to elevate your sales operations."
        }
        sectionTextColor="white"
        cardData={ultimateChoiceData}
        sectionBGColor="#5F22D9"
        setHeadingLayout="horizontal"

      />
       <IndustrySpotlight cardData={INDUSTRY_SPOTLIGHT} />
      <BenefitSliderSection
        ID={'BENEFIT'}
        sectionBGColor={'#1D162B'}
        sectionHeading={'Benefits of Infor WMS'}
        sectionDesc={'Achieving warehouse operation goals in an excellent way'}
        sectionTextColor={'white'}
        cardData={BENEFITS_CARDS_DATA}
        sectionHeadingMaxWidth={'100%'}
      />
  <BlogSection
        ID={"blog"}
        blogImageUrl={blogImageUrl}
        Heading={"The Powerful Duo: AI and the Internet of Things (IoT) Reshaping Our World"}
        Desc={
          "Imagine a world where machines talk to each other, predicting problems before they happen and adjusting on the fly. This isn't magic; it's the incredible team of artificial intelligence (AI) and the Internet of things (IoT) in Industry 4.0, the latest wave of technological revolution. "
        }
        maxWidth={'50%'}
        Color={"white"}
      ></BlogSection>
         <DistinctiveSection DistinctiveData={distinctiveData}
        ID={'Distinctive'} Title={'The Distinctive Edge'} Desc={'Reliable Expertise in Intelligent Tech Solutions'}
      >
      </DistinctiveSection>
      
      <TransformBusinessForm
        Title={"Transform your Business with us"}
        Desc={
          "Let us discuss how intelligent technologies can help you with rapid growth."
        }
      ></TransformBusinessForm>
      
      
    </>
  );
};

export default page;
