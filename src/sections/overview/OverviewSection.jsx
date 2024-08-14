import Overview from "@/components/OverviewText"

function OverviewSection({Text}) {
    return (
        <div className="overViewSection w-full min-h-60 sm:min-h-96 flex justify-center items-center bg-white rounded-3xl text-center">
            <div className="sm:max-w-[900px] px-7 sm:px-0">
                <Overview Text={Text}></Overview>
            </div>
        </div>
    )
}


export default OverviewSection