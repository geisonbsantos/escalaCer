import React, { useState, createContext } from "react";
import { useNavigate } from "react-router-dom";
  
export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    const login = (email, password) => {
        console.log("login auth", { email, password });

        // api criar uma session
        const loggedUser = { id: "1234", email };

        localStorage.setItem("user", JSON.stringify(loggedUser));

        if (password === "secret") {
            setUser(loggedUser);
            navigate("/login");
        }
    };

    const logout = () => {
        console.log("logout");
        setUser(null);
        navigate("/")
    };

    return (
        <AuthContext.Provider value={{ authenticated: !!user, user, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
};
