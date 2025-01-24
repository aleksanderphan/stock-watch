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
    <div className="w-full bg-white p-6 border-b border-[#121212]/[.3] dark:border-white/[.5] dark:bg-[#121212]">
      <div className="flex justify-between items-center">
        <p className="text-left text-black dark:text-white font-extrabold">
          Stock Watch
        </p>

        <div className="flex items-center space-x-4">
          <p className="text-black hover:cursor-pointer font-semibold hover:underline dark:text-white">
            {time.toLocaleTimeString()}
          </p>

          <label className="flex items-center cursor-pointer">
            <input type="checkbox" className="hidden" onChange={() => setTheme(theme === "light" ? "dark" : "light")} checked={theme === "dark"} />
            <span className="relative w-12 h-6 bg-gray-300 dark:bg-[#1E1E1E] rounded-full">
              <span className={`absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-black dark:bg-white transition-transform ${theme === "dark" ? "translate-x-6" : ""}`} />
            </span>
          </label>
        </div>

      </div>
    </div>
  );
}

export default Header;
