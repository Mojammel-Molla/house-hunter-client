import { createBrowserRouter } from 'react-router-dom';
import MainLayOut from '../lay-outs/main-layout/MainLayOut';
import Home from '../pages/home-page/home/Home';
import LogIn from '../components/login/LogIn';
import Register from '../components/register/Register';
import ApartmentDetail from '../pages/home-page/apartment-detail/ApartmentDetail';
import MyBookings from '../pages/my-bookings/MyBookings';
import DashboardLayOut from '../lay-outs/dashboard/DashboardlayOut';
import ApartmentList from '../dashboard/apartment-list/ApartmentList';
import BookingRequests from '../dashboard/booking-requests/BookingRequests';
import AddApartment from '../dashboard/add-apartmeent/AddApartment';

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
    path: '/dashboard',
    element: <DashboardLayOut />,
    children: [
      {
        path: 'apartment-list',
        element: <ApartmentList />,
      },
      {
        path: 'add-apartment',
        element: <AddApartment />,
      },
      {
        path: 'booking-requests',
        element: <BookingRequests />,
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
