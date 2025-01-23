"use client";
import React, { useState } from "react";
import { DayPicker } from "react-day-picker";

function Calendar() {
  const [selected, setSelected] = useState<Date>();
  const dividendDates = [
    new Date(2025, 0, 2),
    new Date(2025, 0, 8),
    new Date(2025, 0, 10),
  ];

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
        selected: `text-blue-500 border border-blue-500`,
        today: `text-blue-500`,
        root: `text-center text-white`,
        months: `grid grid-cols-3 grid-rows-4 gap-4`,
        // month: `border-t border-white rounded-xl overflow-auto`,
        day: `p-4`,
      }}
      modifiers={{
        divDates: dividendDates,
      }}
      modifiersClassNames={{
        divDates: `text-red-500 font-black`,
      }}
    />
  );
}

export default Calendar;
