import Overview from "@/components/OverviewText";

function OverviewSection({ Text, bgColor = 'bg-neutral-white' }) { // Default to white if no bgColor prop is passed
    return (
        <div
        className={`w-full py-32 lg:py-8 2xl:py-32 md:px-64 !font-normal flex justify-center items-center rounded-3xl text-center ${bgColor}`}
        >
            <div >
                <Overview Text={Text}></Overview>
            </div>
        </div>
    );
}

export default OverviewSection;
