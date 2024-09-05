import SectionWrapper from '@/components/SectionWrapper';
import SectionHeading from '@/components/SectionHeading';
import Image from "next/image";

function PlatformSection({ ID='', sectionHeading='', sectionDesc='',sectionHeaderWidth, PlatFormImageList = [], layout='vertical' }) {
    return (
        <>
            <SectionWrapper ID={ID}>
                <div className=" container max-auto text-left mb-5 pb-0 grid grid-cols-1">
                    {/* left */}
                    <div className="bg-[#FFF] flex items-start flex-col justify-between  relative">
                        <div className="w-full">
                            <SectionHeading
                                Heading={sectionHeading}
                                Desc={sectionDesc}
                                layout={layout}
                                headingContainerWidth={sectionHeaderWidth}
                            >
                            </SectionHeading>
                        </div>
                        <div className="flex flex-col md:flex-row justify-center py-10 items-center gap-20 md:py-20">
                            {PlatFormImageList.map((item) => (
                                <>
                                    <Image src={item.url} width={350} height={100} alt="Microsoft Azure" />
                                </>
                            ))}
                        </div>
                    </div>
                </div>
            </SectionWrapper>
        </>
    )
}


export default PlatformSection;