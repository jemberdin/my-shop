import classes from './Hero.module.css';
import { Link } from 'react-router-dom';
import heroBcg from '../../assets/hero-bcg.jpeg';
import heroBcg2 from '../../assets/hero-bcg-2.jpeg';

const Hero = () => {
    return <section className={`${'section-center'} ${classes.wrapper}`}>
        <article className='content'>
            <h1>
                design your <br />
                comfort zone
            </h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, error quae. Sapiente iste eligendi aspernatur nulla eum velit porro optio necessitatibus numquam qui quam cupiditate similique consequatur libero veritatis quisquam dolores pariatur ad modi est quia delectus, cumque tempore. Incidunt?
            </p>
            <Link to='products' className={`${'btn'} ${classes['hero-btn']}`}>
                shop now
            </Link>
        </article>
        <article className={classes['img-container']}>
            <img className={classes['main-img']} src={heroBcg} alt='table'/>
            <img className={classes['accent-img']} src={heroBcg2} alt='person working'/>
        </article>
    </section>
}
 
export default Hero;
