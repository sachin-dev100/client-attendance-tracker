import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import {today, toMonth, toYear} from "@/utils/helper.js";

// Services
import {
  getAttendenceStats,
  markingAttendence,
} from "@/services/attendence.service.js";

import {apiStatusConstant} from "@/utils/constant";
const {initial, progress, success, failure} = apiStatusConstant;

export const useStatus = () => {
  console.log("render component...");
  // Models States
  const [statusOpen, setStatusOpen] = useState(false);

  // Model handlers
  const openStatusModel = () => setStatusOpen(true);
  const closeStatusModel = () => setStatusOpen(false);

  // State Variable Change by User
  const [activeYear, setActiveYear] = useState(toYear);
  const [activeMonth, setActiveMonth] = useState(toMonth);
  const [activeDay, setActiveDay] = useState(today);

  // Handler Functions
  const onChangeActiveYear = (value) => {
    const yearValue = value;
    setActiveYear(value);
    if (activeMonth > toMonth && activeYear != toYear) {
      setActiveMonth(toMonth);
    }
    // month and year mtc today then today day highlight
    if (activeMonth == toMonth && yearValue == toYear) {
      setActiveDay(today);
    } else {
      setActiveDay(null);
    }
  };

  const onChangeActiveMonth = (event) => {
    const monthValue = event.target.value;
    setActiveMonth(event.target.value);
    // month and year mtc today then today day highlight
    if (monthValue == toMonth && activeYear == toYear) {
      setActiveDay(today);
    } else {
      setActiveDay(null);
    }
  };

  const onChangeActiveDay = (value) => {
    setActiveDay(value);
  };

  // Fetch api call
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const fetchStatus = {
    data,
    isLoading,
    error,
  };

  // Action api call
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [actionError, setActionError] = useState(null);
  const actionStatus = {
    isSubmitting,
    actionError,
  };

  // use Params to get subjectId
  const {subjectId} = useParams();

  useEffect(() => {
    onGetSubjectStatus();
  }, [activeMonth, activeYear]);

  // use Services
  // Attendence Data fetching
  const onGetSubjectStatus = async () => {
    setIsLoading(true);
    setError(null); // ✅ reset error on every new call
    try {
      const data = await getAttendenceStats(subjectId, activeMonth, activeYear);
      setData(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false); // ✅ always runs, success or error
    }
  };

  const onMarkAttendence = async (attendenceStatus) => {
    setIsSubmitting(true);
    setActionError(null);

    // creation of body content
    const dateFormate = `${activeYear}-${String(activeMonth).padStart(2, "0")}-${String(activeDay).padStart(2, "0")}`;

    // create attendence Details
    const markDetails = {
      date: dateFormate,
      status: attendenceStatus,
    };
    try {
      await markingAttendence(subjectId, markDetails); // Api Call
      closeStatusModel();
      await onGetSubjectStatus();
    } catch (error) {
      setActionError(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    fetchStatus,
    actionStatus,
    statusOpen,
    openStatusModel,
    closeStatusModel,
    activeYear,
    activeMonth,
    activeDay,
    onMarkAttendence,
    onChangeActiveYear,
    onChangeActiveMonth,
    onChangeActiveDay,
  };
};
