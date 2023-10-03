import { getProductsById } from 'fakeAPI';
import { Link, useLocation, useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { productId } = useParams();
  const product = getProductsById(productId);
  const location = useLocation();
  console.log(location);
  return (
    <div>
      <Link to={location.state.from}>Back to products</Link>
      <img src="https://via.placeholder.com/960x240" alt={`${product.name}`} />
      <h2>{product.name}</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, pariatur
        nisi suscipit, sunt consequatur accusantium cum aut sit adipisci
        delectus vero? Laborum quam veniam reprehenderit accusantium accusamus
        perspiciatis et maxime.
      </p>
    </div>
  );
};
export default ProductDetail;
