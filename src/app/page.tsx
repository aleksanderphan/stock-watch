import Header from "../components/header";
import DividendCalendar from "../components/dividendCalendar";

export default function Home() {
  // TODO: ubah ke API
  const dividendDates = [
    new Date(2025, 0, 2),
    new Date(2025, 0, 8),
    new Date(2025, 0, 10),
    new Date(2025, 1, 12),
    new Date(2025, 1, 21),
    new Date(2025, 2, 5),
    new Date(2025, 2, 14),
    new Date(2025, 2, 15),
    new Date(2025, 2, 19),
    new Date(2025, 2, 20),
    new Date(2025, 2, 25),
    new Date(2025, 2, 26),
    new Date(2025, 2, 27),
  ];

  return (
    <div className="grid min-h-screen items-center justify-items-center pb-20 font-[family-name:var(--font-geist-sans)]">
      <Header />
      <DividendCalendar dividendDates={dividendDates} />
      <p className='rounded-md text-center text-gray-600 bg-white p-1 dark:bg-gray-900'> Work in Progress. 🔨👷‍♀️</p>
    </div>
  );
}
