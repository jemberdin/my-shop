import classes from './CartItem.module.css';
import { useCartContext } from '../../context/cart-context';
import { formatPrice } from '../../utils/helpers';
import { AmountButtons } from '../../components';
import { FaTrash } from 'react-icons/fa';

const CartItem = ({id, image, name, color, price, amount}) => {
    const {removeItem, toggleAmount} = useCartContext();

    const increase = () => {
        toggleAmount(id, 'inc');
    }

    const decrease = () => {
        toggleAmount(id, 'dec');
    }

    return <article className={classes.wrapper}>
        <div className={classes.title}>
            <img src={image} alt={name}/>
            <div>
                <h5 className={classes.name}>{name}</h5>
                <p className={classes.color}>
                    color: <span style={{background: color}}></span>
                </p>
                <h5 className={classes['price-small']}>{formatPrice(price)}</h5>
            </div>
        </div>
        <h5 className={classes.price}>{formatPrice(price)}</h5>
        <div className={classes['amount-btns']}>
            <AmountButtons 
                amount={amount}
                increase={increase}
                decrease={decrease}/>
        </div>
        <h5 className={classes.subtotal}>{formatPrice(price * amount)}</h5>
        <button className={classes['remove-btn']} onClick={() => removeItem(id)}>
            <FaTrash />
        </button>
    </article>
}
 
export default CartItem;
