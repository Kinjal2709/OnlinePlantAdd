import { LOGIN, LOGOUT, SET_INITIAL_CART_COUNT } from "../type/type";

export const login = (token) => ({
    type: LOGIN,
    payload: token,
});

export const logout = () => ({
    type: LOGOUT,
});

export const setInitialCartCount = (count) => ({
    type: SET_INITIAL_CART_COUNT,
    payload: count,
});
