import classes from './CartButtons.module.css';
import { FaShoppingCart, FaUserMinus, FaUserPlus } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useProductsContext } from '../../context/products-context';
import { useCartContext } from '../../context/cart-context';
import { useAuthContext } from '../../context/auth-context';

const CartButtons = (props) => {
    const {closeSidebar} = useProductsContext();
    const {totalItems} = useCartContext();
    const { isLoggedIn, logoutUser } = useAuthContext();

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
        {!isLoggedIn && <Link to='auth'>
            <button className={classes['auth-btn']}>
                Login <FaUserPlus />
            </button>
        </Link>}
        {isLoggedIn && <button className={classes['auth-btn']} onClick={logoutUser}>
            Logout <FaUserMinus />
        </button>}
    </div>
}
 
export default CartButtons;
