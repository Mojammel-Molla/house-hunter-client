import { Outlet } from 'react-router-dom';
import NavBar from '../../pages/home-page/navbar/NavBar';

const MainLayOut = () => {
  return (
    <div className="mx-3">
      <NavBar></NavBar>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayOut;
