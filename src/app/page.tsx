'use client'
import { useState, useEffect } from "react";
import Header from "../components/header";
import DividendCalendar from "../components/dividendCalendar";

export default function Home() {
  const [dividendDates, setDividendDates] = useState<Date[]>([]);

  useEffect(() => {
    async function fetchDividendDates() {
      const response = await fetch("/api/exDates");
      const data = await response.json();
      const formattedDate = data.map((dateStr: string) => new Date(dateStr));      
      setDividendDates(formattedDate);
    }

    fetchDividendDates();
  }, []);

  return (
    <div className="grid min-h-screen items-center justify-items-center pb-20 font-[family-name:var(--font-geist-sans)]">
      <Header />
      <DividendCalendar dividendDates={dividendDates} />
      <p className='text-center text-gray-400 bg-white p-1 dark:bg-gray-800'> Work in Progress. 👷‍♀️</p>
    </div>
  );
}
