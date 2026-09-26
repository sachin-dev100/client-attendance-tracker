import {useState} from "react";

export const useModal = () => {
  const [attendenceStatus, setAttendenceStatus] = useState("present");

  const onChangeAttendenceStatus = (value) => {
    setAttendenceStatus(value);
  };
  console.log(attendenceStatus);

  return {attendenceStatus, onChangeAttendenceStatus};
};
