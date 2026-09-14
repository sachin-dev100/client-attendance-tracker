// import {apiStatusConstant} from "@/utils/constant";
// const {initial, progress, success, failure} = apiStatusConstant;
// import {attendenceStatus} from "@/utils/constant";
// Month List
// Week List

//import react icon
import {MdEdit, MdDeleteOutline} from "react-icons/md";

// For Find Spelling Correction
export const apiStatusConstant = {
  initial: "INITIAL",
  progress: "PROGRESS",
  success: "SUCCESS",
  failure: "FAILURE",
};

export const attendenceStatus = [
  {
    label: "Present",
    value: "present",
  },
  {
    label: "Absent",
    value: "absent",
  },
  {
    label: "No Class",
    value: "no class",
  },
];

export const monthList = [
  {label: "January", value: 1},
  {label: "February", value: 2},
  {label: "March", value: 3},
  {label: "April", value: 4},
  {label: "May", value: 5},
  {label: "June", value: 6},
  {label: "July", value: 7},
  {label: "August", value: 8},
  {label: "September", value: 9},
  {label: "October", value: 10},
  {label: "November", value: 11},
  {label: "December", value: 12},
];

export const weekList = [
  {
    id: "Monday",
    week: "Mon",
  },
  {
    id: "Tuesday",
    week: "Tue",
  },
  {
    id: "Wednesday",
    week: "Wed",
  },
  {
    id: "Thursday",
    week: "Thu",
  },
  {
    id: "Friday",
    week: "Fri",
  },
  {
    id: "Saturday",
    week: "Sat",
  },
  {
    id: "Sunday",
    week: "Sun",
  },
];

export const statusColorMap = {
  present: "bg-success",
  absent: "bg-danger",
  noClass: "bg-tertiary",
};

export const subjectItemMenu = [
  {
    id: "EDIT",
    itemIcon: MdEdit,
    itemName: "Edit",
  },
  {
    id: "DELETE",
    itemIcon: MdDeleteOutline,
    itemName: "Delete",
  },
];
