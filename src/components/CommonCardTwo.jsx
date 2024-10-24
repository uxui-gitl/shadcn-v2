import Image from "next/image";
import OutlinedButtonWithArrow from "./ui/buttons/OutlinedButtonWithArrow";
import style from '@/components/style/commonCardTwo.module.css';

function CommonCardTwo({ Item }) {
    const {
        cardBGImageUrl = "",
        cardBGColor = "",
        cardTextColor = "#000",
        cardTitle = "",
        cardIconUrl = "",
        cardHeading = "",
        cardDesc = "",
        isArrow = "true",
        cardType = '',
        arrowColor = "#FFF",
        downImageUrl='',
    } = Item;


    return (
        <>
            <div className={`${style.commonCardTwoWrapper}`}>
                <div
                    className={`rounded-3xl shadow min-h-[424px] flex flex-col justify-between ${style.commonCardTwo}`} style={{
                        background: `url(${cardBGImageUrl}), ${cardBGColor}`,
                        backgroundPosition:'center center',
                        backgroundSize:'cover',
                        color: cardTextColor,
                        width: "100%",
                        minHeight: '550px',
                    }}
                >
                    <div className={`p-10 flex-grow ${cardType == 2 && style.type2}`}>
                        {cardTitle && <div className={`text-[#E0028E] text-[20px] mb-12 ${style.cardTitle}`}>{cardTitle}</div>}
                        {cardIconUrl && (
                            <div className={`mb-8 cardIcon  ${style.cardIcon}`}>
                                <Image src={cardIconUrl} alt="" width={53} height={53} />
                            </div>
                        )}
                        {cardHeading && (
                            <h5
                                className={` text-[42px] leading-[48px] font-semibold ${style.cardHeading}`}
                                dangerouslySetInnerHTML={{ __html: cardHeading }} // Render HTML content
                            />
                        )}

                        {cardDesc && (
                            <p
                                className={`my-8 font-normal ${style.cardDesc}`}
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

export default CommonCardTwo;