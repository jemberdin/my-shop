import classes from './Contacts.module.css';

const Contacts = () => {
    return <section className={classes.wrapper}>
        <div className='section-center'>
           <h3>Join our newsletter and get 20% off</h3> 
           <div className={classes.content}>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo cupiditate reiciendis dolore modi debitis atque fugit voluptatum, officia corrupti a mollitia, expedita placeat! Voluptatibus, error?
                </p>
                <form className={classes['contact-form']}>
                    <input 
                        className={classes['form-input']}
                        type='email' 
                        placeholder='enter email'
                    />
                    <button
                        className={classes['submit-btn']}
                        type='submit'>
                           subscribe
                    </button>
                </form>
           </div>
        </div>
    </section>
}
 
export default Contacts;
