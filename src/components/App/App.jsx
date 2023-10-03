import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from 'components/SharedLayout/SharedLayout';
const Mission = lazy(() => import('components/Mission/Mission'));
const Reviews = lazy(() => import('components/Reviews/Reviews'));
const Team = lazy(() => import('components/Team/Team'));
const About = lazy(() => import('pages/About'));
const Home = lazy(() => import('pages/Home'));
const ProductDetail = lazy(() => import('pages/ProductDetail'));
const Products = lazy(() => import('pages/Products'));

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
