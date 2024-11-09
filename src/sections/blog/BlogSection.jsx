import SectionWrapper from '@/components/SectionWrapper';
import SectionWrapperNew from '@/components/SectionWrapperNew';
import SectionHeading from '@/components/SectionHeading';
import Link from "next/link";
import Image from "next/image";
import Icon from "@mdi/react";
import { mdiArrowRight } from "@mdi/js";

function BlogSection({ ID, blogImageUrl, Heading, Desc, Color = 'white', readMoreUrl = "", children }) {
    return (
        <>

            <SectionWrapperNew
              
                style={{
                    backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.45)), url(${blogImageUrl})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    marginTop:'-64px',
                    minHeight: '70vh',
                }}
                sectionHeading={Heading}
                sectionDesc={Desc}
                sectionTextColor={Color}
                sectionHeadingLayout="left"
            >
                
                {readMoreUrl && (<Link
                    href={readMoreUrl}
                    target="_blank"
                    className="text-neutral-white mt-10 md:my-10 inline-flex items-center transition-all bg-[#5F22D9] hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-base px-8 py-3 me-2"
                >
                    {'Read More'}
                    <Icon
                        path={mdiArrowRight}
                        style={{ marginLeft: "0.5em", marginTop: '1px' }}
                        size={1}
                    />
                </Link>)}
                {children}
                
            </SectionWrapperNew>
        </>
    )
}


export default BlogSection