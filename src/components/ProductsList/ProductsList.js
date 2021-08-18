import { useFilterContext } from '../../context/filter-context'; 
import { GridView } from '../../components';

const ProductsList = () => {
    const { filteredProducts } = useFilterContext();

    return <GridView products={filteredProducts}>

    </GridView>
}
 
export default ProductsList;
