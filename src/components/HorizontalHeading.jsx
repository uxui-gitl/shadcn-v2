function HorizontalHeading({
    heading,
    desc,
    textColor,
}) {
    return (
        <>
            <div className="grid sm:grid-cols-2 grid-cols-1 sm:gap-10 mb-16">
                <div className="text-center sm:text-left">
                <div className={`text-3xl sm:text-2xl md:text-[54px] font-semibold leading-tight md:leading-[64px] ${desc ? 'mb-6' : ''}`} style={{color:textColor}}>{heading}</div>
                </div>
                <div className="text-center sm:text-left">
                <div className={`text-lg font-semibold`} style={{color:textColor}}>{desc}</div>
                </div>
            </div>
        </>
    )
}

export default HorizontalHeading;