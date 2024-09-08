import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Menu from './components/Menu';
import PaginaInicial from './pages/inicio/PaginaInicial';
import Rodape from './components/Rodape';
import { Sidebar } from './components/BarraLateral';
import ApoiosPendentes from './pages/apoios/Pendentes';
import { ModalProvider } from './contexts/ModalContext';
import ApoiosIniciados from './pages/apoios/Iniciados';

const queryClient = new QueryClient();

export default function AppRouter() {
  return (
    <main className="flex flex-col h-screen text-white">
      <BrowserRouter>
        <Menu />
        <section className="flex flex-1">
          <Sidebar />
          <QueryClientProvider client={queryClient}>
            <section className="text-black w-full bg-gray-100">
              <ModalProvider>
                <Routes>
                  <Route path="/" element={<PaginaInicial />} />
                  <Route
                    path="/apoios/pendentes"
                    element={<ApoiosPendentes />}
                  />
                  <Route
                    path="/apoios/iniciados"
                    element={<ApoiosIniciados />}
                  />
                </Routes>
              </ModalProvider>
            </section>
          </QueryClientProvider>
        </section>
        <Rodape />
      </BrowserRouter>
    </main>
  );
}
