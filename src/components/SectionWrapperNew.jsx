import CenterHeading from '@/components/CenterHeading';
import LeftHeading from '@/components/LeftHeading';
import HorizontalHeading from '@/components/HorizontalHeading';
function SectionWrapperNew({
    sectionHeading,
    sectionDesc,
    sectionTextColor='#fff',
    sectionHeadingLayout="left",
    style,
    children,
}) {
    return (
        <>
            <div className="py-16 rounded-3xl sm:py-32 px-10 md:-mt-[36px]" style={{...style}}>
                <div className="md:container mx-auto">
                {sectionHeadingLayout == 'left'  && <LeftHeading heading={sectionHeading} desc={sectionDesc} textColor={sectionTextColor}></LeftHeading>}
                {sectionHeadingLayout == 'center'  && <CenterHeading heading={sectionHeading} desc={sectionDesc} textColor={sectionTextColor}></CenterHeading>}
                {sectionHeadingLayout == 'horizontal' && <HorizontalHeading heading={sectionHeading} desc={sectionDesc} textColor={sectionTextColor}></HorizontalHeading>}
                {children}
                </div>
            </div>
        </>
    )
}

export default SectionWrapperNew;