const SubjectStatsSection = (props) => {
  const {subjectStatus} = props;
  const {present, absent, totalClass, classNeeded} = subjectStatus;
  return (
    <div className="grid grid-cols-[repeat(2,_1fr)] text-white font-text gap-3">
      <div className="flex flex-col items-center justify-center rounded shadow-md shadow-primary/10 border-1 border-be-3 pt-3 pb-2">
        <h1 className="m-0 text-lg text-white/80">Present</h1>
        <p className="m-0 text-[34px] text-success font-bold">{present}</p>
      </div>
      <div className="flex flex-col items-center justify-center rounded shadow-md shadow-primary/10 border-1 border-be-3 pt-3 pb-2">
        <h1 className="m-0 text-lg text-white/80">Absent</h1>
        <p className="m-0 text-[34px] text-danger font-bold">{absent}</p>
      </div>
      <div className="flex flex-col items-center justify-center rounded shadow-md shadow-primary/10 border-1 border-be-3 pt-3 pb-2">
        <h1 className="m-0 text-lg text-white/80">Total Class</h1>
        <p className="m-0 text-[34px] text-white font-bold">{totalClass}</p>
      </div>
      <div className="flex flex-col items-center justify-center rounded shadow-md shadow-primary/10 border-1 border-be-3 pt-3 pb-2">
        <h1 className="m-0 text-lg text-white/80">Class Needed</h1>
        <p className="m-0 text-[34px] text-warning font-bold">{classNeeded}</p>
      </div>
    </div>
  );
};

export default SubjectStatsSection;
