function HorizontalHeading({
    heading,
    desc,
    textColor,
    title,
}) {
    return (
        <>
        <div className="">
            {title && <div className="text-label-01 font-semibold text-neutral-mid-grey mb-5">{title}</div>}
        <div className="grid sm:grid-cols-2 grid-cols-1 sm:gap-10 mb-5">
                <div className="text-center sm:text-left">
                <div className={`text-heading-01 leading-heading-01 font-semibold  ${textColor}  ${desc ? 'mb-6' : ''}`}>{heading}</div>
                </div>
                <div className="text-center sm:text-left">
                <div className={`text-subtitle-01 leading-subtitle-01font-semibold  ${textColor} mb-8`}>{desc}</div>
                </div>
            </div>
        </div>
          
        </>
    )
}

export default HorizontalHeading;