import { Link } from 'react-router-dom';
import classes from './PageHero.module.css';

const PageHero = ({title}) => {
    return <main className={classes.wrapper}>
        <div className='section-center'>
            <h3>
                <Link to='/'>Home</Link>/ {title}
            </h3>
        </div>
    </main>
}
 
export default PageHero;
