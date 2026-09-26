import {useNavigate} from "react-router-dom";

// // import react icon
import {BsThreeDotsVertical} from "react-icons/bs";

import SubjectMenu from "./SubjectMenu";

// import UI Component
import ProgressCircle from "@/components/ui/shadcn/ProgressCircle";
import {Button} from "@/components/ui/shadcn/button";

// // import utils
// import {subjectItemMenu} from "../../../utils/constant.js";

const SubjectItem = (props) => {
  const {
    subjectDetails,
    openSubjectModal,
    onHandleSelectedSubject,
    onDeleteSubject,
  } = props;

  const navigate = useNavigate();

  const {id, subjectName, percentage, classNeeded} = subjectDetails;
  const isHigh = percentage >= 75;
  return (
    <li
      className="relative cursor-pointer flex md:flex-col justify-between items-center bg-transparent px-3 py-2 rounded-md border border-primary/9 shadow-md shadow-primary/50"
      onClick={() => navigate(`/subject-status/${id}`)}>
      <SubjectMenu
        onDeleteSubject={onDeleteSubject}
        onHandleSelectedSubject={onHandleSelectedSubject}
        subjectDetails={subjectDetails}
        openSubjectModal={openSubjectModal}>
        <Button
          size="md"
          variant="ghost"
          className="absolute top-2 right-1 py-1 text-white rounded hover:border-primary/40 transition">
          <BsThreeDotsVertical size={20} />
        </Button>
      </SubjectMenu>
      <div className="grow flex md:flex-col-reverse md:justify-center items-center md:gap-3">
        <div className="grow md:text-center">
          <h1 className="grow text-white font-base text-md/6 pr-3">
            {subjectName}
          </h1>
          <p
            className={`${isHigh ? "text-success" : "text-danger"} text-[12px] font-400`}>
            {isHigh ? "Sufficient Classes" : `ClassNeeded : ${classNeeded}`}
          </p>
        </div>
        <div className="pr-4">
          <ProgressCircle
            radius={27}
            progress={percentage}
            size={70}
            stroke={4}
            progressColor={
              percentage >= 75 ? "var(--success)" : "var(--danger)"
            }
          />
        </div>
      </div>
    </li>
  );
};

export default SubjectItem;
