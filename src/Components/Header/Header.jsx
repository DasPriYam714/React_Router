import "./Header.css";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <h2>NavBar</h2>
      <div>
        <Link to={"/"}> Home</Link>
        <NavLink to={"/users"}> User </NavLink>
        <NavLink to={"/posts"}> Post </NavLink>
        <NavLink to={"/simpleForms"}> Simple Forms </NavLink>
        <Link to={"/contact"}> Contact Us</Link>
        <Link to={"/about"}> About Us</Link>
      </div>
    </div>
  );
};

export default Header;
