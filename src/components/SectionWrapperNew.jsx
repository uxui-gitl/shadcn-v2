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
    
  
    return (
        <>
        {/* rounded-3xl */}
            <div className={` rounded-3xl ${setTop?'-mt-8 sm:-mt-8 ':''}  ${bgColor}`} style={{...style}}>
                
                <div className={`container mx-auto ${setPad ? 'pt-8 pb-16 lg:pt-8 lg:pb-16 2xl:pt-8 2xl:pb-16 ' : ''}`}>
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