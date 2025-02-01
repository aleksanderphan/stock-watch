"use client"
import React, { useState, useEffect } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Skeleton } from "@/components/ui/skeleton";
import DividendDataTable from "./dividendDataTable";

function DividendCalendar(props: { dividendDates: Date[] }) {
  const [selected, setSelected] = useState<Date>();
  const [dividendDetails, setDividendDetails] = useState<{ id: number; ticker: string; exDate: string; yield: string; dividend: string; price: number }[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const { dividendDates } = props;

  const isDividendDate = (date: Date) => {
    return dividendDates.some((divDate) => date.toDateString() === divDate.toDateString());
  };

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
  }, [selected]);

  return (
    <div>
      <Calendar
        className="mb-20"
        hideNavigation
        defaultMonth={new Date(new Date().getFullYear(), 0)}
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
          month: `bg-white dark:bg-[#1E1E1E] rounded-md overflow-auto p-2 drop-shadow-md`,
          day: `p-1 sm:p-2 font-semibold`,
        }}
        modifiers={{
          divDates: dividendDates,
        }}
        modifiersClassNames={{
          divDates: `text-green-500 font-black bg-slate-300 dark:bg-gray-800 rounded-md`,
        }}
      />

      {selected && isDividendDate(selected) && (
        <Dialog open={!!selected} onOpenChange={() => setSelected(undefined)}>
          <DialogTrigger asChild>
            <button className="hidden" aria-hidden="true" />
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Dividend Date Details</DialogTitle>
            </DialogHeader>
            {loading ? (
              <div className="space-y-4">
                <Skeleton className="w-full h-12 rounded-xl" />
              </div>
            ) : dividendDetails.length > 0 ? (
              <DividendDataTable data={dividendDetails} />
            ) : (
              <p className="text-center">No dividend data available yet for this date.</p>
            )}
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}

export default DividendCalendar;
