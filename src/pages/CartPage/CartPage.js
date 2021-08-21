import { useCartContext } from '../../context/cart-context';
import classes from './CartPage.module.css';
import { Link } from 'react-router-dom';
import { PageHero } from '../../components';
import { Fragment } from 'react';
import { CartContent } from '../../components';

const CartPage = () => {
    const {cart} = useCartContext();

    if (cart.length > 10) { 
        return <main className='page-100'> 
            <div className={classes.empty}>
                <h2>You cart is empty</h2>
                <Link to='/products' className='btn'>fill it</Link>
            </div>
        </main>
    }
    return (
        <Fragment>
            <PageHero title='cart'/>
            <main classname='page'>
                <CartContent />
            </main>
        </Fragment>
    )
    
}

export default CartPage;
