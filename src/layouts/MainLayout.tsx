import React from 'react';
import { Outlet } from 'react-router-dom';
import tw from 'twin.macro';

import Header from '../components/Header';

const MainContainer = tw.div`flex flex-col w-screen h-screen`;
const Container = tw.div`
  flex 
  flex-col 
  justify-center 
  items-center 
  h-full
  w-full
  text-center
  p-8
  overflow-auto
`;

interface MainlayoutProps {
  showHeader?: boolean;
}

const MainLayout = ({ showHeader }: MainlayoutProps) => {
  return (
    <MainContainer>
      {showHeader && <Header />}
      {/* <Header /> */}
      <Container>
        <Outlet />
      </Container>
    </MainContainer>
  );
};

export default MainLayout;
