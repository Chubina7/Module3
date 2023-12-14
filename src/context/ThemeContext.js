"use client"

import { createContext, useState } from "react"

export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
    const [lightMode, setLightMode] = useState(true)

    const toggle = () => {
        setLightMode(!lightMode);
    }

    return (
        <ThemeContext.Provider value={{lightMode, toggle}}>
            <div>{children}</div>
        </ThemeContext.Provider>
    )
}