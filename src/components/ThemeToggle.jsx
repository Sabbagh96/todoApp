import { useTheme } from "../context/ThemeContext";

import React from "react";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="rounded-xl bg-yellow-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-yellow-300"
    >
      Current Theme: {theme}
    </button>
  );
};

export default ThemeToggle;
