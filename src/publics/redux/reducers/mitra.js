const initialState = {
    userList: [],
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
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
                userList: [state.userList, action.payload.data]
            };
        default:
            return state;
    };

}
export default mitra