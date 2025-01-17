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
    setTop=true,
    setPad=true,
}) {
    // ${setTop?'-mt-8 sm:-mt-8 ':''}
  
    return (
        <>
        {/* rounded-3xl */}
            <div className={`  ${bgColor}`} style={{...style}}>
                
                <div className={`container mx-auto ${setPad ? 'py-8 lg:py-8 2xl:py-8' : ''}`}>
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