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

  return response.data;
}
