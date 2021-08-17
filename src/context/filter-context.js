import React, { useContext, useReducer, useEffect } from 'react';
import reducer from '../reducers/filter-reducer';
import { useProductsContext } from './products-context';

import {
    LOAD_PRODUCTS,
} from '../actions';

const FilterContext = React.createContext();

export const FilterProvider = (props) => {

    const initialState = {
        filteredProducts: [],
        allProducts: [],
    };
    const { products } = useProductsContext();
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        dispatch({ type: LOAD_PRODUCTS, payload: products })
    }, [products])

    return (
        <FilterContext.Provider value={{ ...state }}>
            {props.children}
        </FilterContext.Provider>
    )
}

export const useFilterContext = () => {
    return useContext(FilterContext)
}
