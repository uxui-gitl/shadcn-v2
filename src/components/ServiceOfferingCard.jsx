function ServiceOfferingCard({ Item = {} }) {
    const { cardTitle, cardDesc, cardImageUrl } = Item || {};
    
    return (
        <div className="w-full h-full md:mt-8 rounded-3xl bg-neutral-white flex flex-col" style={{ minHeight: '600px', maxHeight: '600px', maxWidth: '575px', overflow: 'hidden' }}>
            <div className="p-5  flex-grow">
                <p className="w-[70%] mb-7 text-heading-02">{cardTitle || "Default Title"}</p>
                <p className="text-body-01 mb-6" style={{ minHeight: '150px' }}>
                    {cardDesc || "Default description text."}
                </p>
            </div>
            <div className="w-full mt-auto" style={{ height: '350px' }}>
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
