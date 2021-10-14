import { PageHero } from '../../components';
import PayPal from '../../components/PayPal/PayPal';
import { useCartContext } from '../../context/cart-context';
import classes from './CheckOutPage.module.css';
import { Link } from 'react-router-dom';
import { formatPrice } from '../../utils/helpers';

const CheckoutPage = () => {
    const { cart, totalAmount, shippingFee } = useCartContext();

    return <main>
        <PageHero title='checkout'/>
        <div className={'page section section-center'}>
            {cart.length < 1 ? 
                <div className={classes.empty}>
                    <h2>You cart is empty</h2>
                    <Link to='/products' className='btn'>fill it</Link>
                </div> :
                <div className={classes.checkout}>
                    <article>
                        <h5>Your total is {formatPrice(totalAmount + shippingFee)} </h5>
                        <p>Test card number for United States: <strong>4242 4242 4242 4242</strong></p>
                        <p>MM / YY: <strong>04/24</strong></p>
                        <p>CVV: <strong>424</strong></p>
                    </article>
                    <PayPal />
                </div>
            }
        </div>
    </main>
}

export default CheckoutPage;
