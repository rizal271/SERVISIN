import axios from 'axios';

const url = 'http://192.168.6.189:3333'

export const getCategory = () => {
    return {
        type: 'GET_CATEGORY',
        payload: axios.get(`${url}/category/`),

    }
};