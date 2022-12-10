import React, { createContext, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../Pages/Common/Home'
import Login from '../Pages/Common/LoginRegister/Login'
import Register from '../Pages/Common/LoginRegister/Register'


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
                        {/* =========Common Routes========== */}

                        <Route path='/' element={<Home />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/register' element={<Register />} />

                        {/* =========end========== */}


                        {/* =========Student Routes========== */}

                        {/* =========end========== */}



                        {/* =========Mentor Routes========== */}


                        {/* =========end========== */}
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