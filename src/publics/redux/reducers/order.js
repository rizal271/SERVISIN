const initialState = {
    orderList: [],
    isLoading: false,
    isFulfilled: false,
    isRejected: false,
};

//manage state GET_ORDER_MITRAPENDING
const order = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_ORDERMITRASELESAI_PENDING':
            return {
                ...state,
                isLoading: true,
                isFulfilled: false,
                isRejected: false,
            };
        case 'GET_ORDERMITRASELESAI_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true,
            };
        case 'GET_ORDERMITRASELESAI_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
                orderList: action.payload.data.result
            };

        case 'GET_ORDER_MITRAPENDING_PENDING':
            return {
                ...state,
                isLoading: true,
                isFulfilled: false,
                isRejected: false,
            };
        case 'GET_ORDER_MITRAPENDING_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true,
            };
        case 'GET_ORDER_MITRAPENDING_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
                orderList: action.payload.data.result
            };
        default:
            return state;
    };

}

export default order