import Overview from "@/components/OverviewText";

function OverviewSection({ Text, bgColor = 'bg-neutral-white' }) { // Default to white if no bgColor prop is passed
    return (
        <div
        className={`w-full md:px-64 min-h-60 sm:min-h-96 flex justify-center items-center rounded-3xl text-center ${bgColor}`}
        >
            <div >
                <Overview Text={Text}></Overview>
            </div>
        </div>
    );
}

export default OverviewSection;
