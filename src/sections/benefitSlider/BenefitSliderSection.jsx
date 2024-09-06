import SectionWrapper from '@/components/SectionWrapper';
import SectionHeading from '@/components/SectionHeading';
import checkout from "/public/icon/whygitl/WhyGITL2.svg";
import Image from 'next/image';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
function BenefitSliderSection({ 
    ID,
     sectionImageUrl = '',
     sectionHeading, 
     sectionDesc,
     sectionHeadingMaxWidth,
     sectionHeaderWidth=['w-full'],
        cardData = [], 
        sectionTextColor = '#000', 
        sectionBGColor = "#000", 
        style }) {
    return (
        <>
            <SectionWrapper id={ID} BGColor={sectionBGColor} style={{
                ...style,
                backgroundImage: `url(${sectionImageUrl})`, backgroundSize: 'cover',
            }}>
                <div className='container mx-auto'>
                <div className="grid grid-cols-2 gap-32">
                    <div className="">
                        <SectionHeading
                            Heading={sectionHeading}
                            Desc={sectionDesc}
                            Color={sectionTextColor}
                            MaxWidth={sectionHeadingMaxWidth}
                            headingContainerWidth={sectionHeaderWidth}
                        >
                        </SectionHeading>
                    </div>

                    <div className="">
                        <div className="flex flex-col gap-3 overflow-y-auto max-h-96 overflow-hidden benefitScrollDiv"  >
                            {cardData?.map((item, index) => (
                                <>
                                    <a href="#" className="flex p-5 flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                                        <Image className=" " src={checkout} alt="" width={50} height={50}/>
                                        <div className=" flex flex-col justify-between px-4 leading-normal">
                                            <p className=" mb-3 font-normal text-gray-700 dark:text-gray-400">{item.text}</p>
                                        </div>
                                    </a>
                                </>
                            ))}
                        </div>
                    </div>
                </div>
                </div>

            </SectionWrapper>
        </>
    )

}


export default BenefitSliderSection;