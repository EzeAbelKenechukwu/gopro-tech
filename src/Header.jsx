import { Link } from "react-router-dom";
import imgg from "./image/img-g.jpg";
import "./HeaderGo.css";

export const Header = () => {
  return (
    <div className="gopro">
        <img src={imgg} alt="GoPro" />
      <ul className="Navbar">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/service">Service</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </div>
  );
};