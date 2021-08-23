import { Link } from 'react-router-dom';
import { FaCheck } from 'react-icons/fa';
import { useState } from 'react';
import classes from './AddToCart.module.css';
import { AmountButtons } from '../../components';
import { useCartContext } from '../../context/cart-context';

const AddToCart = ({product}) => {
    const {id, stock, colors} = product;
    const {addToCart} = useCartContext();

    const [mainColor, setMainColor] = useState(colors[0]);
    const [amount, setAmount] = useState(1);

    const increase = () => {
        setAmount(prevAmount => {
            let tempAmount = prevAmount + 1;
            if (tempAmount > stock) tempAmount = stock;
            return tempAmount;
        })
    }

    const decrease = () => {
        setAmount(prevAmount => {
            let tempAmount = prevAmount -1;
            if (tempAmount < 1) tempAmount = 1;
            return tempAmount;
        })
    }

    return <section className={classes.wrapper}>
        <div className={classes.colors}>
            <span>colors:</span>
            <div>
                {colors.map((color, index) => (
                    <button 
                        key={index} 
                        className={mainColor === color ? `${classes['color-btn']} ${classes.active}` : `${classes['color-btn']}`}
                        style={{background: color}}
                        onClick={() => setMainColor(color)}
                    >
                        {mainColor === color && <FaCheck />}
                    </button>
                ))}
            </div>
        </div>
        <div className={classes['btn-container']}>
            <AmountButtons 
                amount={amount} 
                increase={increase} 
                decrease={decrease}/>
            <Link 
                to='/cart' 
                className={`${'btn'} ${classes.btn}`}
                onClick={() => addToCart(id, mainColor, amount, product)}
            >
                add to cart
            </Link>
        </div>           
    </section>
}
 
export default AddToCart;
