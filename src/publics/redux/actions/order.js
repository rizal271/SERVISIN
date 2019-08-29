import axios from 'axios';

const url = 'http://192.168.6.102:3333'

export const getOrderMitraSelesai = (idMitra) => {
    return {
        type: 'GET_ORDERMITRASELESAI',
        payload: axios.get(`${url}/order/mitraselesai/${idMitra}`),
    }
};

export const getOrderMitraPending = (idMitra) => {
    return {
        type: 'GET_ORDER_MITRAPENDING',
        payload: axios.get(`${url}/order/mitrapending/${idMitra}`),
    }
};