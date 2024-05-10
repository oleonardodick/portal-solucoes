import config from '../config';
import axios from 'axios';

const BASE_URL = config.URL;

const getApoiosPendentes = async() =>{
    const response = await axios.get(`${BASE_URL}/atividades?situacao=P`)
    return response.data
}

const iniciaApoioPendente = async({numero, item, atendente}) =>{
    try{
        const updatedData = (await axios.get(`${BASE_URL}/atividades?numero=${numero}&item=${item}`)).data
        updatedData[0].atendente = atendente;
        updatedData[0].situacao = "I";
        const response = await axios.put(`${BASE_URL}/atividades/${numero}${item}`,updatedData[0]);
        return response.status;
    } catch(error){
        console.error('Erro: ',error);
        throw error;
    }
}

const getApoiosAguardando = async() =>{
    const response = await axios.get(`${BASE_URL}/atividades?situacao=A`)
    return response.data
}

const getApoiosIniciados = async() =>{
    const response = await axios.get(`${BASE_URL}/atividades?situacao=I`)
    return response.data
}

export default{
    getApoiosPendentes,
    iniciaApoioPendente,
    getApoiosAguardando,
    getApoiosIniciados
}