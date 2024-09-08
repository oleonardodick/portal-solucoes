import { IOrdemServico } from '@/interfaces/IOrdemServico';
import config from '../utils/config';
import axios from 'axios';

const URL_APOIOS = `${config.URL}/ordensDeServico`;

export async function getApoiosPendentes() {
  const response = await axios.get(URL_APOIOS, {
    params: {
      'atividade.status': 'P',
      tipo: ['2', 'P'],
    },
  });

  const dadosModificados = response.data.map((apoio: IOrdemServico) => {
    if (apoio.tipo === '2') {
      apoio.tipo = 'Implementação';
    } else if (apoio.tipo === 'P') {
      apoio.tipo = 'Suporte';
    }
    return apoio;
  });

  return dadosModificados;
}

export async function getApoiosIniciados() {
  const response = await axios.get(URL_APOIOS, {
    params: {
      'atividade.status': 'I',
      tipo: ['2', 'P'],
    },
  });

  const dadosModificados = response.data.map((apoio: IOrdemServico) => {
    if (apoio.tipo === '2') {
      apoio.tipo = 'Implementação';
    } else if (apoio.tipo === 'P') {
      apoio.tipo = 'Suporte';
    }
    return apoio;
  });

  return dadosModificados;
}
