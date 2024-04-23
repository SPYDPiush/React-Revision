import React , {createContext,useContext,useState} from "react";

export const themecontext = createContext({
    thememode : "dark",
    themelight : () => {},
    themedark : () => {},
});

export const themeprovider = themecontext.Provider
export const ThemeProvider = themecontext.Provider

export default function useTheme() {
    return useContext(themecontext)
} 

 
