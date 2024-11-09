function LeftHeading({ heading, desc, textColor }) {
  return (
    <>
      {heading && (
        <div className="flex flex-col justify-center items-center sm:items-start  px-4">
          <div className="w-full sm:w-1/2 text-center sm:text-left">
            <div
              className={`text-heading-01 leading-heading-01 font-semibold   ${
                desc ? "mb-6" : ""
              }`}
              style={{ color: textColor }}
            >
              {heading}
            </div>
            <div
              className={`text-lg font-medium `}
              style={{ color: textColor }}
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
