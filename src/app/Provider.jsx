"use client";

import { ThemeProvider } from "next-themes";
import React from "react";

const Provider = ({ children }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      <div className="text-gray-700 dark:text-gray-200 dark:bg-gray-700
       min-h-screen transition-colors duration-300">

      {children}

      </div>
    </ThemeProvider>
  );
};

export default Provider;
