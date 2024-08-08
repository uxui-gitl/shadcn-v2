function SectionWrapper({ children , style, BGColor='#fff', ID=''}) {
    return (
        <div id={ID} className='py-10 sm:py-14 md:py-24 px-10 sm:px-12 md:px-36 rounded-3xl' style={{...style , backgroundColor:BGColor}}>
            {children}
        </div>
    )
}

export default SectionWrapper;