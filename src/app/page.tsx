import Header from "../components/header";
import Calendar from "../components/calendar";

export default function Home() {
  // TODO: ubah ke API
  const dividendDates = [
    new Date(2025, 0, 2),
    new Date(2025, 0, 8),
    new Date(2025, 0, 10),
  ];

  return (
    <div className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20">
      <Header />
      <Calendar dividendDates={dividendDates} />
    </div>
  );
}
