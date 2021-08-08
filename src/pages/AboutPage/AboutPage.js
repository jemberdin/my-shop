import { PageHero } from '../../components';
import classes from './AboutPage.module.css';
import aboutImg from '../../assets/hero-bcg.jpeg';

const AboutPage = () => {
    return <main>
        <PageHero title='about'/>
        <section className={`${'page section section-center'} ${classes.wrapper}`}>
            <img src={aboutImg} alt='desk'/>
            <article>
                <div className={`${'title'} ${classes.title}`}>
                    <h2>our story</h2>
                    <div className={`${'underline'} ${classes.underline}`}></div>
                </div>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis sapiente hic nostrum quaerat voluptatum? Praesentium nulla eum eveniet laudantium vitae incidunt nostrum, fuga molestiae aspernatur fugit delectus ea aut id. Velit maxime distinctio perspiciatis quod eveniet, reprehenderit impedit rerum molestias sint odit blanditiis quas quaerat quia voluptatibus, officia aliquid ullam. Sapiente, beatae totam, aspernatur consectetur cupiditate ad necessitatibus blanditiis maxime molestiae atque maiores magnam nesciunt reprehenderit aliquid! Optio magnam beatae totam, perferendis ducimus ut odio consequatur asperiores nisi error iusto?
                </p>
            </article>
        </section>
    </main>
}

export default AboutPage;
