import React from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import {NavBarMenuList} from '../lib/Constant'

interface SideBarProps {
  showSidebar: boolean;
  setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar = ({ showSidebar, setShowSidebar }: SideBarProps) => {
  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className={`z-50 fixed inset-y-0 delay-150 duration-150 transform transition-all ${showSidebar?' left-0':' -left-[100%]'} w-full flex flex-col h-screen bg-secondary text-white transition-transform duration-300 transform`}>
      <div className="flex items-center justify-between w-full px-4 py-3">
        <div className="px-0.5 w-fit">
                <img
                src="/assets/images/Vector.png"
                className="bg-primary rounded-md w-10 h-10 p-1.5"
                alt="logo"
                />
        </div>
          <h1 className="text-xl font-semibold  px-1">Shop</h1>
        <button
          className="text-white focus:outline-none "
          onClick={toggleSidebar}
        >
          {showSidebar ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      <nav className={`flex-grow sm:block ${showSidebar ? 'block' : 'hidden'}`}>
        <ul className="p-4">
        {
            NavBarMenuList?.map((x,index)=>(
          <li key={index} className="mb-2">
            <a href="#" className="block text-white hover:text-primary">
              {x?.title}
            </a>
          </li>
            ))
        }
        </ul>
      </nav>
      <div className='flex flex-wrap w-full gap-2'>
        <button className='border border-white rounded-lg px-4 py-2 w-full'>Sign in</button>
        <button className='border border-white rounded-lg px-4 py-2 w-full'>Sign up</button>
      </div>
    </div>
  );
};

export default Sidebar;
