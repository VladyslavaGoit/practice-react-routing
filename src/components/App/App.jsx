import { Mission } from 'components/Mission/Mission';
import { Reviews } from 'components/Reviews/Reviews';
import { SharedLayout } from 'components/SharedLayout/SharedLayout';
import { Team } from 'components/Team/Team';
import About from 'pages/About';
import Home from 'pages/Home';
import ProductDetail from 'pages/ProductDetail';
import Products from 'pages/Products';
import { Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />}>
          <Route path="mission" element={<Mission />} />
          <Route path="team" element={<Team />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="products" element={<Products />} />
        <Route path="products/:productId" element={<ProductDetail />} />
      </Route>
    </Routes>
  );
};
