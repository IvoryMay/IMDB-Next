"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { MdDarkMode, MdLightMode } from "react-icons/md";



const ToggleDarkMode = () => {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);  
  useEffect(() => setMounted(true), []);
 const currentTheme = theme === "system" ? systemTheme : theme;
  return (
    <div>
      {mounted && (currentTheme === "dark" ? (
        <MdLightMode className="text-2xl cursor-pointer hover:text-amber-400" onClick={() => setTheme("light")} />
      ) : (
        <MdDarkMode className="text-2xl cursor-pointer hover:text-amber-400" onClick={() => setTheme("dark")} />
      ))}
    </div>
  )
}

export default ToggleDarkMode