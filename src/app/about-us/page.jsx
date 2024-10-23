"use client";
// import Review from "@/sections/review/Review";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import ReactFlagsSelect from "react-flags-select";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Navbar from "@/components/Navbar/Navbar";
import Announcement from "@/sections/announcement/Announcement";
import ContactBanner from "@/sections/contactBanner/ContactBanner";
import SectionWrapperNew from '@/components/SectionWrapperNew';
import Slider from "@/components/Slider";
import { SwiperSlide } from "swiper/react";
import { LinearGradient } from 'react-text-gradients';
import TransformBusinessForm from "@/sections/transformBusinessFrom/TransformBusinessFromSection";
import Dialog from "@/components/Dialog";
import { Timeline } from "@/components/ui/timeline";
import { title } from "process";

const ContactUs = () => {
  const [showModal1, setshowModal1] = useState(false);

  const GuidingPrinciples=[
    {id:1,title:'Purpose', desc:'Create Sustainable Value for our Stakeholders by connecting People and Technology.'},
    {id:2,title:'Vision', desc:'Be a world class provider of high-quality Information & Technology solutions.'},
    {id:3,title:'Value', desc:'Integrity,Responsiveness,Commitment, Teamwork'},
   
  ]

  const AWARD_DATA=[
    {id:1,Year:'2020', Name:'', desc:`Infor announced Godrej Infotech as 'Influential Partner of the year' for its outstanding contribution and partnership`},
    {id:2,Year:'2022', Name:'', desc:`Godrej Infotech achieved the renowned "Great Place to Work" certification for the year 2022-2023`},
    {id:3,Year:'2022', Name:'', desc:`Vaishali Victor Raj, our HR head, is named among India's Best People Leaders, this acknowledges her exceptional leadership and influence in the HR landscape`},
    {id:4,Year:'2023', Name:'', desc:`Affirming inclusivity, growth, and happiness, Godrej Infotech is proud to be Great Place to Work Certified, once again`},
    {id:5,Year:'2023', Name:'', desc:`Adjudged by Ernst & Young, the Official Tabulators, Economic Times Honors Godrej Infotech as ET Future ready Organization 2023-24`},
    {id:6,Year:'2024', Name:'', desc:`Solutions Partner designation in the Microsoft AI Cloud Partner Program`},
   
  ]

  const KeyPolicies_DATA=[
    {id:1,title:'Godrej Infotech',  desc:``},
    {id:2,title:'About Us', desc:``},
    {id:3,title:'Empowering Business Through Digital Transformation', desc:``},
    {id:4,title:'CRM, ERP, Cloud, AI & ML',  desc:``},
    
  ]
  
  const DATA_2021_Present = [
    {
      id: 1,
      Desc: `2023 - ET Future-ready Organization`
    },
    {
      id: 2,
      Desc: ` 2023 - Microsoft Solution Partner for Business Applications`
    },
    {
      id: 3,
      Desc: `2022 and 2023 - Great Place to Work Certified`
    },
    {
      id: 4,
      Desc: `2022 - Partnership with Hexagon`
    },
    {
      id: 5,
      Desc: `2021 - Partnership with Salesforce`
    }
  ]

  const DATA_2016_2020  = [
    {
      id: 1,
      Desc: `2020 - Partnership with UiPath India and Automation`
    },
    {
      id: 2,
      Desc: `2018 - Formation of Godrej Infotech Americas`
    },
    {
      id: 3,
      Desc: `2018 - Partnership with Oracle`
    },
    {
      id: 4,
      Desc: `2017 - Gold Competency for Microsoft Cloud`
    },
    {
      id: 5,
      Desc: `2017 - Co-Development Engagement with Infor`
    },
    {
      id:6,
      desc:`2016 - LS Retail Diamond Partner`
    }

  ]

  const DATA_2011_2015  = [
    {
      id: 1,
      Desc: `2015 - LS Retail Platinum Partner`
    },
    {
      id: 2,
      Desc: `2014 - Changed Belgium JV to Subsidiary`
    },
    {
      id: 3,
      Desc: `2014 - Formation of GISPL (Singapore)`
    },
    {
      id: 4,
      Desc: `2013 - Business Operations started in KSA`
    },
    {
      id: 5,
      Desc: `2012 - Infor-Winner of Golden Deal of the Year`
    },
    {
      id:6,
      desc:`2012 - Microsoft dynamics Reseller of the year`
    },
    { 
      id: 7,
      desc: '2011 - Best Partner for LS Retail'
    }

  ]

  const DATA_2005_2010  = [
    {
      id: 1,
      Desc: `2010 - Best partner for Discrete Manufacturing by Microsoft`
    },
    {
      id: 2,
      Desc: `2010 - Partnership with LS Retail`
    },
    {
      id: 3,
      Desc: `2009 - Microsoft Inner Circle Member Award`
    },
    {
      id: 4,
      Desc: `2009 - Formation of Godrej Infotech`
    },
    {
      id: 5,
      Desc: `2008 - Opened Office in Sharjah`
    },
    {
      id:6,
      desc:`2007 - Best Partner Award for Infor in Asia Pacific`
    },
    { 
      id: 7,
      desc: '2006 - Award for Microsoft President Club Member'
    }

  ]

  const DATA_1999_2004  = [
    {
      id: 1,
      Desc: `2004 - Partnership with Microsoft`
    },
    {
      id: 2,
      Desc: `2003 - Best Partner Award for Infor`
    },
    {
      id: 3,
      Desc: `1999 - Started BaaN (Infor ) Practice`
    },
    {
      id: 4,
      Desc: `1999 - Established Godrej Infotech`
    },
    {
      id: 5,
      Desc: `1971-1999 - IT Backbone for Godrej & Boyce since`
    }

  ]
  const data = [
    {
      title: "2021",
      content: (
      <>
      <div className="">
        <h2 className="text-[28px] font-semibold leading-[36px]">2021 - Present – Sustaining Holistic Excellence</h2>
        <div className="my-10">
          {DATA_2021_Present.map((item,index) => (
            <>
             <div className="flex py-4" key={index} style={{borderBottom:'1px solid #E4E4E4'}}>
            <span className="text-[20px] text-[#808080] mr-4">{}</span><p className="text-[20px] text-[#808080] mr-4 font-medium">{item.Desc}</p>
          </div>
            </>
          ))}
         
        </div>
      </div>
      </>
      ),
    },
    {
      title: "2016",
      content: (
        <>
      <div className="">
        <h2 className="text-[28px] font-semibold leading-[36px]">2016 – 2020 – Multi-faceted Accomplishments</h2>
        <div className="my-10">
          {DATA_2016_2020.map((item,index) => (
            <>
             <div className="flex py-4" key={index} style={{borderBottom:'1px solid #E4E4E4'}}>
            <span className="text-[20px] text-[#808080] mr-4">{}</span><p className="text-[20px] text-[#808080] mr-4 font-medium">{item.Desc}</p>
          </div>
            </>
          ))}
        </div>
      </div>
      </>
      ),
    },
    {
      title: "2011",
      content: (
        <>
         <div className="">
        <h2 className="text-[28px] font-semibold leading-[36px]">2011 - 2015 – A Triumphant Year</h2>
        <div className="my-10">
          {DATA_2011_2015.map((item,index) => (
            <>
             <div className="flex py-4" key={index} style={{borderBottom:'1px solid #E4E4E4'}}>
            <span className="text-[20px] text-[#808080] mr-4">{}</span><p className="text-[20px] text-[#808080] mr-4 font-medium">{item.Desc}</p>
          </div>
            </>
          ))}
        </div>
      </div>
        </>
      ),
    },
    {
      title: "2005",
      content: (
        <>
         <div className="">
        <h2 className="text-[28px] font-semibold leading-[36px]">2005 - 2010 – Prominent Honors</h2>
        <div className="my-10">
          {DATA_2005_2010.map((item,index) => (
            <>
             <div className="flex py-4" key={index} style={{borderBottom:'1px solid #E4E4E4'}}>
            <span className="text-[20px] text-[#808080] mr-4">{}</span><p className="text-[20px] text-[#808080] mr-4 font-medium">{item.Desc}</p>
          </div>
            </>
          ))}
        </div>
      </div>
        </>
      ),
    },
    {
      title: "1999",
      content: (
        <>
         <div className="">
        <h2 className="text-[28px] font-semibold leading-[36px]">1999 - 2004 – Inception of a Technology Powerhouse, Strategi</h2>
        <div className="my-10">
          {DATA_1999_2004.map((item, index) => (
            <>
             <div className="flex py-4" key={index} style={{borderBottom:'1px solid #E4E4E4'}}>
            <span className="text-[20px] text-[#808080] mr-4">{}</span><p className="text-[20px] text-[#808080] mr-4 font-medium">{item.Desc}</p>
          </div>
            </>
          ))}
        </div>
      </div>
        </>
      ),
    },
  ];

  return (
    <>
     <Dialog
        shouldShow={showModal1}
        onRequestClose={() => {
          setshowModal1((prev) => !prev);
        }}
        title={"dummy title"}
      >
        <h1>Dummy data</h1>
      </Dialog>
      {/* dialog end */}
      {/* Nav */}
      <Announcement />

      <div className={`relative z-[500]`}>
        <div className={`absolute w-full  `}>
          <Navbar theme="light" />
        </div>
      </div>

      <ContactBanner bannerImage={'/about/banner-bg.svg'} title={`Trusted Digital Transformation Partner for Global Enterprises`} desc={`Future-focused solutions and services for Digital Edge`} />

      {/* grow section  */}

      <SectionWrapperNew style={{ backgroundColor: "#fff" }}
        sectionHeading=""
        sectionDesc=""
        sectionTextColor='#000'
        sectionHeadingLayout="center"
      >
        <div className="flex flex-col justify-center items-center mb-16">
          <div className="w-full sm:w-1/2 text-center">
            <div className={`text-3xl sm:text-2xl md:text-[54px] font-semibold leading-tight md:leading-[64px] mb-6`}> <LinearGradient
              gradient={["to left", "#5F22D9 ,#E0028E"]}
              fallbackColor="black"
            >{'From Humble Beginnings to Leading Tech Hub'}</LinearGradient></div>
            <div className={`text-lg font-semibold `} >{'Inspiring Journey of Godrej Infotech'}</div>
          </div>
        </div>

        <div className="my-10">
        <Timeline data={data} />
        </div>

      </SectionWrapperNew>

      {/* end grow section */}

      {/* guiding section */}
      <SectionWrapperNew style={{ backgroundColor: "#000" }}
        sectionHeading="The Guiding Principles We Live By"
        sectionDesc={`Driven by our principles, we strive to make a difference in every we do, building value and enhancing growth.`}
        sectionTextColor='#fff'
        sectionHeadingLayout="center"
      >

        <Slider>
          {GuidingPrinciples.map((item, index) => (
            <SwiperSlide key={index}>
              <div class="p-6 bg-[transparent]">
                <div className="flex py-4" style={{ borderBottom: '1px solid #CDBAF3' }}>
                  <Image src={"about/whiteStar.svg"} width={30} height={30} alt={"hioasdo"} className="mr-4" />
                  <div className="text-[28px] text-white">{item.title}</div>
                </div>
                <p class="text-[20px] py-4 text-white">{item.desc}</p>
              </div>

            </SwiperSlide>
          ))}
        </Slider>

      </SectionWrapperNew>
      {/*end guiding section */}

      {/* hub of expertise */}
      <SectionWrapperNew style={{ backgroundColor: "#5F22D9" }}
        sectionHeading="Hub of Expertise"
        sectionDesc={`We are here to build an edge and bring technology brilliance with the finest in industry`}
        sectionTextColor='#fff'
        sectionHeadingLayout="horizontal"
      >

        <div className="grid grid-cols-4 gap-16 py-6">
          <div className="">
            <h1 className="text-[64px] font-[700] text-white">25<sup className="text-normal"></sup></h1>
            <p className="text-base font-medium text-[#EFE9FB]">Years in Business</p>
          </div>
          <div className="">
            <h1 className="text-[64px] font-[700] text-white">500<sup>+</sup></h1>
            <p className="text-base font-medium text-[#EFE9FB]">Customers Worldwide</p>
          </div>
          <div className="">
            <h1 className="text-[64px] font-[700] text-white">15k<sup>+</sup></h1>
            <p className="text-base font-medium text-[#EFE9FB]">Man years of Experience</p>
          </div>
          <div className="">
            <h1 className="text-[64px] font-[700] text-white">1000<sup>+</sup></h1>
            <p className="text-base font-medium text-[#EFE9FB]">Implementation Sites</p>
          </div>
        </div>

      </SectionWrapperNew>
      {/* end hub of expertise */}

      {/* visionary minds  */}
      <SectionWrapperNew style={{ backgroundColor: "#fff" }}
        sectionHeading="Introducing Idealistic Minds of Godrej Infotech "
        sectionDesc={`Guided by a strategic vision and a commitment to placing people at the forefront, our leadership team places paramount importance on the well-being and professional growth of every team member, steering the company towards a trajectory of sustained success.`}
        sectionTextColor='#000'
        sectionHeadingLayout="center"
      >
      </SectionWrapperNew>
      {/* end visionary minds  */}

      <SectionWrapperNew style={{ backgroundColor: "#FCE6F4", position: 'relative' }}
        sectionHeading=""
        sectionDesc=""
        sectionTextColor='#000'
        sectionHeadingLayout="left"
      >
        <div class="grid grid-cols-2 gap-4">
          <div>
            <h3 className="text-[54px] leading-[64px] font-semibold mb-3">Ajay Pimparkar</h3>
            <p className="text-[#808080] text-[32px] mb-6">Chief Executive Officer</p>

            <div className="text-[20px] text-[#1D162B] font-medium mb-10">
              {`Mr. Ajay Pimparkar is the IT veteran and strategic visionary of our company, who has transformed Godrej Group's technology landscape for over 30 Years. His role has reinforced our IT infrastructure and enabled us to perform at the forefront of digital innovation, driving operational efficiency and enriching customer experience.`}
            </div>
            <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Read more</button>
          </div>
          <div>
            <Image src="about/pimp.svg" width={500} height={500} alt={'pimp'} className="absolute right-[8%] bottom-0" />
          </div>
        </div>
      </SectionWrapperNew>

      {/* joy at work section */}
      <SectionWrapperNew style={{ backgroundColor: "#000" }}
        sectionHeading="Unleashing Joy at Work"
        sectionDesc={`Discover the heartwarming stories of our employees as they reveal their joyful experiences at work. From moments of triumph to instances of camaraderie, their testimonials showcase a workplace`}
        sectionTextColor='#fff'
        sectionHeadingLayout="center"
      >
        <Slider>
          {[1, 2, 3, 4]?.map((item, index) => (
            <SwiperSlide key={index}>
              <div class="p-8 rounded-3xl shadow" style={{ border: '1px solid #B599EE' }}>
                <div className="text-[16px] font-[700] text-[#EFE9FB] leading-[24px] mb-5">{`“Supportive senior management, excellent work culture, exposure to next-generation “`}</div>
                <h5 class="mb-5 text-[16px] font-[400] text-[#EFE9FB]">{`I am proud to work with this dynamic organization for a decade. I always have had the opportunity to work with remarkable clients, recommending and implementing innovative technology solutions.`}</h5>

                <div className="flex">
                  <div className="mr-4">
                    <Image src={'about/reviewImage.svg'} width={50} height={50} alt="img" />
                  </div>

                  <div>
                    <h6 className="text-[16px] font-[700] mb-1 text-white">Tejas Bhanushali</h6>
                    <p className="text-[16px] text-white">Chief Manager Finance and Accounts</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Slider>

      </SectionWrapperNew>
      {/*end joy work section */}

      {/* awards section */}
      <SectionWrapperNew style={{ backgroundColor: "#fff" }}
        sectionHeading={`Awards AND Recognition `}
        sectionDesc={`Our work culture and commitment has helped us to earn credible achievements. It is the Kaizen attitude that we infuse at every level which consistently strengthens our organisation performance.`}
        sectionTextColor='#000'
        sectionHeadingLayout="horizontal"
      >



        <div class="relative overflow-x-auto">
          <table class="w-full text-sm text-left rtl:text-right">
            <thead class="text-xs text-gray-700 uppercase bg-white">
            </thead>
            <tbody>
              {AWARD_DATA.map((item, index) => (
                <tr class="bg-white border-b " key={index}>
                  <th scope="row" class="px-6 py-4 font-semibold text-[#000] text-[20px] whitespace-nowrap">
                    {item.Year}
                  </th>
                  <td class="px-6 py-4 text-[20px] font-semibold">
                    {}
                  </td>
                  <td class="px-6 py-4 text-[20px]">
                    {item.desc}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>



      </SectionWrapperNew>
      {/* end awards section */}

      {/* key policy section */}
      <SectionWrapperNew
        sectionHeading="Key Policies and Updates"
        sectionDesc=""
        sectionTextColor='#000'
        sectionHeadingLayout="left"
      >

        <Slider slidesPerView={'4'}>
          {KeyPolicies_DATA.map((item, index) => (
            <SwiperSlide key={index}>
              <div class="p-8 rounded-3xl shadow " style={{ border: '1px solid #d3d3d3' }}>
                  <h6 className="text-[20px] font-semibold mb-6">{item.title}</h6>
                  <p className="text-[16px] mb-[92px]">{}</p>
                  <div className="flex justify-end">
                    <Image src="/about/chevron-right.png" width={25} height={25} alt="che" onClick={() => setshowModal1((prev) => !prev)} style={{cursor:'pointer'}}/>
                  </div>
              </div>
            </SwiperSlide>
          ))}
        </Slider>


      </SectionWrapperNew>
      {/* end key policy section */}

      <TransformBusinessForm
        Title={"Transform your Business with Us"}
        Desc={
          "Let us discuss how can we help you with rapid growth."
        }
      ></TransformBusinessForm>
    </>
  );
};

export default ContactUs;
