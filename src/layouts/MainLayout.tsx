import { BarChart2, Calendar, CheckSquare, Clock } from 'lucide-react';
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import tw from 'twin.macro';

import Header from '@/components/layout/Header';
import Sidebar from '@/components/layout/Sidebar';

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
      <div className="drawer-content flex flex-col h-screen">
        {/* <Header isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} /> */}
        <Header isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <main className="flex-1 p-4 m-16 lg:ml-60">
          <Outlet />
          {/* <h1 className="text-2xl font-bold mb-4">
            Stay on Top of Your Work 👋
          </h1>

          <div className="mb-4">
            <h2 className="text-xl font-semibold mb-2 flex items-center">
              <Calendar className="mr-2" /> Calendar
            </h2>
            <div className="bg-base-200 p-4 rounded-lg">
              Calendar Placeholder
            </div>
          </div>

          <div className="mb-4">
            <h2 className="text-xl font-semibold mb-2 flex items-center">
              <Clock className="mr-2" /> Time Tracker
            </h2>
            <div className="bg-gray-800 text-white p-4 rounded-lg inline-block">
              <span className="text-2xl font-bold">08:40:10</span>
            </div>
          </div>

          <div className="mb-4">
            <h2 className="text-xl font-semibold mb-2 flex items-center">
              <BarChart2 className="mr-2" /> Activity
            </h2>
            <div className="bg-base-200 p-4 rounded-lg">
              Activity Chart Placeholder
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2 flex items-center">
              <CheckSquare className="mr-2" /> Today's Task
            </h2>
            <div className="bg-base-200 p-4 rounded-lg">
              Task List Placeholder
            </div>
          </div> */}
        </main>
      </div>
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    </div>
  );
  // return (
  //   <MainContainer>
  //     {showHeader && <Header />}
  //     {/* <Header /> */}
  //     {/* <div> */}
  //     <div className="drawer">
  //       <input id="my-drawer" type="checkbox" className="drawer-toggle" />
  //       <div className="drawer-content"> ㄹㅇㅁㄴㄹㅇㄴㅁㄹㄴㅁㄹㄴㅁㄹㅁ</div>
  //       <div className="drawer-side">
  //         <label
  //           htmlFor="my-drawer"
  //           aria-label="close sidebar"
  //           className="drawer-overlay"
  //         ></label>
  //         <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
  //           <li>
  //             <a>Sidebar Item 1</a>
  //           </li>
  //           <li>
  //             <a>Sidebar Item 2</a>
  //           </li>
  //         </ul>
  //       </div>
  //     </div>
  //     <LeftSideBar />
  //     <Container>
  //       <Outlet />
  //     </Container>
  //     {/* </div> */}
  //   </MainContainer>
  // );
};

export default MainLayout;
