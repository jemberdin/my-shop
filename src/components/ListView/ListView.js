import classes from './ListView.module.css';
import { formatPrice } from '../../utils/helpers';
import { Link } from 'react-router-dom';

const ListView = ({products}) => {
    return <section className={classes.wrapper}>
        {products.map(product => (
            <article key={product.id}>
                <img src={product.image} alt={product.name}/>
                <div>
                    <h4>{product.name}</h4>
                    <h5 className={classes.price}>{formatPrice(product.price)}</h5>
                    <p>{product.description.substring(0, 150)}...</p>
                    <Link to={`/products/${product.id}`} className={`${'btn'} ${classes.btn}`}>
                        Details
                    </Link>
                </div>
            </article>
        ))}
    </section>
}
 
export default ListView;
