function SectionWrapper({
  children,
  style,
  BGColor = "bg-primary-white",
  ID = "",
  setTop='true',
 
}) {
  
  return (
    <div
      id={ID}
      className={`rounded-3xl  ${setTop?'-mt-8':''} ${BGColor} min-h-[540px]`}
      style={{...style}}
    >
      {children}
    </div>
  );
}

export default SectionWrapper;
