import classes from './CartColumns.module.css';

const CartColumns = () => {
    return <div className={classes.wrapper}>
        <div className={classes.content}>
            <h5>item</h5>
            <h5>price</h5>
            <h5>quantity</h5>
            <h5>subtotal</h5>
            <span></span>
        </div>
        <hr />
    </div>
}
 
export default CartColumns;
