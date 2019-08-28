import axios from 'axios';

const url = 'http://192.168.6.100:3333'

export const getOrderMitraSelesai = (idMitra) => {
    return {
        type: 'GET_ORDERMITRASELESAI',
        payload: axios.get(`${url}/order/mitraselesai/${idMitra}`),

    }
};