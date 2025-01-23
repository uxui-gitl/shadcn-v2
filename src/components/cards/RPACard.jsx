import Image from "next/image";
import OutlinedButtonWithArrow from "@/components/ui/buttons/OutlinedButtonWithArrow";
import style from '@/components/style/commonCardTwo.module.css';

function RPACard({ Item }) {
    const {
        cardBGImageUrl = "",
        cardBGColor = "",
        cardTextColor = "text-primary-900",
        cardTitle = "",
        cardIconUrl = "",
        cardHeading = "",
        cardDesc = "",
        isArrow = "true",
        cardType = '',
        arrowColor = "text-neutral-white",
        downImageUrl='',
    } = Item;


    return (
        <>
            <div className={`${style.commonCardTwoWrapper}`}>
                <div
                    className={`rounded-3xl shadow min-h-[524px] flex flex-col justify-between ${style.commonCardTwo}`} style={{
                        background: `url(${cardBGImageUrl}), ${cardBGColor}`,
                        backgroundPosition:'center center',
                        backgroundSize:'cover',
                        color: cardTextColor,
                        width: "100%",
                        minHeight: '440px',
                    }}
                >
                    <div className={`p-5 flex-grow ${cardType == 2 && style.type2}`}>
                        {cardTitle && <div className={`text-[#E0028E] text-body-01 mb-3 ${style.cardTitle}`}>{cardTitle}</div>}
                        {cardIconUrl && (
                            <div className={`mb-8 cardIcon  ${style.cardIcon}`}>
                                <Image src={cardIconUrl} alt="" width={54} height={54} />
                            </div>
                        )}
                        {cardHeading && (
                            <h5
                                className={`text-heading-03 font-semibold ${style.cardHeading}`}
                                dangerouslySetInnerHTML={{ __html: cardHeading }} // Render HTML content
                            />
                        )}

                        {cardDesc && (
                            <p
                                className={`my-4 text-body-01 font-normal ${style.cardDesc}`}
                                dangerouslySetInnerHTML={{ __html: cardDesc }} // Render HTML content
                            />
                        )}

                    </div>
                    {isArrow && (
                        <div className="flex justify-end px-6 py-4">
                            <OutlinedButtonWithArrow arrowColor={arrowColor} size={48} />
                        </div>
                    )}
                        {downImageUrl && (<img src={downImageUrl} alt="" className="rounded-3xl" style={{width:'100%', maxHeight:'240px'}} />)} 


                </div>
            </div>
        </>
    );
}

export default RPACard;