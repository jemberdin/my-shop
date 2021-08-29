import classes from './CartButtons.module.css';
import { FaShoppingCart, FaUserPlus } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useProductsContext } from '../../context/products-context';
import { useCartContext } from '../../context/cart-context';

const CartButtons = (props) => {
    const {closeSidebar} = useProductsContext();
    const {totalItems} = useCartContext();

    return <div className={classes['cart-btn-wrapper']} style={props.style}>
        <Link to='cart' className={classes['cart-btn']} onClick={closeSidebar}>
            Cart
            <span className={classes['cart-container']}>
                <FaShoppingCart />
                <span className={classes['cart-value']}>
                    {totalItems}
                </span>
            </span>
        </Link>
        <Link to='auth'>
            <button className={classes['auth-btn']}>
                Login <FaUserPlus />
            </button>
        </Link>
    </div>
}
 
export default CartButtons;
