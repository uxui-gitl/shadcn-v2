function SectionWrapper({
  children,
  style,
  BGColor = "#fff",
  ID = "",
  Padding = true,
}) {
  const checkPadding = Padding
    ? "py-12 sm:py-14 md:py-36 px-10 sm:px-12 md:px-36"
    : "";
  return (
    <div
      id={ID}
      className={`${checkPadding} rounded-3xl`}
      style={{ ...style, backgroundColor: BGColor}}
    >
      {children}
    </div>
  );
}

export default SectionWrapper;
