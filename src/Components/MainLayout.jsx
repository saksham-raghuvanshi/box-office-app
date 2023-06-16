import { Outlet } from 'react-router-dom';
import Navs from './Navs';
import Title from './Title';

const MainLayout = () => {
  return (
    <div>
      <Title />
      <Navs />
      <Outlet />
    </div>
  );
};

export default MainLayout;
