"use client";
import { useTheme } from "next-themes";

const ThemeClass = ({ children }) => {
  const { theme } = useTheme();
  return <div className={`${theme === "dark" ? "dark" : ""}`}>{children}</div>;
};

export default ThemeClass;
