import React, { createContext, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../Pages/Home'


export const ThemeContext = createContext(null)

const Routers = () => {

    const [theme, setTheme] = useState("light")
    const toggleTheme = () => {
        setTheme((curElt) => (curElt === "light" ? "dark" : "light"))
    }

    return (
        <>
            <ThemeContext.Provider value={{ theme, toggleTheme }}>
                <div className='themeColor' id={theme}>
                    <Routes>
                        <Route path='/' element={<Home />} />
                    </Routes>
                    {/* <div className='themeSwitch'>
                        <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
                    </div> */}
                </div>

            </ThemeContext.Provider>
        </>
    )
}

export default Routers