import axios from 'axios';

const url = 'http://192.168.6.103:3333'
export const register = (data) => {
    return {
        type: 'REGISTER',
        payload: axios.post(`${url}/user/register/`, data)
    }
};
export const login = (data) => {
    return {
        type: 'LOGIN',
        payload: axios.post(`${url}/user/login/`, data)
    }
};