import {
    AsyncStorage
} from 'react-native'
const initialState = {
    userList: [],
    isLoading: false,
    isFulfilled: false,
    isRejected: false,
};

const register = (state = initialState, action) => {
    switch (action.type) {
        case 'REGISTER_PENDING':
            return {
                ...state,
                isLoading: true,
                isFulfilled: false,
                isRejected: false,
            };
        case 'REGISTER_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true,
            };
        case 'REGISTER_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
                userList: action.payload.data
            };
        case 'LOGIN_PENDING':
            return {
                ...state,
                isLoading: true,
                isFulfilled: false,
                isRejected: false,
            };
        case 'LOGIN_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true,
            };
        case 'LOGIN_FULFILLED':            
                const token = action.payload.data.token
                const role = action.payload.data.role
                const idUser = action.payload.data.idUser
                const fullname = action.payload.data.fullname
                const email = action.payload.data.email
                const nohp = action.payload.data.nohp.toString()
                const lat = action.payload.data.lat
                const long = action.payload.data.long
                const image = action.payload.data.image
    
                AsyncStorage.setItem('lat', lat)
                AsyncStorage.setItem('long', long)
                AsyncStorage.setItem('image', image)
                AsyncStorage.setItem('fullname', fullname)
                AsyncStorage.setItem('email', email)
                AsyncStorage.setItem('nohp', nohp)
                AsyncStorage.setItem('token', token)
                AsyncStorage.setItem('role', role)
                AsyncStorage.setItem('idUser', idUser)
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
                userList: action.payload.data
            };
        default:
            return state;
    };

}
export default register