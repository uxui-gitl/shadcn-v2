import Overview from "@/components/OverviewText"

function OverviewSection() {
    return (
        <div className="overViewSection w-full min-h-60 sm:min-h-96 flex justify-center items-center bg-white rounded-3xl text-center">
            <div className="sm:max-w-[900px] px-7 sm:px-0">
                <Overview Text={'By employing a pragmatic approach and tapping into the capabilities of AI and ML, we meticulously fine-tune business parameters, ensuring a notable enhancement in your overall business proficiency.'}></Overview>
            </div>
        </div>
    )
}


export default OverviewSection