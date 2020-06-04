const initialState = {
    user: [],
    restaurantList: []
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_USER_DATA':
            return {
                ...state,
                user: action.payload
            }
        case 'FETCH_RESTAURANT_DATA':
            return {
                ...state,
                restaurantList: action.payload
            }
        default:
            return state;
    };
};
