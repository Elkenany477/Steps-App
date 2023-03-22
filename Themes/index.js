import React, { createContext, useState, useEffect } from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import {
    Appearance,
    AppearanceProvider,
    useColorScheme,
} from 'react-native-appearance';

import lightTheme from '../Themes/Light';
import darkTheme from '../Themes/Dark';

const defaultMode = Appearance.getColorScheme() || 'light';

const ThemeContext = createContext({
    mode: defaultMode,
    setMode: (mode) => console.log(mode),
});

//Accepts a context object (the value returned from React.createContext) and returns the current context value, 
//as given by the nearest context provider for the given context.

const useThemeContext = () => React.useContext(ThemeContext);

const ManageThemeProvider = ({ children }) => {
    const [themeState, setThemeState] = useState(defaultMode);
    const setMode = (mode) => {
        setThemeState(mode);
    };
    useEffect(() => {
        const subscription = Appearance.addChangeListener(({ colorScheme }) => {
            setThemeState(colorScheme);
        });
        return () => subscription.remove();
    }, []);
    return (
        <ThemeContext.Provider value={{ mode: themeState, setMode }}>
            <ThemeProvider
                theme={themeState === 'dark' ? darkTheme : lightTheme}
            >
                <>
                    <StatusBar
                        barStyle={
                            themeState === 'light'
                                ? 'dark-content'
                                : 'light-content'
                        }
                    />
                    {children}
                </>
            </ThemeProvider>
        </ThemeContext.Provider>
    );
};

const ThemeManager = ({ children }) => (
    <AppearanceProvider>
        <ManageThemeProvider>{children}</ManageThemeProvider>
    </AppearanceProvider>
);

export { useThemeContext, lightTheme, darkTheme };

export default ThemeManager;
