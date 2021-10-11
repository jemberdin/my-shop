import classes from './AuthForm.module.css';
import { useState, useRef } from 'react';
import { useAuthContext } from '../../context/auth-context';

const isEmpty = value => value.trim() === '';
const isEmailValid = email => /\S+@\S+\.\S+/.test(email);
const isPasswordValid = password => password.trim().length >= 6;

const AuthForm = () => {
    const { isLoading, loginUser } = useAuthContext();
    const [isLogin, setIsLogin] = useState(true);
    const [formInputsValidity, setFormInputsValidity] = useState({
        email: true,
        password: true
    });

    const emailInputRef = useRef();
    const passwordInputRef = useRef();

    const clearValidityState = event => {
        if (event.target.type === 'email') setFormInputsValidity({ ...formInputsValidity, email: true})
        if (event.target.type === 'password') setFormInputsValidity({ ...formInputsValidity, password: true})
    }

    const formSubmissionHandler = event => {
        event.preventDefault();
        const enteredEmail = emailInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;

        const enteredEmailIsValid = !isEmpty(enteredEmail) && isEmailValid(enteredEmail);
        const enteredPasswordIsValid = !isEmpty(enteredPassword) && isPasswordValid(enteredPassword);

        setFormInputsValidity({
            email: enteredEmailIsValid,
            password: enteredPasswordIsValid
        })

        const formIsValid = enteredEmailIsValid && enteredPasswordIsValid;

        if (!formIsValid) {
            return;
        }
        // send login data here
        loginUser({login: isLogin, email: enteredEmail, password: enteredPassword});
    }

    const switchAuthModeHandler = () => {
        setIsLogin((prevState) => !prevState);
    };

    return (
        <section className={classes.wrapper}>
            <h4>{isLogin ? 'Login' : 'Sign Up'}</h4>
            <form onSubmit={formSubmissionHandler}>
                <div className={`${classes.control} ${formInputsValidity.email ? '' : classes.invalid}`}>
                    <label htmlFor='email'>Your Email</label>
                    <input
                        ref={emailInputRef}
                        onFocus={clearValidityState} 
                        type='email' 
                        id='email' 
                    />
                    {!formInputsValidity.email && <p>Please enter a valid email!</p>}
                </div>
                <div className={`${classes.control} ${formInputsValidity.password ? '' : classes.invalid}`}>
                    <label htmlFor='password'>Your Password</label>
                    <input 
                        ref={passwordInputRef}
                        onFocus={clearValidityState}
                        type='password' 
                        id='password' 
                    />
                    {!formInputsValidity.password && <p>Password must be 6 characters or more!</p>}
                </div>
                <div className={classes.actions}>
                    {!isLoading && <button className={`${'btn'} ${classes.btn}`} >{isLogin ? 'Login' : 'Create Account'}</button>}
                    {isLoading && <button disabled={true} className={`${'btn'} ${classes.btn}`} >Loading...</button>}
                    <button
                        type='button'
                        className={classes['toggle-btn']}
                        onClick={switchAuthModeHandler}
                    >
                        {isLogin ? 'Create new account' : 'Login with existing account'}
                    </button>
                </div>
            </form>
        </section>
    );
}
 
export default AuthForm;
