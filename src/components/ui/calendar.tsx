"use client";
import React, { useState } from "react";
import { DayPicker } from "react-day-picker";

export type CalendarProps = React.ComponentProps<typeof DayPicker> & {
  className?: string;
  modifiers?: Record<string, Date[]>;
};

function Calendar({ className, modifiers, ...props }: CalendarProps) {
  const [selected, setSelected] = useState<Date>();

  return (
    <DayPicker
      {...props}
      className={className}
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
        selected: `text-amber-400 dark:drop-shadow-[0_1.5px_1.5px_rgba(125,125,125)]`,
        today: `text-blue-500`,
        root: `text-center text-black dark:text-white overflow`,
        months: `grid grid-cols-1 grid-rows-12 sm:grid-cols-2 sm:grid-rows-6 lg:grid-cols-3 lg:grid-rows-4 xl:grid-cols-4 xl:grid-rows-3 2xl:grid-cols-5 2xl:grid-rows-3 gap-4 lg:gap-7`,
        month: `bg-white dark:bg-[#1E1E1E] rounded-md overflow-auto p-2 drop-shadow-md`,
        day: `p-1 sm:p-2 font-semibold`,
      }}
      modifiers={modifiers}
    />
  );
}
Calendar.displayName = "Calendar";

export { Calendar };
