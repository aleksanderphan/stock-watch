"use client";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";

function Header() {
  const [time, setTime] = useState(new Date());
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    setMounted(true);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null; 

  return (
    <div className="w-full rounded-lg border-t border-gray-200 bg-gradient-to-b from-gray-100 to-transparent bg-clip-padding p-8 backdrop-blur backdrop-contrast-100 backdrop-saturate-100 backdrop-filter dark:border-white/[.8] dark:bg-gradient-to-b dark:from-gray-500/[.10] sticky top-0">
      <div className="flex justify-between items-center">
        <p className="text-left font-semibold text-black dark:text-white">
          Stock Watch
        </p>
        <div className="flex items-center space-x-4">
          <p className="text-black hover:cursor-pointer hover:underline dark:text-white">
            {time.toLocaleTimeString()}
          </p>

          <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}> TEST </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
