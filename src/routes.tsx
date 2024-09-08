import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Menu from './components/Menu';
import PaginaPadrao from './components/PaginaPadrao';
import Rodape from './components/Rodape';
import { Sidebar } from './components/BarraLateral';
import ApoiosPendentes from './pages/apoios/Pendentes';
import { ModalProvider } from './contexts/ModalContext';

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
                  <Route path="/" element={<PaginaPadrao />} />
                  <Route
                    path="/apoios/pendentes"
                    element={<ApoiosPendentes />}
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
