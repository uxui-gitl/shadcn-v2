
function ServiceOfferingCard({Item}) {
    const {cardTitle, cardDesc, cardImageUrl} = Item;
    return (
        <>
            <div className="w-full rounded-3xl bg-white shadow" style={{ minHeight: '600px', maxHeight: '600px', maxWidth: '575px', overflow:'hidden' }}>
                <div className="p-5">
                    <p className="mb-7" style={{ fontWeight: 600 }}>{cardTitle}</p>
                    <p className="text-[20px] mb-6" style={{ fontWeight: 500, minHeight: '150px' }}>
                       {cardDesc}
                       </p>
                </div>
                <div className="" style={{maxHeight:'334px', width:'100%'}}>
                <img className="rounded-3xl" src={cardImageUrl} alt="any"/>
                </div>
            </div>

        </>
    )
}


export default ServiceOfferingCard;