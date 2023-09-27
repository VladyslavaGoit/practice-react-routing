import { Link } from 'react-router-dom';

export const ProductList = ({ products }) => {
  return (
    <ul>
      {products.map(({ id, name }) => (
        <li key={id}>
          <Link to={`${id}`}>
            <img src="https://via.placeholder.com/200x100" alt="placeholder" />
            <h2>{name}</h2>
          </Link>
        </li>
      ))}
    </ul>
  );
};
