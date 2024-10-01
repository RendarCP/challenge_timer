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

const LeftSideBar = tw.aside`
  border-2
  border-amber-400
  flex-1
`;

interface MainlayoutProps {
  showHeader?: boolean;
}

const MainLayout = ({ showHeader }: MainlayoutProps) => {
  return (
    <MainContainer>
      {showHeader && <Header />}
      {/* <Header /> */}
      {/* <div> */}
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content"> ㄹㅇㅁㄴㄹㅇㄴㅁㄹㄴㅁㄹㄴㅁㄹㅁ</div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
            <li>
              <a>Sidebar Item 1</a>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
          </ul>
        </div>
      </div>
      <LeftSideBar />
      <Container>
        <Outlet />
      </Container>
      {/* </div> */}
    </MainContainer>
  );
};

export default MainLayout;
