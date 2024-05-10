// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import { BrowserRouter, Routes, Route, Router, Switch } from 'react-router-dom';
// import Home from './pages/Home';
// import {ApoiosIniciados} from './pages/Apoios/iniciados'
// import { ApoiosPendentes } from './pages/Apoios/pendentes';
// import { ApoiosAguardando } from './pages/Apoios/aguardando';
// import RotaPrivada from './components/RotaPrivada';


// function Pagina404(){
//   return (
//     <div>
//       Página 404
//     </div>
//   )
// }


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   // <BrowserRouter>
//   //   <Routes>
//   //     <Route path='/' element={<Home />} exact />
//   //     <Route path='#' element={<Pagina404 />}/>
//   //     {/* <Route path='/apoios/iniciados' element={<ApoiosIniciados />}/> */}
//   //     <RotaPrivada path = '/apoios/iniciados' component={ApoiosIniciados} estaLogado={localStorage.getItem('estaLogado')==='true'}/>
//   //     <Route path='/apoios/pendentes' element={<ApoiosPendentes />}/>
//   //     <Route path='/apoios/aguardando' element={<ApoiosAguardando />}/>
//   //   </Routes>
//   // </BrowserRouter>
//   <Router>
//     <Routes>
//       <Route path='/' element={<Home />} exact />
//       <RotaPrivada path = '/apoios/iniciados' component={ApoiosIniciados} estaLogado={localStorage.getItem('estaLogado')==='true'}/>
//     </Routes>
//   </Router>
// );


import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AuthProvider from './contexts/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>,
)
