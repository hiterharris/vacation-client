const initialState = {
    user: []
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_USER_DATA':
            return {
                ...state,
                user: action.payload
            }
        default:
            return state;
    };
};
