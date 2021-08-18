import { PageHero, Filters, Sort, ProductsList } from '../../components';
import classes from './ProductsPage.module.css';

const ProductsPage = () => {
    return <main>
        <PageHero title='products'/>
        <div className='page'>
            <div className={`${'section-center'} ${classes.products}`}>
                <Filters />
                <div>
                    <Sort />
                    <ProductsList />
                </div>
            </div> 
        </div>
    </main>
}

export default ProductsPage;
