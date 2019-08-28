import axios from 'axios';

const url = 'http://192.168.100.42:3345'
export const register = (data) => {
    return {
        type: 'REGISTER',
        payload: axios.post(`${url}/user/register/`, data)

    }
};