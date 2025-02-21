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
  {title && (
    <div className="text-body-02 text-neutral-dark-grey mb-5">
      {title}
    </div>
  )}
  <div className="grid sm:grid-cols-2 grid-cols-1 sm:gap-10 mb-5">
    {/* Left Section */}
    <div className="text-center sm:text-left flex flex-col justify-between">
    <div
  className={`text-heading-03 md:text-heading-02 ${textColor} ${desc ? 'md:mb-6 mb-4' : ''}`}
  dangerouslySetInnerHTML={{ __html: heading }}
></div>
    </div>

    {/* Right Section */}
    <div className="text-center sm:text-left flex flex-col justify-between">
      <div className={`text-body-01 font-medium ${descColor} md:mb-8 mb-4 mt-auto`} dangerouslySetInnerHTML={{ __html: desc }}>
     
      </div>
    </div>
  </div>
</div>

          
        </>
    )
}

export default HorizontalHeading;