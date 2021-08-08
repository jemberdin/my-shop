import React, { useContext, useReducer } from 'react';
import reducer from '../reducers/products-reducer';
import {
    SIDEBAR_OPEN,
    SIDEBAR_CLOSE,
  } from '../actions';

const ProductsContext = React.createContext();

export const ProductsProvider = (props) => {

    const initialState = {
        isSidebarOpen: false
    };
    const [state, dispatch] = useReducer(reducer, initialState);

    const openSidebar = () => {
        dispatch({type: SIDEBAR_OPEN});
    }

    const closeSidebar = () => {
        dispatch({type: SIDEBAR_CLOSE});
    }

    return (
        <ProductsContext.Provider value={{ ...state, openSidebar, closeSidebar }}>
            {props.children}
        </ProductsContext.Provider>
    );
};

export const useProductsContext = () => {
    return useContext(ProductsContext);
};

