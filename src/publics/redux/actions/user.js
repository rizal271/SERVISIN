import axios from 'axios';


const url = 'http://192.168.6.102:3333'

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
}

export const updateLongLat = (idUser, data) => {
    return {
        type: 'UPDATE_LONGLAT',
        payload: axios.patch(`${url}/user/posision/${idUser}`, data)
    }
}

export const updateFoto = (idUser, data) => {
    return {
        type: 'UPDATE_FOTO',
        payload: axios.patch(`${url}/user/image/${idUser}`, data)
    }
}