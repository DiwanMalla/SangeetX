import { Moon } from "lucide-react";
import React from "react";

const ThemeToggle = () => {
  return (
    <button className="ml-4 p-2 rounded-full hover:bg-gray-700">
      <Moon className="h-5 w-5" />
    </button>
  );
};

export default ThemeToggle;
