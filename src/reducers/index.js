const initialState = {
    user: [],
    restaurantList: [],
    foodList: []
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
        case 'FOOD_LIST':
            return {
                ...state,
                foodList: action.payload
            }
        default:
            return state;
    };
};
