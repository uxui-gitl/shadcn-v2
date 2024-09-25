function LeftHeading({
    heading,
    desc,
    textColor
}) {
    return (
        <>
            {heading && <div className="flex flex-col justify-center items-center sm:items-start mb-16">
                <div className="w-full sm:w-1/2 text-center sm:text-left">
                <div className={`text-3xl sm:text-2xl md:text-[54px] font-semibold leading-tight md:leading-[64px]  ${desc ? 'mb-6' : ''}`} style={{color:textColor}}>{heading}</div>
                <div className={`text-lg font-semibold `} style={{color:textColor}}>{desc}</div>
                </div>
            </div>
}
        </>
    )
}

export default LeftHeading;