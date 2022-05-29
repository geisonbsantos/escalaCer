import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Main from '../../pages/main';
import Login from '../../pages/login';

import { AuthContext } from "../../contexts/auth";

function Routes1(){
    const [user, setUser] = useState(null);

    const login = (email, password) => {
        console.log("login", { email, password });
        setUser ({ id: "1234", email });
    };

    const logout = () => {
        console.log("logout");
    };

    return(
        <BrowserRouter>
            <AuthContext.Provider value={{ authenticated: !!user, user, login, logout }}>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </AuthContext.Provider>
        </BrowserRouter>
    ); 
};

export default Routes1;