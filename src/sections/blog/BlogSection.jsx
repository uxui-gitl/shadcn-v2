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
                    backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.45)), url(${blogImageUrl})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    marginTop:'-64px',
                    minHeight: '540px',
                }}
                sectionHeading={Heading}
                sectionDesc={Desc}
                sectionTextColor={Color}
                sectionHeadingLayout="left"
            >
                
                {readMoreUrl && (<Link
                href={"#Contact"}
                className="text-neutral-white text-label-01 leading-label-01 flex items-center bg-primary-400 hover:bg-primary-500 font-medium rounded-full px-8 py-4   mb-2 group"
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