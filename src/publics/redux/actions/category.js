import axios from 'axios';

const url = 'http://192.168.100.42:3345'

export const getCategory = () => {
    return {
        type: 'GET_CATEGORY',
        payload: axios.get(`${url}/category/`),

    }
};