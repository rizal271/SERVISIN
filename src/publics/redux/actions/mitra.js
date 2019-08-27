import axios from 'axios';

const url = 'http://192.168.6.189:3333'

export const login = (data) => {
    return {
        type: 'LOGIN_MITRA',
        payload: axios.post(`${url}/mitra/login`, data)
    }
}
export const registerMitra = (data) => {
    return {
        type: 'REGISTER_MITRA',
        payload: axios.post(`${url}/mitra/register/`, data)

    }
};