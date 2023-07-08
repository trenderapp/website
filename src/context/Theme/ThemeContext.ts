import * as React from 'react';

export type availableAppTheme = "theme-dark-blue" | "theme-white" | "theme-dark"

const ThemeContext = React.createContext<{
    theme: availableAppTheme,
    setTheme: React.Dispatch<React.SetStateAction<availableAppTheme>>
}>({
    theme: "theme-dark-blue",
    setTheme: () => {}
});

ThemeContext.displayName = 'ThemeContext';

export default ThemeContext;