import React, { useContext, useReducer } from 'react';
import reducer from '../reducers/cart-reducer';
import {
    ADD_TO_CART
} from '../actions'; 

const CartContext = React.createContext();

export const CartProvider = (props) => {
    
    const initialState = {
        cart: [],
        totalItems: 0,
        totalAmount: 0,
        shippingFee: 534,
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    const addToCart = (id, color, amount, product) => {
        dispatch({ type: ADD_TO_CART, payload: {id, color, amount, product} })
    }

    return <CartContext.Provider value={{...state, addToCart}}>
        {props.children}
    </CartContext.Provider>
}

export const useCartContext = () => {
    return useContext(CartContext);
}
