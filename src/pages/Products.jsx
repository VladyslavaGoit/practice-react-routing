import { ProductList } from 'components/ProductList/ProductList';
import { getProducts } from 'fakeAPI';

const Products = () => {
  const products = getProducts();
  return <ProductList products={products} />;
};
export default Products;
