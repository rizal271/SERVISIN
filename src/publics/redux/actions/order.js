import axios from 'axios';
import url from './host'

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
export const patchOrder = (idOrder) => {
    return {
        type: 'POST_ORDER',
        payload: axios.patch(`${url}/order/${idOrder}`),
    }
};

