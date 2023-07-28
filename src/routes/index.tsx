import Navbar from '../components/navbar';
import ErrorPage from '../pages/errorPage';
import Homepage from '../pages/homepage';

export default [
  {
    path: '/',
    element: <Navbar />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Homepage />
      }
    ]
  },

]