import CenterHeading from '@/components/CenterHeading';
import LeftHeading from '@/components/LeftHeading';
import HorizontalHeading from '@/components/HorizontalHeading';
function SectionWrapperNew({
    sectionHeading,
    sectionDesc,
    sectionTextColor='text-neutral-white',
    sectionDescColor='text-neutral-darkest-grey',
    sectionHeadingLayout="center",
    title="",
    style={},
    bgColor,
    children,
    txtLinearGradient='',
}) {
    return (
        <>
            <div className={`py-32 rounded-3xl ${bgColor}`} style={{...style}}>
                
                <div className="container mx-auto">
                {sectionHeadingLayout == 'left'  && <LeftHeading heading={sectionHeading} desc={sectionDesc} textColor={sectionTextColor} descColor={sectionDescColor}></LeftHeading>}
                {sectionHeadingLayout == 'center'  && <CenterHeading heading={sectionHeading} desc={sectionDesc} textColor={sectionTextColor} descColor={sectionDescColor} applyGradient = {txtLinearGradient}></CenterHeading>}
                {sectionHeadingLayout == 'horizontal' && <HorizontalHeading heading={sectionHeading} desc={sectionDesc} textColor={sectionTextColor} title={title} descColor={sectionDescColor}></HorizontalHeading>}
                {children}
                </div>
            </div>
        </>
    )
}

export default SectionWrapperNew;