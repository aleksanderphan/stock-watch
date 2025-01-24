"use client";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Switch } from "@/components/ui/switch"

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
    <div className="w-full mb-20 bg-white p-6 border-b border-[#121212]/[.3] dark:border-white/[.5] dark:bg-[#121212]">
      <div className="flex justify-between items-center">
        <p className="text-left text-black dark:text-white font-extrabold">
          Stock Watch
        </p>

        <div className="flex items-center space-x-4">
          <p className="text-black hover:cursor-pointer font-semibold hover:underline dark:text-white">
            {time.toLocaleTimeString()}
          </p>

          <Switch onClick={() => setTheme(theme === "light" ? "dark" : "light")} />
        </div>
      </div>
    </div>
  );
}

export default Header;
