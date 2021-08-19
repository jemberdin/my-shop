import classes from './Sort.module.css';
import { BsFillGridFill, BsList } from 'react-icons/bs';
import { useFilterContext } from '../../context/filter-context';

const Sort = () => {
    const { 
        filteredProducts, 
        gridView, 
        setGridView, 
        setListView,
        sort,
        updateSort 
    } = useFilterContext();

    return <section className={classes.wrapper}>
        <div className={classes['btn-container']}>
            <button className={gridView ? `${classes.active}` : null} onClick={setGridView}>
                <BsFillGridFill />
            </button>
            <button className={!gridView ? `${classes.active}` : null} onClick={setListView}>
                <BsList />
            </button>
        </div>
        <p>{filteredProducts.length} products found</p>
        <hr />
        <form>
            <label htmlFor='sort'>sort by</label>
            <select 
                id='sort' 
                value={sort} 
                className={classes['sort-input']}
                onChange={updateSort}
            >
                <option value='price-lowest'>price (lowest)</option>
                <option value='price-highest'>price (highest)</option>
                <option value='name-a'>name (a - z)</option>
                <option value='name-z'>name (z - a)</option>
            </select>
        </form>
    </section>
}
 
export default Sort;
