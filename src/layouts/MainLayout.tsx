import tw from 'twin.macro';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

const MainContainer = tw.div`border-red-500 border-2 border-solid flex flex-col w-full h-full`;

interface MainlayoutProps {
  showHeader?: boolean;
}

const MainLayout = ({ showHeader }: MainlayoutProps) => {
  return (
    <MainContainer>
      {showHeader && <Header />}
      <Outlet />
    </MainContainer>
  );
};

export default MainLayout;
