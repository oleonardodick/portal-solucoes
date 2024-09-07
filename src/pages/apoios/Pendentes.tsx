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

export default function Pendente() {
  //   const [osSelecionada, setOsSelecionada] = useState<IOrdemServico>();

  const { data: ordemServicoResponse, isLoading } = useQuery<IOrdemServico[]>({
    queryKey: ['apoiosPendentes'],
    queryFn: getApoiosPendentes,
  });

  const columns: string[] = ['OS', 'Item', 'Cliente', 'Responsável', ''];

  const handleIniciar = () => {
    alert('Iniciar');
  };

  //   const handleInfo = (row: IOrdemServico) => {
  //     setOsSelecionada(row);
  //     openDialog();
  //   };

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
                <CelulaTabela key={'actionInitCell' + idxOS}>
                  <ul className="flex justify-center gap-1">
                    <li>
                      <button onClick={handleIniciar}>
                        <Play />
                      </button>
                    </li>
                    <li>
                      {/* <button onClick={() => handleInfo(row)}>
                      <Info />
                    </button> */}
                      <Info />
                    </li>
                  </ul>
                </CelulaTabela>
              </LinhaTabela>
            );
          })}
        </CorpoTabela>
      </Tabela>
    </div>
  );
}
