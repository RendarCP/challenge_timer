import tw from 'twin.macro';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

const MainContainer = tw.div`border-red-500 border-2 border-solid flex flex-col w-full h-full`;

const MainLayout = () => {
  return (
    <MainContainer>
      <Header />
      <Outlet />
    </MainContainer>
  );
};

export default MainLayout;
