import OutlinedButtonWithArrow from "@/components/ui/buttons/OutlinedButtonWithArrow";

function MFCard({item}){
    return(
        <>
        <div className="w-full min-h-[50vh] bg-white rounded-3xl group overflow-hidden relative border-[0.5px] border-primary-900 border-opacity-20">
                <div
                  className="h-[220px] bg-slate-700"
                  style={{
                    background: `url('/Transformation/sale-force-crm/m1.svg')`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                ></div>
                <div className="h-[35vh] p-5 relative">
                  <h5 className="mb-4 text-heading-03  text-primary-900 font-semibold ">
                    {item?.cardHeading}
                  </h5>
                  <p className="mb-6 text-base text-neutral-darkest-grey font-normal">
                    {item?.cardDesc}
                  </p>
                  {/* {item?.cardHoverData && (
                    <div className="absolute bottom-4 right-4">
                      <OutlinedButtonWithArrow size={24} />
                    </div>
                  )} */}
                </div>
                {item?.cardHoverData.length > 0 && (
                  <div className="bg-secondary-10 p-5 rounded-3xl h-full w-full duration-200 group-hover:-translate-y-full absolute">
                    <div className="">
                      <ol className="max-w-md space-y-1 text-gray-500 list-decimal list-inside dark:text-gray-400">
                        {item?.cardHoverData.map((item2) => (
                          <>
                            <li>
                              <span className="font-semibold text-black">
                                {item2}
                              </span>
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


export default MFCard;