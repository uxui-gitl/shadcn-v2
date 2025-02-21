import Image from "next/image";
import OutlinedButtonWithArrow from "@/components/ui/buttons/OutlinedButtonWithArrow";
import style from '@/components/style/commonCardOne.module.css';
// commonCardOne
function ASCard({ Item }) {
    const {
        cardBGImage = "",
        cardBGColor = "",
        cardTextColor = "#000",
        cardTitle = "",
        cardIconUrl = "",
        cardHeading = "",
        cardDesc = "",
        isArrow = "true",
        arrowColor = "#FFF",
    } = Item;

    return (
        <>
            <div
                className={`rounded-3xl shadow min-h-[424px] md:min-h-[450px] 2xl:min-h-[424px] flex flex-col justify-between ${style.commonCardOne}`}
                style={{
                    backgroundColor: `${cardBGColor}`,
                    color: cardTextColor,
                    width: "100%",
                    cursor: "pointer",
                }}
            >
                {/* Background Image Div */}
                {cardBGImage && (
                    <div
                        className={`${style.cardBGImage}`}
                        style={{ backgroundImage: `url(${cardBGImage})` }}
                    ></div>
                )}

                <div className={`p-5 flex-grow ${style.cardBody}`}>
                    {cardTitle && (
                        <div className={`text-secondary-400 text-body-02 mb-8 md:mb-4 2xl:mb-8 ${style.cardTitle}`}>
                            {cardTitle}
                        </div>
                    )}
                    {cardIconUrl && (
                        <div className={`mb-6 md:mb-4 2xl:mb-5 ${style.cardIcon}`}>
                            <Image src={cardIconUrl} alt="" width={53} height={53} />
                        </div>
                    )}
                    {cardHeading && (
                        <h5
                            className={`text-heading-03 line-clamp-2 ${style.cardHeading}`}
                            dangerouslySetInnerHTML={{ __html: cardHeading }} // Render HTML content
                        />
                    )}

                    {cardDesc && (
                        <p
                            className={` text-body-01 line-clamp-4 sm:line-clamp-3 ${style.cardDesc}`}
                            dangerouslySetInnerHTML={{ __html: cardDesc }} // Render HTML content
                        />
                    )}
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

export default ASCard;
