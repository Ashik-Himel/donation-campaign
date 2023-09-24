import { NavLink, useLocation } from "react-router-dom";

const Header = () => {
  let location = useLocation();

  return (
    <header className={location.pathname === '/' && "bg-[url('/images/header-bg.jpg'),linear-gradient(rgba(255,255,255,0.9),rgba(255,255,255,0.9))] bg-blend-overlay bg-center bg-cover"}>
      <div className="container">
        
        {/* Navigation Section */}
        <nav className="flex flex-col sm:flex-row gap-6 justify-between items-center py-6">
          <img src="/images/logo.png" alt="Logo" className="max-w-[180px]" />
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

        {/* Hero Section */}
        <section className={location.pathname === '/' ? 'block py-24' : 'hidden'}>
          <h2 className="text-4xl font-bold text-center mb-6">I Grow By Helping People In Need</h2>
          <form className="flex justify-center w-full max-w-[500px] mx-auto">
            <input className="w-full px-4 border border-gray-400 rounded-lg focus:border-[#FF444A] focus:outline-none rounded-e-none" type="search" name="search" id="search" placeholder="Search here" required />
            <button className="btn bg-[#FF444A] text-white hover:bg-[#FF444A] border border-[#FF444A] hover:border-[#FF444A] rounded-s-none relative -left-1">Search</button>
          </form>
        </section>
      </div>
    </header>
  );
};

export default Header;
