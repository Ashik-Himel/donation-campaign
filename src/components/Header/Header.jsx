import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Hero from "./Hero";
import PropTypes from 'prop-types'

const Header = ({handleSearch}) => {
  let location = useLocation();

  return (
    <header className={location.pathname === '/' && "bg-[url('/images/header-bg.jpg'),linear-gradient(rgba(255,255,255,0.9),rgba(255,255,255,0.9))] bg-blend-overlay bg-center bg-cover"}>
      <div className="container">
        <Navbar></Navbar>
        {
          location.pathname === '/' && <Hero handleSearch={handleSearch}></Hero>
        }
      </div>
    </header>
  );
};

Header.propTypes = {
  handleSearch: PropTypes.func
}

export default Header;
