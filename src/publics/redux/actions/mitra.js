import axios from 'axios';

import url from './host'

export const upIDPhoneMitra = (idMitra, data) => {
    console.warn('id pohne action: ', data);

    return {
        type: 'ID_PHONE',
        payload: axios.patch(`${url}/mitra/idphone/${idMitra}/`, data)
    }
}

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
}

export const getMitra = () => {
    return {
        type: 'GET_MITRA',
        payload: axios.get(`${url}/mitra/`)
    }
};

export const getMitraByCategory = (idCat) => {
    return {
        type: 'GET_MITRABYCATEGORY',
        payload: axios.get(`${url}/mitra/category/${idCat}`)
    }
}

export const getMitraById = (idMitra) => {
    return {
        type: 'GET_MITRABYID',
        payload: axios.get(`${url}/mitra/${idMitra}`)
    }
}

export const updateFoto = (idMitra, data) => {
    return {
        type: 'UPDATE_FOTO',
        payload: axios.patch(`${url}/mitra/image/${idMitra}`, data)
    }
}

export const updateLongLatMitra = (idMitra, data) => {
    return {
        type: 'UPDATE_LONGLAT',
        payload: axios.patch(`${url}/mitra/posision/${idMitra}`, data)
    }
}
export const logout = (idMitra) => {
    return {
        type: 'LOGOUT_USER',
        payload: axios.patch(`${url}/mitra/logout/${idMitra}`)
    }
}