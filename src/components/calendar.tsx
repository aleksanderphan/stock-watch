"use client";
import React, { useState } from "react";
import { DayPicker } from "react-day-picker";

function Calendar(props: { dividendDates: Date[] }) {
  const [selected, setSelected] = useState<Date>();
  const { dividendDates } = props;

  return (
    <DayPicker
      hideNavigation
      defaultMonth={new Date()}
      startMonth={new Date(new Date().getFullYear(), 0)}
      endMonth={new Date(new Date().getFullYear(), 11)}
      numberOfMonths={12}
      mode="single"
      selected={selected}
      onSelect={setSelected}
      classNames={{
        month_caption: `py-4 font-semibold`,
        selected: `text-yellow-500`,
        today: `text-blue-500`,
        root: `text-center text-black dark:text-white overflow`,
        months: `grid grid-cols-1 grid-rows-12 sm:grid-cols-2 sm:grid-rows-6 lg:grid-cols-3 lg:grid-rows-4 xl:grid-cols-4 xl:grid-rows-3 2xl:grid-cols-5 2xl:grid-rows-3 gap-4 lg:gap-7`,
        month: `bg-white dark:bg-[#1E1E1E] rounded-md overflow-auto p-2 drop-shadow-md`,
        day: `p-1 sm:p-2 font-semibold`,
      }}
      modifiers={{
        divDates: dividendDates,
      }}
      modifiersClassNames={{
        divDates: `text-green-500 font-black`,
      }}
    />
  );
}

export default Calendar;
