import Image from "next/image";
import OutlinedButtonWithArrow from "@/components/ui/buttons/OutlinedButtonWithArrow";
import style from '../../src/components/style/commonCardAdditionalData.module.css';

function CommonCardAdditionalData({ Item, setpageID }) {
    const {
        cardBGImageUrl = "",
        cardBGColor = "",
        cardTextColor = "",
        cardBGImageUrlSize = "cover",
        cardTitle = "",
        cardIconUrl = "",
        cardHeading = "",
        isArrow = "true",
        arrowColor = "#FFF",
        additionalData = [],
    } = Item;

    const cardBodyMinHeight = setpageID === "ai-ml" ? "564px" : "424px";

    return (
        <>
            <div
                className={`rounded-3xl shadow min-h-[424px] flex flex-col justify-between ${style.additionalDataCard}`} style={{
                    background: `url(${cardBGImageUrl}), ${cardBGColor}`,
                    backgroundSize: cardBGImageUrlSize,
                    color: cardTextColor,
                    width: "100%",
                    minHeight: cardBodyMinHeight,
                }}
            >
                <div className={`p-10 flex-grow ${style.cardBody}`}>
                    {cardTitle && <div className={`text-[#E0028E] mb-8 ${style.cardTitle}`}>{cardTitle}</div>}
                    {cardIconUrl && (
                        <div className="pb-8 cardIcon">
                            <Image src={cardIconUrl} alt="" width={50} height={50} />
                        </div>
                    )}
                    {cardHeading && (
                        <h5
                            className={` text-[42px] leading-[48px] font-semibold ${style.cardHeading}`}
                            dangerouslySetInnerHTML={{ __html: cardHeading }} // Render HTML content
                        />
                    )}

                    {additionalData?.length > 0 && (
                        <div className={`${style.additionalDataWrapper}`}>
                            {additionalData?.map((data, index) => (
                                <>
                                    <div className="" key={index} style={{ borderBottom: '1px solid #d3d3d3', padding: '10px' }}>
                                        <p className="text-[22px] font-medium">{data?.text}</p>
                                    </div>
                                </>
                            ))}
                        </div>)}
                </div>
                {isArrow && (
                    <div className="flex justify-end px-6 py-4">
                        <OutlinedButtonWithArrow arrowColor={arrowColor} size={48} />
                    </div>
                )}


            </div>
        </>
    );
}

export default CommonCardAdditionalData;