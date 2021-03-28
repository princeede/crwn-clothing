import { createSelector } from "reselect";

// Create a selector for cart items

const selectCart = state => state.cart;

export const selectCartItems = createSelector([selectCart], cart => cart.cartItems);

export const selectCartItemsCount = createSelector([selectCartItems], cartItems => cartItems.reduce((pv, cv) => cv.quantity + pv, 0));
export const selectCartTotalPrice = createSelector([selectCartItems], cartItems => cartItems.reduce((pv, cv) => (cv.quantity * cv.price) + pv, 0));

export const selectCartHidden = createSelector([selectCart], cart => cart.hidden)