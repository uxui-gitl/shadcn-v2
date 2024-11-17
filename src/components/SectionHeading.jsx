function SectionHeading({
  Heading,
  Desc,
  Color = "text-neutral-white",
  center = false,
  right = false,
  layout = 'vertical', // Default to 'vertical'
  headingContainerWidth = '',
  paddingTop='0',
}) {
  return (
    <div
    className={`w-full`} 
    >
      {layout === 'vertical' ? (
        <div
          className={` w-full md:w-1/2 ${center? 'mx-auto' : ''}  md:${headingContainerWidth} flex flex-col justify-end ${center ? 'items-center'   : right ? 'items-end' : 'items-center md:items-start'} `}
        >
          {Heading && <h1
            className={`text-neutral-white text-heading-01 text-center mb-6 ${center ? 'md:text-center' : 'md:text-left'} md:text-left ${Color} mb-6 sm:mb-2 md:mb-6`}           
            dangerouslySetInnerHTML={{ __html: Heading }}
          />}
          {Desc &&  (<p
            className={`text-neutral-white text-subtitle-01   text-center ${center ? 'md:text-center' : 'md:text-left'} ${Color} mb-8`}
          
            dangerouslySetInnerHTML={{__html: Desc}}
          >
          </p>)}
        </div>
      ) : (
        <div
          className={`flex flex-col md:flex-row mb-6 pt-${paddingTop} justify-end ${center ? 'justify-center' : right ? 'justify-end' : 'justify-start'}`}
        >
          <h1
            className={`text-heading-01 mb-3 sm:mb-2 md:mb-6 text-center md:text-left ${Color}`}
  
          >
            {Heading}
          </h1>
         {Desc && (
          <p
            className={`text-subtitle-01  text-center  md:text-left ${Color}`} 

          >
            {Desc}
          </p>
         )} 
        </div>
      )}
    </div>
  );
}

export default SectionHeading;
