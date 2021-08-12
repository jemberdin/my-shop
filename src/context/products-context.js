import React, { useContext, useEffect, useReducer } from 'react';
import reducer from '../reducers/products-reducer';
import { products_url } from '../utils/constants';
import {
    SIDEBAR_OPEN,
    SIDEBAR_CLOSE,
    GET_PRODUCTS_BEGIN,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_ERROR,
} from '../actions';

const ProductsContext = React.createContext();

export const ProductsProvider = (props) => {

    const initialState = {
        isSidebarOpen: false,
        productsLoading: false,
        productsError: false,
        products: [],
        featuredProducts: [],
    };
    const [state, dispatch] = useReducer(reducer, initialState);

    const openSidebar = () => {
        dispatch({ type: SIDEBAR_OPEN });
    }

    const closeSidebar = () => {
        dispatch({ type: SIDEBAR_CLOSE });
    }

    const fetchProducts = async () => {
        dispatch({ type: GET_PRODUCTS_BEGIN});
        try {
            const response = await fetch(products_url);
            const products = await response.json();
            dispatch({ type: GET_PRODUCTS_SUCCESS, payload: products});
        } catch (error) {
            dispatch({ type: GET_PRODUCTS_ERROR });
        }
    }

    useEffect(() => {
        fetchProducts();
    }, [])

    return (
        <ProductsContext.Provider value={{ ...state, openSidebar, closeSidebar }}>
            {props.children}
        </ProductsContext.Provider>
    );
};

export const useProductsContext = () => {
    return useContext(ProductsContext);
};
