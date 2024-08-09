function SectionHeading({Heading , Desc, Color = 'black', MaxWidth='100%'}){
    return(
        <>
        <div className={`text-center md:text-left w-full md:max-w-screen-sm`}>
        <h1 className="text-2xl sm:text-lg md:text-[54px] mb-6 sm:mb-10 md:mb-14 font-medium md:leading-[62px]" style={{color:Color,}}>{Heading}</h1>
        <p className={`text-lg sm:text-base md:text-xl font-medium `} style={{color: Color}}>{Desc}</p>
        </div>
        </>

        
    )
}

export default SectionHeading;