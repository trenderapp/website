import { useEffect, useState } from 'react';
import Helmet from "react-helmet";
import ThemeContext, { availableAppTheme } from './ThemeContext';
import { getStorageInfo, settingsStorageI } from '@/services/storage';
import { DarkBlueTheme, DarkTheme, WhiteTheme } from './ThemeColors';

type Props = {
    children: React.ReactNode
}

const ThemeProvider: React.FC<Props> = ({ children }) => {

    const [theme, setTheme] = useState({
        type: "theme-dark-blue",
        ...DarkBlueTheme
    });

    const changeTheme = (type: availableAppTheme) => {

        let style = DarkBlueTheme;
        switch (type) {
            case "theme-white":
                style = WhiteTheme;
                break;
            case "theme-dark":
                style = DarkTheme;
                break;
            default:
                break;
        }

        setTheme({
            type: type,
            ...style
        })
    }

    useEffect(() => {
        const storage = getStorageInfo("settings") as settingsStorageI;
        changeTheme(storage ?? "theme-dark-blue")
    }, [])

    return (
        <ThemeContext.Provider value={{ setTheme: changeTheme, colors: theme.colors, theme: theme.type }}>
            <Helmet bodyAttributes={{
                class: theme.type
            }} />
            {children}
        </ThemeContext.Provider>
    );
}

export default ThemeProvider;