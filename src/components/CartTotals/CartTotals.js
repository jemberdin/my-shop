import classes from './CartTotals.module.css';
import { useCartContext } from '../../context/cart-context';
import { formatPrice } from '../../utils/helpers';
import { Link } from 'react-router-dom';

const CartTotals = () => {
    const {totalAmount, shippingFee} = useCartContext();

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
            <Link to='/checkout' className={`${'btn'} ${classes.btn}`}>
                proceed to checkout
            </Link>
        </div>
    </section>
}
 
export default CartTotals;
