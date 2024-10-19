"use client";
import EntIntro from "@/components/EntIntro";
import OverviewSection from "@/sections/overview/OverviewSection";
import CommonCardTwoSlider from "@/sections/commonCardTwoSlider/CommonCardTwoSlider";
import { Swiper, SwiperSlide } from "swiper/react";
import SectionHeading from "@/components/SectionHeading";
import BlogSection from "@/sections/blog/BlogSection";
import ReviewSliderSection from '@/sections/reviewSlider/ReviewSliderSection';
import TransformBusinessForm from "@/sections/transformBusinessFrom/TransformBusinessFromSection";
import ServicesCardSlider from '@/sections/services-cards-slider/ServicesCardSlider';
import SectionWithSlider from "@/sections/sectionWithSlider/SectionWithSlider";
import HubExpertise from "@/sections/hub-of-expertise/HubExpertise";
import DistinctiveSection from "@/sections/distinctive/DistinctiveSection";
import CaseStudiesSection from "@/sections/case-studies/CaseStudiesSection";
const page = () => {

  const SERVICE_CARDS_DATA = [
    {
      title: "Site Analysis and Project Planning",
      hoverTitle: "Site Analysis and Project Planning",
      description: "Understand precise needs of business and build the foundation for an effective project execution.",
      content: "Additional content for Card 1",
      imageURL: '/techStack1.png'
    },
    {
      title: "Design Solution Architecture and Mapping",
      hoverTitle: "Design Solution Architecture and Mapping",
      description: "Employ the latest tools and methodologies to build robust and scalable solutions tailored to business specific requirements.",
      content: "Additional content for Card 2",
      imageURL: '/techStack1.png'
    },
    {
      title: "Efficient Knowledge Transfer",
      hoverTitle: "Efficient Knowledge Transfer",
      description: "Offer user acceptance testing to ensure proficiency with the new application.",
      content: "Additional content for Card 3",
      imageURL: '/techStack1.png'
    },
    {
      title: "Data Migration & Go-Live Readiness",
      hoverTitle: "Data Migration & Go-Live Readiness",
      description: "Thoroughly assess, cleanse, transform, and migrate data from legacy systems to the new solution, ensuring system readiness for a smooth launch with minimal hiccups, as planned.",
      content: "Additional content for Card 4",
      imageURL: '/techStack1.png'
    },
    {
      title: "Go-Live and Post Go Live Support",
      hoverTitle: "Go-Live and Post Go Live Support",
      description: "Launch chosen solution and provide ongoing monitoring, troubleshooting and performance -tuning to ensure peak efficiency of solution.",
      content: "Additional content for Card 5",
      imageURL: '/techStack1.png'
    },
    // Add more cards here...
  ];


  const CASE_STUDIES_DATA = [
    {
      imageURL: " ",
      videoURL: "",
      title: "Case Studies",
      heading: 'Delivering Results that Matters',
      description: "",
      link: "",
      color: '#FFFFFF',
      bgCardColor: '#2B1624'
    },
    {
      imageURL: "",
      title: "",
      heading: 'Enhanced Asset Performance and Reduced Maintenance Cost',
      description: "Indian based Global Oncology Pharmaceuticals Company Implements HxGN EAM Solution",
      link: "/case-study-1",
      color: '#000',
      bgCardColor: '#E4E4E4'
    },

    {
      imageURL: "/path/to/image1.jpg",
      title: "",

      heading: "Improved financial visibility and control",
      description: "Leading Group of Electrical & Electronic Manufacturing Companies in Kingdom of Saudi Arabia Successfully Implements Microsoft D365 Finance & Operations",
      link: "/case-study-1",
      color: '#000',
      bgCardColor: '#FCE6F4'
    },
    
    // Add more case studies here...
  ];

  const CyberSecurityData = [
    {
      id: 1,
      cardBGImageUrl: '/rpa/ArtboardBg.png',
      cardBGColor: '#7F4EE1',
      cardHeading: 'End to End Implementation',
      cardDesc: 'Employing our best practices we provide effective solution deployment, risk mitigation and complete adoption of the solution.',
      isArrow: false,
      cardTextColor: 'white',
      cardType: 1,
    },
    {

      id: 2,
      cardBGImageUrl: '',
      cardBGColor: '#7F4EE1',
      cardHeading: 'Global Rollouts',
      cardDesc: 'We execute pilot implementation for a few client- designated locations. Following client approval, the solution is deployed to all locations according to the agreed timeline.',
      isArrow: false,
      cardTextColor: 'white',
      cardType: 2,
    },
    {

      id: 3,
      cardBGImageUrl: '',
      cardBGColor: '#9F0165',
      cardHeading: 'Customization and Integration',
      cardDesc: 'We integrate the right fit technologies, processes, and systems to deliver valuable and unified end-user experience.',
      isArrow: false,
      cardTextColor: 'white',
      cardType: 1,
    },
    {

      id: 4,
      cardBGImageUrl: '/rpa/ArtboardBg.png',
      cardBGColor: '#EFE9FB',
      cardHeading: 'Data Migration',
      cardDesc: 'With the responsibility of extracting data from source systems, cleansing it, loading the combined data into the target system, and executing Master Data Governance, we facilitate a smooth transition while reducing testing requirement, downtime and cost overruns',
      isArrow: false,
      cardTextColor: 'white',
      cardType: 2,
    },
    {

      id: 5,
      cardBGImageUrl: '/rpa/ArtboardBg.png',
      cardBGColor: '#EFE9FB',
      cardHeading: 'Reimplementation',
      cardDesc: 'Considering the current project scenario, organizational bottlenecks, and perspectives from relevant stakeholders, we eliminate erroneous transactions, re-architect and progress through the project in a simple and structured manner. This ensures that our clients can reclaim the original investments made in ERP systems.',
      isArrow: false,
      cardTextColor: 'white',
      cardType: 1,
    },
  ];

  const ImplementationServiceVirtues_DATA= [
    {
      id: 1,
      cardHeading: "Result Focused Services",
      cardDesc: 'We measure our success, based on the tangible results we deliver for our customers.'
    },
    {
      id: 2,
      cardHeading: "Agile Approach",
      cardDesc: `Repository of ready solutions enables a flexible and adaptive way of working that prioritizes customers' evolving needs.`
    },
    {
      id: 3,
      cardHeading: "Quality Practice",
      cardDesc: 'We are dedicated to maintaining the highest quality standard which is non-negotiable and is embedded in our work culture.'
    },
  ];

  const TESTIMONIAL_DATA = [
    {
      id: 1,
      cardHeading: "",
      cardDesc: 'I would like to thank the dedicated team at Godrej Infotech for a successful Dynamics 365 for Sales Professional implementation. We can now generate customized reports and track sales personnel in the field. This achievement adds significant value to our business.',
      designation:`Managing Director,`,
      companyName:`Saudi Arabia’s Manufacturer & Supplier of Piping Products & Fitting`
    },
    {
      id: 2,
      cardHeading: "",
      cardDesc: 'We appreciate Godrej Infotech team for their exceptional work during Infor LN ERP implementation. Project was executed smoothly and efficiently. Your understanding of our needs and your positive contributions were highly valued. We applause your leadership, dedication and the collaborative effort of your team. Gratitude to all the project members.',
      designation:`Head Procurement & Project Manager,`,
      companyName:`Leading Global Supplier of Process Equipment`
    },
    {
      id: 3,
      cardHeading: "",
      cardDesc: 'Congratulations to the Godrej Infotech team for successfully rolling out LS Central Hospitality. This solution has revolutionized our ice-cream retail stores, streamlining operations and automating HR and Payroll tasks. Our POS is now 100% operational, leading to a 70% reduction in procurement time and a 60% boost in finance process productivity. We thank the entire Godrej Infotech team for their outstanding 100% offshore delivery.',
      designation:`Finance/Project Manager,`,
      companyName:`KSA based World's first super-premium ice cream Franchise`
    },
  ];

  const blogImageUrl = '/ai-ml/blog-bg.png';

  const DATA_MGMT_DATA = [
    {
      id: 1,
      BGImageUrl: "",
      BGColor: "#fff",
      CardBGColor: "transparent",
      CardTextColor: "white",
      CardTitle: "",
      CardIconUrl: "/upgradeCloud/icons/ico--target.svg",
      CardHeading: "People Centricity",
      CardDesc:
        "We bring functional and implementation teams together and create bottom-up planning, leveraging expertise and insights for our client.",
      isArrow: "true",
      link: [],
    },

    {
      id: 2,
      BGImageUrl: "",
      BGColor: "#fff",
      CardBGColor: "transparent",
      CardTextColor: "white",
      CardTitle: "",
      CardIconUrl: "/upgradeCloud/icons/ico--target.svg",
      CardHeading: "Process Quality",
      CardDesc:
        "We aim to continuously improve every implementation phase, identify areas where enhancements are required and execute them methodically that leads to greater effectiveness.",
      isArrow: "true",
      link: [],
    },
    {
      id: 3,
      BGImageUrl: "",
      BGColor: "#fff",
      CardBGColor: "transparent",
      CardTextColor: "white",
      CardTitle: "",
      CardIconUrl: "/upgradeCloud/icons/ico--target.svg",
      CardHeading: "Technology Proficiency",
      CardDesc:
        "Our expert team is well-versed with pioneering technologies and proficiently implements the right-fit solution to navigate business challenges.",
      isArrow: "true",
      link: [],
    },
    {
      id: 4,
      BGImageUrl: "",
      BGColor: "#fff",
      CardBGColor: "transparent",
      CardTextColor: "white",
      CardTitle: "",
      CardIconUrl: "/upgradeCloud/icons/ico--target.svg",
      CardHeading: "Effective Change Management",
      CardDesc:
        "Understanding the obvious resistance to the change, we exercise strong change management practices, ensuring efficient acceptance.",
      isArrow: "true",
      link: [],
    },
    {
      id: 5,
      BGImageUrl: "",
      BGColor: "#fff",
      CardBGColor: "transparent",
      CardTextColor: "white",
      CardTitle: "",
      CardIconUrl: "/upgradeCloud/icons/ico--target.svg",
      CardHeading: "Adaptive Business Environment",
      CardDesc:
        "We continuously monitor market dynamics and industry trends, adapting our approach to ensure successful implementation in a constantly evolving business landscape.",
      isArrow: "true",
      link: [],
    },
    
  ];

  const HUBEXPERTISE_COUNTER_DATA = [
    {
      start: 10,
      end: 600,
      description: "Consultants",
    },
    {
      start: 10,
      end: 500,
      description: "Customers",
    },
    {
      start: 10,
      end: 1000,
      description: "Implementation Sites",
    },
    // Add more counters as needed
  ];

  const distinctiveData = [
    {
      _id: 1,
      desc: "Accountability at every phase of the implementation process",
      icon: "",
    },
    {
      _id: 2,
      desc: "Rigorous unit testing for every configuration and customization",
      icon: "",
    },
    {
      _id: 3,
      desc: "End-to-end proficiency in implementing comprehensive solutions",
      icon: "",
    },
    {
      _id: 4,
      desc: "Simplified data management for better decision making",
      icon: "",
    },
    {
      _id: 5,
      desc: "Smooth user adoption and dedicated support service",
      icon: "",
    },
    {
      _id: 6,
      desc: "Enhanced customer and employee satisfaction",
      icon: "",
    },
    {
      _id: 7,
      desc: "Committed to punctual and on-budget implementations",
      icon: "",
    },
    {
      _id: 8,
      desc: "Streamlined full implementation cycles for efficiency",
      icon: "",
    },
    {
      _id: 9,
      desc: "Accelerated project timelines for quicker results",
      icon: "",
    },
    {
      _id: 10,
      desc: "Minimum business disruption through proven methodology",
      icon: "",
    },

  ]


  const serviceData=[
    {title:'Result Focused Services', des:'We measure our success, based on the tangible results we deliver for our customers.'},
    {title:'Agile Approach', des:`Repository of ready solutions enables a flexible and adaptive way of working that prioritizes customers' evolving needs.`},
    {title:'Quality Practice', des:'We are dedicated to maintaining the highest quality standard which is non-negotiable and is embedded in our work culture.'},
    
  ]

  return (
    <>
      <EntIntro
        title="Implementation & Global Rollout Services"
        desc="Expertly Implemented, Globally Delivered"
        cta="Let's Connect"
        width="60%"
        video="https://gitl-usa.s3.us-west-1.amazonaws.com/banner1.mp4"
      />
      <OverviewSection Text={`25+ years expertise in implementation services, delivering secure rollouts and timely results for global clients.`} />

      <CommonCardTwoSlider
        ID={''}
        sectionImageUrl={''}
        sectionBGColor={'#EFE9FB'}
        sectionHeading={'Our Services'}
        sectionDesc={'Our implementation services combine industry expertise with a customer-centric approach, ensuring minimal disruption and maximum impact.'}
        sectionTextColor={'#000'}
        sectionHeaderMaxWidth={'40%'}
        setHeadingLayout={'horizontal'}
        cardData={CyberSecurityData}
      />

      <div className="" style={{ backgroundColor: '#1D162B' }}>
        <div className="md:container mx-auto pt-20 flex h-[500px]" style={{ alignItems: 'center', overflow: 'hidden' }}>
          <div className="w-full md:w-1/2">
            <SectionHeading
              Heading={`Our Implementation Service Virtues`}
              Color={'white'}
              Desc={`Transform your business with our implementation services: Proven methodologies, certified experts, and personalized support.`}
              headingContainerWidth={'w-full'}
            />
          </div>
          <div className="hidden md:w-1/2 md:block">
            <img src="/infor/man.svg" style={{ width: '100%' }} />
          </div>
        </div>
        <div className="md:container mx-auto bg-[#EFE9FB] py-20" style={{ zindex: '2', position: 'relative', borderTopLeftRadius: "24px", borderTopRightRadius: "24px" }}>
          <Swiper
            slidesPerView={4}
            navigation={false}
            pagination={{ type: "bullets", clickable: true }}
            autoplay={true}
            loop={false}
            spaceBetween={30}
            breakpoints={{
              640: {
                  slidesPerView: 1,
                  spaceBetween: 16,
              },
              768: {
                  slidesPerView: 2,
                  spaceBetween: 24,
              },
              1024: {
                  slidesPerView: 3,
                  spaceBetween: 32,
              },
          }}
          >
            {ImplementationServiceVirtues_DATA.map((item, index) => (
              <SwiperSlide key={item}>
                <div className="bg-[#EFE9FB] rounded-lg">
                  <img className="rounded-t-lg pl-4" src="/infor/blackstar.svg" alt="werw" />
                  <div className="p-5">
                    <h5 className="mb-2 text-2xl font-bold">{item.cardHeading}</h5>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <ServicesCardSlider cardData={SERVICE_CARDS_DATA} heading={"Key Implementation Phases"} desc={"Constant optimization is important during every stage, as we fine-tune the solution to maximize its value."} color={"#1D162B"} />

      <SectionWithSlider
        ID={"DATA_MGMT_DATA"}
        sectionHeading={"360 Degree Implementation Practice"}
        sectionDesc={
          "Every successful implementation needs more than technology expertise. Our all-inclusive approach delivers winning implementation services for our customers."
        }
        sectionTextColor="#ffffff"
        cardData={DATA_MGMT_DATA}
        sectionBGColor="#2B1624"
        setHeadingLayout="horizontal"
      />

      <HubExpertise
        BGColor="#7B014E"
        setHeading="Hub of Expertise"
        setDesc="We’re here to build an edge and bring technology brilliance with the finest in the industry."
        setColor="#ffffff"
        counters={HUBEXPERTISE_COUNTER_DATA}
      />

      <BlogSection ID={'blog'} blogImageUrl={blogImageUrl} Heading={'Mastering Data Migration: Key Strategies for Seamless Implementation'}
        Desc={`As organizations transit to new systems or upgrade existing ones, ensuring smooth data migration becomes imperative to maintain continuity, accuracy, and efficiency in operations. In this blog, we'll delve into the critical aspects of data migration and outline key strategies to ensure a seamless implementation process.`}
        Color={'white'}
      ></BlogSection>

      <DistinctiveSection DistinctiveData={distinctiveData}
        ID={'Distinctive'} Title={'The Distinctive Edge'} Desc={'With our track record of consistently delivering projects on schedule, we are recognizedas the trusted partner for implementation, migration and rollouts worldwide.'}
      >
      </DistinctiveSection>

      

      <ReviewSliderSection
        ID={"TESTIMONIALS"}
        Heading={"Delighted Customers Share their Successful Experiences"}
        Desc={'Discover how we have helped our customers to realize better results aligned with their business goals.'}
        Color="#ffffff"
        CardDataList={TESTIMONIAL_DATA}
        BGColor="#1D162B"
        SectionHeadingMaxWidth={'70%'}
      ></ReviewSliderSection>

      {/* Section--Case-Studies======================================================================= */}
      <CaseStudiesSection casestudy={CASE_STUDIES_DATA} csLayout={"2"} bgColor='#FFFFFF' />
      {/* End-Section--Case-Studies */}

      <TransformBusinessForm
        Title={"Start your implementation journey with us for seamless experience"}
        Desc={
          "Need expert guidance? Share your details in the form and let's make it happen!"
        }
      ></TransformBusinessForm>
    </>
  )

}

export default page;