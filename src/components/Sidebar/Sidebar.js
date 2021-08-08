import classes from './Sidebar.module.css';
import logo from '../../assets/logo-myshop.png';
import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { links } from '../../utils/constants';
import CartButtons from '../CartButtons/CartButtons';
import { useProductsContext } from '../../context/products-context';

const Sidebar = () => {
    const { isSidebarOpen, closeSidebar } = useProductsContext();
    
    return <aside className={isSidebarOpen ? `${classes.sidebar} ${classes['show-sidebar']}` : classes.sidebar}>
        <div className={classes['sidebar-header']}>
            <img src={logo} alt='my-shop'/>
            <button className={classes['close-btn']} onClick={closeSidebar}>
                <FaTimes />
            </button>
        </div>
        <ul className={classes.links}>
            {links.map(link => (
                <li key={link.id}>
                    <Link to={link.url} onClick={closeSidebar}>{link.text}</Link>
                </li>
            ))}
            <li>
                <Link to='checkout' onClick={closeSidebar}>checkout</Link>
            </li>
        </ul>
        <CartButtons style={{display: 'grid', gridTemplateColumns: '1fr 1fr', margin: 'auto', width: '225px'}}/>
    </aside>
}

export default Sidebar;
