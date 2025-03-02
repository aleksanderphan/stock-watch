"use client"
import React, { useState, useEffect, useCallback } from "react";
import { Calendar } from "@/components/ui/calendar";
import DividendDialog from "./dividendDialog";
import { getToday } from "@/lib/utils";

function DividendCalendar(props: { dividendDates: Date[] }) {
  const [selected, setSelected] = useState<Date>();
  const [today, setToday] = useState<Date | null>(null);
  const [dividendDetails, setDividendDetails] = useState<{ id: number; ticker: string; exDate: string; yield: string; dividend: string; price: number }[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const { dividendDates } = props;

  useEffect(() => {
    setToday(getToday);
  }, []);

  const isDividendDate = useCallback((date: Date) => {
    return dividendDates.some((divDate) => date.toDateString() === divDate.toDateString());
  }, [dividendDates]);

  const getDividendDetails = async (date: Date) => {
    const response = await fetch(`/api/stock?date=${date.toISOString()}`);
    const data = await response.json();
  
    console.log(data);
    return data;
  };

  useEffect(() => {
    if (selected && isDividendDate(selected)) {
      setLoading(true);
      getDividendDetails(selected).then((data) => {
        setDividendDetails(data);
        setLoading(false);
      });
    }
  }, [selected, isDividendDate]);  

  return (
    <div>
      <Calendar
        className="mb-20"
        hideNavigation
        defaultMonth={today ?? new Date(new Date().getFullYear(), 0)}
        startMonth={new Date(new Date().getFullYear(), 0)}
        endMonth={new Date(new Date().getFullYear(), 11)}
        numberOfMonths={12}
        mode="single"
        selected={selected}
        onSelect={(date) => setSelected(date)}
        classNames={{
          month_caption: `py-4 font-semibold`,
          selected: `text-amber-400 dark:drop-shadow-[0_1.5px_1.5px_rgba(125,125,125)]`,
          today: `text-blue-500`,
          root: `text-center text-black dark:text-white overflow`,
          months: `grid grid-cols-1 grid-rows-12 sm:grid-cols-2 sm:grid-rows-6 lg:grid-cols-3 lg:grid-rows-4 xl:grid-cols-4 xl:grid-rows-3 2xl:grid-cols-5 2xl:grid-rows-3 gap-4 lg:gap-7`,
          month: `bg-[#F0F0F0] dark:bg-[#1E1E1E] rounded-md overflow-auto p-2 drop-shadow-md shadow-[0px_10px_20px_0px_rgba(0,_0,_0,_0.1)] dark:shadow-[0px_8px_24px_-4px_rgba(255,_255,_255,_0.1)]`,
          day: `p-1 sm:p-2 font-semibold`,
        }}
        modifiers={{
          divDates: dividendDates,
        }}
        modifiersClassNames={{
          divDates: `text-green-600 font-black bg-slate-200 dark:bg-gray-800 rounded-md`,
        }}
      />

      {selected && isDividendDate(selected) && (
        <DividendDialog 
        selected={selected} 
        loading={loading} 
        dividendDetails={dividendDetails} 
        onClose={() => setSelected(undefined)} 
      />
      )}
    </div>
  );
}

export default DividendCalendar;
