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

const filter_reducer = (state, action) => {
    if (action.type === LOAD_PRODUCTS) {
        const maxPrice = Math.max.apply(null, action.payload.map(product => product.price));
        return {
            ...state, 
            allProducts: [...action.payload],
            filteredProducts: [...action.payload],
            filters: {...state.filters, maxPrice, price: maxPrice}
        };
    } 
    if (action.type === SET_GRIDVIEW) {
        return { ...state, gridView: true };
    }  
    if (action.type === SET_LISTVIEW) {
        return { ...state, gridView: false };
    }
    if (action.type === UPDATE_SORT) {
        return { ...state, sort: action.payload };
    }
    if (action.type === SORT_PRODUCTS) {
        const { filteredProducts, sort } = state;
        let tempProducts = [...filteredProducts];
        if (sort === 'price-lowest') {
            tempProducts = tempProducts.sort((a, b) => a.price - b.price);
        }
        if (sort === 'price-highest') {
            tempProducts = tempProducts.sort((a, b) => b.price - a.price);
        }
        if (sort === 'name-a') {
            tempProducts = tempProducts.sort((a, b) => {
                return a.name.localeCompare(b.name);
            });
        }
        if (sort === 'name-z') {
            tempProducts = tempProducts.sort((a, b) => {
                return b.name.localeCompare(a.name);
            });
        }
        return { ...state, filteredProducts: tempProducts }
    }
    if (action.type === UPDATE_FILTERS) {
        const {name, value} = action.payload;
        return { ...state, filters: { ...state.filters, [name]: value } };
    }
    if (action.type === FILTER_PRODUCTS) {
        const {allProducts} = state;
        const {text, company, category, color, price, shipping} = state.filters;
        let tempProducts = [...allProducts];
        if (text) {
            tempProducts = tempProducts.filter(product => product.name.toLowerCase().startsWith(text));
        }
        if (category !== 'all') {
            tempProducts = tempProducts.filter(product => product.category === category);
        }
        if (company !== 'all') {
            tempProducts = tempProducts.filter(product => product.company === company);
        }
        if (color !== 'all') {
            tempProducts = tempProducts.filter(product => {
                return product.colors.find(c => c === color);
            });
        }
        tempProducts = tempProducts.filter(product => product.price <= price);
        if (shipping) {
            tempProducts = tempProducts.filter(product => product.shipping === true);
        }
        return { ...state, filteredProducts: tempProducts };
    }
    if (action.type === CLEAR_FILTERS) {
        return { 
            ...state,
            filters: {
                ...state.filters,
                text: '',
                company: 'all',
                category: 'all',
                color: 'all',
                price: state.filters.maxPrice,
                shipping: false,
            }
        };
    }
}
  
export default filter_reducer;
