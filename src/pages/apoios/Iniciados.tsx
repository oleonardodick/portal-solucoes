import { useQuery } from '@tanstack/react-query';
import { getApoiosIniciados } from '@/services/apoio';
import { IOrdemServico } from '@/interfaces/IOrdemServico';
import { useRef, useState } from 'react';
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
import { ShadTooltipProvider } from '@/components/ui/shadtooltip';
import Tooltip from '@/components/Tooltip';
import { CircleCheck, Hourglass } from 'lucide-react';

interface ApoiosIniciadosProps {
  numero: number;
  item: string;
  cliente: string;
  tecnico: string;
  responsavel: string;
  observacao: string | undefined;
  tipo: string;
}

export default function Iniciados() {
  const inputPesquisaRef = useRef<HTMLInputElement>(null);
  const [termoPesquisa, setTermoPesquisa] = useState('');

  const { data: ordemServicoResponse, isLoading } = useQuery<IOrdemServico[]>({
    queryKey: ['apoiosIniciados'],
    queryFn: getApoiosIniciados,
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
      tecnico: item.atividade.tecnico,
      responsavel: item.atividade.responsavel,
      observacao: item.atividade.observacao,
      tipo: item.tipo,
    }));

  const columns: string[] = [
    'OS',
    'Item',
    'Cliente',
    'Técnico',
    'Responsável',
    'Observação',
    'Tipo',
    '',
  ];

  const handleFinalizar = (ordemServico: ApoiosIniciadosProps) => {
    alert('Finalizar' + ordemServico.numero + '/' + ordemServico.item);
  };

  const handleAguardar = (ordemServico: ApoiosIniciadosProps) => {
    alert('Aguardar' + ordemServico.numero + '/' + ordemServico.item);
  };

  const handlePesquisar = () => {
    const textoPesquisado = inputPesquisaRef.current?.value || '';
    setTermoPesquisa(textoPesquisado);
  };

  const renderActions = (ordemServico: ApoiosIniciadosProps) => (
    <ShadTooltipProvider>
      <Tooltip texto="Finalizar Apoio">
        <Button
          size="icon"
          variant="ghost"
          onClick={() => handleFinalizar(ordemServico)}
        >
          <CircleCheck />
        </Button>
      </Tooltip>
      <Tooltip texto="Passar para aguardando">
        <Button
          size="icon"
          variant="ghost"
          onClick={() => handleAguardar(ordemServico)}
        >
          <Hourglass />
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
        <TabelaApoios<ApoiosIniciadosProps>
          colunas={columns}
          dados={dadosFiltrados || []}
          renderActions={renderActions}
        />

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
