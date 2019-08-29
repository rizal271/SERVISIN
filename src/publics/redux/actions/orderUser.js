import axios from 'axios';
import url from './host'


export const getOrderUserSelesai = (idUser) => {
    return {
        type: 'GET_USER_SELESAI',
        payload: axios.get(`${url}/order/userselesai/${idUser}`),

    }
};

export const getOrderUserPending = (idUser) => {
    return {
        type: 'GET_USER_PENDING',
        payload: axios.get(`${url}/order/userpending/${idUser}`),

    }
};
export const postOrder = (data) => {
    console.warn('action',data);
    
    return {
        type: 'POST_ORDER',
        payload: axios.post(`${url}/order/`,data),

    }
};

