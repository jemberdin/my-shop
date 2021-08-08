import { Link } from 'react-router-dom';
import classes from './Navbar.module.css';
import logo from '../../assets/logo-myshop.png';
import { FaBars } from 'react-icons/fa';
import { links } from '../../utils/constants';
import CartButtons from '../CartButtons/CartButtons';
import { useProductsContext } from '../../context/products-context';

const Navbar = () => {
    const { openSidebar } = useProductsContext();

    return <nav className={classes.navbar}>
        <div className={classes['nav-center']}>
            <div className={classes['nav-header']}>
                <Link to='/'>
                    <img src={logo} alt='my-shop'/>
                </Link>
                <button className={classes['nav-toggle']} onClick={openSidebar}>
                    <FaBars /> 
                </button>
            </div>
            <ul className={classes['nav-links']}>
                {links.map(link => (
                    <li key={link.id}>
                        <Link to={link.url}>{link.text}</Link>
                    </li>
                ))}
            </ul>
            <CartButtons />
        </div>
    </nav>
}

export default Navbar;
