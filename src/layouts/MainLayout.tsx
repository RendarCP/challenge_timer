import React, { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import tw from 'twin.macro';

import Header from '@/components/layout/Header';
import Sidebar from '@/components/layout/Sidebar';

interface MainlayoutProps {
  showHeader?: boolean;
  showSideBar?: boolean;
}

const scrollActivePath = ['/', '/shared'];

const MainLayout = ({ showHeader, showSideBar }: MainlayoutProps) => {
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  // useEffect(() => {
  //   const rootElement = document.getElementById('root');

  //   if (rootElement) {
  //     // 메인 페이지일 때만 overflow: hidden 적용
  //     if (location.pathname === '/') {
  //       rootElement.style.overflow = 'auto';
  //     } else {
  //       rootElement.style.overflow = 'hidden';
  //     }
  //   }
  // }, [location]);

  const isScroll = scrollActivePath.includes(location.pathname);
  const isLanding = scrollActivePath.includes(location.pathname);

  return (
    <div className="drawer lg:drawer-open">
      <input
        id="my-drawer"
        type="checkbox"
        className="drawer-toggle"
        checked={isSidebarOpen}
        readOnly
      />
      <div style={{ height: '100dvh' }} className="drawer-content h-screen">
        {showHeader && (
          <Header isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        )}
        <main
          id="content-main"
          style={{
            height: '100dvh',
            overflow: isScroll ? 'auto' : 'hidden',
          }}
          className={`relative px-9 ${
            isLanding ? '' : 'mt-16'
          } lg:mx-16 lg:ml-60 ${
            isScroll ? 'overflow-auto' : 'overflow-hidden mt-16'
          }`}
        >
          <Outlet />
        </main>
      </div>
      {showSideBar && (
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      )}
    </div>
  );
};

export default MainLayout;
