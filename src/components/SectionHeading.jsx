function SectionHeading({
  Heading,
  Desc,
  Color = "text-neutral-white",
  center = false,
  right = false,
  layout = "vertical", // Default to 'vertical'
  headingContainerWidth = "",
  paddingTop = "0",
}) {
  return (
    <div className={`w-full`}>
      {layout === "vertical" ? (
        <div
          className={` w-full  ${
            center ? "mx-auto" : ""
          }  md:${headingContainerWidth} flex flex-col justify-end ${
            center
              ? "items-center"
              : right
              ? "items-end"
              : "items-center md:items-start"
          } `}
        >
          {Heading && (
            <h1
              className={`text-neutral-white text-heading-03 md:text-heading-02 text-center mb-6 ${
                center ? "md:text-center" : "md:text-left"
              } md:text-left ${Color} mb-6 sm:mb-2 md:mb-6`}
              dangerouslySetInnerHTML={{ __html: Heading }}
            />
          )}
          {Desc && (
            <p
              className={`text-neutral-white text-heading-04  text-center ${
                center ? "md:text-center" : "md:text-left"
              } ${Color} mb-8`}
              dangerouslySetInnerHTML={{ __html: Desc }}
            ></p>
          )}
        </div>
      ) : (
        <div
        className={`flex flex-col md:flex-row mb-6 pt-${paddingTop}`}
        style={{ minHeight: "100px" }}
      >
        {/* Heading Section */}
        <div
          className={`basis-[40%] flex flex-col ${
            center ? "items-center" : right ? "items-end" : "items-start"
          }`}
        >
          <h1
            className={`text-heading-02 mb-3 sm:mb-2 md:mb-6 text-center md:text-left ${Color}`}
          >
            {Heading}
          </h1>
        </div>
      
        {/* Desc Section */}
        <div className="basis-[60%] flex flex-col justify-end">
          {Desc && (
            <p
              className={`text-subtitle-01 text-center  mb-3 sm:mb-2 md:mb-6 md:text-left ${Color}`}
              style={{ marginTop: "auto" }} // Inline style to ensure alignment
            >
              {Desc}
            </p>
          )}
        </div>
      </div>
      
      )}
    </div>
  );
}

export default SectionHeading;
