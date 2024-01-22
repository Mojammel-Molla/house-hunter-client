import { Outlet } from 'react-router-dom';
import NavBar from '../../pages/home-page/navbar/NavBar';
import Footer from '../../pages/home-page/footer/Footer';

const MainLayOut = () => {
  return (
    <div className="mx-3">
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayOut;
