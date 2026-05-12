import { useContext, useState, createContext } from "react";

const ThemeContext = createContext();
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("dark");
  function toggleTheme() {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  }
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

function useTheme() {
  return useContext(ThemeContext);
}
export { ThemeProvider, useTheme };
