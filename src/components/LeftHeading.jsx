function LeftHeading({ heading, desc, textColor, descColor }) {
  return (
    <>
      {heading && (
        <div className="flex flex-col justify-center items-center sm:items-start mb-6">
          <div className="w-full sm:w-1/2 text-center sm:text-left">
            <div
              className={`text-heading-03 md:text-heading-02 ${textColor}  ${
                desc ? "md:mb-6 mb-4" : ""
              }`}
            
            >
              {heading}
            </div>
            <div
              className={`text-heading-04 ${descColor}`}
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
