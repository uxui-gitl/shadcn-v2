"use client";
import Image from "next/image";
import SectionWrapperNew from "@/components/SectionWrapperNew";
import { Tabs } from "@/components/ui/tabs";




function Capabilities(){
    const tabs = [
        {
          title: "Services",
          value: "services",
          content: (
            <div className="w-full overflow-hidden relative h-full rounded-3xl text-body-01 text-primary-900 bg-[#FCE6F4]">
              <ServiceContent />
            </div>
          ),
        },
        {
          title: "Industries",
          value: "industries",
          content: (
            <div className="w-full overflow-hidden relative h-full rounded-3xl text-body-01 text-primary-900 bg-[#FCE6F4]">
              <IndustryContent />
            </div>
          ),
        },
        {
          title: "Partners",
          value: "partners",
          content: (
            <div className="w-full overflow-hidden relative h-full rounded-3xl text-body-01 text-primary-900 bg-[#FCE6F4]">
              <ParternerContent />
            </div>
          ),
        },
      ];
    return(
        <>
      <SectionWrapperNew
        bgColor={"bg-neutral-white"}
        sectionHeading={"Capabilities and Expertise"}
        sectionDesc={
          "Delivering transformative results with our industry knowledge, strategic partnership and end-to-end service offerings."
        }
        sectionTextColor="text-primary-900"
        sectionDescColor="text-neutral-dark-grey"
        title="Count on Us"
        sectionHeadingLayout="center"
        setTop={false}
      >
        <div className="h-[550px] md:h-[550px] [perspective:1000px] relative b flex flex-col mx-auto w-full  items-start justify-start my-0">
          <Tabs
            activeTabClassName="!bg-primary-400 !text-white"
            contentClassName="!mt-5"
            tabClassName="!px-4 hover:bg-primary-400 hover:text-white"
            containerClassName="!my-2"
            tabs={tabs}
          />
        </div>
      </SectionWrapperNew>
        </>
    )
}


const ServiceContent = () => {
    const services = [
      "Business Consulting",
      "Implementation & Global Rollout",
      "Migration & Transformation",
      "Legacy Modernisation",
      "Infrastructure as a Service",
      "Managed Services",
    ];
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 h-full">
        <div className="px-5 py-4">
          {services.map((item) => (
            <>
              <div className="list items-center text-heading-06 font-medium py-2 flex justify-between border-b border-gray-300 last:border-b-0">
                {item}
                <Image
                  width={30}
                  height={30}
                  src="/homeNew/chevron-right.svg"
                  alt="char"
                ></Image>
              </div>
            </>
          ))}
        </div>
        <div
          className="relative invisible md:visible"
          style={{
            backgroundImage: `url(/home/images/Services.webp)`,
            backgroundSize: "cover",
            backgroundPosition: "top center",
          }}
        ></div>
      </div>
    );
  };
  
  const IndustryContent = () => {
    const data = [
      "Manufacturing",
      "Retail",
      "Trading & Distribution",
      "Healthcare",
      "Professional Service",
      "Project",
    ];
  
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 h-full">
        <div className="px-5 py-4">
          {data.map((item) => (
            <>
              <div className="list items-center font-medium text-heading-06 py-2 flex justify-between border-b border-gray-300 last:border-b-0">
                {item}
                <Image
                  width={30}
                  height={30}
                  src="/homeNew/chevron-right.svg"
                  alt="char"
                ></Image>
              </div>
            </>
          ))}
        </div>
        <div
          className="relative invisible md:visible"
          style={{
            backgroundImage: `url(/home/images/Industry.webp)`,
            backgroundSize: "cover",
            backgroundPosition: "top center",
          }}
        ></div>
      </div>
    );
  };
  
  const ParternerContent = () => {
    const data = [
      "Microsoft  ",
      "Infor  ",
      "Oracle  ",
      "Salesforce  ",
      "LS Retail  ",
      "Automation Anywhere ",
      "Ui Path",
    ];
  
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 h-full">
        <div className="px-5 py-4">
          {data.map((item) => (
            <>
              <div className="list items-center text-heading-06 font-medium py-2 flex justify-between border-b border-gray-300 last:border-b-0">
                {item}
                <Image
                  width={30}
                  height={30}
                  src="/homeNew/chevron-right.svg"
                  alt="char"
                ></Image>
              </div>
            </>
          ))}
        </div>
        <div
          className="relative invisible md:visible"
          style={{
            backgroundImage: `url(/home/images/Partners.webp)`,
            backgroundSize: "cover",
            backgroundPosition: "top center",
          }}
        ></div>
      </div>
    );
  };

export default Capabilities;