
export const fetchData = (url) => {
    return async (dispatch) => {
        dispatch({ type: 'FETCH_DATA_REQUEST' });
        try {
            const response = await fetch(url);
            const data = await response.json();
            dispatch({ type: 'FETCH_DATA_SUCCESS', payload: data });
        } catch (error) {
            dispatch({ type: 'FETCH_DATA_FAILURE', payload: error.message });
        }
    };
};

export const clearData = () => {
    return {
        type: 'CLEAR_DATA',
    };
};
