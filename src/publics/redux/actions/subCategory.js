import axios from 'axios';
import url from './host'


export const getsubCategory = (idCat) => {
    return {
        type: 'GET_SUBCATEGORY',
        payload: axios.get(`${url}/subCategory/${idCat}`),

    }
};

export const getsubCategoryAll = () => {
    return {
        type: 'GET_ALL',
        payload: axios.get(`${url}/subCategory/`),

    }
};