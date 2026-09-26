import {
  getYearList,
  noOfDaysInMonth,
  today,
  toMonth,
  toYear,
  convertNumberToMonthName,
  createHashMap,
} from "@/utils/helper.js";

import StatusModel from "./StatusModel";

import { RiArrowDropDownLine } from "react-icons/ri";

import { monthList, weekList, statusColorMap } from "@/utils/constant.js";

import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/shadcn/toggle-group";

import { Button } from "@/components/ui/shadcn/button";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/shadcn/popover";

const Calender = (props) => {
  const {
    actionStatus,
    statusOpen,
    openStatusModel,
    closeStatusModel,
    onMarkAttendence,
    activeYear,
    activeMonth,
    activeDay,
    onChangeActiveYear,
    onChangeActiveMonth,
    onChangeActiveDay,
    attendenceStatus,
    onChangeAttendenceStatus,
    attendenceRecordList,
  } = props;

  const monthFirstDate = new Date(activeYear, activeMonth - 1, 1);
  const firstDay = monthFirstDate.getDay();
  const emptyArray = Array.from({ length: firstDay });

  const yearListData = getYearList();
  const days = noOfDaysInMonth(activeYear, activeMonth);
  const dateStatusMap = createHashMap(attendenceRecordList);

  return (
    <>
      <div className="flex justify-between items-center">
        {/* Toggle for Year Change */}
        <div className="flex flex-col">
          <p className="text-[15px] font-text"> Year </p>
          <ToggleGroup
            type="single"
            size="lg"
            defaultValue="top"
            onValueChange={(value) => onChangeActiveYear(value)}
            variant="outline"
            spacing={2}>
            <ToggleGroupItem
              className={`border-primary/60 w-14 ${activeYear === toYear - 1 ? "bg-orange" : "bg-tranparent"}`}
              value={toYear - 1}
              aria-label="Toggle top">
              {toYear - 1}
            </ToggleGroupItem>
            <ToggleGroupItem
              className={`border-primary/60 w-14 ${activeYear === toYear ? "bg-orange" : "bg-transition"}`}
              value={toYear}
              aria-label="Toggle bottom">
              {toYear}
            </ToggleGroupItem>
          </ToggleGroup>
        </div>

        {/* PopUp for Months Change */}
        <div className="flex flex-col">
          <p className="text-[15px] font-text"> Month </p>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                className="w-33 md:w-37 xl:w-45 flex justify-between pl-3 pr-1 bg-transparent border-primary/60"
                size="lg">
                {convertNumberToMonthName(activeMonth)}
                <RiArrowDropDownLine fontSize={30} />
              </Button>
            </PopoverTrigger>
            <PopoverContent align="end" className="w-72 bg-white/95">
              <h1 className="font-semibold text-md text-secondary">
                Select Month
              </h1>
              <ul className="grid grid-cols-3 gap-2">
                {monthList.map((eachMonth) => {
                  return (
                    <li key={eachMonth.value} className="rounded-xl">
                      <Button
                        disabled={
                          eachMonth.value > toMonth && activeYear === toYear
                        }
                        value={eachMonth.value}
                        onClick={onChangeActiveMonth}
                        size="lg"
                        className={`w-full ${eachMonth.value == activeMonth ? "bg-orange" : "bg-secondary"}`}>
                        {eachMonth.label}
                      </Button>
                    </li>
                  );
                })}
              </ul>
            </PopoverContent>
          </Popover>
        </div>
      </div>

      <ul className="grid grid-cols-[repeat(7,1fr)] mt-5 gap-0 font-text text-base">
        {weekList.map((week) => {
          return (
            <li className="text-sm flex justify-center items-center aspect-square border border-primary bg-primary text-white">
              {week.week}
            </li>
          );
        })}
      </ul>

      <ul className="grid grid-cols-[repeat(7,1fr)] mt-5 gap-0 font-text text-base">
        {emptyArray.map((item) => {
          return (
            <li className="text-sm flex justify-center items-center aspect-square border border-primary/30 bg-tranparent text-white" />
          );
        })}
        {days.map((eachDay) => {
          const isToday =
            today == eachDay.day &&
            toMonth == activeMonth &&
            toYear == activeYear;

          const isActiveDay = activeDay == eachDay.day && activeDay !== null;

          const status = dateStatusMap[eachDay.day];

          const bgColor =
            statusColorMap[status] ||
            (isToday
              ? "bg-orange"
              : isActiveDay
                ? "bg-secondary"
                : "bg-transparent");

          const isDisabled = eachDay.day > today && activeYear === toYear;

          return (
            <li
              key={eachDay.day}
              className={`flex flex-col border border-primary/30 rounded aspect-square ${bgColor}`}>
              <Button
                disabled={isDisabled}
                value={eachDay.day}
                onClick={() => {
                  (onChangeActiveDay(eachDay.day), openStatusModel());
                }}
                className={`grow flex flex-col gap-0 bg-transparent p-0 text-lg text-white rounded-none ${isToday ? "font-extrabold animate-text-pulse" : "font-500"}`}>
                {eachDay.day}
              </Button>
            </li>
          );
        })}
      </ul>
      {/* All Dialogs At the Bottom */}
      <StatusModel
        statusOpen={statusOpen}
        closeStatusModel={closeStatusModel}
        onMarkAttendence={onMarkAttendence}
        onChangeAttendenceStatus={onChangeAttendenceStatus}
        attendenceStatus={attendenceStatus}
        actionStatus={actionStatus}
      />
    </>
  );
};

export default Calender;
