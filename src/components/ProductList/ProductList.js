import { useFilterContext } from '../../context/filter-context'; 
import { GridView, ListView } from '../../components';

const ProductList = () => {
    const { filteredProducts, gridView } = useFilterContext();

    if (filteredProducts < 1) {
        return <h5 style={{textTransform: 'none'}}>Sorry, no products matched your search...</h5>
    }
    if (gridView) {
        return <GridView products={filteredProducts}/>
    }
    return <ListView products={filteredProducts}/>
}
 
export default ProductList;
