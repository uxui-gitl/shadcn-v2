import Image from "next/image";
import OutlinedButtonWithArrow from "@/components/ui/buttons/OutlinedButtonWithArrow";

function BorderRightCard({item, onclick}){
    return(
        <>
                         <div className="sm:px-6" style={{ borderRight: '2px solid #000' }} >
                                    <Image
                                        src={item.icon}
                                        width={64}
                                        height={64}
                                        alt={"icon"}
                                        className=""
                                    />
                                    <div className="px-4 sm:px-0">
                                        <div className="text-heading-04 mb-2 font-semibold">{item.cardHeading}</div>
                                        <p className="text-paragraph-02 sm:min-h-[72px] mb-4">{item.cardDesc}</p>
                                        <div className="flex justify-end">
                                            <OutlinedButtonWithArrow size={20} arrowColor={'#000'} onClick={() => onclick(true, item)} />
                                        </div>
                                    </div>
                                </div>
        </>
    )
}


export default BorderRightCard;