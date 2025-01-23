"use client";
import React, { useState, useEffect } from "react";

function Header() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  });

  return (
    <div className="w-[80%] rounded-full border-t border-white/[.8] bg-gradient-to-b from-gray-500/[.10] to-transparent bg-clip-padding p-8 backdrop-blur backdrop-contrast-100 backdrop-saturate-100 backdrop-filter">
      <span className="flex justify-between">
        <p className="text-left font-semibold text-white">Stock Watch</p>
        <p className="text-right text-white hover:cursor-pointer hover:underline">
          {time.toLocaleTimeString()}
        </p>
      </span>
    </div>
  );
}

export default Header;
