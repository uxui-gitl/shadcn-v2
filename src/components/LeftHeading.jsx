function LeftHeading({ heading, desc, textColor }) {
  return (
    <>
      {heading && (
        <div className="flex flex-col justify-center items-center sm:items-start mb-5">
          <div className="w-full sm:w-1/2 text-center sm:text-left">
            <div
              className={`text-heading-01 leading-heading-01 font-semibold  ${textColor}  ${
                desc ? "mb-6" : ""
              }`}
            
            >
              {heading}
            </div>
            <div
              className={`text-subtitle-01 leading-subtitle-01 font-medium mb-8 ${textColor}`}
             
            >
              {desc}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default LeftHeading;
