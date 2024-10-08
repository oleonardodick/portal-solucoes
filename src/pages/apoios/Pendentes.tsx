import { Info, Play } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { getApoiosPendentes } from '@/services/apoio';
import { IOrdemServico } from '@/interfaces/IOrdemServico';
import { useContext, useRef, useState } from 'react';
import { ModalContext } from '@/contexts/ModalContext';
import { ApoioModal } from './Modais/ApoioModal';
import { ShadTooltipProvider } from '@/components/ui/shadtooltip';
import Tooltip from '@/components/Tooltip';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { TabelaApoios } from './TabelaApoios';

interface ApoiosPendentesProps {
  numero: number;
  item: string;
  cliente: string;
  responsavel: string;
  observacao: string | undefined;
  tipo: string;
}

export default function Pendente() {
  const { openModal, isOpen } = useContext(ModalContext);
  const [osSelecionada, setOsSelecionada] = useState<IOrdemServico>();
  const inputPesquisaRef = useRef<HTMLInputElement>(null);
  const [termoPesquisa, setTermoPesquisa] = useState('');

  const { data: ordemServicoResponse, isLoading } = useQuery<IOrdemServico[]>({
    queryKey: ['apoiosPendentes'],
    queryFn: getApoiosPendentes,
  });

  const dadosFiltrados = ordemServicoResponse
    ?.filter(
      (item) =>
        item.numero.toString().includes(termoPesquisa) ||
        item.cliente.toLowerCase().includes(termoPesquisa.toLowerCase()) ||
        item.tipo.toLowerCase().includes(termoPesquisa.toLowerCase())
    )
    .map((item) => ({
      numero: item.numero,
      item: item.item,
      cliente: item.cliente,
      responsavel: item.atividade.responsavel,
      observacao: item.atividade.observacao,
      tipo: item.tipo,
    }));

  const columns: string[] = [
    'OS',
    'Item',
    'Cliente',
    'Responsável',
    'Observação',
    'Tipo',
    '',
  ];

  const handleIniciar = (ordemServico: ApoiosPendentesProps) => {
    alert('Iniciar' + ordemServico.numero + ordemServico.item);
  };

  const handleInfo = (ordemServico: ApoiosPendentesProps) => {
    const os = ordemServicoResponse?.filter(
      (item) =>
        item.numero === ordemServico.numero && item.item === ordemServico.item
    );
    if (os) {
      setOsSelecionada(os[0]);
      openModal();
    }
  };

  const handlePesquisar = () => {
    const textoPesquisado = inputPesquisaRef.current?.value || '';
    setTermoPesquisa(textoPesquisado);
  };

  const renderActions = (ordemServico: ApoiosPendentesProps) => (
    <ShadTooltipProvider>
      <Tooltip texto="Iniciar Apoio">
        <Button
          size="icon"
          variant="ghost"
          onClick={() => handleIniciar(ordemServico)}
        >
          <Play />
        </Button>
      </Tooltip>
      <Tooltip texto="Mais informações">
        <Button
          size="icon"
          variant="ghost"
          onClick={() => handleInfo(ordemServico)}
        >
          <Info />
        </Button>
      </Tooltip>
    </ShadTooltipProvider>
  );

  if (isLoading) {
    return null;
  }

  return (
    <div className="p-2 flex flex-col gap-3">
      <section className="flex justify-center gap-2">
        <Input
          type="text"
          placeholder="Informe a OS, cliente ou tipo"
          className="w-1/3"
          ref={inputPesquisaRef}
        />
        <Button variant="default" onClick={handlePesquisar}>
          Pesquisar
        </Button>
      </section>
      <div>
        <TabelaApoios<ApoiosPendentesProps>
          colunas={columns}
          dados={dadosFiltrados || []}
          renderActions={renderActions}
        />
        {isOpen && osSelecionada && <ApoioModal OS={osSelecionada} />}

        <Pagination className="justify-end">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}
