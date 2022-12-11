import React, { createContext, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../Pages/Common/Home'
import Login from '../Pages/Common/LoginRegister/Login'
import Register from '../Pages/Common/LoginRegister/Register'
import Switch from "react-switch";


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
                    <div className='themeSwitch'>
                        <label htmlFor="material-switch">
                            <Switch
                                checked={theme === "dark"}
                                onChange={toggleTheme}
                                handleDiameter={45}
                                uncheckedIcon={false}
                                checkedIcon={false}
                                height={40}
                                width={80}
                                className="react-switch"
                                id="material-switch"
                            />
                        </label>
                    </div>
                </div>

            </ThemeContext.Provider>
        </>
    )
}

export default Routers