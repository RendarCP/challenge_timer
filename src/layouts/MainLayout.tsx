import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import tw from 'twin.macro';

import Header from '@/components/layout/Header';
import Sidebar from '@/components/layout/Sidebar';

interface MainlayoutProps {
  showHeader?: boolean;
  showSideBar?: boolean;
}

const MainLayout = ({ showHeader, showSideBar }: MainlayoutProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

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
          style={{ height: '100dvh' }}
          className="relative overflow-hidden px-9 mt-16 lg:mx-16 lg:ml-60"
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
