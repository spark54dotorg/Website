import ErrorPage from '../pages/errorPage';
import Homepage from '../pages/homepage/index';

export default [
  {
    path: '/',
    element: <Homepage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/about',
    element: <div> About page</div>
  }
]