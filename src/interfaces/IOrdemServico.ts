export interface IOrdemServico {
  numero: number;
  item: string;
  cliente: string;
  solicitado: string;
  tipo: string;
  atividade: Atividade;
}

export interface Atividade {
  responsavel: string;
  status: string;
  observacao: string | undefined;
  tecnico: string;
}
