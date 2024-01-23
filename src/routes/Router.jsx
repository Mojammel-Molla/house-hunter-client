import { createBrowserRouter } from 'react-router-dom';
import MainLayOut from '../lay-outs/main-layout/MainLayOut';
import Home from '../pages/home-page/home/Home';
import LogIn from '../components/login/LogIn';
import Register from '../components/register/Register';
import ApartmentDetail from '../pages/home-page/apartment-detail/ApartmentDetail';
import MyBookings from '../pages/my-bookings/MyBookings';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayOut />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'apartment/:id',
        element: <ApartmentDetail />,
        loader: async ({ params }) =>
          await fetch(`http://localhost:5000/apartment/${params.id}`),
      },
      {
        path: 'my-bookings',
        element: <MyBookings />,
      },
    ],
  },
  {
    path: '/login',
    element: <LogIn />,
  },
  {
    path: '/register',
    element: <Register />,
  },
]);

export default Router;
