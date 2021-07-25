import { useParams } from 'react-router-dom';

const SingleProductPage = () => {
    const params = useParams();

    return (
        <section>
            <h2>Single product page</h2>
            <p>{params.id}</p>
        </section>
    );
}

export default SingleProductPage;
