function Announcement(props: any) {
  const { text } = props;
  return (
    <>
      <div className="bg-[#0056BC] flex justify-center text-xs p-[19px] text-center">
        <p>
          {text
            ? text
            : "Godrej Infotech secures a contract for Oracle implementation services with India's premier fertility healthcare centre"}
        </p>
      </div>
    </>
  );
}

export default Announcement;
