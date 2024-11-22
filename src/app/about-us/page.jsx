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
import SectionWrapperNew from "@/components/SectionWrapperNew";
import Slider from "@/components/Slider";
import { SwiperSlide } from "swiper/react";
import { LinearGradient } from "react-text-gradients";
import TransformBusinessForm from "@/sections/transformBusinessFrom/TransformBusinessFromSection";
import Dialog from "@/components/Dialog";
import { Timeline } from "@/components/ui/timeline";
import { title } from "process";
import NewNavBar from "@/components/NewNavBar";

const ContactUs = () => {
  const [showModal1, setshowModal1] = useState(false);
  const [businessItem, setBusinessItem] = useState([]);

  const [showModal2, setshowModal2] = useState(false);
  const [readMoreItem, setReadMoreItem] = useState([]);

  const CSUITE_DATA = [
    // {id:1, title:'Co-creative Work Environment', desc:'Leverage collective excellence in an ecosystem where different perspectives converge to drive innovation', bgImageUrl:'', bgColor:'#5F22D9'},
    {
      id: 1,
      name: "Ajay Pimparkar",
      designation: "Chief Executive Officer",
      shortDesc: `Mr. Ajay Pimparkar is the IT veteran and strategic visionary of our company`,
      longDesc: `
      <p>Mr. Ajay Pimparkar is the IT veteran and strategic visionary of our company, who has transformed Godrej Group's technology landscape for over 30 Years. His role has reinforced our IT infrastructure and enabled us to perform at the forefront of digital innovation, driving operational efficiency and enriching customer experience. </p>
      <p className="mt-4">Mr. Ajay Pimparkar's association with the Godrej Group started way back in the 1980's. He has been responsible for preparing and implementing the complete Information Technology roadmap for the various businesses in tune with the Strategic Business Plan of the organization. With this vast IT experience behind him, Mr. Pimparkar today heads Godrej Infotech Ltd. which is a vibrant and dynamic organization committed to continual progress and forging ahead on the path of success. His primary objective is to accomplish the mission of Godrej Infotech Ltd., which is to be a world class provider of high-quality information technology solutions. </p>
      <p className="mt-4">A humble and down-to-earth person, with a firm yet understanding leadership style, Mr. Pimparkar is looked up to by each member of the Godrej family. A core technologist at heart, he ensures that GITL progresses on its chosen path without compromising on the values of Integrity, Responsiveness, Commitment and Teamwork. </p>
      <p className="mt-4">An Engineering graduate from the College of Engineering (Pune), he is focused on the organization's growth by continuously improving products, services and processes, developing people, deploying new technologies and working closely with customers. </p>
      `,

      bgImageUrl: "/about/managementPics/AP.webp",
      bgColor: "#7B014E",
    },
    {
      id: 2,
      name: "Ashwin Mistry",
      designation: "Vice President - IT",
      shortDesc: ``,
      longDesc: `
      <p>Mr. Ashwin Mistry brings forth more than 30 years of valuable experience in the IT industry to our team. With two decades dedicated to ERP implementation, his proficiency blazes in the Discrete and Project manufacturing sectors. </p>
      <p className="mt-4">In his extensive professional journey, Mr. Mistry has successfully managed ERP projects, both within the domestic and international market space, for Infor and SAP.</p>
      <p className="mt-4">He plays a key role in strategizing, planning, executing and supporting numerous IT and digital transformation drives across all Business Units of Godrej & Boyce.</p>
      <p className="mt-4">As a Computer Engineer from Mumbai University and an MBA graduate in Retail Management from NIMS, Mr. Mistry currently serves as the 'Head of IT Consulting & Special Projects' at Godrej Infotech, bringing his wealth of experience to our dynamic team. </p>
      `,

      bgImageUrl: "/about/managementPics/AshwinM.webp",
      bgColor: "#7B014E",
    },
    {
      id: 3,
      name: "Kingshuk Chatterjee",
      designation: "VP, External Business",
      shortDesc: ``,
      longDesc: `
      <p>Mr. Kingshuk Chatterjee stands as a testament to transformative leadership, boasting three decades of diverse expertise that spans Manufacturing, Advertising, Branding and Information Technology. A trailblazer with a proven track record, he drives organizational change, crafts iconic brands and brokers landmark deals with ease. </p>
      <p className="mt-4">Mr. Chatterjee's innovative prowess has streamlined Procurement, Manufacturing and Logistics, yielding impressive efficiencies. As Global Head - External Business, he charts Godrej Infotech Ltd.'s strategic expansion, blazing trails in established and emerging markets. His impact resonates far beyond the bottom line, shaping culture, fostering collaboration and inspiring innovation. </p>
      <p className="mt-4">A University of Calcutta alumnus, Mr. Chatterjee's academic foundation in Business Administration and Commerce paved the way for his remarkable success. Throughout his illustrious career, he has consistently demonstrated exceptional leadership, strategic flair, and an unwavering commitment to excellence. </p>
      `,

      bgImageUrl: "/about/managementPics/KC.webp",
      bgColor: "#7B014E",
    },
    {
      id: 4,
      name: "Samik Bandyopadhyay",
      designation: "Finance Head",
      shortDesc: ``,
      longDesc: `
      Mr. Samik Bandyopadhyay is a charted accountant with over 23 years of experience in financial control, strategic planning and reporting. Mr. Bandyopadhyay has hands on experience in managing Indirect taxation compliance, Service tax issues and EA 2000 audit. He has had a fair amount of experience interacting with the overseas clients for business deals. His experience encompasses various crucial financial aspects like monitoring the revenue earnings and foreign exchange, cost analysis, budgeting, Implementation & supervision of the internal control systems, complying requirements of audit, payroll management and tax assessment and dealing with Income Tax, Service Tax, P.F. matters and attending respective assessments. 
      `,

      bgImageUrl: "/about/managementPics/Samik.webp",
      bgColor: "#7B014E",
    },
    {
      id: 4,
      name: "Vaishali Raj",
      designation: "VP, Human Resource",
      shortDesc: `Mr. Ajay Pimparkar is the IT veteran and strategic visionary of o`,
      longDesc: `
      <p>She has been an instrumental force in driving strategic decisions for seamlessly integrating people and technology. 
Throughout her illustrious career, Ms. Raj has consistently demonstrated leadership excellence. Joining Godrej Group as a Management Trainee, she quickly excelled in Industrial Relations and Human Resources for Godrej & Boyce's Precision Equipment Division. Subsequent roles as Head of Recruitment (2000) and Head HRD for Godrej Infotech (2003) solidified her reputation as a strategic thinker and inspirational leader.</p>
      <p>Ms. Raj's impact extends beyond organizational boundaries. Her commitment to corporate social responsibility, synergy development and brand awareness has created lasting value. As a respected industry expert, she influences stakeholders, builds effective relationships and encourages innovative thinking.</p>
      <p>A proud Xavierite, Ms. Raj holds degrees in MLS and LLB. An avid reader and aesthete, she balances professionalism with a passion for life. Her love for literature and the arts reflects her nuanced understanding of human experience.</p>
`,

      bgImageUrl: "/about/managementPics/Vaishali.webp",
      bgColor: "#7B014E",
    },
  ];

  const GuidingPrinciples = [
    {
      id: 1,
      title: "Purpose",
      desc: "Create Sustainable Value for our Stakeholders by connecting People and Technology.",
      icon: "/about/Purpose.svg",
    },
    {
      id: 2,
      title: "Vision",
      desc: "Be a world class provider of high-quality Information & Technology solutions.",
      icon: "/about/Vision.svg",
    },
    {
      id: 3,
      title: "Value",
      desc: "Integrity, Responsiveness, Commitment, Teamwork",
      icon: "/about/Value.svg",
    },
  ];

  const AWARD_DATA = [
    {
      id: 1,
      Year: "2020",
      Name: "Influential Partner",
      desc: `Infor announced Godrej Infotech as 'Influential Partner of the year' for its outstanding contribution and partnership`,
    },
    {
      id: 2,
      Year: "2022",
      Name: "Great Place to Work",
      desc: `Godrej Infotech achieved the renowned "Great Place to Work" certification for the year 2022-2023`,
    },
    {
      id: 3,
      Year: "2022",
      Name: "India's Best People Leaders",
      desc: `Vaishali Victor Raj, our HR head, is named among India's Best People Leaders, this acknowledges her exceptional leadership and influence in the HR landscape`,
    },
    {
      id: 4,
      Year: "2023",
      Name: "Great Place to Work",
      desc: `Affirming inclusivity, growth, and happiness, Godrej Infotech is proud to be Great Place to Work Certified, once again`,
    },
    {
      id: 5,
      Year: "2023",
      Name: "ET Future ready Organization",
      desc: `Adjudged by Ernst & Young, the Official Tabulators, Economic Times Honors Godrej Infotech as ET Future ready Organization 2023-24`,
    },
    {
      id: 6,
      Year: "2024",
      Name: "AI Cloud Partner",
      desc: `Solutions Partner designation in the Microsoft AI Cloud Partner Program`,
    },
  ];

  const KeyPolicies_DATA = [
    {
      id: 1,
      title: "Statutory Report",
      Desc: `A legally required document detailing a company's financial and operational compliance.`,
      rawData: ` <ul>
              <li class="flex items-start py-2 border-b w-full text-base text-neutral-darkest-grey">
                <span class="mx-12">2023-2024</span>
                <ul>
                  <li class="pb-2"><a href="assets/pdf/statutoryUpdate/statutoryReport/TranscriptAGMofGITL2023-24.pdf"
                    target="_blank">Transcript
                    of
                    the Annual General Meeting held on 25th July, 2024</a></li>
                  <li class="pb-2"><a href="assets/pdf/statutoryUpdate/statutoryReport/Notice_27th_AGM_GITL.pdf"
                    target="_blank">Notice
                    of 27th
                    Annual
                    General Meeting to be held on Thursday, 25th July, 2024</a></li>
                  <li class="pb-2"><a href="assets/pdf/statutoryUpdate/statutoryReport/MGT-7.pdf" target="_blank">Draft
                    Annual Return:
                    Form MGT-7-
                    FY 2023-24</a></li>
                </ul>
              </li>

              <li class="flex items-start py-2 border-b w-full text-base text-neutral-darkest-grey">
                <span class="mx-12">2022-2023</span>
                <ul>
                  <li class="pb-2"><a href="assets/pdf/statutoryUpdate/statutoryReport/Transcript-AGM-4-July-2023.pdf"
                    target="_blank">Transcript of the Annual General Meeting held on 4th July, 2023</a></li>

                  <li class="pb-2"><a href="assets/pdf/statutoryUpdate/statutoryReport/AnnualReturnFY2022-23.pdf"
                    target="_blank">Annual Return for FY 2022-23</a></li>

                  <li class="pb-2"><a href="assets/pdf/statutoryUpdate/statutoryReport/AnnualReportAccountsFY2022-23.pdf"
                    target="_blank">Notice of Annual General Meeting for FY 2022-23</a></li>


                </ul>
              </li>

              <li class="flex items-start py-2 border-b w-full text-base text-neutral-darkest-grey">
                <span class="mx-12">2021-2022</span>
                <ul>
                  <li class="pb-2"><a href="assets/pdf/statutoryUpdate/statutoryReport/AGM-2021-22.pdf"
                    target="_blank">Transcript of the Annual
                    General Meeting held on 2nd August 2022</a></li>

                  <li class="pb-2"><a href="assets/pdf/statutoryUpdate/statutoryReport/AnnualReturnFY2021-22.pdf"
                    target="_blank">Annual Return for
                    FY 2021-22</a></li>

                  <li class="pb-2"><a href="assets/pdf/statutoryUpdate/statutoryReport/NoticeAndAnnualReport2021-22.pdf"
                    target="_blank">Notice and
                    Annual Report for FY 2021-22</a></li>
                </ul>
              </li>

              <li class="flex items-start py-2 border-b w-full text-base text-neutral-darkest-grey">
                <span class="mx-12">2020-2021</span>
                <ul>
                  <li class="pb-2"><a href="assets/pdf/statutoryUpdate/statutoryReport/AnnualReturnFY2020-21.pdf"
                    target="_blank">Annual Return for FY 2020-21</a></li>

                  <li class="pb-2"><a
                    href="assets/pdf/statutoryUpdate/statutoryReport/TranscriptAnnualGeneralMeeting-21Jun2021.pdf"
                    target="_blank">Transcript of the Annual General Meeting held on 21st June, 2021</a></li>

                  <li class="pb-2"><a href="assets/pdf/statutoryUpdate/statutoryReport/NoticeAndAnnualReport2020-21.pdf"
                    target="_blank">Notice and Annual Report for FY 2020-21</a></li>
                </ul>
              </li>
              <li class="flex items-start py-2 border-b w-full text-base text-neutral-darkest-grey">
                <span class="mx-12">2019-2020</span>
                <ul>
                  <li class="pb-2"><a href="assets/pdf/statutoryUpdate/statutoryReport/AnnualReport-2019-20.pdf"
                    target="_blank">Notice and Annual Report for FY 2019-20</a></li>

                  <li class="pb-2"><a href="assets/pdf/statutoryUpdate/statutoryReport/AnnualReturn-2019-20.pdf"
                    target="_blank">Extract of Annual Return in Form MGT-9 for FY 2019-20</a></li>

                </ul>
              </li>
              <li class="flex items-start py-2 border-b w-full text-base text-neutral-darkest-grey">
                <span class="mx-12">2018-2019</span>
                <ul>
                  <li class="pb-2"><a href="assets/pdf/statutoryUpdate/statutoryReport/AGM2018-19.pdf"
                    target="_blank">Notice of Annual General Meeting for FY 2018-19</a></li>

                  <li class="pb-2"><a href="assets/pdf/statutoryUpdate/statutoryReport/AnnualReturn-2018-19.pdf"
                    target="_blank">Annual Return for FY 2018-19</a></li>
                </ul>
              </li>
              <li class="flex items-start py-2 border-b w-full text-base text-neutral-darkest-grey">
                <span class="mx-12">2017-2018</span>
                <ul>
                  <li class="pb-2"><a href="assets/pdf/statutoryUpdate/statutoryReport/AGM-2018.pdf"
                    target="_blank">Notice of Annual General Meeting for FY 2017-18</a></li>

                </ul>
              </li>
            </ul>
      `,
    },
    {
      id: 2,
      title: "Corporate Policies",
      Desc: `Dummy Text. Dummy Text.`,
      rawData: ` <ol>
              <li class="flex items-start py-2 border-b w-full text-base text-neutral-darkest-grey">
                <h3 class=""><a href="assets/pdf/corporatePolicies/Affirmative_Action_Policy.pdf" target="_blank">Affirmation Action</a></h3>
              </li>
              <li class="flex items-start py-2 border-b w-full text-base text-neutral-darkest-grey">
                <h3 class=""><a href="assets/pdf/corporatePolicies/ABAC.pdf" target="_blank">Anti-Bribery and Anti-Corruption</a>3</h3>
              </li>
              <li class="flex items-start py-2 border-b w-full text-base text-neutral-darkest-grey">
                <h3 class=""><a href="assets/pdf/corporatePolicies/ethics.pdf" target="_blank">Code of Ethics and Business Conduct</a></h3>
              </li>
              <li class="flex items-start py-2 border-b w-full text-base text-neutral-darkest-grey">
                <h3 class=""><a href="assets/pdf/corporatePolicies/Corporate-Environmental-Policy.pdf" target="_blank">Corporate
                  Environmental Policy</a></h3>
              </li>
              <li class="flex items-start py-2 border-b w-full text-base text-neutral-darkest-grey">
                <h3 class=""><a href="assets/pdf/corporatePolicies/Fraud-Investigation-Guidelines.pdf" target="_blank">Fraud
                  Investigation Guidelines</a></h3>
              </li>
              <li class="flex items-start py-2 border-b w-full text-base text-neutral-darkest-grey">
                <h3 class=""><a href="assets/pdf/corporatePolicies/HIV_AIDS_Policy.pdf" target="_blank">HIV/ AIDS</a></h3>
              </li>
              <li class="flex items-start py-2 border-b w-full text-base text-neutral-darkest-grey">
                <h3 class=""><a href="assets/pdf/corporatePolicies/NRC-Policy.pdf" target="_blank">Nomination and Remuneration
                  Policy</a></h3>
              </li>
              <li class="flex items-start py-2 border-b w-full text-base text-neutral-darkest-grey">
                <h3 class="">
                  <a href="assets/pdf/corporatePolicies/sexualHarassment.pdf" target="_blank">Prevention of Sexual Harassment
                    at Workplace</a>
                </h3>
              </li>
              <li class="flex items-start py-2 border-b w-full text-base text-neutral-darkest-grey">
                <h3 class=""><a href="assets/pdf/corporatePolicies/Social-Media-Policy.pdf" target="_blank">Social Media Policy</a></h3>
              </li>
              <li class="flex items-start py-2 border-b w-full text-base text-neutral-darkest-grey">
                <h3 class=""><a href="assets/pdf/corporatePolicies/Whistle-blower.pdf" target="_blank">Whistle Blower</a></h3>
              </li>
            </ol>`,
    },
    {
      id: 3,
      title: "CSR Updates",
      Desc: `Dummy Text. Dummy Text.`,
      rawData: `   <ul>
                <li class="flex items-start py-2 border-b w-full text-base text-neutral-darkest-grey">
                  <h3 class="font-bold">CSR Initiatives</h3>
                </li>
                <li class="flex items-start py-2 border-b w-full text-base text-neutral-darkest-grey">
                  <h3 class=""><a href="assets/pdf/corporatePolicies/CSR.pdf" target="_blank">CSR policy</a></h3>
                </li>
                <li class="flex items-start py-2 border-b w-full text-base text-neutral-darkest-grey">
                  <h3 class=""><a href="assets/pdf/corporatePolicies/CSR23-24.pdf" target="_blank">CSR Action Plan FY 2023-24</a></h3>
                </li>
                <li class="flex items-start py-2 border-b w-full text-base text-neutral-darkest-grey">
                  <h3 class=""><a href="assets/pdf/corporatePolicies/CSR22-23.pdf" target="_blank">CSR Action Plan FY 2022-23 </a></h3>
                </li>
                <li class="flex items-start py-2 border-b w-full text-base text-neutral-darkest-grey">
                  <h3 class=""><a href="assets/pdf/corporatePolicies/CSR21-22.pdf" target="_blank">CSR Action Plan FY 2021-22 </a></h3>
                </li>
                <li class="flex items-start py-2 border-b w-full text-base text-neutral-darkest-grey">
                  <h3 class=""><a href="assets/pdf/corporatePolicies/CSR20-21.pdf" target="_blank">CSR Action Plan FY 2020-21 </a></h3>
                </li>
              </ul>

              <ul>
                <li class="flex items-start mt-10 py-2 border-b w-full text-base text-neutral-darkest-grey">
                  <h3 class=" font-bold">CSR Commitee</h3>
                </li>
                <li class="flex items-start py-2 border-b w-full text-base text-neutral-darkest-grey">
                  <h3 class="">Mrs. Nyrika Holkar, Chairperson</h3>
                </li>
                <li class="flex items-start py-2 border-b w-full text-base text-neutral-darkest-grey">
                  <h3 class="">Mr. P. E. Fouzdar, Member</h3>
                </li>
                <li class="flex items-start py-2 border-b w-full text-base text-neutral-darkest-grey">
                  <h3 class="">Mr. V. R. Mehta, Member</h3>
                </li>
              </ul>`,
    },
    {
      id: 4,
      title: "Statutory Updates",
      Desc: `Dummy Text. Dummy Text.`,
      rawData: `
       <ol>
              <li class="flex items-start py-2 border-b w-full text-base text-neutral-darkest-grey">
                <h3 class=""><a href="assets/pdf/statutoryUpdate/TNC-appoint-Independent-Directors.pdf"
                  target="_blank">Terms &amp; Conditions of appointment of Independent Directors</a></h3>
              </li>
              <li class="flex items-start py-2 border-b w-full text-base text-neutral-darkest-grey">
                <h3 class=""><a href="assets/pdf/statutoryUpdate/Notice-of-Candidature-Parpia.pdf"
                  target="_blank">Notice of Candidature of Mr. M. M. Parpia</a></h3>
              </li>
              <li class="flex items-start py-2 border-b w-full text-base text-neutral-darkest-grey">
                <h3 class=""><a href="assets/pdf/statutoryUpdate/Notice-of-Candidature-Movdawalla.pdf"
                  target="_blank">Notice of Candidature of Mr. P. P. Movdawalla</a></h3>
              </li>
              <li class="flex items-start py-2 border-b w-full text-base text-neutral-darkest-grey">
                <h3 class=""><a href="assets/pdf/statutoryUpdate/Notice-of-Candidature-Mehta.pdf"
                  target="_blank">Notice of Candidature of Mr. V. R. Mehta</a></h3>
              </li>
              <li class="flex items-start py-2 border-b w-full text-base text-neutral-darkest-grey">
                <h3 class="">Dr. K. A. Palia ceased to be a Director of the Company with effect from 10th May, 2023</h3>
              </li>
              <li class="flex items-start py-2 border-b w-full text-base text-neutral-darkest-grey">
                <h3 class="">Mr. K. K. Dastur ceased to a Director of the Company with effect from 10th May, 2023</h3>
              </li>
              <li class="flex items-start py-2 border-b w-full text-base text-neutral-darkest-grey">
                <h3 class="">Mr. S. N. Irani ceased to be a Director of the Company with effect from 25th July 2022</h3>
              </li>
              <li class="flex items-start py-2 border-b w-full text-base text-neutral-darkest-grey">
                <h3 class="">
                  The Register of Members and Share Transfer Books of the Company will remain closed from
                  Monday, 18th July 2022 to Tuesday, 2nd August 2022 (both days inclusive). All persons whose names are
                  recorded in the Register of Members maintained by the Company/Depositories as on the cut-off date, i.e.
                  Friday, 15th July, 2022 only shall be entitled to attend and vote at the Annual General Meeting.
                </h3>
              </li>

            </ol>`,
    },
  ];

  // const empTestimonials=[
  // {id:1,
  //   title:'Godrej Infotech',
  //   desc:`Godrej Infotech's work culture is all about collaboration and open communication, an environment that encourages growth. Our team reflects a vibrant mix of perspectives. What I admire most about Godrej Infotech is that it prioritizes employees development, both professionally and this has tremendously enriched my journey here.`,
  //   empName:'Mausami Samanta',
  //   empDesignation:'Deputy Manager, HR',
  //   empImage:'about/reviewImage.svg',
  // }

  // ]

  const DATA_2021_Present = [
    {
      id: 1,
      Desc: `2023 - ET Future-ready Organization`,
    },
    {
      id: 2,
      Desc: ` 2023 - Microsoft Solution Partner for Business Applications`,
    },
    {
      id: 3,
      Desc: `2022 and 2023 - Great Place to Work Certified`,
    },
    {
      id: 4,
      Desc: `2022 - Partnership with Hexagon`,
    },
    {
      id: 5,
      Desc: `2021 - Partnership with Salesforce`,
    },
  ];

  const DATA_2016_2020 = [
    {
      id: 1,
      Desc: `2020 - Partnership with UiPath India and Automation`,
    },
    {
      id: 2,
      Desc: `2018 - Formation of Godrej Infotech Americas`,
    },
    {
      id: 3,
      Desc: `2018 - Partnership with Oracle`,
    },
    {
      id: 4,
      Desc: `2017 - Gold Competency for Microsoft Cloud`,
    },
    {
      id: 5,
      Desc: `2017 - Co-Development Engagement with Infor`,
    },
    {
      id: 6,
      Desc: `2016 - LS Retail Diamond Partner`,
    },
  ];

  const DATA_2011_2015 = [
    {
      id: 1,
      Desc: `2015 - LS Retail Platinum Partner`,
    },
    {
      id: 2,
      Desc: `2014 - Changed Belgium JV to Subsidiary`,
    },
    {
      id: 3,
      Desc: `2014 - Formation of GISPL (Singapore)`,
    },
    {
      id: 4,
      Desc: `2013 - Business Operations started in KSA`,
    },
    {
      id: 5,
      Desc: `2012 - Infor-Winner of Golden Deal of the Year`,
    },
    {
      id: 6,
      Desc: `2012 - Microsoft dynamics Reseller of the year`,
    },
    {
      id: 7,
      Desc: "2011 - Best Partner for LS Retail",
    },
  ];

  const DATA_2005_2010 = [
    {
      id: 1,
      Desc: `2010 - Best partner for Discrete Manufacturing by Microsoft`,
    },
    {
      id: 2,
      Desc: `2010 - Partnership with LS Retail`,
    },
    {
      id: 3,
      Desc: `2009 - Microsoft Inner Circle Member Award`,
    },
    {
      id: 4,
      Desc: `2009 - Formation of Godrej Infotech`,
    },
    {
      id: 5,
      Desc: `2008 - Opened Office in Sharjah`,
    },
    {
      id: 6,
      Desc: `2007 - Best Partner Award for Infor in Asia Pacific`,
    },
    {
      id: 7,
      Desc: "2006 - Award for Microsoft President Club Member",
    },
  ];

  const DATA_1999_2004 = [
    {
      id: 1,
      Desc: `2004 - Partnership with Microsoft`,
    },
    {
      id: 2,
      Desc: `2003 - Best Partner Award for Infor`,
    },
    {
      id: 3,
      Desc: `1999 - Started BaaN (Infor ) Practice`,
    },
    {
      id: 4,
      Desc: `1999 - Established Godrej Infotech`,
    },
    {
      id: 5,
      Desc: `1971-1999 - IT Backbone for Godrej & Boyce since`,
    },
  ];
  const data = [
    {
      title: "2021 - Present",
      content: (
        <>
          <div className="">
            <h2 className="text-heading-03">
              Sustaining Holistic Excellence
            </h2>
            <div className="my-5">
              {DATA_2021_Present.map((item, index) => (
                <>
                  <div
                    className="flex py-4"
                    key={index}
                    style={{ borderBottom: "1px solid #E4E4E4" }}
                  >
                    <span className="text-paragraph-01 text-neutral-darkest-grey">{}</span>
                    <p className="text-paragraph-01 text-neutral-darkest-grey  ">
                      {item.Desc}
                    </p>
                  </div>
                </>
              ))}
            </div>
          </div>
        </>
      ),
    },
    {
      title: "2016 - 2020",
      content: (
        <>
          <div className="">
            <h2 className="text-heading-03"> Multi-faceted Accomplishments</h2>
            <div className="my-5">
              {DATA_2016_2020.map((item, index) => (
                <>
                  <div
                    className="flex py-4"
                    key={index}
                    style={{ borderBottom: "1px solid #E4E4E4" }}
                  >
                    <span className="text-paragraph-01 text-neutral-darkest-grey ">
                      {}
                    </span>
                    <p className="text-paragraph-01 text-neutral-darkest-grey  ">
                      {item.Desc}
                    </p>
                  </div>
                </>
              ))}
            </div>
          </div>
        </>
      ),
    },
    {
      title: "2011 - 2015",
      content: (
        <>
          <div className="">
            <h2 className="text-heading-03">A Triumphant Year</h2>
            <div className="my-5">
              {DATA_2011_2015.map((item, index) => (
                <>
                  <div
                    className="flex py-4"
                    key={index}
                    style={{ borderBottom: "1px solid #E4E4E4" }}
                  >
                    <span className="text-paragraph-01 text-neutral-darkest-grey">{}</span>
                    <p className="text-paragraph-01 text-neutral-darkest-grey ">
                      {item.Desc}
                    </p>
                  </div>
                </>
              ))}
            </div>
          </div>
        </>
      ),
    },

    
    {
      title: "2005 - 2010",
      content: (
        <>
          <div className="">
            <h2 className="text-heading-03">Prominent Honors</h2>
            <div className="my-5">
              {DATA_2005_2010.map((item, index) => (
                <>
                  <div
                    className="flex py-4"
                    key={index}
                    style={{ borderBottom: "1px solid #E4E4E4" }}
                  >
                    <span className="text-paragraph-01 text-neutral-darkest-grey">{}</span>
                    <p className="text-paragraph-01 text-neutral-darkest-grey ">
                      {item.Desc}
                    </p>
                  </div>
                </>
              ))}
            </div>
          </div>
        </>
      ),
    },
    {
      title: "1999 - 2004",
      content: (
        <>
          <div className="">
            <h2 className="text-heading-03">
              Inception of a Technology Powerhouse, Strategic
            </h2>
            <div className="my-5">
              {DATA_1999_2004.map((item, index) => (
                <>
                  <div
                    className="flex py-4"
                    key={index}
                    style={{ borderBottom: "1px solid #E4E4E4" }}
                  >
                    <span className="text-paragraph-01 text-neutral-darkest-grey">{}</span>
                    <p className="text-paragraph-01 text-neutral-darkest-grey">
                      {item.Desc}
                    </p>{" "}
                  </div>
                </>
              ))}
            </div>
          </div>
        </>
      ),
    },
  ];

  // handle click businesstranform card click
  function handleBusinessCardClick(modal, item) {
    setshowModal1(modal);
    setBusinessItem(item);
  }

  function readMore(modal, item) {
    setshowModal2(modal);
    setReadMoreItem(item);
  }

  return (
    <>
      <Dialog
        shouldShow={showModal1}
        onRequestClose={() => {
          setshowModal1((prev) => !prev);
        }}
        title={businessItem?.title}
      >
        <div>
          <div className="">
            <div dangerouslySetInnerHTML={{ __html: businessItem?.rawData }} />
          </div>
        </div>
      </Dialog>

      {/* dialog end */}

      <Dialog
        shouldShow={showModal2}
        onRequestClose={() => {
          setshowModal2((prev) => !prev);
        }}
        title={readMoreItem?.title}
      >
        <div className="">
          <div className="container flex flex-col md:flex-row items-center md:items-start p-2">
            {/* Left Side: Image */}
            <div className=" w-full md:w-1/3 mb-6 rounded-3xl md:mb-0 flex justify-left">
            <Image
      src={readMoreItem?.bgImageUrl} // Using dynamic image URL
      alt="CEO"
      width={400}  // Set width for Image
      height={200}  // Set height for Image
      className="object-cover  "
    />
            </div>

            {/* Right Side: Profile Info */}
            <div className="ceo-info w-full md:w-2/3 pl-0 md:pl-8">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                {readMoreItem?.name}
              </h1>

              {/* CEO Designation */}
              <h2 className="text-xl font-semibold text-primary-600 mb-4">
                {readMoreItem?.designation}
              </h2>

              {/* Short Description */}
              <p className="text-body-01 text-gray-700 mb-6">
                {readMoreItem?.shortDesc}
              </p>

              {/* Long Paragraph */}
              <p className="text-body-01 text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{
__html: readMoreItem?.longDesc || "",
  }}>
             </p>
            </div>
          </div>
        </div>
      </Dialog>
      {/* readmore dialog */}

      {/* Nav */}

      <div className={`relative z-[500]`}>
        <div className={`absolute w-full`}>
          <NewNavBar></NewNavBar>
        </div>
      </div>

      <ContactBanner
        bannerImage={"/about/banner-bg.svg"}
        title={`Trusted Digital Transformation Partner for Global Enterprises`}
        desc={`Future-focused solutions and services for Digital Edge`}
      />

      {/* grow section  */}

      <SectionWrapperNew
        bgColor={"bg-neutral-white"}
        sectionHeading="From Humble Beginnings to Leading Tech Hub"
        sectionDesc="Inspiring Journey of Godrej Infotech"
        sectionTextColor="text-primary-900"
        sectionHeadingLayout="center"
        txtLinearGradient={true}
      >
        <div className="">
          <Timeline data={data} />
        </div>
      </SectionWrapperNew>

      {/* end grow section */}

      {/* guiding section */}
      <SectionWrapperNew
        bgColor={"bg-primary-900"}
        sectionHeading="The Guiding Principles We Live By"
        sectionDesc={`Driven by our principles, we strive to make a difference in every we do, building value and enhancing growth.`}
        sectionTextColor="text-neutral-white"
        sectionDescColor="text-neutral-white"
        sectionHeadingLayout="center"
      >
        <Slider>
          {GuidingPrinciples.map((item, index) => (
            <SwiperSlide key={index}>
              <div class="p-6 bg-[transparent]">
                <div
                  className="flex py-4"
                  style={{ borderBottom: "1px solid #CDBAF3" }}
                >
                  <Image
                    src={item.icon}
                    width={64}
                    height={64}
                    alt={"icon"}
                    className="mr-4 -mt-2"
                  />
                  <div className="text-heading-02 text-white">{item.title}</div>
                </div>
                <p class="text-paragraph-01 py-4 text-white">{item.desc}</p>
              </div>
            </SwiperSlide>
          ))}
        </Slider>
      </SectionWrapperNew>
      {/*end guiding section */}

      {/* hub of expertise */}
      <SectionWrapperNew
        bgColor={"bg-primary-500"}
        sectionHeading="Hub of Expertise"
        sectionDesc={`We are here to build an edge and bring technology brilliance with the finest in industry`}
        sectionTextColor="text-neutral-white"
        sectionDescColor="text-neutral-white"
        sectionHeadingLayout="horizontal"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-16 py-6">
          <div className="">
            <h1 className="text-display-01 text-neutral-white font-bold">
              25<sup className="text-normal"></sup>
            </h1>
            <p className="text-body-01 text-neutral-white">Years in Business</p>
          </div>
          <div className="">
            <h1 className="text-display-01 text-neutral-white font-bold">
              500<sup>+</sup>
            </h1>
            <p className="text-body-01 text-neutral-white">
              Customers Worldwide
            </p>
          </div>
          <div className="">
            <h1 className="text-display-01 text-neutral-white font-bold">
              15k<sup>+</sup>
            </h1>
            <p className="text-body-01 text-neutral-white">
              Man years of Experience
            </p>
          </div>
          <div className="">
            <h1 className="text-display-01 text-neutral-white font-bold">
              1000<sup>+</sup>
            </h1>
            <p className="text-body-01 text-neutral-white">
              Implementation Sites
            </p>
          </div>
        </div>
      </SectionWrapperNew>
      {/* end hub of expertise */}

      {/* visionary minds  */}
      <SectionWrapperNew
        bgColor={"bg-neutral-white"}
        sectionHeading="Introducing Idealistic Minds of Godrej Infotech "
        sectionDesc={`Guided by a strategic vision and a commitment to placing people at the forefront, our leadership team places paramount importance on the well-being and professional growth of every team member, steering the company towards a trajectory of sustained success.`}
        sectionTextColor="text-primary-900"
        sectionDescColor="text-neutral-darkest-grey"
        sectionHeadingLayout="center"
      >
        <Slider slidesPerView={5}>
          {CSUITE_DATA?.map((item, index) => (
            <SwiperSlide key={index} className="lg:!mr-2 2xl:!mr-5">
              <div
                className={`max-w-sm h-[420px] lg:h-[300px] 2xl:h-[420px]  p-3 mb-8 rounded-3xl border-[0.5px] border-neutral-light-grey`}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "end",
                  background: `url(${item.bgImageUrl}), ${item?.bgColor}`,
                  //background: `linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0)), url(${item.bgImageUrl}), ${item?.bgColor}`,
                  backgroundSize:'cover',
                  backgroundPosition:'bottom center'
                }}
              >
                {item?.name && (
                  <>
                    <h5 className="mb-1 text-base font-bold text-white">
                      {item?.name}
                    </h5>
                  </>
                )}
                {item?.designation && (
                  <p className="mb-4 text-[12px] text-white">
                    {item?.designation}
                  </p>
                )}
                <div
                  className="text-white text-[12px] flex justify-start items-center cursor-pointer"
                  onClick={() => readMore(true, item)}
                >
                  Read their stories{" "}
                  <svg
                    className="w-2 h-2 ms-2 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Slider>
      </SectionWrapperNew>
      {/* end visionary minds  */}

      {/* <SectionWrapperNew style={{ backgroundColor: "#FCE6F4", position: 'relative' }}
        sectionHeading=""
        sectionDesc=""
        sectionTextColor='#000'
        sectionHeadingLayout="left"
      >
        <div class="grid grid-cols-2 gap-4">
          <div>
            <h3 className="text-[54px] leading-[64px] font-semibold mb-3">Ajay Pimparkar</h3>
            <p className="text-neutral-darkest-grey text-[32px] mb-6">Chief Executive Officer</p>

            <div className="text-base text-[#1D162B] font-medium mb-10">
              {`Mr. Ajay Pimparkar is the IT veteran and strategic visionary of our company, who has transformed Godrej Group's technology landscape for over 30 Years. His role has reinforced our IT infrastructure and enabled us to perform at the forefront of digital innovation, driving operational efficiency and enriching customer experience.`}
            </div>
            <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Read more</button>
          </div>
          <div>
            <Image src="about/pimp.svg" width={500} height={500} alt={'pimp'} className="absolute right-[8%] bottom-0" />
          </div>
        </div>
      </SectionWrapperNew> */}

      {/* joy at work section 
      <SectionWrapperNew style={{ backgroundColor: "#000" }}
        sectionHeading="Unleashing Joy at Work"
        sectionDesc={`Discover the heartwarming stories of our employees as they reveal their joyful experiences at work. From moments of triumph to instances of camaraderie, their testimonials showcase a workplace`}
        sectionTextColor='#fff'
        sectionHeadingLayout="center"
      >*/}
      {/* <Slider>
          {empTestimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div class="p-8 rounded-3xl shadow" style={{ border: '1px solid #B599EE' }}>
                <div className="text-[16px] font-[700] text-[#EFE9FB] leading-[24px] mb-5">{item.title}</div>
                <h5 class="mb-5 text-[16px] font-[400] text-[#EFE9FB]">{item.desc}</h5>

                <div className="flex">
                  <div className="mr-4">
                    <Image src={item.empImage} width={50} height={50} alt={"img"} />
                    
                  </div>

                  <div>
                    <h6 className="text-[16px] font-[700] mb-1 text-white">{item.empName}</h6>
                    <p className="text-[16px] text-white">{item.empDesignation}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Slider> */}

      {/*</SectionWrapperNew>
      end joy work section */}

      {/* awards section */}
      <SectionWrapperNew
        bgColor={"bg-secondary-10"}
        sectionHeading={`Awards & Recognition `}
        sectionDesc={`Our work culture and commitment has helped us to earn credible achievements. It is the Kaizen attitude that we infuse at every level which consistently strengthens our organisation performance.`}
        sectionTextColor="text-primary-900"
        sectionDescColor="text-neutral-darkest-grey"
        sectionHeadingLayout="horizontal"
      >
        <div class="relative overflow-x-auto">
          <div className="w-full text-sm text-left rtl:text-right">
            {/* Header Section */}
            <div className="hidden md:flex text-xs font-semibold text-neutral-dark-grey uppercase py-2">
              <div className="w-[10%]">Year</div>
              <div className="w-[20%]">Name</div>
              <div className="w-[70%]">Description</div>
            </div>

            {/* Data Rows */}
            <div >
              {AWARD_DATA.map((item, index) => (
                <div
                  className="flex flex-wrap md:flex-nowrap border-b border-neutral-darkest-grey border-opacity-20 py-4"
                  key={index}
                >
                  {/* Year */}
                  <div className="text-body-01 font-semibold text-primary-900 w-full md:w-[10%] whitespace-nowrap mb-2 md:mb-0">
                    {item.Year}
                  </div>

                  {/* Name */}
                  <div className="text-body-01 font-semibold w-full md:w-[20%] mb-2 md:mb-0">
                    {item.Name}
                  </div>

                  {/* Description */}
                  <div className="text-base w-full md:w-[70%]">
                    {item.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapperNew>
      {/* end awards section */}
      <hr />
      {/* key policy section */}
      <SectionWrapperNew
        sectionHeading="Key Policies and Updates"
        sectionDesc=""
        sectionTextColor="text-primary-900"
        sectionDescColor="text-neutral-darkest-grey"
        sectionHeadingLayout="left"
        setTop={false}
      >
        <Slider slidesPerView={"4"}>
          {KeyPolicies_DATA.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="p-5 mt-5 min-h-[300px] rounded-3xl shadow border-[0.5px] border-neutral-light-grey transition-all duration-300 ease-in-out group hover:bg-neutral-light-grey">
                {/* Title */}
                <h6 className="text-heading-04 font-semibold mb-4">
                  {item.title}
                </h6>

                {/* Description */}
                <p className="text-[14px] text-neutral-dark-grey mb-[4rem]">
                  {item.Desc}
                </p>

                {/* Chevron Icon */}
                <div className="flex justify-end absolute right-0 bottom-0 p-3">
                  <Image
                    src="/about/chevron-right.png"
                    width={25}
                    height={25}
                    alt="che"
                    onClick={() => handleBusinessCardClick(true, item)}
                    className="curson-pointer transition-transform duration-300 ease-in-out transform group-hover:translate-x-2 cursor-pointer"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Slider>
      </SectionWrapperNew>
      {/* end key policy section */}

      <TransformBusinessForm
        Title={"Transform your Business with Us"}
        Desc={"Let us discuss how can we help you with rapid growth."}
      ></TransformBusinessForm>
    </>
  );
};

export default ContactUs;
