// import custom Hooks
import {useHome} from "@/features/home/useHome.js";

// import Component
import SubjectItem from "@/features/home/SubjectItem";
import SubjectModal from "@/features/home/subjectModal";

// import ui Component
import ProgressView from "@/components/ui/shadcn/Loader";
import {Input} from "@/components/ui/shadcn/input";
import {Button} from "@/components/ui/shadcn/button";

// Api Constant
import {apiStatusConstant} from "@/utils/constant";
const {initial, progress, success, failure} = apiStatusConstant;

// import icons
import {FaPlus} from "react-icons/fa6";

const Home = () => {
  const {
    fetchStatus,
    actionStatus,
    openSubject,
    selectedSubject,
    onHandleSelectedSubject,
    openSubjectModal,
    closeSubjectModal,
    onFetchSubject,
    onAddingSubject,
    onUpdateSubject,
    onDeleteSubject,
  } = useHome();

  const {isLoading, data, error} = fetchStatus;

  const HomeSuccessView = () => {
    const subjectsList = data;
    const isListEmpty = subjectsList.length === 0;
    if (!isListEmpty) {
      subjectsList.sort(
        (first, second) => first.percentage - second.percentage,
      );
    }

    return isListEmpty ? (
      // Subject List Empty
      <div className="flex justify-center items-center grow">
        <Button
          className="size-40 rounded-full bg-radial-[at_25%_25%] from-blue to-zinc-900 to-75% flex justify-center items-center bg-primary"
          onClick={openSubjectModal}
          disabled={openSubject}
          onClick={() => {
            openSubjectModal();
            onHandleSelectedSubject(null);
          }}>
          <FaPlus size={60} />
        </Button>
        {/* Open Form Modal */}
        <SubjectModal
          selectedSubject={selectedSubject}
          openSubject={openSubject}
          closeSubjectModal={closeSubjectModal}
          actionStatus={actionStatus}
          onAddingSubject={onAddingSubject}
          onUpdateSubject={onUpdateSubject}
        />
      </div>
    ) : (
      <>
        {/* For Subject List is Not Empty */}
        <div className="flex justify-between items-center mt-4">
          <h1 className="text-white text-xl font-heading font-bold">
            Subjects Status
          </h1>
          <Button
            variant="outline"
            onClick={() => {
              openSubjectModal();
              onHandleSelectedSubject(null);
            }}
            disabled={openSubject}
            className="text-white h-10 bg-radial from-primary to-background  border">
            Add Subject
          </Button>
          {/* Open Form Modal */}
          <SubjectModal
            selectedSubject={selectedSubject}
            openSubject={openSubject}
            closeSubjectModal={closeSubjectModal}
            actionStatus={actionStatus}
            onAddingSubject={onAddingSubject}
            onUpdateSubject={onUpdateSubject}
          />
        </div>
        <Input
          type="search"
          className="mt-3 h-9 border-none"
          placeholder="Search Subject..."
        />
        {/* list of subjects */}
        <ul className="grid md:grid-cols-4 gap-3 pt-5 pb-5">
          {subjectsList.map((subject) => (
            <SubjectItem
              onDeleteSubject={onDeleteSubject}
              onHandleSelectedSubject={onHandleSelectedSubject}
              key={subject.id}
              subjectDetails={subject}
              openSubjectModal={openSubjectModal}
            />
          ))}
        </ul>
      </>
    );
  };

  // render different view
  if (isLoading) return <ProgressView />;
  if (error) return <h1> {error}</h1>;
  if (data) return <HomeSuccessView />;
};

export default Home;
