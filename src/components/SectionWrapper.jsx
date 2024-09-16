function SectionWrapper({
  children,
  style,
  BGColor = "#fff",
  ID = "",
  Padding = true,
}) {
  const checkPadding = Padding
    ? "py-12 sm:py-14 md:pt-36 md:pb-40 px-10 md:px-10"
    : "";
  return (
    <div
      id={ID}
      className={`${checkPadding} md:rounded-3xl md:-mt-[1.8rem]`}
      style={{ ...style, backgroundColor: BGColor}}
    >
      {children}
    </div>
  );
}

export default SectionWrapper;
