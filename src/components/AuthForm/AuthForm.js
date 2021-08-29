import classes from './AuthForm.module.css';
import { useState } from 'react';

const AuthForm = () => {
    const [isLogin, setIsLogin] = useState(true);

    const switchAuthModeHandler = () => {
        setIsLogin((prevState) => !prevState);
    };

    return (
        <section className={classes.wrapper}>
            <h4>{isLogin ? 'Login' : 'Sign Up'}</h4>
            <form>
                <div className={classes.control}>
                    <label htmlFor='email'>Your Email</label>
                    <input 
                        type='email' 
                        id='email' required />
                </div>
                <div className={classes.control}>
                    <label htmlFor='password'>Your Password</label>
                    <input 
                        type='password' 
                        id='password' 
                        required />
                </div>
                <div className={classes.actions}>
                    <button className={`${'btn'} ${classes.btn}`} >{isLogin ? 'Login' : 'Create Account'}</button>
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
