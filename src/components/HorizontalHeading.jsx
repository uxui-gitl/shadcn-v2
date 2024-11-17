function HorizontalHeading({
    heading,
    desc,
    textColor,
    title,
    descColor
}) {
    return (
        <>
        <div className="text-center md:text-left">
            {title && <div className="text-body-01 text-neutral-dark-grey mb-5">{title}</div>}
        <div className="grid sm:grid-cols-2 grid-cols-1 sm:gap-10 mb-5">
                <div className="text-center sm:text-left">
                <div className={`text-heading-01 ${textColor} ${desc ? 'mb-6' : ''}`}>{heading}</div>
                </div>
                <div className="text-center sm:text-left">
                <div className={`text-heading-04 ${descColor} mb-8`}>{desc}</div>
                </div>
            </div>
        </div>
          
        </>
    )
}

export default HorizontalHeading;