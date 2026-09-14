import {useStatus} from "@/features/subjectStatus/useStatus.js";

import ProgressView from "../../components/ui/shadcn/Loader";
import Calender from "@/features/subjectStatus/Calender";
import SubjectStatsSection from "../../features/subjectStatus/SubjectStatsSection";
// import SubjectStatsItem from "@/features/subjectStatus/SubjectStatsItem";
// import AttendenceMark from "@/features/subjectStatus/AttendenceMark";

const SubjectStatus = () => {
  const {
    fetchStatus,
    actionStatus,
    statusOpen,
    openStatusModel,
    closeStatusModel,
    onMarkAttendence,
    activeYear,
    activeMonth,
    activeDay,
    attendenceStatus,
    onChangeActiveYear,
    onChangeActiveMonth,
    onChangeActiveDay,
    onChangeAttendenceStatus,
  } = useStatus();

  const {data, isLoading, error} = fetchStatus;

  const StatusSuccessView = () => {
    const attendenceRecordList = data.attendence;
    const subjectData = data.stats;
    const {subjectName, percentage} = subjectData;
    return (
      <main className="lg:flex lg:gap-7 pt-2 pb-4">
        <section className="lg:grow">
          <header className="flex flex-col">
            <h1 className="text-xl text-white font-bold">{subjectName} 📗</h1>
            {/* apply less than red more than green color ?? */}
            <p
              className={`text-sm font-400 ${percentage >= 75 ? "text-success" : "text-danger"}`}>
              Percentage: {percentage}%
            </p>
          </header>
          <hr className="mt-3" />
          <article>
            <h1 className="mt-3 mb-1 text-[18px] font-400 text-white font-heading font-semibold">
              Calender 📅
            </h1>
            <Calender
              statusOpen={statusOpen}
              openStatusModel={openStatusModel}
              closeStatusModel={closeStatusModel}
              activeDay={activeDay}
              activeMonth={activeMonth}
              activeYear={activeYear}
              onChangeActiveDay={onChangeActiveDay}
              onChangeActiveMonth={onChangeActiveMonth}
              onChangeActiveYear={onChangeActiveYear}
              onChangeAttendenceStatus={onChangeAttendenceStatus}
              attendenceStatus={attendenceStatus}
              attendenceRecordList={attendenceRecordList}
              onMarkAttendence={onMarkAttendence}
              actionStatus={actionStatus}
            />
            <hr className="mt-5" />
          </article>
        </section>

        <section className="pt-3 pb-3 lg:w-200">
          <h1 className="mb-3 text-lg font-semibold font-heading"> Status </h1>
          <SubjectStatsSection subjectStatus={subjectData} />
        </section>
      </main>
    );
  };

  // render different Views
  if (isLoading) return <ProgressView paddingTop="18%" />;
  if (error) return null;
  if (data) return <StatusSuccessView />;
};

export default SubjectStatus;
