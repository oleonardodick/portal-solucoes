import { ReactNode } from 'react';

export function Modal({ children }: { children: ReactNode }) {
  return (
    <div className="bg-zinc-900 bg-opacity-25 flex items-center justify-center fixed inset-0">
      <div className="flex flex-col bg-zinc-200 min-w-96 rounded-lg">
        {children}
      </div>
    </div>
  );
}

export function CabecalhoModal({ children }: { children: ReactNode }) {
  return (
    <header className="p-4 flex justify-between items-center border-b-2 border-zinc-300">
      {children}
    </header>
  );
}

export function TituloModal({ children }: { children: ReactNode }) {
  return <h1 className="font-bold text-3xl">{children}</h1>;
}

export function ConteudoModal({ children }: { children: ReactNode }) {
  return <main className="flex flex-col px-4 py-2">{children}</main>;
}

export function RodapeModal({ children }: { children: ReactNode }) {
  return (
    <footer className="p-4 flex justify-end border-t-2 border-zinc-300 gap-2">
      {children}
    </footer>
  );
}
