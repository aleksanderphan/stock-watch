"use client";
import React from "react";
import { Calendar } from "@/components/ui/calendar"

function DividendCalendar(props: { dividendDates: Date[] }) {
  const { dividendDates } = props;

  return (
    <Calendar
      className='mb-20'
      modifiers={{
        divDates: dividendDates,
      }}
      modifiersClassNames={{
        divDates: `text-green-500 font-black bg-slate-300 dark:bg-gray-800 rounded-md`,
      }}
    />
  );
}

export default DividendCalendar;
