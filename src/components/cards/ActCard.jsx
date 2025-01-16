'use client';
import OutlinedButtonWithArrow from "@/components/ui/buttons/OutlinedButtonWithArrow";

function ActCard({item , onclick}) {
    
    return (
        <>
        <div
            className="p-5 bg-[#5F22D9] rounded-3xl "
            style={{
                backgroundImage: `url(${item.cardBgImg})`,
                backgroundSize: "cover",
                backgroundPosition: "bottom center",
            }}
        >
            {item?.cardTitle && (
                <div className="text-body-01 text-neutral-white mb-[100px]">
                    {item?.cardTitle}
                </div>
            )}
            <div className="mb-5 text-heading-03 text-neutral-white line-clamp-3 md:line-clamp-2 min-h-[90px] md:min-h-full" title={item.cardHeading}>
                {item?.cardHeading}
            </div>
            <div className="mb-4 md:mb-8 text-body-01 text-neutral-white line-clamp-3 min-h-[65px] md:min-[75px]">
                {item?.cardDesc}
            </div>
            <div className="flex justify-end right-0 bottom-0">
                <OutlinedButtonWithArrow
                    arrowColor={"white"}
                    size={24}
                    onClick={() => onclick(true, item)}
                />
            </div>
        </div>


   
        </>
    )
}

export default ActCard;