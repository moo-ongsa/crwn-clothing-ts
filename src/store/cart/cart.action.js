import { createAction } from "../../utils/reducer/reducer.utils";
import { CART_ACTION_TPYES } from "./cart.types";

const addCartItem = (cartItems, productToAdd) => {
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === productToAdd.id
    );

    if (existingCartItem) {
        return cartItems.map((cartItem) =>
            cartItem.id === productToAdd.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        );
    }

    return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === cartItemToAdd.id
    );

    if (existingCartItem.quantity === 1) {
        return cartItems.filter((cartItems) => cartItems.id !== cartItemToAdd.id);
    }

    return cartItems.map((cartItem) =>
        cartItem.id === cartItemToAdd.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
    );
};

const clearCartItem = (cartItems, cartItemToClear) => {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);
};

export const addItemToCart = (cartItems, productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    return createAction(CART_ACTION_TPYES.SET_CART_ITEMS, newCartItems)
};

export const removeItemToCart = (cartItems, cartItemToRemove) => {
    const newCartItems = removeCartItem(cartItems, cartItemToRemove);
    return createAction(CART_ACTION_TPYES.SET_CART_ITEMS, newCartItems)
};

export const clearItemFromCart = (cartItems, cartItemToClear) => {
    const newCartItems = clearCartItem(cartItems, cartItemToClear);
    return createAction(CART_ACTION_TPYES.SET_CART_ITEMS, newCartItems)
};

export const clearAllItemFromCart = () => {
    return createAction(CART_ACTION_TPYES.SET_CART_ITEMS, [])
};

export const setIsCartOpen = (boolean) => createAction(CART_ACTION_TPYES.SET_IS_CART_OPEN, boolean)