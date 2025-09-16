'use client';

import React, { createContext, useContext, useState } from 'react';
const ThemeContext = createContext();
export function useTheme() {
 return useContext(ThemeContext);
}
export function ThemeProvider({ children }) {
 const [isDark, setIsDark] = useState(false);
 
 const toggleTheme = () => setIsDark(!isDark);
 
 return (
 <ThemeContext.Provider value={{ isDark, toggleTheme }}>
 <div className={isDark ? 'dark' : ''}>
 {children}
 </div>
 </ThemeContext.Provider>
 );
}