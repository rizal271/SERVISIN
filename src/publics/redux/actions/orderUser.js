import axios from 'axios';

const url = 'http://192.168.6.189:3333'

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

