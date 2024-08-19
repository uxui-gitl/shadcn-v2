import SectionWrapper from '@/components/SectionWrapper';
import SectionHeading from '@/components/SectionHeading';
import Image from "next/image";

function PlatformSection({ ID='', Heading='', Desc='', PlatFormImageList = [] }) {
    return (
        <>
            <SectionWrapper ID={ID}>
                <div className="text-left max-w-screen-xl md:max-w-screen-xl mb-5 pb-0 grid grid-cols-1">
                    {/* left */}
                    <div className="bg-[#FFF] flex items-start flex-col justify-between  relative">
                        <div className="w-full md:max-w-[607px]">
                            <SectionHeading

                                Heading={Heading}
                                Desc={Desc}
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