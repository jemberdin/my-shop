import React, { useContext, useEffect, useReducer } from 'react';
import reducer from '../reducers/cart-reducer';
import {
    ADD_TO_CART
} from '../actions'; 

const CartContext = React.createContext();

export const CartProvider = (props) => {
    
    const getLocalStorage = () => {
        let cart = localStorage.getItem('cart');
        if (cart) return JSON.parse(localStorage.getItem('cart'));
        else return [];   
    }

    const initialState = {
        cart: getLocalStorage(),
        totalItems: 0,
        totalAmount: 0,
        shippingFee: 534,
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(state.cart));
    }, [state.cart]);

    const addToCart = (id, color, amount, product) => {
        dispatch({ type: ADD_TO_CART, payload: {id, color, amount, product} })
    }

    const removeItem = (id) => {

    }

    const toggleAmount = (id, value) => {

    }

    const clearCart = () => {

    }

    return <CartContext.Provider value={{...state, addToCart, removeItem, toggleAmount, clearCart}}>
        {props.children}
    </CartContext.Provider>
}

export const useCartContext = () => {
    return useContext(CartContext);
}
