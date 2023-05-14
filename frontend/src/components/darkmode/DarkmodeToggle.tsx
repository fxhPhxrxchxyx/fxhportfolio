import React, { useState } from "react";
import DarkModeToggle from "react-dark-mode-toggle";
// import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";

const DarkmodeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => false);
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  // const ColorModeContext = React.createContext({ toggleColorMode: () => {} });
  // const colorMode = React.useContext(ColorModeContext);

  return (
    <DarkModeToggle onChange={setIsDarkMode} checked={isDarkMode} size={65} />
  );
};

export default DarkmodeToggle;
