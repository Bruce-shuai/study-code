import { createContext, useEffect, useState } from "react";

interface DarkModeContextConfig {
  darkMode: boolean;
  toggle: () => void;
}
export const DarkModeContext = createContext<DarkModeContextConfig>({
  darkMode: false,
  toggle: () => {},
});

export const DarkModeContextProvider = ({ children }: { children: JSX.Element}) => {
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("darkMode") as string) || false
  );

  const toggle = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <DarkModeContext.Provider value={{ darkMode, toggle }}>
      {children}
    </DarkModeContext.Provider>
  );
};