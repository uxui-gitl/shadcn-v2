import SectionWrapper from '@/components/SectionWrapper';
import SectionWrapperNew from '@/components/SectionWrapperNew';
import SectionHeading from '@/components/SectionHeading';
import Link from "next/link";
import Image from "next/image";
import Icon from "@mdi/react";

import { mdiArrowTopRight } from "@mdi/js";

function BlogSection({ ID, blogImageUrl, Heading, Desc, Color = 'white', readMoreUrl = "", children }) {
    return (
        <>

            <SectionWrapperNew
              
                style={{
                    backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,0) 30%, rgba(255,255,255,0) 60%, rgb(29, 22, 43) 100%), url(${blogImageUrl})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    minHeight: '624px',
                }}
                sectionHeading={Heading}
                sectionDesc={Desc}
                sectionTextColor={Color}
                sectionHeadingLayout="left"
                sectionDescColor='text-neutral-white'
            >
                
                {readMoreUrl && (<Link
                href={"#Contact"}
                className=" w-full md:w-[20vw] text-neutral-white text-body-01 flex items-center bg-primary-400 hover:bg-primary-500  rounded-full px-8 py-4 mb-2 group"
              >
                Read More
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
              </Link>)}
                {children}
                
            </SectionWrapperNew>
        </>
    )
}


export default BlogSection