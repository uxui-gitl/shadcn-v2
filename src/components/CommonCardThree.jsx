import Image from "next/image";
import OutlinedButtonWithArrow from "./ui/buttons/OutlinedButtonWithArrow";
import style from '@/components/style/commonCardThree.module.css';

function CommonCardTwo({ Item }) {
    const {
        cardBGColor = "",
        cardTopImageUrl = "",
        cardTextColor = "text-primary-900",
        cardHeading = "",
        cardDesc = "",
        isArrow = "true",
        arrowColor = {},
    } = Item;


    return (
        <>
            <div className={`relative rounded-3xl shadow min-h-[524px] flex flex-col lg:mb-8 ${style.commonCardThree}`} style={{
                backgroundColor: `${cardBGColor}`,
                color: cardTextColor,
                width: "100%",
                minHeight: '540px',
                maxHeight:'540px',
                cursor: 'pointer',
               
            }}>
                {cardTopImageUrl && 
                <div style={{minHeight: '224px', overflow:'hidden'}}>
                <img className={`rounded-t-3xl ${style.topImage} bg-center`} style={{width:'100%' }} src={cardTopImageUrl} alt="" />
                </div>}
                <div className={ `p-5 ${style.cardbody}`} style={{backgroundColor:cardBGColor}}>
                    {cardHeading && (
                        <h5
                            className={`text-heading-03 font-semibold mb-4 ${style.cardHeading}`}
                            dangerouslySetInnerHTML={{ __html: cardHeading }} // Render HTML content
                        />
                    )}


                    {cardDesc && (
                        <p
                            className={`mb-8 text-body-01  ${style.cardDesc}`}
                            dangerouslySetInnerHTML={{ __html: cardDesc }} // Render HTML content
                        />
                    )}
                </div>
                {isArrow && (
                        <div className={`absolute flex justify-end mt-4 bottom-2 right-2`}>
                            <OutlinedButtonWithArrow arrowColor={cardTextColor} size={20} />
                        </div>
                    )}
            </div>

            
        </>
    );
}

export default CommonCardTwo;