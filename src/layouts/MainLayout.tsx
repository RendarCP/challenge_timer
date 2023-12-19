import Header from '../components/Header';

import React from 'react';
import { Outlet } from 'react-router-dom';
import tw from 'twin.macro';

const MainContainer = tw.div`flex flex-col w-screen h-screen`;

interface MainlayoutProps {
  showHeader?: boolean;
}

const MainLayout = ({ showHeader }: MainlayoutProps) => {
  return (
    <MainContainer>
      {showHeader && <Header />}
      {/* <Header /> */}
      <Outlet />
    </MainContainer>
  );
};

export default MainLayout;
