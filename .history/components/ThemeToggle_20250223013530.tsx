"use client";
import { Moon } from "lucide-react";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <button className="ml-4 p-2 rounded-full hover:bg-gray-700">
      <Moon className="h-5 w-5" />
    </button>
  );
};

export default ThemeToggle;
