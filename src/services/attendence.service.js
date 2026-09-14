import {apiHandler} from "../lib/api.js";

// get attendence statics of one subject with the help of subject Id in request
export const getAttendenceStats = async (subjectId, month, year) => {
  const data = await apiHandler({
    endPoint: `attendence/${subjectId}?month=${month}&year=${year}`,
    method: "GET",
    defaultErrMsg: "Status Fetching Failed",
  });
  return data;
};

// mark attendence service to a particular subject
export const markingAttendence = async (subjectId, markDetails) => {
  const data = await apiHandler({
    endPoint: `attendence/${subjectId}`,
    method: "POST",
    bodyContent: markDetails,
    defaultErrMsg: "Attendence Not Marked",
  });
  return data;
};
