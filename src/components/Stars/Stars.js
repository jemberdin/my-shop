import classes from './Stars.module.css';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';

const Stars = ({ stars, reviews }) => {

    const tempStars = Array.from({length: 5}, (_, index) => {
        const number = index + 0.5;
        return <span key={index}>
            {stars >= index + 1 ? <BsStarFill /> : stars >= number ? <BsStarHalf /> : <BsStar />}
        </span>
    });
    
    return <div className={classes.wrapper}>
        <div>{tempStars}</div>
        <p>({reviews} customer reviews)</p>
    </div>
}
 
export default Stars;
