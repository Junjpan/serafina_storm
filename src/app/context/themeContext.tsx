"use client";
import { createContext, useState } from "react";
import { Theme, ThemeContextType } from "@/app/context/type";

export const themeContext = createContext<ThemeContextType<Theme>>({
  theme: "light",
  setTheme: null,
});

interface ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [currentTheme, setCurrentTheme] = useState<Theme>("light");

  return (
    <themeContext.Provider
      value={{ theme: currentTheme, setTheme: setCurrentTheme }}
    >
      {children}
    </themeContext.Provider>
  );
};

export default ThemeProvider;
