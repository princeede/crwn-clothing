import { CartActionTypes } from "./cart.types";

export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
})

export const addItem = (item) => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
})

export const clearItemFromCart = (payload) => ({
    type: CartActionTypes.CLEAR_ACTION_FROM_TYPE,
    payload
})