import {
  CabecalhoTabela,
  CorpoTabela,
  LinhaTabela,
  Tabela,
  CelulaTabela,
} from '@/components/Tabela';

interface TabelaApoioProps<T> {
  colunas: string[];
  dados: T[];
  renderActions: (item: T) => JSX.Element;
}

export function TabelaApoios<T extends object>({
  colunas,
  dados,
  renderActions,
}: TabelaApoioProps<T>) {
  return (
    <Tabela>
      <CabecalhoTabela columns={colunas} />
      <CorpoTabela>
        {dados.map((item, index) => (
          <LinhaTabela key={index}>
            {Object.values(item).map((value, idx) => (
              <CelulaTabela key={idx}>{value}</CelulaTabela>
            ))}
            <CelulaTabela>
              <div className="flex gap-3">{renderActions(item)}</div>
            </CelulaTabela>
          </LinhaTabela>
        ))}
      </CorpoTabela>
    </Tabela>
  );
}
