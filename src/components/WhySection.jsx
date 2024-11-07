import { AnimatePresence, motion } from "framer-motion";
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
     sectionTextColor={'black'}
     sectionHeadingLayout="left"
    >
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 md:gap-x-12">
        {arr.map((item, index) => (
            <>
              <div className="card py-4 md:py-12" key={index} style={{ borderBottom: '2px solid #d3d3d3'}}>
                <div className="card-body flex items-center">
                    <Image src={item.icon} alt={checkout} className="max-w-14 md:max-w-full" width={64} height={64}/>
                    <div className="md:text-xl font-medium text-sm ml-9">
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
