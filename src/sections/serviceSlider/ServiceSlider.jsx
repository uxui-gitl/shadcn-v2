
import { SwiperSlide } from "swiper/react";
import Slider from "@/components/Slider";
import SectionHeading from '@/components/SectionHeading';
function ServiceSlider({sectionHeading , sectionDesc, children}) {
    return (
        <>
            <div className="rounded-3xl" style={{ backgroundColor: '#1D162B', marginTop: '-35px' }}>
                <div className="md:container mx-auto md:pt-20 flex h-[500px]" style={{ alignItems: 'center', overflow: 'hidden' }}>
                    <div className="w-full md:w-1/2">
                        <SectionHeading
                            Heading={sectionHeading}
                            Color={'white'}
                            Desc={sectionDesc}
                            headingContainerWidth={'w-full'}
                        />
                    </div>
                    <div className="hidden md:w-1/2 md:block">
                        <img src="/infor/man.svg" style={{ width: '100%' }} />
                    </div>
                </div>
                <div className="md:container mx-auto bg-[#EFE9FB] py-20" style={{ zindex: '2', position: 'relative', borderTopLeftRadius: "24px", borderTopRightRadius: "24px", transform: "translateY(-28px)" }}>
                  {children}
                </div>
            </div>
        </>
    )
}

export default ServiceSlider;