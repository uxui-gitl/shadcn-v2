function HorizontalHeading({
    heading,
    desc,
    textColor,
    title,
}) {
    return (
        <>
        <div className="">
            {title && <div className="text-heading-01 font-semibold mb-10">{title}</div>}
        <div className="grid sm:grid-cols-2 grid-cols-1 sm:gap-10 mb-16">
                <div className="text-center sm:text-left">
                <div className={`text-heading-01 font-semibold leading-heading-01 ${desc ? 'mb-6' : ''}`} style={{color:textColor}}>{heading}</div>
                </div>
                <div className="text-center sm:text-left">
                <div className={`text-lg font-semibold`} style={{color:textColor}}>{desc}</div>
                </div>
            </div>
        </div>
          
        </>
    )
}

export default HorizontalHeading;