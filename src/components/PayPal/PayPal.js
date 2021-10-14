import React from "react";
import ReactDOM from "react-dom";
import classes from './PayPal.module.css';
import { useCartContext } from '../../context/cart-context';

const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });

const PayPal = () => {
    const { totalAmount, shippingFee, clearCart } = useCartContext();

    const createOrder = (data, actions) => {
        return actions.order.create({
            purchase_units: [
                {
                    amount: {
                        value: (totalAmount + shippingFee) / 100,
                    },
                },
            ],
        });
    };

    const onApprove = (data, actions) => {
        clearCart();
        return actions.order.capture();
    };

    return (
        <section className={classes.wrapper} >
            <PayPalButton
                createOrder={(data, actions) => createOrder(data, actions)}
                onApprove={(data, actions) => onApprove(data, actions)}
            />
        </section>
    );
}
 
export default PayPal;
