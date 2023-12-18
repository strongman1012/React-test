// routes.js
import Home from '../pages/Home';
import Error from '../pages/Error';
import Legal from '../pages/Legal';

const routes = [
  {
    path: '/',
    component: Home,
    exact: true,
  },
  {
    path: '/error',
    component: Error,
  },
  {
    path: '/legal',
    component: Legal
  }
];

export default routes;
