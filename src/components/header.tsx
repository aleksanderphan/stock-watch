"use client";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

function Header() {
  const { theme, setTheme } = useTheme();
  const [time, setTime] = useState(new Date());
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
    <div className="w-full mb-20 bg-[#F0F0F0] p-6 border-b border-[#121212]/[.3] dark:border-white/[.5] dark:bg-[#121212]">
      <div className="flex justify-between items-center">
        <p className="text-left text-black dark:text-white font-extrabold">
          Stock Watch
        </p>

        <div className="flex items-center space-x-4">
          <p className="text-black hover:cursor-pointer font-semibold hover:underline dark:text-white">
            {time.toLocaleTimeString()}
          </p>

          <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="p-2 rounded-full transition-colors dark:bg-[#1E1E1E] hover:bg-gray-300 dark:hover:bg-gray-600"
          >
            {theme === "dark" ? <Sun className="w-6 h-6 text-white" /> : <Moon className="w-6 h-6 text-black" />}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
