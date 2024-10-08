import SectionWrapper from '@/components/SectionWrapper';
import SectionWrapperNew from '@/components/SectionWrapperNew';
import SectionHeading from '@/components/SectionHeading';
import Link from "next/link";
import Image from "next/image";
import Icon from "@mdi/react";
import { mdiArrowRight } from "@mdi/js";

function BlogSection({ID, blogImageUrl, Heading, Desc, Color='white', readMoreUrl=""}) {
    return (
        <>

        <SectionWrapperNew
        style={{
            backgroundImage: `url(${blogImageUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
        }}
        sectionHeading={Heading}
        sectionDesc={Desc}
        sectionTextColor={Color}
        sectionHeadingLayout="left"
        >
                <Link
                    href={readMoreUrl}
                    target="_blank"
                    className="text-white mt-10 md:my-10 inline-flex items-center transition-all bg-[#5F22D9] hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-base px-8 py-3 me-2 dark:bg-[#5F22D9] dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                >
                    {'Read More'}
                    <Icon
                        path={mdiArrowRight}
                        style={{ marginLeft: "0.5em", marginTop: '1px' }}
                        size={1}
                    />
                </Link>
            </SectionWrapperNew>
        </>
    )
}


export default BlogSection