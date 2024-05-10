import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import {ApoiosIniciados} from '../pages/Apoios/iniciados'
import { ApoiosPendentes } from '../pages/Apoios/pendentes';
import { ApoiosAguardando } from '../pages/Apoios/aguardando';

const PrivateRoutes = () =>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />}/>
                <Route path="/home" element={<Home />}/>
                <Route path="/" element={<Home />}/>
                <Route path='/apoios/pendentes' element={<ApoiosPendentes />}/>
                <Route path='/apoios/aguardando' element={<ApoiosAguardando />}/>
                <Route path='/apoios/iniciados' element={<ApoiosIniciados />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default PrivateRoutes