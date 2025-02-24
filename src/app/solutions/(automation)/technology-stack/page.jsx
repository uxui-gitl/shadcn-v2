"use client";

import React from 'react';
import EntIntro from '@/components/EntIntro';
import SectionNav from '@/components/SectionNav';
import OverviewSection from '@/sections/overview/OverviewSection';
import BlogSection from '@/sections/blog/BlogSection';
import DistinctiveSection from '@/sections/distinctive/DistinctiveSection';
import TransformBusinessForm from '@/sections/transformBusinessFrom/TransformBusinessFromSection';
import ReviewSliderSection from '@/sections/reviewSlider/ReviewSliderSection';
import BenefitSliderSection from '@/sections/benefitSlider/BenefitSliderSection';
import TechnologyStackLogos from '@/sections/tech-stack/TechnologyStackLogos';
import ServicesCardSlider from '@/sections/services-cards-slider/ServicesCardSlider';
import CommonCardThreeSlider from "@/sections/commonCardThreeSlider/CommonCardThreeSlider";
import BlogSliderSection from '@/sections/blogSlider/BlogSliderSection';

const TechnologyStack = () => {
  const blogImageUrl = "/technology-stack/videos/pageBanner.mp4";
  const DISTINCTIVE_DATA = [
    {
      _id: 1,
      desc: "Scalable infrastructure support for your business requirements",
      icon: "/technology-stack/distinctiveEdge/ScalableInfrastructure.svg",
    },
    {
      _id: 2,
      desc: "High agility and elevated user experience delivery while meeting timelines ",
      icon: "/technology-stack/distinctiveEdge/HighAgility.svg",
    },
    {
      _id: 3,
      desc: "Assured continuous support through bug fixing and upgradation ",
      icon: "/technology-stack/distinctiveEdge/assuredContinuous.svg",
    },
    {
      _id: 4,
      desc: "100% collaborative approach, quality guidelines & adherence to the right coding standards",
      icon: "/technology-stack/distinctiveEdge/collaborativeApproach.svg",
    },
    {
      _id: 5,
      desc: "Comprehensive requirement analysis and scope-of-work documentation before designing ",
      icon: "/technology-stack/distinctiveEdge/comprehensive.svg",
    },

  ];
  const TESTIMONIAL_DATA = [
    {
      id: 1,
      cardHeading: "Power BI Solution on time with quality",
      cardDesc: 'We sincerely appreciate GITL team for delivering Power BI solution on time and with great quality. We really like the data visualisations & dashboards provided and it makes it easier for us to get a good grip on our business performance indicators.'
    },
    {
      id: 2,
      cardHeading: "Power BI Solution on time with quality",
      cardDesc: 'We sincerely appreciate GITL team for delivering Power BI solution on time and with great quality. We really like the data visualisations & dashboards provided and it makes it easier for us to get a good grip on our business performance indicators.'
    },
    {
      id: 3,
      cardHeading: "Power BI Solution on time with quality",
      cardDesc: 'We sincerely appreciate GITL team for delivering Power BI solution on time and with great quality. We really like the data visualisations & dashboards provided and it makes it easier for us to get a good grip on our business performance indicators.'
    },
  ];

  const BENEFITS_CARDS_DATA = [

    { id: '1',icon:'/technology-stack/benefits/addressesSpecific.svg', cardDesc: 'Addresses specific business challenges and goals' },
    { id: '2',icon:'/technology-stack/benefits/providesValuable.svg', cardDesc: 'Provides valuable business intelligence and analytics' },
    { id: '3',icon:'/technology-stack/benefits/reduceTraining.svg', cardDesc: 'Reduce training overheads and time investment' },
    { id: '4',icon:'/technology-stack/benefits/contribution.svg', cardDesc: 'Contribution to business revenue' },
    { id: '5',icon:'/technology-stack/benefits/gainCompetitive.svg', cardDesc: 'Gain competitive edge' },
    { id: '6',icon:'/technology-stack/benefits/ensureSeamless.svg', cardDesc: 'Ensure seamless performance' },
    { id: '7',icon:'/technology-stack/benefits/automatesProcesses.svg', cardDesc: 'Automates processes, saving time and resources' },
  ];

  const SERVICE_CARDS_DATA = [
    {
      title: "Planning and Designing",
      hoverTitle: "Planning & Designing",
      description: "Bridging the envisioned outcome with the planned application and designing application architecture.",
      content: "Additional content for Card 1",
      imageURL: '/technology-stack/planningDesigning.webp'
    },
    {
      title: "Define Technology Stack & Develop",
      hoverTitle: "Define Technology Stack & Develop",
      description: "Meticulous selection of frameworks, programming languages, libraries and tools followed by the development of innovative application with a clean code architecture.",
      content: "Additional content for Card 2",
      imageURL: '/technology-stack/defineTechnology.webp'
    },
    {
      title: "Application Testing",
      hoverTitle: "Application Testing",
      description: "Detecting defects, verifying compliance while ensuring seamless functionality and user experience.",
      content: "Additional content for Card 3",
      imageURL: '/technology-stack/applicationTesting.webp'
    },
    {
      title: "Application Deployment",
      hoverTitle: "Application Deployment",
      description: "Efficient release of application with a focus on automation and DevOps practice.",
      content: "Additional content for Card 4",
      imageURL: '/technology-stack/applicationDeployment.webp'
    },
    {
      title: "Application Maintenance",
      hoverTitle: "Application Maintenance",
      description: "Ensuring long-term stability, reliability and scalability of the application.",
      content: "Additional content for Card 5",
      imageURL: '/technology-stack/applicationMaintenance.webp'
    },
    // Add more cards here...
  ];

  const RPASolution = [
    {
      id: 1,
      cardBGColor: '#F5B1DC',
      cardHeading: 'Custom Application Development',
      cardDesc: 'Transcending off-the-shelf offerings, we develop apps ensuring alignment with business needs',
      isArrow: true,
      cardTextColor: 'black',
      cardTopImageUrl: '/technology-stack/ourOfferings/legacyModernisation.webp'
    },
    {

      id: 2,
      cardBGColor: '#FCE6F4',
      cardHeading: 'Legacy Modernisation',
      cardDesc: 'Transform legacy systems into agile solutions assuring Triple Aim goals and optimal RoI',
      isArrow: true,
      cardTextColor: 'black',
      cardTopImageUrl: '/technology-stack/ourOfferings/legacyModernisation.webp'
    },
    {

      id: 3,
      cardBGColor: '#CDBAF3',
      cardHeading: 'Application Managed Services',
      cardDesc: 'Right expertise and technology to drive value across the entire app lifecycle',
      isArrow: true,
      cardTextColor: 'black',
      cardTopImageUrl: '/technology-stack/ourOfferings/legacyModernisation.webp'
    },
    {

      id: 4,
      cardBGColor: '#E4E4E4',
      cardHeading: 'Mobile Application',
      cardDesc: 'Mobile app with strong backend, user engagement & offers cross-platform experience',
      isArrow: true,
      cardTextColor: 'black',
      cardTopImageUrl: '/technology-stack/ourOfferings/MobileApplication.webp'
    },
    {

      id: 5,
      cardBGImageUrl: '/rpa/ArtboardBg.png',
      cardBGColor: '#EFE9FB',
      cardHeading: 'Enterprise Application Integration',
      cardDesc: 'Accelerate time-to-market with seamless app integration & optimized data flow',
      isArrow: true,
      cardTextColor: 'black',
      cardTopImageUrl: '/technology-stack/ourOfferings/EnterpriseApplication.webp'
    },
    
  ]

  const blogSliderData=[
    {
    id: 1,
    cardBGImageUrl: '/technology-stack/blog-bg1.webp',
    cardBGColor:'red',
    cardHeading: "Legacy Modernization in Manufacturing Industry ",
    cardDesc: 'The Manufacturing Industry is in midst of transformation with some organizations accelerating to Industry 4.0+ platforms while other organizations struggle with infrastructure which has been built for the past. The current pandemic situation has further exacerbated the situation with hackers looking at vulnerabilities for exploitation in the Industry Infrastructure. ',
    cardTextColor:'white',
    readMoreUrl:"https://www.godrejinfotech.com/blogDetails.aspx?blog=8"
  },
  {
    id: 2,
    cardBGImageUrl: '/technology-stack/blog-bg2.webp',
    cardBGColor:'red',
    cardHeading: "ASP.Net-A popular choice for Web development",
    cardDesc: 'Most enterprises are in the process of migration from legacy systems to new, user-friendly dynamic and robust web applications. In this crowded market of different technologies such as PHP, HTML5, WordPress, Magento and several others, Microsoft’s ASP.NET has proved to be ‘the popular choice’.  ',
    cardTextColor:'white',
    readMoreUrl:"https://www.godrejinfotech.com/blogDetails.aspx?blog=4"
  },
  {
    id: 3,
    cardBGImageUrl: '/technology-stack/blog-bg3.webp',
    cardBGColor:'red',
    cardHeading: "Application Modernization – Proven Growth Strategy for Progressive Organizations",
    cardDesc: 'The IT Industry has seen various phases of evolution of application development & maintenance. In the earlier days, there used to be monolithic applications that used to be deployed on physical servers. Waterfall methodology was used wherein analysis, design, development & deployment phases were done in a sequential manner one after the other, and each succeeding phase could not be started before the preceding phase was completed. ',
    cardTextColor:'white',
    readMoreUrl:"https://www.godrejinfotech.com/blogDetails.aspx?blog=16"
  }
  ]


  return (<>
    {/* Start--Section--HeroBanner======================================================== */}
    <EntIntro
      title="Scalable and Customized Business Applications"
      desc="Expertly developed solutions adapting to business needs"
      cta="Let's Connect"
      width="60%"
      video="/technology-stack/videos/pageBanner.mp4"
    />

    {/* End--Section--HeroBanner======================================================== */}
    {/* Start--Section-Navigation======================================================== */}

    
    {/* Start--Overview-Section======================================================== */}
    <OverviewSection
      Text={
        "We develop applications that enhance business responsiveness to changing market scenarios through data-driven insights and seamless integration."
      }
    />
    <TechnologyStackLogos />

    <CommonCardThreeSlider
      ID={'AIOfferings'}
      sectionImageUrl={''}
      sectionBGColor={'bg-neutral-white'}
      sectionHeading={'Our Service Offerings'}
      sectionDesc={'Architecting secure and high-performance applications with cloud-native technologies, microservices and DevOps practices'}
      sectionTextColor={'text-primary-900'}
      sectionHeaderMaxWidth={'w-1/2'}
      cardData={RPASolution}

    >

    </CommonCardThreeSlider>
    {/* End--Overview-Section======================================================== */}
    {/* Start--Logos--Section======================================================== */}
    {/* End--Logos--Section======================================================== */}
    {/* Start--Benefit--Section======================================================== */}
    <BenefitSliderSection
      ID={'BENEFIT'}
      sectionBGColor={'bg-primary-900'}
      sectionHeading={'Custom-built Application Benefits'}
      sectionDesc={'Delivering results, simplifying complex process and increasing performance with our customised applications'}
      sectionTextColor={'white'}
      cardData={BENEFITS_CARDS_DATA}
      sectionHeadingMaxWidth={'100%'}
    />
    {/* End--Benefit--Section======================================================== */}
    {/* Start--Service--Section======================================================== */}
    <ServicesCardSlider cardData={SERVICE_CARDS_DATA} heading={"Engineering Success with Our Methodology"} desc={"This approach enables us to adeptly manage software development projects of varying complexity levels."} color={"text-primary-900"} />

    {/* End--Service--Section======================================================== */}



    {/* Start-Section--Blog======================================================================= */}
    <BlogSliderSection 
    cardData={blogSliderData}
    ></BlogSliderSection>
    {/* <BlogSection
      ID={"blog"}
      blogImageUrl={blogImageUrl}
      Heading={"Unveilling Hyper automation  for supply chain efficiency"}
      Desc={
        "IIoT offers a multitude of benefits that enable businesses to gain competitive edge through innovation and succeed in digital era."
      }
      Color={"white"}
    ></BlogSection> */}
    {/* End-Section--Blog======================================================================= */}
    {/* Start--Section--Distinctive======================================================== */}
    <DistinctiveSection DistinctiveData={DISTINCTIVE_DATA}
      ID={'Distinctive'} Title={'The Distinctive Edge'} Desc={'We understand the intricacies of diverse technologies, leverage our capability to deliver solutions that exquisitely supports business ambitions.'}
    >
    </DistinctiveSection>
    {/* End--Section--Distinctive======================================================== */}
    {/* Start--Section--Testimonials======================================================== */}
    {/* <ReviewSliderSection
      ID={"TESTIMONIALS"}
      Heading={"Delighted customers share their success experience"}
      Desc={''}
      Color="#ffffff"
      CardDataList={TESTIMONIAL_DATA}
      BGColor="#1D162B"
      SectionHeadingMaxWidth={'70%'}
    ></ReviewSliderSection> */}
    {/* End--Section--Testimonials======================================================== */}
    {/* Section--TransformBusinessForm======================================================================= */}
    <TransformBusinessForm
      Title={"Free 30 Minutes Strategy Session with Tech Expert"}
      Desc={
        "Transform with Us. Let’s discuss how our expertise can help you with rapid growth."
      }
    ></TransformBusinessForm>
    {/* End-Section--TransformBusinessForm */}


  </>);
};

export default TechnologyStack;