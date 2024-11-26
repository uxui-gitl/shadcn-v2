import SectionWrapper from '@/components/SectionWrapper';
import SectionWrapperNew from '@/components/SectionWrapperNew';
import SectionHeading from '@/components/SectionHeading';
import Link from "next/link";
import Image from "next/image";
import Icon from "@mdi/react";
import { mdiArrowRight } from "@mdi/js";

function AcceleratorSection({ ID, accImageURL, Heading, Desc, Color = 'white', readMoreUrl = "", children }) {
    return (
        <>

            <SectionWrapperNew
                style={{
                    backgroundImage: `url(${accImageURL})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundColor:'#EFE9FB'
                }}
                sectionHeading={Heading}
                sectionDesc={Desc}
                sectionTextColor={Color}
                sectionHeadingLayout="left"
            >
                
                {children}
                
            </SectionWrapperNew>
        </>
    )
}


export default AcceleratorSection