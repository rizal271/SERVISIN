const initialState = {
    subCategoryList: [],
    isLoading: false,
    isFulfilled: false,
    isRejected: false,
};

//manage state 
const subcategory = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_SUBCATEGORY_PENDING':
            return {
                ...state,
                isLoading: true,
                isFulfilled: false,
                isRejected: false,
            };
        case 'GET_SUBCATEGORY_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true,
            };
        case 'GET_SUBCATEGORY_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
                subCategoryList : action.payload.data.result
            };
        default:
            return state;
    };

}

export default subcategory