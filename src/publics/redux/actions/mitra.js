import axios from 'axios';

const url = 'http://192.168.100.70:3333'

export const registerMitra = (data) => {
    return {
        type: 'REGISTER_MITRA',
        payload: axios.post(`${url}/mitra/register/`, data)

    }
};