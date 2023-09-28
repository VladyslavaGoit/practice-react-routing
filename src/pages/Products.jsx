import { ProductList } from 'components/ProductList/ProductList';
import { SearchBox } from 'components/SearchBox/SearchBox';
import { getProducts } from 'fakeAPI';
import { useSearchParams } from 'react-router-dom';

const Products = () => {
  const products = getProducts();
  const [searchParams, setSearchParams] = useSearchParams();
  const productName = searchParams.get('name') ?? '';

  const updateSearchParams = name => {
    const newParams = name !== '' ? { name } : {};
    setSearchParams(newParams);
  };

  const visibleProducts = products.filter(({ name }) =>
    name.toLowerCase().includes(productName.toLowerCase())
  );

  return (
    <>
      <SearchBox value={productName} onChange={updateSearchParams} />
      <ProductList products={visibleProducts} />
    </>
  );
};
export default Products;
