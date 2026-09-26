import {useState} from "react";

export const useModal = (initialDetails) => {
  let initialName = null; // initially form is empty for adding subject
  // if not null then get selected subject details in form
  if (initialDetails !== null) {
    initialName = initialDetails.subjectName;
  }

  const [subjectName, setSubjectName] = useState(initialName);

  const onChangeSubjectName = (event) => {
    setSubjectName(event.target.value);
  };
  return {subjectName, onChangeSubjectName};
};
