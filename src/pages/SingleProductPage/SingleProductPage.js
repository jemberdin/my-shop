import { useEffect } from 'react';
import { useParams, useHistory, Link } from 'react-router-dom';
import { useProductsContext } from '../../context/products-context';
import { Error, Loading, PageHero, ProductImages, Stars, AddToCart } from '../../components';
import { single_product_url } from '../../utils/constants';
import classes from './SingleProductPage.module.css';
import { formatPrice } from '../../utils/helpers';

const SingleProductPage = () => {
    const { id } = useParams();
    const history = useHistory();

    const { 
        singleProductLoading, 
        singleProductError, 
        singleProduct,
        fetchSingleProduct
    } = useProductsContext();

    useEffect(() => {
        fetchSingleProduct(`${single_product_url}${id}`); 
    }, [fetchSingleProduct, id]);
    
    useEffect(() => {
        if (singleProductError) {
            setTimeout(() => {
                history.push('/');
            }, 3000);
        }
    }, [singleProductError, history]);

    if (singleProductLoading) {
        return <Loading />
    }
    if (singleProductError) {
        return <Error />
    }

    const {
        name, 
        price, 
        description, 
        stock, 
        //stars, 
        //reviews, 
        id: sku, 
        company, 
        //images 
    } = singleProduct;

    return (
        <main>
            <PageHero title={name} product/>
            <div className='section section-center page'>
                <Link to='/products' className='btn'>back to products</Link>
                <div className={classes['product-center']}>
                    <ProductImages />
                    <section className={classes.content}>
                        <h2>{name}</h2>
                        <Stars />
                        <h5 className={classes.price}>{formatPrice(price)}</h5>
                        <p className={classes.description}>{description}</p>
                        <p className={classes.info}>
                            <span>Available: </span>
                            {stock > 0 ? 'in stock' : 'out of stock'}
                        </p>
                        <p className={classes.info}>
                            <span>SKU: </span>
                            {sku}
                        </p>
                        <p className={classes.info}>
                            <span>Brand: </span>
                            {company}
                        </p>
                        <hr />
                        {stock > 0 && <AddToCart />}
                    </section>
                </div>
            </div>
        </main>
    );
}

export default SingleProductPage;
