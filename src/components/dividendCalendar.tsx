"use client";
import React, { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import DividendDataTable from "./dividendDataTable";

function DividendCalendar(props: { dividendDates: Date[] }) {
  const [selected, setSelected] = useState<Date>();
  const { dividendDates } = props;

  const isDividendDate = (date: Date) => {
    return dividendDates.some(divDate =>
      date.toDateString() === divDate.toDateString()
    );
  };

  const getDividendDetails = (date: Date) => {
    // TODO: Filter data sesuai tanggal
    return [
      { id: 1, ticker: "BBRI", exDate: new Date(2025, 0, 2).toLocaleDateString(), divYield: "2.05%", dividend: "84", price: 4090 },
      { id: 2, ticker: "BSSR", exDate: new Date(2025, 0, 8).toLocaleDateString(), divYield: "2.68%", dividend: "WORK", price: 4420 },
      { id: 3, ticker: "IPCM", exDate: new Date(2025, 0, 8).toLocaleDateString(), divYield: "1.42%", dividend: "IN", price: 268 },
      { id: 4, ticker: "SDRA", exDate: new Date(2025, 0, 10).toLocaleDateString(), divYield: "4.99%", dividend: "PROGRESS", price: 384 },
    ];
  };

  return (
    <div>
      <Calendar
        className="mb-20"
        hideNavigation
        defaultMonth={new Date()}
        startMonth={new Date(new Date().getFullYear(), 0)}
        endMonth={new Date(new Date().getFullYear(), 11)}
        numberOfMonths={12}
        mode="single"
        selected={selected}
        onSelect={(date) => {
          setSelected(date);
        }}
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
            <DividendDataTable data={getDividendDetails(selected)} />
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}

export default DividendCalendar;
