import { Link } from 'react-router-dom';
import classes from './Product.module.css';
import { FaSearch } from 'react-icons/fa';
import { formatPrice } from '../../utils/helpers';

const Product = ({ image, name, price, id }) => {
    return <article>
        <div className={classes.container}>
            <img src={image} alt={name}/>
            <Link to={`/products/${id}`} className={classes.link}>
                <FaSearch/>
            </Link>
        </div>
        <footer>
            <h5>{name}</h5>
            <p>{formatPrice(price)}</p>
        </footer>
    </article>
}
 
export default Product;
