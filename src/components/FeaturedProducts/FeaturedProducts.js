import { useProductsContext } from '../../context/products-context';
import { Error, Loading } from '../../components';
import Product from '../Product/Product';
import classes from './FeaturedProducts.module.css';

const FeaturedProducts = () => {
    const { productsLoading, productsError, featuredProducts } = useProductsContext();
    
    if (productsLoading) {
        return <Loading />
    }
    if (productsError) {
        return <Error />
    }
    return <section className={`${'section'} ${classes.wrapper}`}>
        <div className='title'>
            <h2>featured products</h2>
            <div className='underline'></div>
        </div>
        <div className={`${'section-center'} ${classes.featured}`}>
            {featuredProducts.map(product => (
                <Product key={product.id} {...product}/>
            ))}
        </div>
    </section>
}
 
export default FeaturedProducts;
