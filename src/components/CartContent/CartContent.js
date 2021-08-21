import { useCartContext } from '../../context/cart-context';
import { CartColumns, CartItem, CartTotals } from '../../components';
import classes from './CartContent.module.css';
import { Link } from 'react-router-dom';

const CartContent = () => {
    const {cart, clearCart} = useCartContext();

    return <section className='section section-center'>
        <CartColumns />
        {cart.map(item => <CartItem key={item.id} {...item}/>)}
        <hr />
        <div className={classes['link-container']}>
            <Link 
                to='/products' 
                className={classes['link-btn']}
            >
                continue shopping
            </Link>
            <button 
                className={`${classes['link-btn']} ${classes['clear-btn']}`}
                onClick={clearCart}
            >
                clear shopping cart
            </button>
        </div>
        <CartTotals />
    </section>
}
 
export default CartContent;
