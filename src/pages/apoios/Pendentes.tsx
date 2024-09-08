import {
  Tabela,
  CorpoTabela,
  CabecalhoTabela,
  LinhaTabela,
  CelulaTabela,
} from '../../components/Tabela';
import { Info, Play } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { getApoiosPendentes } from '../../services/apoio';
import { IOrdemServico } from '../../interfaces/IOrdemServico';
import { useContext, useState } from 'react';
import { ModalContext } from '../../contexts/ModalContext';
import { ApoioModal } from './ApoioModal';
import { Tooltip, TooltipProvider } from '@/components/ui/tooltip';
import { TooltipContent, TooltipTrigger } from '@radix-ui/react-tooltip';

export default function Pendente() {
  const { openModal, isOpen } = useContext(ModalContext);
  const [osSelecionada, setOsSelecionada] = useState<IOrdemServico>();

  const { data: ordemServicoResponse, isLoading } = useQuery<IOrdemServico[]>({
    queryKey: ['apoiosPendentes'],
    queryFn: getApoiosPendentes,
  });

  const columns: string[] = [
    'OS',
    'Item',
    'Cliente',
    'Responsável',
    'Observação',
    '',
  ];

  const handleIniciar = () => {
    alert('Iniciar');
  };

  const handleInfo = (ordemServico: IOrdemServico) => {
    setOsSelecionada(ordemServico);
    openModal();
  };

  if (isLoading) {
    return null;
  }

  return (
    <div className="p-2">
      <Tabela>
        <CabecalhoTabela columns={columns} />
        <CorpoTabela>
          {ordemServicoResponse?.map((ordemServico) => {
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
                <CelulaTabela key={'resp' + idxOS}>
                  {ordemServico.atividade.observacao}
                </CelulaTabela>
                <CelulaTabela key={'actionInitCell' + idxOS}>
                  <div className="flex gap-3">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <button onClick={handleIniciar}>
                            <Play />
                          </button>
                        </TooltipTrigger>
                        <TooltipContent className="bg-gray-800 text-white p-1 rounded-sm text-sm">
                          <p>Iniciar Apoio</p>
                        </TooltipContent>
                      </Tooltip>
                      <Tooltip>
                        <TooltipTrigger>
                          <button onClick={() => handleInfo(ordemServico)}>
                            <Info />
                          </button>
                        </TooltipTrigger>
                        <TooltipContent className="bg-gray-800 text-white p-1 rounded-sm text-sm">
                          <p>Mais informações</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                </CelulaTabela>
              </LinhaTabela>
            );
          })}
        </CorpoTabela>
      </Tabela>
      {isOpen && osSelecionada && <ApoioModal OS={osSelecionada} />}
    </div>
  );
}
