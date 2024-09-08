import {
  Headset,
  TrendingUp,
  Wrench,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import { ReactNode, useState } from 'react';
import { Link } from 'react-router-dom';

export function Sidebar() {
  return (
    <>
      <aside className="w-max bg-gray-700 px-3 py-2">
        <nav className="flex flex-col">
          <ul className="flex flex-col gap-2">
            <SidebarItem Icone={Headset} texto="Apoios">
              <SideBarSubItem texto="Iniciados" pai="apoios" />
              <SideBarSubItem texto="Pendentes" pai="apoios" />
              <SideBarSubItem texto="Aguardando" pai="apoios" />
            </SidebarItem>
            <SidebarItem Icone={TrendingUp} texto="Customizações">
              <SideBarSubItem texto="SLA" pai="customizacoes" />
              <SideBarSubItem texto="LRC" pai="customizacoes" />
              <SideBarSubItem texto="Análise" pai="customizacoes" />
              <SideBarSubItem texto="Desenvolvimento" pai="customizacoes" />
              <SideBarSubItem texto="Entrega" pai="customizacoes" />
            </SidebarItem>
            <SidebarItem Icone={Wrench} texto="Garantias">
              <SideBarSubItem texto="Análise" pai="garantias" />
              <SideBarSubItem texto="Desenvolvimento" pai="garantias" />
              <SideBarSubItem texto="Entrega" pai="garantias" />
            </SidebarItem>
          </ul>
        </nav>
      </aside>
    </>
  );
}

interface SidebarItemType {
  Icone: React.ElementType;
  texto: string;
  children: ReactNode;
}
function SidebarItem({ Icone, texto, children }: SidebarItemType) {
  const [itemOpened, setItemOpened] = useState(false);

  function openItem() {
    setItemOpened((state) => !state);
  }

  return (
    <>
      <li
        className="flex gap-3 items-center hover:bg-gray-600 py-3 cursor-pointer font-bold text-lg"
        onClick={openItem}
      >
        <Icone width={35} height={35} />
        <div className="hidden md:flex items-center gap-1">
          <span>{texto}</span>
          {itemOpened ? (
            <ChevronUp width={20} height={20} />
          ) : (
            <ChevronDown width={20} height={20} />
          )}
        </div>
      </li>
      {itemOpened && (
        <ul className="flex flex-col gap-3 text-base">{children}</ul>
      )}
    </>
  );
}

interface SidebarSubItemType {
  texto: string;
  pai: string;
}

function SideBarSubItem({ texto, pai }: SidebarSubItemType) {
  return (
    <li className="hover:bg-gray-600 p-2">
      <Link
        to={`/${pai}/${texto
          .toLowerCase()
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '')}`}
      >
        {texto}
      </Link>
    </li>
  );
}
