import classes from './CartButtons.module.css';
import { FaShoppingCart, FaUserPlus } from "react-icons/fa";
import { Link } from 'react-router-dom';

const CartButtons = (props) => {
    return <div className={classes['cart-btn-wrapper']} style={props.style}>
        <Link to='cart' className={classes['cart-btn']}>
            Cart
            <span className={classes['cart-container']}>
                <FaShoppingCart />
                <span className={classes['cart-value']}>
                    10
                </span>
            </span>
        </Link>
        <button className={classes['auth-btn']}>
            Login <FaUserPlus />
        </button>
    </div>
}
 
export default CartButtons;
