import axios from 'axios';

const url = 'http://192.168.6.103:3400'

export const register = (data) => {
    return {
        type: 'REGISTER',
        payload: axios.post(`${url}/user/register/`, data)
     
    }
};