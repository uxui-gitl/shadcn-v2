import SectionWrapper from '@/components/SectionWrapper';
import SectionWrapperNew from '@/components/SectionWrapperNew';
import Link from "next/link";
import Image from "next/image";
import Icon from "@mdi/react";

import { mdiArrowTopRight } from "@mdi/js";

function BlogSection({ ID, blogImageUrl, Heading, Desc, Color = 'white', readMoreUrl = [], children }) {
  return (
    <>

      <SectionWrapperNew

        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,0) 30%, rgba(255,255,255,0) 60%, rgb(29, 22, 43) 100%), url(${blogImageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          // minHeight: '540px',
        }}
        sectionHeading={Heading}
        sectionDesc={Desc}
        sectionTextColor={Color}
        sectionDescColor={Color}
        sectionHeadingLayout="left"
      >
        <div className="z-50 flex gap-4 flex-col items-left align-middle justify-left sm:flex-row sm:justify-start md:justify-start mt-6">
          {readMoreUrl.length > 0 && (
            <>
            {readMoreUrl.map((item, index) => (
            <>
              <Link
              key={index}
                href={item.url}
                className=" text-neutral-white justify-center text-body-01 flex items-center bg-primary-400 hover:bg-primary-500 rounded-full px-8 py-3 mb-0 md:mb-2 group"
              >
                {item.text}
                <div className="transition-transform duration-300 ease-in-out transform group-hover:translate-x-2">
                  <Icon
                    path={mdiArrowTopRight}
                    style={{
                      marginLeft: "0.5em",
                      transform: "rotate(45deg)",
                      marginTop: "1px",
                    }}
                    size={1}
                  />
                </div>
              </Link>
            </>
          ))}
            </>

          )}
        </div>
        {children}
      </SectionWrapperNew>
    </>
  )
}


export default BlogSection