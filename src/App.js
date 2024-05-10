import React, {useContext} from 'react';
import PublicRoutes from './routes/public.routes'
import PrivateRoutes from './routes/private.routes';
import {AuthContext}  from './contexts/AuthContext';

function App() {
    const {auth} = useContext(AuthContext)
//   return (
//     <div className="App">
//       <h1>Meu Aplicativo React</h1>
//     </div>
//   );
    return auth ? <PrivateRoutes/>:<PublicRoutes />
}

export default App;