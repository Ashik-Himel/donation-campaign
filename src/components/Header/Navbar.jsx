import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex flex-col sm:flex-row gap-6 justify-between items-center py-6">
      <Link to={'/'}>
        <img src="/images/logo.png" alt="Logo" className="max-w-[180px]" />
      </Link>
      <ul className="flex gap-6">
        <li>
          <NavLink to={'/'} className={({isActive}) => isActive ? 'text-[#FF444A] font-bold border-b-2 border-[#FF444A]' : ''}>Home</NavLink>
        </li>
        <li>
          <NavLink to={'/donation'} className={({isActive}) => isActive ? 'text-[#FF444A] font-bold border-b-2 border-[#FF444A]' : ''}>Donation</NavLink>
        </li>
        <li>
          <NavLink to={'/statistics'} className={({isActive}) => isActive ? 'text-[#FF444A] font-bold border-b-2 border-[#FF444A]' : ''}>Statistics</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;