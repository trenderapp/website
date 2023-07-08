import { useEffect, useState } from 'react';
import Helmet from "react-helmet";
import ThemeContext, { availableAppTheme } from './ThemeContext';
import { getStorageInfo, settingsStorageI } from '@/services/storage';

type Props = {
    children: React.ReactNode
}

const ThemeProvider: React.FC<Props> = ({ children }) => {

    const [theme, setTheme] = useState<availableAppTheme>("theme-dark-blue");

    useEffect(() => {
        const storage = getStorageInfo("settings") as settingsStorageI;
        setTheme(storage ?? "theme-dark-blue")
    }, [])

    return (
        <ThemeContext.Provider value={{ setTheme: setTheme, theme: theme }}>
            <Helmet bodyAttributes={{
                class: theme
            }} />
            {children}
        </ThemeContext.Provider>
    );
}

export default ThemeProvider;