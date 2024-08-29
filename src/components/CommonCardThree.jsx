import Image from "next/image";
import OutlinedButtonWithArrow from "./ui/buttons/OutlinedButtonWithArrow";
import style from '@/components/style/commonCardThree.module.css';

function CommonCardTwo({ Item }) {
    const {
        cardBGColor = "",
        cardTopImageUrl = "",
        cardTextColor = "#000",
        cardHeading = "",
        cardDesc = "",
        isArrow = "true",
        arrowColor = "#000",
    } = Item;


    return (
        <>
            <div className={`rounded-3xl shadow min-h-[424px] flex flex-col ${style.commonCardThree}`} style={{
                backgroundColor: `${cardBGColor}`,
                color: cardTextColor,
                width: "100%",
                minHeight: '540px',
                maxHeight:'540px'
            }}>
                {cardTopImageUrl && <img className={`rounded-t-3xl ${style.topImage}`} style={{ maxHeight: '245px' }} src={cardTopImageUrl} alt="" />}
                <div className={ `p-5 ${style.cardbody}`} style={{backgroundColor:cardBGColor}}>
                    {cardHeading && (
                        <h5
                            className={` text-[28px] leading-[36px] font-semibold ${style.cardHeading}`}
                            dangerouslySetInnerHTML={{ __html: cardHeading }} // Render HTML content
                        />
                    )}


                    {cardDesc && (
                        <p
                            className={`my-6 font-normal ${style.cardDesc}`}
                            dangerouslySetInnerHTML={{ __html: cardDesc }} // Render HTML content
                        />
                    )}
                </div>
                {isArrow && (
                        <div className={`flex justify-end px-6 py-4 ${style.isArrow}`}>
                            <OutlinedButtonWithArrow arrowColor={arrowColor} size={48} />
                        </div>
                    )}
            </div>

            {/* <div
                    className={`rounded-3xl shadow min-h-[424px] flex flex-col justify-between ${style.commonCardThree}`} style={{
                        background: `url(${cardBGImageUrl}), ${cardBGColor}`,
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


                </div> */}
        </>
    );
}

export default CommonCardTwo;