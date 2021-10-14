import classes from './CartTotals.module.css';
import { useCartContext } from '../../context/cart-context';
import { formatPrice } from '../../utils/helpers';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../../context/auth-context';

const CartTotals = () => {
    const { totalAmount, shippingFee } = useCartContext();
    const { isLoggedIn } = useAuthContext();

    return <section className={classes.wrapper}>
        <div>
            <article>
                <h5 className={classes.subtotal}>
                    subtotal: <span>{formatPrice(totalAmount)}</span>
                </h5>
                <p className={classes.shipping}>shipping fee: <span>{formatPrice(shippingFee)}</span> </p>
                <hr />
                <h4 className={classes.total}>
                    order total: <span>{formatPrice(totalAmount + shippingFee)}</span>
                </h4>
            </article>
            {isLoggedIn && <Link to='/checkout' className={`${'btn'} ${classes.btn}`}>
                proceed to checkout
            </Link>}
            {!isLoggedIn && <Link to='auth'>
                <button className={`${'btn'} ${classes.btn}`}>
                    login before checkout
                </button>
            </Link>}
        </div>
    </section>
}
 
export default CartTotals;
