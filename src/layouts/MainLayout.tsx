import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import tw from 'twin.macro';

import Header from '@/components/layout/Header';
import Sidebar from '@/components/layout/Sidebar';

interface MainlayoutProps {
  showHeader?: boolean;
}

const MainLayout = ({ showHeader }: MainlayoutProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="drawer lg:drawer-open overflow-auto">
      <input
        id="my-drawer"
        type="checkbox"
        className="drawer-toggle"
        checked={isSidebarOpen}
        readOnly
      />
      <div className="drawer-content h-screen">
        <Header isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <main
          id="content-main"
          className="flex-1 p-4 h-full pt-16 lg:mx-16 lg:ml-60"
        >
          <Outlet />
        </main>
      </div>
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    </div>
  );
};

export default MainLayout;
