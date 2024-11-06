
"use client"
import React from 'react'
import {useContext,createContext,useState,ReactNode,useEffect} from "react";
// export const ThemeContext =createContext();

interface ThemeContextType {
    theme: string;
    switchDark: () => void;
    switchLight: () => void;
  }
  export const ThemeContext = createContext<ThemeContextType>({
    theme: 'dark',          // Default theme
    switchDark: () => {},   // Placeholder function
    switchLight: () => {},  // Placeholder function
  });

 interface ThemeProviderProps {
      children: ReactNode;
     }

     export const useTheme = () => useContext(ThemeContext);


 export const ThemeProvider: React.FC<ThemeProviderProps> = ({children}) => {
    const [theme,setTheme]=useState('light');

const switchDark=()=>{
    setTheme('dark');
}

const switchLight=()=>{
    setTheme('light');
}





  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        setTheme(savedTheme); // Load saved theme
    }
}, []);

useEffect(() => {
    document.body.className = theme; // Apply the theme class to the body
    localStorage.setItem('theme', theme); // Save the current theme to localStorage
}, [theme])

return (
  <ThemeContext.Provider value={{switchDark,switchLight,theme}}>
    <div className={`${theme}anim`}>{children}</div>
  </ThemeContext.Provider>


  )
}


















