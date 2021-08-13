import React, { useContext, useEffect, useReducer, useCallback } from 'react';
import reducer from '../reducers/products-reducer';
import { products_url } from '../utils/constants';
import {
    SIDEBAR_OPEN,
    SIDEBAR_CLOSE,
    GET_PRODUCTS_BEGIN,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_ERROR,
    GET_SINGLE_PRODUCT_BEGIN,
    GET_SINGLE_PRODUCT_SUCCESS,
    GET_SINGLE_PRODUCT_ERROR
} from '../actions';

const ProductsContext = React.createContext();

export const ProductsProvider = (props) => {

    const initialState = {
        isSidebarOpen: false,
        productsLoading: false,
        productsError: false,
        products: [],
        featuredProducts: [],
        singleProductLoading: false,
        singleProductError: false,
        singleProduct: {},
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
            dispatch({ type: GET_PRODUCTS_SUCCESS, payload: products });
        } catch (error) {
            dispatch({ type: GET_PRODUCTS_ERROR });
        }
    }

    const fetchSingleProduct = useCallback (async (single_product_url) => {
        dispatch({ type: GET_SINGLE_PRODUCT_BEGIN});
        try {
            const response = await fetch(single_product_url);
            const singleProduct = await response.json();
            dispatch({ type: GET_SINGLE_PRODUCT_SUCCESS, payload: singleProduct });
        } catch (error) {
            dispatch({ type: GET_SINGLE_PRODUCT_ERROR});
        }
    }, [])

    useEffect(() => {
        fetchProducts();
    }, [])

    return (
        <ProductsContext.Provider value={{ ...state, openSidebar, closeSidebar, fetchSingleProduct }}>
            {props.children}
        </ProductsContext.Provider>
    );
};

export const useProductsContext = () => {
    return useContext(ProductsContext);
};
