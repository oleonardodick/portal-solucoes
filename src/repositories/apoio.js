import config from '../config';
import axios from 'axios';


const getApoiosPendentes = async() =>{
    const response = await axios.get(`${config.URL}/apoiosPendentes`)
    return response.data
}

export default{
    getApoiosPendentes,
}