
const initialState = {
    data: null,
    loading: false,
    error: null,
};

const swapiReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_DATA_REQUEST':
            return { ...state, loading: true };
        case 'FETCH_DATA_SUCCESS':
            return { ...state, loading: false, data: action.payload };
        case 'FETCH_DATA_FAILURE':
            return { ...state, loading: false, error: action.payload };
        case 'CLEAR_DATA':
            return { ...state, data: null };
        default:
            return state;
    }
};

export default swapiReducer;
