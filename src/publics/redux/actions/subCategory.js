import axios from 'axios';

const url = 'http://192.168.6.121:333'


export const getsubCategory = (idCat) => {
    return {
        type: 'GET_SUBCATEGORY',
        payload: axios.get(`${url}/subCategory/${idCat}`),

    }
};