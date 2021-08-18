import Product from '../Product/Product';
import classes from './GridView.module.css';

const GridView = ({products}) => {

    return <section className={classes.wrapper}>
        <div className={classes['products-container']}>
            {products.map(product => (
                <Product key={product.id} {...product}/>
            ))}
        </div>
    </section>
}
 
export default GridView;
