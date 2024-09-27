import WhySection from "@/components/WhySection";


function DistinctiveSection({ ID, DistinctiveData, Title, Desc }) {
    return (

        <>
                <WhySection
                    Title={Title}
                    Desc={Desc}
                    arr={DistinctiveData}
                    renderInlineSpans={true}
                ></WhySection>
        </>
    )
}


export default DistinctiveSection;