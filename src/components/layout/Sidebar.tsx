import { sideBarMenus } from '@/constant/layoutCont';
import { useLocation, useNavigate } from 'react-router-dom';

interface ISidebar {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar = ({ isOpen, toggleSidebar }: ISidebar) => {
  const location = useLocation();
  const navigate = useNavigate();
  const handleMenuClick = menu => {
    navigate(menu);
    toggleSidebar();
  };
  return (
    <div className={`drawer-side ${isOpen ? 'lg:drawer-open' : ''}`}>
      <label
        htmlFor="my-drawer"
        className="drawer-overlay"
        onClick={toggleSidebar}
      ></label>
      <ul className="menu p-0 w-60 h-full bg-base-200 text-base-content">
        <div className="bg-base-100 p-2 fixed w-60 z-auto">
          {/* <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl"></a>
        </div> */}
        </div>
        <div className="p-4 mt-16">
          {sideBarMenus.map((menu, index) => {
            return (
              <li key={index}>
                <a
                  className={location.pathname === menu.path ? 'active' : ''}
                  onClick={() => handleMenuClick(menu.path)}
                >
                  {menu.title}
                </a>
              </li>
            );
          })}
          <li>
            <details className="active" open>
              <summary className="active">Timer</summary>
              <ul>
                <li>
                  <a className="active">Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </details>
          </li>
          <li className="mt-auto">
            <a className="text-red-500">Logout</a>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default Sidebar;
