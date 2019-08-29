import { AsyncStorage } from 'react-native'
const initialState = {
    notifList: [],
    isLoading: false,
    isFulfilled: false,
    isRejected: false,
};

const notif = (state = initialState, action) => {
    switch (action.type) {
        case 'NOTIF_ALL_PENDING':
            return {
                ...state,
                isLoading: true,
                isFulfilled: false,
                isRejected: false,
            };
        case 'NOTIF_ALL_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true,
            };
        case 'NOTIF_ALL_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
                notifList: action.payload.data
            };

        default:
            return state;
    };

}
export default notif