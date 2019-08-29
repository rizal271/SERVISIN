const initialState = {
    orderuserList: [],
    isLoading: false,
    isFulfilled: false,
    isRejected: false,
};

//manage state 
const orderuser = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_USER_SELESAI_PENDING':
            return {
                ...state,
                isLoading: true,
                isFulfilled: false,
                isRejected: false,
            };
        case 'GET_USER_SELESAI_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true,
            };
        case 'GET_USER_SELESAI_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
                orderuserList: action.payload.data.result
            };
        case 'GET_USER_PENDING_PENDING':
            return {
                ...state,
                isLoading: true,
                isFulfilled: false,
                isRejected: false,
            };
        case 'GET_USER_PENDING_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true,
            };
        case 'GET_USER_PENDING_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
                orderuserList: action.payload.data.result
            };
        default:
            return state;
    };

}

export default orderuser