
import {useState} from 'react'
import { Bag, Bars, Search } from "../elements/Logo";
import { DropdownMenu, Sidebar } from "../elements";

const Header = () => {
  const [showSidebar,setShowSidebar] = useState(false)
  return (
    <header className="flex flex-col md:justify-between md:flex-row w-full py-2">
      <div className=" w-full md:w-auto">
        <div className="flex items-center w-full justify-start">
          <div className="px-0.5 w-fit">
            <img
              src="/assets/images/Vector.png"
              className="bg-primary rounded-md w-10 h-10 p-1.5"
              alt="logo"
            />
          </div>
          <h1 className="text-xl font-semibold  px-1">Shop</h1>
          <div onClick={()=>setShowSidebar(!showSidebar)} className=" cursor-pointer px-1 flex items-center">
            <Bars customClass={"text-[#6440FB]"} />
            <span className="text-[#6440FB] px-1">Explore</span>
          </div>
          <div className="flex justify-center items-center bg-gray-100 lg:mx-2.5 md:mx-2 sm:mx-1 mx-1 rounded-md">
            <input
              placeholder="What do you want to buy?"
              className="bg-gray-100 ml-1 placeholder:p-2 p-2 rounded-md placeholder:text-sm"
            />
            <Search customClass={"bg-gray-100 rounded-md lg:mr-3 md:mr-2 sm:mr-1.5 mr-1.5 p-2"} />
          </div>
        </div>
      </div>
      <div className="flex-1 w-full md:w-auto">
        <div className="flex items-center w-full px-2 pr-1 justify-end">
          <DropdownMenu />
          <div className="lg:flex lg:visible hidden items-center  justify-center space-x-2 md:space-x-2">
            <Bag customClass={'mx-3'}/>
            <button className="text-[#1A064F] font-normal border-2 w-24 mx-1 py-1.5 border-[#1A064F] bg-transparent rounded-md">
              <span>Log in</span>
            </button>
            <button className="bg-[#1A064F] font-normal border-2 w-24 mx-1 py-1.5 border-[#1A064F] text-white rounded-md">
              <span>Sign up</span>
            </button>
          </div>
        </div>
      </div>
      {/* mobile sidebar */}
      <div>
        <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar}/>
      </div>
    </header>
  );
};

export default Header;
