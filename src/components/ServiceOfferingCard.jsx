function ServiceOfferingCard({ Item = {} }) {
    const { cardTitle, cardDesc, cardImageUrl } = Item || {};
    
    return (
        <div className="w-full h-full md:mt-8 md:h-[590px] rounded-3xl bg-neutral-white flex flex-col overflow-hidden">
            <div className="px-5 py-4 min-h-[220px]">
                <p className="w-[70%] mb-7 text-heading-03">{cardTitle || "Default Title"}</p>
                <p className="text-body-01 " >
                    {cardDesc || "Default description text."}
                </p>
            </div>
            <div className="w-full " >
                {cardImageUrl ? (
                    <img className="w-full h-full object-cover rounded-b-3xl" src={cardImageUrl} alt="Service Image" />
                ) : (
                    <div className="h-full bg-gray-300 flex items-center justify-center rounded-b-3xl">Image not available</div>
                )}
            </div>
        </div>
    );
}

export default ServiceOfferingCard;
