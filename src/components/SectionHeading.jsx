function SectionHeading({
  Heading,
  Desc,
  Color = 'black',
  center = false,
  right = false,
  layout = 'vertical', // Default to 'vertical'
  headingContainerWidth = 'w-1/2',
  paddingTop='0',
}) {
  return (
    <div
    className={`w-full`} 
    >
      {layout === 'vertical' ? (
        <div
          className={` w-full md:${headingContainerWidth} flex flex-col justify-end ${center ? 'items-center' : right ? 'items-end' : 'items-center md:items-start'} `}
        >
          {Heading && <h1
            className={` text-neutral-white text-heading-01 leading-heading-01 mb-6 sm:mb-2 md:mb-6 font-medium text-center sm:text-center md:text-left`}
            style={{ color: Color }}
            dangerouslySetInnerHTML={{ __html: Heading }}
          />}
          {Desc &&  (<p
            className={`text-neutral-white text-subtitle-01 leading-subtitle-01 font-normal text-center md:text-left`}
            style={{ color: Color }}
            dangerouslySetInnerHTML={{__html: Desc}}
          >
          </p>)}
        </div>
      ) : (
        <div
          className={`flex flex-col md:flex-row mb-6 pt-${paddingTop} justify-end ${center ? 'justify-center' : right ? 'justify-end' : 'justify-start'}`}
        >
          <h1
            className={`text-heading-01 leading-heading-01 font-semibold mb-3 sm:mb-2 md:mb-6`}
            style={{ color: Color }}
          >
            {Heading}
          </h1>
         {Desc && (
          <p
            className={`text-subtitle-01 leading-subtitle-01 font-normal`} 
            style={{ color: Color }}
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
