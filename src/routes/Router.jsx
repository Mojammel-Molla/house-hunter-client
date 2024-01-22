import { createBrowserRouter } from 'react-router-dom';
import MainLayOut from '../lay-outs/main-layout/MainLayOut';
import Home from '../pages/home-page/home/Home';
import LogIn from '../components/login/LogIn';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayOut />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
    ],
  },
  {
    path: '/login',
    element: <LogIn />,
  },
]);

export default Router;
