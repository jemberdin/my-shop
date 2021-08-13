import { Link } from 'react-router-dom';
import classes from './PageHero.module.css';

const PageHero = ({title, product}) => {
    return <main className={classes.wrapper}>
        <div className='section-center'>
            <h3>
                <Link to='/'>Home</Link>
                {product && <Link to='/products'>/ Products</Link>}
                / {title}
            </h3>
        </div>
    </main>
}
 
export default PageHero;
