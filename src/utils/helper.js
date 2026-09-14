import {getYear, getMonth, getDate} from "date-fns";
import {enUS} from "date-fns/locale";
import {Navigate, Route} from "react-router-dom";

export const noOfDaysInMonth = (year, month) => {
  const days = [];
  for (let i = 1; i <= new Date(year, month, 0).getDate(); i++) {
    days.push({id: i, day: i});
  }
  return days;
};

export const getYearList = () => {
  const years = [];
  const currentYear = getYear(new Date());
  for (let i = currentYear - 5; i <= currentYear; i++) {
    years.push({value: i, label: i});
  }
  return years;
};

export const getDateFormate = (year, month, day) => {
  return new Date(year, month, day);
};

export const today = getDate(new Date());
export const toMonth = getMonth(new Date()) + 1;
export const toYear = getYear(new Date());

export const convertNumberToMonthName = (number) => {
  const monthName = enUS.localize.month(number - 1);
  return monthName;
};

export const createHashMap = (arrayOfObjects) => {
  const hashMap = {};
  for (let eachData of arrayOfObjects) {
    hashMap[new Date(eachData.date).getDate()] = eachData.status;
  }
  return hashMap;
};

export const subjectMenuMethod = [
  {
    methodName: "Edit",
    method: () => {},
  },
  {
    methodName: "Delete",
    method: () => {},
  },
];
