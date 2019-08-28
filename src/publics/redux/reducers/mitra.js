import { AsyncStorage } from 'react-native'
const initialState = {
    mitraList: [],
    isLoading: false,
    isFulfilled: false,
    isRejected: false,
};

const mitra = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_MITRA_PENDING':
            return {
                ...state,
                isLoading: true,
                isFulfilled: false,
                isRejected: false,
            };
        case 'LOGIN_MITRA_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true,
            };
        case 'LOGIN_MITRA_FULFILLED':
            const token = action.payload.data.token
            const role = action.payload.data.role
            const idMitra = action.payload.data.idMitra
            AsyncStorage.setItem('token', token)
            AsyncStorage.setItem('role', role)
            AsyncStorage.setItem('idmitra', idMitra)
            console.warn('ROLE LOGIN: ', action.payload.data)
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
                mitraList: [state.mitraList, action.payload.data]
            };
        case 'REGISTER_MITRA_PENDING':
            return {
                ...state,
                isLoading: true,
                isFulfilled: false,
                isRejected: false,
            };
        case 'REGISTER_MITRA_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true,
            };
        case 'REGISTER_MITRA_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
                mitraList: [state.mitraList, action.payload.data]
            };
        default:
            return state;
    };

}
export default mitra