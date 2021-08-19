import React, { useContext, useReducer, useEffect } from 'react';
import reducer from '../reducers/filter-reducer';
import { useProductsContext } from './products-context';

import {
    LOAD_PRODUCTS,
    SET_GRIDVIEW,
    SET_LISTVIEW,
    SORT_PRODUCTS,
    UPDATE_SORT,
} from '../actions';

const FilterContext = React.createContext();

export const FilterProvider = (props) => {

    const initialState = {
        filteredProducts: [],
        allProducts: [],
        gridView: true,
        sort: 'price-lowest',
    };
    const { products } = useProductsContext();
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        dispatch({ type: LOAD_PRODUCTS, payload: products })
    }, [products]);

    useEffect(() => {
        dispatch({ type: SORT_PRODUCTS });
    }, [products, state.sort]);

    const setGridView = () => {
        dispatch({ type: SET_GRIDVIEW });
    }

    const setListView = () => {
        dispatch({ type: SET_LISTVIEW });
    }

    const updateSort = (e) => {
        const value = e.target.value;
        dispatch({ type: UPDATE_SORT, payload: value });
    }

    return (
        <FilterContext.Provider value={{ ...state, setGridView, setListView, updateSort }}>
            {props.children}
        </FilterContext.Provider>
    )
}

export const useFilterContext = () => {
    return useContext(FilterContext)
}
