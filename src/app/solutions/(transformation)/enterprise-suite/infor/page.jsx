'use client';
import EntIntro from "@/components/EntIntro";
import SectionNav from "@/components/SectionNav";
import OverviewSection from "@/sections/overview/OverviewSection";
import ServiceOfferingSection from "@/sections/serviceOffering/ServiceOfferingSection";
import CommonCardThreeSlider from '@/sections/commonCardThreeSlider/CommonCardThreeSlider';
import SectionWidthSlider from "@/sections/sectionWithSlider/SectionWithSlider";
import SectionWrapper from '@/components/SectionWrapper';
import SectionHeading from '@/components/SectionHeading';
const Page = () => {

  const offeringCardData = [
    { id: '1', cardTitle: "Consultation Services", cardDesc: 'We conduct process and platform estimations, capture automation requirements, create business cases, process validations and make clear Standard Operating Procedures (SoPs), ensuring your RPA journey aligns perfectly with your business goals.', cardImageUrl: '/rpa/Offering01.png' },
    { id: '2', cardTitle: "Feasibility Check Services", cardDesc: 'Our expert team design RPA pilot and build Proof of Concepts (PoCs) taking your RPA vision into consideration.', cardImageUrl: '/rpa/Offering01.png' },
    { id: '3', cardTitle: "RPA Deployment", cardDesc: 'We install / configure automation scripts with precision followed by continuous enhancements, run end-to-end testing, manage QA(Quality assurance) processes and carefully document the code.', cardImageUrl: '/rpa/Offering01.png' },
    { id: '4', cardTitle: "RPA Managed Services", cardDesc: 'We maintain and monitor your RPA application and Bot for their excellent performance, offering ongoing support and driving continuous improvement.', cardImageUrl: '/rpa/Offering01.png' },
  ];

  const offeringLinkListData = [
    { id: 1, text: 'Consultation Services', beforeIconUrl: '', isArrowIconVisiable: 'false' },
    { id: 2, text: 'Feasibility Check Services', beforeIconUrl: '', isArrowIconVisiable: 'false' },
    { id: 3, text: 'RPA Deployment', beforeIconUrl: '', isArrowIconVisiable: 'false' },
    { id: 4, text: 'RPA Managed Services', beforeIconUrl: '', isArrowIconVisiable: 'false' },
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
            </div>
            <div className="">
              <h1>dkhgkjgsd</h1>
            </div>
          </div>
        </div>


      </SectionWrapper>

      <ServiceOfferingSection id=""
        sectionBGColor="#5F22D9"
        sectionHeading={'Globally Trusted Core Infor Expertise'}
        sectionDesc={"Equipping your organization to thrive in the digital era, we deliver high-end solutions, Regardless of whether you're starting your transformation journey or ."}
        sectionTextColor={'white'}
        sectionHeaderMaxWidth={'40%'}
        cardData={offeringCardData}
        LinkListData={offeringLinkListData}
      >
      </ServiceOfferingSection>

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
