import OutlinedButtonWithArrow from "@/components/ui/buttons/OutlinedButtonWithArrow";

function OfferingCard ({item}) {
    return (
        <>
        <div className="w-full rounded-3xl group overflow-hidden relative" style={{ background: `url('${item?.cardBGImageUrl}')`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }} >
                <div className={`p-5 relative min-h-[420px] flex flex-col ${item.cardType == 1 ? 'justify-start' : 'justify-end'}`}>
                  <h5 className={`mb-4 text-heading-03 text-[${item?.cardTextColor}] font-semibold min-h-[40px]`}>{item?.cardHeading}</h5>
                  <p className={`mb-3 text-base font-medium line-clamp-4 text-[${item?.cardTextColor}]`}>{item?.cardDesc}</p>
                  {item?.cardHoverData && (
                    <div className="absolute bottom-5 right-5">
                      <OutlinedButtonWithArrow size={32} arrowColor={item?.cardTextColor} />
                    </div>)}

                </div>
                {item?.cardHoverData && (
                  <div className="bg-white p-5 rounded-3xl h-full w-full duration-200 group-hover:-translate-y-full absolute">
                    <div className="">
                      <ol className="max-w-md space-y-1 text-neutral-dark-grey list-decimal list-inside">
                        {item?.cardHoverData.map((item2) => (
                          <>
                            <li>
                              <span className=" text-paragraph-01 leading-paragraph-01 font-semibold text-primary-900">{item2}</span>
                            </li>
                          </>
                        ))}
                      </ol>
                     
                    </div>
                  </div>
                )}
              </div>
        </>
    )
}


export default OfferingCard;