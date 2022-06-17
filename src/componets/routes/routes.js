import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Main from '../../pages/main';
import Login from '../../pages/login';

import { AuthProvider, AuthContext } from "../../contexts/auth";

function Routes1(){
    const Private = ({children}) => {
        const { authenticated } = useContext(AuthContext);

        if (!authenticated) {
            return <Navigate to="/"/>;
        }

        return children;
    }
    return(
        <Router>
            <AuthProvider>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/login" element={<Private><Login /></Private>} />
                </Routes>
            </AuthProvider>
        </Router>
    ); 
};

export default Routes1;