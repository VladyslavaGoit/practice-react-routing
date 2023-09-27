import About from 'pages/About';
import Home from 'pages/Home';
import ProductDetail from 'pages/ProductDetail';
import Products from 'pages/Products';
import { NavLink, Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <div>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/products">Products</NavLink>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
      </Routes>
    </div>
  );
};
