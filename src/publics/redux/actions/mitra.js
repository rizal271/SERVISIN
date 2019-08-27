import axios from 'axios';

const url = 'http://192.168.100.70:3333'

export const login = (data) => {
    return {
        type: 'LOGIN_MITRA',
        payload: axios.post(`${url}/mitra/login`, data)
    }
}