import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import {ApoiosIniciados} from './pages/Apoios/iniciados'
import { ApoiosPendentes } from './pages/Apoios/pendentes';
import { ApoiosAguardando } from './pages/Apoios/aguardando';


function Pagina404(){
  return (
    <div>
      Página 404
    </div>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} exact />
      <Route path='#' element={<Pagina404 />}/>
      <Route path='/apoios/iniciados' element={<ApoiosIniciados />}/>
      <Route path='/apoios/pendentes' element={<ApoiosPendentes />}/>
      <Route path='/apoios/aguardando' element={<ApoiosAguardando />}/>
    </Routes>
  </BrowserRouter>
);
