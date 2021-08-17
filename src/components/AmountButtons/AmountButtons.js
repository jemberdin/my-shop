import { FaPlus, FaMinus } from 'react-icons/fa';
import classes from './AmountButtons.module.css';

const AmountButtons = ({ amount, increase, decrease }) => {
    return <div className={classes.wrapper}>
        <button  onClick={decrease}>
            <FaMinus />
        </button>
        <h2>{amount}</h2>
        <button  onClick={increase}>
            <FaPlus />
        </button>
    </div>
}
 
export default AmountButtons;
