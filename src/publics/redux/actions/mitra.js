import axios from 'axios';
const url = 'http://192.168.6.121:333'


export const login = (data) => {
    return {
        type: 'LOGIN_MITRA',
        payload: axios.post(`${url}/mitra/login`, data)
    }
};
export const registerMitra = (data) => {
    return {
        type: 'REGISTER_MITRA',
        payload: axios.post(`${url}/mitra/register/`, data)

    }
};

export const getMitraByCategory = (idCat) => {
    return {
        type: 'GET_MITRABYCATEGORY',
        payload: axios.get(`${url}/mitra/category/${idCat}`)
    }
};

export const getMitraById = (idMitra) => {
    return {
        type: 'GET_MITRABYID',
        payload: axios.get(`${url}/mitra/${idMitra}`)
    }
};