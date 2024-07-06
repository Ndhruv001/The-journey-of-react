import React, { useContext } from 'react'

export const ThemeContext = React.createContext({
    themeMode: "light",
    darkMode : () => {},
    lightMode : () =>{}
});

export const ThemeContextProvide = ThemeContext.Provider;

export default function useThemeContext(){
    return useContext(ThemeContext)
}