import {apiHandler} from "../lib/api.js";

// endPoint: "user/register",
//     method: "POST",
//     credentials: null,
//     bodyContent: userDetails,
//     defaultErrMsg: "Registration Failed",

export const gettingSubjectDetails = async () => {
  const subjectList = await apiHandler({
    endPoint: "subjects",
    method: "GET",
    defaultErrMsg: "Subject Fetch Failed",
  });
  return subjectList;
};

export const addingSubjectDetails = async (subjectDetails) => {
  const subjectData = await apiHandler({
    endPoint: "subjects",
    method: "POST",
    bodyContent: subjectDetails,
    defaultErrMsg: "Subject Not Added",
  });
  return subjectData;
};

export const updatingSubjectDetails = async (updatedData) => {
  const {id} = updatedData;
  const updatedDetails = await apiHandler({
    endPoint: `subjects/${id}`,
    method: "PUT",
    bodyContent: updatedData,
    defaultErrMsg: "Update Subject Failed",
  });
  return updatedDetails;
};

export const deletingSubject = async (subjectId) => {
  console.log("api Handler running...");
  const deleteData = await apiHandler({
    endPoint: `subjects/${subjectId}`,
    method: "DELETE",
    defaultErrMsg: "Delete Subject Failed",
  });
  return deleteData;
};
