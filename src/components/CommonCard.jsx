import Image from "next/image";
import Link from "next/link";
function CommonCard({ Item }) {
    const { CardBGImageUrl= '', BGColor = '', cardTitle = "", cardIconUrl = '', cardHeading = '', cardDesc = '', isArrow = 'true', downImageUrl = '', link = [], Color = '#000', cardDownImageMinHeight = '200px' } = Item;
    return (
        <>
            <div class="rounded-3xl shadow" style={{ backgroundImage: `url(${CardBGImageUrl})`, backgroundSize: 'cover', backgroundColor: `${BGColor}`, color: Color, width: '100%' }}>
                <div className={`card-body p-10 ${isArrow ? '!pb-0' : ''}`}>
                    {cardTitle && (<div className="text-[#E0028E] mb-6">{cardTitle}</div>)}
                    {cardIconUrl && (<Image src={cardIconUrl} alt="" width={50} height={50}></Image>)}
                    {cardHeading && (<h5 class="text-[42px] leading-[48px] font-semibold">{cardHeading}</h5>)}
                    {cardDesc && <p class="my-5 font-normal">{cardDesc}</p>}
                    {link.length > 0 && (
                        <>
                            <ul className="my-1 md:my-1">
                                {link.map((list, index) => (
                                    <>
                                        <li className="border-b-2 border-[#dbdbdb3d] py-2 md:py-3"
                                        >
                                            <Link
                                                href={list.url}
                                                className="text-[#101828] text-[16px] md:text-[18px] font-normal leading-[28px] w-fit flex transition-all hover:opacity-75"
                                            > {list.title}
                                            </Link>
                                        </li>
                                    </>
                                ))}
                            </ul>
                        </>
                    )}
                </div>
                {downImageUrl && (
                    <div style={{ width: '100%', position: 'relative', minHeight: cardDownImageMinHeight }}>
                        <Image src={downImageUrl} alt="" layout='fill' objectFit='cover' className="rounded-3xl"></Image>
                    </div>
                )}
                {isArrow && (<div className="flex justify-end px-6 py-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 56 56" fill="none">
                        <g opacity="0.7">
                            <path d="M11.6665 28L44.3332 28M44.3332 28L27.9998 11.6666M44.3332 28L27.9998 44.3333" stroke="#5F22D9" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                        </g>
                    </svg>
                </div>)}
            </div>

        </>
    )
}


export default CommonCard;