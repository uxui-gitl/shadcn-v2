import Overview from "@/components/OverviewText";

function OverviewSection({ Text, bgColor = "white" }) { // Default to white if no bgColor prop is passed
    return (
        <div
            className="overViewSection w-full min-h-60 sm:min-h-96 flex justify-center items-center rounded-3xl text-center"
            style={{ backgroundColor: bgColor }} // Set background color based on the prop
        >
            <div className="sm:max-w-[900px] px-7 sm:px-0">
                <Overview Text={Text}></Overview>
            </div>
        </div>
    );
}

export default OverviewSection;
