import Image from "next/image";
import React from "react";
import checkout from "../../public/icon/whygitl/WhyGITL2.svg";
import SectionWrapperNew from '@/components/SectionWrapperNew';

const WhySection = ({
  Title,
  Desc,
  arr = [],
}) => {
  return (
    <>
      <SectionWrapperNew
        sectionHeading={Title}
        sectionDesc={Desc}
        sectionTextColor={'text-primary-900'}
        sectionDescColor={'text-neutral-darkest-grey'}
        sectionHeadingLayout="left"
        setTop={false}
        style={{
          zIndex: '9',
          position: "relative",
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 lg:gap-3 2xl:gap-4">
          {arr.map((item, index) => (
            <>
              <div className="py-4 border-b-[1px] border-bg-neutral-grey" key={index} >
                <div className="flex items-center">
                  <Image src={item.icon} alt={checkout} className="max-w-full" width={56} height={56} />
                  <div className="text-body-01 2xl:text-heading-04 ml-4">
                    {item.desc}
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </SectionWrapperNew>
    </>
  );
};

export default WhySection;
