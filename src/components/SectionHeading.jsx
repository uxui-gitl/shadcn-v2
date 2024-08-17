function SectionHeading({ Heading, Desc, Color = 'black', MaxWidth = '100%', center = false }) {
    return (
      <div
        className={`w-full md:max-w-screen-sm ${center ? 'text-center mx-auto flex flex-col items-center' : 'text-left'}`}
        style={{ maxWidth: MaxWidth }}
      >
        <h1
          className={`text-2xl sm:text-lg md:text-[54px] mb-6 sm:mb-10 md:mb-14 font-medium md:leading-[62px]`}
          style={{ color: Color }}
        >
          {Heading}
        </h1>
        <p
          className={`w-1/2 text-lg sm:text-base md:text-xl font-medium mb-6 sm:mb-10 md:mb-14`}
          style={{ color: Color }}
        >
          {Desc}
        </p>
      </div>
    );
  }
  
  export default SectionHeading;
  