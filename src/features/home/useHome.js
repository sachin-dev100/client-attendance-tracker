import {useState, useEffect} from "react";

import {apiStatusConstant} from "@/utils/constant";
const {initial, progress, success, failure} = apiStatusConstant;

import {
  gettingSubjectDetails,
  addingSubjectDetails,
  updatingSubjectDetails,
  deletingSubject,
} from "@/services/subject.service";

export const useHome = () => {
  // Subject Modal State
  const [openSubject, setOpenSubject] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState(null);

  const onHandleSelectedSubject = (data) => {
    setSelectedSubject(data);
  };
  console.log(selectedSubject);

  // Modal State Change
  const openSubjectModal = () => setOpenSubject(true);
  const closeSubjectModal = () => setOpenSubject(false);

  // Fetch API Status
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const fetchStatus = {
    isLoading,
    data,
    error,
  };
  console.log(data);

  // Action API Status
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [actionError, setActionError] = useState(null);
  const actionStatus = {
    isSubmitting,
    actionError,
  };

  useEffect(() => {
    onFetchSubject();
  }, []);

  // Fetching Subject Details
  const onFetchSubject = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await gettingSubjectDetails();
      setData(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  // adding data locally
  const onAddingSubjectLocally = (subjectData) => {
    const appendData = {...subjectData, percentage: 100, classNeeded: 0};
    setData((prevData) => [...prevData, appendData]);
  };

  const emptyDataValidator = (userData) => {
    const isValidate = true;
    for (const [key, value] of Object.entries(userData)) {
      if (value === "") {
        setActionError(`${key} is required !`);
        isValidate = false;
        break;
      }
    }
    return isValidate;
  };

  // On Adding Subject Details
  const onAddingSubject = async (subjectDetails) => {
    setActionError(null);
    const isValidate = emptyDataValidator(subjectDetails);
    if (isValidate) {
      setIsSubmitting(true);
      try {
        const subjectData = await addingSubjectDetails(subjectDetails);
        closeSubjectModal();
        onAddingSubjectLocally(subjectData);
      } catch (error) {
        setActionError(error.message);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  // update subject on locally
  const onUpdatingSubjectLocally = (subjectData) => {
    const subjectId = subjectData.id;
    setData((prevData) =>
      prevData.map((subject) => {
        if (subject.id === subjectId) {
          return {...subject, ...subjectData};
        }
        return subject;
      }),
    );
  };

  // used to make update of subject Details in Db
  const onUpdateSubject = async (updatedDetails) => {
    setIsSubmitting(true);
    setActionError(null);
    try {
      // make an api call
      await updatingSubjectDetails(updatedDetails);
      onUpdatingSubjectLocally(updatedDetails); // Update locally
      closeSubjectModal();
    } catch (error) {
      setActionError(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const onDeleteSubject = async (subjectId) => {
    setIsSubmitting(true);
    setActionError(null);
    try {
      await deletingSubject(subjectId);
      // deleteSubjectLocally(subjectId);
    } catch (error) {
      setActionError(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
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
  };
};
