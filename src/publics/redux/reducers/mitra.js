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
            const fullname = action.payload.data.fullname
            const email = action.payload.data.email
            const phone = action.payload.data.nohp.toString()
            const idCategory = action.payload.data.idCategory
            const lat = action.payload.data.lat.toString()
            const long = action.payload.data.long.toString()
            const image = action.payload.data.image

            AsyncStorage.setItem('idCategory', idCategory)
            AsyncStorage.setItem('lat', lat)
            AsyncStorage.setItem('long', long)
            AsyncStorage.setItem('image', image)
            AsyncStorage.setItem('fullname', fullname)
            AsyncStorage.setItem('email', email)
            AsyncStorage.setItem('phone', phone)
            AsyncStorage.setItem('token', token)
            AsyncStorage.setItem('role', role)
            AsyncStorage.setItem('idmitra', idMitra)
            console.warn('ROLE LOGIN: ', action.payload.data.nohp)
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
                mitraList: [state.mitraList, action.payload.data]
            }; case 'REGISTER_MITRA_PENDING':
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
                mitraList: action.payload.data
            };
        default:
            return state;
    };

}
export default mitra