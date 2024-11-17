function CenterHeading({
    heading,
    desc,
    textColor,
    descColor
}) {
    return (
        <>
            <div className="flex flex-col justify-center items-center mb-5">
                <div className="w-full sm:w-1/2 text-center">
                    <div className={`text-heading-01  ${textColor} ${desc ? 'mb-6' : ''}`}>{heading}</div>
                    <div className={`text-heading-04 ${descColor} mb-8 `}>{desc}</div>
                </div>
            </div>
        </>
    )
}

export default CenterHeading;