import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <h1>About us</h1>
      <ul>
        <li>
          <Link to="mission">Read about our mission</Link>
        </li>
        <li>
          <Link to="team">Get to know the team</Link>
        </li>
        <li>
          <Link to="reviews">Go through the reviews</Link>
        </li>
      </ul>
      <Suspense fallback={<div>Loading page</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
export default About;
