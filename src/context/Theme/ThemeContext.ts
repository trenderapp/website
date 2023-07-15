import { createContext } from "react";
import { DarkBlueTheme } from "./ThemeColors";

export type availableAppTheme = "theme-dark-blue" | "theme-white" | "theme-dark"

const ThemeContext = createContext({
    theme: "theme-dark-blue",
    setTheme: (_type: availableAppTheme) => {},
    ...DarkBlueTheme
});

export default ThemeContext;