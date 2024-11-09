function SectionWrapper({
  children,
  style,
  BGColor = "#fff",
  ID = "",
  Padding = false,
}) {
  const checkPadding = Padding
    ? "py-12 sm:py-14 md:pt-36 md:pb-40 px-10 md:px-10"
    : "";
  return (
    <div
      id={ID}
      className={`${checkPadding} rounded-3xl -mt-8`}
      style={{ ...style, backgroundColor: BGColor}}
    >
      {children}
    </div>
  );
}

export default SectionWrapper;
