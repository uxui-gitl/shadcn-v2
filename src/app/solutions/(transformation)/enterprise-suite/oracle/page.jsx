"use client";
import EntIntro from "@/components/EntIntro";
import SectionNav from "@/components/SectionNav";
import OverviewSection from "@/sections/overview/OverviewSection";
import SectionHeading from '@/components/SectionHeading';
import SectionWrapper from '@/components/SectionWrapper';
import CommonCardTwoSlider from "@/sections/commonCardTwoSlider/CommonCardTwoSlider";
import SectionWidthSlider from "@/sections/sectionWithSlider/SectionWithSlider";
import BenefitSliderSection from '@/sections/benefitSlider/BenefitSliderSection';
import IndustrySpotlight from "@/sections/industry-spotlight/industrySpotlight";
import BlogSection from "@/sections/blog/BlogSection";
import DistinctiveSection from "@/sections/distinctive/DistinctiveSection";
import TransformBusinessForm from "@/sections/transformBusinessFrom/TransformBusinessFromSection";
const page = () => {
  const DISTINCTIVE_DATA = [
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
    },
  ];
  const blogImageUrl = "/ai-ml/blog-bg.png";
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
    { id: '1', icon:'' ,cardDesc: 'A high degree of accuracy and consistency in business operations' },
    { id: '2', icon:'' ,cardDesc: 'Informed decision-making to extract valuable insights and identify patterns, correlation, and trends' },
    { id: '3', icon:'' ,cardDesc: 'Real-time problem-solving enable minimum disruptions and ensures uninterrupted business operations' },
    { id: '4', icon:'' ,cardDesc: 'Automation of repetitive tasks, resulting in increased operational efficiency and productivity.' },
    { id: '5', icon:'' ,cardDesc: 'Reduce equipment downtime and increase operational efficiency with real-time monitoring and predictive maintenance' },

  ];
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

      <SectionWrapper BGColor="#a0efe5db">
        <div className="md:container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <SectionHeading
              headingContainerWidth="w-full"
              Heading="Oracle Fusion Cloud"
              Desc={'This solution leverages advanced technologies such as machine learning and artificial intelligence to optimize operations and transform organizations into information-driven enterprises.'}
            >

            </SectionHeading>
          </div>
          <div className="hidden md:block">
            <img src="/ai-ml/Industry-served_Automotive.jpg" width="100%" style={{ maxHeight: '300px' }} />
          </div>
        </div>

      </SectionWrapper>

      <CommonCardTwoSlider
        ID={'AIOfferings'}
        sectionImageUrl={''}
        sectionBGColor={'#E1F2EF'}
        sectionHeading={'Our Oracle Offerings'}
        sectionDesc={''}
        sectionTextColor={'#000'}
        sectionHeaderMaxWidth={'40%'}
        cardData={RPASolution}
      >
      </CommonCardTwoSlider>
      <SectionWidthSlider
        ID={"ultimateChoiceData"}
        sectionHeading={"Infor CRM Offerings"}
        sectionDesc={
          "Count on us for an impactful deployment that finely tunes Infor CRM to elevate your sales operations."
        }
        sectionTextColor="white"
        cardData={ultimateChoiceData}
        sectionBGColor="#7B014E"
        setHeadingLayout="horizontal"

      />

      <BenefitSliderSection
        ID={'BENEFIT'}
        sectionBGColor={'#1D162B'}
        sectionHeading={'Benefits of Infor LN'}
        sectionDesc={'Discover substantial benefits that Infor LN brings to the table, helping in competitive business landscape.'}
        sectionTextColor={'white'}
        cardData={BENEFITS_CARDS_DATA}
        sectionHeadingMaxWidth={'100%'}
      />

 
      <IndustrySpotlight cardData={INDUSTRY_SPOTLIGHT} />
      <BlogSection
        ID={"blog"}
        blogImageUrl={blogImageUrl}
        Heading={"Unveilling Hyper automation  for supply chain efficiency"}
        Desc={
          "IIoT offers a multitude of benefits that enable businesses to gain competitive edge through innovation and succeed in digital era."
        }
        Color={"white"}
      ></BlogSection>
      <DistinctiveSection
        DistinctiveData={DISTINCTIVE_DATA}
        ID={"Distinctive"}
        Title={"The Distinctive Edge"}
        Desc={
          "Trust Godrej Infotech to leverage Intelligent technologies and lead business into competitive digital landscape."
        }
      ></DistinctiveSection>
      {/* Start--Transform-Business-Form-Section============================================================== */}
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
