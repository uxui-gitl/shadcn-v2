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
    className={`w-full pt-${paddingTop} ${center ? 'text-center mx-auto' : right ? 'text-right ml-auto' : 'text-left'}`} 
    >
      {layout === 'vertical' ? (
        <div
          className={`flex flex-col justify-end ${center ? 'items-center' : right ? 'items-end' : 'items-start'} `}
        >
          <h1
            className={`text-2xl sm:text-lg md:text-[54px] mb-6 sm:mb-10 md:mb-14 font-medium md:leading-[62px]`}
            style={{ color: Color }}
            dangerouslySetInnerHTML={{ __html: Heading }}
          />
          <p
            className={`text-lg sm:text-base md:text-xl font-medium mb-6 sm:mb-10 md:mb-14`}
            style={{ color: Color }}
            dangerouslySetInnerHTML={{__html: Desc}}
          >
           
          </p>
        </div>
      ) : (
        <div
          className={`flex pt-${paddingTop} justify-end ${center ? 'justify-center' : right ? 'justify-end' : 'justify-start'} items-end `}
        >
          <h1
            className={`text-2xl sm:text-lg md:text-[54px] font-medium md:leading-[62px]`}
            style={{ color: Color }}
          >
            {Heading}
          </h1>
          <p
            className={`text-lg sm:text-base md:text-xl font-medium ml-4`} 
            style={{ color: Color }}
          >
            {Desc}
          </p>
        </div>
      )}
    </div>
  );
}

export default SectionHeading;
