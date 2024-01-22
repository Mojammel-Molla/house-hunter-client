import { createBrowserRouter } from 'react-router-dom';
import MainLayOut from '../lay-outs/main-layout/MainLayOut';
import Home from '../pages/home-page/home/Home';

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
]);

export default Router;
