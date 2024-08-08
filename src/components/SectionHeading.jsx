function SectionHeading({Heading , Desc, Color = 'black', MaxWidth='100%'}){
    return(
        <>
        <div className="">
        <h1 className="text-base sm:text-lg md:text-[54px] mb-6 sm:mb-10 md:mb-14 font-medium md:leading-[62px]" style={{color:Color,}}>{Heading}</h1>
        <p className="text-sm sm:text-base md:text-xl font-medium" style={{color: Color, maxWidth: MaxWidth}}>{Desc}</p>
        </div>
        </>

        
    )
}

export default SectionHeading;