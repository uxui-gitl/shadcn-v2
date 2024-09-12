import SectionWrapper from '@/components/SectionWrapper';
import WhySection from "@/components/WhySection";


function DistinctiveSection({ ID, DistinctiveData, Title, Desc }) {
    return (

        <>
            <SectionWrapper ID={ID}>
                <WhySection
                    Title={Title}
                    Desc={Desc}
                    arr={DistinctiveData}
                    renderInlineSpans={true}
                ></WhySection>
            </SectionWrapper>

        </>
    )
}


export default DistinctiveSection;