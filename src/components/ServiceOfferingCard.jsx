function ServiceOfferingCard({ Item = {} }) {
    const { cardTitle, cardDesc, cardImageUrl } = Item || {};
    
    return (
        <div className="w-full h-full rounded-3xl bg-white shadow flex flex-col" style={{ minHeight: '600px', maxHeight: '600px', maxWidth: '575px', overflow: 'hidden' }}>
            <div className="p-5 flex-grow">
                <p className="mb-7 text-modal-heading-01 font-semibold">{cardTitle || "Default Title"}</p>
                <p className="text-body-01 mb-6 font-medium" style={{ minHeight: '150px' }}>
                    {cardDesc || "Default description text."}
                </p>
            </div>
            <div className="w-full mt-auto" style={{ height: '334px' }}>
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
