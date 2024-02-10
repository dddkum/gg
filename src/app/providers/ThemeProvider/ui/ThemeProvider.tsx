import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from "../lib/ThemeContext";
import {FC, useMemo, useState} from "react";
import {Props} from "app/types/types";

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.BASE

const ThemeProvider: FC<Props> = ({children}) => {

    const [theme, setTheme] = useState<Theme>(defaultTheme)

    const defaultProps = useMemo(() => ({
        theme: theme,
        setTheme: setTheme,
    }), [theme])

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;