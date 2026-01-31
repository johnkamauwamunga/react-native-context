// src/context/ThemeContext.js
import { createContext, useContext, useState } from "react";

// 🎨 Fake theme JSON
const themes = {
  light: {
    background: "#fff",
    text: "#000",
    button: "#007AFF",
  },
  dark: {
    background: "#121212",
    text: "#fff",
    button: "#0A84FF",
  },
};

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [themeMode, setThemeMode] = useState("light");

  const toggleTheme = () => {
    setThemeMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  const colors = themes[themeMode];

  return (
    <ThemeContext.Provider value={{ themeMode, colors, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
