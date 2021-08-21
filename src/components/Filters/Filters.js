import { useFilterContext } from "../../context/filter-context";
import classes from './Filters.module.css';
import { formatPrice, getUniqueValues } from '../../utils/helpers';
import { FaCheck } from 'react-icons/fa';

const Filters = () => {
    const {
        filters: {
            text,
            company,
            category,
            color,
            minPrice,
            maxPrice,
            price,
            shipping
        },
        allProducts,
        updateFilters,
        clearFilters,
    } = useFilterContext();

    const categories = getUniqueValues(allProducts, 'category');
    const companies = getUniqueValues(allProducts, 'company');
    const colors = getUniqueValues(allProducts, 'colors');

    return <section>
        <div className={classes.content}>
            <form onSubmit={e => e.preventDefault()}>
                <div className={classes['form-control']}>
                    <input 
                        type='text' 
                        name='text' 
                        placeholder='search'
                        className={classes['search-input']}
                        value={text}
                        onChange={updateFilters}
                    />
                </div>
                <div className={classes['form-control']}>
                    <h5>category</h5>
                    <div>
                        {categories.map(c => 
                            <button 
                                key={c}
                                name='category'
                                onClick={updateFilters}
                                className={category === c.toLowerCase() ? `${classes.btn} ${classes.active}` : `${classes.btn}`}
                            >
                                {c}
                            </button>    
                        )}
                    </div>
                </div>
                <div className={classes['form-control']}>
                    <h5>company</h5>
                    <select 
                        name='company'
                        value={company}
                        onChange={updateFilters}
                        className={classes.company}
                    >
                        {companies.map(c =>
                            <option key={c} value={c}>
                                {c}
                            </option>
                        )}
                    </select>
                </div>
                <div className={classes['form-control']}>
                    <h5>colors</h5>
                    <div className={classes.colors}>
                        {colors.map(c => {
                        if (c === 'all') {
                            return <button name='color'
                                key='all'
                                onClick={updateFilters}
                                data-color='all'
                                className={color === 'all' ? `${classes.btn} ${classes['all-btn']} ${classes.active}` : `${classes.btn} ${classes['all-btn']}`}
                            >
                                all
                            </button>}
                            return <button 
                                key={c} 
                                name='color'
                                onClick={updateFilters}
                                data-color={c}
                                className={color === c ? `${classes['color-btn']} ${classes.active}` : `${classes['color-btn']}`}
                                style={{background: c}}
                            >
                                {color === c && <FaCheck />}
                            </button>
                        })}
                    </div>
                </div>
                <div className={classes['form-control']}>
                    <h5>price</h5>
                    <p className={classes.price}>{formatPrice(price)}</p>
                    <input 
                        type='range' 
                        name='price' 
                        onChange={updateFilters}
                        min={minPrice}
                        max={maxPrice}
                        value={price}
                    />
                </div>
                <div className={`${classes['form-control']} ${classes.shipping}`}>
                    <label htmlFor='shipping'>free shipping</label>
                    <input 
                        type='checkbox' 
                        name='shipping' 
                        id='shipping'
                        onChange={updateFilters}
                        checked={shipping}
                    >
                    </input>
                </div>
            </form>
            <button className={`${classes.btn} ${classes['clear-btn']}`} onClick={clearFilters}> clear filters</button>
        </div>
    </section>
}
 
export default Filters;
