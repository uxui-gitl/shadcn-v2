function CenterHeading({
    heading,
    desc,
    textColor,
}) {
    return (
        <>
            <div className="flex flex-col justify-center items-center mb-5">
                <div className="w-full sm:w-1/2 text-center">
                    <div className={`text-heading-01 leading-heading-01 font-semibold ${textColor} ${desc ? 'mb-6' : ''}`}>{heading}</div>
                    <div className={`text-subtitle-01 leading-subtitle-01 font-semibold ${textColor} mb-8 `}>{desc}</div>
                </div>
            </div>
        </>
    )
}

export default CenterHeading;