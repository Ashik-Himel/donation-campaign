import { Link, NavLink } from "react-router-dom";
import { RxHamburgerMenu } from 'react-icons/rx';
import { useState } from "react";

const Navbar = () => {
  const [navHidden, setNavHidden] = useState(true);

  return (
    <nav className="flex gap-6 justify-between items-center py-6 relative">
      <Link to={'/'}>
        <img src="/images/logo.png" alt="Logo" className="max-w-[180px]" />
      </Link>
      <ul className="flex flex-col sm:flex-row gap-4 sm:gap-6 absolute sm:static top-[80px] right-0 bg-white sm:[background-color:transparent] p-6 sm:p-0 border sm:border-none border-gray-300 rounded-lg sm:rounded-none shadow-lg sm:shadow-none overflow-hidden sm:overflow-auto h-[155px] sm:!h-auto transition-all sm:transition-none" style={navHidden ? {height: '0', paddingBlock: '0', borderWidth: '0'} : null}>
        <li>
          <NavLink to={'/'} className={({isActive}) => isActive ? 'text-[#FF444A] font-bold border-b-2 border-[#FF444A]' : ''} onClick={() => setNavHidden(!navHidden)}>Home</NavLink>
        </li>
        <li>
          <NavLink to={'/donation'} className={({isActive}) => isActive ? 'text-[#FF444A] font-bold border-b-2 border-[#FF444A]' : ''} onClick={() => setNavHidden(!navHidden)}>Donation</NavLink>
        </li>
        <li>
          <NavLink to={'/statistics'} className={({isActive}) => isActive ? 'text-[#FF444A] font-bold border-b-2 border-[#FF444A]' : ''} onClick={() => setNavHidden(!navHidden)}>Statistics</NavLink>
        </li>
      </ul>
      <div className="border border-gray-500 px-4 py-3 rounded text-lg cursor-pointer sm:hidden" onClick={() => setNavHidden(!navHidden)}>
        <RxHamburgerMenu></RxHamburgerMenu>
      </div>
    </nav>
  );
};

export default Navbar;