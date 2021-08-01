import classes from './Footer.module.css';
const Footer = () => {
    return <footer className={classes['footer']}>
        <h5>
            &copy; {new Date().getFullYear()}
            <span> MyShop</span>
        </h5>
        <h5>All rights reserved</h5>
    </footer>
}

export default Footer;
