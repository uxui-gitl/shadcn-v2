function SectionWrapper({
  children,
  style,
  BGColor = "bg-primary-white",
  ID = "",
 
}) {
  
  return (
    <div
      id={ID}
      className={`rounded-3xl ${BGColor} min-h-[540px]`}
      style={{...style}}
    >
      {children}
    </div>
  );
}

export default SectionWrapper;
