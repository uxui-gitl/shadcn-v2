function SectionHeading({ Heading, Desc, Color = 'black', MaxWidth = '100%', center = false, right = false }) {
  return (
    <div
      className={`w-full md:max-w-screen-sm ${center ? 'text-center mx-auto flex flex-col items-center' : right ? 'text-right ml-auto flex flex-col items-end' : 'text-left'}`}
      style={{ maxWidth: MaxWidth }}
    >
      <h1
        className={`w-[100%] text-2xl sm:text-lg md:text-[54px] mb-6 sm:mb-10 md:mb-14 font-medium md:leading-[62px] text-left`}
        style={{ color: Color }}
      >
        {Heading}
      </h1>
      <p
        className={`w-[100%] text-lg sm:text-base md:text-xl font-medium mb-6 sm:mb-10 md:mb-14 text-left`}
        style={{ color: Color }}
      >
        {Desc}
      </p>
    </div>
  );
}

export default SectionHeading;
