import {
  Tabela,
  CorpoTabela,
  CabecalhoTabela,
  LinhaTabela,
  CelulaTabela,
} from '@/components/Tabela';
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

export default function Pendente() {
  const { openModal, isOpen } = useContext(ModalContext);
  const [osSelecionada, setOsSelecionada] = useState<IOrdemServico>();
  const inputPesquisaRef = useRef<HTMLInputElement>(null);
  const [termoPesquisa, setTermoPesquisa] = useState('');

  const { data: ordemServicoResponse, isLoading } = useQuery<IOrdemServico[]>({
    queryKey: ['apoiosPendentes'],
    queryFn: getApoiosPendentes,
  });

  const dadosFiltrados = ordemServicoResponse?.filter(
    (item) =>
      item.numero.toString().includes(termoPesquisa) ||
      item.cliente.toLowerCase().includes(termoPesquisa.toLowerCase()) ||
      item.tipo.toLowerCase().includes(termoPesquisa.toLowerCase())
  );

  const columns: string[] = [
    'OS',
    'Item',
    'Cliente',
    'Responsável',
    'Observação',
    'Tipo',
    '',
  ];

  const handleIniciar = () => {
    alert('Iniciar');
  };

  const handleInfo = (ordemServico: IOrdemServico) => {
    setOsSelecionada(ordemServico);
    openModal();
  };

  const handlePesquisar = () => {
    const textoPesquisado = inputPesquisaRef.current?.value || '';
    setTermoPesquisa(textoPesquisado);
  };

  if (isLoading) {
    return null;
  }

  return (
    <div className="p-2 flex flex-col gap-3">
      <section className="flex justify-center gap-2">
        <Input
          type="text"
          placeholder="Informe a OS, item ou tipo"
          className="w-1/3"
          ref={inputPesquisaRef}
        />
        <Button variant="default" onClick={handlePesquisar}>
          Pesquisar
        </Button>
      </section>
      <div>
        <Tabela>
          <CabecalhoTabela columns={columns} />
          <CorpoTabela>
            {dadosFiltrados?.map((ordemServico) => {
              const idxOS = ordemServico.numero + '_' + ordemServico.item;
              return (
                <LinhaTabela key={'ordemServico' + idxOS}>
                  <CelulaTabela key={'numerOS' + idxOS}>
                    {ordemServico.numero}
                  </CelulaTabela>
                  <CelulaTabela key={'itemOS' + idxOS}>
                    {ordemServico.item}
                  </CelulaTabela>
                  <CelulaTabela key={'cliente' + idxOS}>
                    {ordemServico.cliente}
                  </CelulaTabela>
                  <CelulaTabela key={'resp' + idxOS}>
                    {ordemServico.atividade.responsavel}
                  </CelulaTabela>
                  <CelulaTabela key={'obs' + idxOS}>
                    {ordemServico.atividade.observacao}
                  </CelulaTabela>
                  <CelulaTabela key={'tipo' + idxOS}>
                    {ordemServico.tipo}
                  </CelulaTabela>
                  <CelulaTabela key={'actionInitCell' + idxOS}>
                    <div className="flex gap-3">
                      <ShadTooltipProvider>
                        <Tooltip texto="Iniciar Apoio">
                          <button onClick={handleIniciar}>
                            <Play />
                          </button>
                        </Tooltip>
                        <Tooltip texto="Mais informações">
                          <button onClick={() => handleInfo(ordemServico)}>
                            <Info />
                          </button>
                        </Tooltip>
                      </ShadTooltipProvider>
                    </div>
                  </CelulaTabela>
                </LinhaTabela>
              );
            })}
          </CorpoTabela>
        </Tabela>
        {isOpen && osSelecionada && <ApoioModal OS={osSelecionada} />}
      </div>
    </div>
  );
}
