import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Main from '../../pages/main';
import Login from '../../pages/login';

function Routes1(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    ); 
};

export default Routes1;