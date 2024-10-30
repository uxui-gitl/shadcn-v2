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
  const [showModal2, setshowModal2] = useState(false);
  const [showModal3, setshowModal3] = useState(false);
  const [showModal4, setshowModal4] = useState(false);

  const GuidingPrinciples=[
    {id:1,title:'Purpose', desc:'Create Sustainable Value for our Stakeholders by connecting People and Technology.'},
    {id:2,title:'Vision', desc:'Be a world class provider of high-quality Information & Technology solutions.'},
    {id:3,title:'Value', desc:'Integrity, Responsiveness, Commitment, Teamwork'},
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
    {id:1,title:'Statutory Report',  Desc:`Dummy Text. Dummy Text.`},
    {id:2,title:'Corporate Policies', Desc:`Dummy Text. Dummy Text.`},
    {id:3,title:'CSR Updates', Desc:`Dummy Text. Dummy Text.`},
    {id:4,title:'Statutory Updates',  Desc:`Dummy Text. Dummy Text.`},
    
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
      Desc:`2016 - LS Retail Diamond Partner`
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
      Desc:`2012 - Microsoft dynamics Reseller of the year`
    },
    { 
      id: 7,
      Desc: '2011 - Best Partner for LS Retail'
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
      Desc:`2007 - Best Partner Award for Infor in Asia Pacific`
    },
    { 
      id: 7,
      Desc: '2006 - Award for Microsoft President Club Member'
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
        <h2 className="text-[28px] font-semibold leading-[36px]">2021 - Present - Sustaining Holistic Excellence</h2>
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
        <h2 className="text-[28px] font-semibold leading-[36px]">2016 - 2020 - Multi-faceted Accomplishments</h2>
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
        <h2 className="text-[28px] font-semibold leading-[36px]">2011 - 2015 - A Triumphant Year</h2>
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
        <h2 className="text-[28px] font-semibold leading-[36px]">1999 - 2004 - Inception of a Technology Powerhouse, Strategi</h2>
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
        title={"Statutory Report"}
      >
        <div>
    <div class="">
    <ul>
    <li class="flex items-start py-6 border-b w-full text-[20px] text-[#808080]">
        <span className="mx-12">2023-2024</span>
        <ul>
            <li className="pb-4"><a href="assets/pdf/statutoryUpdate/statutoryReport/TranscriptAGMofGITL2023-24.pdf"
                    target="_blank">Transcript
                    of
                    the Annual General Meeting held on 25th July, 2024</a></li>
            <li className="pb-4"><a href="assets/pdf/statutoryUpdate/statutoryReport/Notice_27th_AGM_GITL.pdf"
                    target="_blank">Notice
                    of 27th
                    Annual
                    General Meeting to be held on Thursday, 25th July, 2024</a></li>
            <li className="pb-4"><a href="assets/pdf/statutoryUpdate/statutoryReport/MGT-7.pdf" target="_blank">Draft
                    Annual Return:
                    Form MGT-7-
                    FY 2023-24</a></li>
        </ul>
    </li>

    <li class="flex items-start py-6 border-b w-full text-[20px] text-[#808080]">
        <span className="mx-12">2022-2023</span>
        <ul>
            <li className="pb-4"><a href="assets/pdf/statutoryUpdate/statutoryReport/Transcript-AGM-4-July-2023.pdf"
                    target="_blank">Transcript of the Annual General Meeting held on 4th July, 2023</a></li>

            <li className="pb-4"><a href="assets/pdf/statutoryUpdate/statutoryReport/AnnualReturnFY2022-23.pdf"
                    target="_blank">Annual Return for FY 2022-23</a></li>

            <li className="pb-4"><a href="assets/pdf/statutoryUpdate/statutoryReport/AnnualReportAccountsFY2022-23.pdf"
                    target="_blank">Notice of Annual General Meeting for FY 2022-23</a></li>


        </ul>
    </li>

    <li class="flex items-start py-6 border-b w-full text-[20px] text-[#808080]">
        <span className="mx-12">2021-2022</span>
        <ul>
            <li className="pb-4"><a href="assets/pdf/statutoryUpdate/statutoryReport/AGM-2021-22.pdf"
                    target="_blank">Transcript of the Annual
                    General Meeting held on 2nd August 2022</a></li>

            <li className="pb-4"><a href="assets/pdf/statutoryUpdate/statutoryReport/AnnualReturnFY2021-22.pdf"
                    target="_blank">Annual Return for
                    FY 2021-22</a></li>

            <li className="pb-4"><a href="assets/pdf/statutoryUpdate/statutoryReport/NoticeAndAnnualReport2021-22.pdf"
                    target="_blank">Notice and
                    Annual Report for FY 2021-22</a></li>
        </ul>
    </li>

    <li class="flex items-start py-6 border-b w-full text-[20px] text-[#808080]">
        <span className="mx-12">2020-2021</span>
        <ul>
            <li className="pb-4"><a href="assets/pdf/statutoryUpdate/statutoryReport/AnnualReturnFY2020-21.pdf"
                    target="_blank">Annual Return for FY 2020-21</a></li>

            <li className="pb-4"><a
                    href="assets/pdf/statutoryUpdate/statutoryReport/TranscriptAnnualGeneralMeeting-21Jun2021.pdf"
                    target="_blank">Transcript of the Annual General Meeting held on 21st June, 2021</a></li>

            <li className="pb-4"><a href="assets/pdf/statutoryUpdate/statutoryReport/NoticeAndAnnualReport2020-21.pdf"
                    target="_blank">Notice and Annual Report for FY 2020-21</a></li>
        </ul>
    </li>
    <li class="flex items-start py-6 border-b w-full text-[20px] text-[#808080]">
        <span className="mx-12">2019-2020</span>
        <ul>
            <li className="pb-4"><a href="assets/pdf/statutoryUpdate/statutoryReport/AnnualReport-2019-20.pdf"
                    target="_blank">Notice and Annual Report for FY 2019-20</a></li>

            <li className="pb-4"><a href="assets/pdf/statutoryUpdate/statutoryReport/AnnualReturn-2019-20.pdf"
                    target="_blank">Extract of Annual Return in Form MGT-9 for FY 2019-20</a></li>

        </ul>
    </li>
    <li class="flex items-start py-6 border-b w-full text-[20px] text-[#808080]">
        <span className="mx-12">2018-2019</span>
        <ul>
            <li className="pb-4"><a href="assets/pdf/statutoryUpdate/statutoryReport/AGM2018-19.pdf"
                    target="_blank">Notice of Annual General Meeting for FY 2018-19</a></li>

            <li className="pb-4"><a href="assets/pdf/statutoryUpdate/statutoryReport/AnnualReturn-2018-19.pdf"
                    target="_blank">Annual Return for FY 2018-19</a></li>
        </ul>
    </li>
    <li class="flex items-start py-6 border-b w-full text-[20px] text-[#808080]">
        <span className="mx-12">2017-2018</span>
        <ul>
            <li className="pb-4"><a href="assets/pdf/statutoryUpdate/statutoryReport/AGM-2018.pdf"
                    target="_blank">Notice of Annual General Meeting for FY 2017-18</a></li>

        </ul>
    </li>
</ul>

</div>
</div>
      </Dialog>


<Dialog
        shouldShow={showModal2}
        onRequestClose={() => {
          setshowModal2((prev) => !prev);
        }}
        title={"Corporate Policies"}
      >
        <div>
    <div class="">
        <ol>
            
            <li class="flex items-start py-6 border-b w-full text-[20px] text-[#808080]">
              <h3 className="mx-6"><a href="assets/pdf/corporatePolicies/Affirmative_Action_Policy.pdf" target="_blank">Affirmation Action</a></h3>
            </li>
             <li class="flex items-start py-6 border-b w-full text-[20px] text-[#808080]">
                <h3 className="mx-6"><a href="assets/pdf/corporatePolicies/ABAC.pdf" target="_blank">Anti-Bribery and Anti-Corruption</a>3</h3>
            </li>
             <li class="flex items-start py-6 border-b w-full text-[20px] text-[#808080]">
              <h3 className="mx-6"><a href="assets/pdf/corporatePolicies/ethics.pdf" target="_blank">Code of Ethics and Business Conduct</a></h3>
            </li>
            <li class="flex items-start py-6 border-b w-full text-[20px] text-[#808080]">
              <h3 className="mx-6"><a href="assets/pdf/corporatePolicies/Corporate-Environmental-Policy.pdf" target="_blank">Corporate
                Environmental Policy</a></h3>
            </li>
             <li class="flex items-start py-6 border-b w-full text-[20px] text-[#808080]">
              <h3 className="mx-6"><a href="assets/pdf/corporatePolicies/Fraud-Investigation-Guidelines.pdf" target="_blank">Fraud
                Investigation Guidelines</a></h3>
            </li>
             <li class="flex items-start py-6 border-b w-full text-[20px] text-[#808080]">
              <h3 className="mx-6"><a href="assets/pdf/corporatePolicies/HIV_AIDS_Policy.pdf" target="_blank">HIV/ AIDS</a></h3>
            </li>
            <li class="flex items-start py-6 border-b w-full text-[20px] text-[#808080]">
              <h3 className="mx-6"><a href="assets/pdf/corporatePolicies/NRC-Policy.pdf" target="_blank">Nomination and Remuneration
                Policy</a></h3>
            </li>
            <li class="flex items-start py-6 border-b w-full text-[20px] text-[#808080]">
              <h3 className="mx-6">
                <a href="assets/pdf/corporatePolicies/sexualHarassment.pdf" target="_blank">Prevention of Sexual Harassment
                at Workplace</a>
              </h3>
            </li>
            <li class="flex items-start py-6 border-b w-full text-[20px] text-[#808080]">
              <h3 className="mx-6"><a href="assets/pdf/corporatePolicies/Social-Media-Policy.pdf" target="_blank">Social Media Policy</a></h3>
            </li>
            <li class="flex items-start py-6 border-b w-full text-[20px] text-[#808080]">
              <h3 className="mx-6"><a href="assets/pdf/corporatePolicies/Whistle-blower.pdf" target="_blank">Whistle Blower</a></h3>
            </li>
        </ol>
        
    </div>
</div>
      </Dialog>

      <Dialog
        shouldShow={showModal3}
        onRequestClose={() => {
          setshowModal3((prev) => !prev);
        }}
        title={"CSR Update"}
      >
        <div>
    <div class="">
        <div>
          <ul>
            <li class="flex items-start py-6 border-b w-full text-[20px] text-[#808080]">
              <h3 className="mx-6 font-bold">CSR Initiatives</h3>
            </li>
            <li class="flex items-start py-6 border-b w-full text-[20px] text-[#808080]">
              <h3 className="mx-6"><a href="assets/pdf/corporatePolicies/CSR.pdf" target="_blank">CSR policy</a></h3>
            </li>
            <li class="flex items-start py-6 border-b w-full text-[20px] text-[#808080]">
              <h3 className="mx-6"><a href="assets/pdf/corporatePolicies/CSR23-24.pdf" target="_blank">CSR Action Plan FY 2023-24</a></h3>
            </li>
            <li class="flex items-start py-6 border-b w-full text-[20px] text-[#808080]">
              <h3 className="mx-6"><a href="assets/pdf/corporatePolicies/CSR22-23.pdf" target="_blank">CSR Action Plan FY 2022-23 </a></h3>
            </li>
            <li class="flex items-start py-6 border-b w-full text-[20px] text-[#808080]">
              <h3 className="mx-6"><a href="assets/pdf/corporatePolicies/CSR21-22.pdf" target="_blank">CSR Action Plan FY 2021-22 </a></h3>
            </li>
            <li class="flex items-start py-6 border-b w-full text-[20px] text-[#808080]">
              <h3 className="mx-6"><a href="assets/pdf/corporatePolicies/CSR20-21.pdf" target="_blank">CSR Action Plan FY 2020-21 </a></h3>
            </li>
          </ul>

          <ul>
            <li class="flex items-start mt-10 py-6 border-b w-full text-[20px] text-[#808080]">
              <h3 className="mx-6 font-bold">CSR Commitee</h3>
            </li>
            <li class="flex items-start py-6 border-b w-full text-[20px] text-[#808080]">
              <h3 className="mx-6">Mrs. Nyrika Holkar, Chairperson</h3>
            </li>
            <li class="flex items-start py-6 border-b w-full text-[20px] text-[#808080]">
              <h3 className="mx-6">Mr. P. E. Fouzdar, Member</h3>
            </li>
             <li class="flex items-start py-6 border-b w-full text-[20px] text-[#808080]">
              <h3 className="mx-6">Mr. V. R. Mehta, Member</h3>
            </li>
          </ul>

        </div>

        
    </div>
</div>
      </Dialog>

      <Dialog
        shouldShow={showModal4}
        onRequestClose={() => {
          setshowModal4((prev) => !prev);
        }}
        title={"Statutoty Updates"}
      >
        <div>
    <div class="">
        <ol>
            
            <li class="flex items-start py-6 border-b w-full text-[20px] text-[#808080]">
              <h3 className="mx-6"><a href="assets/pdf/statutoryUpdate/TNC-appoint-Independent-Directors.pdf"
                target="_blank">Terms &amp; Conditions of appointment of Independent Directors</a></h3>
            </li>
             <li class="flex items-start py-6 border-b w-full text-[20px] text-[#808080]">
                <h3 className="mx-6"><a href="assets/pdf/statutoryUpdate/Notice-of-Candidature-Parpia.pdf"
                target="_blank">Notice of Candidature of Mr. M. M. Parpia</a></h3>
            </li>
             <li class="flex items-start py-6 border-b w-full text-[20px] text-[#808080]">
              <h3 className="mx-6"><a href="assets/pdf/statutoryUpdate/Notice-of-Candidature-Movdawalla.pdf"
                target="_blank">Notice of Candidature of Mr. P. P. Movdawalla</a></h3>
            </li>
            <li class="flex items-start py-6 border-b w-full text-[20px] text-[#808080]">
              <h3 className="mx-6"><a href="assets/pdf/statutoryUpdate/Notice-of-Candidature-Mehta.pdf"
                target="_blank">Notice of Candidature of Mr. V. R. Mehta</a></h3>
            </li>
             <li class="flex items-start py-6 border-b w-full text-[20px] text-[#808080]">
              <h3 className="mx-6">Dr. K. A. Palia ceased to be a Director of the Company with effect from 10th May, 2023</h3>
            </li>
             <li class="flex items-start py-6 border-b w-full text-[20px] text-[#808080]">
              <h3 className="mx-6">Mr. K. K. Dastur ceased to a Director of the Company with effect from 10th May, 2023</h3>
            </li>
            <li class="flex items-start py-6 border-b w-full text-[20px] text-[#808080]">
              <h3 className="mx-6">Mr. S. N. Irani ceased to be a Director of the Company with effect from 25th July 2022</h3>
            </li>
            <li class="flex items-start py-6 border-b w-full text-[20px] text-[#808080]">
              <h3 className="mx-6">
                The Register of Members and Share Transfer Books of the Company will remain closed from
            Monday, 18th July 2022 to Tuesday, 2nd August 2022 (both days inclusive). All persons whose names are
            recorded in the Register of Members maintained by the Company/Depositories as on the cut-off date, i.e.
            Friday, 15th July, 2022 only shall be entitled to attend and vote at the Annual General Meeting.
              </h3>
            </li>
           
        </ol>
        
    </div>
</div>
      </Dialog>

      {/* dialog end */}
      {/* Nav */}
      <Announcement />

      <div className={`relative z-[500]`}>
        <div className={`absolute w-full`}>
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
