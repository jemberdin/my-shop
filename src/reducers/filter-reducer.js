import {
    LOAD_PRODUCTS,
} from '../actions';

const filter_reducer = (state, action) => {
    if (action.type === LOAD_PRODUCTS) {
        return {
            ...state, 
            allProducts: [...action.payload],
            filteredProducts: [...action.payload],
        }
    }    
}
  
export default filter_reducer;
