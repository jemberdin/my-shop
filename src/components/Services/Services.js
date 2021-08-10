import classes from './Services.module.css';
import { services } from '../../utils/constants';

const Services = () => {
    return <section className={classes.wrapper}>
        <div className={`${'section-center'} ${classes['section-center']}`}>
            <article className={classes.header}>
                <h3>
                    custom furniture <br />
                    built only for you
                </h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat deleniti earum officiis. Repellat, eius! Minus at reprehenderit illum sit labore.
                    
                </p>
            </article>
            <div className={classes['services-center']}>
                {services.map(service => (
                    <article key={service.id} className={classes.service}>
                        <span className={classes.icon}>{service.icon}</span>
                        <h4>{service.title}</h4>
                        <p>{service.text}</p>
                    </article>
                ))}
            </div>
        </div>
    </section>
}
 
export default Services;
