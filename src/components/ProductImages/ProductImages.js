import classes from './ProductImages.module.css';

import { useState } from "react";

const ProductImages = ({images = [{url:''}]}) => {
    const [mainImage, setMainImage] = useState(images[0])
    return <section className={classes.wrapper}>
        <img src={mainImage.url} alt='main-img' className={classes.main}/>
        <div className={classes.gallery}>
            {images.map((image, index) => (
                <img 
                    key={index} 
                    src={image.url} 
                    alt={image.filename}
                    className={classes[`${image.url === mainImage.url && 'active'}`]}
                    onClick={() => setMainImage(images[index])}
                />
            ))}
        </div>
    </section>
}
 
export default ProductImages;
