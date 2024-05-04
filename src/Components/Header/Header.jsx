import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <h2>NavBar</h2>
      <div>
        <Link to={"/"}> Home</Link>
        <Link to={"/users"}> User</Link>
        <Link to={"/posts"}> Post </Link>
        <Link to={"/contact"}> Contact Us</Link>
        <Link to={"/about"}> About Us</Link>
      </div>
    </div>
  );
};

export default Header;
