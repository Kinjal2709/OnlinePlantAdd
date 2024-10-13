// cartReducer.js

import { SET_INITIAL_CART_COUNT } from "../type/type";

const initialState = {
    cartCount: 0,
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIAL_CART_COUNT:
            return {
                ...state,
                cartCount: action.payload,
            };
        default:
            return state;
    }
};

export default cartReducer;
