import React, { useContext, useReducer, useEffect } from 'react';
import reducer from '../reducers/filter-reducer';
import { useProductsContext } from './products-context';

import {
    CLEAR_FILTERS,
    FILTER_PRODUCTS,
    LOAD_PRODUCTS,
    SET_GRIDVIEW,
    SET_LISTVIEW,
    SORT_PRODUCTS,
    UPDATE_FILTERS,
    UPDATE_SORT,
} from '../actions';

const FilterContext = React.createContext();

export const FilterProvider = (props) => {

    const initialState = {
        filteredProducts: [],
        allProducts: [],
        gridView: true,
        sort: 'price-lowest',
        filters: {
            text: '',
            company: 'all',
            category: 'all',
            color: 'all',
            minPrice: 0,
            maxPrice: 0,
            price: 0,
            shipping: false,
        }
    };
    const { products } = useProductsContext();
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        dispatch({ type: LOAD_PRODUCTS, payload: products })
    }, [products]);

    useEffect(() => {
        dispatch({ type: FILTER_PRODUCTS });
        dispatch({ type: SORT_PRODUCTS });
    }, [products, state.sort, state.filters]);

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

    const updateFilters = (e) => {
        const name = e.target.name;
        let value = e.target.value;
        if (name === 'category') value = e.target.textContent;
        if (name === 'color') value = e.target.dataset.color;
        if (name === 'price') value = +value;
        if (name === 'shipping') value = e.target.checked;
        dispatch({ type: UPDATE_FILTERS, payload: {name, value} })
    }

    const clearFilters = () => {
        dispatch({ type: CLEAR_FILTERS })
    }

    return (
        <FilterContext.Provider value={{ 
            ...state, 
            setGridView, 
            setListView, 
            updateSort,
            updateFilters,
            clearFilters, 
        }}>
            {props.children}
        </FilterContext.Provider>
    )
}

export const useFilterContext = () => {
    return useContext(FilterContext);
}
